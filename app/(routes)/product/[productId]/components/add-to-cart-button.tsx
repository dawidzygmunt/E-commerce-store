"use client"

import React from 'react'
import Button from '@/components/ui/button'
import { ShoppingCart } from 'lucide-react'
import useCart from '@/hooks/use-cart'
import { MouseEventHandler } from 'react'
import { Product } from '@/types'

interface ProductCardProps {
  data: Product
}

const AddToCartButton: React.FC<ProductCardProps> = ({
  data
}) => {

  const cart = useCart()

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    cart.addItem(data)
  }

  return (
    <Button 
      className='flex items-center gap-x-2 text-white'
      onClick={onAddToCart}
    >
      Add to Cart
      <ShoppingCart />
    </Button>
  )
}

export default AddToCartButton