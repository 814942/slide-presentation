import { Slide } from '@/components/Slide'
import { ComparisonCard } from '@/components/diagrams/ComparisonCard'
import type { SlideMetadata } from '@/types/slide'

export const metadata: SlideMetadata = {
  id: '13',
  module: 'Development Lifecycle',
  title: 'El flujo actual: manual y fragmentado',
}

export default function LifecycleProblemSlide() {
  return (
    <Slide module={metadata.module} title={metadata.title}>
      <div className="w-full max-w-4xl">
        <ComparisonCard
          before={{
            title: 'Hoy',
            items: [
              'Reuniones sin accionables claros',
              'Specs en la cabeza del dev',
              'PRDs desactualizados o inexistentes',
              'Contexto se pierde entre sesiones',
              'Tickets creados manualmente',
            ],
          }}
          after={{
            title: 'Con automatización',
            items: [
              'Transcripción → PRD → Jira automático',
              'Specs como contrato verificable',
              'Documentación viva y actualizada',
              'Memoria persistente (Engram)',
              'Integración continua de contexto',
            ],
          }}
        />
      </div>
    </Slide>
  )
}
