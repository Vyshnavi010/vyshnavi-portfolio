import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Star, Folder, Award, Zap, GraduationCap, Brain, Code } from 'lucide-react'
import { stats } from '../data/portfolioData'

const iconMap = { star: Star, folder: Folder, award: Award, zap: Zap }

const StatCard = ({ stat, i }) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
  const Icon = iconMap[stat.icon] || Zap

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: i * 0.1, duration: 0.5 }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="card-dark rounded-2xl p-6 flex flex-col items-center text-center group cursor-default"
    >
      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
        <Icon size={22} className="text-white" />
      </div>
      <div className="font-display text-3xl font-bold text-white mb-1">{stat.value}</div>
      <div className="text-[#9090a8] text-sm font-body">{stat.label}</div>
    </motion.div>
  )
}

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const highlights = [
    { icon: <GraduationCap size={18}/>, text: 'B.Tech CSE @ SR University — CGPA 8.5', color: 'text-brand-400' },
    { icon: <Brain size={18}/>, text: 'Deep interest in AI/ML and Full Stack Development', color: 'text-violet-400' },
    { icon: <Code size={18}/>, text: 'Strong foundation in DSA, Java, SQL', color: 'text-cyan-400' },
  ]

  return (
    <section id="about" className="section-padding relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="text-brand-400 font-mono text-sm uppercase tracking-widest">About</span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mt-2">
            Who I <span className="gradient-text">Am</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="card-dark rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-10 rounded-full bg-gradient-to-b from-brand-500 to-violet-500"/>
                <h3 className="font-display text-xl font-bold text-white">Computer Science Student</h3>
              </div>
              <p className="text-[#9090a8] font-body leading-relaxed mb-6">
                I'm a passionate Computer Science undergraduate at <span className="text-white font-medium">SR University</span>, maintaining a strong CGPA of <span className="text-brand-400 font-semibold">8.5</span>. My journey in tech is driven by curiosity — from building web apps to exploring machine intelligence.
              </p>
              <p className="text-[#9090a8] font-body leading-relaxed mb-8">
                I enjoy solving challenging problems, designing clean interfaces, and crafting software that makes a real difference. Currently seeking opportunities to apply my skills and grow as a developer.
              </p>
              <div className="space-y-4">
                {highlights.map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="flex items-center gap-3 text-sm font-body"
                  >
                    <span className={`${h.color} shrink-0`}>{h.icon}</span>
                    <span className="text-[#c0c0d0]">{h.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="space-y-4"
          >
            {/* Code snippet card */}
            <div className="card-dark rounded-2xl p-6 font-mono text-sm">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500/70"/>
                <div className="w-3 h-3 rounded-full bg-yellow-500/70"/>
                <div className="w-3 h-3 rounded-full bg-emerald-500/70"/>
                <span className="ml-2 text-[#9090a8] text-xs">about.json</span>
              </div>
              <div className="space-y-1.5">
                <div className="text-[#9090a8]">{'{'}</div>
                <div className="pl-4"><span className="text-pink-400">"name"</span><span className="text-white">: </span><span className="text-emerald-400">"Vyshnavi Mashetti"</span><span className="text-white">,</span></div>
                <div className="pl-4"><span className="text-pink-400">"university"</span><span className="text-white">: </span><span className="text-emerald-400">"SR University"</span><span className="text-white">,</span></div>
                <div className="pl-4"><span className="text-pink-400">"cgpa"</span><span className="text-white">: </span><span className="text-amber-400">8.5</span><span className="text-white">,</span></div>
                <div className="pl-4"><span className="text-pink-400">"focus"</span><span className="text-white">: [</span></div>
                <div className="pl-8"><span className="text-emerald-400">"AI/ML"</span><span className="text-white">, </span><span className="text-emerald-400">"Full Stack"</span><span className="text-white">, </span><span className="text-emerald-400">"Java"</span></div>
                <div className="pl-4"><span className="text-white">],</span></div>
                <div className="pl-4"><span className="text-pink-400">"available"</span><span className="text-white">: </span><span className="text-brand-400">true</span></div>
                <div className="text-[#9090a8]">{'}'}</div>
              </div>
            </div>

            {/* Mini info cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Degree', value: 'B.Tech CSE', color: 'text-brand-400' },
                { label: 'Status', value: 'Open to Work', color: 'text-emerald-400' },
                { label: 'Location', value: 'India', color: 'text-violet-400' },
                { label: 'Passion', value: 'AI & Web Dev', color: 'text-pink-400' },
              ].map((item, i) => (
                <div key={i} className="card-dark rounded-xl p-4">
                  <div className="text-[#9090a8] text-xs font-mono mb-1">{item.label}</div>
                  <div className={`font-display font-semibold text-sm ${item.color}`}>{item.value}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} i={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
