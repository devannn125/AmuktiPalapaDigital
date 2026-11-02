import { useState, useEffect } from 'react'
import { motion, useScroll, useSpring } from 'motion/react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { AboutSection } from './components/AboutSection'
import { Divisions } from './components/Divisions'
import { VisionMission } from './components/VisionMission'
import { CorporateObjectives } from './components/CorporateObjectives'
import { ContactSection } from './components/ContactSection'
import { Footer } from './components/Footer'
import { ContactModal } from './components/ContactModal'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalInitialMessage, setModalInitialMessage] = useState("")

  useEffect(() => {
    // Ensure clean default theme without residual dark class overrides
    if (typeof document !== 'undefined') {
      document.documentElement.classList.remove('dark')
      localStorage.removeItem('theme')
    }
  }, [])

  // Smooth scroll progress bar at top with warm orange tone
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  const handleOpenContact = (customMessage = "") => {
    setModalInitialMessage(customMessage)
    setIsModalOpen(true)
  }

  const handleCloseContact = () => {
    setIsModalOpen(false)
    setModalInitialMessage("")
  }

  return (
    <div className="min-h-screen bg-black text-stone-100 selection:bg-orange-500/20 selection:text-orange-900 font-sans relative transition-colors duration-200 overflow-x-hidden">
      {/* Top Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-orange-600 origin-left z-[100]"
        style={{ scaleX }}
      />

      {/* Top Navbar */}
      <Navbar onOpenContact={() => handleOpenContact()} />

      {/* Main Content Sections strictly matching the design image with simple fluid transitions */}
      <main>
        {/* 1. Hero with corporate meeting room visual & TURNING IDEAS INTO DIGITAL SOLUTIONS */}
        <Hero />

        {/* 2. Amukti Palapa Digital Brand Introduction (Dark Section) */}
        <AboutSection />

        {/* 3. Keahlian Berbeda. Kebutuhan yang Saling Terhubung (White Section, 6 capabilities) */}
        <Divisions />

        {/* 4. Visi & Misi Perusahaan (Dark Section with 4 missions) */}
        <VisionMission />

        {/* 5. Bukan Sekadar Digital. Lebih Berguna Bagi Bisnis (Nilai Bisnis) */}
        <CorporateObjectives />

        {/* 6. Kontak Resmi Perusahaan (White Section, Direct Communication Hub) */}
        <ContactSection />
      </main>

      {/* 7. Footer (Dark Section with Headquarters Address & Navigation) */}
      <Footer />

      {/* Interactive Direct Communication Modal (No Backend, WhatsApp & Mailto) */}
      <ContactModal
        isOpen={isModalOpen}
        onClose={handleCloseContact}
        initialMessage={modalInitialMessage}
      />
    </div>
  )
}

export default App
