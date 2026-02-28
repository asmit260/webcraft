import { site } from '../data/site'
import { ArrowRight, Mail, MessageCircle } from 'lucide-react'
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-28 lg:pt-16 pb-12">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://i.imgur.com/c52s452.gif"
          alt="Pixel Art Background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/50 to-white/80" />
      </div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center mt-12 lg:mt-0">
        {/* Text Content */}
        <div className="text-center lg:text-left space-y-6">
          <div className="flex justify-center lg:justify-start animate-fade-in-up">
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="bg-white text-black flex items-center space-x-2 text-sm sm:text-base"
            >
              <span>🚀 Welcome to WebCraft Agency</span>
            </HoverBorderGradient>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight font-display text-black text-center lg:text-left leading-tight">
              We Build <br />
              <span>Digital Products</span>
            </h1>
          </div>

          <p className="text-lg lg:text-xl text-textMuted max-w-lg mx-auto lg:mx-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {site.tagline} From concept to launch, we craft exceptional digital experiences that drive real results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <a
              href="#projects"
              className="px-8 py-3 rounded-full bg-black text-white font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 group hover:shadow-lg border-2 border-transparent hover:border-black hover:bg-white hover:text-black"
            >
              View Our Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="px-8 py-3 rounded-full bg-white border-2 border-black text-black font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:shadow-sketch"
            >
              Get a Quote
            </a>
          </div>

          <div className="flex gap-6 justify-center lg:justify-start pt-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            {/* Contact Links */}
            <a href={`mailto:${site.email}`} className="text-black hover:scale-110 transition-transform" title="Email us">
              <Mail className="w-6 h-6" />
            </a>
            <a href={site.whatsapp} className="text-black hover:scale-110 transition-transform" target="_blank" rel="noopener noreferrer" title="WhatsApp us">
              <MessageCircle className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Hero Image / Visual - Hidden on Mobile */}
        <div className="relative hidden lg:flex justify-center lg:justify-end animate-fade-in p-8" style={{ animationDelay: '0.5s' }}>
          <div className="relative w-72 h-72 lg:w-96 lg:h-96">
            <div className="absolute inset-0 bg-black/5 rounded-full border-2 border-black border-dashed animate-spin-slow will-change-transform" />
            <img
              src="/profile.png"
              alt="WebCraft Agency Mascot"
              className="relative w-full h-full object-contain rounded-3xl border-2 border-black bg-white shadow-sketch rotate-3 hover:rotate-0 transition-transform duration-500 p-4"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
