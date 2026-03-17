import { motion } from 'framer-motion'
import { Brain, AlertTriangle, Zap, GitBranch } from 'lucide-react'
import type { SlideMetadata } from '@/types/slide'

export const metadata: SlideMetadata = {
  id: '00',
  module: 'Introducción',
  title: 'Development Lifecycle Automation',
}

const problems = [
  {
    icon: Brain,
    title: 'Context Window Limitado',
    description: 'El LLM tiene memoria finita. Más contexto no significa mejor resultado.',
    color: 'accent-cyan',
  },
  {
    icon: AlertTriangle,
    title: 'God Agent Problem',
    description: 'Un agente monolítico degrada con el tiempo. Necesita modularización.',
    color: 'accent-yellow',
  },
  {
    icon: Zap,
    title: 'Pérdida de Contexto',
    description: 'Entre sesiones, compactaciones y handoffs, el conocimiento se pierde.',
    color: 'accent-red',
  },
  {
    icon: GitBranch,
    title: 'Flujo Manual',
    description: 'De la reunión al código: demasiados pasos manuales, propensos a error.',
    color: 'accent-magenta',
  },
]

export default function HeroSlide() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center px-16 py-12">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-4 text-center"
      >
        <p className="mb-2 text-sm font-medium uppercase tracking-wider text-accent-cyan">
          POC Presentation
        </p>
        <h1 className="text-5xl font-bold text-text">
          Development Lifecycle Automation
        </h1>
        <p className="mt-4 text-xl text-text-muted">
          De la reunión al código, sin perder contexto
        </p>
      </motion.div>

      {/* Divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="my-8 h-px w-32 bg-accent-cyan"
      />

      {/* Problems Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mb-8"
      >
        <p className="mb-6 text-center text-lg text-text-muted">
          Los problemas que vamos a abordar:
        </p>
        <div className="grid grid-cols-2 gap-6 max-w-4xl">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + index * 0.15 }}
              className="flex items-start gap-4 rounded-lg border border-border bg-card p-4"
            >
              <div className={`text-${problem.color}`}>
                <problem.icon size={28} />
              </div>
              <div>
                <h3 className="font-semibold text-text">{problem.title}</h3>
                <p className="mt-1 text-sm text-text-muted">{problem.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Footer */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="text-sm text-text-muted"
      >
        Pablo Garay · Marzo 2026
      </motion.p>
    </div>
  )
}
