import { useEffect } from 'react'

interface KeyboardConfig {
  next: () => void
  prev: () => void
  goTo: (index: number) => void
  toggleFullscreen: () => void
  totalSlides: number
}

export function useKeyboard({
  next,
  prev,
  goTo,
  toggleFullscreen,
  totalSlides,
}: KeyboardConfig): void {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Ignore if user is typing in an input
      if (
        event.target instanceof HTMLInputElement ||
        event.target instanceof HTMLTextAreaElement
      ) {
        return
      }

      switch (event.key) {
        case 'ArrowRight':
        case ' ':
          event.preventDefault()
          next()
          break
        case 'ArrowLeft':
          event.preventDefault()
          prev()
          break
        case 'Home':
          event.preventDefault()
          goTo(0)
          break
        case 'End':
          event.preventDefault()
          goTo(totalSlides - 1)
          break
        case 'f':
        case 'F':
          event.preventDefault()
          toggleFullscreen()
          break
        case 'Escape':
          // Escape is handled by browser for fullscreen exit
          break
        default:
          // Number keys for direct navigation (1-9)
          const num = parseInt(event.key, 10)
          if (!isNaN(num) && num >= 1 && num <= 9 && num <= totalSlides) {
            event.preventDefault()
            goTo(num - 1)
          }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [next, prev, goTo, toggleFullscreen, totalSlides])
}
