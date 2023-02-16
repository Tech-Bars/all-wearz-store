import React from 'react'
import Line from '../assets/Line.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faFacebook,faLinkedin, IconDefinition } from '@fortawesome/free-brands-svg-icons'


const Footer:React.FC = () => {

const icon:IconDefinition[] = [faFacebook, faLinkedin, faEnvelope]


  return (
    <div className="w-full px-5 pt-12 mt-20 flex flex-col items-center justify-center bg-[#111827] py-5">
      <h1 className='text-primary py-8 font-bold tracking-wide'>
        ALL WEARZ LUXURY
      </h1>
      <div className="w-full flex flex-col md:flex-row lg:flex-row justify-between pt-3 items-center">
        <div className="">
          <h1 className="flex gap-3 items-center text-sm text-gray-300">
            &copy; 2023 All Wears Luxury
            <img src={Line} alt="Line Icon" /> 
            All Rights Reserved
          </h1>
        </div>
        <div className="flex gap-4 mt-4 justify-center items-center w-max ">
         {icon.map(icons => (
          <h1 className="text-white text-center m-auto text-2xl">
            <FontAwesomeIcon icon={icons} />
          </h1>
         ))}
        </div>
      </div>
    </div>
  )
}

export default Footer;