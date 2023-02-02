import React from 'react'
import Categories from '../components/Home/Categories'
import Populardeals from '../components/Home/Populardeals'
import Newarrivals from '../components/Home/Newarrivals'

export const Home = () => {
  return (
    <div>
        <Categories />
        <Populardeals />
        <Newarrivals />
    </div>
  )
}
