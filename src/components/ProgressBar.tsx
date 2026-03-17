interface ProgressBarProps {
  current: number
  total: number
}

export function ProgressBar({ current, total }: ProgressBarProps) {
  const progress = total > 0 ? ((current + 1) / total) * 100 : 0

  return (
    <div className="fixed left-0 right-0 top-0 z-50 h-1 bg-bg-light">
      <div
        className="h-full bg-gradient-to-r from-accent-blue to-accent-cyan transition-all duration-300 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
