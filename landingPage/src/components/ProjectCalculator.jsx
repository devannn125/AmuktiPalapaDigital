import { useState } from "react"
import { motion } from "motion/react"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { 
  Calculator, 
  Clock, 
  Users, 
  ArrowRight,
  Shield,
  Cloud,
  Code2,
  Database,
  Headphones,
  Check
} from "lucide-react"

export function ProjectCalculator({ onOpenContactWithDetails }) {
  const [selectedService, setSelectedService] = useState("software")
  const [scale, setScale] = useState("enterprise")
  const [selectedAddons, setSelectedAddons] = useState(["auth", "cloud"])

  const services = [
    { id: "software", name: "Software App", icon: Code2, baseWeeks: 8, baseEngineers: 3, desc: "Web & Mobile App" },
    { id: "cloud", name: "Cloud & DevOps", icon: Cloud, baseWeeks: 4, baseEngineers: 2, desc: "Kubernetes & CI/CD" },
    { id: "cybersecurity", name: "Security Audit", icon: Shield, baseWeeks: 3, baseEngineers: 2, desc: "VAPT & Zero-Trust" },
    { id: "data", name: "Data Analytics", icon: Database, baseWeeks: 6, baseEngineers: 2, desc: "Pipeline & BI Dashboard" },
    { id: "support", name: "IT Operations", icon: Headphones, baseWeeks: 2, baseEngineers: 2, desc: "Helpdesk 24/7 & SLA" },
  ]

  const scales = [
    { id: "startup", name: "Startup", note: "Fokus MVP & peluncuran gesit", mult: 0.75 },
    { id: "enterprise", name: "Enterprise", note: "Standar industri & skalabilitas", mult: 1 },
    { id: "corporate", name: "Corporate", note: "Arsitektur kompleks & kepatuhan ketat", mult: 1.4 },
  ]

  const addons = [
    { id: "auth", name: "SSO & IAM Security", weeks: 1 },
    { id: "cloud", name: "Multi-Region High Availability", weeks: 2 },
    { id: "audit", name: "Pen-Test Lanjutan & Audit", weeks: 1 },
    { id: "bi", name: "Executive BI Dashboard", weeks: 2 },
    { id: "sla", name: "15-Minute Response SLA", weeks: 1 },
  ]

  const toggleAddon = (id) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }

  const currentService = services.find((s) => s.id === selectedService) || services[0]
  const currentScale = scales.find((s) => s.id === scale) || scales[1]

  const addonWeeks = selectedAddons.reduce((sum, id) => {
    const found = addons.find((a) => a.id === id)
    return sum + (found ? found.weeks : 0)
  }, 0)
  const totalWeeks = Math.round((currentService.baseWeeks + addonWeeks) * currentScale.mult)
  const totalSprints = Math.ceil(totalWeeks / 2)
  const estimatedEngineers = Math.round(
    (currentService.baseEngineers + (selectedAddons.length > 2 ? 1 : 0)) *
      (scale === "corporate" ? 1.5 : 1)
  )

  const handleConsultation = () => {
    const summary = `Halo PT Amukti Palapa Digital, saya tertarik dengan layanan ${currentService.name} (Skala: ${scale}, Estimasi: ~${totalWeeks} minggu / ${totalSprints} sprints). Mohon info jadwal konsultasi.`
    if (onOpenContactWithDetails) {
      onOpenContactWithDetails(summary)
    }
  }

  return (
    <section id="simulasi" className="py-18 sm:py-24 relative overflow-hidden bg-white dark:bg-stone-950 border-b border-stone-200 dark:border-stone-800 transition-colors duration-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-8 sm:mb-10 space-y-2"
        >
          <Badge variant="amber" className="gap-1.5 px-2.5 py-0.5 text-xs">
            <Calculator className="w-3.5 h-3.5 text-orange-600 dark:text-orange-400" />
            <span>Simulasi Cepat</span>
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-900 dark:text-white tracking-tight">
            Kalkulator Estimasi Proyek
          </h2>
          <p className="text-stone-500 dark:text-stone-400 text-xs sm:text-sm">
            Perkirakan durasi sprint dan kebutuhan tim enterprise secara instan & transparan.
          </p>
        </motion.div>

        {/* Unified Calculator Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-stone-50 dark:bg-stone-900/60 border border-stone-200/90 dark:border-stone-800 rounded-2xl p-4 sm:p-6 lg:p-7 shadow-xs space-y-5"
        >
          
          {/* 1. Layanan Utama */}
          <div>
            <div className="flex items-center justify-between mb-2.5">
              <span className="text-xs font-bold text-stone-900 dark:text-white flex items-center gap-1.5 uppercase tracking-wider text-[11px]">
                <span className="h-4 w-4 rounded-full bg-orange-600 text-white text-[10px] flex items-center justify-center font-bold">1</span>
                Pilih Layanan Utama
              </span>
              <span className="text-[11px] text-stone-500 dark:text-stone-400">
                Basis: <strong className="text-stone-700 dark:text-stone-200">{currentService.baseWeeks} minggu</strong>
              </span>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
              {services.map((svc, idx) => {
                const Icon = svc.icon
                const isSelected = selectedService === svc.id
                const isLastOnMobile = idx === 4 ? "col-span-2 sm:col-span-1" : ""
                return (
                  <button
                    key={svc.id}
                    onClick={() => setSelectedService(svc.id)}
                    type="button"
                    className={`p-3 rounded-xl text-left border transition-all duration-150 cursor-pointer flex flex-col justify-between ${isLastOnMobile} ${
                      isSelected
                        ? "bg-white dark:bg-stone-850 border-orange-500 dark:border-orange-500 shadow-xs ring-2 ring-orange-500/15"
                        : "bg-white/80 dark:bg-stone-900/80 border-stone-200/90 dark:border-stone-800 hover:border-stone-300 dark:hover:border-stone-700"
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <div className={`p-1.5 rounded-lg shrink-0 ${isSelected ? "bg-orange-600 text-white" : "bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400"}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="font-bold text-xs text-stone-900 dark:text-white leading-tight">
                        {svc.name}
                      </div>
                    </div>
                    <div className="text-[11px] text-stone-500 dark:text-stone-400 line-clamp-1">
                      {svc.desc}
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          {/* 2. Dua Kolom: Skala Bisnis & Modul Ekstra */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 pt-2 border-t border-stone-200/70 dark:border-stone-800/80">
            
            {/* Skala Bisnis */}
            <div className="md:col-span-5 flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold text-stone-900 dark:text-white mb-2 flex items-center gap-1.5 uppercase tracking-wider text-[11px]">
                  <span className="h-4 w-4 rounded-full bg-orange-600 text-white text-[10px] flex items-center justify-center font-bold">2</span>
                  Skala Bisnis
                </div>
                <div className="grid grid-cols-3 gap-1.5 bg-stone-200/60 dark:bg-stone-800/60 p-1 rounded-xl">
                  {scales.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => setScale(s.id)}
                      type="button"
                      className={`py-2 px-2 rounded-lg text-center text-xs font-semibold transition-all cursor-pointer ${
                        scale === s.id
                          ? "bg-white dark:bg-stone-700 text-orange-600 dark:text-orange-400 shadow-2xs"
                          : "text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white"
                      }`}
                    >
                      {s.name}
                    </button>
                  ))}
                </div>
              </div>
              <div className="mt-2 text-[11px] text-stone-500 dark:text-stone-400 flex items-center gap-1.5">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                <span>{currentScale.note}</span>
              </div>
            </div>

            {/* Modul Ekstra */}
            <div className="md:col-span-7">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-stone-900 dark:text-white flex items-center gap-1.5 uppercase tracking-wider text-[11px]">
                  <span className="h-4 w-4 rounded-full bg-orange-600 text-white text-[10px] flex items-center justify-center font-bold">3</span>
                  Modul Tambahan (Opsional)
                </span>
                <span className="text-[11px] text-stone-500 dark:text-stone-400">
                  {selectedAddons.length} modul aktif
                </span>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {addons.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id)
                  return (
                    <button
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      type="button"
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-all cursor-pointer ${
                        isChecked
                          ? "bg-orange-50 dark:bg-orange-950/70 border-orange-400 dark:border-orange-600 text-orange-800 dark:text-orange-300 shadow-2xs"
                          : "bg-white dark:bg-stone-900 border-stone-200 dark:border-stone-800 text-stone-600 dark:text-stone-400 hover:border-stone-300 dark:hover:border-stone-700"
                      }`}
                    >
                      <span className={`w-3.5 h-3.5 rounded flex items-center justify-center text-[10px] ${
                        isChecked ? "bg-orange-600 text-white font-bold" : "border border-stone-300 dark:border-stone-600 text-stone-400"
                      }`}>
                        {isChecked ? <Check className="w-2.5 h-2.5 stroke-[3]" /> : "+"}
                      </span>
                      <span>{addon.name}</span>
                      <span className="text-[10px] font-mono text-stone-400 dark:text-stone-500">+{addon.weeks}mgg</span>
                    </button>
                  )
                })}
              </div>
            </div>

          </div>

          {/* 3. Integrated Estimation Result Bar */}
          <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-xl p-4 sm:p-5 flex flex-col lg:flex-row lg:items-center justify-between gap-4 shadow-2xs">
            
            {/* Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 items-center flex-1">
              
              {/* Metric 1: Sprint */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-orange-50 dark:bg-orange-950/60 border border-orange-100 dark:border-orange-900 flex items-center justify-center text-orange-600 dark:text-orange-400 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] text-stone-400 uppercase tracking-wider font-semibold">Estimasi Durasi</div>
                  <div className="text-lg sm:text-xl font-bold font-heading text-stone-900 dark:text-white leading-tight">
                    {totalSprints} <span className="text-xs font-normal text-stone-500">Sprint</span>
                  </div>
                  <div className="text-[11px] text-orange-600 dark:text-orange-400 font-medium">~{totalWeeks} minggu kerja</div>
                </div>
              </div>

              {/* Metric 2: Team */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-orange-50 dark:bg-orange-950/60 border border-orange-100 dark:border-orange-900 flex items-center justify-center text-orange-600 dark:text-orange-400 shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] text-stone-400 uppercase tracking-wider font-semibold">Alokasi Tim</div>
                  <div className="text-lg sm:text-xl font-bold font-heading text-stone-900 dark:text-white leading-tight">
                    {estimatedEngineers} <span className="text-xs font-normal text-stone-500">Personil</span>
                  </div>
                  <div className="text-[11px] text-orange-600 dark:text-orange-400 font-medium">Tim spesialis APD</div>
                </div>
              </div>

              {/* Metric 3: Scope Tag */}
              <div className="col-span-2 sm:col-span-1 hidden sm:flex items-center gap-3 border-t sm:border-t-0 sm:border-l border-stone-100 dark:border-stone-800 pt-2 sm:pt-0 sm:pl-4">
                <div>
                  <div className="text-[10px] text-stone-400 uppercase tracking-wider font-semibold">Konfigurasi</div>
                  <div className="text-xs font-bold text-stone-800 dark:text-stone-200 truncate">
                    {currentService.name}
                  </div>
                  <div className="text-[11px] text-stone-500 capitalize">
                    {scale} • {selectedAddons.length} modul
                  </div>
                </div>
              </div>

            </div>

            {/* CTA Button */}
            <Button
              variant="orange"
              size="default"
              onClick={handleConsultation}
              className="w-full lg:w-auto px-6 py-2.5 rounded-xl shrink-0 cursor-pointer"
            >
              <span>Konsultasikan Estimasi Ini</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Button>

          </div>

        </motion.div>

      </div>
    </section>
  )
}
