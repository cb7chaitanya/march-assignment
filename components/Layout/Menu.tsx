import Link from 'next/link'
import React from 'react'

const Menu = () => {
  return (
    <div className='text-white flex gap-4 text-sm lg:text-lg tracking-tighter font-semibold'>
        <Link href={'/posts'}>
            <div>
                Posts
            </div>
        </Link>
        <Link href={'/gallery'}>
            Gallery
        </Link>
        <Link href={'/user'}>
            <div>
                Users
            </div>
        </Link>
    </div>
  )
}

export default Menu