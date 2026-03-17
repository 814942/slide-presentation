import { useState, useCallback, useEffect } from 'react'

interface FullscreenState {
  isFullscreen: boolean
  toggleFullscreen: () => void
  enterFullscreen: () => void
  exitFullscreen: () => void
}

export function useFullscreen(): FullscreenState {
  const [isFullscreen, setIsFullscreen] = useState(false)

  // Sync state with actual fullscreen status
  useEffect(() => {
    const handleChange = () => {
      setIsFullscreen(document.fullscreenElement !== null)
    }

    document.addEventListener('fullscreenchange', handleChange)
    return () => document.removeEventListener('fullscreenchange', handleChange)
  }, [])

  const enterFullscreen = useCallback(async () => {
    try {
      await document.documentElement.requestFullscreen()
    } catch (error) {
      console.warn('Failed to enter fullscreen:', error)
    }
  }, [])

  const exitFullscreen = useCallback(async () => {
    try {
      if (document.fullscreenElement) {
        await document.exitFullscreen()
      }
    } catch (error) {
      console.warn('Failed to exit fullscreen:', error)
    }
  }, [])

  const toggleFullscreen = useCallback(() => {
    if (isFullscreen) {
      exitFullscreen()
    } else {
      enterFullscreen()
    }
  }, [isFullscreen, enterFullscreen, exitFullscreen])

  return {
    isFullscreen,
    toggleFullscreen,
    enterFullscreen,
    exitFullscreen,
  }
}
