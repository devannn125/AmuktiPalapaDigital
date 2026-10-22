import React, { useState, useEffect } from "react"
import { BrandLogo } from "./BrandLogo"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { Menu, X, ArrowUpRight, ShieldCheck, MapPin, Sparkles } from "lucide-react"

export function Navbar({ onOpenContact }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Divisi IT", href: "#divisi" },
    { name: "Ekosistem Solusi", href: "#solusi" },
    { name: "Visi & Misi", href: "#visi-misi" },
    { name: "Struktur Organisasi", href: "#organisasi" },
    { name: "Simulasi Proyek", href: "#simulasi" },
    { name: "Program Magang", href: "#magang" },
  ]

  const handleScrollTo = (e, href) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    const elem = document.querySelector(href)
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/85 backdrop-blur-xl border-b border-slate-800/80 shadow-2xl py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center">
            <BrandLogo />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/60 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="px-3.5 py-1.5 text-xs font-medium text-slate-300 hover:text-cyan-400 hover:bg-slate-800/60 rounded-full transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs & Operational status */}
          <div className="hidden sm:flex items-center gap-3">
            <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 border border-slate-800 text-[11px] text-slate-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Yogyakarta • Enterprise Ready</span>
            </div>

            <Button
              variant="gradient"
              size="sm"
              onClick={onOpenContact}
              className="gap-1.5 group"
            >
              <span>Hubungi Kami</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Button>
          </div>

          {/* Mobile hamburger */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950/95 border-b border-slate-800 backdrop-blur-2xl px-6 py-6 animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 pb-3 mb-2 border-b border-slate-800/60 text-xs text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-cyan-400" />
              <span>Prambanan, Sleman, D.I. Yogyakarta</span>
            </div>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="py-2.5 text-sm font-medium text-slate-200 hover:text-cyan-400 border-b border-slate-900 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 flex flex-col gap-2">
              <Button
                variant="gradient"
                className="w-full justify-center"
                onClick={() => {
                  setMobileMenuOpen(false)
                  if (onOpenContact) onOpenContact()
                }}
              >
                Konsultasi Solusi Digital
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

