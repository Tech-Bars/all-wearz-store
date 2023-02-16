import React from 'react'
import shirt from './assets/shirt.jpg'
import pant from './assets/pant.jpg'
import shoes from './assets/shoe.jpg'

const Populardeals:React.FC = () => {
  return (
    <div className="w-full md:h-[30rem] lg:h-[30rem] flex gap-2 md:gap-5 lg:gap-5 md:px-5 lg:px-5 my-12 justify-center items-center rounded-lg relative" data-aos="zoom-in-up">
        <h1 className="p-2 md:p-4 rounded-md text-default text-lg lg:text-3xl md:text-3xl bg-primary md:font-semibold lg:font-semibold absolute right-[10%] top-[45%]">
          Popular Deals
        </h1>
        <div className="md:w-1/2 lg:w-1/2 h-[20rem] md:h-[28rem] lg:h-[28rem]">
          <img src={shoes} alt="img" className="w-full h-full" />
        </div>
        <div className="md:w-1/4 lg:w-1/4 flex flex-col justify-center gap-2">
          <div className='h-[10rem] md:h-[14rem] lg:h-[14rem]'>
            <img src={shirt} alt="img" className="h-full w-full" />
          </div>
          <div className='h-[10rem] md:h-[14rem] lg:h-[14rem]'>
            <img src={pant} alt="img" className="h-full w-full" />
          </div>
        </div>
    </div>
  )
}

export default Populardeals;