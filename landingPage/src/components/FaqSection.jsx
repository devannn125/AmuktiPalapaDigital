import React from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion"
import { Badge } from "./ui/badge"
import { HelpCircle } from "lucide-react"

export function FaqSection() {
  const faqs = [
    {
      q: "Layanan utama apa saja yang disediakan?",
      a: "Pengembangan software (web & mobile), arsitektur cloud, keamanan siber, data analytics, serta pemeliharaan operasional IT 24/7.",
    },
    {
      q: "Bagaimana struktur koordinasi teknis di bawah CTO?",
      a: "Dipimpin oleh CTO dan Head of Engineering yang membawahi 5 divisi spesialis: Software Engineering, Cloud, Cybersec, Data, dan Helpdesk.",
    },
    {
      q: "Apakah melayani klien di luar Yogyakarta?",
      a: "Ya. Kami bekerja secara fleksibel (Hybrid & Remote) untuk klien enterprise di seluruh Indonesia maupun regional.",
    },
    {
      q: "Bagaimana jaminan keamanan dan privasi data?",
      a: "Menerapkan standar Zero-Trust, enkripsi data at-rest & in-transit, serta audit berkala sesuai regulasi UU PDP.",
    },
    {
      q: "Bagaimana cara mendaftar program magang kampus?",
      a: "Mahasiswa dapat mendaftar melalui form konsultasi atau kemitraan perguruan tinggi untuk program magang terstruktur selama 6 bulan.",
    },
    {
      q: "Bagaimana memulai konsultasi proyek?",
      a: "Hubungi kami via formulir konsultasi atau WhatsApp untuk menjadwalkan sesi discovery teknis gratis.",
    },
  ]

  return (
    <section className="py-16 sm:py-20 relative overflow-hidden bg-slate-50/70 dark:bg-slate-900/40 border-b border-slate-100 dark:border-slate-800 transition-colors duration-200">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
          <Badge variant="default" className="gap-1.5 px-2.5 py-0.5 text-xs">
            <HelpCircle className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
            <span>FAQ</span>
          </Badge>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Pertanyaan Umum
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm">
            Informasi ringkas seputar kapabilitas teknis dan layanan kami.
          </p>
        </div>

        {/* Accordion Component */}
        <Accordion type="single" collapsible={true} className="w-full">
          {faqs.map((faq, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`}>
              <AccordionTrigger>{faq.q}</AccordionTrigger>
              <AccordionContent>{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

      </div>
    </section>
  )
}
