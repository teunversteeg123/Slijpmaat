import React, { useState } from 'react';
import { Sparkles, AlertTriangle, CheckCircle2, ShieldCheck } from 'lucide-react';

interface BeforeAfterProps {
  title?: string;
  description?: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterProps> = ({
  title = 'Snijprofiel: Bot & Chip vs. Slijpmaat Resultaat',
  description = 'Klant had een chip van 1,8 mm in de snijkant na het raken van een bord. Volledig hersteld op Shapton Pro 320, opgebouwd tot 8000 grit en afgestropt op leder zonder profielverlies.'
}) => {
  const [sliderPos, setSliderPos] = useState(50);
  const [activeMode, setActiveMode] = useState<'slider' | 'before' | 'after'>('slider');

  return (
    <div className="bg-white rounded-3xl border border-[#d9e1d7] overflow-hidden shadow-xs">
      <div className="p-6 sm:p-8 border-b border-[#F2F2EC] flex flex-wrap items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#3B7F4B] font-heading">
            Vakmanschap &middot; Zonder materiaalverlies
          </span>
          <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#244A30] mt-0.5">
            {title}
          </h3>
          <p className="text-xs sm:text-sm text-[#657068] mt-1 max-w-xl">
            {description}
          </p>
        </div>

        {/* View Switcher */}
        <div className="flex items-center gap-1 p-1 bg-[#F7F4EC] rounded-xl border border-[#d9e1d7]">
          <button
            onClick={() => setActiveMode('slider')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
              activeMode === 'slider' ? 'bg-[#3B7F4B] text-white shadow-xs' : 'text-[#244A30] hover:text-[#3B7F4B]'
            }`}
          >
            Vergelijkingsschuif
          </button>
          <button
            onClick={() => setActiveMode('before')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
              activeMode === 'before' ? 'bg-[#3B7F4B] text-white shadow-xs' : 'text-[#244A30] hover:text-[#3B7F4B]'
            }`}
          >
            Vóór slijpen (Bot &amp; Chip)
          </button>
          <button
            onClick={() => setActiveMode('after')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
              activeMode === 'after' ? 'bg-[#3B7F4B] text-white shadow-xs' : 'text-[#244A30] hover:text-[#3B7F4B]'
            }`}
          >
            Na Slijpmaat (Vlijmscherp)
          </button>
        </div>
      </div>

      {/* Diagram Canvas: Clean Vector Blade Profile (NO PHOTOS) */}
      <div className="relative aspect-[16/9] sm:aspect-[21/8] bg-[#F7F4EC] overflow-hidden select-none flex items-center justify-center p-6 sm:p-12">
        <svg
          viewBox="0 0 800 320"
          className="w-full h-full max-h-[300px]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Background Grid Lines for Technical Precision */}
          <line x1="50" y1="60" x2="750" y2="60" stroke="#d9e1d7" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="50" y1="160" x2="750" y2="160" stroke="#d9e1d7" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="50" y1="260" x2="750" y2="260" stroke="#d9e1d7" strokeWidth="1" strokeDasharray="4 4" />

          {/* After Blade Profile (Green, Pristine 15 degree razor edge) */}
          <g opacity={activeMode === 'before' ? 0.2 : 1}>
            {/* Knife Spine */}
            <path
              d="M 60 70 Q 400 65 740 70 L 730 180 Q 450 185 100 240 L 60 210 Z"
              fill="#FFFFFF"
              stroke="#3B7F4B"
              strokeWidth="2.5"
            />
            {/* Mirror-Polished Sharpened Bevel (Fasette) */}
            <path
              d="M 100 240 Q 450 185 730 180 L 732 186 Q 450 193 100 248 Z"
              fill="#A9C89E"
              stroke="#3B7F4B"
              strokeWidth="1.5"
            />
            {/* Razor-sharp apex line */}
            <path
              d="M 100 248 Q 450 193 732 186"
              stroke="#244A30"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </g>

          {/* Before Blade Profile (Red/Amber with chipped edge & rounded apex) */}
          {(activeMode === 'slider' || activeMode === 'before') && (
            <g
              clipPath={activeMode === 'slider' ? 'url(#sliderClip)' : undefined}
            >
              {/* Knife Body */}
              <path
                d="M 60 70 Q 400 65 740 70 L 730 180 Q 450 185 100 240 L 60 210 Z"
                fill="#F2F2EC"
                stroke="#C95E3E"
                strokeWidth="2"
              />
              {/* Dull, rounded edge with visible chip/notch */}
              <path
                d="M 100 245 Q 260 215 320 206 C 330 204 335 194 345 195 C 355 196 360 204 370 202 Q 520 185 730 180"
                stroke="#E87B5B"
                strokeWidth="4"
                strokeLinecap="round"
              />
              {/* Chip Callout indicator */}
              <circle cx="345" cy="195" r="9" stroke="#E87B5B" strokeWidth="2" fill="none" strokeDasharray="3 3" />
              <text x="345" y="165" textAnchor="middle" fill="#C95E3E" fontSize="13" fontWeight="bold" fontFamily="Instrument Sans, sans-serif">
                Chip in snijkant (-1,8 mm)
              </text>
            </g>
          )}

          {/* Slider Clip Definition */}
          <clipPath id="sliderClip">
            <rect x="0" y="0" width={`${(sliderPos / 100) * 800}`} height="320" />
          </clipPath>

          {/* Slider Divider Line */}
          {activeMode === 'slider' && (
            <g>
              <line
                x1={`${(sliderPos / 100) * 800}`}
                y1="20"
                x2={`${(sliderPos / 100) * 800}`}
                y2="300"
                stroke="#3B7F4B"
                strokeWidth="3"
                strokeDasharray="6 4"
              />
              <circle
                cx={`${(sliderPos / 100) * 800}`}
                cy="160"
                r="18"
                fill="#3B7F4B"
                stroke="#FFFFFF"
                strokeWidth="2.5"
              />
              <path
                d={`M ${(sliderPos / 100) * 800 - 6} 160 L ${(sliderPos / 100) * 800 - 2} 156 M ${(sliderPos / 100) * 800 - 6} 160 L ${(sliderPos / 100) * 800 - 2} 164 M ${(sliderPos / 100) * 800 + 6} 160 L ${(sliderPos / 100) * 800 + 2} 156 M ${(sliderPos / 100) * 800 + 6} 160 L ${(sliderPos / 100) * 800 + 2} 164`}
                stroke="#FFFFFF"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </g>
          )}
        </svg>

        {/* Labels */}
        <div className="absolute top-4 left-4 bg-white/90 border border-[#E87B5B] px-3 py-1 rounded-lg text-xs font-semibold text-[#C95E3E]">
          Vóór: Botte afgeronde snede met chip
        </div>
        <div className="absolute top-4 right-4 bg-white/90 border border-[#3B7F4B] px-3 py-1 rounded-lg text-xs font-semibold text-[#244A30]">
          Na Slijpmaat: Strakke 15&deg; whetstone apex
        </div>

        {/* Range Input for Dragging */}
        {activeMode === 'slider' && (
          <input
            type="range"
            min="5"
            max="95"
            value={sliderPos}
            onChange={(e) => setSliderPos(Number(e.target.value))}
            className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
            aria-label="Sleep om voor en na te vergelijken"
          />
        )}
      </div>

      {/* Information Row */}
      <div className="p-4 sm:p-6 bg-[#FAFAFA] border-t border-[#F2F2EC] grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
        <div className="flex items-start gap-2.5">
          <AlertTriangle className="w-4 h-4 text-[#E87B5B] shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-[#244A30]">1. Aangeleverde staat</span>
            <p className="text-[#657068] mt-0.5">Micro-chip van 1,8 mm in de buik, snede glijdt weg over tomatenvellen.</p>
          </div>
        </div>

        <div className="flex items-start gap-2.5">
          <Sparkles className="w-4 h-4 text-[#3B7F4B] shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-[#244A30]">2. Slijpmaat Behandeling</span>
            <p className="text-[#657068] mt-0.5">Shapton Pro 320 profielherstel &rarr; 1000 &rarr; 5000 &rarr; Lederen strop.</p>
          </div>
        </div>

        <div className="flex items-start gap-2.5">
          <CheckCircle2 className="w-4 h-4 text-[#3B7F4B] shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-[#244A30]">3. Vlijmscherp resultaat</span>
            <p className="text-[#657068] mt-0.5">Zuivere symmetrische snijkant, minimale staalafname, mes snijdt weer moeiteloos.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
