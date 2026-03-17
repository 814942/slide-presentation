import type { LucideIcon } from 'lucide-react'
import { motion } from 'framer-motion'

type AccentColor = 'blue' | 'cyan' | 'green' | 'yellow' | 'magenta' | 'red' | 'orange'

const colorMap: Record<AccentColor, string> = {
  blue: 'border-accent-blue bg-accent-blue/10 text-accent-blue',
  cyan: 'border-accent-cyan bg-accent-cyan/10 text-accent-cyan',
  green: 'border-accent-green bg-accent-green/10 text-accent-green',
  yellow: 'border-accent-yellow bg-accent-yellow/10 text-accent-yellow',
  magenta: 'border-accent-magenta bg-accent-magenta/10 text-accent-magenta',
  red: 'border-accent-red bg-accent-red/10 text-accent-red',
  orange: 'border-accent-orange bg-accent-orange/10 text-accent-orange',
}

export interface FlowNode {
  id: string
  label: string
  icon?: LucideIcon
  color?: AccentColor
  description?: string
}

export interface FlowConnection {
  from: string
  to: string
  label?: string
}

interface FlowDiagramProps {
  nodes: FlowNode[]
  connections: FlowConnection[]
  direction?: 'horizontal' | 'vertical'
}

export function FlowDiagram({
  nodes,
  connections: _connections,
  direction = 'horizontal',
}: FlowDiagramProps) {
  const isHorizontal = direction === 'horizontal'

  return (
    <div
      className={`flex items-center gap-4 ${
        isHorizontal ? 'flex-row' : 'flex-col'
      }`}
    >
      {nodes.map((node, index) => {
        const Icon = node.icon
        const colorClasses = colorMap[node.color || 'blue']

        return (
          <motion.div
            key={node.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.3 }}
            className="flex items-center gap-4"
          >
            {/* Node */}
            <div
              className={`flex flex-col items-center gap-2 rounded-xl border-2 p-4 ${colorClasses}`}
            >
              {Icon && <Icon size={28} />}
              <span className="font-medium">{node.label}</span>
              {node.description && (
                <span className="text-xs text-text-muted">{node.description}</span>
              )}
            </div>

            {/* Arrow (except after last node) */}
            {index < nodes.length - 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.15, duration: 0.2 }}
                className={`text-text-muted ${
                  isHorizontal ? 'rotate-0' : 'rotate-90'
                }`}
              >
                <svg
                  width="32"
                  height="16"
                  viewBox="0 0 32 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 8H28M28 8L20 2M28 8L20 14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.div>
            )}
          </motion.div>
        )
      })}
    </div>
  )
}
