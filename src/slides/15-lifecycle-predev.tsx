import { Slide } from '@/components/Slide'
import { FlowDiagram, type FlowNode } from '@/components/diagrams/FlowDiagram'
import { CodeBlock } from '@/components/ui/CodeBlock'
import { Mic, FileText, ListChecks } from 'lucide-react'
import type { SlideMetadata } from '@/types/slide'

export const metadata: SlideMetadata = {
  id: '15',
  module: 'Development Lifecycle',
  title: 'Pre-Dev: /meeting-process',
}

export default function LifecyclePredevSlide() {
  const nodes: FlowNode[] = [
    { id: '1', label: 'Fathom', icon: Mic, color: 'cyan', description: 'Transcripción' },
    { id: '2', label: 'PRD', icon: FileText, color: 'yellow', description: 'Agente genera' },
    { id: '3', label: 'Jira', icon: ListChecks, color: 'blue', description: 'Tickets creados' },
  ]

  return (
    <Slide module={metadata.module} title={metadata.title}>
      <div className="flex flex-col items-center gap-8">
        <FlowDiagram
          nodes={nodes}
          connections={[
            { from: '1', to: '2' },
            { from: '2', to: '3' },
          ]}
        />

        <CodeBlock code="/meeting-process 'Carga Masiva de Tracking'" />

        <div className="max-w-2xl text-center text-text-muted">
          <p>
            El agente lee la transcripción, extrae requisitos, genera el PRD,
            y crea los tickets en Jira con la estructura correcta.
          </p>
          <p className="mt-2 text-sm">
            De reunión a backlog priorizado en minutos, no días.
          </p>
        </div>
      </div>
    </Slide>
  )
}
