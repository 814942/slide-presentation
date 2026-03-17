import { motion } from 'framer-motion'
import { X, Check } from 'lucide-react'

interface ComparisonSide {
  title: string
  items: string[]
}

interface ComparisonCardProps {
  before: ComparisonSide
  after: ComparisonSide
}

export function ComparisonCard({ before, after }: ComparisonCardProps) {
  return (
    <div className="flex flex-col gap-6 sm:flex-row sm:gap-8">
      {/* Before */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="flex-1 rounded-xl border-2 border-accent-red/30 bg-accent-red/5 p-6"
      >
        <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-accent-red">
          <X size={20} />
          {before.title}
        </h3>
        <ul className="space-y-2">
          {before.items.map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 + index * 0.05, duration: 0.2 }}
              className="flex items-start gap-2 text-text-muted"
            >
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent-red/50" />
              {item}
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* After */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.15, duration: 0.3 }}
        className="flex-1 rounded-xl border-2 border-accent-green/30 bg-accent-green/5 p-6"
      >
        <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-accent-green">
          <Check size={20} />
          {after.title}
        </h3>
        <ul className="space-y-2">
          {after.items.map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.25 + index * 0.05, duration: 0.2 }}
              className="flex items-start gap-2 text-text"
            >
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent-green" />
              {item}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  )
}
