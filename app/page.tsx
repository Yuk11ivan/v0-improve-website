"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductCard from "@/components/product-card"
import BannerCarousel from "@/components/banner-carousel"
import CategoryCard from "@/components/category-card"
import Link from "next/link"
import { ChevronRight, Truck, Shield, Undo2, Headphones } from "lucide-react"

export default function Home() {
  const bannerSlides = [
    {
      id: 1,
      title: "小额批发，一件代发",
      subtitle: "直连义乌源头工厂，低价优质货源，为您的店铺提供竞争力",
      image: "/wholesale-market-warehouse.jpg",
      ctaText: "立即采购",
      ctaUrl: "/products",
    },
    {
      id: 2,
      title: "2025年新品上市",
      subtitle: "精选热销商品，低至0.99元起，库存充足，品质保证",
      image: "/new-products-showcase.jpg",
      ctaText: "查看新品",
      ctaUrl: "/products?filter=new",
    },
    {
      id: 3,
      title: "品质保证 24小时发货",
      subtitle: "严格质检流程，订单当天处理，快速安全送达",
      image: "/fast-shipping-delivery.jpg",
      ctaText: "了解更多",
      ctaUrl: "/about",
    },
  ]

  const categories = [
    { id: 1, name: "饰品/配饰", icon: "💎", count: "1000+", href: "/products?category=1" },
    { id: 2, name: "玩具/益智用品", icon: "🎮", count: "800+", href: "/products?category=2" },
    { id: 3, name: "家居百货/厨具", icon: "🏠", count: "1200+", href: "/products?category=3" },
    { id: 4, name: "文具/办公用品", icon: "✏️", count: "900+", href: "/products?category=4" },
    { id: 5, name: "针织/布艺制品", icon: "🧵", count: "700+", href: "/products?category=5" },
    { id: 6, name: "五金/小家电", icon: "🔧", count: "600+", href: "/products?category=6" },
  ]

  const products = [
    {
      id: "1",
      title: "韩版气质耳环 2025新款 简约ins风",
      image: "/elegant-earrings-jewelry.jpg",
      price: 2.5,
      originalPrice: 5.0,
      minOrder: 100,
      stock: "10000+",
      rating: 4.8,
      reviews: 1245,
      sold: "8500+",
      isNew: true,
    },
    {
      id: "2",
      title: "可爱发夹 儿童卡通头饰 公主发饰套装",
      image: "/cute-hair-clips-kids.jpg",
      price: 1.8,
      originalPrice: 3.6,
      minOrder: 50,
      stock: "5000+",
      rating: 4.2,
      reviews: 856,
      sold: "5200+",
      isNew: true,
    },
    {
      id: "3",
      title: "手工串珠手链 小众设计感 可调节长度",
      image: "/beaded-bracelet-handmade.jpg",
      price: 3.2,
      originalPrice: 6.4,
      minOrder: 30,
      stock: "8000+",
      rating: 5.0,
      reviews: 1432,
      sold: "12000+",
    },
    {
      id: "4",
      title: "韩版小清新发带 森系碎花头带 发饰批发",
      image: "/floral-hair-band.jpg",
      price: 1.9,
      originalPrice: 3.8,
      minOrder: 100,
      stock: "20000+",
      rating: 4.7,
      reviews: 2145,
      sold: "12000+",
      isSale: true,
    },
    {
      id: "5",
      title: "亚克力耳钉 简约几何形状 防过敏耳饰",
      image: "/acrylic-earrings-geometric.jpg",
      price: 0.99,
      originalPrice: 1.99,
      minOrder: 200,
      stock: "50000+",
      rating: 4.9,
      reviews: 3421,
      sold: "25000+",
      isSale: true,
    },
    {
      id: "6",
      title: "创意笔记本 可爱卡通封面 学生文具",
      image: "/cute-notebook-stationery.jpg",
      price: 2.8,
      originalPrice: 5.6,
      minOrder: 50,
      stock: "6000+",
      rating: 4.1,
      reviews: 612,
      sold: "3800+",
    },
  ]

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        {/* Banner Carousel */}
        <BannerCarousel slides={bannerSlides} />

        {/* Categories Section */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-dark">商品分类</h2>
            <Link href="/products" className="text-primary hover:underline flex items-center">
              查看全部
              <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((cat) => (
              <CategoryCard key={cat.id} {...cat} />
            ))}
          </div>
        </section>

        {/* New Products Section */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-dark">新品推荐</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
            {products.slice(0, 6).map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </section>

        {/* Hot Sales Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-dark mb-6">热销爆款</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products
              .filter((p) => p.isSale)
              .map((product) => (
                <div
                  key={product.id}
                  className="card-hover bg-white rounded-lg overflow-hidden flex flex-col md:flex-row"
                >
                  <div className="md:w-1/2 relative">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-4 flex flex-col justify-between">
                    <div>
                      <h3 className="font-medium mb-2">{product.title}</h3>
                      <div className="flex items-center">
                        <span className="text-primary font-bold text-xl">¥{product.price.toFixed(2)}</span>
                        <span className="text-gray-400 text-sm line-through ml-2">
                          ¥{product.originalPrice.toFixed(2)}
                        </span>
                        <span className="ml-auto text-sm text-red-500">已售 {product.sold}</span>
                      </div>
                    </div>
                    <button className="btn-primary mt-4">立即采购</button>
                  </div>
                </div>
              ))}
          </div>
        </section>

        {/* Platform Advantages Section */}
        <section className="mb-12 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-4">
                <Truck className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-medium text-lg mb-2">24小时发货</h3>
              <p className="text-gray-600 text-sm">订单当天处理，确保快速送达</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-medium text-lg mb-2">品质保证</h3>
              <p className="text-gray-600 text-sm">严格质检，确保商品质量</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-4">
                <Undo2 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-medium text-lg mb-2">无忧退换</h3>
              <p className="text-gray-600 text-sm">7天无理由退换货</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-4">
                <Headphones className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-medium text-lg mb-2">贴心服务</h3>
              <p className="text-gray-600 text-sm">专业客服团队，一对一服务</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
