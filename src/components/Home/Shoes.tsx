import React from 'react'
import shoes from './assets/shoe.jpg'
import Vector from './assets/Vectorblack.svg'
import ProductCard from './ProductCard'

const Shoes:React.FC = () => {
  return (
    <div className="w-full font-sora flex  flex-col my-4">
    <div className="flex justify-between w-full py-3">
        <h1 className="font-semibold text-2xl underline underline-offset-4">Shoes</h1>
        <button className="flex gap-4 items-center font-semibold transition-all duration-300 delay-100 ease-in-out hover:scale-110"> View more <img src={Vector} alt="arrow icon" className="text-base" /></button>
    </div>
    <div className="flex flex-row gap-5 overflow-x-scroll scroll-smooth scrollbar-hide">
        <ProductCard 
            image={shoes}
            name="Unbranded"
            price={100}
        />
        <ProductCard 
            image={shoes}
            name="Unbranded"
            price={100}
        />
        <ProductCard 
            image={shoes}
            name="Unbranded"
            price={100}
        />
        <ProductCard 
            image={shoes}
            name="Unbranded"
            price={100}
        />
        <ProductCard 
            image={shoes}
            name="Unbranded"
            price={100}
        />
        <ProductCard 
            image={shoes}
            name="Unbranded"
            price={100}
        />
    </div>
  </div>
  )
}

export default Shoes;