import React from "react"
import { BrandLogo } from "./BrandLogo"
import { MapPin, Mail, Phone, ArrowUp, ShieldCheck } from "lucide-react"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-900">
          
          {/* Brand & Overview (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <BrandLogo />
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm pt-2">
              PT Amukti Palapa Digital adalah penyedia solusi teknologi informasi dan transformasi digital terpercaya bagi sektor enterprise dan institusi modern. Berkomitmen menghadirkan teknologi tepat guna, sistem adaptif, dan keamanan data berstandar tinggi.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-400 pt-2">
              <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Kenaran, Sumberharjo, Kec. Prambanan, Kab. Sleman, D.I. Yogyakarta 55572</span>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-semibold text-white uppercase tracking-wider">
              Navigasi Utama
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#divisi" className="hover:text-cyan-400 transition-colors">
                  5 Divisi Teknologi
                </a>
              </li>
              <li>
                <a href="#visi-misi" className="hover:text-cyan-400 transition-colors">
                  Visi, Misi & Tujuan
                </a>
              </li>
              <li>
                <a href="#organisasi" className="hover:text-cyan-400 transition-colors">
                  Struktur Organisasi
                </a>
              </li>
              <li>
                <a href="#simulasi" className="hover:text-cyan-400 transition-colors">
                  Simulasi Proyek
                </a>
              </li>
              <li>
                <a href="#magang" className="hover:text-cyan-400 transition-colors">
                  Program Magang & Talenta
                </a>
              </li>
              <li>
                <a href="#lokasi" className="hover:text-cyan-400 transition-colors">
                  Lokasi Kantor
                </a>
              </li>
            </ul>
          </div>

          {/* IT Divisions (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-semibold text-white uppercase tracking-wider">
              Divisi Teknologi CTO
            </div>
            <ul className="space-y-2 text-xs">
              <li className="hover:text-cyan-400 transition-colors">
                Software Engineering Division
              </li>
              <li className="hover:text-cyan-400 transition-colors">
                Infrastructure & Cloud Division
              </li>
              <li className="hover:text-cyan-400 transition-colors">
                Cybersecurity Division
              </li>
              <li className="hover:text-cyan-400 transition-colors">
                Data & Analytics Division
              </li>
              <li className="hover:text-cyan-400 transition-colors">
                IT Operations & Service Desk 24/7
              </li>
            </ul>
          </div>

          {/* Compliance & Contact (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-semibold text-white uppercase tracking-wider">
              Hubungi Kami
            </div>
            <div className="text-xs space-y-2">
              <div className="text-slate-300">Email:</div>
              <a
                href="mailto:contact@amuktipalapa.co.id"
                className="text-cyan-400 hover:underline block break-all"
              >
                contact@amuktipalapa.co.id
              </a>
              <div className="text-slate-300 pt-1">Jam Operasional:</div>
              <div className="text-slate-400">09.00 – 17.00 WIB (Senin – Jumat)</div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} PT Amukti Palapa Digital. Hak Cipta Dilindungi Undang-Undang.
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Enterprise Ready • DI Yogyakarta</span>
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer"
              aria-label="Kembali ke atas"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  )
}

