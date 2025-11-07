"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface BannerSlide {
  id: number
  title: string
  subtitle: string
  image: string
  ctaText: string
  ctaUrl: string
}

interface BannerCarouselProps {
  slides: BannerSlide[]
  autoPlay?: boolean
  autoPlayInterval?: number
}

export default function BannerCarousel({ slides, autoPlay = true, autoPlayInterval = 5000 }: BannerCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    if (!autoPlay) return

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, autoPlayInterval)

    return () => clearInterval(timer)
  }, [autoPlay, autoPlayInterval, slides.length])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  if (slides.length === 0) return null

  const slide = slides[currentSlide]

  return (
    <div className="relative overflow-hidden rounded-lg shadow-md h-64 md:h-96 mb-12">
      {/* Slides */}
      <div className="relative w-full h-full">
        {slides.map((s, index) => (
          <div
            key={s.id}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={s.image || "/placeholder.svg?height=400&width=1200&query=banner"}
              alt={s.title}
              className="w-full h-full object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40" />
            {/* Content */}
            <div className="absolute inset-0 flex items-center px-8 md:px-16">
              <div className="text-white max-w-2xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{s.title}</h2>
                <p className="text-lg mb-6 text-gray-100">{s.subtitle}</p>
                <a href={s.ctaUrl} className="btn-primary text-lg inline-block">
                  {s.ctaText}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/80 hover:bg-white transition-colors"
      >
        <ChevronLeft className="w-6 h-6 text-dark" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/80 hover:bg-white transition-colors"
      >
        <ChevronRight className="w-6 h-6 text-dark" />
      </button>

      {/* Dots indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide ? "bg-white w-8" : "bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
