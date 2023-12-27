import getBillboard from "@/actions/get-billboard"
import Container from "@/components/ui/container"
import Billboard from "@/components/billboard"
import getProduct from "@/actions/get-products"
import ProductList from "@/components/product-list"

export const revalidate = 0

const HomePage = async () => {
  const products = await getProduct({ isFeatured: true })
  const billboard = await getBillboard("cd561220-e8d6-4a95-a0f0-cd1904bebbdb");
  console.log(billboard);


  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products}/>
        </div>
      </div>
    </Container>
  )
}

export default HomePage
