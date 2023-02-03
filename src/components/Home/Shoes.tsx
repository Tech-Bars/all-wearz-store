import React from 'react'
import shoes from './assets/shoe.jpg'
import Vector from './assets/Vectorblack.svg'

const Shoes:React.FC = () => {
  return (
    <div className="w-full px-5 font-sora mb-20">
    <div className="flex justify-between w-full py-3">
            <h1 className="font-semibold text-2xl underline underline-offset-4">Shoes</h1>
            <button className="flex gap-5 items-center font-semibold transition-all duration-300 delay-100 ease-in-out hover:scale-110"> View more <img src={Vector} alt="arrow icon" className="text-base" /></button>
    </div>
    <div className="flex flex-row gap-5 overflow-x-scroll  scrollbar-hide">
        <div className="w-[20rem] h-50vh shrink-0 ">
            <img src={shoes} alt="shoe img" className="h-[70%] w-full" />
            <div className="flex flex-col font-medium">
            <span className="">shoe</span>
            <span>Price: $100</span>
            </div>
        </div>
        <div className="w-[20rem] h-50vh shrink-0">
            <img src={shoes} alt="shoe img" className="h-[70%] w-full" />
            <div className="flex flex-col font-medium">
            <span className="">shoe</span>
            <span>Price: $100</span>
            </div>
        </div>
        <div className="w-[20rem] h-50vh shrink-0">
            <img src={shoes} alt="shoe img" className="h-[70%] w-full" />
            <div className="flex flex-col font-medium">
            <span className="">shoe</span>
            <span>Price: $100</span>
            </div>
        </div>
        <div className="w-[20rem] h-50vh shrink-0">
            <img src={shoes} alt="shoe img" className="h-[70%] w-full" />
            <div className="flex flex-col font-medium">
            <span className="">shoe</span>
            <span>Price: $100</span>
            </div>
        </div>
        <div className="w-[20rem] h-50vh shrink-0 ">
            <img src={shoes} alt="shoe img" className="h-[70%] w-full" />
            <div className="flex flex-col font-medium">
            <span className="">Shoe</span>
            <span>Price: $100</span>
            </div>
        </div>
    </div>
  </div>
  )
}

export default Shoes;