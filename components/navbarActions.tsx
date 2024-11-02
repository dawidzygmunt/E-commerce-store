"use client"

import { useEffect, useState } from "react"
import { ShoppingBag, ShoppingCart } from "lucide-react"

import Button from "./ui/button"
import useCart from "@/hooks/use-cart"
import { useRouter } from "next/navigation"

const NavbarActions = () => {
  const [isMounted, setisMounted] = useState(false)

  useEffect(() => {
    setisMounted(true)
  }, [])

  const router = useRouter()
  const cart = useCart()

  if (!isMounted) {
    return null
  }

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button
        onClick={() => router.push("/cart")}
        className="flex items-center rounded-full bg-transparent px-4 py-2 relative"
      >
        <ShoppingCart size={20} color="black" />
        <span className="ml-2 text-[11px] font-bold text-white bg-blue-500 w-4 h-4 rounded-full flex items-center justify-center absolute top-0 right-2">
          {cart.items.length}
        </span>
      </Button>
    </div>
  )
}

export default NavbarActions
