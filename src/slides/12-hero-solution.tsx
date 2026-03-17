import { motion } from 'framer-motion'
import { Workflow, Brain, FileText, Sparkles } from 'lucide-react'
import type { SlideMetadata } from '@/types/slide'

export const metadata: SlideMetadata = {
  id: '12',
  module: 'La Solución',
  title: 'Nuestra Propuesta',
}

const solutions = [
  {
    icon: Workflow,
    title: 'Orquestador + Sub-agentes',
    description: 'Divide y vencerás. Cada fase con contexto fresco y especializado.',
    color: 'accent-cyan',
  },
  {
    icon: Brain,
    title: 'Engram: Memoria Señal',
    description: 'Memoria persistente entre sesiones. Guarda lo importante, no todo.',
    color: 'accent-magenta',
  },
  {
    icon: FileText,
    title: 'SDD: Specs como Contrato',
    description: 'Spec-Driven Development. Primero el contrato, después el código.',
    color: 'accent-green',
  },
  {
    icon: Sparkles,
    title: 'Automatización End-to-End',
    description: 'De la reunión al PR: un flujo continuo sin pérdida de contexto.',
    color: 'accent-yellow',
  },
]

export default function HeroSolutionSlide() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center px-16 py-12">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-4 text-center"
      >
        <p className="mb-2 text-sm font-medium uppercase tracking-wider text-accent-green">
          Development Lifecycle Automation
        </p>
        <h1 className="text-5xl font-bold text-text">
          Nuestra Solución
        </h1>
        <p className="mt-4 text-xl text-text-muted">
          Un stack de herramientas que trabajan juntas
        </p>
      </motion.div>

      {/* Divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="my-8 h-px w-32 bg-accent-green"
      />

      {/* Solutions Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mb-8"
      >
        <p className="mb-6 text-center text-lg text-text-muted">
          Los componentes clave:
        </p>
        <div className="grid grid-cols-2 gap-6 max-w-4xl">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + index * 0.15 }}
              className="flex items-start gap-4 rounded-lg border border-accent-green/30 bg-card p-4"
            >
              <div className={`text-${solution.color}`}>
                <solution.icon size={28} />
              </div>
              <div>
                <h3 className="font-semibold text-text">{solution.title}</h3>
                <p className="mt-1 text-sm text-text-muted">{solution.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Flow preview */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        className="flex items-center gap-3 text-sm text-text-muted"
      >
        <span className="rounded bg-accent-cyan/20 px-2 py-1 text-accent-cyan">Reunión</span>
        <span>→</span>
        <span className="rounded bg-accent-magenta/20 px-2 py-1 text-accent-magenta">PRD</span>
        <span>→</span>
        <span className="rounded bg-accent-green/20 px-2 py-1 text-accent-green">Specs</span>
        <span>→</span>
        <span className="rounded bg-accent-yellow/20 px-2 py-1 text-accent-yellow">Tasks</span>
        <span>→</span>
        <span className="rounded bg-accent-red/20 px-2 py-1 text-accent-red">PR</span>
      </motion.div>
    </div>
  )
}
