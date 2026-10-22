import React, { useState } from "react"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { 
  ArrowRight, 
  ShieldCheck, 
  Server, 
  Code2, 
  Database, 
  Cpu, 
  Sparkles, 
  CheckCircle2, 
  Terminal, 
  Layers,
  ChevronRight,
  Zap,
  Activity
} from "lucide-react"

export function Hero({ onOpenContact }) {
  const [activeTelemetryTab, setActiveTelemetryTab] = useState("overview")

  const telemetryData = {
    overview: {
      title: "Enterprise Architecture Mesh",
      status: "Operational",
      uptime: "99.98%",
      nodes: [
        { name: "Frontend / Mobile Core", status: "Healthy", ping: "12ms", tech: "React / Vite / Native" },
        { name: "Microservices Gateway", status: "Active", ping: "8ms", tech: "Go / Node / REST / gRPC" },
        { name: "Multi-Cloud Infrastructure", status: "Synchronized", ping: "15ms", tech: "K8s / Terraform" },
        { name: "Cybersecurity Shield", status: "Guarded", ping: "Real-time", tech: "WAF / Zero Trust / TLS" },
        { name: "Data Warehouse & Analytics", status: "Streaming", ping: "20ms", tech: "Pipeline / BI Engine" },
      ]
    },
    cloud: {
      title: "Cloud & Infrastructure Layer",
      status: "High Availability",
      uptime: "99.99%",
      nodes: [
        { name: "Cluster Prambanan-01", status: "Active", ping: "6ms", tech: "Kubernetes 1.30" },
        { name: "PostgreSQL HA Replicas", status: "In-Sync", ping: "3ms", tech: "WAL Stream / AES-256" },
        { name: "Redis Cache Cluster", status: "Optimal", ping: "1ms", tech: "In-Memory Ingestion" },
        { name: "Edge CDN & DDoS Guard", status: "Mitigating", ping: "10ms", tech: "Global Edge Points" },
      ]
    },
    security: {
      title: "Cybersecurity Defense Matrix",
      status: "Threat Free",
      uptime: "Audit Pass A+",
      nodes: [
        { name: "Identity & RBAC Access", status: "Enforced", ping: "Instant", tech: "OAuth2 / OIDC" },
        { name: "Penetration Watchdog", status: "Scanning", ping: "Continuous", tech: "Automated DAST/SAST" },
        { name: "Data Encryption At Rest", status: "Enabled", ping: "FIPS-140", tech: "ChaCha20-Poly1305" },
        { name: "Audit Trail & Compliance", status: "Archived", ping: "Immutable", tech: "Cryptographic Log" },
      ]
    }
  }

  const currentData = telemetryData[activeTelemetryTab]

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background radial glow & geometric grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-cyan-600/15 via-blue-600/20 to-indigo-600/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Heading & Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Elegant pill badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-cyan-300 text-xs font-medium shadow-lg shadow-cyan-500/10">
              <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>Teknologi Tepat Guna untuk Solusi Enterprise</span>
              <span className="text-slate-600">|</span>
              <span className="text-slate-300">Yogyakarta</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Katalisator Transformasi Digital yang{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">
                Cerdas, Cepat & Terpercaya
              </span>
            </h1>

            {/* Direct extraction from Bab I & Bab II Profil */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              PT Amukti Palapa Digital menghadirkan ekosistem teknologi yang menggabungkan inovasi, strategi, dan keahlian digital. Dari pengembangan perangkat lunak, arsitektur cloud, keamanan siber, hingga otomatisasi data enterprise — kami membangun sistem yang adaptif untuk menunjang pertumbuhan bisnis berkelanjutan.
            </p>

            {/* Value checklist badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 w-full pt-1">
              {[
                "Pengembangan Software Skala Enterprise",
                "Tata Kelola Keamanan & Kepatuhan Data",
                "Infrastruktur Cloud Berkinerja Tinggi",
                "Dukungan IT Operations & Service Desk 24/7",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4 w-full sm:w-auto">
              <Button
                variant="gradient"
                size="lg"
                onClick={onOpenContact}
                className="gap-2 group shadow-xl shadow-cyan-500/25"
              >
                <span>Mulai Konsultasi Proyek</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <a href="#divisi">
                <Button variant="outline" size="lg" className="gap-2 text-slate-200">
                  <Layers className="w-4 h-4 text-cyan-400" />
                  <span>Jelajahi 5 Divisi IT</span>
                </Button>
              </a>
            </div>

            {/* Trust Micro-Metrics */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-6 w-full max-w-lg">
              <div>
                <div className="text-2xl font-bold font-heading text-white">5+</div>
                <div className="text-xs text-slate-400 mt-0.5">Divisi Spesialisasi IT</div>
              </div>
              <div>
                <div className="text-2xl font-bold font-heading text-cyan-400">99.9%</div>
                <div className="text-xs text-slate-400 mt-0.5">Reliabilitas Sistem</div>
              </div>
              <div>
                <div className="text-2xl font-bold font-heading text-amber-400">Hybrid</div>
                <div className="text-xs text-slate-400 mt-0.5">Model Kolaborasi Fleksibel</div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive System Telemetry Card */}
          <div className="lg:col-span-5 relative">
            {/* Glowing frame backdrop */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500/30 to-blue-600/30 rounded-2xl blur-lg opacity-70 group-hover:opacity-100 transition duration-500" />

            <div className="relative rounded-2xl bg-slate-950/90 border border-slate-800/90 shadow-2xl backdrop-blur-xl overflow-hidden">
              
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-900/80 border-b border-slate-800/80">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-xs font-mono text-slate-400 pl-2 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                    amukti-mesh // live-telemetry
                  </span>
                </div>
                <div className="flex items-center gap-1 text-[11px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                  <Activity className="w-3 h-3 animate-pulse" />
                  <span>ONLINE</span>
                </div>
              </div>

              {/* Interactive Tabs within the telemetry card */}
              <div className="flex border-b border-slate-800/80 bg-slate-900/40 p-1 text-xs">
                {[
                  { id: "overview", label: "Arsitektur Inti" },
                  { id: "cloud", label: "Cloud & K8s" },
                  { id: "security", label: "Cyber Defense" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTelemetryTab(tab.id)}
                    className={`flex-1 py-1.5 px-2 rounded-lg font-medium transition-all text-center ${
                      activeTelemetryTab === tab.id
                        ? "bg-slate-800 text-cyan-300 shadow-sm"
                        : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Status banner */}
              <div className="p-4 bg-gradient-to-b from-cyan-950/20 to-transparent">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs text-slate-400">Node Environment</div>
                    <div className="text-sm font-semibold text-white mt-0.5">{currentData.title}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-slate-400">SLA Target</div>
                    <div className="text-xs font-mono text-cyan-400 font-semibold">{currentData.uptime}</div>
                  </div>
                </div>
              </div>

              {/* Node List */}
              <div className="p-4 pt-0 space-y-2.5">
                {currentData.nodes.map((node, i) => (
                  <div
                    key={i}
                    className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/70 hover:border-cyan-500/40 transition-all flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-7 w-7 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 text-xs">
                        {i + 1}
                      </div>
                      <div>
                        <div className="text-xs font-medium text-slate-200 group-hover:text-white transition-colors">
                          {node.name}
                        </div>
                        <div className="text-[10px] text-slate-400 font-mono">
                          {node.tech}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono text-cyan-400/90 bg-cyan-950/40 px-1.5 py-0.5 rounded border border-cyan-500/20">
                        {node.ping}
                      </span>
                      <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer of the terminal card */}
              <div className="px-4 py-3 bg-slate-900/90 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>ISO & Enterprise Standard Aligned</span>
                </span>
                <span className="font-mono text-cyan-400/80">Region: Sleman-DIY</span>
              </div>

            </div>

            {/* Floating floating accent pill */}
            <div className="absolute -bottom-4 -left-4 bg-slate-900/95 border border-slate-700/80 rounded-xl p-3 shadow-xl backdrop-blur-md hidden sm:flex items-center gap-3">
              <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400">
                <Zap className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-semibold text-white">Siklus Pengembangan Lincah</div>
                <div className="text-[11px] text-slate-400">Iterasi Cepat, Kualitas Standar Industri</div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

