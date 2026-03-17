import { Slide } from '@/components/Slide'
import { motion } from 'framer-motion'
import { Box, AlertTriangle } from 'lucide-react'
import type { SlideMetadata } from '@/types/slide'

export const metadata: SlideMetadata = {
  id: '02',
  module: 'El Problema',
  title: 'La pizarra de tamaño fijo',
}

export default function ContextWindowSlide() {
  return (
    <Slide module={metadata.module} title={metadata.title}>
      <div className="flex flex-col items-center gap-8">
        {/* Visual: Context window as a whiteboard */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative"
        >
          {/* The "whiteboard" */}
          <div className="relative h-48 w-96 rounded-xl border-4 border-accent-cyan bg-card p-4">
            <div className="flex items-center gap-2 text-accent-cyan">
              <Box size={24} />
              <span className="font-mono font-bold">Context Window</span>
            </div>
            
            {/* Fill indicator */}
            <motion.div
              initial={{ width: '30%' }}
              animate={{ width: '95%' }}
              transition={{ delay: 0.5, duration: 2, ease: 'easeInOut' }}
              className="absolute bottom-4 left-4 right-4 h-8 rounded bg-gradient-to-r from-accent-green via-accent-yellow to-accent-red"
            />
            
            {/* Labels */}
            <span className="absolute bottom-14 left-4 text-xs text-text-muted">
              Prompt + Code + History
            </span>
          </div>

          {/* Warning when full */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 0.3 }}
            className="mt-4 flex items-center justify-center gap-2 text-accent-yellow"
          >
            <AlertTriangle size={20} />
            <span className="font-medium">Límite: ~200K tokens</span>
          </motion.div>
        </motion.div>

        {/* Key points */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="max-w-2xl space-y-4 text-center text-lg"
        >
          <p className="text-text">
            El LLM tiene una <span className="text-accent-cyan font-semibold">memoria finita</span> por sesión.
          </p>
          <p className="text-text-muted">
            Todo lo que el agente necesita recordar compite por el mismo espacio: 
            tu código, el historial de chat, las instrucciones del sistema.
          </p>
        </motion.div>
      </div>
    </Slide>
  )
}
