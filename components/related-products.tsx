import ProductCard from "./product-card"

interface Product {
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

interface RelatedProductsProps {
  products: Product[]
}

export default function RelatedProducts({ products }: RelatedProductsProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-bold mb-6">相关推荐</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
        {products.slice(0, 6).map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  )
}
