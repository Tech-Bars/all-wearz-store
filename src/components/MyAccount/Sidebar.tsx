import React, { FC } from 'react'

const Sidebar:FC = () => {
  return (
    <div className="border-r bg-gray-50 flex flex-col justify-between  w-[35%] ">
        
       <div className="flex flex-col px-10 py-5 gap-5">
          <span className="">My Account</span>
          <span className="">Orders</span>
          <span className="">Account Management</span>
       </div>
        <div>
          <h1 className="text-xl flex justify-center items-center border-t-2  text-primary p-2">LOGOUT</h1>
        </div>
       </div>
    
  )
}

export default Sidebar