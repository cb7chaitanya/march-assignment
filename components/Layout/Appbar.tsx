import React from 'react'
import Logo from './Logo'
import Menu from './Menu'

const Appbar = () => {
  return (
    <div className='border-b px-8 py-2 border-b-white w-full text-white flex justify-between'>
        <Logo />
        <Menu />
    </div>
  )
}

export default Appbar