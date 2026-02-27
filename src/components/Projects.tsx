import { projects } from '../data/site'
import { ExternalLink } from 'lucide-react'

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold font-display">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-textMuted max-w-2xl mx-auto">
            A selection of projects I've worked on.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <article
              key={project.title}
              className="group relative flex flex-col justify-between p-8 rounded-2xl bg-white border-2 border-black hover:shadow-sketch transition-all duration-300 hover:-translate-y-1"
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
                <p className="text-textMuted leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t-2 border-dashed border-gray-200">
                <a
                  href={project.link}
                  className="flex items-center gap-2 text-sm font-medium text-black hover:underline decoration-2 underline-offset-4 transition-all"
                  target="_blank"
                  rel="noreferrer"
                >
                  <ExternalLink className="w-4 h-4" />
                  Preview
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
