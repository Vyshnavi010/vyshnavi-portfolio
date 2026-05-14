import { motion } from 'framer-motion'
import { Github, Linkedin, Code2, Mail, ArrowUp, Heart } from 'lucide-react'

const socials = [
  { icon: Github, href: 'https://github.com/vyshnavimashetti', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/vyshnavimashetti', label: 'LinkedIn' },
  { icon: Code2, href: 'https://leetcode.com/vyshnavimashetti', label: 'LeetCode' },
  { icon: Mail, href: 'mailto:vyshnavimashetti@gmail.com', label: 'Email' },
]

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="border-t border-white/5 bg-[#0a0a0f]">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-violet-500 flex items-center justify-center text-white text-xs font-bold font-display">
              VM
            </div>
            <div>
              <div className="font-display font-bold text-white text-sm">Vyshnavi Mashetti</div>
              <div className="text-[#9090a8] text-xs font-mono">CSE Student · Developer</div>
            </div>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center text-[#9090a8] hover:text-white hover:border-brand-500/40 hover:bg-brand-500/10 transition-all"
              >
                <Icon size={15} />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-[#9090a8] text-xs font-mono text-center flex items-center gap-1.5">
            © {new Date().getFullYear()} Made with <Heart size={11} className="text-pink-400 fill-pink-400" /> by Vyshnavi
          </div>
        </div>
      </div>

      {/* Scroll to top */}
      <motion.button
        onClick={scrollTop}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-violet-500 flex items-center justify-center text-white shadow-lg shadow-brand-500/20 z-40"
        aria-label="Scroll to top"
      >
        <ArrowUp size={16} />
      </motion.button>
    </footer>
  )
}
