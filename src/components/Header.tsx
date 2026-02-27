import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-3' : 'bg-transparent py-5'
        }`}
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6">
        <a href="#" className="flex items-center gap-2 group">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-primary to-secondary flex items-center justify-center font-bold text-white text-xl group-hover:scale-105 transition-transform">
            W
          </div>
          <span className="font-display font-bold text-xl tracking-wide hidden sm:block">WebCraft</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="text-sm font-medium text-textMuted hover:text-white transition-colors relative group"
            >
              {label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href="#contact"
            className="px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 transition-all text-sm font-medium backdrop-blur-sm"
          >
            Get a Quote
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-text p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        className={`md:hidden absolute top-full left-0 w-full glass border-t border-white/10 transition-all duration-300 ease-in-out ${isMobileMenuOpen
          ? 'opacity-100 translate-y-0 visible'
          : 'opacity-0 -translate-y-4 invisible'
          }`}
      >
        <nav className="flex flex-col p-6 gap-4">
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="text-lg font-medium text-textMuted hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-4 px-5 py-3 rounded-xl bg-primary/20 text-primary border border-primary/20 text-center font-medium hover:bg-primary/30 transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Get a Quote
          </a>
        </nav>
      </div>
    </header>
  )
}
