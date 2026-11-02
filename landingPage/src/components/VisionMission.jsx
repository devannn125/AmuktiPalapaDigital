import { motion } from "motion/react"

export function VisionMission() {
  const missions = [
    {
      num: "01",
      title: "Solusi yang relevan",
      desc: "Mengembangkan produk perangkat lunak bernilai tinggi yang menjawab tantangan pasar.",
    },
    {
      num: "02",
      title: "Proses pengoptimal",
      desc: "Mengoptimalkan proses bisnis klien melalui integrasi teknologi pintar.",
    },
    {
      num: "03",
      title: "Sistem yang adaptif",
      desc: "Membangun sistem yang adaptif, aman, dan siap bertumbuh untuk jangka panjang.",
    },
    {
      num: "04",
      title: "Kemitraan strategis",
      desc: "Menjadi mitra strategis korporasi dalam implementasi transformasi digital.",
    },
  ]

  return (
    <section id="visi-misi" className="bg-stone-950 text-white relative overflow-hidden font-sans">
      {/* Top Gradient Transition from White section into Dark section */}
      <div className="w-full h-16 sm:h-28 bg-gradient-to-b from-white via-stone-900/60 to-stone-950 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-14 sm:pb-20 pt-2 sm:pt-4 space-y-10 sm:space-y-16">
        
        {/* Visi Section */}
        <div className="space-y-3 sm:space-y-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-widest text-orange-500 block mb-2 sm:mb-3">
              VISI PERUSAHAAN
            </span>
            <blockquote className="text-xl sm:text-2xl md:text-4xl font-extrabold text-white tracking-tight leading-snug">
              Menjadi perusahaan teknologi digital terpercaya yang menghadirkan solusi inovatif dan berdampak dalam mempercepat transformasi bisnis menuju era digital.
            </blockquote>
          </motion.div>
        </div>

        {/* 4 Pilar Misi */}
        <div className="pt-6 sm:pt-8 border-t border-stone-900">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-8">
            {missions.map((m, idx) => (
              <motion.div
                key={m.num}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.4, delay: idx * 0.08, ease: "easeOut" }}
                whileHover={{ y: -2, transition: { duration: 0.15 } }}
                className="space-y-1.5 p-3.5 rounded-xl border border-stone-900 bg-stone-900/40 sm:border-transparent sm:bg-transparent hover:bg-stone-900/70 transition-colors duration-200 cursor-default group"
              >
                <div className="text-xs font-mono font-bold text-orange-500">
                  {m.num}
                </div>
                <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-orange-400 transition-colors duration-200">
                  {m.title}
                </h3>
                <p className="text-xs text-stone-400 leading-relaxed group-hover:text-stone-300 transition-colors duration-200">
                  {m.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
