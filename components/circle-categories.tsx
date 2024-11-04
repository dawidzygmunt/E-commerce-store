import getCategories from "@/actions/get-categories"
import getProduct from "@/actions/get-products"
import Image from "next/image"
import Link from "next/link"

export const CircleCategories = async () => {
  const categories = await getCategories()
  const products = await getProduct({ isFeatured: true })
  return (
    <div className="w-full flex px-4 lg:px-20 gap-14 lg:gap-20 justify-center pb-4">
      {categories.map((category) => {
        const categoryProducts = products.filter(
          (product) => product.category.id === category.id
        )
        return (
          <Link href={`/category/${category.id}`} key={category.id}>
            <div className="flex flex-col justify-center items-center">
              <div className="rounded-full bg-neutral-200 w-20 h-20 flex items-center justify-center text-center">
                <Image
                  src={category.imageUrl}
                  alt={category.name}
                  width={40}
                  height={40}
                />
              </div>
              <span className="font-semibold mt-1">{category.name}</span>
              <span className="text-xs text-neutral-500 font-semibold">
                {categoryProducts.length} products
              </span>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
