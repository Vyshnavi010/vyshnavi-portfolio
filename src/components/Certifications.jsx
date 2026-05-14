import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { certifications } from '../data/portfolioData'

const CertCard = ({ cert, i }) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: i * 0.12, duration: 0.5 }}
      whileHover={{ y: -6 }}
      className="card-dark rounded-2xl p-6 group relative overflow-hidden"
    >
      <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${cert.color}`} />
      <div className="flex items-start gap-4">
        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center text-2xl shrink-0 group-hover:scale-110 transition-transform`}>
          {cert.icon}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-display font-bold text-white text-base mb-1 leading-snug">{cert.title}</h3>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[#9090a8] text-xs font-body">{cert.issuer}</span>
            <span className="w-1 h-1 rounded-full bg-[#9090a8]/40" />
            <span className="text-brand-400 text-xs font-mono">{cert.date}</span>
          </div>
          <p className="text-[#9090a8] text-sm font-body leading-relaxed">{cert.desc}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default function Certifications() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="certifications" className="section-padding relative">
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-[120px] opacity-5 bg-pink-500" />
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="text-brand-400 font-mono text-sm uppercase tracking-widest">Certifications</span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mt-2">
            Credentials & <span className="gradient-text">Internships</span>
          </h2>
          <p className="text-[#9090a8] font-body mt-4 max-w-xl mx-auto">
            Industry programs and certifications that have shaped my technical foundation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, i) => (
            <CertCard key={cert.title} cert={cert} i={i} />
          ))}
        </div>

        {/* Achievements strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-12 card-dark rounded-2xl p-8"
        >
          <h3 className="font-display font-bold text-white text-xl mb-6 text-center">Achievements & Highlights</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: '💻', text: 'Built 4+ academic and personal projects' },
              { icon: '🧩', text: 'Strong DSA foundation with LeetCode practice' },
              { icon: '🤖', text: 'Hands-on AI/ML internship experience' },
              { icon: '📜', text: '4 industry-recognized certifications' },
              { icon: '🌱', text: 'Continuous learner — always upskilling' },
              { icon: '🏆', text: 'Active in technical workshops & programs' },
            ].map((a, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.6 + i * 0.07 }}
                className="flex items-center gap-3 p-3 rounded-xl bg-white/3 border border-white/5"
              >
                <span className="text-xl shrink-0">{a.icon}</span>
                <span className="text-[#c0c0d0] text-sm font-body">{a.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
