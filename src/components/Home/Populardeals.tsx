import React from 'react'
import shirt from './assets/shirt.jpg'
import pant from './assets/pant.jpg'
import shoes from './assets/shoe.jpg'

const Populardeals:React.FC = () => {
  return (
    <div className="w-full flex gap-5 px-5 pb-20 justify-center rounded-lg">
           <h1 className=" flex items-center justify-center   text-3xl bg-secondary font-semibold absolute w-[311px] h-[68px] left-[1058px] top-[37rem]">Popular deals</h1>
      <div className="w-[750px] h-[540px]">
           <img src={shoes} alt="img" className="w-full h-full" />
      </div>
      <div className="flex flex-col gap-5 py-3">
       <div className="w-[350px] h-[252px]">
       <img src={shirt} alt="img" className="w-full h-full" />
       </div>
       <div className="w-[350px] h-[252px]">
       <img src={pant} alt="img" className="w-full h-full border" />
       </div>
      </div>
    </div>
  )
}

export default Populardeals;