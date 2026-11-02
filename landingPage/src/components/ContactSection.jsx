import { useState } from "react"
import { motion } from "motion/react"
import { Button } from "./ui/button"
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Check, 
  Copy, 
  ArrowUpRight,
  ExternalLink,
  MessageSquare
} from "lucide-react"

export function ContactSection() {
  const [copiedType, setCopiedType] = useState(null)

  const contactData = {
    email: "contact@amuktipalapa.co.id",
    phone: "+62 812-3456-7890",
    phoneClean: "6281234567890",
    address: "Kenaran, Sumberharjo, Kec. Prambanan, Kab. Sleman, D.I. Yogyakarta 55572",
    mapsUrl: "https://maps.google.com/?q=PT+Amukti+Palapa+Digital+Prambanan+Sleman",
    hours: "Senin – Jumat : 09.00 – 17.00 WIB"
  }

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text)
    setCopiedType(type)
    setTimeout(() => setCopiedType(null), 2000)
  }

  const handleOpenWhatsApp = () => {
    const text = encodeURIComponent(
      "Halo PT Amukti Palapa Digital, saya ingin berkonsultasi mengenai solusi teknologi dan transformasi sistem untuk perusahaan kami. Mohon info jadwal diskusi teknis."
    )
    window.open(`https://wa.me/${contactData.phoneClean}?text=${text}`, "_blank")
  }

  const handleOpenEmail = () => {
    const subject = encodeURIComponent("Konsultasi Proyek IT Enterprise - PT Amukti Palapa Digital")
    const body = encodeURIComponent(
      "Halo Tim PT Amukti Palapa Digital,\n\nSaya ingin berkonsultasi mengenai kebutuhan solusi teknologi informasi untuk instansi/perusahaan kami.\n\nMohon informasi jadwal diskusi teknis lebih lanjut.\n\nTerima kasih."
    )
    window.location.href = `mailto:${contactData.email}?subject=${subject}&body=${body}`
  }

  return (
    <section id="kontak" className="py-14 sm:py-20 lg:py-28 bg-white dark:bg-stone-950 text-stone-900 dark:text-stone-100 relative overflow-hidden font-sans border-b border-stone-200 dark:border-stone-800 transition-colors duration-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-2 mb-8 sm:mb-12"
        >
          <span className="text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-widest text-orange-600 dark:text-orange-400 block">
            AKSES KOMUNIKASI LANGSUNG
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 dark:text-white tracking-tight">
            Kontak Resmi Perusahaan
          </h2>
          <p className="text-stone-600 dark:text-stone-400 text-xs sm:text-sm leading-relaxed max-w-xl">
            Untuk konsultasi proyek enterprise, kemitraan kampus, serta informasi lebih lanjut seputar program magang.
          </p>
        </motion.div>

        {/* 4 Stacked Horizontal Contact Cards with Responsive Widths */}
        <div className="space-y-3 sm:space-y-3.5 mb-6 sm:mb-8">
          
          {/* Card 1: Email */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="p-3.5 sm:p-5 rounded-2xl bg-stone-50/90 dark:bg-stone-900/80 border border-stone-200/90 dark:border-stone-800 shadow-2xs hover:border-orange-500/50 transition-all flex items-center justify-between gap-3 group cursor-default"
          >
            <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white dark:bg-stone-800 border border-stone-200/80 dark:border-stone-700 flex items-center justify-center text-stone-700 dark:text-stone-300 shrink-0 shadow-2xs group-hover:border-orange-400/50 transition-colors">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-stone-800 dark:text-stone-200 group-hover:text-orange-600 transition-colors" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-[10px] font-mono text-stone-400 uppercase tracking-wider font-semibold">
                  Email Perusahaan
                </div>
                <a
                  href={`mailto:${contactData.email}`}
                  className="text-xs sm:text-sm font-bold text-stone-900 dark:text-white hover:text-orange-600 transition-colors truncate block"
                  title={contactData.email}
                >
                  {contactData.email}
                </a>
              </div>
            </div>

            <button
              onClick={() => handleCopy(contactData.email, "email")}
              type="button"
              className="p-1.5 sm:p-2 rounded-lg text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 hover:bg-stone-200/60 dark:hover:bg-stone-800 transition-colors cursor-pointer shrink-0"
              title="Salin Email"
            >
              {copiedType === "email" ? (
                <span className="flex items-center gap-1 text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                  <span className="hidden xs:inline">Tersalin</span>
                </span>
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
          </motion.div>

          {/* Card 2: WhatsApp */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.4, delay: 0.06, ease: "easeOut" }}
            className="p-3.5 sm:p-5 rounded-2xl bg-stone-50/90 dark:bg-stone-900/80 border border-stone-200/90 dark:border-stone-800 shadow-2xs hover:border-orange-500/50 transition-all flex items-center justify-between gap-3 group cursor-default"
          >
            <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white dark:bg-stone-800 border border-stone-200/80 dark:border-stone-700 flex items-center justify-center text-stone-700 dark:text-stone-300 shrink-0 shadow-2xs group-hover:border-emerald-400/50 transition-colors">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-stone-800 dark:text-stone-200 group-hover:text-emerald-600 transition-colors" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-[10px] font-mono text-stone-400 uppercase tracking-wider font-semibold">
                  WhatsApp Resmi
                </div>
                <span className="text-xs sm:text-sm font-bold text-stone-900 dark:text-white truncate block">
                  {contactData.phone}
                </span>
              </div>
            </div>

            <button
              onClick={() => handleCopy(contactData.phone, "phone")}
              type="button"
              className="p-1.5 sm:p-2 rounded-lg text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 hover:bg-stone-200/60 dark:hover:bg-stone-800 transition-colors cursor-pointer shrink-0"
              title="Salin Nomor WhatsApp"
            >
              {copiedType === "phone" ? (
                <span className="flex items-center gap-1 text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                  <span className="hidden xs:inline">Tersalin</span>
                </span>
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
          </motion.div>

          {/* Card 3: Location */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.4, delay: 0.12, ease: "easeOut" }}
            className="p-3.5 sm:p-5 rounded-2xl bg-stone-50/90 dark:bg-stone-900/80 border border-stone-200/90 dark:border-stone-800 shadow-2xs hover:border-orange-500/50 transition-all flex items-center justify-between gap-3 group cursor-default"
          >
            <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white dark:bg-stone-800 border border-stone-200/80 dark:border-stone-700 flex items-center justify-center text-stone-700 dark:text-stone-300 shrink-0 shadow-2xs group-hover:border-orange-400/50 transition-colors">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-stone-800 dark:text-stone-200 group-hover:text-orange-600 transition-colors" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-[10px] font-mono text-stone-400 uppercase tracking-wider font-semibold">
                  Lokasi Kantor
                </div>
                <span className="text-xs sm:text-sm font-bold text-stone-900 dark:text-white truncate block">
                  Prambanan, Sleman, D.I. Yogyakarta
                </span>
              </div>
            </div>

            <a
              href={contactData.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 sm:p-2 rounded-lg text-orange-600 dark:text-orange-400 hover:bg-stone-200/60 dark:hover:bg-stone-800 transition-colors cursor-pointer shrink-0 inline-flex items-center gap-1 text-xs font-semibold"
            >
              <span>Peta</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </motion.div>

          {/* Card 4: Operating Hours */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.4, delay: 0.18, ease: "easeOut" }}
            className="p-3.5 sm:p-5 rounded-2xl bg-stone-50/90 dark:bg-stone-900/80 border border-stone-200/90 dark:border-stone-800 shadow-2xs hover:border-orange-500/50 transition-all flex items-center justify-between gap-3 group cursor-default"
          >
            <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white dark:bg-stone-800 border border-stone-200/80 dark:border-stone-700 flex items-center justify-center text-stone-700 dark:text-stone-300 shrink-0 shadow-2xs group-hover:border-amber-400/50 transition-colors">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-stone-800 dark:text-stone-200 group-hover:text-amber-600 transition-colors" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-[10px] font-mono text-stone-400 uppercase tracking-wider font-semibold">
                  Jam Kerja Tim Teknis
                </div>
                <span className="text-xs sm:text-sm font-bold text-stone-900 dark:text-white truncate block">
                  {contactData.hours}
                </span>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Dual Direct Buttons with Mobile Stacking */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 0.5, delay: 0.22, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 pt-1"
        >
          <Button
            variant="default"
            size="lg"
            onClick={handleOpenWhatsApp}
            className="w-full flex-1 justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl shadow-xs hover:shadow-md hover:scale-[1.01] active:scale-[0.98] transition-all cursor-pointer text-xs sm:text-sm py-3"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat via WhatsApp Langsung</span>
            <ArrowUpRight className="w-4 h-4 ml-auto sm:ml-1" />
          </Button>

          <Button
            variant="outline"
            size="lg"
            onClick={handleOpenEmail}
            className="w-full flex-1 justify-center gap-2 border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 hover:bg-stone-50 dark:hover:bg-stone-800 text-stone-900 dark:text-stone-100 font-semibold rounded-xl hover:shadow-xs hover:scale-[1.01] active:scale-[0.98] transition-all cursor-pointer text-xs sm:text-sm py-3"
          >
            <Mail className="w-4 h-4 text-orange-600 dark:text-orange-400" />
            <span>Kirim via Email Resmi Korporat</span>
            <ExternalLink className="w-4 h-4 ml-auto sm:ml-1 text-stone-400" />
          </Button>
        </motion.div>

      </div>
    </section>
  )
}
