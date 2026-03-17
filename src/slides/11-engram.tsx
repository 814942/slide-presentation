import { Slide } from '@/components/Slide'
import { motion } from 'framer-motion'
import { Database, Search, Save, Zap } from 'lucide-react'
import type { SlideMetadata } from '@/types/slide'

export const metadata: SlideMetadata = {
  id: '11',
  module: 'La Solución',
  title: 'Engram: Memoria señal, no ruido',
}

export default function EngramSlide() {
  const features = [
    { icon: Save, title: 'Guardar', desc: 'Decisiones, bugs, patrones' },
    { icon: Search, title: 'Buscar', desc: 'Contexto de sesiones pasadas' },
    { icon: Zap, title: 'Recuperar', desc: 'Post-compactación' },
  ]

  return (
    <Slide module={metadata.module} title={metadata.title}>
      <div className="flex flex-col items-center gap-8">
        {/* Engram logo/icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex h-24 w-24 items-center justify-center rounded-2xl border-2 border-accent-magenta bg-accent-magenta/10"
        >
          <Database className="text-accent-magenta" size={48} />
        </motion.div>

        {/* Features */}
        <div className="flex gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.15 }}
              className="flex flex-col items-center gap-2 rounded-xl border border-card-hover bg-card p-4"
            >
              <feature.icon className="text-accent-magenta" size={28} />
              <span className="font-semibold text-text">{feature.title}</span>
              <span className="text-sm text-text-muted">{feature.desc}</span>
            </motion.div>
          ))}
        </div>

        {/* Key insight */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="max-w-2xl rounded-xl border border-accent-magenta/30 bg-accent-magenta/5 p-4 text-center"
        >
          <p className="text-text">
            <span className="font-semibold text-accent-magenta">No todo vale la pena recordar.</span>
          </p>
          <p className="mt-2 text-sm text-text-muted">
            Engram guarda lo importante: decisiones de arquitectura, gotchas, preferencias.
            No el historial completo de chat.
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="text-sm text-text-muted"
        >
          SQLite + FTS5 local. Tu memoria, tu control.
        </motion.p>
      </div>
    </Slide>
  )
}
