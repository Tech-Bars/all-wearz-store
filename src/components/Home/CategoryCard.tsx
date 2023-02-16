import React from 'react'

interface CategoryData {
    image: string,
    title: string,
}

const CategoryCard:React.FC<CategoryData> = ({image, title}:CategoryData) => {
  return (
    <div className="w-[10rem] md:w-[18rem] lg:w-[18rem] h-auto flex flex-col justify-center items-center gap-2 shrink-0">
        <img src={image} alt="shirt" className="h-[85%] w-full" />
        <h3 className="font-bold uppercase">{title}</h3>
    </div>
  )
}

export default CategoryCard