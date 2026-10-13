"use client"

import * as React from "react"
import { createPortal } from "react-dom"

/*
 * Polaroid Line Carousel - instant photos pegged to a sagging string. Drag the
 * line (or use the arrows) and the prints slide along it, swinging on their
 * pegs with the speed you give them and settling back with a little
 * overshoot; even at rest they sway in a light breeze. The one in the middle
 * is the one you're looking at.
 *
 * Drag, click a print, arrows and autoplay. Slides without an `image` get a
 * painted landscape, so it works with no assets at all.
 */

export type LandPalette = "dawn" | "alpine" | "dusk" | "mist"

export type Slide = {
  image?: string
  title?: string
  caption?: string
  alt?: string
  /** Palette and seed of the painted landscape used when `image` is empty. */
  palette?: LandPalette
  seed?: number
}

export type PolaroidLineCarouselProps = {
  slides?: Slide[]
  /** Any CSS length. Default 420px. */
  height?: number | string
  /** Width of a print in px (it shrinks on narrow screens). */
  cardWidth?: number
  /** How far the string sags in the middle, px. */
  sag?: number
  /** How much the prints swing; 0 holds them still. */
  swing?: number
  /** ms per print; 0 turns autoplay off. It waits while someone is interacting. */
  autoplay?: number
  /** Colour of the string and pegs. */
  string?: string
  background?: string
  ink?: string
  onChange?: (index: number) => void
  className?: string
  style?: React.CSSProperties
  ariaLabel?: string
  /** Keep moving in the same direction after the final slide. */
  infinite?: boolean
  /** Show captions and the numeric counter below the line. */
  showDetails?: boolean
  /** Show the Slijpmaat logo in the lower edge of every print. */
  showLogo?: boolean
  /** Choose whether photographs are cropped or shown in full. */
  imageFit?: "cover" | "contain"
  /** Open the centred photograph in a full-screen viewer when selected. */
  expandable?: boolean
}

// #region logic
export function wrap(i: number, n: number): number {
  return n ? ((i % n) + n) % n : 0
}

export function clamp(v: number, a: number, b: number): number {
  return Math.min(b, Math.max(a, v))
}

/** Height of a string sagging by `sag` between (0, y0) and (w, y0), at x. */
export function stringY(x: number, w: number, y0: number, sag: number): number {
  const t = clamp(x / w, 0, 1)
  return y0 + 4 * sag * t * (1 - t)
}

/** One step of a critically damped spring toward target. */
export function springStep(x: number, v: number, target: number, dt: number, k = 70): [number, number] {
  const c = 2 * Math.sqrt(k)
  const nv = v + (k * (target - x) - c * v) * dt
  return [x + nv * dt, nv]
}

/** One step of a print's swing. lineVel is the prints' on-screen speed (px/s, + = moving right); a print lags behind the motion, is pulled back by gravity and damped. */
export function swingStep(a: number, w: number, lineVel: number, dt: number, gain: number): [number, number] {
  const nw = w + (-38 * a - 4.2 * w + lineVel * 0.0034 * gain) * dt
  return [clamp(a + nw * dt, -0.6, 0.6), nw]
}

/** Index of the print nearest the centre for a line offset. */
export function nearestAt(off: number, spacing: number, n: number): number {
  return clamp(Math.round(off / spacing), 0, Math.max(0, n - 1))
}

export function pad2(n: number): string {
  return n < 10 ? "0" + n : String(n)
}
// #endregion logic

/* ------------------------------------------------------- painted images */

const PALETTES = {
  dawn: { top: "#e7b7a5", bottom: "#f8e8d6", sun: "#fff4df", far: "#d2b2bb", near: "#3a2a3b", mist: "255,240,232" },
  alpine: { top: "#7ea5c8", bottom: "#e3ecf2", sun: "#ffffff", far: "#a9bfd0", near: "#1c3044", mist: "236,244,250" },
  dusk: { top: "#2a2450", bottom: "#ef8d60", sun: "#ffd9a6", far: "#93607c", near: "#18121f", mist: "255,196,160" },
  mist: { top: "#c4d0cb", bottom: "#eef1ec", sun: "#ffffff", far: "#aebcb5", near: "#2c3a33", mist: "246,248,245" },
}

function mulberry32(seed: number): () => number {
  let a = seed >>> 0
  return () => {
    a = (a + 0x6d2b79f5) >>> 0
    let t = a
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}
function hexRgb(h: string): [number, number, number] {
  const v = parseInt(h.replace("#", ""), 16)
  return [(v >> 16) & 255, (v >> 8) & 255, v & 255]
}
function mixRgb(a: string, b: string, t: number): string {
  const A = hexRgb(a)
  const B = hexRgb(b)
  return "rgb(" + A.map((v, i) => Math.round(v + (B[i] - v) * t)).join(",") + ")"
}

// A layered-ridge landscape: sky, a low sun, five ridges fading into haze with
// mist between them, a tree line on the nearest, film grain. Painted once.
function paintLandscape(seed: number, palette: LandPalette, w = 1600, h = 1000): string {
  if (typeof document === "undefined") return ""
  const c = document.createElement("canvas")
  c.width = w
  c.height = h
  const g = c.getContext("2d")
  if (!g) return ""
  const P = PALETTES[palette] ?? PALETTES.dawn
  const r = mulberry32(seed * 104729 + 7)

  const sky = g.createLinearGradient(0, 0, 0, h * 0.72)
  sky.addColorStop(0, P.top)
  sky.addColorStop(1, P.bottom)
  g.fillStyle = sky
  g.fillRect(0, 0, w, h)
  const sx = w * (0.22 + r() * 0.56)
  const sy = h * (0.26 + r() * 0.16)
  const halo = g.createRadialGradient(sx, sy, 0, sx, sy, w * 0.45)
  halo.addColorStop(0, "rgba(" + hexRgb(P.sun).join(",") + ",.85)")
  halo.addColorStop(0.08, "rgba(" + hexRgb(P.sun).join(",") + ",.55)")
  halo.addColorStop(1, "rgba(" + hexRgb(P.sun).join(",") + ",0)")
  g.fillStyle = halo
  g.fillRect(0, 0, w, h)
  g.fillStyle = P.sun
  g.beginPath()
  g.arc(sx, sy, h * 0.045, 0, Math.PI * 2)
  g.fill()

  const layers = 5
  for (let L = 0; L < layers; L++) {
    const k = L / (layers - 1)
    const base = h * (0.42 + k * 0.4)
    const amp = h * (0.07 + k * 0.1)
    const ph = [r(), r(), r(), r()].map((v) => v * Math.PI * 2)
    const fr = [1.3 + r(), 3.1 + r() * 2, 7 + r() * 4, 17 + r() * 8]
    const ridge = (x: number) => {
      const u = x / w
      return (
        base -
        amp *
          (0.55 * Math.sin(u * fr[0] + ph[0]) +
            0.28 * Math.sin(u * fr[1] + ph[1]) +
            0.12 * Math.abs(Math.sin(u * fr[2] + ph[2])) +
            0.05 * Math.sin(u * fr[3] + ph[3]))
      )
    }
    const mist = g.createLinearGradient(0, base - amp * 1.4, 0, base + amp * 0.4)
    mist.addColorStop(0, "rgba(" + P.mist + ",0)")
    mist.addColorStop(1, "rgba(" + P.mist + "," + (0.55 - k * 0.35).toFixed(2) + ")")
    g.fillStyle = mist
    g.fillRect(0, base - amp * 1.4, w, amp * 1.8)
    const body = g.createLinearGradient(0, base - amp, 0, h)
    body.addColorStop(0, mixRgb(P.far, P.near, Math.pow(k, 1.3)))
    body.addColorStop(1, mixRgb(P.far, P.near, Math.min(1, Math.pow(k, 1.3) + 0.18)))
    g.fillStyle = body
    g.beginPath()
    g.moveTo(0, h)
    for (let x = 0; x <= w; x += 6) g.lineTo(x, ridge(x))
    g.lineTo(w, h)
    g.closePath()
    g.fill()
    if (L >= layers - 2) {
      g.fillStyle = mixRgb(P.far, P.near, Math.min(1, Math.pow(k, 1.3) + 0.08))
      for (let x = 0; x < w; x += 7 + r() * 9) {
        if (r() < 0.35) continue
        const y = ridge(x) + 2
        const th = h * (0.025 + r() * 0.035) * (0.6 + k)
        const tw = th * 0.32
        g.beginPath()
        g.moveTo(x, y - th)
        g.lineTo(x + tw, y)
        g.lineTo(x - tw, y)
        g.closePath()
        g.fill()
      }
    }
  }

  const vig = g.createRadialGradient(w / 2, h * 0.45, h * 0.3, w / 2, h / 2, w * 0.78)
  vig.addColorStop(0, "rgba(0,0,0,0)")
  vig.addColorStop(1, "rgba(0,0,0,.32)")
  g.fillStyle = vig
  g.fillRect(0, 0, w, h)
  const grain = g.getImageData(0, 0, w, h)
  const d = grain.data
  for (let i = 0; i < d.length; i += 4) {
    const v = (r() - 0.5) * 14
    d[i] += v
    d[i + 1] += v
    d[i + 2] += v
  }
  g.putImageData(grain, 0, 0)
  return c.toDataURL("image/jpeg", 0.88)
}

const DEFAULT_SLIDES: Slide[] = [
  { title: "Koksmes op waterstenen", caption: "Traditioneel Japans slijpambacht op Shapton stenen.", image: "/assets/werkwijze/03-slijpen.jpg" },
  { title: "Vlijmscherpe snede", caption: "Microscopische braam zorgvuldig verwijderd op leer.", image: "/assets/resultaten/06-snede-bijl.jpeg" },
  { title: "Mes met Slijpmaat sticker", caption: "Klaar voor jarenlang soepel en veilig snijden in de keuken.", image: "/assets/resultaten/07-mes-met-slijpmaat-sticker.jpeg" },
  { title: "Stenen & profiel", caption: "Nauwkeurige hoekselectie afgestemd op de staalsoort.", image: "/assets/werkwijze/02-stenen-kiezen.jpg" },
  { title: "Lemmet beoordelen", caption: "Originele curve en dikte achter de vouw gerespecteerd.", image: "/assets/werkwijze/01-beoordelen.jpg" },
  { title: "Afwerken op soepel leer", caption: "Gepolijste snede voor langdurig behoud van fabrieksscherpte.", image: "/assets/werkwijze/04-afwerken.jpg" },
]

// Every slide as an image URL; slides without one are painted after mount.
function useSlideImages(slides: Slide[]): string[] {
  const key = slides.map((s) => s.image || (s.palette || "dawn") + ":" + (s.seed ?? 1)).join("|")
  const [painted, setPainted] = React.useState(() => slides.map(() => ""))
  React.useEffect(() => {
    setPainted(slides.map((s, i) => (s.image ? "" : paintLandscape(s.seed ?? i + 1, s.palette || "dawn"))))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key])
  return slides.map((s, i) => s.image || painted[i] || "")
}

const PL_CSS = [
  ".pl-root{position:relative;width:100%;overflow:hidden;background:var(--pl-bg);color:var(--pl-ink);user-select:none;-webkit-user-select:none;touch-action:pan-y;outline:none;cursor:grab}",
  ".pl-root[data-drag='1']{cursor:grabbing}",
  ".pl-root:focus-visible{box-shadow:inset 0 0 0 2px var(--pl-ink)}",
  ".pl-string{position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;overflow:visible}",
  ".pl-card{position:absolute;left:0;top:0;width:var(--pl-cw);transform-origin:50% 0;will-change:transform;cursor:inherit}",
  ".pl-root[data-expandable='1'] .pl-card[data-on='1'] .pl-shot{cursor:zoom-in}",
  ".pl-print{margin-top:10px;background:#FFFFFF;padding:12px 12px 0;border-radius:4px;box-shadow:0 3px 6px rgba(32,55,40,.08),0 20px 32px -16px rgba(32,55,40,.22);border:1px solid #d9e1d7;transition:transform .5s cubic-bezier(.2,.7,.2,1),filter .5s ease;position:relative}",
  ".pl-card[data-on='0'] .pl-print{transform:scale(.9);filter:saturate(.78) brightness(.97)}",
  ".pl-shot{position:relative;aspect-ratio:1;overflow:hidden;border-radius:2px;background:#E8EFE8}",
  ".pl-shot img{position:absolute;inset:0;width:100%;height:100%;max-width:none;object-fit:var(--pl-fit);display:block;pointer-events:none}",
  ".pl-note-wrap{position:relative;height:50px;display:flex;align-items:center;padding:0 4px 4px}",
  ".pl-note{font-family:'Instrument Sans',sans-serif;font-weight:700;font-size:13.5px;line-height:1.2;color:#203728;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;padding-right:36px}",
  ".pl-brand{position:absolute;right:4px;bottom:9px;display:inline-flex;align-items:center;opacity:0.85;pointer-events:none}",
  ".pl-brand img{height:18px;width:auto;object-fit:contain}",
  ".pl-peg{position:absolute;left:50%;top:0;width:11px;height:28px;margin-left:-5.5px;border-radius:3px;background:linear-gradient(90deg,#d4b68e,#f0dcbe 45%,#c49d6b);box-shadow:0 2px 4px rgba(32,55,40,.25)}",
  ".pl-peg::after{content:'';position:absolute;left:4.5px;top:9px;width:2px;height:8px;background:rgba(80,60,30,.45);border-radius:1px}",
  ".pl-bar{position:absolute;left:clamp(16px,4vw,56px);right:clamp(16px,4vw,56px);bottom:clamp(16px,3vh,32px);display:flex;align-items:center;gap:clamp(12px,2vw,24px);cursor:default}",
  ".pl-bar[data-details='0']{justify-content:space-between}",
  ".pl-cap{flex:1;min-width:0;overflow:hidden;padding-bottom:.15em}",
  ".pl-cap>*{display:block;animation:pl-in .55s cubic-bezier(.2,.8,.2,1) both}",
  ".pl-title{font-family:'Instrument Sans',sans-serif;font-weight:700;font-size:clamp(18px,2.2vw,24px);line-height:1.15;color:#3B7F4B;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}",
  ".pl-sub{margin-top:3px;font-family:'Inter',sans-serif;font-weight:400;font-size:13px;line-height:1.4;color:#657068}",
  ".pl-count{font-family:'Instrument Sans',sans-serif;font-weight:700;font-size:13px;letter-spacing:.08em;color:#3B7F4B}",
  ".pl-count b{color:#203728;font-weight:800}",
  ".pl-btn{appearance:none;width:42px;height:42px;border-radius:50%;border:1.5px solid #d9e1d7;background:#FFFFFF;color:#203728;display:grid;place-items:center;cursor:pointer;transition:all .2s ease;box-shadow:0 1px 3px rgba(32,55,40,.06)}",
  ".pl-btn:hover{background:#3B7F4B;color:#FFFFFF;border-color:#3B7F4B;box-shadow:0 4px 10px rgba(59,127,75,.25)}",
  ".pl-btn:focus-visible{outline:2px solid #3B7F4B;outline-offset:2px}",
  ".pl-sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}",
  ".pl-lightbox{position:fixed;inset:0;z-index:9999;display:grid;place-items:center;padding:clamp(18px,4vw,56px);background:rgba(16,29,20,.9);backdrop-filter:blur(8px);cursor:zoom-out}",
  ".pl-lightbox-frame{position:relative;display:grid;place-items:center;max-width:100%;max-height:100%;cursor:default}",
  ".pl-lightbox-img{display:block;width:auto;height:auto;max-width:92vw;max-height:88vh;object-fit:contain;border-radius:8px;box-shadow:0 24px 80px rgba(0,0,0,.45)}",
  ".pl-lightbox-close{position:fixed;top:clamp(16px,3vw,32px);right:clamp(16px,3vw,32px);width:46px;height:46px;border:1px solid rgba(255,255,255,.48);border-radius:50%;display:grid;place-items:center;background:rgba(255,255,255,.96);color:#203728;cursor:pointer;box-shadow:0 8px 28px rgba(0,0,0,.22);transition:transform .2s ease,background .2s ease,color .2s ease}",
  ".pl-lightbox-close:hover{transform:scale(1.05);background:#3B7F4B;color:#fff}",
  ".pl-lightbox-close:focus-visible{outline:3px solid #fff;outline-offset:3px}",
  "@keyframes pl-in{from{transform:translateY(100%);opacity:0}to{transform:none;opacity:1}}",
  "@media (prefers-reduced-motion:reduce){.pl-cap>*{animation:none}.pl-print{transition:none}}",
].join("\n")

export default function PolaroidLineCarousel({
  slides = DEFAULT_SLIDES,
  height = 460,
  cardWidth = 280,
  sag = 42,
  swing = 1,
  autoplay = 4500,
  string = "#3B7F4B",
  background = "transparent",
  ink = "#203728",
  onChange,
  className,
  style,
  ariaLabel = "Resultaatfoto's carousel",
  infinite = false,
  showDetails = true,
  showLogo = true,
  imageFit = "cover",
  expandable = false,
}: PolaroidLineCarouselProps) {
  const n = slides.length
  const renderN = infinite && n > 1 ? n * 3 : n
  const srcs = useSlideImages(slides)
  const [active, setActive] = React.useState(0)
  const [dragging, setDragging] = React.useState(false)
  const [expanded, setExpanded] = React.useState<number | null>(null)
  const [size, setSize] = React.useState({ w: 1200, h: 460, cw: cardWidth })
  const rootRef = React.useRef(null as HTMLDivElement | null)
  const pathRef = React.useRef(null as SVGPathElement | null)
  const closeRef = React.useRef(null as HTMLButtonElement | null)
  const cards = React.useRef([] as (HTMLDivElement | null)[])
  const sim = React.useRef({ off: 0, vel: 0, target: 0, a: [] as number[], w: [] as number[] })
  const drag = React.useRef(null as null | { x: number; off: number; lx: number; lt: number; v: number; moved: boolean })
  const lastTouch = React.useRef(0)
  const activeRef = React.useRef(0)
  const activeVirtualRef = React.useRef(infinite ? n : 0)
  const opts = React.useRef({ sag, swing })
  opts.current = { sag, swing }

  const spacing = size.cw * 1.08
  const goTo = React.useCallback(
    (i: number) => {
      const next = clamp(i, 0, Math.max(0, renderN - 1))
      activeVirtualRef.current = next
      sim.current.target = next * spacing
    },
    [renderN, spacing],
  )

  React.useEffect(() => {
    const root = rootRef.current
    if (!root) return
    const ro = new ResizeObserver(() => {
      const r = root.getBoundingClientRect()
      const cw = Math.round(Math.max(160, Math.min(cardWidth, r.width * 0.44, r.height * 0.58)))
      setSize({ w: r.width, h: r.height, cw })
    })
    ro.observe(root)
    return () => ro.disconnect()
  }, [cardWidth])

  // keep the target on the active print when the spacing changes
  React.useEffect(() => {
    const virtual = infinite && n > 1 ? n + activeRef.current : activeRef.current
    activeVirtualRef.current = virtual
    sim.current.target = virtual * spacing
    sim.current.off = virtual * spacing
  }, [infinite, n, spacing])

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

  // the simulation, written straight to the DOM each frame
  React.useEffect(() => {
    const root = rootRef.current
    if (!root) return
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
      const y0 = Math.max(34, h * 0.16)
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
      if (!drag.current && infinite && n > 1 && Math.abs(S.off - S.target) < 0.15 && Math.abs(S.vel) < 0.15) {
        const settled = Math.round(S.target / spacing)
        if (settled < n) {
          S.off += n * spacing
          S.target += n * spacing
          activeVirtualRef.current = settled + n
        } else if (settled >= n * 2) {
          S.off -= n * spacing
          S.target -= n * spacing
          activeVirtualRef.current = settled - n
        }
      }
      const near = nearestAt(S.off, spacing, renderN)
      for (let i = 0; i < renderN; i++) {
        const el = cards.current[i]
        if (!el) continue
        const x = w / 2 + i * spacing - S.off
        if (x < -cw * 1.5 || x > w + cw * 1.5) {
          el.style.visibility = "hidden"
          continue
        }
        el.style.visibility = "visible"
        let a = S.a[i] || 0
        let av = S.w[i] || 0
        ;[a, av] = swingStep(a, av, lineVel, dt, g)
        if (g) a += Math.sin(now / 1300 + i * 1.7) * 0.0009 * g
        S.a[i] = a
        S.w[i] = av
        const y = stringY(x, w, y0, o.sag) - 6
        el.style.transform = "translate(" + (x - cw / 2).toFixed(1) + "px," + y.toFixed(1) + "px) rotate(" + a.toFixed(4) + "rad)"
        const isNear = i === near
        el.dataset.on = isNear ? "1" : "0"
        if (isNear) el.removeAttribute("aria-hidden")
        else el.setAttribute("aria-hidden", "true")
        el.style.zIndex = String(i === near ? renderN + 1 : renderN - Math.abs(i - near))
      }
      pathRef.current?.setAttribute("d", "M0 " + y0 + " Q" + w / 2 + " " + (y0 + 2 * o.sag) + " " + w + " " + y0)
      const logicalNear = wrap(near, n)
      activeVirtualRef.current = near
      if (logicalNear !== activeRef.current) {
        activeRef.current = logicalNear
        setActive(logicalNear)
      }
      raf = requestAnimationFrame(frame)
    }
    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting
      if (visible && !raf) {
        prev = performance.now()
        raf = requestAnimationFrame(frame)
      }
    })
    io.observe(root)
    raf = requestAnimationFrame(frame)
    return () => {
      cancelAnimationFrame(raf)
      io.disconnect()
    }
  }, [size, spacing, n, renderN, infinite])

  // autoplay continues forward through the repeated slide sets
  React.useEffect(() => {
    if (!autoplay || n < 2) return
    const t = window.setInterval(() => {
      if (document.hidden || drag.current || performance.now() - lastTouch.current < autoplay) return
      goTo(Math.round(sim.current.target / spacing) + 1)
    }, autoplay)
    return () => window.clearInterval(t)
  }, [autoplay, n, goTo])

  const onDown = (e: React.PointerEvent) => {
    if ((e.target as HTMLElement).closest(".pl-bar")) return
    lastTouch.current = performance.now()
    drag.current = { x: e.clientX, off: sim.current.off, lx: e.clientX, lt: e.timeStamp, v: 0, moved: false }
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
    const max = (renderN - 1) * spacing
    let off = d.off - dx
    if (off < 0) off *= 0.35
    if (off > max) off = max + (off - max) * 0.35
    sim.current.off = off
  }
  const onUp = (e: React.PointerEvent) => {
    const d = drag.current
    drag.current = null
    lastTouch.current = performance.now()
    if (!d) return
    if (d.moved) {
      setDragging(false)
      sim.current.vel = -d.v * 1000
      goTo(nearestAt(sim.current.off - d.v * 180, spacing, renderN))
      return
    }
    const card = (e.target as HTMLElement).closest("[data-i]")
    if (card) {
      const index = Number(card.getAttribute("data-i"))
      if (expandable && index === activeVirtualRef.current) setExpanded(wrap(index, n))
      else goTo(index)
    }
  }
  const step = (dir: number) => {
    lastTouch.current = performance.now()
    goTo(Math.round(sim.current.target / spacing) + dir)
  }
  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") step(1)
    else if (e.key === "ArrowLeft") step(-1)
    else if (expandable && (e.key === "Enter" || e.key === " ")) setExpanded(activeRef.current)
    else return
    e.preventDefault()
  }

  const s = slides[active] || {}

  return (
    <div
      ref={rootRef}
      className={["pl-root", className].filter(Boolean).join(" ")}
      style={{
        height: typeof height === "number" ? `${height}px` : height,
        ["--pl-bg" as string]: background,
        ["--pl-ink" as string]: ink,
        ["--pl-muted" as string]: "#657068",
        ["--pl-line" as string]: "#d9e1d7",
        ["--pl-cw" as string]: size.cw + "px",
        ["--pl-fit" as string]: imageFit,
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
      onPointerCancel={onUp}
    >
      <style>{PL_CSS}</style>
      <svg className="pl-string" aria-hidden="true">
        <path ref={pathRef} fill="none" stroke={string} strokeWidth="1.75" strokeLinecap="round" />
      </svg>
      {Array.from({ length: renderN }, (_, i) => {
        const logicalIndex = wrap(i, n)
        const sl = slides[logicalIndex]
        return (
          <div key={`${logicalIndex}-${i}`} className="pl-card" data-i={i} data-on={i === activeVirtualRef.current ? "1" : "0"} ref={(el) => void (cards.current[i] = el)} aria-hidden={i === activeVirtualRef.current ? undefined : true}>
            <div className="pl-print">
              <div className="pl-shot">
                {srcs[logicalIndex] ? <img src={srcs[logicalIndex]} alt={sl.alt || sl.title || ""} draggable={false} /> : null}
              </div>
              <div className="pl-note-wrap">
                {showDetails ? <div className="pl-note">{sl.title || ""}</div> : null}
                {showLogo ? <div className="pl-brand" aria-hidden="true"><img src="/assets/image08.png" alt="" /></div> : null}
              </div>
            </div>
            <div className="pl-peg" />
          </div>
        )
      })}
      <div className="pl-bar" data-details={showDetails ? "1" : "0"}>
        {showDetails ? (
          <>
            <div className="pl-cap" key={active} aria-hidden="true">
              {s.title ? <span className="pl-title">{s.title}</span> : null}
              {s.caption ? <span className="pl-sub">{s.caption}</span> : null}
            </div>
            <span className="pl-count" aria-hidden="true">
              <b>{pad2(active + 1)}</b> / {pad2(n)}
            </span>
          </>
        ) : null}
        <button type="button" className="pl-btn" aria-label="Vorige foto" onClick={() => step(-1)}>
          <svg width="18" height="18" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M10 3 5 8l5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button type="button" className="pl-btn" aria-label="Volgende foto" onClick={() => step(1)}>
          <svg width="18" height="18" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="m6 3 5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
      <div className="pl-sr" aria-live="polite">
        {"Foto " + (active + 1) + " van " + n + (s.title ? ": " + s.title : "")}
      </div>
      {expanded !== null && srcs[expanded]
        ? createPortal(
            <div
              className="pl-lightbox"
              role="dialog"
              aria-modal="true"
              aria-label="Vergrote foto"
              onPointerDown={(event) => event.stopPropagation()}
              onKeyDown={(event) => event.stopPropagation()}
              onClick={closeExpanded}
            >
              <div className="pl-lightbox-frame" onClick={(event) => event.stopPropagation()}>
                <img className="pl-lightbox-img" src={srcs[expanded]} alt={slides[expanded].alt || slides[expanded].title || "Vergrote resultaatfoto"} />
              </div>
              <button ref={closeRef} type="button" className="pl-lightbox-close" aria-label="Vergrote foto sluiten" onClick={closeExpanded}>
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
