"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface ImageGalleryProps {
  mainImage: string
  thumbnails: string[]
  title: string
}

export default function ImageGallery({ mainImage, thumbnails, title }: ImageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0)

  const goToPrevious = () => {
    setSelectedIndex((prev) => (prev - 1 + thumbnails.length) % thumbnails.length)
  }

  const goToNext = () => {
    setSelectedIndex((prev) => (prev + 1) % thumbnails.length)
  }

  const currentImage = thumbnails[selectedIndex] || mainImage

  return (
    <div className="space-y-4">
      {/* Main image */}
      <div className="bg-white rounded-lg overflow-hidden shadow-sm aspect-square relative group">
        <img src={currentImage || "/placeholder.svg"} alt={title} className="w-full h-full object-contain p-4" />

        {/* Navigation buttons */}
        <button
          onClick={goToPrevious}
          className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Image counter */}
        <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded text-sm">
          {selectedIndex + 1}/{thumbnails.length}
        </div>
      </div>

      {/* Thumbnails */}
      <div className="bg-white rounded-lg p-3 shadow-sm">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {thumbnails.map((img, i) => (
            <button
              key={i}
              onClick={() => setSelectedIndex(i)}
              className={`w-16 h-16 rounded border-2 overflow-hidden flex-shrink-0 transition-all ${
                selectedIndex === i ? "border-primary" : "border-gray-200 hover:border-gray-400"
              }`}
            >
              <img src={img || "/placeholder.svg"} alt={`Thumbnail ${i}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
