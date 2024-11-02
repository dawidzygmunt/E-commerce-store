import getCategories from "@/actions/get-categories"

export const CircleCategories = async () => {
  const categories = await getCategories()
  return (
    <div className="w-full flex px-4 lg:px-20 gap-14 lg:gap-20 justify-center">
      {categories.map((category) => (
        <div
          key={category.id}
          className="rounded-full bg-neutral-200 w-20 h-20 flex items-center justify-center text-center"
        >
          {category.name}
        </div>
      ))}
    </div>
  )
}
