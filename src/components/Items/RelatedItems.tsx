import React from 'react'
import shirt from '../Home/assets/shirt.jpg'

const RelatedItems:React.FC = () => {
  return (
    <div className="w-full flex flex-col gap-3">
      <h2 className="text-black font-medium text-2xl">Related Porducts</h2>
        <div className="flex flex-row gap-5 overflow-x-scroll scroll-smooth scrollbar-hide">
          <img src={shirt} alt="shirt img" className="w-72 h-72 rounded-lg cursor-pointer"/>
          <img src={shirt} alt="shirt img" className="w-72 h-72  rounded-lg cursor-pointer"/>
          <img src={shirt} alt="shirt img" className="w-72 h-72  rounded-lg cursor-pointer"/>
          <img src={shirt} alt="shirt img" className="w-72 h-72  rounded-lg cursor-pointer"/>
          <img src={shirt} alt="shirt img" className="w-72 h-72  rounded-lg cursor-pointer"/>
          <img src={shirt} alt="shirt img" className="w-72 h-72  rounded-lg cursor-pointer"/>
        </div>
    </div>
  )
}

export default RelatedItems;