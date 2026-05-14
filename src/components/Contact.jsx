import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Github, Linkedin, Code2, Send, CheckCircle } from 'lucide-react'

const contactLinks = [
  { icon: Mail, label: 'Email', value: 'vyshnavimashetti@gmail.com', href: 'mailto:vyshnavimashetti@gmail.com', color: 'from-pink-500 to-rose-500', accent: '#f472b6' },
  { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/vyshnavimashetti', href: 'https://linkedin.com/in/vyshnavimashetti', color: 'from-brand-500 to-cyan-400', accent: '#5668f5' },
  { icon: Github, label: 'GitHub', value: 'github.com/vyshnavimashetti', href: 'https://github.com/vyshnavimashetti', color: 'from-violet-500 to-brand-500', accent: '#a78bfa' },
  { icon: Code2, label: 'LeetCode', value: 'leetcode.com/vyshnavimashetti', href: 'https://leetcode.com/vyshnavimashetti', color: 'from-amber-400 to-orange-500', accent: '#fbbf24' },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email required'
    if (!form.message.trim() || form.message.length < 10) e.message = 'Message must be at least 10 characters'
    return e
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    // In production, connect to a form service like Formspree or EmailJS
    setSent(true)
    setForm({ name: '', email: '', message: '' })
    setErrors({})
    setTimeout(() => setSent(false), 5000)
  }

  return (
    <section id="contact" className="section-padding relative">
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[120px] opacity-5 bg-brand-500" />
      <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full blur-[100px] opacity-5 bg-violet-500" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="text-brand-400 font-mono text-sm uppercase tracking-widest">Contact</span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mt-2">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-[#9090a8] font-body mt-4 max-w-xl mx-auto">
            Have an opportunity or just want to say hi? My inbox is always open.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact links */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="font-display text-xl font-bold text-white mb-6">Find me here</h3>
            {contactLinks.map((link, i) => {
              const Icon = link.icon
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  whileHover={{ x: 6 }}
                  className="flex items-center gap-4 p-4 card-dark rounded-xl group transition-all hover:border-white/10"
                >
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${link.color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                    <Icon size={18} className="text-white" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-[#9090a8] mb-0.5">{link.label}</div>
                    <div className="text-sm font-body text-white">{link.value}</div>
                  </div>
                  <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: link.accent }}>→</div>
                </motion.a>
              )
            })}
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            <h3 className="font-display text-xl font-bold text-white mb-6">Send a message</h3>
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="card-dark rounded-2xl p-10 flex flex-col items-center justify-center text-center gap-4"
              >
                <CheckCircle size={48} className="text-emerald-400" />
                <h4 className="font-display text-lg font-bold text-white">Message sent!</h4>
                <p className="text-[#9090a8] font-body text-sm">Thanks for reaching out. I'll get back to you soon.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="card-dark rounded-2xl p-6 space-y-5">
                {[
                  { id: 'name', label: 'Your Name', type: 'text', placeholder: 'John Doe' },
                  { id: 'email', label: 'Email Address', type: 'email', placeholder: 'john@example.com' },
                ].map(({ id, label, type, placeholder }) => (
                  <div key={id}>
                    <label className="block text-xs font-mono text-[#9090a8] mb-2 uppercase tracking-wider">{label}</label>
                    <input
                      type={type}
                      placeholder={placeholder}
                      value={form[id]}
                      onChange={e => setForm(f => ({ ...f, [id]: e.target.value }))}
                      className={`w-full bg-white/5 border rounded-xl px-4 py-3 text-sm font-body text-white placeholder-[#9090a8]/50 outline-none focus:border-brand-500/50 focus:bg-brand-500/5 transition-all ${errors[id] ? 'border-red-500/50' : 'border-white/8'}`}
                    />
                    {errors[id] && <p className="text-red-400 text-xs mt-1 font-mono">{errors[id]}</p>}
                  </div>
                ))}
                <div>
                  <label className="block text-xs font-mono text-[#9090a8] mb-2 uppercase tracking-wider">Message</label>
                  <textarea
                    rows={5}
                    placeholder="Tell me about your project or opportunity..."
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    className={`w-full bg-white/5 border rounded-xl px-4 py-3 text-sm font-body text-white placeholder-[#9090a8]/50 outline-none focus:border-brand-500/50 focus:bg-brand-500/5 transition-all resize-none ${errors.message ? 'border-red-500/50' : 'border-white/8'}`}
                  />
                  {errors.message && <p className="text-red-400 text-xs mt-1 font-mono">{errors.message}</p>}
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-brand-500 to-violet-500 text-white font-medium font-body text-sm hover:shadow-lg hover:shadow-brand-500/25 transition-shadow"
                >
                  <Send size={16} /> Send Message
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
