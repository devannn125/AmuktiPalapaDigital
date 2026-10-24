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
      title: "Discovery & Blueprint",
      desc: "Analisis alur bisnis dan perancangan arsitektur teknologi tepat guna.",
      deliverable: "System Blueprint",
      icon: Search,
    },
    {
      step: "02",
      title: "Agile Engineering",
      desc: "Pengembangan software tangguh berbasis sprint dan clean architecture.",
      deliverable: "Cloud-Native Code",
      icon: Terminal,
    },
    {
      step: "03",
      title: "Cloud & Security",
      desc: "Peluncuran multi-cloud Kubernetes dengan proteksi enkripsi berlapis.",
      deliverable: "Zero-Downtime Deploy",
      icon: ShieldCheck,
    },
    {
      step: "04",
      title: "24/7 Operations",
      desc: "Monitoring berkelanjutan, SLA helpdesk, dan analitik performa.",
      deliverable: "Uptime & BI Insights",
      icon: MonitorCheck,
    },
  ]

  return (
    <section id="solusi" className="py-16 sm:py-20 relative overflow-hidden bg-slate-50/70 dark:bg-slate-900/40 border-b border-slate-100 dark:border-slate-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal direction="up" distance={20}>
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 space-y-2">
            <Badge variant="default" className="gap-1.5 px-2.5 py-0.5 text-xs">
              <Workflow className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
              <span>Alur Kerja</span>
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Metodologi Rekayasa
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm">
              Proses terstruktur dari riset awal hingga sistem beroperasi penuh.
            </p>
          </div>
        </ScrollReveal>

        {/* 4 Process Cards */}
        <StaggerContainer
          staggerDelay={0.1}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10 sm:mb-12"
        >
          {steps.map((s, idx) => {
            const Icon = s.icon
            return (
              <StaggerItem key={idx} direction="up" distance={20}>
                <div className="h-full relative rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 flex flex-col justify-between hover:border-sky-300 dark:hover:border-sky-700 transition-all duration-200">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] font-mono font-bold text-sky-700 dark:text-sky-300 bg-sky-50 dark:bg-sky-950/60 px-2 py-0.5 rounded border border-sky-100 dark:border-sky-800">
                        FASE {s.step}
                      </span>
                      <div className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mb-1.5">
                      {s.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-3">
                      {s.desc}
                    </p>
                  </div>

                  <div className="pt-2.5 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400 flex items-center justify-between">
                    <span>Output:</span>
                    <span className="font-semibold text-slate-800 dark:text-slate-200">{s.deliverable}</span>
                  </div>
                </div>
              </StaggerItem>
            )
          })}
        </StaggerContainer>

        {/* Banner */}
        <ScrollReveal direction="up" distance={20} delay={0.1}>
          <div className="rounded-2xl p-6 sm:p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white font-heading">
                Siap Memulai Proyek Digital?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                Konsultasikan rancangan sistem Anda bersama arsitek teknologi kami di Yogyakarta.
              </p>
            </div>

            <Button
              variant="default"
              size="sm"
              onClick={onOpenContact}
              className="w-full sm:w-auto shrink-0 gap-1.5 bg-sky-600 hover:bg-sky-700 text-white font-medium"
            >
              <span>Jadwalkan Diskusi</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Button>
          </div>
        </ScrollReveal>

      </div>
    </section>
  )
}
