import Link from 'next/link'
import React from 'react'
const Logo = () => {
  return (
    <Link href='/'><div className='font-semibold'>
        <span className='text-yellow-400'>P</span>
        <span className='text-white'>M</span>
    </div></Link>
  )
}

export default Logo