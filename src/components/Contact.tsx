import { useState } from 'react'
import { site } from '../data/site'
import { Mail, MapPin, Send, Loader2, MessageCircle } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Construct mailto link
    const subject = `Project Enquiry from ${formData.name}`
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    const mailtoLink = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    // Open mail client
    window.location.href = mailtoLink

    // Reset loading state after a delay
    setTimeout(() => {
      setIsSubmitting(false)
      setFormData({ name: '', email: '', message: '' })
    }, 1000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData(prev => ({ ...prev, [id]: value }))
  }

  return (
    <section id="contact" className="py-24 relative z-10 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8 text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-bold font-display text-black">
              Start a Project <span>With Us</span>
            </h2>
            <p className="text-textMuted text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              Have a project in mind? We'd love to hear about it. Tell us what you're building and let's figure out how WebCraft can help bring it to life.
            </p>

            <div className="space-y-6 pt-4 text-left">
              <a href={`mailto:${site.email}`} className="flex items-center gap-4 p-4 rounded-xl bg-white border-2 border-black hover:shadow-sketch transition-all group duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-full bg-gray-100 border-2 border-black flex items-center justify-center text-black group-hover:scale-110 transition-transform shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-textMuted">Email Us</p>
                  <p className="font-medium text-black break-all">{site.email}</p>
                </div>
              </a>

              <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl bg-white border-2 border-black hover:shadow-sketch transition-all group duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-full bg-gray-100 border-2 border-black flex items-center justify-center text-black group-hover:scale-110 transition-transform shrink-0">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-textMuted">WhatsApp Us</p>
                  <p className="font-medium text-black">Direct Message on WhatsApp</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-white border-2 border-black hover:shadow-sketch transition-all group duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-full bg-gray-100 border-2 border-black flex items-center justify-center text-black group-hover:scale-110 transition-transform shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-textMuted">Location</p>
                  <p className="font-medium text-black">Remote / Worldwide</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-6 md:p-8 rounded-3xl border-2 border-black shadow-sketch">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-black">Name</label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white border-2 border-black text-black focus:outline-none focus:shadow-sketch transition-all placeholder:text-gray-400"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-black">Email</label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white border-2 border-black text-black focus:outline-none focus:shadow-sketch transition-all placeholder:text-gray-400"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-black">Tell us about your project</label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white border-2 border-black text-black focus:outline-none focus:shadow-sketch transition-all resize-none placeholder:text-gray-400"
                  placeholder="Describe your project, goals, timeline..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-black text-white font-bold text-lg border-2 border-transparent hover:bg-white hover:text-black hover:border-black hover:shadow-sketch transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Enquiry
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
