export const site = {
  name: 'WebCraft',
  tagline: 'We turn ideas into production-ready web & mobile products.',
  email: 'meccode360@gmail.com',
  whatsapp: 'https://wa.me/919627474926',
  bio: "WebCraft is a full-service digital agency built by a passionate team of developers and designers. We specialise in crafting high-performance, scalable web and mobile applications — helping startups and businesses turn bold ideas into polished digital products.",
  copyright: `© ${new Date().getFullYear()} WebCraft Agency. All rights reserved.`,
}

export type SkillId = 'mern' | 'mongodb' | 'express' | 'react' | 'node' | 'typescript' | 'tailwind' | 'git' | 'html' | 'css' | 'javascript'

export const skills: { name: string; id: SkillId }[] = [
  { name: 'MongoDB', id: 'mongodb' },
  { name: 'Express', id: 'express' },
  { name: 'React', id: 'react' },
  { name: 'Node.js', id: 'node' },
  { name: 'TypeScript', id: 'typescript' },
  { name: 'Tailwind CSS', id: 'tailwind' },
  { name: 'JavaScript', id: 'javascript' },
  { name: 'HTML5', id: 'html' },
  { name: 'CSS3', id: 'css' },
  { name: 'Git', id: 'git' },
]

export const projects = [
  {
    title: 'Excellence Academy',
    description: 'A modern education platform designed for seamless learning experiences, featuring intuitive navigation and comprehensive course management.',
    link: 'https://edu-bay-one.vercel.app/',
    image: '/projects/edu.png',
  },
  {
    title: 'Muscle Warrior Gym',
    description: 'A high-performance gym management and fitness tracking application, empowering users to reach their health goals with personalized workout plans.',
    link: 'https://gy-m-sigma.vercel.app/',
    image: '/projects/gym.png',
  },
  {
    title: 'Resort Lake View',
    description: 'A premium resort booking and management system, offering a luxurious digital experience for travelers and efficient operations for staff.',
    link: 'https://demo-dun-ten-90.vercel.app/',
    image: '/projects/resort.jpg',
  },
]
