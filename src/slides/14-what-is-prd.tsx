import { Slide } from '@/components/Slide'
import { motion } from 'framer-motion'
import { FileText, Users, Code, CheckSquare } from 'lucide-react'
import type { SlideMetadata } from '@/types/slide'

export const metadata: SlideMetadata = {
  id: '14',
  module: 'Development Lifecycle',
  title: '¿Qué es un PRD?',
}

const sections = [
  {
    icon: FileText,
    title: 'Product Requirements Document',
    description: 'Un documento que describe QUÉ se va a construir y POR QUÉ, antes de escribir código.',
    color: 'accent-cyan',
  },
  {
    icon: Users,
    title: 'El contrato entre todos',
    description: 'Producto, diseño y desarrollo alineados desde el inicio. Sin sorpresas.',
    color: 'accent-green',
  },
  {
    icon: CheckSquare,
    title: 'Criterios de éxito claros',
    description: 'Define cómo sabemos que está "listo". Métricas, user stories, acceptance criteria.',
    color: 'accent-yellow',
  },
  {
    icon: Code,
    title: 'Guía para el desarrollo',
    description: 'El dev sabe qué construir sin adivinar. El agente tiene contexto completo.',
    color: 'accent-magenta',
  },
]

export default function WhatIsPRDSlide() {
  return (
    <Slide module={metadata.module} title={metadata.title}>
      <div className="flex flex-col items-center gap-8 w-full max-w-4xl">
        {/* Simple definition */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <p className="text-xl text-text-muted">
            En simple: es el <span className="text-accent-cyan font-semibold">"plano"</span> antes de construir la casa.
          </p>
        </motion.div>

        {/* Grid of what it contains */}
        <div className="grid grid-cols-2 gap-4 w-full">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.15 }}
              className="flex items-start gap-4 rounded-lg border border-border bg-card p-4"
            >
              <div className={`text-${section.color} mt-0.5`}>
                <section.icon size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-text">{section.title}</h3>
                <p className="mt-1 text-sm text-text-muted">{section.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* The key insight */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="rounded-lg border border-accent-green/30 bg-accent-green/10 p-4 text-center"
        >
          <p className="text-text">
            <span className="font-semibold text-accent-green">Sin PRD</span>: el agente adivina, el dev interpreta, producto se sorprende.
          </p>
          <p className="mt-1 text-text">
            <span className="font-semibold text-accent-green">Con PRD</span>: todos ven lo mismo, desde el día 1.
          </p>
        </motion.div>
      </div>
    </Slide>
  )
}
