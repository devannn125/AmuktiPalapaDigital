import React from "react"
import { Card } from "./ui/card"
import { Badge } from "./ui/badge"
import { Target, Compass, Award, Lightbulb, Rocket, Zap } from "lucide-react"
import { StaggerContainer, StaggerItem, ScrollReveal } from "./ScrollReveal"

export function VisionMission() {
  const missions = [
    {
      number: "01",
      title: "Solusi Bernilai Tinggi & Relevan",
      desc: "Menghadirkan solusi teknologi yang inovatif, relevan, dan bernilai tinggi bagi kebutuhan bisnis modern.",
      icon: Lightbulb,
    },
    {
      number: "02",
      title: "Optimasi Proses Bisnis Tepat Sasaran",
      desc: "Membantu perusahaan mengoptimalkan proses bisnis melalui pemanfaatan teknologi digital yang tepat guna dan terukur.",
      icon: Zap,
    },
    {
      number: "03",
      title: "Sistem Adaptif Jangka Panjang",
      desc: "Membangun sistem digital yang adaptif, efisien, dan mampu mendukung akselerasi pertumbuhan bisnis jangka panjang.",
      icon: Rocket,
    },
    {
      number: "04",
      title: "Mitra Strategis Transformasi Enterprise",
      desc: "Menjadi partner teknologi strategis yang andal dan terpercaya dalam setiap etape perjalanan transformasi digital klien.",
      icon: Target,
    },
  ]

  const objectives = [
    {
      title: "Akselerasi Industri 4.0",
      desc: "Membantu pelaku bisnis menghadapi revolusi industri 4.0 melalui transformasi digital yang terarah, relevan, dan efektif.",
      badge: "Adaptabilitas",
    },
    {
      title: "Tata Kelola & Keamanan Data Klien",
      desc: "Memastikan keberlanjutan, integritas, dan keamanan data klien melalui tata kelola teknologi informasi (IT Governance) yang kokoh.",
      badge: "Keamanan Penuh",
    },
    {
      title: "Peningkatan Nilai & Efisiensi",
      desc: "Memberikan solusi teknologi informasi yang inovatif untuk meningkatkan nilai dan efisiensi proses bisnis enterprise.",
      badge: "Efisiensi Nyata",
    },
  ]

  return (
    <section id="visi-misi" className="py-24 relative overflow-hidden bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal direction="up" distance={25}>
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <Badge variant="amber" className="gap-1.5 px-3 py-1">
              <Compass className="w-3.5 h-3.5" />
              <span>Fondasi & Arah Strategis</span>
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Visi, Misi & Komitmen Transformasi
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">
              Nilai fundamental yang memandu PT Amukti Palapa Digital dalam merancang arsitektur sistem dan mendampingi mitra industri di seluruh Indonesia.
            </p>
          </div>
        </ScrollReveal>

        {/* Vision Hero Banner */}
        <ScrollReveal direction="up" distance={30} delay={0.1}>
          <div className="relative rounded-3xl p-8 sm:p-12 mb-16 overflow-hidden bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-slate-800 shadow-2xl">
            <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-4xl mx-auto text-center space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
                <Award className="w-3.5 h-3.5" />
                <span>Visi Korporasi</span>
              </div>

              <blockquote className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight font-heading leading-snug">
                &ldquo;Menjadi perusahaan teknologi digital terpercaya yang menghadirkan solusi inovatif dan berdampak dalam mempercepat transformasi bisnis menuju era digital.&rdquo;
              </blockquote>

              <div className="pt-4 max-w-2xl mx-auto text-sm text-slate-300 leading-relaxed italic border-t border-slate-800/80">
                &ldquo;Bagi kami, teknologi bukan sekadar alat, tetapi menjadi penggerak perubahan yang menciptakan efisiensi, meningkatkan produktivitas, dan membuka peluang pertumbuhan bisnis yang lebih besar.&rdquo;
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* 4 Missions Grid with Staggered Cascading Animation */}
        <div className="mb-16">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white font-heading">
              4 Misi Strategis Perusahaan
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Langkah konkret dalam merealisasikan transformasi digital tepat guna.
            </p>
          </div>

          <StaggerContainer
            staggerDelay={0.12}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {missions.map((m, idx) => {
              const Icon = m.icon
              return (
                <StaggerItem key={idx} direction="up" distance={25}>
                  <Card className="h-full bg-slate-900/60 border-slate-800 hover:border-cyan-500/40 p-6 flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="h-10 w-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="font-mono text-xl font-bold text-slate-600 group-hover:text-cyan-400 transition-colors">
                          {m.number}
                        </span>
                      </div>

                      <h4 className="text-base font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                        {m.title}
                      </h4>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {m.desc}
                      </p>
                    </div>
                  </Card>
                </StaggerItem>
              )
            })}
          </StaggerContainer>
        </div>

        {/* 3 Objectives of the Company */}
        <ScrollReveal direction="up" distance={30} delay={0.2}>
          <div className="rounded-2xl bg-slate-950/70 border border-slate-800/80 p-8">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-white font-heading">
                Tujuan Strategis Pelaksanaan Layanan
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Target pencapaian nilai bagi klien dan ekosistem bisnis enterprise:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {objectives.map((obj, i) => (
                <div
                  key={i}
                  className="p-5 rounded-xl bg-slate-900/70 border border-slate-800/80 space-y-3 hover:border-slate-700 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-cyan-400 font-semibold">Tujuan #{i + 1}</span>
                    <Badge variant="outline" className="text-[10px] text-cyan-300 border-cyan-500/30">
                      {obj.badge}
                    </Badge>
                  </div>
                  <h4 className="text-sm font-bold text-white">{obj.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{obj.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  )
}
