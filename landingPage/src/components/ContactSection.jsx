import React, { useState } from "react"
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { 
  Mail, 
  Phone, 
  Send, 
  CheckCircle, 
  MessageSquare, 
  MapPin, 
  Clock, 
  Sparkles,
  ArrowRight
} from "lucide-react"

export function ContactSection({ prefilledMessage = "" }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    category: "software",
    message: prefilledMessage || "",
  })
  const [submitted, setSubmitted] = useState(false)

  // Update if prefilledMessage changes
  React.useEffect(() => {
    if (prefilledMessage) {
      setFormData((prev) => ({ ...prev, message: prefilledMessage }))
    }
  }, [prefilledMessage])

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleWhatsAppRedirect = () => {
    const text = encodeURIComponent(
      `Halo PT Amukti Palapa Digital, saya ${formData.name || "Klien"} dari ${formData.company || "Perusahaan"}. Saya ingin berkonsultasi mengenai: ${formData.message || "Solusi Transformasi Digital"}`
    )
    window.open(`https://wa.me/6281234567890?text=${text}`, "_blank")
  }

  return (
    <section id="kontak" className="py-24 relative overflow-hidden bg-slate-900/60 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge variant="gradient" className="gap-1.5 px-3 py-1">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Mulai Diskusi Teknis</span>
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Hubungi Konsultan Teknologi Kami
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Diskusikan kebutuhan transformasi digital enterprise, audit infrastruktur sistem, atau inisiasi kemitraan akademik bersama tim PT Amukti Palapa Digital.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Contact Information & Channels (Left 5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-4">
              <h3 className="text-lg font-bold text-white">Saluran Komunikasi Resmi</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Kami siap memberikan respons cepat terhadap kebutuhan teknis maupun penjadwalan demo dan diskusi sistem.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                  <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Email Resmi</div>
                    <a
                      href="mailto:contact@amuktipalapa.co.id"
                      className="text-sm font-semibold text-white hover:text-cyan-400 transition-colors"
                    >
                      contact@amuktipalapa.co.id
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Hotline & WhatsApp Enterprise</div>
                    <div className="text-sm font-semibold text-white">
                      +62 812-3456-7890
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                  <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Waktu Layanan Konsultasi</div>
                    <div className="text-sm font-semibold text-white">
                      Senin – Jumat : 09.00 – 17.00 WIB
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                  <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Pusat Operasional</div>
                    <div className="text-xs font-medium text-slate-200 mt-0.5">
                      Prambanan, Sleman, D.I. Yogyakarta 55572
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800">
                <Button
                  variant="outline"
                  onClick={handleWhatsAppRedirect}
                  className="w-full justify-center gap-2 text-xs border-emerald-500/40 text-emerald-300 hover:bg-emerald-950/30"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span>Konsultasi Langsung via WhatsApp</span>
                </Button>
              </div>
            </div>

            {/* Quick trust note */}
            <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/20 text-xs text-slate-300 flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-cyan-400 shrink-0" />
              <span>
                Seluruh data dan rencana arsitektur yang Anda konsultasikan dilindungi oleh kebijakan kerahasiaan ketat (NDA Ready).
              </span>
            </div>

          </div>

          {/* Interactive Consultation Form (Right 7 Cols) */}
          <div className="lg:col-span-7">
            <Card className="bg-slate-950/90 border-slate-800 p-8 backdrop-blur-xl shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-emerald-500" />

              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="h-16 w-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mx-auto">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Permintaan Konsultasi Diterima!
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Terima kasih telah menghubungi PT Amukti Palapa Digital. Lead Architect atau perwakilan divisi terkait kami akan menindaklanjuti pesan Anda dalam kurun waktu 1x24 jam kerja.
                  </p>
                  <div className="pt-4 flex justify-center gap-3">
                    <Button
                      variant="outline"
                      onClick={() => setSubmitted(false)}
                      className="text-xs"
                    >
                      Kirim Pesan Lain
                    </Button>
                    <Button
                      variant="gradient"
                      onClick={handleWhatsAppRedirect}
                      className="text-xs gap-1.5"
                    >
                      Buka WhatsApp Sekarang
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Nama Lengkap *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Contoh: Pratama Devando"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Email Kerja / Institusi *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="nama@perusahaan.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Nama Perusahaan / Universitas
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="PT / CV / Universitas"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Divisi / Topik Kebutuhan
                      </label>
                      <select
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors cursor-pointer"
                      >
                        <option value="software">Software Engineering (Aplikasi/Web/Mobile)</option>
                        <option value="cloud">Infrastructure & Cloud Deployment</option>
                        <option value="security">Cybersecurity & Data Protection</option>
                        <option value="data">Data Analytics & Business Intelligence</option>
                        <option value="support">IT Operations & 24/7 Service Desk</option>
                        <option value="internship">Program Magang / Kemitraan Kampus</option>
                        <option value="other">Lainnya / Kemitraan Strategis</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Uraian Kebutuhan atau Catatan Proyek *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Jelaskan kebutuhan transformasi sistem, target estimasi, atau ruang lingkup proyek Anda..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="gradient"
                      size="lg"
                      className="w-full justify-center gap-2 text-sm shadow-xl shadow-cyan-500/25"
                    >
                      <Send className="w-4 h-4" />
                      <span>Kirim Permintaan Konsultasi</span>
                    </Button>
                  </div>
                </form>
              )}
            </Card>
          </div>

        </div>

      </div>
    </section>
  )
}

