import { motion } from "motion/react"

export function Divisions() {
  const capabilities = [
    {
      id: "software",
      title: "Software Engineering",
      desc: "Perancangan sistem enterprise, aplikasi web & mobile.",
    },
    {
      id: "cloud",
      title: "Infrastructure & Cloud",
      desc: "Multi-cloud, orkestrasi Kubernetes & disaster recovery.",
    },
    {
      id: "security",
      title: "Cybersecurity",
      desc: "Proteksi data berlapis & kepatuhan UU PDP.",
    },
    {
      id: "operations",
      title: "IT Operations",
      desc: "Pemantauan proaktif & jaminan ketersediaan sistem.",
    },
    {
      id: "data",
      title: "Data & Analytics",
      desc: "Pengolahan data modern & analitik bisnis.",
    },
    {
      id: "support",
      title: "IT Support & Service Desk",
      desc: "Helpdesk respon cepat & dukungan operasional.",
    },
  ]

  return (
    <section id="keahlian" className="py-14 sm:py-20 lg:py-24 bg-white text-stone-900 font-sans transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          
          {/* Left Column: Heading & Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-3 sm:space-y-4"
          >
            <span className="text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-widest text-orange-600 block">
              LIMA PILAR TEKNOLOGI
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 tracking-tight leading-tight">
              Keahlian berbeda. Kebutuhan yang saling terhubung.
            </h2>

            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
              Lima pilar teknologi di bawah CTO merespon perkembangan spesifik kebutuhan enterprise.
            </p>

            <p className="text-stone-500 text-xs leading-relaxed pt-1 sm:pt-2">
              Setiap divisi bekerja secara sinergis untuk menghasilkan solusi terpadu, dari rekayasa perangkat lunak, infrastruktur awan, keamanan informasi, hingga analitik data.
            </p>
          </motion.div>

          {/* Right Column: 6 Capability Items in 2 Columns */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-x-8 sm:gap-y-7">
              {capabilities.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{ duration: 0.4, delay: index * 0.06, ease: "easeOut" }}
                  whileHover={{ y: -2, transition: { duration: 0.15 } }}
                  className="space-y-1 p-3.5 rounded-xl border border-stone-100 sm:border-transparent hover:border-stone-200 hover:bg-stone-50/80 transition-all duration-200 cursor-default group"
                >
                  <h3 className="text-sm sm:text-base font-bold text-stone-900 group-hover:text-orange-600 transition-colors duration-200">
                    {item.title}
                  </h3>
                  <p className="text-xs text-stone-500 leading-relaxed group-hover:text-stone-600 transition-colors duration-200">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
