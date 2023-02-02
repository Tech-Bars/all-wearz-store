import React from 'react'
import Line from '../assets/Line.svg'

const Footer:React.FC = () => {
  return (
    <div className="w-full px-5 flex flex-col items-center justify-center bg-[#111827] py-5">
      <div className="flex flex-col w-3/5 items-center justify-center gap-5">
        <h1 className="text-base text-white">NewsLetter</h1>
        <input type="text"  className="w-1/2"/>
        <div className="text-base text-white flex justify-around w-full">
            <span>ABOUT</span>
            <span>FAQ</span>
            <span>CONTACT</span>
        </div>
      </div>
      <div className="w-full">
        <div className="pt-10">
            <h1 className="flex gap-3 items-center text-sm text-white">
            &#169;2023 ALL WEARS 
        <img src={Line} alt="Line Icon" /> 
            All Rights Reserved</h1>
        </div>
        <div>

        </div>
      </div>
    </div>
  )
}

export default Footer;