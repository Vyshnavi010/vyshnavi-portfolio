import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white animated-gradient">
      <AnimatePresence>
        {loading && <Loader key="loader" />}
      </AnimatePresence>

      {!loading && (
        <>
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Certifications />
            <Achievements />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </div>
  )
}
