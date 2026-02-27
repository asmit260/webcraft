import { Home, User, Briefcase, Code, Mail, Star } from 'lucide-react'
import { NavBar } from "@/components/ui/tubelight-navbar"
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Reviews from './components/Reviews'
import Contact from './components/Contact'
import Footer from './components/Footer'
import SmoothScroll from './components/SmoothScroll'

export default function App() {
  const navItems = [
    { name: 'Home', url: '#home', icon: Home },
    { name: 'About', url: '#about', icon: User },
    { name: 'Skills', url: '#skills', icon: Code },
    { name: 'Projects', url: '#projects', icon: Briefcase },
    { name: 'Reviews', url: '#reviews', icon: Star },
    { name: 'Contact', url: '#contact', icon: Mail },
  ]

  return (
    <>
      <SmoothScroll />
      <NavBar items={navItems} />
      <main>
        <section id="home"><Hero /></section>
        <section id="about"><About /></section>
        <section id="skills"><Skills /></section>
        <section id="projects"><Projects /></section>
        <section id="reviews"><Reviews /></section>
        <section id="contact"><Contact /></section>
        <Footer />
      </main>
    </>
  )
}
