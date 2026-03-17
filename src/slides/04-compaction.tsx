import { Slide } from '@/components/Slide'
import { motion } from 'framer-motion'
import { Scissors, AlertCircle } from 'lucide-react'
import type { SlideMetadata } from '@/types/slide'

export const metadata: SlideMetadata = {
  id: '04',
  module: 'El Problema',
  title: 'La amnesia forzada',
}

export default function CompactionSlide() {
  return (
    <Slide module={metadata.module} title={metadata.title}>
      <div className="flex flex-col items-center gap-8">
        {/* Compaction visualization */}
        <div className="flex items-center gap-6">
          {/* Before: Full context */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-sm text-text-muted">Antes</span>
            <div className="h-40 w-32 rounded-lg border-2 border-accent-cyan bg-accent-cyan/10">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="mx-2 my-1 h-3 rounded bg-accent-cyan/30"
                  style={{ width: `${70 + Math.random() * 20}%` }}
                />
              ))}
            </div>
            <span className="font-mono text-xs text-text-muted">~180K tokens</span>
          </motion.div>

          {/* Scissors animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.3 }}
            className="text-accent-red"
          >
            <Scissors size={40} />
          </motion.div>

          {/* After: Compacted context */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-sm text-text-muted">Después</span>
            <div className="h-40 w-32 rounded-lg border-2 border-accent-yellow bg-accent-yellow/10">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="mx-2 my-1 h-3 rounded bg-accent-yellow/30"
                  style={{ width: `${60 + Math.random() * 30}%` }}
                />
              ))}
              <div className="mx-2 my-4 text-center text-xs text-accent-yellow">
                Resumen
              </div>
            </div>
            <span className="font-mono text-xs text-text-muted">~30K tokens</span>
          </motion.div>
        </div>

        {/* Warning */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.4 }}
          className="flex max-w-2xl items-start gap-3 rounded-xl border border-accent-red/30 bg-accent-red/5 p-4"
        >
          <AlertCircle className="mt-0.5 flex-shrink-0 text-accent-red" size={24} />
          <div>
            <p className="font-semibold text-accent-red">El agente pierde contexto crítico</p>
            <p className="mt-1 text-sm text-text-muted">
              Decisiones de arquitectura, convenciones del proyecto, bugs ya resueltos...
              todo se olvida cuando el contexto se compacta.
            </p>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.4 }}
          className="text-center text-text-muted"
        >
          Sin memoria externa, cada sesión empieza casi de cero.
        </motion.p>
      </div>
    </Slide>
  )
}
