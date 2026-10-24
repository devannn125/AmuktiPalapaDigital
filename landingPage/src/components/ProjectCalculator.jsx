import React, { useState } from "react"
import { Card } from "./ui/card"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { 
  Calculator, 
  Sparkles, 
  Clock, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Shield,
  Cloud,
  Code2,
  Database,
  Headphones
} from "lucide-react"

export function ProjectCalculator({ onOpenContactWithDetails }) {
  const [selectedService, setSelectedService] = useState("software")
  const [scale, setScale] = useState("enterprise")
  const [selectedAddons, setSelectedAddons] = useState(["auth", "cloud"])

  const services = [
    { id: "software", name: "Software App", icon: Code2, baseWeeks: 8, baseEngineers: 3, desc: "Aplikasi Web & Mobile Kustom" },
    { id: "cloud", name: "Cloud & DevOps", icon: Cloud, baseWeeks: 4, baseEngineers: 2, desc: "Kubernetes Cluster & CI/CD" },
    { id: "cybersecurity", name: "Security Audit", icon: Shield, baseWeeks: 3, baseEngineers: 2, desc: "VAPT & Zero-Trust Hardening" },
    { id: "data", name: "Data Analytics", icon: Database, baseWeeks: 6, baseEngineers: 2, desc: "ETL Pipeline & Dashboard BI" },
    { id: "support", name: "IT Operations", icon: Headphones, baseWeeks: 2, baseEngineers: 2, desc: "Helpdesk & Monitoring 24/7" },
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

  const scaleMultiplier = scale === "startup" ? 0.75 : scale === "enterprise" ? 1 : 1.4
  const addonWeeks = selectedAddons.reduce((sum, id) => {
    const found = addons.find((a) => a.id === id)
    return sum + (found ? found.weeks : 0)
  }, 0)
  const totalWeeks = Math.round((currentService.baseWeeks + addonWeeks) * scaleMultiplier)
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
    <section id="simulasi" className="py-16 sm:py-20 relative overflow-hidden bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 space-y-2">
          <Badge variant="default" className="gap-1.5 px-2.5 py-0.5 text-xs">
            <Calculator className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
            <span>Estimator Proyek</span>
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Simulasi Kebutuhan Proyek
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm">
            Pilih kebutuhan sistem untuk memperkirakan durasi sprint dan alokasi tim.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          <div className="lg:col-span-7 space-y-5">
            {/* Step 1 */}
            <div>
              <div className="text-xs font-semibold text-slate-900 dark:text-white mb-2 flex items-center gap-1.5">
                <span className="h-4 w-4 rounded-full bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-400 text-[10px] flex items-center justify-center font-bold">1</span>
                Kebutuhan Layanan:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {services.map((svc) => {
                  const Icon = svc.icon
                  const isSelected = selectedService === svc.id
                  return (
                    <button
                      key={svc.id}
                      onClick={() => setSelectedService(svc.id)}
                      className={`p-3 rounded-xl text-left border transition-all duration-150 cursor-pointer ${
                        isSelected
                          ? "bg-sky-50/70 dark:bg-sky-950/60 border-sky-300 dark:border-sky-700 shadow-2xs"
                          : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-slate-300"
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <div className={`p-1.5 rounded-lg ${isSelected ? "bg-sky-600 text-white" : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"}`}>
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                        <div className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">{svc.name}</div>
                      </div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400">{svc.desc}</div>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Step 2 */}
            <div>
              <div className="text-xs font-semibold text-slate-900 dark:text-white mb-2 flex items-center gap-1.5">
                <span className="h-4 w-4 rounded-full bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-400 text-[10px] flex items-center justify-center font-bold">2</span>
                Skala Bisnis:
              </div>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: "startup", name: "Startup" },
                  { id: "enterprise", name: "Enterprise" },
                  { id: "corporate", name: "Corporate" },
                ].map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setScale(s.id)}
                    className={`py-2 px-3 rounded-lg text-center border text-xs font-semibold transition-all cursor-pointer ${
                      scale === s.id
                        ? "bg-sky-50 dark:bg-sky-950/60 border-sky-300 dark:border-sky-700 text-sky-700 dark:text-sky-300 shadow-2xs"
                        : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300"
                    }`}
                  >
                    {s.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3 */}
            <div>
              <div className="text-xs font-semibold text-slate-900 dark:text-white mb-2 flex items-center gap-1.5">
                <span className="h-4 w-4 rounded-full bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-400 text-[10px] flex items-center justify-center font-bold">3</span>
                Modul Ekstra:
              </div>
              <div className="space-y-1.5">
                {addons.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id)
                  return (
                    <button
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`w-full flex items-center justify-between p-2.5 rounded-lg border text-xs transition-all cursor-pointer ${
                        isChecked
                          ? "bg-sky-50/50 dark:bg-sky-950/40 border-sky-300 dark:border-sky-700 text-slate-800 dark:text-slate-200 font-medium"
                          : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-3.5 h-3.5 rounded border flex items-center justify-center ${
                            isChecked
                              ? "bg-sky-600 border-sky-600 text-white"
                              : "border-slate-300 dark:border-slate-700"
                          }`}
                        >
                          {isChecked && <CheckCircle className="w-3 h-3 stroke-[3]" />}
                        </div>
                        <span>{addon.name}</span>
                      </div>
                      <span className="text-[10px] font-mono text-sky-700 dark:text-sky-400">+{addon.weeks} mgg</span>
                    </button>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Results Summary Card */}
          <div className="lg:col-span-5">
            <Card className="bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 p-5 rounded-2xl sticky top-24">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800 mb-4">
                <div>
                  <div className="text-[10px] font-mono text-slate-400">Hasil Estimasi</div>
                  <div className="text-base font-bold text-slate-900 dark:text-white">Delivery Timeline</div>
                </div>
                <Sparkles className="w-4 h-4 text-sky-600 dark:text-sky-400" />
              </div>

              <div className="grid grid-cols-2 gap-2.5 mb-4">
                <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  <div className="text-[10px] text-slate-400 flex items-center gap-1 mb-0.5">
                    <Clock className="w-3 h-3 text-sky-600" />
                    <span>Sprint</span>
                  </div>
                  <div className="text-xl font-bold font-heading text-slate-900 dark:text-white">
                    {totalSprints} <span className="text-xs font-normal text-slate-400">Sprint</span>
                  </div>
                  <div className="text-[10px] text-sky-700 dark:text-sky-400">~{totalWeeks} minggu</div>
                </div>

                <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  <div className="text-[10px] text-slate-400 flex items-center gap-1 mb-0.5">
                    <Users className="w-3 h-3 text-sky-600" />
                    <span>Alokasi</span>
                  </div>
                  <div className="text-xl font-bold font-heading text-slate-900 dark:text-white">
                    {estimatedEngineers} <span className="text-xs font-normal text-slate-400">Personil</span>
                  </div>
                  <div className="text-[10px] text-sky-700 dark:text-sky-400">Tim spesialis</div>
                </div>
              </div>

              <Button
                variant="default"
                size="sm"
                onClick={handleConsultation}
                className="w-full justify-center gap-2 bg-sky-600 hover:bg-sky-700 text-white font-medium"
              >
                <span>Konsultasikan Estimasi Ini</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Button>
            </Card>
          </div>

        </div>

      </div>
    </section>
  )
}
