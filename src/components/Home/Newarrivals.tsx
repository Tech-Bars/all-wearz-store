import React from 'react'
import shirt from './assets/awl-shirts (1).jpg'
import Vector from './assets/Vector.svg'

const Newarrivals: React.FC = () => {
    return (
        <div
            className="my-4 p-5 h-[30rem] md:h-[368px] lg:h-[368px] flex flex-col md:flex-row lg:flex-row w-full gap-5 justify-center bg-[#D9D9D9] items-center font-sora rounded-md m-auto"
            data-aos="zoom-in-up"
        >
            <div className="w-full md:w-1/2 lg:w-1/2 flex-col flex gap-5 text-center items-center md:text-left lg:text-left">
                <h2 className="text-dark font-semibold text-2xl lg:text-3xl md:text-3xl">
                    New Arrivals
                </h2>
                <span className="font-medium text-2xl">
                    Discover Amazing Deals
                </span>
                <button className="btn-primary flex items-center gap-3 transition-all duration-300 delay-100 ease-in-out hover:scale-110 bg-primary rounded-md text-base text-white w-max">
                    Shop Now
                    <img src={Vector} alt="vector" data-aos="zoom-in-up" />
                </button>
            </div>
            <div className="w-1/2 h-full">
                <img
                    src={shirt}
                    alt=""
                    className="w-full h-full lg:w-[80%] md:w-[80%] m-auto"
                />
            </div>
        </div>
    )
}

export default Newarrivals
