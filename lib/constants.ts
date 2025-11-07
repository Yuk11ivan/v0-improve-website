// Environment and configuration constants
export const SITE_CONFIG = {
  name: "商贸义乌",
  description: "直连义乌源头工厂，低价优质货源直供",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://yiwupifa.com",
  email: "service@yiwupifa.com",
  phone: "400-888-8888",
  address: "浙江省义乌市国际商贸城",
}

export const API_CONFIG = {
  timeout: 10000,
  retries: 3,
}

export const PAGINATION = {
  defaultPageSize: 20,
  maxPageSize: 100,
}

export const CACHE_CONFIG = {
  products: 3600, // 1 hour
  categories: 86400, // 24 hours
  reviews: 1800, // 30 minutes
}
