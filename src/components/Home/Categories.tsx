import React from 'react'
import shirt from './assets/awl-shirts (1).jpg'
import pant from './assets/awl-pant (3).jpg'
import shoes from './assets/awl-shoe.jpg'
import assesories from './assets/awl-cap.jpg'
import CategoryCard from './CategoryCard'

const categoryData = [
    {
        image: shirt,
        title: 'Shirts',
    },
    {
        image: pant,
        title: 'Trousers',
    },
    {
        image: shoes,
        title: 'Shoes',
    },
    {
        image: assesories,
        title: 'Assessories',
    },
]

const Categories: React.FC = () => {
    return (
        <div className="font-sora my-4" data-aos="zoom-in-up">
            <h2 className="font-semibold my-4 text-xl lg:text-3xl md:text-3xl ">
                Shop by Categories:
            </h2>
            <div
                className="w-full grid grid-cols-2 md:flex lg:flex gap-5 justify-between items-center overflow-x-scroll  scrollbar-hide scroll-smooth"
                data-aos="flip-up"
            >
                {categoryData.map((item, key) => {
                    return (
                        <CategoryCard image={item.image} title={item.title} />
                    )
                })}
            </div>
        </div>
    )
}

export default Categories
