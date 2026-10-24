import React, { useState } from "react"
import { Card } from "./ui/card"
import { Badge } from "./ui/badge"
import { 
  Users, 
  Briefcase, 
  Code, 
  Palette, 
  Calculator, 
  Workflow, 
  CheckCircle2, 
  Layers, 
  Crown,
  ChevronRight
} from "lucide-react"

export function OrgStructure() {
  const [activeRole, setActiveRole] = useState("ceo")

  const roles = [
    {
      id: "ceo",
      title: "Chief Executive Officer (CEO)",
      category: "Executive",
      icon: Crown,
      summary: "Perencanaan Strategis & Keputusan Bisnis",
      description: "Menetapkan visi jangka panjang, pengawasan program kerja, dan keputusan bisnis menyeluruh.",
      keyResponsibilities: [
        "Arah strategis dan kemitraan enterprise",
        "Akuntabilitas tata kelola korporasi",
      ],
      accent: "text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/60",
    },
    {
      id: "cto",
      title: "Chief Technology Officer (CTO)",
      category: "Executive",
      icon: Code,
      summary: "Kepemimpinan Teknologi & Arsitektur",
      description: "Memimpin divisi teknologi, perencanaan arsitektur sistem, serta riset dan stack software.",
      keyResponsibilities: [
        "Arsitektur software enterprise & cloud",
        "Standar mutu dan tata kelola keamanan",
      ],
      accent: "text-sky-700 dark:text-sky-400 border-sky-200 dark:border-sky-800 bg-sky-50 dark:bg-sky-950/60",
    },
    {
      id: "cmo",
      title: "Chief Marketing Officer (CMO)",
      category: "Executive",
      icon: Briefcase,
      summary: "Pemasaran & Hubungan Klien",
      description: "Mengembangkan branding korporat, strategi penetrasi pasar, dan kemitraan bisnis.",
      keyResponsibilities: [
        "Penetrasi pasar B2B & branding korporat",
        "Aliansi strategis klien dan institusi",
      ],
      accent: "text-rose-700 dark:text-rose-400 border-rose-200 dark:border-rose-800 bg-rose-50 dark:bg-rose-950/60",
    },
    {
      id: "coo",
      title: "Chief Operating Officer (COO)",
      category: "Executive",
      icon: Workflow,
      summary: "Operasional & Efisiensi Tim",
      description: "Mengawasi alur kerja harian lintas divisi dan pemanfaatan sumber daya internal perusahaan.",
      keyResponsibilities: [
        "Efisiensi proses kerja dan utilisasi SDM",
        "Ketepatan waktu delivery dan SLA proyek",
      ],
      accent: "text-indigo-700 dark:text-indigo-400 border-indigo-200 dark:border-indigo-800 bg-indigo-50 dark:bg-indigo-950/60",
    },
    {
      id: "head-of-eng",
      title: "Head of Engineering",
      category: "Engineering",
      icon: Layers,
      summary: "Supervisi Teknis & Standar Kode",
      description: "Memimpin para engineer dalam eksekusi sprint dan penerapan standar review kode ketat.",
      keyResponsibilities: [
        "Supervisi harian software engineer & QA",
        "Mentoring teknis tim dan peserta magang",
      ],
      accent: "text-teal-700 dark:text-teal-400 border-teal-200 dark:border-teal-800 bg-teal-50 dark:bg-teal-950/60",
    },
    {
      id: "uiux",
      title: "UI/UX Designer",
      category: "Design",
      icon: Palette,
      summary: "Pengalaman & Antarmuka Pengguna",
      description: "Merancang wireframe, user flow, dan design system intuitif untuk produk digital klien.",
      keyResponsibilities: [
        "Riset kebutuhan pengguna & prototyping",
        "Design system multi-platform konsisten",
      ],
      accent: "text-purple-700 dark:text-purple-400 border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-950/60",
    },
    {
      id: "accounting",
      title: "Accounting & Finance",
      category: "Finance",
      icon: Calculator,
      summary: "Pencatatan Keuangan & Anggaran",
      description: "Penganggaran proyek, administrasi kontrak, dan pelaporan keuangan akurat.",
      keyResponsibilities: [
        "Penganggaran infrastruktur dan lisensi",
        "Kepatuhan administrasi dan perpajakan",
      ],
      accent: "text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/60",
    },
  ]

  const current = roles.find((r) => r.id === activeRole) || roles[0]

  return (
    <section id="organisasi" className="py-16 sm:py-20 relative overflow-hidden bg-slate-50/70 dark:bg-slate-900/40 border-b border-slate-100 dark:border-slate-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 space-y-2">
          <Badge variant="default" className="gap-1.5 px-2.5 py-0.5 text-xs">
            <Users className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
            <span>Tata Kelola</span>
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Struktur Organisasi
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm">
            Jajaran kepemimpinan PT Amukti Palapa Digital.
          </p>
        </div>

        {/* Navigator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* List */}
          <div className="lg:col-span-5 space-y-1.5">
            {roles.map((role) => {
              const Icon = role.icon
              const isSelected = activeRole === role.id
              return (
                <button
                  key={role.id}
                  onClick={() => setActiveRole(role.id)}
                  className={`w-full flex items-center justify-between p-2.5 sm:p-3 rounded-xl border text-left transition-all duration-150 cursor-pointer ${
                    isSelected
                      ? "bg-white dark:bg-slate-800 border-sky-300 dark:border-sky-600 shadow-xs"
                      : "bg-white/60 dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800/80"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <div className={`p-1.5 rounded-lg border ${role.accent} shrink-0`}>
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <div className="overflow-hidden">
                      <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white truncate">{role.title}</div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400 truncate">{role.summary}</div>
                    </div>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 shrink-0 transition-transform ${
                      isSelected ? "text-sky-600 dark:text-sky-400 translate-x-0.5" : "text-slate-400"
                    }`}
                  />
                </button>
              )
            })}
          </div>

          {/* Details Card */}
          <div className="lg:col-span-7">
            <Card className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 sm:p-6 rounded-2xl sticky top-24">
              <div className="flex items-center justify-between mb-4">
                <Badge variant="outline" className={`text-xs ${current.accent}`}>
                  {current.category}
                </Badge>
                <span className="text-xs font-mono text-slate-400">Dokumen Hal. 6-7</span>
              </div>

              <div className="flex items-start gap-3 mb-4">
                <div className={`p-2.5 rounded-xl border ${current.accent} shrink-0`}>
                  <current.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white font-heading">
                    {current.title}
                  </h3>
                  <p className="text-xs text-sky-700 dark:text-sky-400 font-medium">
                    {current.summary}
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4 p-3 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-100 dark:border-slate-800">
                {current.description}
              </p>

              <div className="space-y-1.5">
                <div className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
                  Fungsi Pokok:
                </div>
                {current.keyResponsibilities.map((resp, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400 shrink-0" />
                    <span>{resp}</span>
                  </div>
                ))}
              </div>

            </Card>
          </div>

        </div>

      </div>
    </section>
  )
}
