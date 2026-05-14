import { motion } from 'framer-motion'

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] bg-[#0a0a0f] flex flex-col items-center justify-center gap-6"
    >
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-500 to-violet-500 flex items-center justify-center"
      >
        <span className="text-white font-display font-bold text-2xl">VM</span>
      </motion.div>

      <div className="flex gap-2">
        {[0, 1, 2].map(i => (
          <motion.div
            key={i}
            className="w-2 h-2 rounded-full bg-brand-400"
            animate={{ y: [0, -10, 0], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.15 }}
          />
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-[#9090a8] font-mono text-xs"
      >
        Loading portfolio...
      </motion.p>
    </motion.div>
  )
}
