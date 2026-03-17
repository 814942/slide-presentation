import type { ComponentType } from 'react'

export interface SlideMetadata {
  id: string
  module: string
  title: string
}

export interface LoadedSlide {
  metadata: SlideMetadata
  Component: ComponentType
}
