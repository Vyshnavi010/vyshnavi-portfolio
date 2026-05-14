import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { skillCategories } from '../data/portfolioData'

const ProgressBar = ({ level, color, inView }) => (
  <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
    <motion.div
      initial={{ width: 0 }}
      animate={inView ? { width: `${level}%` } : { width: 0 }}
      transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
      className={`h-full rounded-full bg-gradient-to-r ${color} relative`}
    >
      <span className="absolute inset-0 shimmer rounded-full"/>
    </motion.div>
  </div>
)

const SkillCard = ({ category, i }) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: i * 0.1, duration: 0.5 }}
      whileHover={{ y: -4 }}
      className="card-dark rounded-2xl p-6 group relative overflow-hidden"
      style={{
        boxShadow: inView ? `0 0 40px ${category.glowColor}` : 'none',
        transition: 'box-shadow 0.5s ease'
      }}
    >
      {/* Top gradient bar */}
      <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${category.color}`}/>

      <div className="flex items-center gap-3 mb-6">
        <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center`}>
          <span className="text-sm">{'🔷'}</span>
        </div>
        <h3 className={`font-display font-bold text-white text-lg`}>{category.title}</h3>
      </div>

      <div className="space-y-5">
        {category.skills.map((skill, j) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, x: -10 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: i * 0.1 + j * 0.08 + 0.2 }}
          >
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center gap-2">
                <span className="text-base">{skill.icon}</span>
                <span className="text-[#c0c0d0] text-sm font-body font-medium">{skill.name}</span>
              </div>
              <motion.span
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: i * 0.1 + j * 0.08 + 0.6 }}
                className={`text-xs font-mono bg-gradient-to-r ${category.color} bg-clip-text`}
                style={{ WebkitTextFillColor: 'transparent' }}
              >
                {skill.level}%
              </motion.span>
            </div>
            <ProgressBar level={skill.level} color={category.color} inView={inView} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" className="section-padding relative">
      {/* Background accent */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-[100px] bg-violet-500"/>
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-[100px] bg-cyan-500"/>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="text-brand-400 font-mono text-sm uppercase tracking-widest">Skills</span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mt-2">
            My <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="text-[#9090a8] font-body mt-4 max-w-xl mx-auto">
            Technologies and tools I've worked with — constantly expanding my toolkit.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((cat, i) => (
            <SkillCard key={cat.title} category={cat} i={i} />
          ))}
        </div>

        {/* Tech badge cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-[#9090a8] text-sm font-mono mb-4">Also familiar with</p>
          <div className="flex flex-wrap justify-center gap-2">
            {['Node.js', 'Python', 'MySQL', 'MongoDB', 'REST APIs', 'OOP', 'Data Structures', 'Algorithms'].map((t) => (
              <span key={t} className="px-3 py-1.5 rounded-full text-xs font-mono text-[#9090a8] border border-white/8 bg-white/3 hover:border-brand-500/30 hover:text-brand-400 transition-colors cursor-default">
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
