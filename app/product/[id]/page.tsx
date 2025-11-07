"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import ImageGallery from "@/components/image-gallery"
import ProductReviews from "@/components/product-reviews"
import RelatedProducts from "@/components/related-products"
import BreadcrumbNav from "@/components/breadcrumb-nav"
import { Heart, ShoppingCart, Share2, Truck, Shield, RotateCcw } from "lucide-react"
import { useState } from "react"

export default function ProductDetail({ params }: { params: { id: string } }) {
  const [quantity, setQuantity] = useState(100)
  const [selectedColor, setSelectedColor] = useState("silver")
  const [isFavorite, setIsFavorite] = useState(false)

  const product = {
    id: params.id,
    title: "韩版气质耳环 2025新款 简约ins风",
    price: 2.5,
    originalPrice: 5.0,
    rating: 4.8,
    reviews: 1245,
    sold: 8500,
    stock: 10000,
    image: "/earrings-main.jpg",
    gallery: [
      "/earrings-1.jpg",
      "/earrings-2.jpg",
      "/earrings-3.jpg",
      "/earrings-4.jpg",
      "/earrings-5.jpg",
    ],
    description:
      "本款韩版气质耳环采用优质不锈钢材质，防过敏，适合各类人群佩戴。简约时尚的设计，百搭各种服饰，是您店铺的热销单品。",
    specifications: [
      { label: "材质", value: "不锈钢+水晶" },
      { label: "风格", value: "韩版、简约、气质" },
      { label: "适用人群", value: "女性" },
      { label: "重量", value: "约2-3克/对" },
    ],
  }

  const reviews = [
    {
      id: "1",
      author: "买家-张女士",
      rating: 5,
      date: "2025-01-10",
      content: "质量很好，发货快，包装精美，很满意！已经回购了，推荐给其他卖家。",
      helpful: 234,
    },
    {
      id: "2",
      author: "买家-李先生",
      rating: 5,
      date: "2025-01-09",
      content: "产品质量不错，价格便宜，物流也很快。五星好评！",
      helpful: 156,
    },
    {
      id: "3",
      author: "买家-王女士",
      rating: 4,
      date: "2025-01-08",
      content: "基本满意，就是有一个细微的瑕疵，不过不影响使用。",
      helpful: 89,
    },
  ]

  const relatedProducts = Array.from({ length: 12 }, (_, i) => ({
    id: `related-${i + 1}`,
    title: `相关商品 ${i + 1}`,
    image: `/placeholder.svg?height=300&width=300&query=related-${i + 1}`,
    price: Number((Math.random() * 10 + 1).toFixed(2)),
    originalPrice: Number((Math.random() * 15 + 5).toFixed(2)),
    minOrder: 50,
    stock: "5000+",
    rating: Number((Math.random() * 1.5 + 4).toFixed(1)),
    reviews: Math.floor(Math.random() * 2000) + 200,
    sold: `${Math.floor(Math.random() * 15000) + 2000}+`,
    isSale: i % 3 === 0,
  }))

  const handleQuantityChange = (value: number) => {
    setQuantity(Math.max(100, value))
  }

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <BreadcrumbNav
          items={[
            { label: "首页", href: "/" },
            { label: "饰品/配饰", href: "/products?category=1" },
            { label: product.title },
          ]}
        />

        {/* Main product section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Left: Image gallery */}
          <div className="lg:col-span-1">
            <ImageGallery mainImage={product.image} thumbnails={product.gallery} title={product.title} />
          </div>

          {/* Right: Product details */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center space-x-2 mb-2">
                <span className="bg-primary text-white text-xs px-2 py-1 rounded">新品</span>
                <span className="bg-accent text-dark text-xs px-2 py-1 rounded">限时特惠</span>
              </div>

              <h1 className="text-2xl font-bold text-dark mb-3">{product.title}</h1>

              <div className="flex items-center flex-wrap gap-3 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 ${i < Math.floor(product.rating) ? "fill-amber-500 text-amber-500" : "fill-gray-300 text-gray-300"}`}
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                  <span className="text-dark font-medium ml-1">{product.rating}</span>
                </div>
                <span className="text-gray-500 text-sm">({product.reviews}条评价)</span>
                <span className="text-gray-300">|</span>
                <span className="text-green-500 text-sm font-medium">库存 {product.stock}+ 件</span>
                <span className="text-gray-300">|</span>
                <span className="text-red-500 text-sm font-medium">已售 {product.sold} 件</span>
              </div>

              <div className="bg-red-50 p-4 rounded-md mb-6">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-sm text-gray-600">批发价：</span>
                  <span className="text-primary font-bold text-3xl">¥{product.price.toFixed(2)}</span>
                  <span className="text-gray-400 text-sm line-through">¥{product.originalPrice.toFixed(2)}</span>
                  <span className="ml-2 bg-primary/10 text-primary text-xs px-2 py-1 rounded font-medium">
                    {Math.round((1 - product.price / product.originalPrice) * 100)}% 优惠
                  </span>
                </div>
                <p className="text-sm text-gray-600">起订量：100件（可混批）| 物流配送范围内免运费</p>
              </div>

              <div className="mb-6 bg-gray-50 p-4 rounded-md overflow-x-auto">
                <h4 className="text-sm font-medium mb-3">价格阶梯（量大更优惠）</h4>
                <table className="w-full text-sm">
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="py-2 text-gray-600">100-499件</td>
                      <td className="py-2 font-medium">¥2.50 / 件</td>
                    </tr>
                    <tr className="border-b border-gray-200 bg-white">
                      <td className="py-2 text-gray-600">500-999件</td>
                      <td className="py-2 font-medium text-primary">¥2.20 / 件 (-12%)</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-2 text-gray-600">1000-4999件</td>
                      <td className="py-2 font-medium text-primary">¥2.00 / 件 (-20%)</td>
                    </tr>
                    <tr>
                      <td className="py-2 text-gray-600">≥5000件</td>
                      <td className="py-2 font-medium text-primary">¥1.80 / 件 (-28%)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Specifications */}
              <div className="mb-6 space-y-4 pb-6 border-b border-gray-200">
                <div>
                  <label className="text-sm font-medium block mb-2">
                    颜色：
                    <span className="text-primary font-semibold">
                      {selectedColor === "silver" && "银色"}
                      {selectedColor === "gold" && "金色"}
                      {selectedColor === "rose" && "玫瑰金"}
                      {selectedColor === "black" && "黑色"}
                    </span>
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {["silver", "gold", "rose", "black"].map((color) => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`px-4 py-2 rounded-md border font-medium text-sm transition-colors ${
                          selectedColor === color
                            ? "bg-primary text-white border-primary"
                            : "border-gray-300 text-dark hover:border-primary"
                        }`}
                      >
                        {color === "silver" && "银色"}
                        {color === "gold" && "金色"}
                        {color === "rose" && "玫瑰金"}
                        {color === "black" && "黑色"}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium block mb-2">购买数量</label>
                  <div className="flex items-center border border-gray-300 rounded-md w-fit">
                    <button
                      onClick={() => handleQuantityChange(quantity - 10)}
                      className="h-10 w-10 flex items-center justify-center hover:bg-gray-100 font-bold text-lg"
                    >
                      −
                    </button>
                    <input
                      type="number"
                      value={quantity}
                      onChange={(e) => handleQuantityChange(Number(e.target.value))}
                      className="h-10 w-24 text-center border-l border-r border-gray-300 focus:outline-none font-medium"
                    />
                    <button
                      onClick={() => handleQuantityChange(quantity + 10)}
                      className="h-10 w-10 flex items-center justify-center hover:bg-gray-100 font-bold text-lg"
                    >
                      +
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">起购：100件 | 库存充足</p>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <button className="btn-primary flex-1 py-3 text-lg font-medium flex items-center justify-center gap-2">
                  <ShoppingCart className="w-5 h-5" />
                  加入购物车
                </button>
                <button className="btn-secondary flex-1 py-3 text-lg font-medium">立即采购</button>
                <button
                  onClick={() => setIsFavorite(!isFavorite)}
                  className={`px-4 py-3 rounded-md border-2 transition-colors ${
                    isFavorite
                      ? "bg-primary/10 border-primary text-primary"
                      : "border-gray-300 text-gray-600 hover:border-primary hover:text-primary"
                  }`}
                >
                  <Heart className={`w-5 h-5 ${isFavorite ? "fill-current" : ""}`} />
                </button>
                <button className="px-4 py-3 rounded-md border border-gray-300 text-gray-600 hover:border-primary hover:text-primary transition-colors">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>

              {/* Benefits */}
              <div className="grid grid-cols-3 gap-3 pb-6 border-b border-gray-200">
                <div className="flex items-center gap-2">
                  <Truck className="w-5 h-5 text-primary flex-shrink-0" />
                  <div className="text-xs">
                    <p className="font-medium">24小时发货</p>
                    <p className="text-gray-500">订单当天处理</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary flex-shrink-0" />
                  <div className="text-xs">
                    <p className="font-medium">品质保证</p>
                    <p className="text-gray-500">严格质检流程</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <RotateCcw className="w-5 h-5 text-primary flex-shrink-0" />
                  <div className="text-xs">
                    <p className="font-medium">7天退换</p>
                    <p className="text-gray-500">无理由退换货</p>
                  </div>
                </div>
              </div>

              {/* Supplier info */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500 mb-1">供应商：</p>
                  <h4 className="font-semibold text-dark">义乌市美丽饰品厂</h4>
                </div>
                <div className="flex gap-2">
                  <button className="px-4 py-2 border border-gray-300 rounded-md text-sm hover:bg-gray-50 font-medium">
                    进入店铺
                  </button>
                  <button className="px-4 py-2 border border-primary text-primary rounded-md text-sm hover:bg-primary/10 font-medium">
                    联系供应商
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews section */}
        <ProductReviews reviews={reviews} averageRating={product.rating} totalReviews={product.reviews} />

        {/* Related products */}
        <div className="mt-12">
          <RelatedProducts products={relatedProducts} />
        </div>
      </main>
      <Footer />
    </>
  )
}
