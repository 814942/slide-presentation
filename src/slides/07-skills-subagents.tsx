import { Slide } from '@/components/Slide'
import { motion } from 'framer-motion'
import { FileCode, Puzzle } from 'lucide-react'
import type { SlideMetadata } from '@/types/slide'

export const metadata: SlideMetadata = {
  id: '07',
  module: 'Evolución',
  title: 'Modularización del contexto',
}

export default function SkillsSubagentsSlide() {
  const skills = [
    { name: 'go-testing', desc: 'Patrones de testing en Go' },
    { name: 'react-19', desc: 'Nuevas APIs de React 19' },
    { name: 'sdd-apply', desc: 'Implementar código SDD' },
    { name: 'prd-creator', desc: 'Crear documentos PRD' },
  ]

  return (
    <Slide module={metadata.module} title={metadata.title}>
      <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-16">
        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col items-center gap-4"
        >
          <div className="flex items-center gap-2 text-accent-cyan">
            <Puzzle size={24} />
            <span className="font-semibold">Skills</span>
          </div>
          <p className="max-w-xs text-center text-sm text-text-muted">
            Instrucciones especializadas que se cargan bajo demanda
          </p>
          <div className="grid grid-cols-2 gap-2">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="rounded-lg border border-accent-cyan/30 bg-card px-3 py-2"
              >
                <div className="font-mono text-sm text-accent-cyan">{skill.name}</div>
                <div className="text-xs text-text-muted">{skill.desc}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Arrow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-4xl text-text-muted"
        >
          →
        </motion.div>

        {/* Subagents */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col items-center gap-4"
        >
          <div className="flex items-center gap-2 text-accent-magenta">
            <FileCode size={24} />
            <span className="font-semibold">Subagentes</span>
          </div>
          <p className="max-w-xs text-center text-sm text-text-muted">
            Agentes especializados con contexto aislado
          </p>
          <div className="space-y-2">
            {['sdd-explore', 'sdd-propose', 'sdd-apply', 'sdd-verify'].map((agent, index) => (
              <motion.div
                key={agent}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                className="flex items-center gap-2 rounded-lg border border-accent-magenta/30 bg-card px-4 py-2"
              >
                <span className="h-2 w-2 rounded-full bg-accent-magenta" />
                <span className="font-mono text-sm text-accent-magenta">{agent}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </Slide>
  )
}
