import type { LoadedSlide, SlideMetadata } from '@/types/slide'
import type { ComponentType } from 'react'

interface SlideModule {
  metadata?: SlideMetadata
  default?: ComponentType
}

// Eagerly import all slide files
const slideModules = import.meta.glob<SlideModule>('../slides/*.tsx', { eager: true })

// Filter, validate, and sort slides
export const slides: LoadedSlide[] = Object.entries(slideModules)
  .filter(([path, module]) => {
    // Skip files starting with underscore (templates, utilities)
    if (path.includes('/_')) {
      return false
    }

    // Validate module has required exports
    if (!module.metadata) {
      console.warn(`[slides] Missing metadata export in: ${path}`)
      return false
    }

    if (!module.default) {
      console.warn(`[slides] Missing default export in: ${path}`)
      return false
    }

    return true
  })
  .map(([_, module]) => ({
    metadata: module.metadata!,
    Component: module.default!,
  }))
  .sort((a, b) => a.metadata.id.localeCompare(b.metadata.id))

export function getSlideCount(): number {
  return slides.length
}
