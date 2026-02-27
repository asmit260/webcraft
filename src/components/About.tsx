import { site } from '../data/site'
import { Palette, Terminal, Lightbulb, Users } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-24 relative z-10 overflow-hidden bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          {/* Visual Side - Hidden on mobile/tablet */}
          <div className="hidden lg:block w-full md:w-1/2 relative md:order-last">
            <div className="aspect-square rounded-2xl bg-white relative border-2 border-black shadow-sketch p-6">
              <img
                src="https://i.redd.it/c04nu8iqwztf1.gif"
                alt="WebCraft Team at work"
                className="w-full h-full object-cover rounded-xl border-2 border-black/5 bg-gray-50"
              />
            </div>
          </div>

          {/* Text Side */}
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-black">
              About <span>Us</span>
            </h2>

            <p className="text-lg text-textMuted leading-relaxed">
              {site.bio}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="p-4 rounded-xl bg-white hover:bg-gray-50 transition-colors border-2 border-black group shadow-sketch hover:-translate-y-1 duration-300">
                <Terminal className="w-8 h-8 text-black mb-3 group-hover:scale-110 transition-transform" />
                <h4 className="font-bold text-black mb-1">Full Stack Development</h4>
                <p className="text-sm text-textMuted">Robust end-to-end web & mobile applications.</p>
              </div>
              <div className="p-4 rounded-xl bg-white hover:bg-gray-50 transition-colors border-2 border-black group shadow-sketch hover:-translate-y-1 duration-300">
                <Palette className="w-8 h-8 text-black mb-3 group-hover:scale-110 transition-transform" />
                <h4 className="font-bold text-black mb-1">UI/UX Design</h4>
                <p className="text-sm text-textMuted">Beautiful interfaces users actually love.</p>
              </div>
              <div className="p-4 rounded-xl bg-white hover:bg-gray-50 transition-colors border-2 border-black group shadow-sketch hover:-translate-y-1 duration-300">
                <Lightbulb className="w-8 h-8 text-black mb-3 group-hover:scale-110 transition-transform" />
                <h4 className="font-bold text-black mb-1">Digital Strategy</h4>
                <p className="text-sm text-textMuted">Turning your vision into a clear product roadmap.</p>
              </div>
              <div className="p-4 rounded-xl bg-white hover:bg-gray-50 transition-colors border-2 border-black group shadow-sketch hover:-translate-y-1 duration-300">
                <Users className="w-8 h-8 text-black mb-3 group-hover:scale-110 transition-transform" />
                <h4 className="font-bold text-black mb-1">Client Success</h4>
                <p className="text-sm text-textMuted">Dedicated support from kickoff to launch and beyond.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
