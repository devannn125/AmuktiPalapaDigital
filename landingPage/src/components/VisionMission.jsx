import React from "react"
import { Card } from "./ui/card"
import { Badge } from "./ui/badge"
import { Target, Compass, Award, Lightbulb, Rocket, Zap } from "lucide-react"
import { StaggerContainer, StaggerItem, ScrollReveal } from "./ScrollReveal"

export function VisionMission() {
  const missions = [
    {
      number: "01",
      title: "Solusi Tepat Guna",
      desc: "Menghadirkan solusi teknologi relevan dan bernilai tinggi bagi bisnis modern.",
      icon: Lightbulb,
    },
    {
      number: "02",
      title: "Optimasi Proses",
      desc: "Meningkatkan efisiensi kerja melalui pemanfaatan teknologi digital tepat sasaran.",
      icon: Zap,
    },
    {
      number: "03",
      title: "Sistem Adaptif",
      desc: "Membangun sistem yang tangguh mendukung pertumbuhan jangka panjang.",
      icon: Rocket,
    },
    {
      number: "04",
      title: "Mitra Strategis",
      desc: "Mendampingi enterprise di setiap langkah perjalanan transformasi digital.",
      icon: Target,
    },
  ]

  const objectives = [
    {
      title: "Kesiapan Industri 4.0",
      desc: "Transformasi sistem yang adaptif terhadap dinamika pasar digital.",
      badge: "Adaptif",
    },
    {
      title: "Keamanan Data Klien",
      desc: "Tata kelola IT berstandar tinggi untuk menjaga integritas data.",
      badge: "Keamanan",
    },
    {
      title: "Efisiensi Operasional",
      desc: "Otomasi sistem untuk efisiensi waktu dan produktivitas biaya.",
      badge: "Efisiensi",
    },
  ]

  return (
    <section id="visi-misi" className="py-16 sm:py-20 relative overflow-hidden bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal direction="up" distance={20}>
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 space-y-2">
            <Badge variant="default" className="gap-1.5 px-2.5 py-0.5 text-xs">
              <Compass className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
              <span>Arah Strategis</span>
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Visi & Misi Perusahaan
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm">
              Prinsip fundamental PT Amukti Palapa Digital dalam menghadirkan solusi teknologi.
            </p>
          </div>
        </ScrollReveal>

        {/* Vision Hero Banner */}
        <ScrollReveal direction="up" distance={20} delay={0.1}>
          <div className="rounded-2xl p-6 sm:p-8 mb-10 bg-slate-50 dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sky-700 dark:text-sky-300 text-xs font-semibold">
              <Award className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
              <span>Visi Utama</span>
            </div>

            <p className="text-lg sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight font-heading leading-snug">
              &ldquo;Menjadi perusahaan teknologi digital terpercaya yang menghadirkan solusi inovatif dan berdampak dalam mempercepat transformasi bisnis.&rdquo;
            </p>
          </div>
        </ScrollReveal>

        {/* 4 Missions Grid */}
        <div className="mb-10">
          <StaggerContainer
            staggerDelay={0.08}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4"
          >
            {missions.map((m, idx) => {
              const Icon = m.icon
              return (
                <StaggerItem key={idx} direction="up" distance={15}>
                  <Card className="h-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 sm:p-5 flex flex-col justify-between hover:border-sky-300 dark:hover:border-sky-700 transition-all duration-200">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="h-8 w-8 rounded-lg bg-sky-50 dark:bg-sky-950/60 border border-sky-100 dark:border-sky-800 flex items-center justify-center text-sky-600 dark:text-sky-400">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="font-mono text-xs font-bold text-slate-400 dark:text-slate-500">
                          {m.number}
                        </span>
                      </div>

                      <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                        {m.title}
                      </h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                        {m.desc}
                      </p>
                    </div>
                  </Card>
                </StaggerItem>
              )
            })}
          </StaggerContainer>
        </div>

        {/* 3 Objectives */}
        <ScrollReveal direction="up" distance={15} delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
            {objectives.map((obj, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-1.5"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono text-sky-700 dark:text-sky-400 font-bold">Tujuan 0{i + 1}</span>
                  <Badge variant="default" className="text-[10px] px-2 py-0">
                    {obj.badge}
                  </Badge>
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">{obj.title}</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{obj.desc}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

      </div>
    </section>
  )
}
