'use client'
import Comment from '@/components/posts/comments'
import PostCard from '@/components/posts/post-card'
import { useParams } from 'next/navigation'
import React from 'react'

const page = () => {
  const params = useParams()
  const { id } = params
  return (
    <div>
      <PostCard params={{id: id as string}} />
      <Comment params={{id: id as string}}/>
    </div>
  )
}

export default page