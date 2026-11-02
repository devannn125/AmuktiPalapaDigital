import { useState } from "react"
import { Button } from "./ui/button"
import { 
  X, 
  MessageSquare, 
  Mail, 
  Sparkles, 
  Check, 
  Copy, 
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  Phone
} from "lucide-react"

export function ContactModal({ isOpen, onClose, initialMessage = "" }) {
  const [copied, setCopied] = useState(false)

  if (!isOpen) return null

  const contactData = {
    email: "contact@amuktipalapa.co.id",
    phone: "+62 812-3456-7890",
    phoneClean: "6281234567890",
  }

  const defaultMessage = "Halo PT Amukti Palapa Digital, saya ingin berkonsultasi mengenai solusi transformasi digital dan kebutuhan sistem untuk perusahaan kami."
  const activeMessage = initialMessage || defaultMessage

  const handleCopy = () => {
    navigator.clipboard.writeText(activeMessage)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleWhatsApp = () => {
    const text = encodeURIComponent(activeMessage)
    window.open(`https://wa.me/${contactData.phoneClean}?text=${text}`, "_blank")
    onClose()
  }

  const handleEmail = () => {
    const subject = encodeURIComponent("Konsultasi Proyek & Transformasi Digital - PT Amukti Palapa Digital")
    const body = encodeURIComponent(activeMessage)
    window.location.href = `mailto:${contactData.email}?subject=${subject}&body=${body}`
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-stone-950/70 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-lg max-h-[92vh] overflow-y-auto rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 p-4 sm:p-7 shadow-2xl z-10 animate-in zoom-in-95 duration-150">
        <button
          onClick={onClose}
          className="absolute top-3.5 right-3.5 p-1.5 rounded-lg text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors cursor-pointer"
          aria-label="Tutup Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-4 sm:mb-5 pr-6">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-orange-50 dark:bg-orange-950/60 text-orange-700 dark:text-orange-300 border border-orange-200/80 dark:border-orange-900 text-[10px] sm:text-[11px] font-semibold mb-2">
            <Sparkles className="w-3 h-3 text-orange-600 dark:text-orange-400" />
            <span>Konsultasi Langsung • Tanpa Formulir</span>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 dark:text-white font-heading tracking-tight">
            Hubungi Konsultan Kami
          </h3>
          <p className="text-xs text-stone-500 dark:text-stone-400 mt-0.5 leading-relaxed">
            Pilih saluran komunikasi langsung di bawah untuk respon instan tanpa perlu menunggu backend email.
          </p>
        </div>

        {/* Message Preview Box */}
        <div className="p-3 sm:p-3.5 rounded-xl bg-stone-50 dark:bg-stone-950/70 border border-stone-200 dark:border-stone-800 mb-4 sm:mb-5">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-stone-400 font-mono">
              Draf Pesan Konsultasi Anda:
            </span>
            <button
              onClick={handleCopy}
              type="button"
              className="text-[10px] text-orange-600 dark:text-orange-400 hover:underline inline-flex items-center gap-1 cursor-pointer font-medium"
            >
              {copied ? (
                <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-semibold">
                  <Check className="w-3 h-3 stroke-[3]" />
                  <span>Tersalin!</span>
                </span>
              ) : (
                <span className="flex items-center gap-1">
                  <Copy className="w-3 h-3" />
                  <span>Salin Teks</span>
                </span>
              )}
            </button>
          </div>
          <p className="text-xs text-stone-700 dark:text-stone-300 italic leading-relaxed break-words">
            "{activeMessage}"
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2.5 mb-4 sm:mb-5">
          {/* WhatsApp Button */}
          <Button
            onClick={handleWhatsApp}
            variant="default"
            size="default"
            className="w-full justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2.5 rounded-xl shadow-xs cursor-pointer text-xs sm:text-sm"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat via WhatsApp (Respon Tercepat)</span>
            <ArrowRight className="w-3.5 h-3.5 ml-auto" />
          </Button>

          {/* Email Button */}
          <Button
            onClick={handleEmail}
            variant="outline"
            size="default"
            className="w-full justify-center gap-2 border-stone-300 dark:border-stone-700 hover:bg-stone-100 dark:hover:bg-stone-800 text-stone-800 dark:text-stone-200 font-medium py-2.5 rounded-xl cursor-pointer text-xs sm:text-sm"
          >
            <Mail className="w-4 h-4 text-orange-600 dark:text-orange-400" />
            <span>Kirim via Email Resmi Korporat</span>
            <ExternalLink className="w-3.5 h-3.5 ml-auto text-stone-400" />
          </Button>
        </div>

        {/* Footer Guarantee Info */}
        <div className="pt-3 border-t border-stone-100 dark:border-stone-800 flex flex-col xs:flex-row items-start xs:items-center justify-between gap-1 text-[11px] text-stone-500 dark:text-stone-400">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
            <span>Kerahasiaan data terjamin (NDA Ready)</span>
          </div>
          <div className="flex items-center gap-1">
            <Phone className="w-3 h-3 text-stone-400" />
            <span>09:00 - 17:00 WIB</span>
          </div>
        </div>

      </div>
    </div>
  )
}
