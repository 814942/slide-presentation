import { Slide } from '@/components/Slide'
import { motion } from 'framer-motion'
import { Crown, Users } from 'lucide-react'
import type { SlideMetadata } from '@/types/slide'

export const metadata: SlideMetadata = {
  id: '09',
  module: 'La Solución',
  title: 'Divide y vencerás: El Orquestador',
}

export default function OrchestratorSolutionSlide() {
  const subagents = [
    { name: 'explore', task: 'Investigar' },
    { name: 'propose', task: 'Proponer' },
    { name: 'spec', task: 'Especificar' },
    { name: 'design', task: 'Diseñar' },
    { name: 'apply', task: 'Implementar' },
    { name: 'verify', task: 'Verificar' },
  ]

  return (
    <Slide module={metadata.module} title={metadata.title}>
      <div className="flex flex-col items-center gap-8">
        {/* Orchestrator */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center gap-2"
        >
          <div className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-accent-yellow bg-accent-yellow/10">
            <Crown className="text-accent-yellow" size={36} />
          </div>
          <span className="font-semibold text-accent-yellow">Orchestrator</span>
          <span className="text-xs text-text-muted">Coordina, no ejecuta</span>
        </motion.div>

        {/* Connection lines */}
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 0.3, duration: 0.3 }}
          className="h-8 w-0.5 bg-gradient-to-b from-accent-yellow to-accent-cyan"
        />

        {/* Subagents */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex items-center gap-2"
        >
          <Users className="text-accent-cyan" size={20} />
          <span className="text-sm text-text-muted">Subagentes especializados</span>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3">
          {subagents.map((agent, index) => (
            <motion.div
              key={agent.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + index * 0.08 }}
              className="flex flex-col items-center rounded-lg border border-accent-cyan/30 bg-card px-4 py-3"
            >
              <span className="font-mono text-sm text-accent-cyan">sdd-{agent.name}</span>
              <span className="text-xs text-text-muted">{agent.task}</span>
            </motion.div>
          ))}
        </div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mt-4 flex flex-wrap justify-center gap-4 text-sm"
        >
          <span className="rounded-full bg-accent-green/10 px-3 py-1 text-accent-green">
            ✓ Contexto aislado
          </span>
          <span className="rounded-full bg-accent-green/10 px-3 py-1 text-accent-green">
            ✓ Tareas enfocadas
          </span>
          <span className="rounded-full bg-accent-green/10 px-3 py-1 text-accent-green">
            ✓ Sin contaminación
          </span>
        </motion.div>
      </div>
    </Slide>
  )
}
