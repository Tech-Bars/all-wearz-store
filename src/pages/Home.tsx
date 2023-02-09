import React from 'react'
import { Header } from '../components/Header'
import Categories from '../components/Home/Categories'
import Newarrivals from '../components/Home/Newarrivals'
import Populardeals from '../components/Home/Populardeals'
import Shirts from '../components/Home/Shirts'
import Shoes from '../components/Home/Shoes'
import { Nav } from '../components/Nav'

export const Home = () => {
  return (
    <div>
        <Nav />
        <Header />
        <Categories />
        <Newarrivals />
        <Populardeals />
        <Shirts />
        <Shoes />
    </div>
  )
}
