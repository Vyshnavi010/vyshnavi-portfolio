import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Code2 } from 'lucide-react'
import { navLinks } from '../data/portfolioData'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
      const sections = navLinks.map(l => l.href.replace('#', ''))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(sections[i])
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href) => {
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0a0a0f]/90 backdrop-blur-xl border-b border-white/5 shadow-2xl shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.button
          onClick={() => handleNav('#home')}
          className="flex items-center gap-2 group"
          whileHover={{ scale: 1.03 }}
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-violet-500 flex items-center justify-center">
            <Code2 size={16} className="text-white" />
          </div>
          <span className="font-display font-bold text-lg text-white">
            VM<span className="text-brand-400">.</span>
          </span>
        </motion.button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const id = link.href.replace('#', '')
            const isActive = active === id
            return (
              <button
                key={link.label}
                onClick={() => handleNav(link.href)}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 font-body ${
                  isActive ? 'text-white' : 'text-[#9090a8] hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-white/8 rounded-lg border border-white/10"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </button>
            )
          })}
          <a
            href="/resume.pdf"
            download
            className="ml-4 px-5 py-2 rounded-lg bg-gradient-to-r from-brand-500 to-violet-500 text-white text-sm font-medium font-body hover:opacity-90 transition-opacity"
          >
            Resume
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2 rounded-lg hover:bg-white/5"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scaleY: 0.95 }}
            animate={{ opacity: 1, y: 0, scaleY: 1 }}
            exit={{ opacity: 0, y: -10, scaleY: 0.95 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[#0f0f1a]/95 backdrop-blur-xl border-b border-white/5 px-6 py-4 flex flex-col gap-2"
          >
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNav(link.href)}
                className="text-left py-3 px-4 rounded-lg text-[#9090a8] hover:text-white hover:bg-white/5 transition-all font-body text-sm"
              >
                {link.label}
              </button>
            ))}
            <a
              href="/resume.pdf"
              download
              className="mt-2 py-3 px-4 rounded-lg bg-gradient-to-r from-brand-500 to-violet-500 text-white text-sm font-medium text-center"
            >
              Download Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
