import React from 'react'

export const Header = () => {

  return (
    <div className='bg-headerImage bg-cover text-center bg bg-no-repeat bg-center h-[80vh] flex flex-col justify-center items-center'>
        <h1 className='font-bold text-4xl px-4 lg:text-8xl  md:text-6xl text-default outline outline-primary  shadow-black drop-shadow-lg md:drop-shadow-[0_15px_8px_rgba(0,0,0,0.6)] lg:drop-shadow-[0_20px_10px_rgba(0,0,0,0.6)]'>
          LIVE YOUR STYLE
        </h1>
        <h2 className='text-2xl my-4 lg:text-4xl md:text-4xl tracking-normal md:tracking-widest lg:tracking-widest text-default drop-shadow-lg '><i>...endless wardrobe glamour</i></h2>
    </div>
  )
}
