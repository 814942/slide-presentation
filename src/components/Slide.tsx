import type { ReactNode } from 'react'

interface SlideProps {
  module: string
  title: string
  children: ReactNode
}

export function Slide({ module, title, children }: SlideProps) {
  return (
    <div className="flex h-full w-full flex-col px-16 py-12">
      {/* Header */}
      <header className="mb-8 flex-shrink-0">
        <p className="mb-2 text-sm font-medium uppercase tracking-wider text-accent-cyan">
          {module}
        </p>
        <h1 className="text-4xl font-bold text-text">{title}</h1>
      </header>

      {/* Content */}
      <main className="flex flex-1 items-center justify-center">{children}</main>
    </div>
  )
}
