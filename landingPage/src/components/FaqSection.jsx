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
      q: "Layanan teknologi apa saja yang menjadi fokus PT Amukti Palapa Digital?",
      a: "PT Amukti Palapa Digital berfokus pada pengembangan perangkat lunak (software development) berbasis digital, perancangan arsitektur cloud, pengamanan infrastruktur dan data (cybersecurity), tata kelola operasional IT 24/7, hingga implementasi data analytics & business intelligence untuk klien enterprise.",
    },
    {
      q: "Bagaimana struktur koordinasi teknis di bawah pimpinan CTO?",
      a: "Seluruh departemen teknologi dipimpin langsung oleh Chief Technology Officer (CTO) dan Head of Engineering, membawahi 5 divisi spesialisasi: Software Engineering Division, Infrastructure & Cloud Division, Cybersecurity Division, Data & Analytics Division, serta IT Operations & Support / Service Desk Division.",
    },
    {
      q: "Apakah PT Amukti Palapa Digital melayani klien di luar Daerah Istimewa Yogyakarta?",
      a: "Tentu. Kami menerapkan pola kerja fleksibel (Hybrid & Remote) dengan platform kolaborasi cloud-native, repositori kode terpusat, dan telekonferensi rutin sehingga dapat mendampingi klien enterprise di seluruh Indonesia maupun kawasan regional.",
    },
    {
      q: "Bagaimana jaminan keamanan data dan kepatuhan privasi (UU PDP)?",
      a: "Divisi Cybersecurity kami menerapkan standar ketat mencakup arsitektur Zero-Trust, enkripsi data berlapis (at-rest & in-transit), manajemen identitas (IAM), serta audit keamanan berkala (VAPT) untuk memastikan kerahasiaan dan integritas data enterprise klien terlindungi secara komprehensif.",
    },
    {
      q: "Bagaimana institusi perguruan tinggi atau mahasiswa dapat mengikuti program magang?",
      a: "PT Amukti Palapa Digital secara aktif berkolaborasi dengan perguruan tinggi (seperti Universitas Atma Jaya Yogyakarta). Program magang berlangsung terstruktur selama 6 bulan dengan keterlibatan langsung pada proyek riil di bawah bimbingan para mentor divisi CTO.",
    },
    {
      q: "Bagaimana tahapan awal memulai konsultasi atau kerja sama proyek?",
      a: "Anda dapat menghubungi kami melalui formulir konsultasi, WhatsApp, atau email. Tim konsultan kami akan menjadwalkan sesi discovery gratis untuk menganalisis arsitektur sistem yang dibutuhkan dan menyusun proposal teknis yang tepat guna.",
    },
  ]

  return (
    <section className="py-24 relative overflow-hidden bg-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <Badge variant="gradient" className="gap-1.5 px-3 py-1">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Tanya Jawab</span>
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Informasi transparan seputar kapabilitas teknis, tata kelola proyek, dan model kemitraan PT Amukti Palapa Digital.
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

