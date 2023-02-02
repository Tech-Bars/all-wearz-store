import React from 'react'
import shirt from './assets/shirt.jpg'
import pant from './assets/pant.jpg'
import shoes from './assets/shoe.jpg'

const Populardeals:React.FC = () => {
  return (
    <div className="w-full flex gap-5 px-5 mt-10">
           <h1 className=" flex items-center justify-center  text-base text-[32px] bg-[#1F2937]/70 font-semibold absolute w-[311px] h-[58px] left-[1058px] top-[560px]">Popular deals</h1>
      <div className="w-[750px] h-[540px]">
           <img src={pant} alt="img" className="w-full h-full border" />
      </div>
      <div className="flex flex-col gap-5 py-3">
       <div className="w-[350px] h-[252px]">
       <img src={shirt} alt="img" className="w-full h-full" />
       </div>
       <div className="w-[350px] h-[252px]">
       <img src={shoes} alt="img" className="w-full h-full" />
       </div>
      </div>
    </div>
  )
}

export default Populardeals;