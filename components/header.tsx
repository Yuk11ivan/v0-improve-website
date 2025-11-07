"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, Search, Bell, ShoppingCart, X, ChevronDown, User, LogOut } from "lucide-react"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false)
  const [userMenuOpen, setUserMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  const categories = [
    { name: "饰品/配饰", href: "/products?category=1" },
    { name: "玩具/益智用品", href: "/products?category=2" },
    { name: "家居百货/厨具", href: "/products?category=3" },
    { name: "文具/办公用品", href: "/products?category=4" },
    { name: "针织/布艺制品", href: "/products?category=5" },
    { name: "五金/小家电", href: "/products?category=6" },
  ]

  return (
    <>
      {/* Top notification bar */}
      <div className="bg-primary text-white py-2 text-center text-sm">
        <p>新用户注册即可领取200元优惠券 | 全场满1999元包邮 | 24小时内发货</p>
      </div>

      {/* Main header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="text-2xl font-bold text-primary">商贸义乌</div>
            </Link>

            {/* Desktop navigation */}
            <nav className="hidden md:flex space-x-1 items-center">
              <Link href="/" className="nav-item font-medium">
                首页
              </Link>

              {/* Category Dropdown */}
              <div className="relative group">
                <button className="nav-item font-medium flex items-center">
                  商品分类
                  <ChevronDown className="w-4 h-4 ml-1" />
                </button>
                <div className="absolute left-0 mt-0 w-48 bg-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-200 z-20">
                  {categories.map((cat) => (
                    <Link
                      key={cat.name}
                      href={cat.href}
                      className="block px-4 py-2 text-sm text-dark hover:bg-primary/10 hover:text-primary transition-colors first:rounded-t-md last:rounded-b-md"
                    >
                      {cat.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link href="/orders" className="nav-item font-medium">
                订单管理
              </Link>
              <Link href="/about" className="nav-item font-medium">
                关于我们
              </Link>
            </nav>

            {/* Right section */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              <div className="relative hidden md:block">
                <input
                  type="text"
                  placeholder="搜索商品..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && searchQuery) {
                      window.location.href = `/products?search=${encodeURIComponent(searchQuery)}`
                    }
                  }}
                  className="w-64 h-10 pl-10 pr-4 rounded-md border border-gray-300 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              </div>

              {/* Icons */}
              <button className="md:hidden">
                <Search className="w-5 h-5 text-dark hover:text-primary" />
              </button>

              <button className="relative">
                <Bell className="w-5 h-5 text-dark hover:text-primary transition-colors" />
                <span className="badge">3</span>
              </button>

              <Link href="/cart" className="relative">
                <ShoppingCart className="w-5 h-5 text-dark hover:text-primary transition-colors" />
                <span className="badge">2</span>
              </Link>

              {/* User Menu */}
              <div className="relative hidden sm:block">
                <button
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="flex items-center space-x-1 px-3 py-2 rounded-md hover:bg-gray-100 transition-colors"
                >
                  <User className="w-5 h-5 text-dark" />
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                </button>
                {userMenuOpen && (
                  <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg z-20">
                    <Link
                      href="/login"
                      className="block px-4 py-2 text-sm text-dark hover:bg-primary/10 hover:text-primary transition-colors rounded-t-md"
                    >
                      登录
                    </Link>
                    <Link
                      href="/register"
                      className="block px-4 py-2 text-sm text-dark hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                      注册
                    </Link>
                    <hr className="my-1" />
                    <button className="w-full text-left px-4 py-2 text-sm text-dark hover:bg-primary/10 hover:text-primary transition-colors flex items-center rounded-b-md">
                      <LogOut className="w-4 h-4 mr-2" />
                      退出登录
                    </button>
                  </div>
                )}
              </div>

              {/* Mobile menu button */}
              <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {mobileMenuOpen && (
            <nav className="md:hidden py-3 space-y-2 border-t border-gray-200 mt-3">
              <Link href="/" className="block nav-item font-medium">
                首页
              </Link>
              <Link href="/products" className="block nav-item font-medium">
                商品分类
              </Link>
              <Link href="/orders" className="block nav-item font-medium">
                订单管理
              </Link>
              <Link href="/about" className="block nav-item font-medium">
                关于我们
              </Link>
            </nav>
          )}
        </div>
      </header>
    </>
  )
}
