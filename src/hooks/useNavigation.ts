import { useState, useCallback } from 'react'

interface NavigationState {
  currentIndex: number
  totalSlides: number
}

interface NavigationActions {
  next: () => void
  prev: () => void
  goTo: (index: number) => void
}

export function useNavigation(totalSlides: number): NavigationState & NavigationActions {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = useCallback(() => {
    setCurrentIndex((prev) => Math.min(prev + 1, totalSlides - 1))
  }, [totalSlides])

  const prev = useCallback(() => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0))
  }, [])

  const goTo = useCallback(
    (index: number) => {
      if (index >= 0 && index < totalSlides) {
        setCurrentIndex(index)
      }
    },
    [totalSlides]
  )

  return {
    currentIndex,
    totalSlides,
    next,
    prev,
    goTo,
  }
}
