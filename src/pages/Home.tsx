import React from 'react'
import { Header } from '../components/Header'
import Categories from '../components/Home/Categories'
import Newarrivals from '../components/Home/Newarrivals'
import Populardeals from '../components/Home/Populardeals'
import Shirts from '../components/Home/Shirts'
import Shoes from '../components/Home/Shoes'
import { Nav } from '../components/Nav'
import storeImage from "../assets/all-wearz.jpeg"

export const Home = () => {
  return (
    <div className='w-[97%] md:w-[85%] lg:w-[75%] m-auto'>
        <Header />
        <div className='bg-headerImage bg-cover bg-center h-[300px] md:h-[400px] lg:h-[400px] rounded-lg'>
        </div>
        <Categories />
        <Newarrivals />
        <Populardeals />
        <Shirts />
        <Shoes />
    </div>
  )
}
