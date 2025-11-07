import Link from "next/link"

interface CategoryCardProps {
  id: number
  name: string
  icon: string
  count: string
  href: string
}

export default function CategoryCard({ id, name, icon, count, href }: CategoryCardProps) {
  return (
    <Link
      href={href}
      className="card-hover bg-white rounded-lg overflow-hidden p-4 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300"
    >
      <div className="text-4xl mb-3">{icon}</div>
      <h3 className="font-medium text-dark">{name}</h3>
      <p className="text-sm text-gray-500 mt-1">{count}</p>
    </Link>
  )
}
