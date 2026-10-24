import React, { useState, useEffect } from "react"
import { BrandLogo } from "./BrandLogo"
import { Button } from "./ui/button"
import { ThemeToggle } from "./ThemeToggle"
import { Menu, X, ArrowUpRight, MapPin } from "lucide-react"

export function Navbar({ onOpenContact }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false)
      }
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [mobileMenuOpen])

  const navLinks = [
    { name: "Divisi IT", href: "#divisi" },
    { name: "Solusi", href: "#solusi" },
    { name: "Visi & Misi", href: "#visi-misi" },
    { name: "Struktur Organisasi", href: "#organisasi" },
    { name: "Kalkulator Proyek", href: "#simulasi" },
    { name: "Program Magang", href: "#magang" },
  ]

  const handleScrollTo = (e, href) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    const elem = document.querySelector(href)
    if (elem) {
      const topOffset = 80
      const elementPosition = elem.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - topOffset
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
    }
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          scrolled
            ? "bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border-b border-slate-200/90 dark:border-slate-800/90 shadow-xs py-3"
            : "bg-white/80 dark:bg-slate-950/80 backdrop-blur-sm border-b border-slate-100 dark:border-slate-900 py-3.5 sm:py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* Logo */}
            <a href="#" className="flex items-center shrink-0">
              <BrandLogo />
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className="px-3 py-1.5 text-xs xl:text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 hover:bg-slate-50 dark:hover:bg-slate-900 rounded-lg transition-colors whitespace-nowrap"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Right Action buttons */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              {/* Theme Toggle Button */}
              <ThemeToggle />

              <Button
                variant="default"
                size="sm"
                onClick={onOpenContact}
                className="hidden sm:inline-flex items-center gap-1.5 text-xs bg-sky-600 hover:bg-sky-700 text-white rounded-lg shadow-sm px-4 h-9 font-medium"
              >
                <span>Konsultasi Proyek</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Button>

              {/* Mobile hamburger toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500"
                aria-label="Buka Menu Navigasi"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-slate-900/50 dark:bg-slate-950/80 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Menu */}
          <div className="fixed top-[60px] left-0 right-0 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 shadow-xl px-5 py-6 animate-in slide-in-from-top-3 duration-200 max-h-[calc(100vh-70px)] overflow-y-auto">
            <div className="flex flex-col gap-1">
              <div className="flex items-center justify-between px-3 py-2 mb-2 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-2 truncate">
                  <MapPin className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                  <span className="truncate">Sleman, D.I. Yogyakarta</span>
                </div>
                <ThemeToggle className="scale-90" />
              </div>

              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className="px-3 py-2.5 text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-sky-600 dark:hover:text-sky-400 hover:bg-sky-50/60 dark:hover:bg-slate-900 rounded-lg transition-colors flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <span className="text-slate-400 dark:text-slate-500 text-xs">→</span>
                </a>
              ))}

              <div className="pt-4 mt-2 border-t border-slate-100 dark:border-slate-800">
                <Button
                  variant="default"
                  className="w-full justify-center bg-sky-600 hover:bg-sky-700 text-white py-2.5 text-sm rounded-xl font-medium shadow-sm"
                  onClick={() => {
                    setMobileMenuOpen(false)
                    if (onOpenContact) onOpenContact()
                  }}
                >
                  Mulai Konsultasi Proyek
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
