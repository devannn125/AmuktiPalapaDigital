import React, { useState } from "react"
import { Button } from "./ui/button"
import { 
  ArrowRight, 
  ShieldCheck, 
  Terminal, 
  Layers, 
  CheckCircle2, 
  Activity 
} from "lucide-react"

export function Hero({ onOpenContact }) {
  const [activeTelemetryTab, setActiveTelemetryTab] = useState("overview")

  const telemetryData = {
    overview: {
      title: "Arsitektur Enterprise",
      uptime: "99.98%",
      nodes: [
        { name: "Frontend & Mobile", status: "Healthy", ping: "12ms", tech: "React / Vite / Native" },
        { name: "Microservices Gateway", status: "Active", ping: "8ms", tech: "Go / Node / REST" },
        { name: "Cloud Infrastructure", status: "Sync", ping: "15ms", tech: "Kubernetes / Terraform" },
        { name: "Cyber Defense", status: "Guarded", ping: "Live", tech: "WAF / Zero Trust" },
        { name: "Data Warehouse", status: "Active", ping: "20ms", tech: "Pipeline / BI" },
      ]
    },
    cloud: {
      title: "Cloud & K8s Cluster",
      uptime: "99.99%",
      nodes: [
        { name: "Prambanan Cluster", status: "Active", ping: "6ms", tech: "Kubernetes 1.30" },
        { name: "Database HA", status: "Sync", ping: "3ms", tech: "PostgreSQL Replica" },
        { name: "In-Memory Cache", status: "Optimal", ping: "1ms", tech: "Redis Cluster" },
        { name: "Edge CDN & DDoS", status: "Active", ping: "10ms", tech: "Global Edge" },
      ]
    },
    security: {
      title: "Keamanan Siber",
      uptime: "A+ Audit",
      nodes: [
        { name: "Identity & RBAC", status: "Enforced", ping: "Live", tech: "OAuth2 / OIDC" },
        { name: "Vulnerability Scan", status: "Active", ping: "Live", tech: "DAST & SAST" },
        { name: "Data Encryption", status: "Enabled", ping: "FIPS", tech: "AES-256" },
        { name: "Audit Trail", status: "Logged", ping: "Sync", tech: "UU PDP Compliance" },
      ]
    }
  }

  const currentData = telemetryData[activeTelemetryTab]

  return (
    <section className="relative pt-24 pb-14 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24 overflow-hidden bg-gradient-to-b from-slate-50/80 via-white to-white dark:from-slate-900/60 dark:via-slate-950 dark:to-slate-950 transition-colors duration-200">
      <div className="absolute inset-0 bg-grid-pattern opacity-50 dark:opacity-20 pointer-events-none" />
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-sky-100/50 dark:bg-sky-900/15 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Column: Heading & Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-4 sm:space-y-5">
            
            {/* Pill badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 dark:bg-sky-950/60 border border-sky-200/80 dark:border-sky-800 text-sky-800 dark:text-sky-300 text-xs font-semibold shadow-2xs">
              <span className="flex h-1.5 w-1.5 rounded-full bg-sky-500 animate-pulse" />
              <span>PT Amukti Palapa Digital</span>
              <span className="text-slate-300 dark:text-slate-700">|</span>
              <span className="text-slate-600 dark:text-slate-300 font-medium">Yogyakarta</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12]">
              Solusi Digital Enterprise yang{" "}
              <span className="text-sky-600 dark:text-sky-400">
                Tepat Guna
              </span>
            </h1>

            {/* Concise Subheadline */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl">
              Kami merancang dan mengelola ekosistem teknologi modern: software engineering, cloud, keamanan siber, dan data analytics.
            </p>

            {/* 4 Crisp Key Focus Badges */}
            <div className="grid grid-cols-2 gap-2 w-full max-w-md pt-1">
              {[
                "Software Enterprise",
                "Cloud & DevOps",
                "Keamanan Data",
                "Operasional 24/7",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2 w-full sm:w-auto">
              <Button
                variant="default"
                size="lg"
                onClick={onOpenContact}
                className="gap-2 justify-center bg-sky-600 hover:bg-sky-700 text-white font-medium shadow-sm"
              >
                <span>Konsultasi Proyek</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
              <a href="#divisi" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full justify-center gap-2 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-800">
                  <Layers className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                  <span>5 Divisi IT</span>
                </Button>
              </a>
            </div>

            {/* Quick Metrics */}
            <div className="pt-5 border-t border-slate-200 dark:border-slate-800 grid grid-cols-3 gap-4 w-full max-w-md">
              <div>
                <div className="text-lg sm:text-2xl font-bold font-heading text-slate-900 dark:text-white">5</div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400">Divisi Spesialis</div>
              </div>
              <div>
                <div className="text-lg sm:text-2xl font-bold font-heading text-sky-600 dark:text-sky-400">99.9%</div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400">Target Uptime</div>
              </div>
              <div>
                <div className="text-lg sm:text-2xl font-bold font-heading text-slate-900 dark:text-white">Hybrid</div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400">Model Kolaborasi</div>
              </div>
            </div>

          </div>

          {/* Right Column: Telemetry Card */}
          <div className="lg:col-span-5 relative w-full">
            <div className="relative rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden transition-colors duration-200">
              
              {/* Window Header */}
              <div className="flex items-center justify-between px-3.5 py-2.5 bg-slate-50 dark:bg-slate-950/80 border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />
                  </div>
                  <span className="text-[11px] font-mono text-slate-600 dark:text-slate-400 pl-1.5 flex items-center gap-1.5">
                    <Terminal className="w-3 h-3 text-sky-600 dark:text-sky-400" />
                    <span>amukti-mesh</span>
                  </span>
                </div>
                <div className="flex items-center gap-1 text-[10px] font-mono text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-800 font-semibold">
                  <Activity className="w-2.5 h-2.5 text-emerald-600 dark:text-emerald-400 animate-pulse" />
                  <span>ONLINE</span>
                </div>
              </div>

              {/* Tabs */}
              <div className="flex border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/50 p-1 text-xs">
                {[
                  { id: "overview", label: "Arsitektur" },
                  { id: "cloud", label: "Cloud" },
                  { id: "security", label: "Keamanan" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTelemetryTab(tab.id)}
                    className={`flex-1 py-1 px-2 rounded-lg font-medium transition-all text-center cursor-pointer text-xs ${
                      activeTelemetryTab === tab.id
                        ? "bg-white dark:bg-slate-800 text-sky-700 dark:text-sky-300 shadow-2xs font-semibold"
                        : "text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Status Header */}
              <div className="px-3.5 py-2.5 bg-sky-50/30 dark:bg-sky-950/20 border-b border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-800 dark:text-slate-200">{currentData.title}</span>
                <span className="font-mono text-sky-700 dark:text-sky-400 font-semibold">{currentData.uptime}</span>
              </div>

              {/* Node List */}
              <div className="p-3 space-y-1.5">
                {currentData.nodes.map((node, i) => (
                  <div
                    key={i}
                    className="p-2 rounded-lg bg-slate-50/80 dark:bg-slate-950/40 border border-slate-100 dark:border-slate-800/80 hover:border-sky-200 dark:hover:border-sky-800 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-2">
                      <div className="h-5 w-5 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-sky-600 dark:text-sky-400 text-[10px] font-mono font-bold">
                        {i + 1}
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                          {node.name}
                        </div>
                        <div className="text-[10px] text-slate-400 font-mono">
                          {node.tech}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] font-mono text-sky-700 dark:text-sky-300 bg-sky-50 dark:bg-sky-950 px-1.5 py-0.2 rounded border border-sky-100 dark:border-sky-900">
                        {node.ping}
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    </div>
                  </div>
                ))}
              </div>

              {/* Card Footer */}
              <div className="px-3.5 py-2 bg-slate-50 dark:bg-slate-950/80 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-[10px] text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                  <span>Enterprise Ready</span>
                </span>
                <span className="font-mono text-slate-600 dark:text-slate-400">Sleman, DIY</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
