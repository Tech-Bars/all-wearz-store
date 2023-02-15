import React from 'react'

interface CategoryData {
    image: string,
    title: string,
}

const CategoryCard:React.FC<CategoryData> = ({image, title}:CategoryData) => {
  return (
    <div className="w-[20rem] flex flex-col justify-center items-center gap-2 h-[14.6rem] shrink-0">
        <img src={image} alt="shirt" className="h-[85%] w-full" />
        <h3 className="font-bold uppercase">{title}</h3>
    </div>
  )
}

export default CategoryCard