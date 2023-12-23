import React from 'react'
import shirt from '../Home/assets/shirt.jpg'
import { FaGreaterThan, FaLessThan } from 'react-icons/fa'

const Item: React.FC = () => {
    return (
        <div className="w-full flex lg:flex-row flex-col lg:gap-0 gap-5 pb-20 ">
            <div className="lg:w-1/2 w-full flex  lg:justify-center items-center relative">
                <span className="absolute cursor-pointer right-14 p-4 text-primary bg-secondary transition-all duration-300 delay-75 ease-in-out hover:scale-105 hover:bg-primary hover:text-white">
                    <FaGreaterThan />
                </span>
                <span className="absolute cursor-pointer left-14 p-4 text-primary bg-secondary rounded-sm transition-all duration-300 delay-75 ease-in-out hover:scale-105 hover:bg-primary hover:text-white">
                    <FaLessThan />
                </span>
                <img src={shirt} alt="shirt img" className="lg:w-3/5 " />
            </div>
            <div className="lg:w-1/2 w-full flex lg:justify-center  items-center">
                <div className="lg:w-3/5 px-3 pt-3 pb-10 flex flex-col gap-5 bg-secondary rounded-md">
                    <span className="flex text-2xl gap-2">
                        <h2 className="cursor-pointer">{`Home >`}</h2>
                        <h2 className="cursor-pointer">{`Shrts >>`}</h2>
                        <h2 className="underline underline-offset-2">Fannel</h2>
                    </span>
                    <span>
                        <h1>ITEM NAME</h1>
                    </span>
                    <span className="flex gap-2 items-center ">
                        <h2 className="text-base text-black font-medium ">
                            Price:
                        </h2>
                        <h2 className="text-sm text-black font-medium">$100</h2>
                    </span>
                    <span className="flex gap-3 ">
                        <img
                            src={shirt}
                            alt="shirt img"
                            className="w-12 h-12 cursor-pointer transition-all duration-300 delay-75 ease-in-out hover:scale-110"
                        />
                        <img
                            src={shirt}
                            alt="shirt img"
                            className="w-12 h-12 cursor-pointer  transition-all duration-300 delay-75 ease-in-out hover:scale-110"
                        />
                        <img
                            src={shirt}
                            alt="shirt img"
                            className="w-12 h-12 cursor-pointer  transition-all duration-300 delay-75 ease-in-out hover:scale-110"
                        />
                    </span>
                    <span className="flex flex-col w-full gap-1 ">
                        <h2 className="text-xl underline underline-offset-4 text-black capitalize font-medium">
                            Item description
                        </h2>
                        <p className="text-xs w-4/5 text-black">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation
                        </p>
                    </span>
                    <div className="flex gap-5 items-center">
                        <span className="flex  w-1/5">
                            <span className=" flex items-center justify-center bg-gray-50 w-12 h-12">
                                1
                            </span>
                            <span className="flex flex-col gap-2 w-10">
                                <button className="h-5 w-full rounded-tr-md bg-primary hover:bg-primary/80 text-white">
                                    +
                                </button>
                                <button className="h-5 w-full rounded-br-md bg-primary hover:bg-primary/80 text-white">
                                    -
                                </button>
                            </span>
                        </span>
                        <button className="bg-primary p-3 rounded-md text-white transition-all duration-300 delay-100 ease-in-out hover:scale-110">
                            ADD TO CART
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item
