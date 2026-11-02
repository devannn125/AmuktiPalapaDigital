import { motion } from "motion/react"

export function CorporateObjectives() {
  const objectives = [
    {
      num: "01",
      title: "Pekerjaan lebih terarah",
      desc: "Alur kerja sistematis meminimalisir redundansi proses dan meningkatkan fokus tim.",
    },
    {
      num: "02",
      title: "Keputusan dengan konteks data",
      desc: "Pengolahan data akurat membantu manajemen mengambil keputusan strategis lebih cepat.",
    },
    {
      num: "03",
      title: "Data dan operasi lebih terjaga",
      desc: "Keamanan siber berstandar tinggi melindungi integritas sistem dan data rahasia.",
    },
    {
      num: "04",
      title: "Ruang untuk bertumbuh",
      desc: "Arsitektur scalable memastikan sistem siap menopang ekspansi bisnis masa depan.",
    },
  ]

  return (
    <section id="nilai-bisnis" className="relative font-sans text-stone-900 bg-white border-b border-stone-200">
      {/* Smooth Transition Gradient from Solid Black into Pure White */}
      <div className="w-full h-24 sm:h-44 bg-gradient-to-b from-stone-950 via-stone-900/60 to-white pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-14 sm:pb-24 -mt-8 sm:-mt-16">
        
        {/* Header Grid with Smooth Reveal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-10 items-end mb-8 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-0.5"
          >
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-orange-500 tracking-tight leading-tight">
              Bukan sekadar digital.
            </h2>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-orange-500 tracking-tight leading-tight">
              Lebih berguna bagi bisnis.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 text-stone-600 text-xs sm:text-sm leading-relaxed"
          >
            Teknologi bukan sekadar alat, melainkan penggerak perubahan yang menciptakan efisiensi, produktivitas, dan pertumbuhan terukur.
          </motion.div>
        </div>

        {/* 4 Objective Columns with Clean Mobile Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-8 pt-6 sm:pt-8 border-t border-stone-200">
          {objectives.map((obj, idx) => (
            <motion.div
              key={obj.num}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.4, delay: idx * 0.06, ease: "easeOut" }}
              whileHover={{ y: -2, transition: { duration: 0.15 } }}
              className="space-y-1.5 p-3.5 rounded-xl border border-stone-100 sm:border-transparent bg-stone-50/60 sm:bg-transparent hover:bg-stone-50 transition-colors duration-200 cursor-default group"
            >
              <div className="text-xs font-mono font-bold text-orange-600">
                {obj.num}
              </div>
              <h3 className="text-sm sm:text-base font-bold text-stone-900 group-hover:text-orange-600 transition-colors duration-200">
                {obj.title}
              </h3>
              <p className="text-xs text-stone-500 leading-relaxed group-hover:text-stone-600 transition-colors duration-200">
                {obj.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
