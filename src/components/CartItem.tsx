import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { PropsWithChildren } from 'react'
import dummy from "../components/Home/assets/shirt.jpg";
import { MdDeleteForever } from "react-icons/md"


const CartItem: React.FC<PropsWithChildren> = () => {
  return (
    <div className='flex flex-wrap border-bottom border-b py-2 justify-between  gap-4 items-center'>
        <div className='flex gap-4 items-center'>
            <img src={dummy} alt="" className='w-32 h-auto'/>
            <div className='leading-8'>
                <h4>Beach Wear</h4>
                <p><span className='text-gray-500'>Color:</span> Red</p>
                <p className='cursor-pointer flex items-center'>
                    <MdDeleteForever  className='text-lg text-red-600'/>
                    &nbsp;Remove
                </p>
            </div>
        </div>
        <div className='flex flex-col gap-4'>
            <h4>Quantity</h4>
            <div className='flex gap-2 items-center'>
                <p className='bg-primary w-max py-1 px-2 cursor-pointer'>
                    -
                </p>
                <b>1</b>
                <p className='bg-primary w-max py-1 px-2 cursor-pointer'>
                    +
                </p>
            </div>
            <b>₦ 15,000</b>
        </div>
    </div>
  )
}

export default CartItem;