import React, { FC } from 'react'

const Address:FC = () => {
  return (
    <div className="bg-gray-50 shadow-lg rounded-md border-t">
    <div>
            <h1 className="text-xl p-2 font-sora font-semibold border-b">Address</h1>
    </div>
    <div className="p-2 flex flex-col">
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