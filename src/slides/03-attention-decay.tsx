import { Slide } from '@/components/Slide'
import { motion } from 'framer-motion'
import type { SlideMetadata } from '@/types/slide'

export const metadata: SlideMetadata = {
  id: '03',
  module: 'El Problema',
  title: 'Más contexto ≠ mejor resultado',
}

export default function AttentionDecaySlide() {
  // Attention decay visualization data
  const barData = [
    { position: 'Inicio', attention: 95, color: 'bg-accent-green' },
    { position: 'Medio', attention: 45, color: 'bg-accent-yellow' },
    { position: 'Final', attention: 85, color: 'bg-accent-cyan' },
  ]

  return (
    <Slide module={metadata.module} title={metadata.title}>
      <div className="flex flex-col items-center gap-10">
        {/* U-shaped attention graph */}
        <div className="flex items-end gap-8">
          {barData.map((bar, index) => (
            <motion.div
              key={bar.position}
              initial={{ height: 0 }}
              animate={{ height: `${bar.attention * 2}px` }}
              transition={{ delay: 0.3 + index * 0.2, duration: 0.5, ease: 'easeOut' }}
              className="flex flex-col items-center gap-2"
            >
              <span className="font-mono text-sm text-text-muted">{bar.attention}%</span>
              <div
                className={`w-24 rounded-t-lg ${bar.color}`}
                style={{ height: `${bar.attention * 2}px` }}
              />
              <span className="text-sm text-text-muted">{bar.position}</span>
            </motion.div>
          ))}
        </div>

        {/* Explanation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.4 }}
          className="max-w-2xl space-y-4 text-center"
        >
          <p className="text-xl text-text">
            <span className="text-accent-yellow font-semibold">"Lost in the Middle"</span> effect
          </p>
          <p className="text-text-muted">
            Los LLMs prestan más atención al inicio y final del contexto.
            La información en el medio se pierde o se ignora.
          </p>
          <p className="text-sm text-text-muted italic">
            (Liu et al., 2023 - "Lost in the Middle: How Language Models Use Long Contexts")
          </p>
        </motion.div>
      </div>
    </Slide>
  )
}
