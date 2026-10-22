import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { 
  GraduationCap, 
  BookOpen, 
  Laptop, 
  GitBranch, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  Sparkles,
  Award,
  Users2,
  Building2,
  ArrowRight
} from "lucide-react"

export function AcademicPartnership({ onOpenContact }) {
  const internshipHighlights = [
    {
      title: "6 Bulan Pengalaman Nyata",
      desc: "Durasi terstruktur selama 6 bulan untuk mendalami alur kerja profesional pada proyek riil, bukan sekadar tugas simulasi.",
      icon: Calendar,
      detail: "10 Agustus - 10 Februari • Senin-Jumat 09:00 - 17:00 WIB",
    },
    {
      title: "Penempatan Divisi CTO",
      desc: "Ditempatkan langsung pada salah satu dari 5 divisi teknologi: Software Engineering, Cloud, Cybersec, Data, atau IT Support.",
      icon: GitBranch,
      detail: "Mentoring intensif oleh praktisi & Engineering Leads",
    },
    {
      title: "Model Kerja Fleksibel Hybrid & Remote",
      desc: "Menyesuaikan dinamika kerja modern dengan fasilitas platform kolaborasi daring, akses repository kode, dan infrastruktur cloud.",
      icon: Laptop,
      detail: "Daring (Remote) & On-Site Sleman Yogyakarta",
    },
    {
      title: "Sinergi Akademik Terpadu",
      desc: "Bekerja sama erat dengan institusi pendidikan tinggi terkemuka, seperti Universitas Atma Jaya Yogyakarta (UAJY) Informatika.",
      icon: GraduationCap,
      detail: "Konversi SKS, Laporan Akhir & Jalur Fast-Track Rekrutmen",
    },
  ]

  const workflowSteps = [
    { step: "01", name: "Observasi & Orientasi", desc: "Pemahaman arsitektur sistem, aturan kode, dan tools kolaborasi tim." },
    { step: "02", name: "Perancangan Solusi", desc: "Penyusunan arsitektur teknis dan diagram alur bersama Lead Engineer." },
    { step: "03", name: "Pengembangan Nyata", desc: "Penulisan kode, unit testing, dan integrasi modul pada platform aktif." },
    { step: "04", name: "Evaluasi & Deployment", desc: "Review kualitas kode, pengujian performa, dan dokumentasi logbook." },
  ]

  return (
    <section id="magang" className="py-24 relative overflow-hidden bg-slate-950 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge variant="amber" className="gap-1.5 px-3 py-1">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Kemitraan Akademik & Pengembangan Talenta</span>
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Program Inkubasi Magang & Talenta Digital
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Sesuai komitmen pada Bab I & Bab III Proposal Magang PT Amukti Palapa Digital, kami membuka ruang pembelajaran kolaboratif bagi mahasiswa Informatika untuk mencetak engineer masa depan berdaya saing global.
          </p>
        </div>

        {/* 4 Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {internshipHighlights.map((item, idx) => {
            const Icon = item.icon
            return (
              <Card
                key={idx}
                className="bg-slate-900/60 border-slate-800 hover:border-cyan-500/40 p-6 flex flex-col justify-between group transition-all duration-300"
              >
                <div>
                  <div className="h-10 w-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">{item.desc}</p>
                </div>
                <div className="pt-3 border-t border-slate-800/80 text-[11px] font-mono text-cyan-300">
                  {item.detail}
                </div>
              </Card>
            )
          })}
        </div>

        {/* Workflow Timeline Banner */}
        <div className="rounded-2xl bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border border-slate-800 p-8 sm:p-10 mb-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                Alur Kerja Program (Bab III Bagian A)
              </span>
              <h3 className="text-2xl font-bold text-white mt-1">
                4 Tahapan Pembelajaran Terstruktur
              </h3>
            </div>
            <div className="text-xs text-slate-400 bg-slate-900 px-3.5 py-1.5 rounded-full border border-slate-800 self-start">
              Fasilitas: Akses Repo Git, Cloud Sandbox, & Mentoring
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {workflowSteps.map((step, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 relative"
              >
                <div className="text-xl font-mono font-bold text-cyan-400 mb-2">
                  {step.step}
                </div>
                <div className="text-sm font-bold text-white mb-1">{step.name}</div>
                <div className="text-xs text-slate-400 leading-relaxed">{step.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Synergy Card: University Partnership */}
        <div className="rounded-2xl bg-slate-900/40 border border-slate-800/80 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="h-14 w-14 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
              <Building2 className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">
                Kemitraan Perguruan Tinggi & Riset Terapan
              </h4>
              <p className="text-xs sm:text-sm text-slate-400 max-w-2xl mt-0.5">
                Bermitra dengan program studi teknologi informasi untuk menyelaraskan kurikulum kampus dengan kebutuhan industri aktual, riset terapan bersama, serta rekrutmen talenta muda berbakat.
              </p>
            </div>
          </div>

          <Button
            variant="outline"
            onClick={onOpenContact}
            className="shrink-0 gap-2 text-xs"
          >
            <span>Daftar Mitra Kampus / Magang</span>
            <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
          </Button>
        </div>

      </div>
    </section>
  )
}

