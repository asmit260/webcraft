import { motion } from 'framer-motion'
import { skills, SkillId } from '../data/site'
import {
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiGit
} from 'react-icons/si'
// Default icon fallback
import { Code2 } from 'lucide-react'

const iconMap: Record<SkillId, React.ElementType[]> = {
  mern: [SiMongodb, SiExpress, SiReact, SiNodedotjs],
  mongodb: [SiMongodb],
  express: [SiExpress],
  react: [SiReact],
  node: [SiNodedotjs],
  typescript: [SiTypescript],
  tailwind: [SiTailwindcss],
  javascript: [SiJavascript],
  html: [SiHtml5],
  css: [SiCss3],
  git: [SiGit],
}

// Color map for brand colors on hover (optional enhancement)
const colorMap: Record<SkillId, string> = {
  mern: 'group-hover:text-green-500 group-hover:border-green-500 group-hover:bg-green-500/10',
  mongodb: 'group-hover:text-[#47A248] group-hover:border-[#47A248] group-hover:bg-[#47A248]/10',
  express: 'group-hover:text-[#666666] group-hover:border-[#666666] group-hover:bg-[#666666]/10',
  react: 'group-hover:text-[#61DAFB] group-hover:border-[#61DAFB] group-hover:bg-[#61DAFB]/10',
  node: 'group-hover:text-[#339933] group-hover:border-[#339933] group-hover:bg-[#339933]/10',
  typescript: 'group-hover:text-[#3178C6] group-hover:border-[#3178C6] group-hover:bg-[#3178C6]/10',
  tailwind: 'group-hover:text-[#06B6D4] group-hover:border-[#06B6D4] group-hover:bg-[#06B6D4]/10',
  javascript: 'group-hover:text-[#F7DF1E] group-hover:border-[#F7DF1E] group-hover:bg-[#F7DF1E]/10',
  html: 'group-hover:text-[#E34F26] group-hover:border-[#E34F26] group-hover:bg-[#E34F26]/10',
  css: 'group-hover:text-[#1572B6] group-hover:border-[#1572B6] group-hover:bg-[#1572B6]/10',
  git: 'group-hover:text-[#F05032] group-hover:border-[#F05032] group-hover:bg-[#F05032]/10',
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-white relative z-20">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold font-display text-black"
          >
            My <span>Skills</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-textMuted max-w-2xl mx-auto"
          >
            Technologies and tools I work with to build high-quality applications.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, i) => {
            const icons = iconMap[skill.id as SkillId] || [Code2]
            const Icon = icons[0]

            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group relative z-20 p-6 rounded-2xl bg-white border-2 border-black hover:shadow-sketch transition-all duration-300 flex flex-col items-center justify-center text-center gap-4 cursor-pointer hover:-translate-y-1"
              >
                <div className={`w-16 h-16 rounded-full bg-gray-50 border-2 border-black flex items-center justify-center text-black transition-colors duration-300 ${colorMap[skill.id as SkillId] || ''}`}>
                  <Icon className="w-8 h-8" />
                </div>
                <span className="font-medium text-lg text-black group-hover:underline decoration-2 underline-offset-4 transition-all">
                  {skill.name}
                </span>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
