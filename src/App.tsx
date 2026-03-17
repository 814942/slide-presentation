import { AnimatePresence, motion } from 'framer-motion'
import { slides } from '@/lib/slides'
import { useNavigation } from '@/hooks/useNavigation'
import { useKeyboard } from '@/hooks/useKeyboard'
import { useFullscreen } from '@/hooks/useFullscreen'
import { ProgressBar } from '@/components/ProgressBar'
import { Navigation } from '@/components/Navigation'

function App() {
  const { currentIndex, totalSlides, next, prev, goTo } = useNavigation(slides.length)
  const { isFullscreen, toggleFullscreen } = useFullscreen()

  useKeyboard({
    next,
    prev,
    goTo,
    toggleFullscreen,
    totalSlides,
  })

  // Handle click on main area to advance
  const handleSlideClick = () => {
    next()
  }

  if (slides.length === 0) {
    return (
      <div className="flex h-screen w-screen items-center justify-center bg-bg">
        <p className="text-text-muted">No slides found. Add slides to src/slides/</p>
      </div>
    )
  }

  const CurrentSlide = slides[currentIndex]?.Component

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-bg">
      <ProgressBar current={currentIndex} total={totalSlides} />

      {/* Slide content area */}
      <div
        className="h-full w-full cursor-pointer pb-14 pt-1"
        onClick={handleSlideClick}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="h-full w-full"
          >
            {CurrentSlide && <CurrentSlide />}
          </motion.div>
        </AnimatePresence>
      </div>

      <Navigation
        current={currentIndex}
        total={totalSlides}
        isFullscreen={isFullscreen}
        onPrev={prev}
        onNext={next}
        onToggleFullscreen={toggleFullscreen}
      />
    </div>
  )
}

export default App
