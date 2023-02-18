import React from 'react'
import CartItem from '../components/CartItem';
import { TbDiscount2 } from "react-icons/tb"
import { MdShoppingCart } from "react-icons/md"
import { GiMoneyStack } from "react-icons/gi"

const Cart: React.FC = () => {
  return (
    <div>
        <div className='flex flex-col-reverse lg:w-[75%] md:w-[90%] lg:flex-row md:flex-row gap-6 justify-between p-2 md:p-4 lg:p-4 m-auto mt-14 md:mt-[5rem] lg:mt-[5rem]'>
            <div className='md:w-[80%] lg:w-[80%] flex flex-col gap-4 shadow-lg p-4'>
                <h2 className='flex items-center gap-4'> 
                    <MdShoppingCart />
                    SHOPPING CART: 
                </h2>
                <hr className='w-full'/>
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
            </div>
            <div className='flex flex-col gap-6'>
                <div className='flex flex-col gap-2 bg-secondary p-4 md:px-4 lg:px-4 md:py-6 lg:py-6 shadow-lg'>
                    <h2 className='flex items-center gap-4'>
                        <GiMoneyStack />
                        Summary
                    </h2>
                    <hr className='py-2'/>
                    <h3 className='text-xl'>Total: <b className='text-xl px-4'>₦ 75,000</b></h3>
                    <button className='btn-primary'>PAY</button>
                </div>
                <div className='flex flex-col gap-2 bg-secondary px-4 py-6 shadow-lg'>
                    <h2 className='flex items-center gap-4'> 
                        <TbDiscount2 /> 
                        Promo Code
                    </h2>
                    <hr className='py-2'/>
                    <i className='text-center'>Apply Promo Code for Discounts </i>
                    <input type="text" placeholder='Promo Code'/>
                    <input type="submit" value="Apply"/>
                </div>
            </div>
        </div>
        <div className='text-center my-6'>
            <button className='btn-primary w-max'>CONTINUE SHOPPING</button>
        </div>

    </div>
  )
}

export default Cart