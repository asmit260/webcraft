import { site } from '../data/site'
import { Mail, MessageCircle } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-background border-t-2 border-black py-12 px-6 pb-24 md:pb-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-textMuted text-sm">
          {site.copyright}
        </p>

        <div className="flex gap-4">
          <a href={`mailto:${site.email}`} className="p-2 rounded-full bg-white hover:bg-gray-100 border-2 border-black hover:shadow-sketch transition-all text-black" title="Email us">
            <Mail className="w-4 h-4" />
          </a>
          <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white hover:bg-gray-100 border-2 border-black hover:shadow-sketch transition-all text-black" title="WhatsApp us">
            <MessageCircle className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  )
}
