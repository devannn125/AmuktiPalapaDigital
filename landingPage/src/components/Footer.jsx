import { ArrowUpRight } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: "Tentang Kami", href: "#tentang" },
    { name: "Keahlian", href: "#keahlian" },
    { name: "Visi & Misi", href: "#visi-misi" },
    { name: "Nilai Bisnis", href: "#nilai-bisnis" },
    { name: "Kontak", href: "#kontak" },
  ]

  return (
    <footer className="bg-stone-950 text-stone-300 pt-12 pb-10 sm:pt-16 sm:pb-12 border-t border-stone-900 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 lg:gap-12">
          
          {/* Col 1: Brand & Slogan */}
          <div className="md:col-span-5 space-y-2">
            <div className="text-xl sm:text-2xl font-black text-orange-500 tracking-tight">
              PT Amukti Palapa Digital
            </div>
            <p className="text-xs text-stone-400 leading-relaxed max-w-sm">
              Perusahaan penyedia solusi teknologi informasi berbasis digital untuk pasar enterprise.
            </p>
          </div>

          {/* Col 2: Alamat Kantor */}
          <div className="md:col-span-4 space-y-1.5">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-stone-400">
              KANTOR PUSAT
            </div>
            <p className="text-xs text-stone-300 leading-relaxed">
              Kenaran, Sumberharjo, Kec. Prambanan, Kab. Sleman, D.I. Yogyakarta 55572
            </p>
          </div>

          {/* Col 3: Navigasi Cepat */}
          <div className="md:col-span-3 space-y-1.5">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-stone-400">
              NAVIGASI
            </div>
            <div className="flex flex-col space-y-1">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs text-stone-400 hover:text-orange-400 transition-colors inline-flex items-center gap-1 py-0.5"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-3 h-3 text-stone-600" />
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 border-t border-stone-900 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 sm:gap-4 text-xs text-stone-500">
          <div>
            © {currentYear} PT Amukti Palapa Digital. All rights reserved.
          </div>
          <div className="text-[11px] text-stone-500">
            Yogyakarta, Indonesia
          </div>
        </div>

      </div>
    </footer>
  )
}
