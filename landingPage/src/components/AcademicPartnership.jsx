import React from "react"
import { Card } from "./ui/card"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { 
  GraduationCap, 
  Laptop, 
  GitBranch, 
  Calendar, 
  Building2,
  ArrowRight
} from "lucide-react"

export function AcademicPartnership({ onOpenContact }) {
  const internshipHighlights = [
    {
      title: "6 Bulan Proyek Nyata",
      desc: "Keterlibatan langsung pada produk digital aktif dan arsitektur enterprise.",
      icon: Calendar,
      detail: "Fleksibel",
    },
    {
      title: "Divisi Teknologi CTO",
      desc: "Penempatan di Software, Cloud, Cybersec, Data, atau IT Support.",
      icon: GitBranch,
      detail: "Mentoring praktisi",
    },
    {
      title: "Hybrid & Remote",
      desc: "Skema kerja fleksibel dengan platform kolaborasi dan repo daring.",
      icon: Laptop,
      detail: "Prambanan Hub & Daring",
    },
    {
      title: "Mitra Perguruan Tinggi",
      desc: "Kolaborasi kurikulum terapan (misal: UAJY Informatika) & konversi SKS.",
      icon: GraduationCap,
      detail: "Jalur karir talenta",
    },
  ]

  const workflowSteps = [
    { step: "01", name: "Orientasi", desc: "Arsitektur sistem & aturan repo" },
    { step: "02", name: "Desain Solusi", desc: "Perancangan modul & sprint" },
    { step: "03", name: "Development", desc: "Coding, testing & QA" },
    { step: "04", name: "Deployment", desc: "Review kode & laporan akhir" },
  ]

  return (
    <section id="magang" className="py-16 sm:py-20 relative overflow-hidden bg-slate-50/70 dark:bg-slate-900/40 border-b border-slate-100 dark:border-slate-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 space-y-2">
          <Badge variant="default" className="gap-1.5 px-2.5 py-0.5 text-xs">
            <GraduationCap className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
            <span>Kemitraan Akademik</span>
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Program Magang & Talenta
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm">
            Ruang pembelajaran kolaboratif bagi mahasiswa Informatika pada proyek riil.
          </p>
        </div>

        {/* 4 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8">
          {internshipHighlights.map((item, idx) => {
            const Icon = item.icon
            return (
              <Card
                key={idx}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 sm:p-5 flex flex-col justify-between hover:border-sky-300 dark:hover:border-sky-700 transition-all duration-200"
              >
                <div>
                  <div className="h-8 w-8 rounded-lg bg-sky-50 dark:bg-sky-950/60 border border-sky-100 dark:border-sky-800 flex items-center justify-center text-sky-600 dark:text-sky-400 mb-3">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">{item.title}</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-3">{item.desc}</p>
                </div>
                <div className="pt-2.5 border-t border-slate-100 dark:border-slate-800 text-[11px] font-mono text-sky-700 dark:text-sky-400 font-medium">
                  {item.detail}
                </div>
              </Card>
            )
          })}
        </div>

        {/* Workflow */}
        <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 sm:p-6 mb-6">
          <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3">
            Tahapan Magang 6 Bulan:
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {workflowSteps.map((step, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-100 dark:border-slate-800/80">
                <span className="text-xs font-mono font-bold text-sky-600 dark:text-sky-400">{step.step}</span>
                <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white mt-0.5">{step.name}</div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">{step.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* University Partnership Row */}
        <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-sky-50 dark:bg-sky-950/60 border border-sky-100 dark:border-sky-800 flex items-center justify-center text-sky-600 dark:text-sky-400 shrink-0">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                Kemitraan Universitas & Riset
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Penyelarasan kurikulum kampus dan inkubasi talenta digital muda.
              </p>
            </div>
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={onOpenContact}
            className="w-full sm:w-auto shrink-0 justify-center gap-1.5 text-xs border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-900"
          >
            <span>Daftar Kemitraan</span>
            <ArrowRight className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
          </Button>
        </div>

      </div>
    </section>
  )
}
