import React, { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { 
  Calculator, 
  Sparkles, 
  Clock, 
  Users, 
  Layers, 
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
  const [selectedAddons, setSelectedAddons] = useState(["auth", "cloud", "audit"])

  const services = [
    {
      id: "software",
      name: "Software Engineering",
      icon: Code2,
      baseWeeks: 8,
      baseEngineers: 3,
      desc: "Aplikasi Web & Mobile Kustom Berkinerja Tinggi",
    },
    {
      id: "cloud",
      name: "Cloud & DevOps",
      icon: Cloud,
      baseWeeks: 4,
      baseEngineers: 2,
      desc: "Migrasi Cloud, Kubernetes Cluster & CI/CD",
    },
    {
      id: "cybersecurity",
      name: "Cybersecurity Audit",
      icon: Shield,
      baseWeeks: 3,
      baseEngineers: 2,
      desc: "Vulnerability Assessment, Hardening & Zero-Trust",
    },
    {
      id: "data",
      name: "Data & Analytics",
      icon: Database,
      baseWeeks: 6,
      baseEngineers: 2,
      desc: "Data Warehouse, ETL Pipeline & BI Dashboard",
    },
    {
      id: "support",
      name: "IT Operations 24/7",
      icon: Headphones,
      baseWeeks: 2,
      baseEngineers: 2,
      desc: "Monitoring Operasional, SLA Helpdesk & Pemeliharaan",
    },
  ]

  const addons = [
    { id: "auth", name: "SSO & Multi-Factor Auth (IAM)", weeks: 1 },
    { id: "cloud", name: "High-Availability Multi-Region Cloud", weeks: 2 },
    { id: "audit", name: "Audit Keamanan & Pen-Test Lanjutan", weeks: 1 },
    { id: "bi", name: "Executive Real-Time BI Dashboard", weeks: 2 },
    { id: "sla", name: "Guaranteed 15-Minute SLA Support", weeks: 1 },
  ]

  const toggleAddon = (id) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }

  const currentService = services.find((s) => s.id === selectedService) || services[0]

  // Calculate sprint estimation
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
    const summary = `Halo PT Amukti Palapa Digital, saya tertarik dengan layanan ${currentService.name} (Skala: ${scale}, Estimasi: ~${totalWeeks} minggu / ${totalSprints} sprints dengan ${estimatedEngineers} personil tim). Mohon info konsultasi lebih lanjut.`
    if (onOpenContactWithDetails) {
      onOpenContactWithDetails(summary)
    }
  }

  return (
    <section id="simulasi" className="py-24 relative overflow-hidden bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge variant="gradient" className="gap-1.5 px-3 py-1">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Estimator</span>
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Simulasi Kebutuhan & Skala Proyek
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Rancang arsitektur awal dan hitung estimasi sprint serta alokasi engineering tim untuk transformasi bisnis Anda.
          </p>
        </div>

        {/* Calculator Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Configuration Controls (Left 7 Cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Step 1: Select Main Service */}
            <div>
              <div className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                <span className="h-6 w-6 rounded-full bg-cyan-500/20 text-cyan-400 text-xs flex items-center justify-center font-mono">1</span>
                Pilih Kebutuhan Layanan Utama:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {services.map((svc) => {
                  const Icon = svc.icon
                  const isSelected = selectedService === svc.id
                  return (
                    <button
                      key={svc.id}
                      onClick={() => setSelectedService(svc.id)}
                      className={`p-4 rounded-xl text-left border transition-all duration-200 cursor-pointer ${
                        isSelected
                          ? "bg-slate-800 border-cyan-500/60 shadow-lg shadow-cyan-500/10 text-white"
                          : "bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700"
                      }`}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`p-2 rounded-lg ${isSelected ? "bg-cyan-500/20 text-cyan-400" : "bg-slate-900 text-slate-400"}`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="font-semibold text-sm">{svc.name}</div>
                      </div>
                      <div className="text-xs text-slate-400 line-clamp-2">{svc.desc}</div>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Step 2: Select Scale */}
            <div>
              <div className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                <span className="h-6 w-6 rounded-full bg-cyan-500/20 text-cyan-400 text-xs flex items-center justify-center font-mono">2</span>
                Tentukan Skala Organisasi Bisnis:
              </div>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: "startup", name: "Startup / SME", detail: "Fokus MVP & Validasi Cepat" },
                  { id: "enterprise", name: "Growing Enterprise", detail: "Standar Keamanan & Skalabilitas" },
                  { id: "corporate", name: "Large Corporate", detail: "Multi-Region & Kepatuhan Tinggi" },
                ].map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setScale(s.id)}
                    className={`p-3.5 rounded-xl text-left border transition-all cursor-pointer ${
                      scale === s.id
                        ? "bg-slate-800 border-cyan-500/60 text-white"
                        : "bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700"
                    }`}
                  >
                    <div className="text-xs sm:text-sm font-semibold">{s.name}</div>
                    <div className="text-[10px] text-slate-400 mt-1 hidden sm:block">{s.detail}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Add-on Modules */}
            <div>
              <div className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                <span className="h-6 w-6 rounded-full bg-cyan-500/20 text-cyan-400 text-xs flex items-center justify-center font-mono">3</span>
                Modul Ekstra & Kebutuhan Spesifik:
              </div>
              <div className="space-y-2">
                {addons.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id)
                  return (
                    <button
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`w-full flex items-center justify-between p-3 rounded-xl border text-xs sm:text-sm transition-all cursor-pointer ${
                        isChecked
                          ? "bg-slate-900 border-cyan-500/40 text-slate-200"
                          : "bg-slate-950/40 border-slate-800/80 text-slate-400 hover:border-slate-700"
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div
                          className={`w-4 h-4 rounded border flex items-center justify-center ${
                            isChecked
                              ? "bg-cyan-500 border-cyan-400 text-slate-950"
                              : "border-slate-700 bg-slate-900"
                          }`}
                        >
                          {isChecked && <CheckCircle className="w-3.5 h-3.5 stroke-[3]" />}
                        </div>
                        <span>{addon.name}</span>
                      </div>
                      <span className="text-[11px] font-mono text-cyan-400/80">+{addon.weeks} minggu</span>
                    </button>
                  )
                })}
              </div>
            </div>

          </div>

          {/* Results Summary Card (Right 5 Cols) */}
          <div className="lg:col-span-5">
            <Card className="bg-slate-950/90 border-slate-800 p-6 sm:p-8 backdrop-blur-xl sticky top-28 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500" />

              <div className="flex items-center justify-between pb-4 border-b border-slate-800/80 mb-6">
                <div>
                  <div className="text-xs font-mono text-slate-400">Estimasi Metrik Engineering</div>
                  <div className="text-lg font-bold text-white mt-0.5">Ringkasan Delivery Proyek</div>
                </div>
                <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400">
                  <Sparkles className="w-5 h-5" />
                </div>
              </div>

              {/* Dynamic Estimates */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                  <div className="flex items-center gap-2 text-slate-400 text-xs mb-1">
                    <Clock className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Durasi Sprint</span>
                  </div>
                  <div className="text-2xl font-bold font-heading text-white">
                    {totalSprints} <span className="text-sm font-normal text-slate-400">Sprint</span>
                  </div>
                  <div className="text-[11px] text-cyan-400/90 mt-0.5">~{totalWeeks} minggu kerja</div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                  <div className="flex items-center gap-2 text-slate-400 text-xs mb-1">
                    <Users className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Alokasi Tim</span>
                  </div>
                  <div className="text-2xl font-bold font-heading text-white">
                    {estimatedEngineers} <span className="text-sm font-normal text-slate-400">Specialists</span>
                  </div>
                  <div className="text-[11px] text-cyan-400/90 mt-0.5">Multi-divisi dedikasi</div>
                </div>
              </div>

              {/* Included specifications breakdown */}
              <div className="space-y-3 mb-6 p-4 rounded-xl bg-slate-900/40 border border-slate-800/60 text-xs text-slate-300">
                <div className="font-semibold text-slate-200">Spesifikasi Layanan Terpilih:</div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Core Focus:</span>
                  <span className="font-medium text-white">{currentService.name}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Skala Sistem:</span>
                  <span className="font-medium capitalize text-cyan-300">{scale} Level</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Modul Tambahan:</span>
                  <span className="font-medium text-white">{selectedAddons.length} Fitur Terpilih</span>
                </div>
                <div className="flex items-center justify-between border-t border-slate-800 pt-2 text-[11px]">
                  <span className="text-slate-400">Model Kolaborasi:</span>
                  <span className="text-amber-400 font-mono">Agile / Hybrid / SLA Guarantees</span>
                </div>
              </div>

              {/* Action Button */}
              <Button
                variant="gradient"
                size="lg"
                onClick={handleConsultation}
                className="w-full justify-center gap-2 shadow-lg shadow-cyan-500/20"
              >
                <span>Konsultasikan Estimasi Ini</span>
                <ArrowRight className="w-4 h-4" />
              </Button>

              <div className="text-center text-[11px] text-slate-500 mt-3">
                *Estimasi fleksibel dan disesuaikan dengan asesmen arsitektur aktual.
              </div>

            </Card>
          </div>

        </div>

      </div>
    </section>
  )
}

