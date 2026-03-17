import { motion } from 'framer-motion'
import { 
  AlertTriangle, 
  MessageSquare, 
  Layers, 
  Lightbulb, 
  Workflow,
  Flag
} from 'lucide-react'
import type { SlideMetadata } from '@/types/slide'

export const metadata: SlideMetadata = {
  id: '01',
  module: 'Introducción',
  title: 'Agenda',
}

const sections = [
  {
    icon: AlertTriangle,
    title: 'El Problema',
    slides: '02-04',
    description: 'Context Window, Attention Decay, Compactación',
    color: 'accent-red',
  },
  {
    icon: MessageSquare,
    title: 'Chat vs Agente',
    slides: '05-06',
    description: 'La diferencia fundamental y las herramientas',
    color: 'accent-cyan',
  },
  {
    icon: Layers,
    title: 'Evolución',
    slides: '07-08',
    description: 'Skills, Sub-agentes y el God Agent Problem',
    color: 'accent-yellow',
  },
  {
    icon: Lightbulb,
    title: 'La Solución',
    slides: '09-11',
    description: 'Orquestador, SDD y Engram',
    color: 'accent-magenta',
  },
  {
    icon: Workflow,
    title: 'Development Lifecycle',
    slides: '12-17',
    description: 'PRD, Pre-Dev, Dev, Post-Dev',
    color: 'accent-green',
  },
  {
    icon: Flag,
    title: 'Próximos Pasos',
    slides: '18',
    description: 'Timeline y Q&A',
    color: 'accent-blue',
  },
]

export default function AgendaSlide() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center px-16 py-12">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8 text-center"
      >
        <p className="mb-2 text-sm font-medium uppercase tracking-wider text-accent-cyan">
          Introducción
        </p>
        <h1 className="text-4xl font-bold text-text">
          ¿Qué vamos a ver?
        </h1>
      </motion.div>

      {/* Sections Grid */}
      <div className="grid grid-cols-3 gap-4 max-w-5xl">
        {sections.map((section, index) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.1 }}
            className="flex items-start gap-3 rounded-lg border border-border bg-card p-4"
          >
            <div className={`text-${section.color} mt-0.5`}>
              <section.icon size={22} />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-text">{section.title}</h3>
                <span className="text-xs font-mono text-text-muted">{section.slides}</span>
              </div>
              <p className="mt-1 text-xs text-text-muted">{section.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Duration */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-8 text-sm text-text-muted"
      >
        Duración estimada: ~15 minutos
      </motion.p>
    </div>
  )
}
