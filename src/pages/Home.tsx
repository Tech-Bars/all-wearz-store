import React from 'react'
import Categories from '../components/Home/Categories'
import Populardeals from '../components/Home/Populardeals'
import Newarrivals from '../components/Home/Newarrivals'
import Shirts from '../components/Home/Shirts'
import Shoes from '../components/Home/Shoes'
import Footer from '../components/Footer'

export const Home = () => {
  return (
    <div>
        <Categories />
        <Populardeals />
        <Newarrivals />
        <Shirts />
        <Shoes />
        <Footer />
    </div>
  )
}
