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
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-sky-500/15 selection:text-sky-900 dark:selection:bg-sky-500/30 dark:selection:text-sky-200 relative transition-colors duration-200">
      {/* Top Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-sky-600 origin-left z-[100]"
        style={{ scaleX }}
      />

      {/* Top Navbar */}
      <Navbar onOpenContact={() => handleOpenContact()} />

      {/* Main Content Sections with Scroll Transitions */}
      <main>
        {/* 1. Hero */}
        <ScrollReveal direction="none" duration={0.7}>
          <Hero onOpenContact={() => handleOpenContact()} />
        </ScrollReveal>

        {/* 2. Five IT Divisions under CTO */}
        <ScrollReveal direction="up" distance={30} duration={0.6}>
          <Divisions onOpenContact={() => handleOpenContact()} />
        </ScrollReveal>

        {/* 3. Solutions Ecosystem & Engineering Process */}
        <ScrollReveal direction="up" distance={30} duration={0.6}>
          <SolutionsEcosystem onOpenContact={() => handleOpenContact()} />
        </ScrollReveal>

        {/* 4. Vision, Mission & Core Corporate Objectives */}
        <ScrollReveal direction="up" distance={30} duration={0.6}>
          <VisionMission />
        </ScrollReveal>

        {/* 5. Organizational Governance & Executive Leadership */}
        <ScrollReveal direction="up" distance={30} duration={0.6}>
          <OrgStructure />
        </ScrollReveal>

        {/* 6. Interactive Project Scope & Sprint Simulator */}
        <ScrollReveal direction="up" distance={30} duration={0.6}>
          <ProjectCalculator 
            onOpenContactWithDetails={(msg) => handleOpenContact(msg)} 
          />
        </ScrollReveal>

        {/* 7. Academic Partnership & 6-Month Structured Internship */}
        <ScrollReveal direction="up" distance={30} duration={0.6}>
          <AcademicPartnership onOpenContact={() => handleOpenContact("Halo, saya ingin menanyakan informasi seputar kemitraan kampus dan program magang PT Amukti Palapa Digital.")} />
        </ScrollReveal>

        {/* 8. Verified Location & Innovation Hub in Sleman DIY */}
        <ScrollReveal direction="up" distance={30} duration={0.6}>
          <LocationSection />
        </ScrollReveal>

        {/* 9. Frequently Asked Questions */}
        <ScrollReveal direction="up" distance={30} duration={0.6}>
          <FaqSection />
        </ScrollReveal>

        {/* 10. Contact & In-Depth Technical Consultation */}
        <ScrollReveal direction="up" distance={30} duration={0.6}>
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
