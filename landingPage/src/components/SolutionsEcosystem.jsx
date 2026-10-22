import React from "react"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { 
  Workflow, 
  Search, 
  Terminal, 
  ShieldCheck, 
  ArrowRight,
  TrendingUp,
  MonitorCheck
} from "lucide-react"
import { StaggerContainer, StaggerItem, ScrollReveal } from "./ScrollReveal"

export function SolutionsEcosystem({ onOpenContact }) {
  const steps = [
    {
      step: "01",
      phase: "Discovery & Enterprise Blueprint",
      title: "Asesmen Proses Bisnis & Arsitektur",
      desc: "Menganalisis alur kerja enterprise yang ada, mengidentifikasi celah efisiensi, serta menyusun cetak biru arsitektur teknologi tepat guna yang terukur.",
      deliverable: "System Blueprint & Tech Stack Roadmap",
      icon: Search,
    },
    {
      step: "02",
      phase: "Agile Engineering & Development",
      title: "Rekayasa Sistem & Penulisan Kode Handal",
      desc: "Implementasi perangkat lunak dengan pendekatan Agile/Scrum, standar Clean Architecture, testing otomatis, serta review kode berkala oleh senior architect.",
      deliverable: "High-Performance Cloud-Native Codebase",
      icon: Terminal,
    },
    {
      step: "03",
      phase: "Cloud Deployment & Cyber Hardening",
      title: "Orkestrasi Cloud & Pengamanan Zero-Trust",
      desc: "Peluncuran sistem ke lingkungan multi-cloud elastis dengan Kubernetes, konfigurasi CI/CD otomatis, enkripsi data, dan audit keamanan berlapis.",
      deliverable: "Zero-Downtime Multi-Cloud Infrastructure",
      icon: ShieldCheck,
    },
    {
      step: "04",
      phase: "Continuous Operations & Data Optimization",
      title: "Pemantauan 24/7 & Pengolahan Inteligensi Data",
      desc: "Dukungan operasional berkelanjutan melalui IT Service Desk, pemantauan performa real-time, serta analitik data cerdas untuk akselerasi pertumbuhan bisnis.",
      deliverable: "24/7 SLA Uptime & Executive Dashboard",
      icon: MonitorCheck,
    },
  ]

  return (
    <section id="solusi" className="py-24 relative overflow-hidden bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal direction="up" distance={25}>
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <Badge variant="gradient" className="gap-1.5 px-3 py-1">
              <Workflow className="w-3.5 h-3.5" />
              <span>Alur Transformasi Digital</span>
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Metodologi Rekayasa End-to-End
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">
              Bagaimana PT Amukti Palapa Digital mentransformasi kebutuhan bisnis kompleks menjadi sistem digital yang adaptif, aman, dan berkinerja tinggi.
            </p>
          </div>
        </ScrollReveal>

        {/* 4 Process Cards with Staggered Cascading Reveal */}
        <StaggerContainer
          staggerDelay={0.15}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {steps.map((s, idx) => {
            const Icon = s.icon
            return (
              <StaggerItem key={idx} direction="up" distance={30}>
                <div className="h-full relative rounded-2xl bg-slate-900/50 border border-slate-800 p-6 flex flex-col justify-between group hover:border-cyan-500/40 hover:bg-slate-900/80 transition-all duration-300 hover:-translate-y-1">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-950/40 px-2.5 py-1 rounded-md border border-cyan-500/30">
                        FASE {s.step}
                      </span>
                      <div className="p-2 rounded-xl bg-slate-800/80 text-slate-300 group-hover:text-cyan-300 transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    <div className="text-[11px] font-mono text-slate-400 mb-1">{s.phase}</div>
                    <h3 className="text-base font-bold text-white mb-2.5 group-hover:text-cyan-300 transition-colors">
                      {s.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed mb-4">
                      {s.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-800/80">
                    <div className="text-[10px] text-slate-500 uppercase tracking-wider">Hasil Akhir:</div>
                    <div className="text-xs font-semibold text-slate-200 mt-0.5">{s.deliverable}</div>
                  </div>
                </div>
              </StaggerItem>
            )
          })}
        </StaggerContainer>

        {/* Banner: Sinergi Enterprise with Scale/Reveal */}
        <ScrollReveal direction="up" distance={30} delay={0.2}>
          <div className="rounded-3xl p-8 sm:p-10 bg-gradient-to-r from-blue-950/40 via-cyan-950/30 to-slate-950 border border-cyan-500/20 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 uppercase tracking-wider">
                <TrendingUp className="w-4 h-4" />
                <span>Dampak Bisnis yang Terukur</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-heading">
                Siap Mentransformasi Proses Bisnis Anda Bersama Ahlinya?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Dapatkan konsultasi arsitektur awal tanpa biaya komitmen. Tim spesialis kami di Sleman, Yogyakarta siap menganalisis kebutuhan sistem organisasi Anda.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Button
                variant="gradient"
                size="lg"
                onClick={onOpenContact}
                className="gap-2 shadow-lg shadow-cyan-500/20 hover:scale-105 transition-transform"
              >
                <span>Jadwalkan Sesi Discovery</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  )
}
