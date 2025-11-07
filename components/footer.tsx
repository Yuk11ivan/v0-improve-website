"use client"

import type React from "react"

import Link from "next/link"
import { Mail, MapPin, Phone, Clock, Facebook, Linkedin } from "lucide-react"
import { useState } from "react"

export default function Footer() {
  const [email, setEmail] = useState("")

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Add newsletter subscription API call
    setEmail("")
  }

  return (
    <footer className="bg-dark text-white py-12 mt-12">
      <div className="container mx-auto px-4">
        {/* Newsletter Section */}
        <div className="mb-12 bg-secondary/20 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-3">订阅我们的商机快讯</h2>
          <p className="text-gray-400 mb-6">获取最新商品上新、优惠信息，及时掌握市场动态</p>
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="请输入您的邮箱地址"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 rounded-md bg-white/10 text-white placeholder-gray-500 border border-white/20 focus:outline-none focus:border-primary"
              required
            />
            <button type="submit" className="btn-primary px-6 py-3 whitespace-nowrap">
              订阅
            </button>
          </form>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">商贸义乌</h3>
            <p className="text-gray-400 text-sm mb-4">直连义乌源头工厂，为您提供低价优质货源</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">快速链接</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  关于我们
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  商家入驻
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  采购指南
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  常见问题
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">帮助中心</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  新手指南
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  支付方式
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  物流配送
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  退换货政策
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">联系我们</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                <span>浙江省义乌市国际商贸城</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span>400-888-8888</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <span>service@yiwupifa.com</span>
              </li>
              <li className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                <span>周一至周日 9:00-22:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>© 2025 商贸义乌 版权所有 ICP备案号：浙ICP备12345678号</p>
        </div>
      </div>
    </footer>
  )
}
