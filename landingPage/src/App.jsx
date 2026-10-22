import React, { useState } from 'react'
import { motion, useScroll, useSpring } from 'motion/react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Divisions } from './components/Divisions'
import { SolutionsEcosystem } from './components/SolutionsEcosystem'
import { VisionMission } from './components/VisionMission'
import { OrgStructure } from './components/OrgStructure'
import { ProjectCalculator } from './components/ProjectCalculator'
import { AcademicPartnership } from './components/AcademicPartnership'
import { LocationSection } from './components/LocationSection'
import { FaqSection } from './components/FaqSection'
import { ContactSection } from './components/ContactSection'
import { Footer } from './components/Footer'
import { ContactModal } from './components/ContactModal'
import { ScrollReveal } from './components/ScrollReveal'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalInitialMessage, setModalInitialMessage] = useState("")

  // Smooth scroll progress bar at top
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
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500/25 selection:text-cyan-200 relative">
      {/* Dynamic Top Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-600 origin-left z-[100] shadow-[0_0_10px_rgba(34,211,238,0.7)]"
        style={{ scaleX }}
      />

      {/* Top Navbar */}
      <Navbar onOpenContact={() => handleOpenContact()} />

      {/* Main Content Sections with Scroll Transitions */}
      <main>
        {/* 1. Hero */}
        <ScrollReveal direction="none" duration={0.8}>
          <Hero onOpenContact={() => handleOpenContact()} />
        </ScrollReveal>

        {/* 2. Five IT Divisions under CTO */}
        <ScrollReveal direction="up" distance={40} duration={0.7}>
          <Divisions onOpenContact={() => handleOpenContact()} />
        </ScrollReveal>

        {/* 3. Solutions Ecosystem & Engineering Process */}
        <ScrollReveal direction="up" distance={40} duration={0.7}>
          <SolutionsEcosystem onOpenContact={() => handleOpenContact()} />
        </ScrollReveal>

        {/* 4. Vision, Mission & Core Corporate Objectives */}
        <ScrollReveal direction="up" distance={40} duration={0.7}>
          <VisionMission />
        </ScrollReveal>

        {/* 5. Organizational Governance & Executive Leadership */}
        <ScrollReveal direction="up" distance={40} duration={0.7}>
          <OrgStructure />
        </ScrollReveal>

        {/* 6. Interactive Project Scope & Sprint Simulator */}
        <ScrollReveal direction="up" distance={40} duration={0.7}>
          <ProjectCalculator 
            onOpenContactWithDetails={(msg) => handleOpenContact(msg)} 
          />
        </ScrollReveal>

        {/* 7. Academic Partnership & 6-Month Structured Internship */}
        <ScrollReveal direction="up" distance={40} duration={0.7}>
          <AcademicPartnership onOpenContact={() => handleOpenContact("Halo, saya ingin menanyakan informasi seputar kemitraan kampus dan program magang PT Amukti Palapa Digital.")} />
        </ScrollReveal>

        {/* 8. Verified Location & Innovation Hub in Sleman DIY */}
        <ScrollReveal direction="up" distance={40} duration={0.7}>
          <LocationSection />
        </ScrollReveal>

        {/* 9. Frequently Asked Questions */}
        <ScrollReveal direction="up" distance={40} duration={0.7}>
          <FaqSection />
        </ScrollReveal>

        {/* 10. Contact & In-Depth Technical Consultation */}
        <ScrollReveal direction="up" distance={40} duration={0.7}>
          <ContactSection prefilledMessage={modalInitialMessage} />
        </ScrollReveal>
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Quick Consultation Modal Dialog */}
      <ContactModal
        isOpen={isModalOpen}
        onClose={handleCloseContact}
        initialMessage={modalInitialMessage}
      />
    </div>
  )
}

export default App
