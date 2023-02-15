import React from 'react'
import shirt from './assets/shirt.jpg'
import pant from './assets/pant.jpg'
import shoes from './assets/shoe.jpg'
import assesories from './assets/assesories.jpg'
import CategoryCard from './CategoryCard'

const categoryData = [
  {
    image: shirt,
    title: "Shirts"
  },
  {
    image: pant,
    title: "Trousers"
  },
  {
    image: assesories,
    title: "Assessories"
  },
  {
    image: shoes,
    title: "Shoes"
  },
]

const Categories:React.FC = () => {
  return (
    <div className="font-sora my-4">
            <h2 className="font-semibold my-4 text-extras">Shop by Categories:</h2>
      <div  className="w-full flex gap-5 justify-between items-center overflow-x-scroll  scrollbar-hide scroll-smooth">
        {categoryData.map((item, key) => {
          return <CategoryCard 
                  image={item.image}
                  title={item.title}
                  />
        })}
      </div>
       
    </div>
  )
}

export default Categories;