import React from 'react'
import Line from '../assets/Line.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faFacebook,faLinkedin, IconDefinition } from '@fortawesome/free-brands-svg-icons'


const Footer:React.FC = () => {

const icon:IconDefinition[] = [faFacebook, faLinkedin, faEnvelope]


  return (
    <div className="w-full px-5 flex flex-col items-center justify-center bg-[#111827] py-5">
      <div className="flex flex-col w-3/5 items-center justify-center gap-5 relative">
        <h1 className="text-base text-white">NewsLetter</h1>
        <input type="email" 
         className="w-1/2 rounded-2xl bg-[#D9D9D9] p-3"
         placeholder="&#x2709; Your email"
         />
        <button className="transition-all duration-300 delay-100 ease-in-out hover:scale-95 absolute right-[15.5rem] p-1 rounded-md bg-[#111827] text-white">Subscribe</button>
        <div className="text-base text-white flex justify-around w-full">
            <span>ABOUT</span>
            <span>FAQ</span>
            <span>CONTACT</span>
        </div>
      </div>
      <div className="w-full flex justify-between pt-3 items-center">
        <div className="">
            <h1 className="flex gap-3 items-center text-sm text-gray-300">
            &#169;2023 ALL WEARS 
        <img src={Line} alt="Line Icon" /> 
            All Rights Reserved</h1>
        </div>
        <div className="flex gap-10 mr-20">
         {icon.map(icons=>(
          <span className="text-white text-xl">
            <FontAwesomeIcon icon={icons} />
          </span>
         ))}
        </div>
      </div>
    </div>
  )
}

export default Footer;