import React from 'react'

export const Header = () => {

  return (
    <div className='bg-header bg-contain text-center lg:bg-cover md:bg-cover bg bg-no-repeat bg-center h-[70vh] flex flex-col justify-center items-center'>
        <h1 className='font-bold text-3xl lg:text-8xl md:text-6xl text-primary md:text-extras lg:text-extras shadow-black drop-shadow-lg md:drop-shadow-[0_15px_8px_rgba(0,0,0,0.6)] lg:drop-shadow-[0_20px_10px_rgba(0,0,0,0.6)]'>LIVE YOUR STYLE</h1>
        <h2 className='text-xl lg:text-4xl md:text-4xl tracking-normal md:tracking-widest lg:tracking-widest text-dark drop-shadow-lg '><i>...endless wardrobe glamour</i></h2>
    </div>
  )
}
