import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { achievements } from '../data/portfolioData'

export default function Achievements() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="achievements" className="section-padding relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full blur-[120px] opacity-5 bg-emerald-500" />

      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="text-brand-400 font-mono text-sm uppercase tracking-widest">Highlights</span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mt-2">
            My <span className="gradient-text">Achievements</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          {achievements.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.02, x: 4 }}
              className="card-dark rounded-xl p-5 flex items-center gap-4 group cursor-default"
            >
              <span className="text-3xl group-hover:scale-110 transition-transform shrink-0">{item.icon}</span>
              <p className="text-[#c0c0d0] font-body text-sm leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
