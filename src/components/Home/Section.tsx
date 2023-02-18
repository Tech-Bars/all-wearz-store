import React from 'react'
import Vector from './assets/Vectorblack.svg'
import ProductCard from './ProductCard'

type Props = {
    sectionName: string,
    products: {}[]
}

const Section:React.FC<Props> = ({ sectionName, products }:Props) => {
  return (
  <div className="w-full px-2 my-4 font-sora flex  flex-col">
    <div className="flex justify-between w-full py-3">
        <h1 className="font-semibold text-2xl text-primary">✨ <span className='underline underline-offset-4'>{sectionName}</span></h1>
        <button className="flex gap-4 items-center font-semibold transition-all duration-300 delay-100 ease-in-out hover:scale-110"> View more <img src={Vector} alt="arrow icon" className="text-base" /></button>
    </div>
    <div className="grid grid-cols-2 gap-5 md:flex lg:flex  md:overflow-x-scroll lg:overflow-x-scroll scroll-smooth scrollbar-hide">
        {products?.map((item:any, index:number) => {
            return <ProductCard
                    key={index}
                    image={item.image}
                    name={item.name}
                    price={item.price}
                    />
        })}
    </div>
  </div>
  )
}

export default Section;