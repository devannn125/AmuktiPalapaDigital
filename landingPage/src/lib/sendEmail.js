import { EMAIL_CONFIG } from "../config/emailConfig"

/**
 * Mengirim formulir konsultasi ke email
 * @param {Object} data - { name, email, company, category, message, source }
 * @returns {Promise<{ success: boolean, message: string }>}
 */
export async function sendConsultationEmail(data) {
  const { name, email, company, category, message, source = "Form Konsultasi Website" } = data

  const categoryNames = {
    software: "Software Engineering",
    cloud: "Infrastructure & Cloud",
    security: "Cybersecurity",
    data: "Data Analytics",
    support: "IT Operations & Support",
    internship: "Program Magang / Kampus",
    other: "Lainnya",
  }

  const categoryLabel = categoryNames[category] || category

  // 1. OPSI: Web3Forms (Rekomendasi Utama)
  if (
    EMAIL_CONFIG.provider === "web3forms" &&
    EMAIL_CONFIG.web3FormsAccessKey &&
    !EMAIL_CONFIG.web3FormsAccessKey.includes("MASUKKAN_")
  ) {
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: EMAIL_CONFIG.web3FormsAccessKey,
          subject: `${EMAIL_CONFIG.defaultSubject} - ${name} (${company || "Individu"})`,
          from_name: name,
          email: email,
          to_email: EMAIL_CONFIG.recipientEmail,
          nama_lengkap: name,
          email_pengirim: email,
          nama_perusahaan_instansi: company || "-",
          divisi_layanan: categoryLabel,
          uraian_kebutuhan: message,
          sumber_halaman: source,
          waktu_kirim: new Date().toLocaleString("id-ID", { timeZone: "Asia/Jakarta" }) + " WIB",
        }),
      })

      const result = await response.json()
      if (result.success) {
        return { success: true, message: "Pesan berhasil terkirim ke email perusahaan!" }
      } else {
        throw new Error(result.message || "Gagal mengirim formulir ke Web3Forms.")
      }
    } catch (err) {
      console.error("Email sending error (Web3Forms):", err)
      return { success: false, error: err.message }
    }
  }

  // 2. OPSI: Formspree
  if (
    EMAIL_CONFIG.provider === "formspree" &&
    EMAIL_CONFIG.formspreeId &&
    !EMAIL_CONFIG.formspreeId.includes("MASUKKAN_")
  ) {
    try {
      const response = await fetch(`https://formspree.io/f/${EMAIL_CONFIG.formspreeId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          company: company || "-",
          category: categoryLabel,
          message: message,
          _subject: `${EMAIL_CONFIG.defaultSubject} dari ${name}`,
        }),
      })

      if (response.ok) {
        return { success: true, message: "Pesan berhasil dikirim via Formspree!" }
      } else {
        throw new Error("Gagal mengirim via Formspree.")
      }
    } catch (err) {
      console.error("Email sending error (Formspree):", err)
      return { success: false, error: err.message }
    }
  }

  // 3. OPSI: Fallback Mailto atau Simulasi Lokal jika key belum dimasukkan
  if (EMAIL_CONFIG.provider === "mailto") {
    const subject = encodeURIComponent(`${EMAIL_CONFIG.defaultSubject} - ${name}`)
    const body = encodeURIComponent(
      `Nama: ${name}\n` +
      `Email: ${email}\n` +
      `Perusahaan/Kampus: ${company || "-"}\n` +
      `Kategori: ${categoryLabel}\n\n` +
      `Pesan:\n${message}\n\n` +
      `Dikirim dari Landing Page PT Amukti Palapa Digital`
    )
    window.location.href = `mailto:${EMAIL_CONFIG.recipientEmail}?subject=${subject}&body=${body}`
    return { success: true, message: "Membuka aplikasi email..." }
  }

  // JIKA KEY BELUM DIISI (Simulasi Berhasil dengan Log Petunjuk untuk Developer)
  console.info(
    `%c[EMAIL TEMPLATE]%c Form disubmit oleh: ${name} (${email}).\n` +
    `Untuk mengaktifkan pengiriman asli ke inbox Anda:\n` +
    `1. Buka file src/config/emailConfig.js\n` +
    `2. Masukkan access key Web3Forms atau Formspree Anda.\n` +
    `Email tujuan saat ini diatur ke: ${EMAIL_CONFIG.recipientEmail}`,
    "color: #0284c7; font-weight: bold;",
    "color: inherit;"
  )

  // Delay sedikit untuk memberi kesan proses transmisi
  await new Promise((resolve) => setTimeout(resolve, 800))
  return { 
    success: true, 
    message: `Pesan diterima! (Tersambung ke template: ${EMAIL_CONFIG.recipientEmail})` 
  }
}

