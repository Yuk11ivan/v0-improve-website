"use client"

import { useState, useMemo } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductCard from "@/components/product-card"
import Pagination from "@/components/pagination"
import BreadcrumbNav from "@/components/breadcrumb-nav"

export default function ProductsPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const [sortBy, setSortBy] = useState("default")
  const [priceRange, setPriceRange] = useState({ min: 0, max: 100 })
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = [
    { id: "all", name: "全部分类" },
    { id: "1", name: "饰品/配饰" },
    { id: "2", name: "玩具/益智用品" },
    { id: "3", name: "家居百货/厨具" },
    { id: "4", name: "文具/办公用品" },
    { id: "5", name: "针织/布艺制品" },
    { id: "6", name: "五金/小家电" },
  ]

  const allProducts = Array.from({ length: 96 }, (_, i) => ({
    id: `${i + 1}`,
    title: `优质商品 ${i + 1}`,
    image: `/placeholder.svg?height=300&width=300&query=product-${i + 1}`,
    price: Number((Math.random() * 20 + 0.5).toFixed(2)),
    originalPrice: Number((Math.random() * 30 + 5).toFixed(2)),
    minOrder: Math.floor(Math.random() * 200) + 20,
    stock: `${Math.floor(Math.random() * 50000) + 1000}+`,
    rating: Number((Math.random() * 2 + 3.5).toFixed(1)),
    reviews: Math.floor(Math.random() * 3000) + 100,
    sold: `${Math.floor(Math.random() * 20000) + 1000}+`,
    isNew: i < 12,
    isSale: i % 3 === 0,
    categoryId: String((i % 6) + 1),
  }))

  const filteredAndSortedProducts = useMemo(() => {
    let products = [...allProducts]

    // Filter by category
    if (selectedCategory !== "all") {
      products = products.filter((p) => p.categoryId === selectedCategory)
    }

    // Filter by price
    products = products.filter((p) => p.price >= priceRange.min && p.price <= priceRange.max)

    // Sort
    switch (sortBy) {
      case "sales":
        products.sort((a, b) => Number.parseInt(b.sold) - Number.parseInt(a.sold))
        break
      case "price-low":
        products.sort((a, b) => a.price - b.price)
        break
      case "price-high":
        products.sort((a, b) => b.price - a.price)
        break
      case "rating":
        products.sort((a, b) => b.rating - a.rating)
        break
      default:
        break
    }

    return products
  }, [selectedCategory, priceRange, sortBy])

  // Pagination logic
  const itemsPerPage = 20
  const totalPages = Math.ceil(filteredAndSortedProducts.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const currentProducts = filteredAndSortedProducts.slice(startIndex, startIndex + itemsPerPage)

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId)
    setCurrentPage(1)
  }

  const handlePriceChange = (field: "min" | "max", value: string) => {
    const numValue = Number.parseFloat(value) || 0
    setPriceRange((prev) => ({ ...prev, [field]: numValue }))
    setCurrentPage(1)
  }

  const currentCategory = categories.find((c) => c.id === selectedCategory)

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <BreadcrumbNav
          items={[{ label: "首页", href: "/" }, { label: "商品分类" }, { label: currentCategory?.name || "全部商品" }]}
        />

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left sidebar filter */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h3 className="text-lg font-bold mb-6">筛选商品</h3>

              {/* Category filter */}
              <div className="mb-8">
                <h4 className="font-semibold text-dark mb-4">商品分类</h4>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <label key={cat.id} className="flex items-center cursor-pointer group">
                      <input
                        type="radio"
                        name="category"
                        checked={selectedCategory === cat.id}
                        onChange={() => handleCategoryChange(cat.id)}
                        className="w-4 h-4 text-primary cursor-pointer"
                      />
                      <span className="ml-2 text-sm text-gray-700 group-hover:text-dark">{cat.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price filter */}
              <div className="mb-8 pb-8 border-b border-gray-200">
                <h4 className="font-semibold text-dark mb-4">价格区间</h4>
                <div className="space-y-3">
                  <div className="flex gap-2">
                    <input
                      type="number"
                      placeholder="最低"
                      value={priceRange.min}
                      onChange={(e) => handlePriceChange("min", e.target.value)}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-primary"
                    />
                    <input
                      type="number"
                      placeholder="最高"
                      value={priceRange.max}
                      onChange={(e) => handlePriceChange("max", e.target.value)}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-primary"
                    />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { label: "0-5元", min: 0, max: 5 },
                      { label: "5-10元", min: 5, max: 10 },
                      { label: "10-20元", min: 10, max: 20 },
                      { label: "20元以上", min: 20, max: 100 },
                    ].map((range) => (
                      <button
                        key={range.label}
                        onClick={() => {
                          setPriceRange(range)
                          setCurrentPage(1)
                        }}
                        className={`px-3 py-1 text-xs rounded-md transition-colors ${
                          priceRange.min === range.min && priceRange.max === range.max
                            ? "bg-primary text-white"
                            : "border border-gray-300 text-gray-700 hover:bg-gray-50"
                        }`}
                      >
                        {range.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right content area */}
          <div className="lg:w-3/4">
            {/* Category info and sorting toolbar */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-bold text-dark">{currentCategory?.name || "全部商品"}</h2>
                  <p className="text-gray-500 mt-1">共找到 {filteredAndSortedProducts.length} 件商品</p>
                </div>

                {/* Sorting buttons */}
                <div className="flex flex-wrap gap-2">
                  {[
                    { value: "default", label: "默认排序" },
                    { value: "sales", label: "销量优先" },
                    { value: "price-low", label: "价格从低到高" },
                    { value: "price-high", label: "价格从高到低" },
                    { value: "rating", label: "评分最高" },
                  ].map((option) => (
                    <button
                      key={option.value}
                      onClick={() => {
                        setSortBy(option.value)
                        setCurrentPage(1)
                      }}
                      className={`px-4 py-2 text-sm rounded-md transition-colors font-medium ${
                        sortBy === option.value
                          ? "bg-primary text-white"
                          : "border border-gray-300 text-dark hover:bg-gray-50"
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Products grid */}
            {currentProducts.length > 0 ? (
              <>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
                  {currentProducts.map((product) => (
                    <ProductCard key={product.id} {...product} />
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
                )}
              </>
            ) : (
              <div className="bg-white rounded-lg shadow-md p-12 text-center">
                <p className="text-gray-500 text-lg">未找到符合条件的商品</p>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
