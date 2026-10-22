import React, { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { 
  Code2, 
  Cloud, 
  ShieldCheck, 
  BarChart3, 
  Headphones, 
  Check, 
  ArrowRight, 
  Layers, 
  Cpu, 
  Server, 
  Lock, 
  LineChart, 
  LifeBuoy,
  Sparkles
} from "lucide-react"

export function Divisions({ onOpenContact }) {
  const [selectedDivision, setSelectedDivision] = useState(0)

  const divisions = [
    {
      id: "software-engineering",
      icon: Code2,
      title: "Software Engineering Division",
      subtitle: "Arsitektur & Rekayasa Perangkat Lunak Modern",
      color: "from-cyan-500 to-blue-600",
      accentBg: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
      description:
        "Bertanggung jawab atas perancangan, pengembangan, dan pemeliharaan perangkat lunak serta aplikasi digital skala enterprise yang tangguh, aman, dan dapat diskalakan sesuai kebutuhan proses bisnis spesifik klien.",
      scopeList: [
        "Pengembangan Aplikasi Web Enterprise & Portofolio Mobile (iOS & Android)",
        "Perancangan Arsitektur Microservices & API Gateway Skalabilitas Tinggi",
        "Refactoring & Modernisasi Legacy Codebase menuju Cloud-Native",
        "Penerapan Praktik Clean Architecture, Automated Testing & CI/CD Pipeline",
      ],
      technologies: ["React", "TypeScript", "Node.js", "Go", "Next.js", "PostgreSQL", "Docker", "GraphQL"],
      metrics: "99.9% Code Reliability",
      leadRole: "Lead Software Architect & Engineering Team",
    },
    {
      id: "infrastructure-cloud",
      icon: Cloud,
      title: "Infrastructure & Cloud Division",
      subtitle: "Infrastruktur Cloud Elastis & High Availability",
      color: "from-blue-500 to-indigo-600",
      accentBg: "bg-blue-500/10 text-blue-400 border-blue-500/30",
      description:
        "Meliputi pengelolaan infrastruktur cloud, server berkinerja tinggi, jaringan terdistribusi, dan penyimpanan data terpusat guna memastikan kelancaran operasional sistem dengan latensi minimum dan redundansi penuh.",
      scopeList: [
        "Multi-Cloud & Hybrid Cloud Deployment (AWS, Google Cloud, Azure, On-Premise)",
        "Otomasi Infrastruktur Berbasis Kode (Infrastructure as Code / Terraform)",
        "Container Orchestration dengan Kubernetes (K8s) & Service Mesh",
        "Penyimpanan Data Terdistribusi & Perancangan Disaster Recovery Plan (DRP)",
      ],
      technologies: ["Kubernetes", "Docker", "Terraform", "AWS", "Google Cloud", "Nginx", "Linux", "Prometheus"],
      metrics: "< 20ms Edge Latency",
      leadRole: "Principal Cloud & DevOps Specialist",
    },
    {
      id: "cybersecurity",
      icon: ShieldCheck,
      title: "Cybersecurity Division",
      subtitle: "Proteksi Data Berlapis & Kepatuhan Tata Kelola",
      color: "from-emerald-500 to-teal-600",
      accentBg: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
      description:
        "Fokus pada perlindungan ekosistem teknologi klien melalui audit sistem keamanan, enkripsi data sensitif, mitigasi kerentanan informasi, dan implementasi tata kelola keamanan berstandar internasional.",
      scopeList: [
        "Vulnerability Assessment & Penetration Testing (VAPT) Berkala",
        "Implementasi Arsitektur Zero-Trust & Identity Access Management (IAM)",
        "Enkripsi Data End-to-End (At Rest & In Transit) sesuai UU PDP",
        "Monitoring Ancaman Real-time & Protokol Tanggap Insiden Keamanan Siber",
      ],
      technologies: ["Zero Trust", "OWASP Top 10", "WAF", "TLS 1.3", "SIEM", "Snort", "OAuth 2.0", "SonarQube"],
      metrics: "Zero Critical Breach",
      leadRole: "Certified Information Security Consultant",
    },
    {
      id: "data-analytics",
      icon: BarChart3,
      title: "Data & Analytics Division",
      subtitle: "Inteligensi Bisnis & Inovasi Transformasi Digital",
      color: "from-amber-500 to-orange-600",
      accentBg: "bg-amber-500/10 text-amber-400 border-amber-500/30",
      description:
        "Terlibat aktif dalam pengolahan dan analisis data besar, perancangan pipeline data analitis, serta pengembangan solusi inovatif yang mendorong pengambilan keputusan strategis klien enterprise berbasis bukti (data-driven).",
      scopeList: [
        "Perancangan Modern Data Pipeline & ETL/ELT Otomatis",
        "Executive Dashboard & Visualisasi Business Intelligence Interaktif",
        "Predictive Analytics & Integrasi Model Machine Learning Terapan",
        "Audit Kualitas Data & Optimasi Arsitektur Data Warehouse",
      ],
      technologies: ["Python", "Apache Spark", "BigQuery", "PostgreSQL", "Power BI", "Pandas", "Scikit-Learn", "dbt"],
      metrics: "Real-time Telemetry",
      leadRole: "Senior Data Scientist & BI Analyst",
    },
    {
      id: "it-operations-support",
      icon: Headphones,
      title: "IT Operations & Service Desk Division",
      subtitle: "Dukungan Operasional 24/7 & Pemeliharaan Sistem",
      color: "from-purple-500 to-pink-600",
      accentBg: "bg-purple-500/10 text-purple-400 border-purple-500/30",
      description:
        "Menyediakan layanan helpdesk profesional, dukungan teknis komprehensif bagi pengguna aplikasi, serta pemantauan operasional sistem secara berkelanjutan untuk menjamin SLA uptime bisnis klien tetap prima.",
      scopeList: [
        "Layanan Helpdesk & Manajemen Tiket Insiden dengan SLA Terukur",
        "Pemantauan Operasional Sistem 24/7 & Peringatan Dini (Alerting System)",
        "Pemberian Pelatihan, Onboarding Pengguna, dan Dokumentasi Teknis Sistem",
        "Troubleshooting Cepat terhadap Isu Perangkat Keras, Jaringan, dan Software",
      ],
      technologies: ["Grafana", "Zabbix", "Jira Service Desk", "Slack Ops", "PagerDuty", "Uptime Kuma", "Bash"],
      metrics: "< 15 Mins SLA Response",
      leadRole: "IT Operations Lead & Support Specialists",
    },
  ]

  const current = divisions[selectedDivision]

  return (
    <section id="divisi" className="py-24 relative overflow-hidden bg-slate-950/60 border-y border-slate-900">
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-cyan-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-medium text-cyan-400">
            <Layers className="w-3.5 h-3.5" />
            <span>Departemen Teknologi PT Amukti Palapa Digital</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            5 Pilar Divisi Khusus di Bawah Komando CTO
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Sesuai struktur operasional pada dokumen perusahaan, setiap divisi memiliki mandat spesifik yang saling terintegrasi untuk memberikan solusi komputasi enterprise berstandar mutu tinggi.
          </p>
        </div>

        {/* Tab Selector Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2.5 p-1.5 rounded-2xl bg-slate-900/80 border border-slate-800/80 mb-10 backdrop-blur-md">
          {divisions.map((div, idx) => {
            const Icon = div.icon
            const isActive = selectedDivision === idx
            return (
              <button
                key={div.id}
                onClick={() => setSelectedDivision(idx)}
                className={`flex items-center gap-2.5 px-3 py-3 rounded-xl text-left transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-slate-800 text-white shadow-lg border border-cyan-500/30 scale-[1.02]"
                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/40"
                }`}
              >
                <div
                  className={`p-2 rounded-lg shrink-0 ${
                    isActive ? "bg-cyan-500/20 text-cyan-300" : "bg-slate-800/80 text-slate-400"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <div className="overflow-hidden">
                  <div className="text-xs font-semibold truncate">{div.title.replace(" Division", "")}</div>
                  <div className="text-[10px] text-slate-500 truncate hidden sm:block">{div.subtitle}</div>
                </div>
              </button>
            )
          })}
        </div>

        {/* Active Division Focus Showcase (Shadcn Card) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Division Card */}
          <Card className="lg:col-span-8 bg-slate-900/90 border-slate-800 backdrop-blur-xl relative overflow-hidden flex flex-col justify-between">
            {/* Ambient top border gradient */}
            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${current.color}`} />

            <CardHeader className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <Badge variant="gradient" className="gap-1.5">
                  <current.icon className="w-3.5 h-3.5" />
                  <span>Divisi Teknologi Resmi</span>
                </Badge>
                <div className="text-xs font-mono text-cyan-400 bg-cyan-950/40 px-3 py-1 rounded-full border border-cyan-500/20">
                  Target: {current.metrics}
                </div>
              </div>

              <div>
                <CardTitle className="text-2xl sm:text-3xl font-bold text-white">
                  {current.title}
                </CardTitle>
                <CardDescription className="text-cyan-400/90 font-medium text-sm mt-1">
                  {current.subtitle}
                </CardDescription>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed pt-2">
                {current.description}
              </p>
            </CardHeader>

            <CardContent className="space-y-6">
              <div>
                <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-3">
                  Ruang Lingkup & Tanggung Jawab Operasional:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {current.scopeList.map((scope, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-950/50 border border-slate-800/80 text-xs sm:text-sm text-slate-200"
                    >
                      <div className="p-1 rounded bg-cyan-500/10 text-cyan-400 shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span>{scope}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stack tags */}
              <div>
                <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2.5">
                  Fondasi Teknologi & Standar Implementasi:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {current.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-800/80 text-slate-300 border border-slate-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </CardContent>

            <div className="p-6 pt-0 border-t border-slate-800/80 mt-6 flex flex-wrap items-center justify-between gap-4">
              <div className="text-xs text-slate-400">
                Pimpinan: <span className="text-slate-200 font-medium">{current.leadRole}</span>
              </div>
              <Button
                variant="gradient"
                size="sm"
                onClick={onOpenContact}
                className="gap-2 text-xs"
              >
                <span>Konsultasi Kebutuhan Divisi Ini</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Button>
            </div>
          </Card>

          {/* Side Synergy & CTO Overview Card */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <Card className="bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border-slate-800 p-6 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400 mb-2 uppercase tracking-wider">
                  <Cpu className="w-4 h-4" />
                  <span>Integrasi Lintas Divisi</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-3">
                  Sinergi Terpadu untuk Zero-Downtime
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  Kelima divisi di PT Amukti Palapa Digital tidak bekerja dalam silo. Tim Software Engineering bersinergi dengan Cloud & Cybersecurity sejak baris kode pertama, dipantau secara real-time oleh IT Operations, dan dioptimalkan melalui analitik data.
                </p>

                <div className="space-y-3 border-t border-slate-800/80 pt-4">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400">Pengawasan Arsitektur</span>
                    <span className="text-slate-200 font-medium">Chief Technology Officer (CTO)</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400">Eksekusi Engineering</span>
                    <span className="text-slate-200 font-medium">Head of Engineering</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400">Pengalaman Pengguna</span>
                    <span className="text-slate-200 font-medium">UI/UX Design Studio</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400">Lokasi Lab Engineering</span>
                    <span className="text-cyan-400 font-mono">Prambanan, Sleman, DIY</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-800/80 mt-6">
                <a href="#simulasi">
                  <Button variant="outline" className="w-full justify-center text-xs gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Hitung Kebutuhan Proyek Anda</span>
                  </Button>
                </a>
              </div>
            </Card>
          </div>

        </div>

      </div>
    </section>
  )
}

