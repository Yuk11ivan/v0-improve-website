import type React from "react"
import type { Metadata, Viewport } from "next"
import "./globals.css"

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#ff6b6b",
}

export const metadata: Metadata = {
  title: {
    default: "商贸义乌 - 小商品批发平台 | 低价货源直供",
    template: "%s | 商贸义乌",
  },
  description:
    "直连义乌源头工厂，提供低价优质小商品批发货源。支持一件代发、小额批发、混批，24小时发货，品质保证，诚信商家。",
  keywords: ["小商品批发", "义乌货源", "一件代发", "小额批发", "批发平台", "义乌工厂"],
  authors: [
    {
      name: "商贸义乌",
      url: "https://yiwupifa.com",
    },
  ],
  creator: "商贸义乌",
  publisher: "商贸义乌",
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "https://yiwupifa.com",
    siteName: "商贸义乌",
    title: "商贸义乌 - 小商品批发平台",
    description: "直连义乌源头工厂，低价优质货源直供，24小时发货",
    images: [
      {
        url: "https://yiwupifa.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "商贸义乌",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "商贸义乌 - 小商品批发平台",
    description: "直连义乌源头工厂，低价优质货源直供",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://yiwupifa.com",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://cdn.jsdelivr.net" />
        {/* Structured data for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "商贸义乌",
              url: "https://yiwupifa.com",
              logo: "https://yiwupifa.com/logo.svg",
              description: "义乌小商品批发平台",
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "Customer Service",
                telephone: "+86-400-888-8888",
                email: "service@yiwupifa.com",
              },
              areaServed: "CN",
              priceRange: "￥0.5-￥100",
            }),
          }}
        />
      </head>
      <body className="font-sans">
        {children}
      </body>
    </html>
  )
}
