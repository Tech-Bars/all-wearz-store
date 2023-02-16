import React from 'react'
import { Header } from '../components/Header'
import Categories from '../components/Home/Categories'
import Newarrivals from '../components/Home/NewArrivals'
import Populardeals from '../components/Home/Populardeals'
import { shirtsList, shoesList } from '../fakeData'
import Section from '../components/Home/Section'

export const Home = () => {
  return (
    <div className='w-[97%] md:w-[85%] lg:w-[75%] m-auto'>
        <Header />
        <div className='bg-headerImage bg-cover bg-center h-[300px] md:h-[400px] lg:h-[400px] rounded-lg'>
        </div>
        <Categories />
        <Newarrivals />
        <Section
          sectionName='Shirts'
          products={shirtsList}
        />
        <Populardeals />
        <Section
          sectionName='Shoes'
          products={shoesList}
        />
    </div>
  )
}
