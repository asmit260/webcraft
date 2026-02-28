import { projects } from '../data/site'
import { ExternalLink } from 'lucide-react'

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold font-display text-black">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-textMuted max-w-2xl mx-auto text-lg">
            A selection of projects I've worked on.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="group relative flex flex-col justify-between p-6 md:p-8 rounded-2xl bg-white border-2 border-black hover:shadow-sketch transition-all duration-300 hover:-translate-y-1 no-underline"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div>
                <div className="mb-6 h-48 rounded-xl bg-surfaceHighlight overflow-hidden relative border-2 border-black group/preview">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={`${project.title} preview`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover/preview:scale-110"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-black/50 font-display font-bold text-4xl">
                      {project.title.charAt(0)}
                    </div>
                  )}
                  {/* Overlay to maintain the sketch aesthetic */}
                  <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px] opacity-10 group-hover/preview:opacity-0 transition-opacity duration-500" />
                </div>

                <h3 className="text-xl font-bold text-black mb-3 group-hover:underline decoration-2 underline-offset-4 transition-all">
                  {project.title}
                </h3>
                <p className="text-textMuted leading-relaxed mb-6 text-sm">
                  {project.description}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t-2 border-dashed border-gray-200">
                <span className="flex items-center gap-2 text-sm font-medium text-black">
                  Preview Site
                </span>
                <ExternalLink className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
