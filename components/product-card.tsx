import { Star, ShoppingCart } from "lucide-react"

interface ProductCardProps {
  id: string
  title: string
  image: string
  price: number
  originalPrice: number
  minOrder: number
  stock: string
  rating: number
  reviews: number
  sold: string
  isNew?: boolean
  isSale?: boolean
}

export default function ProductCard({
  id,
  title,
  image,
  price,
  originalPrice,
  minOrder,
  stock,
  rating,
  reviews,
  sold,
  isNew,
  isSale,
}: ProductCardProps) {
  return (
    <div className="card-hover bg-white rounded-lg overflow-hidden">
      <div className="relative">
        <img src={image || "/placeholder.svg"} alt={title} className="w-full aspect-square object-cover" />
        {isNew && <span className="absolute top-2 left-2 bg-primary text-white text-xs px-2 py-1 rounded">新品</span>}
        {isSale && <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">热销</span>}
      </div>
      <div className="p-3">
        <h3 className="font-medium text-sm line-clamp-2 h-10">{title}</h3>
        <div className="flex items-center mt-2">
          <span className="text-primary font-bold text-lg">¥{price.toFixed(2)}</span>
          <span className="text-gray-400 text-xs line-through ml-2">¥{originalPrice.toFixed(2)}</span>
        </div>
        <div className="flex items-center justify-between mt-2">
          <span className="text-xs text-gray-500">起订量：{minOrder}件</span>
          <span className="text-xs text-green-500">库存：{stock}</span>
        </div>
        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center text-xs text-amber-500">
            <Star className="w-3 h-3 fill-current" />
            <span className="text-dark ml-1 font-medium">{rating}</span>
          </div>
          <button className="btn-primary text-xs py-1 px-2">
            <ShoppingCart className="w-3 h-3 inline mr-1" />
            加购
          </button>
        </div>
      </div>
    </div>
  )
}
