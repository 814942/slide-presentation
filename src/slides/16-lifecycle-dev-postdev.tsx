import { Slide } from '@/components/Slide'
import { CodeBlock } from '@/components/ui/CodeBlock'
import { motion } from 'framer-motion'
import { GitBranch, Code, GitPullRequest } from 'lucide-react'
import type { SlideMetadata } from '@/types/slide'

export const metadata: SlideMetadata = {
  id: '16',
  module: 'Development Lifecycle',
  title: 'Dev + Post-Dev: SDD + PR',
}

export default function LifecycleDevPostdevSlide() {
  const phases = [
    {
      icon: GitBranch,
      title: 'Branch',
      command: '/sdd-new "Carga Masiva"',
      desc: 'Crea branch y estructura SDD',
    },
    {
      icon: Code,
      title: 'Implement',
      command: '/sdd-apply',
      desc: 'Implementa tasks por fases',
    },
    {
      icon: GitPullRequest,
      title: 'PR',
      command: '/sdd-pr',
      desc: 'Genera PR con resumen',
    },
  ]

  return (
    <Slide module={metadata.module} title={metadata.title}>
      <div className="flex flex-col gap-6">
        {phases.map((phase, index) => (
          <motion.div
            key={phase.title}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
            className="flex items-center gap-6"
          >
            <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl border border-accent-cyan/30 bg-card">
              <phase.icon className="text-accent-cyan" size={24} />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-4">
                <span className="font-semibold text-text">{phase.title}</span>
                <div className="flex-1">
                  <CodeBlock code={phase.command} />
                </div>
              </div>
              <p className="mt-1 text-sm text-text-muted">{phase.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Slide>
  )
}
