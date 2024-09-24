import { PostPanel } from '@/components/posts/post-panel'
import { PostForm } from '@/components/posts/postForm'
import axios from 'axios'
import { Plus } from 'lucide-react'
import React from 'react'

const page = async() => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
  const posts = res.data
  
  return (
    <div className='flex flex-col items-center'>
      <div className='flex justify-center items-center gap-5'>
        <div className='mt-8 text-lg font-semibold tracking-tight lg:text-2xl'>All Posts</div>
        <div className='mt-8'><PostForm /></div>
      </div>
      <PostPanel posts = {posts} />
    </div>
  )
}

export default page