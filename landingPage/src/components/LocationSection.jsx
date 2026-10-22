import React from "react"
import { Card } from "./ui/card"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { 
  MapPin, 
  Navigation, 
  Clock, 
  Building, 
  ExternalLink, 
  ShieldCheck
} from "lucide-react"
import { ScrollReveal } from "./ScrollReveal"

export function LocationSection() {
  const addressDetails = {
    code: "9GV3+G43",
    street: "Kenaran, Sumberharjo",
    subdistrict: "Kecamatan Prambanan",
    district: "Kabupaten Sleman",
    province: "Daerah Istimewa Yogyakarta",
    postalCode: "55572",
    country: "Indonesia",
    fullAddress: "9GV3+G43, Kenaran, Sumberharjo, Kec. Prambanan, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55572",
    googleMapsUrl: "https://maps.google.com/?q=9GV3%2BG43+Kenaran+Sumberharjo+Prambanan+Sleman+Yogyakarta",
  }

  return (
    <section id="lokasi" className="py-24 relative overflow-hidden bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal direction="up" distance={25}>
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <Badge variant="gradient" className="gap-1.5 px-3 py-1">
              <MapPin className="w-3.5 h-3.5" />
              <span>Pusat Operasional & R&D</span>
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Lokasi Kantor & Hub Inovasi
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">
              Berlokasi strategis di kawasan Prambanan, Sleman, Daerah Istimewa Yogyakarta — menghubungkan kekayaan budaya dengan sentra keunggulan teknologi digital.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Location Info Card (Left 6 Cols - Slide In from Left) */}
          <div className="lg:col-span-6 space-y-6">
            <ScrollReveal direction="right" distance={35} duration={0.7}>
              <Card className="bg-slate-900/90 border-slate-800 p-8 backdrop-blur-xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                    <Building className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white font-heading">
                      PT Amukti Palapa Digital
                    </h3>
                    <p className="text-xs text-cyan-400 font-mono">
                      Kantor Pusat & Engineering Lab
                    </p>
                  </div>
                </div>

                <div className="space-y-4 text-sm text-slate-300">
                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                    <MapPin className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-white">Alamat Terdaftar:</div>
                      <div className="text-xs text-slate-300 leading-relaxed mt-0.5">
                        {addressDetails.fullAddress}
                      </div>
                      <div className="text-[11px] font-mono text-cyan-400/90 mt-1">
                        Plus Code: {addressDetails.code}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                      <div className="flex items-center gap-2 text-xs text-slate-400 mb-1">
                        <Clock className="w-3.5 h-3.5 text-cyan-400" />
                        <span>Jam Operasional</span>
                      </div>
                      <div className="text-sm font-semibold text-white">Senin – Jumat</div>
                      <div className="text-xs text-slate-400 mt-0.5">09.00 – 17.00 WIB</div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                      <div className="flex items-center gap-2 text-xs text-slate-400 mb-1">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Skema Kolaborasi</span>
                      </div>
                      <div className="text-sm font-semibold text-white">Hybrid & Remote</div>
                      <div className="text-xs text-slate-400 mt-0.5">Fleksibel & Terhubung Daring</div>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-800/80 mt-6 flex flex-wrap items-center gap-3">
                  <a
                    href={addressDetails.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 min-w-[200px]"
                  >
                    <Button variant="gradient" className="w-full justify-center gap-2 text-xs">
                      <Navigation className="w-4 h-4" />
                      <span>Buka Rute di Google Maps</span>
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </Button>
                  </a>
                </div>
              </Card>
            </ScrollReveal>
          </div>

          {/* Interactive Map Visual (Right 6 Cols - Slide In from Right) */}
          <div className="lg:col-span-6">
            <ScrollReveal direction="left" distance={35} duration={0.7} delay={0.1}>
              <div className="relative rounded-3xl overflow-hidden border border-slate-800 bg-slate-950 shadow-2xl p-2">
                {/* Map mockup header */}
                <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900/90 rounded-t-2xl border-b border-slate-800/80 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
                    <span className="font-mono text-slate-300">Prambanan, Sleman (55572)</span>
                  </div>
                  <span className="text-[11px] text-slate-400">Google Maps Verified</span>
                </div>

                {/* Styled Interactive SVG Map Illustration */}
                <div className="relative h-[340px] sm:h-[380px] w-full rounded-b-2xl overflow-hidden bg-[#0c1527] flex items-center justify-center">
                  <svg className="absolute inset-0 w-full h-full opacity-35" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id="mapGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1e293b" strokeWidth="1" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#mapGrid)" />
                    <path d="M -20 180 Q 200 120 500 240" stroke="#0284c7" strokeWidth="3" fill="none" opacity="0.6" />
                    <path d="M 120 -20 Q 240 200 380 420" stroke="#0ea5e9" strokeWidth="2" fill="none" opacity="0.5" />
                    <path d="M 50 360 L 450 60" stroke="#334155" strokeWidth="2" fill="none" />
                  </svg>

                  <div className="absolute w-72 h-72 rounded-full border border-cyan-500/20 animate-ping opacity-25 pointer-events-none" />

                  {/* Pin Card for PT Amukti Palapa Digital */}
                  <div className="relative z-10 flex flex-col items-center animate-bounce duration-1000">
                    <div className="px-4 py-2 rounded-xl bg-slate-950/95 border border-cyan-500/50 shadow-2xl backdrop-blur-md flex items-center gap-2 text-xs">
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      <span className="font-bold text-white">PT Amukti Palapa Digital</span>
                      <span className="text-[10px] text-cyan-300 font-mono">Prambanan Hub</span>
                    </div>
                    <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-cyan-500" />
                    <div className="w-3 h-3 rounded-full bg-cyan-400 mt-1 shadow-[0_0_12px_#22d3ee]" />
                  </div>

                  <div className="absolute top-6 left-6 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-[11px] text-slate-300 backdrop-blur-sm">
                    Candi Prambanan Corridor
                  </div>
                  <div className="absolute bottom-6 right-6 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-[11px] text-slate-300 backdrop-blur-sm">
                    Jl. Solo - Yogyakarta Link
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>

      </div>
    </section>
  )
}
