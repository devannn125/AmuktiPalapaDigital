import React from "react"

export function BrandLogo({ className = "h-8 w-auto", textClassName = "" }) {
  return (
    <div className="flex items-center gap-3 group select-none">
      <div className="relative flex items-center justify-center">
        {/* Glow backdrop */}
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl blur-sm opacity-40 group-hover:opacity-80 transition duration-300" />
        
        {/* Modern geometric emblem */}
        <div className="relative h-10 w-10 rounded-xl bg-slate-950 border border-cyan-500/40 flex items-center justify-center shadow-inner overflow-hidden">
          <svg
            viewBox="0 0 40 40"
            className="w-7 h-7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Background grid accent */}
            <path
              d="M0 20H40M20 0V40"
              stroke="#034078"
              strokeWidth="0.75"
              strokeDasharray="2 2"
            />
            {/* Arch & Ray (Nusantara digital fusion) */}
            <path
              d="M12 28C12 21 15.5 15 20 15C24.5 15 28 21 28 28"
              stroke="url(#brandGrad)"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            {/* Diamond Core */}
            <path
              d="M20 9L23.5 14L20 19L16.5 14Z"
              fill="url(#brandGradGold)"
            />
            {/* Foundation bar */}
            <rect x="10" y="30" width="20" height="2.5" rx="1.25" fill="#00B4D8" />
            
            <defs>
              <linearGradient id="brandGrad" x1="12" y1="15" x2="28" y2="28" gradientUnits="userSpaceOnUse">
                <stop stopColor="#00B4D8" />
                <stop offset="1" stopColor="#3B82F6" />
              </linearGradient>
              <linearGradient id="brandGradGold" x1="20" y1="9" x2="20" y2="19" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FBBF24" />
                <stop offset="1" stopColor="#F59E0B" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      <div className="flex flex-col text-left">
        <span className={`text-base font-bold tracking-tight text-white flex items-center gap-1.5 font-heading ${textClassName}`}>
          AMUKTI PALAPA
          <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
            DIGITAL
          </span>
        </span>
        <span className="text-[10px] tracking-wider text-slate-400 uppercase font-medium">
          Technology & Transformation
        </span>
      </div>
    </div>
  )
}

