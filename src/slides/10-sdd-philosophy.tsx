import { Slide } from '@/components/Slide'
import { FlowDiagram, type FlowNode } from '@/components/diagrams/FlowDiagram'
import { FileText, Lightbulb, Code, CheckCircle } from 'lucide-react'
import type { SlideMetadata } from '@/types/slide'

export const metadata: SlideMetadata = {
  id: '10',
  module: 'La Solución',
  title: 'SDD: Spec-Driven Development',
}

export default function SddPhilosophySlide() {
  const nodes: FlowNode[] = [
    { id: '1', label: 'Proposal', icon: Lightbulb, color: 'yellow' },
    { id: '2', label: 'Spec', icon: FileText, color: 'cyan' },
    { id: '3', label: 'Design', icon: FileText, color: 'blue' },
    { id: '4', label: 'Tasks', icon: FileText, color: 'magenta' },
    { id: '5', label: 'Code', icon: Code, color: 'green' },
    { id: '6', label: 'Verify', icon: CheckCircle, color: 'green' },
  ]

  return (
    <Slide module={metadata.module} title={metadata.title}>
      <div className="flex flex-col items-center gap-10">
        <FlowDiagram
          nodes={nodes}
          connections={[
            { from: '1', to: '2' },
            { from: '2', to: '3' },
            { from: '3', to: '4' },
            { from: '4', to: '5' },
            { from: '5', to: '6' },
          ]}
        />

        <div className="max-w-2xl text-center">
          <p className="text-lg text-text">
            <span className="text-accent-cyan font-semibold">Pensar antes de codear.</span>{' '}
            Cada fase genera artefactos que guían la siguiente.
          </p>
          <p className="mt-4 text-text-muted">
            El código es el último paso, no el primero.
            Los specs son el contrato entre el humano y el agente.
          </p>
        </div>
      </div>
    </Slide>
  )
}
