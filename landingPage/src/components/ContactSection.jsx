import React, { useState } from "react"
import { Card } from "./ui/card"
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
  Sparkles
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
      `Halo PT Amukti Palapa Digital, saya ${formData.name || "Klien"}. Saya ingin konsultasi: ${formData.message || "Solusi Digital Enterprise"}`
    )
    window.open(`https://wa.me/6281234567890?text=${text}`, "_blank")
  }

  return (
    <section id="kontak" className="py-16 sm:py-20 relative overflow-hidden bg-white dark:bg-slate-950 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <Badge variant="default" className="gap-1.5 px-2.5 py-0.5 text-xs">
            <MessageSquare className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
            <span>Kontak</span>
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Hubungi Kami
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm">
            Diskusikan kebutuhan transformasi sistem atau kemitraan kampus Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Contact Info (Left) */}
          <div className="lg:col-span-5 space-y-3">
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
              <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">Kontak Resmi</h3>

              <div className="space-y-2">
                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 text-xs">
                  <Mail className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0" />
                  <a href="mailto:contact@amuktipalapa.co.id" className="font-semibold text-slate-900 dark:text-white hover:text-sky-600">
                    contact@amuktipalapa.co.id
                  </a>
                </div>

                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 text-xs">
                  <Phone className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span className="font-semibold text-slate-900 dark:text-white">+62 812-3456-7890</span>
                </div>

                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 text-xs">
                  <Clock className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
                  <span className="text-slate-700 dark:text-slate-300">Senin – Jumat : 09.00 – 17.00 WIB</span>
                </div>

                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 text-xs">
                  <MapPin className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0" />
                  <span className="text-slate-700 dark:text-slate-300">Prambanan, Sleman, DIY</span>
                </div>
              </div>

              <div className="pt-1">
                <Button
                  variant="outline"
                  onClick={handleWhatsAppRedirect}
                  className="w-full justify-center gap-2 text-xs border-emerald-300 dark:border-emerald-800 text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 hover:bg-emerald-100"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Chat Langsung di WhatsApp</span>
                </Button>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-sky-50 dark:bg-sky-950/50 border border-sky-100 dark:border-sky-800 text-xs text-sky-900 dark:text-sky-300 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400 shrink-0" />
              <span>Kerahasiaan data terjamin (NDA Ready).</span>
            </div>
          </div>

          {/* Form (Right) */}
          <div className="lg:col-span-7">
            <Card className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 sm:p-6 rounded-2xl">
              {submitted ? (
                <div className="py-8 text-center space-y-3 animate-in fade-in duration-200">
                  <div className="h-12 w-12 rounded-full bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-200 dark:border-emerald-800 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mx-auto">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">Pesan Terkirim</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
                    Tim kami akan menghubungi Anda dalam 1x24 jam kerja.
                  </p>
                  <Button variant="outline" size="sm" onClick={() => setSubmitted(false)} className="text-xs mt-2">
                    Kirim Pesan Lain
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Nama *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Nama Lengkap"
                        className="w-full px-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-white focus:bg-white dark:focus:bg-slate-950 focus:outline-none focus:ring-1 focus:ring-sky-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="nama@perusahaan.com"
                        className="w-full px-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-white focus:bg-white dark:focus:bg-slate-950 focus:outline-none focus:ring-1 focus:ring-sky-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Perusahaan / Kampus
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Nama Institusi"
                        className="w-full px-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-white focus:bg-white dark:focus:bg-slate-950 focus:outline-none focus:ring-1 focus:ring-sky-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Layanan
                      </label>
                      <select
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full px-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-white focus:bg-white dark:focus:bg-slate-950 focus:outline-none cursor-pointer"
                      >
                        <option value="software">Software Engineering</option>
                        <option value="cloud">Cloud & DevOps</option>
                        <option value="security">Cybersecurity</option>
                        <option value="data">Data Analytics</option>
                        <option value="support">IT Operations</option>
                        <option value="internship">Program Magang</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Pesan *
                    </label>
                    <textarea
                      rows={3}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Jelaskan kebutuhan sistem Anda..."
                      className="w-full px-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-white focus:bg-white dark:focus:bg-slate-950 focus:outline-none focus:ring-1 focus:ring-sky-500 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="default"
                    size="sm"
                    className="w-full justify-center gap-1.5 bg-sky-600 hover:bg-sky-700 text-white font-medium"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Kirim Pesan</span>
                  </Button>
                </form>
              )}
            </Card>
          </div>

        </div>

      </div>
    </section>
  )
}
