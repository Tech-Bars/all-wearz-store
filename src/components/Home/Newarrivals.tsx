import React from 'react'
import shirt from './assets/shirt.jpg'
import Vector from './assets/Vector.svg'

const Newarrivals:React.FC = () => {
  return (
    <div className="px-5 mb-20 flex w-full gap-5 justify-center bg-[#D9D9D9] h-[368px] items-center font-sora">
      
      <div className=" w-2/5 flex-col flex gap-5">
            <h1 className=" font-semibold text-4xl">New Arrivals</h1>
            <span className="font-medium text-2xl">Discover Amazing Deals</span>
            <button className="flex items-center gap-3 transition-all duration-300 delay-100 ease-in-out hover:scale-110 bg-blue py-3 px-5 text-base text-white rounded-sm w-[162px]">
              Shop Now 
            <img src={Vector} alt="vector"  />
            </button>
      </div>
      <div className=" ml-20 w-[500px] h-[360px]">
            <img src={shirt} alt="" className="h-full w-full" />
      </div>
    </div>
  )
}

export default Newarrivals;