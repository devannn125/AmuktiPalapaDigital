import { motion } from "motion/react"

export function AboutSection() {
  return (
    <section id="tentang" className="py-14 sm:py-20 lg:py-24 bg-stone-950 text-white relative overflow-hidden font-sans border-b border-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 items-start">
          
          {/* Left Column: Brand Typography */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4"
          >
            <div className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-tight">
              <span className="block text-white">Amukti</span>
              <span className="block text-orange-500">Palapa Digital</span>
            </div>
            <div className="w-10 sm:w-12 h-1 bg-orange-600 rounded-full mt-2.5 sm:mt-3"></div>
          </motion.div>

          {/* Right Column: Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8 space-y-3 sm:space-y-4 text-stone-300 text-xs sm:text-sm md:text-base leading-relaxed"
          >
            <p className="text-stone-200 font-normal leading-relaxed">
              Amukti Palapa Digital adalah perusahaan penyedia solusi teknologi informasi yang berfokus pada pengembangan perangkat lunak (software development) berbasis digital untuk pasar enterprise.
            </p>

            <p className="text-stone-400 font-normal leading-relaxed">
              Menghadirkan ekosistem teknologi yang menggabungkan inovasi, strategi, dan keahlian digital agar sistem klien lebih cepat, lebih cerdas, dan lebih efektif.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
