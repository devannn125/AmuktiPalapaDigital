import React from "react"

export function BrandLogo({ className = "", textClassName = "" }) {
  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 group select-none shrink-0 ${className}`}>
      {/* Modern geometric emblem */}
      <div className="relative h-9 w-9 sm:h-10 sm:w-10 rounded-xl bg-gradient-to-br from-sky-600 to-blue-700 flex items-center justify-center shadow-md shadow-sky-600/15 overflow-hidden transition-transform duration-200 group-hover:scale-105">
        <svg
          viewBox="0 0 40 40"
          className="w-6 h-6 sm:w-7 sm:h-7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Subtle grid accent */}
          <path
            d="M0 20H40M20 0V40"
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="0.75"
            strokeDasharray="2 2"
          />
          {/* Arch & Ray (Nusantara digital fusion) */}
          <path
            d="M12 28C12 21 15.5 15 20 15C24.5 15 28 21 28 28"
            stroke="#ffffff"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          {/* Diamond Core */}
          <path
            d="M20 8L23.5 13.5L20 19L16.5 13.5Z"
            fill="#FBBF24"
          />
          {/* Foundation bar */}
          <rect x="10" y="30" width="20" height="2.5" rx="1.25" fill="#bae6fd" />
        </svg>
      </div>

      <div className="flex flex-col text-left">
        <div className={`text-sm sm:text-base font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-1.5 font-heading ${textClassName}`}>
          <span>AMUKTI PALAPA</span>
          <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-sky-50 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 border border-sky-200/80 dark:border-sky-800 font-semibold">
            DIGITAL
          </span>
        </div>
        <span className="text-[9px] sm:text-[10px] tracking-wider text-slate-500 dark:text-slate-400 uppercase font-medium">
          Technology & Transformation
        </span>
      </div>
    </div>
  )
}
