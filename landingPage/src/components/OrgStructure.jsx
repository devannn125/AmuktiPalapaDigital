import React, { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { 
  Users, 
  Briefcase, 
  Code, 
  Palette, 
  Calculator, 
  Workflow, 
  ShieldCheck, 
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
      category: "C-Level Executive",
      icon: Crown,
      summary: "Perencanaan Strategis & Keputusan Bisnis Menyeluruh",
      description:
        "Bertanggung jawab atas perencanaan strategis perusahaan, pengawasan pelaksanaan program kerja, serta pengambilan keputusan bisnis dan teknologi secara keseluruhan untuk memastikan arah pertumbuhan perusahaan yang berkelanjutan.",
      keyResponsibilities: [
        "Menetapkan visi jangka panjang dan peta jalan bisnis perusahaan",
        "Pengawasan menyeluruh atas implementasi program kerja lintas divisi",
        "Pengambilan keputusan strategis investasi teknologi dan kemitraan enterprise",
        "Menjaga akuntabilitas dan tata kelola korporasi (corporate governance)",
      ],
      color: "from-amber-400 to-amber-600",
      accent: "text-amber-400 border-amber-500/30 bg-amber-500/10",
    },
    {
      id: "cto",
      title: "Chief Technology Officer (CTO)",
      category: "C-Level Executive",
      icon: Code,
      summary: "Kepemimpinan Teknologi & Perencanaan Arsitektur",
      description:
        "Bertugas memimpin keseluruhan divisi teknologi perusahaan, melakukan perencanaan arsitektur sistem, serta mengawasi siklus riset, pengembangan, dan pemeliharaan produk perangkat lunak.",
      keyResponsibilities: [
        "Memimpin 5 pilar divisi teknologi informasi perusahaan",
        "Merancang arsitektur sistem enterprise yang scalable dan resilient",
        "Memilih stack teknologi, standar keamanan data, dan metodologi DevOps",
        "Memastikan kesiapan infrastruktur cloud menghadapi beban tinggi",
      ],
      color: "from-cyan-400 to-blue-600",
      accent: "text-cyan-400 border-cyan-500/30 bg-cyan-500/10",
    },
    {
      id: "cmo",
      title: "Chief Marketing Officer (CMO)",
      category: "C-Level Executive",
      icon: Briefcase,
      summary: "Pemasaran Strategis, Branding & Hubungan Klien",
      description:
        "Bertanggung jawab atas strategi pemasaran, branding korporat, dan pengembangan hubungan yang berkesinambungan dengan klien enterprise serta mitra bisnis perusahaan.",
      keyResponsibilities: [
        "Memformulasikan strategi penetrasi pasar digital B2B dan enterprise",
        "Membangun positioning dan reputasi brand Amukti Palapa Digital",
        "Menjalin aliansi strategis dengan sektor industri dan institusi pendidikan",
        "Menganalisis tren pasar transformasi digital untuk inovasi layanan baru",
      ],
      color: "from-pink-400 to-rose-600",
      accent: "text-pink-400 border-pink-500/30 bg-pink-500/10",
    },
    {
      id: "coo",
      title: "Chief Operating Officer (COO)",
      category: "C-Level Executive",
      icon: Workflow,
      summary: "Operasional Harian, Efisiensi & Sumber Daya Internal",
      description:
        "Mengawasi operasional harian perusahaan, memastikan efisiensi proses kerja antar divisi, serta mengelola optimalisasi sumber daya internal perusahaan.",
      keyResponsibilities: [
        "Memastikan alur kerja lintas departemen berjalan lancar tanpa friksi",
        "Manajemen sumber daya manusia dan fasilitas teknologi pendukung",
        "Penyelarasan operasional proyek agar delivery tepat waktu dan sesuai SLA",
        "Evaluasi berkala terhadap efektivitas dan produktivitas internal",
      ],
      color: "from-indigo-400 to-purple-600",
      accent: "text-indigo-400 border-indigo-500/30 bg-indigo-500/10",
    },
    {
      id: "head-of-eng",
      title: "Head of Engineering",
      category: "Engineering Management",
      icon: Layers,
      summary: "Kepemimpinan Tim Rekayasa & Standar Kualitas Teknis",
      description:
        "Memimpin tim engineering dalam pengembangan aplikasi, sistem, dan layanan berbasis digital sesuai kebutuhan klien dan standar kualitas perusahaan.",
      keyResponsibilities: [
        "Supervisi teknis harian para software engineer dan DevOps",
        "Pemberlakuan standar code review ketat, testing, dan QA deployment",
        "Penyelarasan kebutuhan fungsional klien ke dalam sprint teknis",
        "Bimbingan teknis intensif kepada staf dan peserta program magang",
      ],
      color: "from-teal-400 to-emerald-600",
      accent: "text-teal-400 border-teal-500/30 bg-teal-500/10",
    },
    {
      id: "uiux",
      title: "UI/UX Designer",
      category: "Design & Experience",
      icon: Palette,
      summary: "Perancangan Pengalaman & Antarmuka Pengguna",
      description:
        "Merancang antarmuka dan pengalaman pengguna (user interface dan user experience) dari produk digital yang dikembangkan perusahaan agar intuitif, ergonomis, dan modern.",
      keyResponsibilities: [
        "Riset pengguna dan pemetaan alur perjalanan pengguna (user journey)",
        "Perancangan wireframe, interaktif prototype, dan high-fidelity mockups",
        "Pemeliharaan design system yang konsisten untuk seluruh produk klien",
        "Kolaborasi erat dengan tim engineering untuk kesempurnaan implementasi",
      ],
      color: "from-violet-400 to-purple-600",
      accent: "text-violet-400 border-violet-500/30 bg-violet-500/10",
    },
    {
      id: "accounting",
      title: "Accounting & Finance",
      category: "Financial Governance",
      icon: Calculator,
      summary: "Pencatatan Keuangan, Penganggaran & Tata Kelola",
      description:
        "Mengelola pencatatan keuangan, penganggaran proyek, serta pelaporan administrasi keuangan perusahaan secara akurat, transparan, dan tepat waktu.",
      keyResponsibilities: [
        "Penganggaran alokasi biaya infrastruktur, lisensi, dan pengembangan",
        "Penyusunan laporan keuangan berkala sesuai standar akuntansi yang berlaku",
        "Administrasi perpajakan, kontrak proyek, dan kepatuhan finansial",
        "Pengelolaan arus kas operasional untuk menunjang kelancaran riset IT",
      ],
      color: "from-emerald-400 to-green-600",
      accent: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
    },
  ]

  const current = roles.find((r) => r.id === activeRole) || roles[0]

  return (
    <section id="organisasi" className="py-24 relative overflow-hidden bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge variant="gradient" className="gap-1.5 px-3 py-1">
            <Users className="w-3.5 h-3.5" />
            <span>Tata Kelola Perusahaan</span>
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Struktur Organisasi & Kepemimpinan
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Berdasarkan Gambar 1 dan deskripsi tugas struktur organisasi PT Amukti Palapa Digital, setiap lini kepemimpinan memegang peranan krusial dalam keberhasilan delivery sistem.
          </p>
        </div>

        {/* Interactive Structure Navigator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Role List (Left Side) */}
          <div className="lg:col-span-5 space-y-2">
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3 px-1">
              Daftar Posisi Struktur Organisasi:
            </div>
            {roles.map((role) => {
              const Icon = role.icon
              const isSelected = activeRole === role.id
              return (
                <button
                  key={role.id}
                  onClick={() => setActiveRole(role.id)}
                  className={`w-full flex items-center justify-between p-3.5 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? "bg-slate-900 border-cyan-500/50 shadow-lg shadow-cyan-500/10 scale-[1.01]"
                      : "bg-slate-950/60 border-slate-800/80 hover:bg-slate-900/60 hover:border-slate-700"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg border ${role.accent}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">{role.title}</div>
                      <div className="text-xs text-slate-400">{role.summary}</div>
                    </div>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${
                      isSelected ? "text-cyan-400 translate-x-0.5" : "text-slate-600"
                    }`}
                  />
                </button>
              )
            })}
          </div>

          {/* Role Details Card (Right Side) */}
          <div className="lg:col-span-7">
            <Card className="bg-slate-900/90 border-slate-800 relative overflow-hidden backdrop-blur-xl p-8 sticky top-28">
              <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${current.color}`} />

              <div className="flex items-center justify-between gap-4 mb-6">
                <Badge variant="outline" className={`text-xs ${current.accent}`}>
                  {current.category}
                </Badge>
                <div className="text-xs font-mono text-slate-400">
                  Dokumen Resmi Hal. 6 & 7
                </div>
              </div>

              <div className="flex items-start gap-4 mb-6">
                <div className={`p-3.5 rounded-2xl border ${current.accent}`}>
                  <current.icon className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white font-heading">
                    {current.title}
                  </h3>
                  <p className="text-sm text-cyan-400 font-medium mt-0.5">
                    {current.summary}
                  </p>
                </div>
              </div>

              <div className="mb-6 p-4 rounded-xl bg-slate-950/70 border border-slate-800/80">
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Uraian Tugas Resmi:
                </div>
                <p className="text-sm text-slate-200 leading-relaxed">
                  {current.description}
                </p>
              </div>

              <div className="space-y-3">
                <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  Tanggung Jawab Pokok & Fungsi Kerja:
                </div>
                <div className="space-y-2.5">
                  {current.keyResponsibilities.map((resp, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-950/40 border border-slate-800/60 text-xs sm:text-sm text-slate-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>
              </div>

            </Card>
          </div>

        </div>

      </div>
    </section>
  )
}

