import React, { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
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
  Sparkles 
} from "lucide-react"

export function Divisions({ onOpenContact }) {
  const [selectedDivision, setSelectedDivision] = useState(0)

  const divisions = [
    {
      id: "software-engineering",
      icon: Code2,
      title: "Software Engineering",
      subtitle: "Aplikasi Web, Mobile & Microservices",
      description: "Pengembangan perangkat lunak kustom berskala enterprise dengan arsitektur modern dan testing otomatis.",
      scopeList: [
        "Aplikasi Web & Mobile (iOS / Android)",
        "Arsitektur Microservices & REST/gRPC API",
        "CI/CD Pipeline & Automated Testing",
      ],
      technologies: ["React", "TypeScript", "Node.js", "Go", "Next.js", "PostgreSQL", "Docker"],
      metrics: "99.9% Reliable",
      leadRole: "Lead Software Architect",
    },
    {
      id: "infrastructure-cloud",
      icon: Cloud,
      title: "Infrastructure & Cloud",
      subtitle: "Cloud Elastis & High Availability",
      description: "Pengelolaan server terdistribusi, multi-cloud, container Kubernetes, dan pemulihan bencana.",
      scopeList: [
        "Multi-Cloud Deployment (AWS, GCP, Azure)",
        "Orkestrasi Kubernetes & Terraform (IaC)",
        "Disaster Recovery & Backup Terjadwal",
      ],
      technologies: ["Kubernetes", "Docker", "Terraform", "AWS", "GCP", "Linux", "Prometheus"],
      metrics: "< 20ms Latency",
      leadRole: "Principal Cloud Specialist",
    },
    {
      id: "cybersecurity",
      icon: ShieldCheck,
      title: "Cybersecurity",
      subtitle: "Proteksi Data & Tata Kelola",
      description: "Pengamanan sistem informasi berlapis, enkripsi data, audit kerentanan, dan kepatuhan UU PDP.",
      scopeList: [
        "Vulnerability Assessment & Pen-Test (VAPT)",
        "Arsitektur Zero-Trust & Identity IAM",
        "Enkripsi Data At-Rest & In-Transit",
      ],
      technologies: ["Zero Trust", "WAF", "TLS 1.3", "SIEM", "OAuth 2.0", "SonarQube"],
      metrics: "Zero Breach",
      leadRole: "Security Consultant",
    },
    {
      id: "data-analytics",
      icon: BarChart3,
      title: "Data & Analytics",
      subtitle: "Pipeline Data & Business Intelligence",
      description: "Pengolahan data skala besar untuk menghasilkan dashboard analitik dan insight bisnis terukur.",
      scopeList: [
        "Modern Data Pipeline & ETL/ELT",
        "Interactive Executive BI Dashboard",
        "Pemodelan Prediktif & Machine Learning",
      ],
      technologies: ["Python", "Spark", "BigQuery", "PostgreSQL", "Power BI", "dbt"],
      metrics: "Real-time BI",
      leadRole: "Senior Data Scientist",
    },
    {
      id: "it-operations-support",
      icon: Headphones,
      title: "IT Operations & Helpdesk",
      subtitle: "Monitoring 24/7 & Pemeliharaan",
      description: "Dukungan teknis berkala, pemantauan sistem 24/7, dan penanganan insiden berbasis SLA.",
      scopeList: [
        "Layanan Helpdesk & Manajemen Tiket SLA",
        "Pemantauan Operasional Sistem 24/7",
        "Troubleshooting Cepat & Dokumentasi",
      ],
      technologies: ["Grafana", "Zabbix", "Jira", "PagerDuty", "Uptime Kuma"],
      metrics: "< 15m Response",
      leadRole: "IT Operations Lead",
    },
  ]

  const current = divisions[selectedDivision]

  return (
    <section id="divisi" className="py-16 sm:py-20 relative overflow-hidden bg-white dark:bg-slate-950 border-y border-slate-100 dark:border-slate-800/80 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300">
            <Layers className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
            <span>Departemen Teknologi CTO</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            5 Divisi Spesialisasi IT
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm">
            Tim terintegrasi di PT Amukti Palapa Digital untuk kebutuhan enterprise end-to-end.
          </p>
        </div>

        {/* Tab Selector Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 p-1.5 rounded-xl bg-slate-100/80 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 mb-6 sm:mb-8">
          {divisions.map((div, idx) => {
            const Icon = div.icon
            const isActive = selectedDivision === idx
            return (
              <button
                key={div.id}
                onClick={() => setSelectedDivision(idx)}
                className={`flex items-center gap-2 p-2 rounded-lg text-left transition-all duration-150 cursor-pointer ${
                  isActive
                    ? "bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-2xs border border-slate-200/80 dark:border-slate-700 font-semibold"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                <div
                  className={`p-1.5 rounded-md shrink-0 ${
                    isActive ? "bg-sky-50 dark:bg-sky-950/80 text-sky-600 dark:text-sky-400" : "bg-slate-200/60 dark:bg-slate-800 text-slate-500"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                </div>
                <div className="text-xs font-medium truncate">{div.title}</div>
              </button>
            )
          })}
        </div>

        {/* Division Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          <Card className="lg:col-span-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 sm:p-6 rounded-2xl flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-2">
                <Badge variant="default" className="text-xs gap-1.5">
                  <current.icon className="w-3.5 h-3.5" />
                  <span>{current.subtitle}</span>
                </Badge>
                <div className="text-xs font-mono text-sky-700 dark:text-sky-300 font-semibold bg-sky-50 dark:bg-sky-950/60 px-2 py-0.5 rounded border border-sky-100 dark:border-sky-800">
                  {current.metrics}
                </div>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                  {current.title} Division
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                  {current.description}
                </p>
              </div>

              {/* 3 Scope Bullets */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1">
                {current.scopeList.map((scope, i) => (
                  <div
                    key={i}
                    className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-100 dark:border-slate-800/80 text-xs text-slate-700 dark:text-slate-300 flex items-start gap-2"
                  >
                    <Check className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400 shrink-0 mt-0.5" />
                    <span>{scope}</span>
                  </div>
                ))}
              </div>

              {/* Stack tags */}
              <div className="pt-1 flex flex-wrap gap-1.5">
                {current.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 mt-5 flex items-center justify-between gap-3">
              <div className="text-xs text-slate-500 dark:text-slate-400">
                Lead: <span className="text-slate-800 dark:text-slate-200 font-medium">{current.leadRole}</span>
              </div>
              <Button
                variant="default"
                size="sm"
                onClick={onOpenContact}
                className="gap-1.5 text-xs bg-sky-600 hover:bg-sky-700 text-white"
              >
                <span>Konsultasi</span>
                <ArrowRight className="w-3 h-3" />
              </Button>
            </div>
          </Card>

          {/* Quick Info Card */}
          <div className="lg:col-span-4 flex flex-col">
            <Card className="bg-slate-50/70 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 p-5 rounded-2xl flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-1.5 text-xs font-semibold text-sky-700 dark:text-sky-400 mb-2 uppercase">
                  <Cpu className="w-3.5 h-3.5" />
                  <span>Sinergi Sistem</span>
                </div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  Arsitektur Terpadu
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  Setiap divisi bekerja dalam satu pipeline: dari coding, deploy cloud, keamanan siber, hingga monitoring 24/7.
                </p>

                <div className="space-y-2 border-t border-slate-200 dark:border-slate-800 pt-3 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 dark:text-slate-400">Pengawasan</span>
                    <span className="text-slate-800 dark:text-slate-200 font-semibold">CTO & Lead Eng</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 dark:text-slate-400">Lab R&D</span>
                    <span className="text-sky-700 dark:text-sky-400 font-semibold">Prambanan, Sleman</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 mt-4">
                <a href="#simulasi" className="block w-full">
                  <Button variant="outline" className="w-full justify-center text-xs gap-1.5 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-900">
                    <Sparkles className="w-3 h-3 text-sky-600 dark:text-sky-400" />
                    <span>Hitung Skala Proyek</span>
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
