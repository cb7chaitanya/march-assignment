import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import {  Heart, MessageCircle, Share2 } from 'lucide-react'
import React from 'react'
import axios from 'axios'
import PostButtons from './postButtons'

const PostCard = async({params}: {params: {id: string}}) => {
  const { id } = params
  const post = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
  const comments = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)

  const randomNumberGenerator = () => Math.floor(Math.random() * 100)
  return (
    <div>
        <Card key={post.data.id} className="bg-white my-4">
          <CardHeader className="flex flex-row items-center gap-4">
            <div>
              <h3 className="font-semibold">{post.data.title}</h3>
            </div>
            <div>
              <PostButtons params={params} />
            </div>
          </CardHeader>
          <CardContent>
            <p>{post.data.body}</p>
          </CardContent>
          <Separator />
          <CardFooter className="justify-between">
            <Button variant="ghost" size="sm">
              <Heart className="w-4 h-4 mr-2" />
              {randomNumberGenerator()}
            </Button>
            <Button variant="ghost" size="sm">
              <MessageCircle className="w-4 h-4 mr-2" />
              {comments.data.length}
            </Button>
            <Button variant="ghost" size="sm">
              <Share2 className="w-4 h-4 mr-2" />
              {randomNumberGenerator()}
            </Button>
          </CardFooter>
        </Card>
    </div>
  )
}

export default PostCard