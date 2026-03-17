import { Slide } from '@/components/Slide'
import { ComparisonCard } from '@/components/diagrams/ComparisonCard'
import type { SlideMetadata } from '@/types/slide'

export const metadata: SlideMetadata = {
  id: '05',
  module: 'Chat vs Agente',
  title: 'Chat responde, Agente actúa',
}

export default function ChatVsAgentSlide() {
  return (
    <Slide module={metadata.module} title={metadata.title}>
      <div className="w-full max-w-4xl">
        <ComparisonCard
          before={{
            title: 'Chat (ChatGPT, Claude.ai)',
            items: [
              'Responde preguntas con texto',
              'No puede ejecutar código',
              'No accede a tu filesystem',
              'No tiene herramientas externas',
              'Requiere copiar/pegar manual',
            ],
          }}
          after={{
            title: 'Agente (Claude Code, Cursor)',
            items: [
              'Lee y escribe archivos directamente',
              'Ejecuta comandos en terminal',
              'Accede a APIs y servicios (MCP)',
              'Automatiza flujos completos',
              'Integración nativa con tu IDE',
            ],
          }}
        />
      </div>
    </Slide>
  )
}
