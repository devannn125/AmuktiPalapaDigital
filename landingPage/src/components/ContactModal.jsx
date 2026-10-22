import React, { useState } from "react"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { X, Send, CheckCircle, MessageSquare, Mail, Sparkles } from "lucide-react"

export function ContactModal({ isOpen, onClose, initialMessage = "" }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    category: "software",
    message: initialMessage || "",
  })
  const [submitted, setSubmitted] = useState(false)

  React.useEffect(() => {
    if (initialMessage) {
      setFormData((prev) => ({ ...prev, message: initialMessage }))
    }
  }, [initialMessage])

  if (!isOpen) return null

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Halo PT Amukti Palapa Digital, saya ${formData.name || "Klien"} dari ${formData.company || "Perusahaan"}. Saya ingin berkonsultasi mengenai: ${formData.message || "Solusi Transformasi Digital"}`
    )
    window.open(`https://wa.me/6281234567890?text=${text}`, "_blank")
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-lg rounded-2xl bg-slate-900 border border-slate-800 p-6 sm:p-8 shadow-2xl z-10 animate-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          aria-label="Tutup Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="h-14 w-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mx-auto">
              <CheckCircle className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-white">Konsultasi Terkirim!</h3>
            <p className="text-xs text-slate-300 leading-relaxed max-w-sm mx-auto">
              Tim konsultan PT Amukti Palapa Digital akan menghubungi Anda melalui email atau kontak tertera dalam 1x24 jam.
            </p>
            <div className="pt-2 flex justify-center gap-3">
              <Button variant="outline" size="sm" onClick={onClose} className="text-xs">
                Tutup
              </Button>
              <Button variant="gradient" size="sm" onClick={handleWhatsApp} className="text-xs">
                Hubungi via WhatsApp
              </Button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-[11px] font-medium mb-2">
                <Sparkles className="w-3 h-3" />
                <span>Konsultasi Cepat</span>
              </div>
              <h3 className="text-xl font-bold text-white font-heading">
                Mulai Diskusi Transformasi Digital
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Isi form di bawah untuk menjadwalkan sesi discovery teknis dengan arsitek kami.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Nama Anda *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Nama Lengkap"
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Email Kerja *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="nama@organisasi.id"
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Nama Institusi/PT
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Nama Instansi"
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Divisi Terkait
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-cyan-500 transition-colors"
                >
                  <option value="software">Software Engineering (Aplikasi/Web/Mobile)</option>
                  <option value="cloud">Infrastructure & Cloud Division</option>
                  <option value="security">Cybersecurity Division</option>
                  <option value="data">Data & Analytics Division</option>
                  <option value="support">IT Operations & Service Desk</option>
                  <option value="internship">Program Magang & Kemitraan Kampus</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Pesan / Gambaran Kebutuhan
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Ceritakan rencana sistem Anda..."
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                />
              </div>

              <div className="pt-2 flex items-center gap-3">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleWhatsApp}
                  className="flex-1 justify-center gap-1.5 text-xs border-emerald-500/40 text-emerald-400 hover:bg-emerald-950/20"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </Button>
                <Button
                  type="submit"
                  variant="gradient"
                  className="flex-1 justify-center gap-1.5 text-xs"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Kirim Pesan</span>
                </Button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}

