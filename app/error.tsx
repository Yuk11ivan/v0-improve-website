"use client"

import { useEffect } from "react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error("Application error:", error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold text-primary mb-4">500</h1>
        <h2 className="text-2xl font-semibold text-dark mb-2">出错了</h2>
        <p className="text-gray-600 mb-8">抱歉，服务器出现了一个错误。请稍后重试。</p>
        <div className="flex gap-4 justify-center">
          <button onClick={reset} className="btn-primary text-lg">
            重试
          </button>
          <a href="/" className="btn-secondary text-lg">
            返回首页
          </a>
        </div>
      </div>
    </div>
  )
}
