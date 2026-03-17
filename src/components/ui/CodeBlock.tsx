import { motion } from 'framer-motion'

interface CodeBlockProps {
  code: string
  language?: string
}

export function CodeBlock({ code, language: _language = 'bash' }: CodeBlockProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="overflow-hidden rounded-lg bg-bg-dark"
    >
      <div className="flex items-center gap-2 border-b border-bg-light px-4 py-2">
        <span className="h-3 w-3 rounded-full bg-accent-red/50" />
        <span className="h-3 w-3 rounded-full bg-accent-yellow/50" />
        <span className="h-3 w-3 rounded-full bg-accent-green/50" />
      </div>
      <pre className="overflow-x-auto p-4">
        <code className="font-mono text-sm text-accent-green">{code}</code>
      </pre>
    </motion.div>
  )
}
