"use client"

import { Star } from "lucide-react"
import { useState } from "react"

interface Review {
  id: string
  author: string
  rating: number
  date: string
  content: string
  helpful: number
}

interface ProductReviewsProps {
  reviews: Review[]
  averageRating: number
  totalReviews: number
}

export default function ProductReviews({ reviews, averageRating, totalReviews }: ProductReviewsProps) {
  const [sortBy, setSortBy] = useState("latest")

  const ratingDistribution = {
    5: 800,
    4: 300,
    3: 100,
    2: 30,
    1: 15,
  }

  const sortedReviews = [...reviews].sort((a, b) => {
    if (sortBy === "latest") return b.id.localeCompare(a.id)
    if (sortBy === "helpful") return b.helpful - a.helpful
    return b.rating - a.rating
  })

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-bold mb-6">用户评价</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 pb-8 border-b border-gray-200">
        {/* Rating summary */}
        <div className="flex flex-col items-center">
          <div className="text-4xl font-bold text-dark mb-2">{averageRating}</div>
          <div className="flex items-center text-amber-500 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`w-4 h-4 ${i < Math.floor(averageRating) ? "fill-current" : ""}`} />
            ))}
          </div>
          <p className="text-sm text-gray-500">基于 {totalReviews} 条评价</p>
        </div>

        {/* Rating distribution */}
        <div className="space-y-2">
          {[5, 4, 3, 2, 1].map((rating) => (
            <div key={rating} className="flex items-center gap-2">
              <span className="text-sm text-gray-600 w-8">{rating}星</span>
              <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-amber-500"
                  style={{
                    width: `${(ratingDistribution[rating as keyof typeof ratingDistribution] / totalReviews) * 100}%`,
                  }}
                />
              </div>
              <span className="text-sm text-gray-500 w-12">
                {Math.round((ratingDistribution[rating as keyof typeof ratingDistribution] / totalReviews) * 100)}%
              </span>
            </div>
          ))}
        </div>

        {/* Action */}
        <div className="flex flex-col items-center justify-center">
          <button className="btn-primary w-full py-2 mb-2">我要评价</button>
          <p className="text-xs text-gray-500 text-center">购买后才能评价</p>
        </div>
      </div>

      {/* Sort and filter */}
      <div className="mb-6 flex flex-wrap gap-2">
        {[
          { value: "latest", label: "最新优先" },
          { value: "helpful", label: "最有帮助" },
          { value: "rating", label: "评分最高" },
        ].map((option) => (
          <button
            key={option.value}
            onClick={() => setSortBy(option.value)}
            className={`px-3 py-1 text-sm rounded-md transition-colors ${
              sortBy === option.value ? "bg-primary text-white" : "border border-gray-300 hover:bg-gray-50"
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>

      {/* Reviews list */}
      <div className="space-y-6">
        {sortedReviews.map((review) => (
          <div key={review.id} className="pb-6 border-b border-gray-200 last:border-b-0">
            <div className="flex items-center justify-between mb-3">
              <div>
                <p className="font-medium text-dark">{review.author}</p>
                <div className="flex items-center gap-2">
                  <div className="flex text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-3 h-3 ${i < review.rating ? "fill-current" : ""}`} />
                    ))}
                  </div>
                  <span className="text-xs text-gray-500">{review.date}</span>
                </div>
              </div>
            </div>
            <p className="text-gray-700 text-sm mb-3">{review.content}</p>
            <button className="text-sm text-gray-500 hover:text-primary transition-colors">
              有帮助 ({review.helpful})
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
