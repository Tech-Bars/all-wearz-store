import React from 'react'

interface CategoryData {
    image: string,
    title: string,
}

const CategoryCard:React.FC<CategoryData> = ({image, title}:CategoryData) => {
  return (
    <div className="w-full md:w-[18rem] lg:w-[18rem] h-[16rem] md:h-[20rem] lg:h-[20rem] flex flex-col justify-center items-center gap-2 shrink-0 m-auto">
        <img src={image} alt="shirt" className="h-[85%] w-full" />
        <h3 className="font-bold uppercase">{title}</h3>
    </div>
  )
}

export default CategoryCard