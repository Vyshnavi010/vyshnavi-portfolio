import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { Github, Linkedin, Code2, Mail, ArrowRight, Download, Sparkles } from 'lucide-react'
import { socialLinks } from '../data/portfolioData'

const SocialIcon = ({ link }) => {
  const iconMap = { github: Github, linkedin: Linkedin, code: Code2, mail: Mail }
  const Icon = iconMap[link.icon] || Code2
  return (
    <motion.a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -4, scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#9090a8] hover:text-white hover:border-brand-500/50 hover:bg-brand-500/10 transition-all duration-200"
    >
      <Icon size={18} />
    </motion.a>
  )
}

const FloatingOrb = ({ className, color }) => (
  <div
    className={`absolute rounded-full blur-[80px] opacity-20 animate-blob ${className}`}
    style={{ background: color }}
  />
)

export default function Hero() {
  const handleContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <FloatingOrb className="w-[500px] h-[500px] -top-40 -left-40 animation-delay-2000" color="#5668f5" />
      <FloatingOrb className="w-[400px] h-[400px] top-1/2 -right-32 animation-delay-4000" color="#a78bfa" />
      <FloatingOrb className="w-[300px] h-[300px] bottom-20 left-1/4 animation-delay-6000" color="#f472b6" />

      <div className="absolute inset-0 opacity-[0.025]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
        backgroundSize: '64px 64px'
      }}/>

      <div className="max-w-6xl mx-auto px-6 py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-500/30 bg-brand-500/10 text-brand-400 text-sm font-mono mb-6"
            >
              <Sparkles size={14} />
              <span>Available for Internships</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping-slow"/>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="font-display text-5xl lg:text-6xl font-bold leading-tight mb-4"
            >
              Hi, I'm{' '}
              <span className="gradient-text block">Vyshnavi</span>
              <span className="text-white">Mashetti</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-xl text-[#9090a8] font-body mb-6 h-8"
            >
              <TypeAnimation
                sequence={[
                  'CSE Student @ SR University', 2000,
                  'Java Developer', 2000,
                  'AI / ML Enthusiast', 2000,
                  'Frontend Developer', 2000,
                  'Problem Solver', 2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-brand-400 font-medium"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-[#9090a8] font-body leading-relaxed mb-8 max-w-lg"
            >
              Passionate Computer Science undergraduate skilled in Java, SQL, Web Development,
              and Artificial Intelligence. Building impactful software and AI-driven applications.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <motion.button
                onClick={handleContact}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-brand-500 to-violet-500 text-white font-medium font-body text-sm hover:shadow-lg hover:shadow-brand-500/25 transition-shadow"
              >
                Contact Me <ArrowRight size={16} />
              </motion.button>
              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-7 py-3.5 rounded-xl border border-white/10 bg-white/5 text-white font-medium font-body text-sm hover:border-brand-500/50 hover:bg-brand-500/10 transition-all"
              >
                <Download size={16} /> Download Resume
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="flex items-center gap-3"
            >
              <span className="text-[#9090a8] text-xs font-mono uppercase tracking-widest">Find me on</span>
              <div className="flex gap-2">
                {socialLinks.map((link) => (
                  <SocialIcon key={link.label} link={link} />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right — Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
            className="hidden lg:flex justify-center items-center"
            style={{ animation: 'float 6s ease-in-out infinite' }}
          >
            <div className="relative w-[340px] h-[340px]">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-500 to-violet-500 blur-2xl opacity-25"/>
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-500 via-violet-500 to-pink-500 p-[3px]">
                <div className="w-full h-full rounded-full bg-[#0a0a0f]"/>
              </div>
              <img
                src="/profile.jpg"
                alt="Vyshnavi Mashetti"
                className="absolute inset-[3px] w-[calc(100%-6px)] h-[calc(100%-6px)] rounded-full object-cover object-top"
              />
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-[#13131f] border border-white/10 text-xs font-mono text-brand-400 whitespace-nowrap shadow-xl">
                ✦ Open to Internships
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#9090a8]/50"
      >
        <span className="text-xs font-mono">scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-[#9090a8]/30 to-transparent"/>
      </motion.div>
    </section>
  )
}
