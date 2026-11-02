import { motion } from "motion/react"
import { ChevronDown } from "lucide-react"

export function Hero() {
  const handleScrollDown = () => {
    const elem = document.querySelector("#tentang")
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center overflow-hidden bg-stone-950 text-white font-sans">
      {/* Background Image with subtle smooth scale-in */}
      <motion.div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=2000&q=85')`
        }}
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
      />
      
      {/* Dark Gradient Overlays for High Legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/92 via-black/80 to-black/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-black/70" />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-28 pb-16 sm:py-32 w-full">
        <div className="max-w-2xl space-y-4 sm:space-y-6">
          
          {/* Active Live Status Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-900/80 border border-stone-800/80 backdrop-blur-md text-xs font-medium text-stone-200 max-w-full"
          >
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-stone-300 font-mono font-medium truncate">
              Enterprise Digital Partner • Sleman DIY
            </span>
          </motion.div>

          {/* Big Bold Orange Display Headline with Safe Mobile Wrapping & Subtle Shadow */}
          <div className="space-y-1">
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-orange-500 leading-tight sm:leading-none break-words drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)] [text-shadow:_0_2px_10px_rgba(0,0,0,0.85)]"
            >
              TURNING IDEAS
            </motion.h1>
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-orange-500 leading-tight sm:leading-none break-words drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)] [text-shadow:_0_2px_10px_rgba(0,0,0,0.85)]"
            >
              INTO DIGITAL SOLUTIONS
            </motion.h1>
          </div>

          {/* Subtitle Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
            className="text-stone-300 text-xs sm:text-sm md:text-base leading-relaxed max-w-xl font-normal pt-1"
          >
            Perusahaan penyedia solusi teknologi informasi berbasis digital untuk pasar enterprise. Mengintegrasikan strategi teknologi, inovasi berkelanjutan, dan standar rekayasa modern.
          </motion.p>

        </div>
      </div>

      {/* Subtle Scroll Down Indicator */}
      <motion.button
        onClick={handleScrollDown}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-stone-400 hover:text-orange-400 transition-colors cursor-pointer group"
        aria-label="Scroll ke konten"
      >
        <span className="text-[9px] sm:text-[10px] uppercase tracking-widest font-mono">Scroll</span>
        <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 animate-bounce" />
      </motion.button>
    </section>
  )
}
