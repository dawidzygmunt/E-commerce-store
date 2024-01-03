import getBillboard from "@/actions/get-billboard"
import Container from "@/components/ui/container"
import Billboard from "@/components/billboard"
import getProduct from "@/actions/get-products"
import ProductList from "@/components/product-list"

export const revalidate = 0

const HomePage = async () => {
  const products = await getProduct({ isFeatured: true })
  const billboard = await getBillboard("c9a023d1-e5da-41c7-b762-63fca5ba9a39");
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
