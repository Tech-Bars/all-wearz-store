import React, { useState, FC, Dispatch } from 'react'
import { Link } from 'react-router-dom'

import cart from "../assets/cil-cart.svg"
import avatar from "../assets/Avatar.svg"

interface props{
    showAccountModal:boolean
    setShowAccountModal:Dispatch<React.SetStateAction<boolean>>
}

export const Nav:FC<props> =  ({showAccountModal, setShowAccountModal}) => {
    const [showNav, setShowNav] = useState<boolean>(false)

  return (
    <div className='w-screen  bg-gray-50 border-b fixed top-0 right-0 left-0 z-50'>
        <div className='md:w-[90%] lg:w-[75%] m-auto  flex justify-between items-center gap-4 px-4 lg:px-16 md:px-16 py-3'>

        <Link to="/">
            <h3 className='text-center text-[10px] md:text-xl lg:text-xl'><b>ALL WEARZ LUXURY.</b></h3>
        </Link>
        {!showNav 
        && 
        <div className='hidden lg:flex md:flex gap-6'>
            <Link to="/">New Arrivals</Link>
            <Link to="/category/shirts">Shirts</Link>
            <Link to="/category/trousers">Trousers</Link>
            <Link to="/category/shoes">Shoes</Link>
            <Link to="/category/accessories">Accessories</Link>
        </div>
        }

        {showNav 
        &&
        <div className='flex flex-col justify-center items-center fixed md:relative lg:relative left-0 right-0 top-0 min-h-screen md:min-h-0 lg:min-h-0 bg-primary z-50 lg:flex-row md:flex-row gap-6'>
            {/* close menu bar icon  */}
            <h1 onClick={() => setShowNav(false)}>
                <svg className='absolute top-5 right-5 md:hidden lg:hidden' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.0304 5.02983L18.9697 3.96924L12.0001 10.9389L5.03041 3.96924L3.96973 5.02983L10.9394 11.9995L3.96973 18.9692L5.03041 20.0298L12.0001 13.0602L18.9697 20.0298L20.0304 18.9692L13.0607 11.9995L20.0304 5.02983Z" fill="#fff"/>
                </svg>
            </h1>
            <Link to="/" className='text-white'>New Arrivals</Link>
            <Link to="/category/shirts" className='text-white'>Shirts</Link>
            <Link to="/category/trousers" className='text-white'>Trousers</Link>
            <Link to="/category/shoes" className='text-white'>Shoes</Link>
            <Link to="/category/accessories" className='text-white'>Accessories</Link>
        </div>
        }

        <div className='hidden md:flex lg:flex justify-center items-center gap-6'>
            <Link to="/cart">
                <img src={cart} alt="cart icon" />
            </Link>
            <span>
                <img onClick={()=>{setShowAccountModal(!showAccountModal)}} src={avatar} alt="avatar" />
            </span>
        </div>

        {/* show toggler on mobile */}
        <div className='flex items-center justify-center gap-4 md:hidden lg:hidden'>
            <div className='flex justify-center items-center gap-2'>
                <Link to="/cart">
                    <img src={cart} alt="cart icon" className='w-5'/>
                </Link>
                <Link to="/account">
                    <img src={avatar} alt="avatar" className='w-5'/>
                </Link>
            </div>
            <h1 onClick={() => setShowNav(true)}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.25 5.25H7.5V6.75H23.25V5.25Z" fill="black"/>
                    <path d="M19.875 11.25H4.125V12.75H19.875V11.25Z" fill="black"/>
                    <path d="M16.5 17.25H0.75V18.75H16.5V17.25Z" fill="black"/>
                </svg>
            </h1>
        </div>
        </div>
    </div>
  )
}
