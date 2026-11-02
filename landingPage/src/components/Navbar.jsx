import { useState, useEffect } from "react"
import { Button } from "./ui/button"
import { Menu, X, ArrowUpRight } from "lucide-react"

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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false)
      }
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const navLinks = [
    { name: "Tentang Kami", href: "#tentang" },
    { name: "Keahlian", href: "#keahlian" },
    { name: "Visi & Misi", href: "#visi-misi" },
    { name: "Nilai Bisnis", href: "#nilai-bisnis" },
    { name: "Kontak", href: "#kontak" },
  ]

  const handleScrollTo = (e, href) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    const elem = document.querySelector(href)
    if (elem) {
      const topOffset = 70
      const elementPosition = elem.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - topOffset
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-sans ${
        scrolled
          ? "bg-stone-950/95 backdrop-blur-md shadow-md py-3 border-b border-stone-800"
          : "bg-black/90 sm:bg-stone-950/90 backdrop-blur-sm py-4 border-b border-stone-800/40"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo Text */}
          <a
            href="#"
            className="flex items-center gap-2 group cursor-pointer transition-transform duration-200"
          >
            <span className="font-bold text-white tracking-tight text-base sm:text-lg">
              Amukti Palapa Digital
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="text-xs font-medium text-stone-300 hover:text-orange-400 transition-colors cursor-pointer"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <Button
              variant="orange"
              size="sm"
              onClick={onOpenContact}
              className="gap-1.5 px-4 text-xs font-semibold rounded-lg cursor-pointer bg-orange-600 hover:bg-orange-700 text-white shadow-xs"
            >
              <span>Hubungi Kami</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-stone-300 hover:bg-stone-900 transition-colors cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-stone-950 border-b border-stone-800 px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top-3 duration-200 shadow-xl">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="px-3 py-2.5 rounded-lg text-xs font-semibold text-stone-200 hover:bg-stone-900 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-stone-800">
            <Button
              variant="orange"
              size="sm"
              onClick={() => {
                setMobileMenuOpen(false)
                onOpenContact()
              }}
              className="w-full justify-center gap-2 text-xs bg-orange-600 hover:bg-orange-700 text-white"
            >
              <span>Hubungi Kami</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
