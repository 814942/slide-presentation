import { ChevronLeft, ChevronRight, Maximize2, Minimize2 } from 'lucide-react'

interface NavigationProps {
  current: number
  total: number
  isFullscreen: boolean
  onPrev: () => void
  onNext: () => void
  onToggleFullscreen: () => void
}

export function Navigation({
  current,
  total,
  isFullscreen,
  onPrev,
  onNext,
  onToggleFullscreen,
}: NavigationProps) {
  const isFirst = current === 0
  const isLast = current === total - 1

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-between bg-bg-dark/80 px-6 py-3 backdrop-blur-sm">
      {/* Previous */}
      <button
        onClick={onPrev}
        disabled={isFirst}
        className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm text-text-muted transition-colors hover:bg-card hover:text-text disabled:cursor-not-allowed disabled:opacity-30"
        aria-label="Previous slide"
      >
        <ChevronLeft size={18} />
        <span className="hidden sm:inline">Previous</span>
      </button>

      {/* Center: slide counter + fullscreen toggle */}
      <div className="flex items-center gap-4">
        <span className="font-mono text-sm text-text-muted">
          {current + 1} / {total}
        </span>
        <button
          onClick={onToggleFullscreen}
          className="rounded-lg p-2 text-text-muted transition-colors hover:bg-card hover:text-text"
          aria-label={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
        >
          {isFullscreen ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
        </button>
      </div>

      {/* Next */}
      <button
        onClick={onNext}
        disabled={isLast}
        className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm text-text-muted transition-colors hover:bg-card hover:text-text disabled:cursor-not-allowed disabled:opacity-30"
        aria-label="Next slide"
      >
        <span className="hidden sm:inline">Next</span>
        <ChevronRight size={18} />
      </button>
    </nav>
  )
}
