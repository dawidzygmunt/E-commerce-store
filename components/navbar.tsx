import Link from "next/link"
import Container from "./ui/container"
import MainNav from "./main-nav"
import getCategories from "@/actions/get-categoreis"
import NavbarActions from "./navbarActions"

const Navbar = async () => {
  const categories = await getCategories()

  return (
    <div className='border-b py-2'>
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-1/6 items-center">
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
            <p className="font-bold text-xl">STORE</p>
          </Link>
          <MainNav data={categories}/>
          <NavbarActions />
        </div>
      </Container>
    </div>
  )
}

export default Navbar