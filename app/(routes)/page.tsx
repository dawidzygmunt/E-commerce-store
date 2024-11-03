import getBillboard from "@/actions/get-billboard"
import Container from "@/components/ui/container"
import Billboard from "@/components/billboard"
import getProduct from "@/actions/get-products"
import ProductList from "@/components/product-list"
import { CircleCategories } from "@/components/circle-categories"

export const revalidate = 0

const HomePage = async () => {
  const products = await getProduct({ isFeatured: true })
  const billboard = await getBillboard(
    process.env.BILLBOARD_ID || "bdf1f83f-f724-4ae1-9389-fa974ceff7f9"
  )

  return (
    <Container>
      <div className="space-y-8 pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <CircleCategories />
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  )
}

export default HomePage
