import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import cart from "../assets/cil-cart.svg"
import avatar from "../assets/Avatar.svg"

export const Nav = () => {
    const [showNav, setShowNav] = useState<boolean>(false)

  return (
    <div className='bg-primary flex justify-between items-center gap-4 px-4 lg:px-16 md:px-16 py-2'>
        <div>
            <h3 className='text-center'>ALL WEARZ LUXURY</h3>
        </div>
        {!showNav 
        && 
        <div className='hidden lg:flex md:flex gap-6'>
            <Link to="/">New</Link>
            <Link to="/category/shirts">Shirts</Link>
            <Link to="/category/trousers">Trousers</Link>
            <Link to="/category/shoes">Shoes</Link>
            <Link to="/category/accessories">Accessories</Link>
        </div>
        }

        {showNav 
        &&
        <div className='flex flex-col justify-center items-center fixed md:relative lg:relative left-0 right-0 top-0 min-h-screen md:min-h-0 lg:min-h-0 bg-primary lg:flex-row md:flex-row gap-6'>
            {/* close menu bar icon */}
            <h1 onClick={() => setShowNav(false)}>
                <svg className='absolute top-5 right-5 md:hidden lg:hidden' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.0304 5.02983L18.9697 3.96924L12.0001 10.9389L5.03041 3.96924L3.96973 5.02983L10.9394 11.9995L3.96973 18.9692L5.03041 20.0298L12.0001 13.0602L18.9697 20.0298L20.0304 18.9692L13.0607 11.9995L20.0304 5.02983Z" fill="black"/>
                </svg>
            </h1>
            <Link to="/">New</Link>
            <Link to="/category/shirts">Shirts</Link>
            <Link to="/category/trousers">Trousers</Link>
            <Link to="/category/shoes">Shoes</Link>
            <Link to="/category/accessories">Accessories</Link>
            <Link to="/cart" className='md:hidden lg:hidden'>
                <img src={cart} alt="cart icon" />
            </Link>
            <Link to="/account" className='md:hidden lg:hidden'>
                <img src={avatar} alt="avatar" />
            </Link>
        </div>
        }

        {!showNav 
        &&
        <div className='flex justify-center items-center gap-6'>
            <Link to="/cart">
                <img src={cart} alt="cart icon" />
            </Link>
            <Link to="/account">
                <img src={avatar} alt="avatar" />
            </Link>
        </div>
        }

        {/* show menu icon */}
        <div className='md:hidden lg:hidden' onClick={() => setShowNav(true)}>
            <h1>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.25 5.25H7.5V6.75H23.25V5.25Z" fill="black"/>
                    <path d="M19.875 11.25H4.125V12.75H19.875V11.25Z" fill="black"/>
                    <path d="M16.5 17.25H0.75V18.75H16.5V17.25Z" fill="black"/>
                </svg>
            </h1>
        </div>
    </div>
  )
}
