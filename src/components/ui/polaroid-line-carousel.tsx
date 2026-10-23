import * as React from "react"
import { createPortal } from "react-dom"

/*
 * Polaroid Line Carousel - instant photos pegged to a sagging string.
 * Endless continuous loop: drag or click arrows and prints slide along the string indefinitely.
 */

export type Slide = {
  image: string
  thumbnail?: string
  title?: string
  alt?: string
}

type PolaroidLineCarouselProps = {
  slides: readonly Slide[]
  /** Any CSS length. Default 400px. */
  height?: number | string
  /** Width of a print in px (it shrinks on narrow screens). */
  cardWidth?: number
  /** How far the string sags in the middle, px. */
  sag?: number
  /** How much the prints swing; 0 holds them still. */
  swing?: number
  /** ms per print; 0 turns autoplay off. */
  autoplay?: number
  /** Colour of the string. */
  string?: string
  background?: string
  ink?: string
  onChange?: (index: number) => void
  className?: string
  style?: React.CSSProperties
  ariaLabel?: string
  /** Open the centred photograph in a full-screen viewer when selected. */
  expandable?: boolean
}

// #region logic
function clamp(v: number, a: number, b: number): number {
  return Math.min(b, Math.max(a, v))
}

/** Height of a string sagging by `sag` between (0, y0) and (w, y0), at x. */
function stringY(x: number, w: number, y0: number, sag: number): number {
  const t = clamp(x / w, 0, 1)
  return y0 + 4 * sag * t * (1 - t)
}

/** One step of a critically damped spring toward target. */
function springStep(x: number, v: number, target: number, dt: number, k = 70): [number, number] {
  const c = 2 * Math.sqrt(k)
  const nv = v + (k * (target - x) - c * v) * dt
  return [x + nv * dt, nv]
}

/** One step of a print's swing. */
function swingStep(a: number, w: number, lineVel: number, dt: number, gain: number): [number, number] {
  const nw = w + (-38 * a - 4.2 * w + lineVel * 0.0034 * gain) * dt
  return [clamp(a + nw * dt, -0.6, 0.6), nw]
}
// #endregion logic

const PL_CSS = [
  ".pl-root{position:relative;width:100%;overflow:hidden;isolation:isolate;contain:paint;background:var(--pl-bg);color:var(--pl-ink);user-select:none;-webkit-user-select:none;touch-action:pan-y;outline:none;cursor:grab}",
  ".pl-root[data-drag='1']{cursor:grabbing}",
  ".pl-root:focus-visible{box-shadow:inset 0 0 0 2px var(--pl-ink)}",
  ".pl-string{position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;overflow:visible}",
  ".pl-card{position:absolute;left:0;top:0;width:var(--pl-cw);transform-origin:50% 0;will-change:transform;cursor:inherit}",
  ".pl-root[data-expandable='1'] .pl-card[data-on='1'] .pl-shot{cursor:zoom-in}",
  ".pl-print{margin-top:10px;background:#FFFFFF;padding:12px 12px 0;border-radius:6px;box-shadow:0 4px 10px rgba(32,55,40,.07),0 22px 36px -16px rgba(32,55,40,.22);border:1px solid #d9e1d7;transition:transform .4s cubic-bezier(.2,.7,.2,1),filter .4s ease;position:relative}",
  ".pl-card[data-on='0'] .pl-print{transform:scale(.92);filter:saturate(.85) brightness(.97)}",
  ".pl-card[data-on='1'] .pl-print{transform:scale(1);filter:none;box-shadow:0 6px 14px rgba(32,55,40,.1),0 28px 44px -16px rgba(32,55,40,.28)}",
  ".pl-shot{position:relative;aspect-ratio:1;overflow:hidden;border-radius:3px;background:#E8EFE8}",
  ".pl-shot img{position:absolute;inset:0;width:100%;height:100%;max-width:none;object-fit:contain;display:block;pointer-events:none}",
  ".pl-note-wrap{position:relative;height:42px;display:flex;align-items:center;justify-content:center;padding:0 8px}",
  ".pl-brand{display:inline-flex;align-items:center;justify-content:center;pointer-events:none}",
  ".pl-brand img{height:19px;width:auto;max-width:115px;object-fit:contain;opacity:0.95}",
  ".pl-peg{position:absolute;left:50%;top:0;width:11px;height:28px;margin-left:-5.5px;border-radius:3px;background:linear-gradient(90deg,#d4b68e,#f0dcbe 45%,#c49d6b);box-shadow:0 2px 4px rgba(32,55,40,.25)}",
  ".pl-peg::after{content:'';position:absolute;left:4.5px;top:9px;width:2px;height:8px;background:rgba(80,60,30,.45);border-radius:1px}",
  ".pl-nav-bar{position:absolute;left:0;right:0;bottom:12px;display:flex;align-items:center;justify-content:center;gap:16px;cursor:default;z-index:40;pointer-events:auto}",
  ".pl-btn{appearance:none;width:44px;height:44px;border-radius:50%;border:1.5px solid #d9e1d7;background:#FFFFFF;color:#203728;display:grid;place-items:center;cursor:pointer;transition:all .2s ease;box-shadow:0 2px 8px rgba(32,55,40,.1)}",
  ".pl-btn:hover{background:#3B7F4B;color:#FFFFFF;border-color:#3B7F4B;box-shadow:0 4px 14px rgba(59,127,75,.28);transform:scale(1.06)}",
  ".pl-btn:active{transform:scale(0.95)}",
  ".pl-btn:focus-visible{outline:2px solid #3B7F4B;outline-offset:2px}",
  "@media (min-width:768px){.pl-nav-bar{bottom:0}}",
  ".pl-sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}",
  ".pl-lightbox{position:fixed;inset:0;z-index:9999;display:grid;place-items:center;padding:clamp(18px,4vw,56px);background:rgba(16,29,20,.9);backdrop-filter:blur(8px);cursor:zoom-out}",
  ".pl-lightbox-frame{position:relative;display:grid;place-items:center;max-width:100%;max-height:100%;cursor:default}",
  ".pl-lightbox-img{display:block;width:auto;height:auto;max-width:92vw;max-height:88vh;object-fit:contain;border-radius:8px;box-shadow:0 24px 80px rgba(0,0,0,.45)}",
  ".pl-lightbox-close{position:fixed;top:clamp(16px,3vw,32px);right:clamp(16px,3vw,32px);width:46px;height:46px;border:1px solid rgba(255,255,255,.48);border-radius:50%;display:grid;place-items:center;background:rgba(255,255,255,.96);color:#203728;cursor:pointer;box-shadow:0 8px 28px rgba(0,0,0,.22);transition:transform .2s ease,background .2s ease,color .2s ease}",
  ".pl-lightbox-close:hover{transform:scale(1.05);background:#3B7F4B;color:#fff}",
  ".pl-lightbox-close:focus-visible{outline:3px solid #fff;outline-offset:3px}",
  "@media (prefers-reduced-motion:reduce){.pl-print{transition:none}}",
].join("\n")

export default function PolaroidLineCarousel({
  slides,
  height = 400,
  cardWidth = 260,
  sag = 38,
  swing = 1,
  autoplay = 4500,
  string = "#3B7F4B",
  background = "transparent",
  ink = "#203728",
  onChange,
  className,
  style,
  ariaLabel = "Resultaatfoto's carousel",
  expandable = false,
}: PolaroidLineCarouselProps) {
  const numBase = slides.length || 1

  // Repeat items in a circular ring so the string spans fully across wide screens without stopping
  const loopSlides = React.useMemo(() => {
    if (slides.length === 0) return []
    let arr = [...slides]
    while (arr.length < 24) {
      arr = [...arr, ...slides]
    }
    return arr
  }, [slides])

  const totalItems = loopSlides.length
  const srcs = loopSlides.map((slide) => slide.image)
  const thumbnailSrcs = loopSlides.map((slide) => slide.thumbnail ?? slide.image)
  const [active, setActive] = React.useState(0)
  const [dragging, setDragging] = React.useState(false)
  const [expanded, setExpanded] = React.useState<number | null>(null)
  const [size, setSize] = React.useState({ w: 1200, h: 400, cw: cardWidth })
  const rootRef = React.useRef(null as HTMLDivElement | null)
  const pathRef = React.useRef(null as SVGPathElement | null)
  const closeRef = React.useRef(null as HTMLButtonElement | null)
  const cards = React.useRef([] as (HTMLDivElement | null)[])
  const sim = React.useRef({ off: 0, vel: 0, target: 0, a: [] as number[], w: [] as number[] })
  const drag = React.useRef(null as null | { x: number; off: number; lx: number; lt: number; v: number; moved: boolean })
  const lastTouch = React.useRef(0)
  const activeRef = React.useRef(0)
  const wakeAnimationRef = React.useRef<() => void>(() => undefined)
  const opts = React.useRef({ sag, swing })
  opts.current = { sag, swing }

  const spacing = size.cw * 1.08
  const totalSpan = totalItems * spacing

  React.useEffect(() => {
    const root = rootRef.current
    if (!root) return
    const ro = new ResizeObserver(() => {
      const r = root.getBoundingClientRect()
      const cw = Math.round(Math.max(160, Math.min(cardWidth, r.width * 0.44, r.height * 0.6)))
      setSize({ w: r.width, h: r.height, cw })
    })
    ro.observe(root)
    return () => ro.disconnect()
  }, [cardWidth])

  React.useEffect(() => {
    onChange?.(active)
  }, [active, onChange])

  const closeExpanded = React.useCallback(() => {
    setExpanded(null)
    requestAnimationFrame(() => rootRef.current?.focus())
  }, [])

  React.useEffect(() => {
    if (expanded === null) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    const onWindowKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeExpanded()
    }
    window.addEventListener("keydown", onWindowKeyDown, true)
    requestAnimationFrame(() => closeRef.current?.focus())
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener("keydown", onWindowKeyDown, true)
    }
  }, [closeExpanded, expanded])

  // Continuous animation loop: wraps cards around seamlessly so scrolling never ends
  React.useEffect(() => {
    const root = rootRef.current
    if (!root || totalItems === 0) return
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    let visible = true
    let raf = 0
    let prev = performance.now()
    const S = sim.current

    const frame = (now: number) => {
      raf = 0
      if (!visible) return
      const dt = Math.min(0.033, (now - prev) / 1000)
      prev = now
      const { w, h, cw } = size
      const y0 = Math.max(30, h * 0.15)
      const d = drag.current
      let lineVel: number
      if (d && d.moved) {
        lineVel = d.v * 1000
      } else {
        const before = S.off
        ;[S.off, S.vel] = springStep(S.off, S.vel, S.target, dt)
        lineVel = -(S.off - before) / Math.max(dt, 1e-3)
      }
      const o = opts.current
      const g = reduce ? 0 : o.swing

      // Wrap coordinate space periodically to keep numerical stability
      if (Math.abs(S.off) > totalSpan * 8) {
        const wrapChunk = Math.floor(S.off / totalSpan) * totalSpan
        S.off -= wrapChunk
        S.target -= wrapChunk
        if (d) d.off -= wrapChunk
      }

      let closestDist = Infinity
      let nearestIndex = 0

      for (let i = 0; i < totalItems; i++) {
        const el = cards.current[i]
        if (!el) continue

        // Wrap each card's relative position into a continuous circular window [-totalSpan/2, totalSpan/2)
        const rawDiff = i * spacing - S.off
        const diff = ((rawDiff % totalSpan) + totalSpan * 1.5) % totalSpan - totalSpan / 2
        const x = w / 2 + diff
        const absDiff = Math.abs(diff)

        if (absDiff < closestDist) {
          closestDist = absDiff
          nearestIndex = i % numBase
        }

        if (x < -cw * 1.6 || x > w + cw * 1.6) {
          el.style.visibility = "hidden"
          continue
        }
        el.style.visibility = "visible"
        const isCentered = absDiff < spacing * 0.48
        el.setAttribute("data-on", isCentered ? "1" : "0")
        if (isCentered) el.removeAttribute("aria-hidden")
        else el.setAttribute("aria-hidden", "true")

        let a = S.a[i] || 0
        let av = S.w[i] || 0
        ;[a, av] = swingStep(a, av, lineVel, dt, g)
        if (g) a += Math.sin(now / 1300 + i * 1.7) * 0.0009 * g
        S.a[i] = a
        S.w[i] = av

        const y = stringY(x, w, y0, o.sag) - 6
        el.style.transform = `translate(${(x - cw / 2).toFixed(1)}px,${y.toFixed(1)}px) rotate(${a.toFixed(4)}rad)`
        el.style.zIndex = String(Math.max(1, Math.round(50 - absDiff / 30)))
      }

      pathRef.current?.setAttribute("d", `M0 ${y0} Q${w / 2} ${y0 + 2 * o.sag} ${w} ${y0}`)
      if (nearestIndex !== activeRef.current) {
        activeRef.current = nearestIndex
        setActive(nearestIndex)
      }
      const isMoving = Boolean(d?.moved) || Math.abs(S.target - S.off) > 0.05 || Math.abs(S.vel) > 0.05
      if (isMoving || o.swing > 0 || autoplay > 0) raf = requestAnimationFrame(frame)
    }

    const wakeAnimation = () => {
      if (!visible || raf) return
      prev = performance.now()
      raf = requestAnimationFrame(frame)
    }
    wakeAnimationRef.current = wakeAnimation

    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting
      if (visible) wakeAnimation()
    })
    io.observe(root)
    wakeAnimation()
    return () => {
      cancelAnimationFrame(raf)
      io.disconnect()
      wakeAnimationRef.current = () => undefined
    }
  }, [autoplay, size, spacing, totalItems, totalSpan, numBase])

  // Continuous autoplay in an endless loop
  React.useEffect(() => {
    if (!autoplay || numBase < 2) return
    const t = window.setInterval(() => {
      if (document.hidden || drag.current || performance.now() - lastTouch.current < autoplay) return
      sim.current.target += spacing
      wakeAnimationRef.current()
    }, autoplay)
    return () => window.clearInterval(t)
  }, [autoplay, numBase, spacing])

  const onDown = (e: React.PointerEvent) => {
    if ((e.target as HTMLElement).closest(".pl-nav-bar")) return
    lastTouch.current = performance.now()
    drag.current = { x: e.clientX, off: sim.current.off, lx: e.clientX, lt: e.timeStamp, v: 0, moved: false }
    wakeAnimationRef.current()
  }

  const onMove = (e: React.PointerEvent) => {
    const d = drag.current
    if (!d) return
    const dx = e.clientX - d.x
    if (!d.moved && Math.abs(dx) > 5) {
      d.moved = true
      setDragging(true)
      rootRef.current?.setPointerCapture(e.pointerId)
    }
    if (!d.moved) return
    const dt = Math.max(1, e.timeStamp - d.lt)
    d.v = 0.7 * ((e.clientX - d.lx) / dt) + 0.3 * d.v
    d.lx = e.clientX
    d.lt = e.timeStamp
    sim.current.off = d.off - dx
    wakeAnimationRef.current()
  }

  const onUp = (e: React.PointerEvent) => {
    const d = drag.current
    drag.current = null
    lastTouch.current = performance.now()
    if (!d) return
    if (d.moved) {
      setDragging(false)
      sim.current.vel = -d.v * 1000
      sim.current.target = Math.round((sim.current.off - d.v * 180) / spacing) * spacing
      wakeAnimationRef.current()
      return
    }
    const card = (e.target as HTMLElement).closest(".pl-shot")?.closest("[data-i]")
    if (card) {
      const cardIdx = Number(card.getAttribute("data-i"))
      const rawDiff = cardIdx * spacing - sim.current.off
      const diff = ((rawDiff % totalSpan) + totalSpan * 1.5) % totalSpan - totalSpan / 2
      if (expandable && Math.abs(diff) < spacing * 0.48) setExpanded(cardIdx % numBase)
      else {
        sim.current.target = sim.current.off + diff
        wakeAnimationRef.current()
      }
    }
  }

  const onCancel = () => {
    drag.current = null
    lastTouch.current = performance.now()
    setDragging(false)
  }

  // Infinite looping forward and backward: never stops
  const step = (dir: number) => {
    lastTouch.current = performance.now()
    sim.current.target += dir * spacing
    wakeAnimationRef.current()
  }

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") step(1)
    else if (e.key === "ArrowLeft") step(-1)
    else if (expandable && (e.key === "Enter" || e.key === " ")) setExpanded(activeRef.current)
    else return
    e.preventDefault()
  }

  return (
    <div
      ref={rootRef}
      className={["pl-root", className].filter(Boolean).join(" ")}
      style={{
        height: typeof height === "number" ? `${height}px` : height,
        ["--pl-bg" as string]: background,
        ["--pl-ink" as string]: ink,
        ["--pl-cw" as string]: size.cw + "px",
        ...style,
      }}
      data-drag={dragging ? "1" : "0"}
      data-expandable={expandable ? "1" : "0"}
      role="region"
      aria-roledescription="carousel"
      aria-label={ariaLabel}
      tabIndex={0}
      onKeyDown={onKey}
      onPointerDown={onDown}
      onPointerMove={onMove}
      onPointerUp={onUp}
      onPointerCancel={onCancel}
    >
      <style>{PL_CSS}</style>
      <svg className="pl-string" aria-hidden="true">
        <path ref={pathRef} fill="none" stroke={string} strokeWidth="1.75" strokeLinecap="round" />
      </svg>

      {loopSlides.map((sl, i) => (
        <div
          key={i}
          className="pl-card"
          data-i={i}
          data-on={i % numBase === active ? "1" : "0"}
          ref={(el) => void (cards.current[i] = el)}
          aria-hidden="true"
        >
          <div className="pl-print">
            <div className="pl-shot">
              {thumbnailSrcs[i] ? (
                <img
                  src={thumbnailSrcs[i]}
                  alt={sl.alt || sl.title || ""}
                  draggable={false}
                  loading="lazy"
                  decoding="async"
                />
              ) : null}
            </div>
            <div className="pl-note-wrap">
              <div className="pl-brand" aria-label="Slijpmaat">
                <img src="/assets/image08.png" alt="Slijpmaat" />
              </div>
            </div>
          </div>
          <div className="pl-peg" />
        </div>
      ))}

      {/* Only Left and Right navigation buttons */}
      <div className="pl-nav-bar">
        <button
          type="button"
          className="pl-btn"
          aria-label="Vorige foto"
          onClick={() => step(-1)}
        >
          <svg width="20" height="20" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M10 3 5 8l5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          type="button"
          className="pl-btn"
          aria-label="Volgende foto"
          onClick={() => step(1)}
        >
          <svg width="20" height="20" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="m6 3 5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      <div className="pl-sr" aria-live="polite">
        {"Foto " + (active + 1) + " van " + numBase + (slides[active]?.title ? ": " + slides[active].title : "")}
      </div>
      {expanded !== null && srcs[expanded]
        ? createPortal(
            <div
              className="pl-lightbox"
              role="dialog"
              aria-modal="true"
              aria-label="Vergrote foto"
              onPointerDown={(event) => event.stopPropagation()}
              onKeyDown={(event) => {
                event.stopPropagation()
                if (event.key === "Tab") {
                  event.preventDefault()
                  closeRef.current?.focus()
                }
              }}
              onClick={closeExpanded}
            >
              <div className="pl-lightbox-frame" onClick={(event) => event.stopPropagation()}>
                <img
                  className="pl-lightbox-img"
                  src={srcs[expanded]}
                  alt={slides[expanded]?.alt || slides[expanded]?.title || "Vergrote resultaatfoto"}
                />
              </div>
              <button
                ref={closeRef}
                type="button"
                className="pl-lightbox-close"
                aria-label="Vergrote foto sluiten"
                onClick={closeExpanded}
              >
                <svg width="22" height="22" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="m5 5 10 10M15 5 5 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </button>
            </div>,
            document.body,
          )
        : null}
    </div>
  )
}
