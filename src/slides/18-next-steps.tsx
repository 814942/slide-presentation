import { Slide } from '@/components/Slide'
import { motion } from 'framer-motion'
import { Calendar, Play, MessageCircleQuestion } from 'lucide-react'
import type { SlideMetadata } from '@/types/slide'

export const metadata: SlideMetadata = {
  id: '18',
  module: 'Cierre',
  title: 'Next Steps',
}

export default function NextStepsSlide() {
  const items = [
    {
      icon: Play,
      title: 'Demo en vivo',
      desc: 'POC: Kanban board en .NET (stack desconocido)',
      color: 'green',
    },
    {
      icon: Calendar,
      title: 'Timeline',
      desc: 'Semana 1: POC completo + métricas',
      color: 'cyan',
    },
    {
      icon: MessageCircleQuestion,
      title: 'Q&A',
      desc: 'Preguntas, dudas, feedback',
      color: 'yellow',
    },
  ]

  return (
    <Slide module={metadata.module} title={metadata.title}>
      <div className="flex flex-col items-center gap-8">
        <div className="grid gap-6 md:grid-cols-3">
          {items.map((item, index) => {
            const colorClasses = {
              green: 'border-accent-green/30 text-accent-green',
              cyan: 'border-accent-cyan/30 text-accent-cyan',
              yellow: 'border-accent-yellow/30 text-accent-yellow',
            }[item.color]

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                className={`flex flex-col items-center rounded-xl border-2 bg-card p-6 text-center ${colorClasses}`}
              >
                <item.icon size={40} />
                <h3 className="mt-4 text-xl font-semibold text-text">{item.title}</h3>
                <p className="mt-2 text-text-muted">{item.desc}</p>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8 text-center"
        >
          <p className="text-2xl font-bold text-gradient">
            ¿Preguntas?
          </p>
          <p className="mt-2 text-text-muted">
            pablo.garay.dev@gmail.com
          </p>
        </motion.div>
      </div>
    </Slide>
  )
}
