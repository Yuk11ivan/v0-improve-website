import Header from "@/components/header"
import Footer from "@/components/footer"
import { Building2, Users, Target, Award } from "lucide-react"

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-dark mb-6 text-center">关于商贸义乌</h1>

        <div className="prose max-w-4xl mx-auto mb-12">
          <p className="text-lg text-gray-600 mb-6">
            商贸义乌是一个专业的小商品批发平台，直连义乌源头工厂，为全国各地的零售商、代购商和电商卖家提供优质、低价的小商品货源。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-lg p-6 shadow-sm text-center">
            <Building2 className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="font-bold text-lg mb-2">10+</h3>
            <p className="text-gray-600 text-sm">合作工厂</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm text-center">
            <Users className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="font-bold text-lg mb-2">50000+</h3>
            <p className="text-gray-600 text-sm">活跃商家</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm text-center">
            <Target className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="font-bold text-lg mb-2">1000000+</h3>
            <p className="text-gray-600 text-sm">商品SKU</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm text-center">
            <Award className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="font-bold text-lg mb-2">100%</h3>
            <p className="text-gray-600 text-sm">满意度</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">我们的优势</h2>
          <ul className="space-y-4 text-gray-600">
            <li className="flex items-start">
              <span className="text-primary mr-3">✓</span>
              <span>直连源头工厂，省去中间环节，价格更优</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3">✓</span>
              <span>商品种类齐全，覆盖常见小商品所有品类</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3">✓</span>
              <span>24小时内发货，物流配送快速稳定</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3">✓</span>
              <span>小额混批，起订量低，适合各类卖家</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3">✓</span>
              <span>严格质检，品质保证，7天无理由退换</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3">✓</span>
              <span>专业客服团队，24小时在线服务</span>
            </li>
          </ul>
        </div>
      </main>
      <Footer />
    </>
  )
}
