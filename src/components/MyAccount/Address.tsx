import React, { FC } from 'react'
import Edit from './assets/Edit.svg'

const Address:FC = () => {
  return (
    <div className="bg-gray-50 shadow-lg rounded-md ">
    <div className="flex justify-between items-center px-1 border-b ">
            <h1 className="text-xl p-2 font-sora font-semibold ">Address</h1>
            <img src={Edit} alt="Edit Icon" className="cursor-pointer w-8 h-8 p-1 transition-all duration-200 ease-in-out hover:scale-105"/>
    </div>
    <div className="p-2 flex flex-col">
        <span>
            <h1 className="text-base font-medium text-primary">Default Address</h1>
        </span>
        <span>
            <h2 className="text-sm font-sora text-black ">Firstname Lastname</h2>
        </span>
        <span>
            <h2 className="text-sm font-sora  text-black ">202 opposite university of maiduguri</h2>
        </span>
        <span>
            <h2 className="text-sm font-sora  text-black ">Maiduguri, Borno</h2>
        </span>
        <span>
            <h2 className="text-sm font-sora  text-black ">123-456-8765</h2>
        </span>
    </div>

</div>
  )
}

export default Address