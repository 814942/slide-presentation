import { Slide } from '@/components/Slide'
import { FeatureBox } from '@/components/diagrams/FeatureBox'
import { Terminal, FolderOpen, Globe, Database, GitBranch, MessageSquare } from 'lucide-react'
import type { SlideMetadata } from '@/types/slide'

export const metadata: SlideMetadata = {
  id: '06',
  module: 'Chat vs Agente',
  title: 'Las capacidades del agente (MCP)',
}

export default function ToolsMcpSlide() {
  const tools = [
    {
      icon: Terminal,
      title: 'Bash',
      description: 'Ejecuta comandos, npm, git',
      color: 'green' as const,
    },
    {
      icon: FolderOpen,
      title: 'Filesystem',
      description: 'Lee, escribe, edita archivos',
      color: 'cyan' as const,
    },
    {
      icon: Globe,
      title: 'Web Fetch',
      description: 'Consulta documentación online',
      color: 'blue' as const,
    },
    {
      icon: Database,
      title: 'Engram',
      description: 'Memoria persistente entre sesiones',
      color: 'magenta' as const,
    },
    {
      icon: GitBranch,
      title: 'Jira',
      description: 'Lee tickets, comenta, transiciona',
      color: 'yellow' as const,
    },
    {
      icon: MessageSquare,
      title: 'Slack',
      description: 'Lee mensajes, busca contexto',
      color: 'orange' as const,
    },
  ]

  return (
    <Slide module={metadata.module} title={metadata.title}>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {tools.map((tool, index) => (
          <FeatureBox
            key={tool.title}
            icon={tool.icon}
            title={tool.title}
            description={tool.description}
            color={tool.color}
            delay={index * 0.1}
          />
        ))}
      </div>
    </Slide>
  )
}
