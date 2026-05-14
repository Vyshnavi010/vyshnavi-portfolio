import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'
import { projects } from '../data/portfolioData'

const TechBadge = ({ tech, accent }) => (
  <span
    className="px-2.5 py-1 rounded-md text-xs font-mono border"
    style={{ borderColor: `${accent}30`, color: accent, background: `${accent}10` }}
  >
    {tech}
  </span>
)

const ProjectCard = ({ project, i }) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: i * 0.12, duration: 0.6 }}
      whileHover={{ y: -8 }}
      className="card-dark rounded-2xl overflow-hidden group flex flex-col"
    >
      {/* Project image placeholder */}
      <div className="relative h-48 overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-15`}/>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-7xl opacity-30 group-hover:scale-110 group-hover:opacity-50 transition-all duration-500">
            {project.emoji}
          </span>
        </div>
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `linear-gradient(${project.accent}50 1px, transparent 1px), linear-gradient(90deg, ${project.accent}50 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}/>
        {/* Top gradient bar */}
        <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.color}`}/>
        {/* Floating project number */}
        <div className="absolute top-4 right-4 text-xs font-mono" style={{ color: project.accent }}>
          0{project.id}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-display text-lg font-bold text-white mb-2 group-hover:text-brand-300 transition-colors">
          {project.title}
        </h3>
        <p className="text-[#9090a8] text-sm font-body leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        {/* Features */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.features.map((f) => (
            <span key={f} className="text-xs text-[#9090a8] font-body flex items-center gap-1">
              <span style={{ color: project.accent }}>✦</span> {f}
            </span>
          ))}
        </div>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tech.map((t) => (
            <TechBadge key={t} tech={t} accent={project.accent} />
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex gap-3 mt-auto">
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border border-white/10 text-[#9090a8] hover:text-white hover:border-white/20 text-sm font-body transition-all"
          >
            <Github size={15} /> Code
          </motion.a>
          <motion.a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-white text-sm font-body transition-all"
            style={{ background: `linear-gradient(135deg, ${project.accent}cc, ${project.accent}88)` }}
          >
            <ExternalLink size={15} /> Demo
          </motion.a>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="projects" className="section-padding relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-[120px] opacity-5 bg-brand-500"/>

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="text-brand-400 font-mono text-sm uppercase tracking-widest">Projects</span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mt-2">
            Things I've <span className="gradient-text">Built</span>
          </h2>
          <p className="text-[#9090a8] font-body mt-4 max-w-xl mx-auto">
            A selection of academic and personal projects that showcase my skills and interests.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} i={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-10"
        >
          <a
            href="https://github.com/vyshnavimashetti"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#9090a8] hover:text-brand-400 text-sm font-body transition-colors group"
          >
            <Github size={16} />
            View more on GitHub
            <ExternalLink size={13} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"/>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
