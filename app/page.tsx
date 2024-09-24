import Hero from '@/components/Landing/Hero'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col items-center h-screen'>
      <div className='h-full'>
        <Hero />
      </div>
    </div>
  )
}

export default page