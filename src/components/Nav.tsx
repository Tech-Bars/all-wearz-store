import React from 'react'
import { Link } from 'react-router-dom'

import cart from "../assets/cil-cart.svg"
import avatar from "../assets/Avatar.svg"

export const Nav = () => {
  return (
    <div className='bg-primary flex justify-between items-center gap-4 px-16 py-2'>
        <div>
            <h3>ALL WEARZ LUXURY</h3>
        </div>
        <div className='flex  gap-6'>
            <Link to="/">New</Link>
            <Link to="/category/shirts">Shirts</Link>
            <Link to="/category/trousers">Trousers</Link>
            <Link to="/category/shoes">Shoes</Link>
            <Link to="/category/accessories">Accessories</Link>
        </div>
        <div className='flex justify-center items-center gap-6'>
            <Link to="/cart">
                <img src={cart} alt="cart icon" />
            </Link>
            <Link to="/account">
                <img src={avatar} alt="avatar" />
            </Link>
        </div>
    </div>
  )
}
