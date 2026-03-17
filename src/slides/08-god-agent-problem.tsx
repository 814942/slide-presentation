import { Slide } from '@/components/Slide'
import { motion } from 'framer-motion'
import { AlertTriangle, Brain, Zap } from 'lucide-react'
import type { SlideMetadata } from '@/types/slide'

export const metadata: SlideMetadata = {
  id: '08',
  module: 'Evolución',
  title: 'Por qué un agente monolítico degrada',
}

export default function GodAgentProblemSlide() {
  const problems = [
    {
      icon: Brain,
      title: 'Sobrecarga cognitiva',
      desc: 'Un solo agente intentando saber de todo = sabe poco de todo',
    },
    {
      icon: Zap,
      title: 'Contexto contaminado',
      desc: 'Código de frontend mezclado con scripts de CI/CD y queries SQL',
    },
    {
      icon: AlertTriangle,
      title: 'Compactación agresiva',
      desc: 'Pierde las decisiones de diseño cuando se llena el contexto',
    },
  ]

  return (
    <Slide module={metadata.module} title={metadata.title}>
      <div className="flex flex-col items-center gap-8">
        {/* God Agent visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative"
        >
          <div className="h-32 w-32 rounded-full border-4 border-accent-red bg-accent-red/10 flex items-center justify-center">
            <span className="text-4xl">🤖</span>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
            className="absolute -right-2 -top-2 rounded-full bg-accent-red px-2 py-1 text-xs font-bold text-bg"
          >
            OVERLOAD
          </motion.div>
        </motion.div>

        {/* Problems */}
        <div className="grid gap-4 md:grid-cols-3">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.15 }}
              className="flex flex-col items-center rounded-xl border border-accent-red/30 bg-card p-4 text-center"
            >
              <problem.icon className="text-accent-red" size={28} />
              <h3 className="mt-2 font-semibold text-text">{problem.title}</h3>
              <p className="mt-1 text-sm text-text-muted">{problem.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-center text-lg text-accent-yellow"
        >
          La solución no es un agente más grande, sino agentes más enfocados.
        </motion.p>
      </div>
    </Slide>
  )
}
