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
      className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md py-3 border-b-2 border-black' : 'bg-transparent py-5'
        }`}
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6">
        <a href="#" className="flex items-center gap-2 group">
          <div className="h-10 w-10 rounded-xl bg-black flex items-center justify-center font-bold text-white text-xl group-hover:scale-105 transition-transform border-2 border-black shadow-[2px_2px_0px_rgba(0,0,0,1)]">
            W
          </div>
          <span className="font-display font-bold text-xl tracking-wide text-black">WebCraft</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="text-sm font-bold text-black hover:underline underline-offset-4 decoration-2 transition-all"
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            className="px-6 py-2 rounded-full bg-black text-white hover:bg-white hover:text-black border-2 border-black transition-all text-sm font-bold shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1"
          >
            Get a Quote
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden text-black p-2 border-2 border-black rounded-lg bg-white shadow-[2px_2px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-0.5 active:translate-y-0.5 relative z-[70] transition-colors ${isMobileMenuOpen ? 'bg-black text-white' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-white transition-all duration-500 md:hidden ${isMobileMenuOpen
          ? 'translate-x-0'
          : 'translate-x-full'
          }`}
      >
        <div className="flex flex-col h-full p-8 pt-24">
          <nav className="flex flex-col gap-6">
            {navLinks.map(({ label, href }, i) => (
              <a
                key={href}
                href={href}
                className={`text-4xl font-bold text-black border-b-4 border-black pb-2 transform transition-all duration-500 ${isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                  }`}
                style={{ transitionDelay: `${i * 100}ms` }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {label}
              </a>
            ))}
            <a
              href="#contact"
              className={`mt-8 px-8 py-4 rounded-2xl bg-black text-white text-center text-xl font-bold border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-2 active:translate-y-2 transition-all ${isMobileMenuOpen ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
                }`}
              style={{ transitionDelay: '500ms' }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Start Your Project
            </a>
          </nav>

          <div className="mt-auto flex justify-center gap-8 pb-12">
            <p className="text-black/50 font-bold">© {new Date().getFullYear()} WebCraft</p>
          </div>
        </div>
      </div>
    </header>
  )
}
