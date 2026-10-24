/**
 * ==============================================================================
 * KONFIGURASI PENGIRIMAN EMAIL - PT AMUKTI PALAPA DIGITAL
 * ==============================================================================
 * Silakan masukkan email atau kunci layanan Anda di bawah ini.
 */

export const EMAIL_CONFIG = {
  // 1. Email tujuan di mana Anda ingin menerima pesan:
  recipientEmail: "admin@amuktipalapa.co.id", // <-- GANTI DENGAN EMAIL ANDA

  /**
   * 2. Metode Layanan Pengiriman:
   * 
   * - "web3forms" (SANGAT DIREKOMENDASIKAN):
   *   Gratis, tanpa backend, langsung masuk ke inbox email Anda.
   *   Cara dapat key (hanya butuh 30 detik):
   *   1. Buka https://web3forms.com
   *   2. Masukkan email Anda, klik "Create Your Access Key"
   *   3. Cek inbox email Anda, salin Access Key dan tempel di bawah.
   * 
   * - "formspree":
   *   Buka https://formspree.io, buat form baru dan salin Form ID.
   * 
   * - "mailto":
   *   Fallback langsung membuka aplikasi email bawaan (Outlook / Gmail Web)
   *   pengunjung dengan pesan yang sudah terisi otomatis ke email Anda.
   */
  provider: "web3forms",

  // Masukkan Access Key Web3Forms Anda di sini:
  web3FormsAccessKey: "MASUKKAN_ACCESS_KEY_WEB3FORMS_DI_SINI",

  // Atau jika menggunakan Formspree, masukkan Formspree Form ID di sini:
  formspreeId: "MASUKKAN_FORMSPREE_ID_DI_SINI",

  // Subjek email default yang akan Anda terima
  defaultSubject: "Pesan Konsultasi Baru dari Website PT Amukti Palapa Digital",
}

