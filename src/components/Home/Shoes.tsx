import React from 'react'
import shoes from './assets/shoe.jpg'
import Vector from './assets/Vectorblack.svg'

const Shoes:React.FC = () => {
  return (
    <div className="w-full px-5 font-sora mb-20">
    <div className="flex justify-between w-full py-3">
            <h1 className="font-semibold text-2xl underline underline-offset-4">Shoes</h1>
            <button className="flex gap-5 items-center font-semibold"> 
              View more 
            <img src={Vector} alt="arrow icon" className="text-base" />
            </button>
    </div>
    <div className="flex gap-5">
        <div className="w-[325px] h-[14.6rem] ">
            <img src={shoes} alt="shoes" className="h-full w-full" />
            <div className="flex flex-col font-medium">
            <span className="">shoe</span>
            <span>Price: $100</span>
            </div>
        </div>
        <div className="w-[325px] h-[14.6rem] ">
            <img src={shoes} alt="shoes" className="h-full w-full" />
            <div className="flex flex-col font-medium">
            <span className="">shoe</span>
            <span>Price: $100</span>
            </div>
        </div>
        <div className="w-[325px] h-[14.6rem] ">
            <img src={shoes} alt="shoes" className="h-full w-full" />
            <div className="flex flex-col font-medium">
            <span className="">shoe</span>
            <span>Price: $100</span>
            </div>
        </div>
        <div className="w-[325px] h-[14.6rem] ">
            <img src={shoes} alt="shoes" className="h-full w-full" />
            <div className="flex flex-col font-medium">
            <span className="">shoe</span>
            <span>Price: $100</span>
            </div>
        </div>
    </div>
  </div>
  )
}

export default Shoes;