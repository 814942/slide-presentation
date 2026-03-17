import type { LucideIcon } from 'lucide-react'
import { motion } from 'framer-motion'

type AccentColor = 'blue' | 'cyan' | 'green' | 'yellow' | 'magenta' | 'red' | 'orange'

const colorMap: Record<AccentColor, { border: string; icon: string; title: string }> = {
  blue: {
    border: 'border-accent-blue/30',
    icon: 'text-accent-blue',
    title: 'text-accent-blue',
  },
  cyan: {
    border: 'border-accent-cyan/30',
    icon: 'text-accent-cyan',
    title: 'text-accent-cyan',
  },
  green: {
    border: 'border-accent-green/30',
    icon: 'text-accent-green',
    title: 'text-accent-green',
  },
  yellow: {
    border: 'border-accent-yellow/30',
    icon: 'text-accent-yellow',
    title: 'text-accent-yellow',
  },
  magenta: {
    border: 'border-accent-magenta/30',
    icon: 'text-accent-magenta',
    title: 'text-accent-magenta',
  },
  red: {
    border: 'border-accent-red/30',
    icon: 'text-accent-red',
    title: 'text-accent-red',
  },
  orange: {
    border: 'border-accent-orange/30',
    icon: 'text-accent-orange',
    title: 'text-accent-orange',
  },
}

interface FeatureBoxProps {
  icon: LucideIcon
  title: string
  description: string
  color?: AccentColor
  delay?: number
}

export function FeatureBox({
  icon: Icon,
  title,
  description,
  color = 'blue',
  delay = 0,
}: FeatureBoxProps) {
  const colors = colorMap[color]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.3 }}
      className={`flex flex-col items-center rounded-xl border-2 bg-card p-6 text-center ${colors.border}`}
    >
      <Icon size={36} className={colors.icon} />
      <h3 className={`mt-3 text-lg font-semibold ${colors.title}`}>{title}</h3>
      <p className="mt-2 text-sm text-text-muted">{description}</p>
    </motion.div>
  )
}
