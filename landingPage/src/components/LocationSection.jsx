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
    street: "Kenaran, Sumberharjo, Kec. Prambanan",
    district: "Kabupaten Sleman, D.I. Yogyakarta 55572",
    fullAddress: "Kenaran, Sumberharjo, Kec. Prambanan, Kab. Sleman, D.I. Yogyakarta 55572",
    googleMapsUrl: "https://maps.google.com/?q=9GV3%2BG43+Kenaran+Sumberharjo+Prambanan+Sleman+Yogyakarta",
  }

  return (
    <section id="lokasi" className="py-16 sm:py-20 relative overflow-hidden bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <ScrollReveal direction="up" distance={20}>
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 space-y-2">
            <Badge variant="default" className="gap-1.5 px-2.5 py-0.5 text-xs">
              <MapPin className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
              <span>Lokasi Kantor</span>
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Pusat Operasional
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm">
              Kantor dan Lab Engineering PT Amukti Palapa Digital di Prambanan, Sleman, Yogyakarta.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          {/* Card (Left) */}
          <div className="lg:col-span-6 space-y-4">
            <ScrollReveal direction="right" distance={20} duration={0.5}>
              <Card className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 sm:p-6 rounded-2xl">
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="p-2 rounded-lg bg-sky-100 dark:bg-sky-950/80 text-sky-700 dark:text-sky-300">
                    <Building className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white font-heading">
                      PT Amukti Palapa Digital
                    </h3>
                    <p className="text-[11px] text-sky-700 dark:text-sky-400 font-mono">
                      Kantor Pusat & Lab Rekayasa
                    </p>
                  </div>
                </div>

                <div className="space-y-2.5 text-xs text-slate-600 dark:text-slate-300">
                  <div className="p-3 rounded-xl bg-white dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800">
                    <div className="font-semibold text-slate-900 dark:text-white mb-0.5">Alamat:</div>
                    <div>{addressDetails.fullAddress}</div>
                    <div className="text-[10px] font-mono text-sky-700 dark:text-sky-400 mt-1">
                      Plus Code: {addressDetails.code}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div className="p-3 rounded-xl bg-white dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800">
                      <div className="text-slate-500 dark:text-slate-400 text-[10px] flex items-center gap-1 mb-0.5">
                        <Clock className="w-3 h-3 text-sky-600" />
                        <span>Jam Kerja</span>
                      </div>
                      <div className="font-bold text-slate-900 dark:text-white">09.00 – 17.00 WIB</div>
                      <div className="text-[10px] text-slate-400">Senin – Jumat</div>
                    </div>

                    <div className="p-3 rounded-xl bg-white dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800">
                      <div className="text-slate-500 dark:text-slate-400 text-[10px] flex items-center gap-1 mb-0.5">
                        <ShieldCheck className="w-3 h-3 text-emerald-600" />
                        <span>Skema</span>
                      </div>
                      <div className="font-bold text-slate-900 dark:text-white">Hybrid & Remote</div>
                      <div className="text-[10px] text-slate-400">On-site / Online</div>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-200 dark:border-slate-800 mt-4">
                  <a
                    href={addressDetails.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full"
                  >
                    <Button variant="default" size="sm" className="w-full justify-center gap-1.5 text-xs bg-sky-600 hover:bg-sky-700 text-white font-medium">
                      <Navigation className="w-3.5 h-3.5" />
                      <span>Petunjuk Arah Google Maps</span>
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </Button>
                  </a>
                </div>
              </Card>
            </ScrollReveal>
          </div>

          {/* Map Visual (Right) */}
          <div className="lg:col-span-6">
            <ScrollReveal direction="left" distance={20} duration={0.5} delay={0.1}>
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-950 shadow-md">
                <div className="flex items-center justify-between px-3.5 py-2 bg-slate-900 border-b border-slate-800 text-xs">
                  <span className="font-mono text-slate-200 text-xs">Prambanan, Sleman 55572</span>
                  <span className="text-[10px] text-slate-400">Google Maps Verified</span>
                </div>

                <div className="relative h-[240px] sm:h-[280px] w-full overflow-hidden bg-[#0c1527] flex items-center justify-center">
                  <svg className="absolute inset-0 w-full h-full opacity-35" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id="mapGridLightSimple" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1e293b" strokeWidth="1" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#mapGridLightSimple)" />
                    <path d="M -20 180 Q 200 120 500 240" stroke="#0284c7" strokeWidth="2.5" fill="none" opacity="0.6" />
                    <path d="M 120 -20 Q 240 200 380 420" stroke="#0ea5e9" strokeWidth="2" fill="none" opacity="0.5" />
                  </svg>

                  <div className="relative z-10 flex flex-col items-center">
                    <div className="px-3 py-1.5 rounded-lg bg-slate-950/95 border border-sky-400/50 shadow-xl flex items-center gap-2 text-xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span className="font-bold text-white text-xs">PT Amukti Palapa Digital</span>
                    </div>
                    <div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[6px] border-t-sky-400" />
                    <div className="w-2 h-2 rounded-full bg-sky-400 mt-0.5" />
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
