import { Heart, MessageCircle, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
export type Post = {
  id: number
  author: string
  title: string
  body: string
  likes: number
  comments: number
  shares: number
}
const randomNumberGenerator = () => Math.floor(Math.random() * 100)

export async function PostPanel({posts}: {posts: Post[]}) {
  return (
    <div className="w-full mx-auto space-y-4 mt-12">
      {posts.map((post) => (
        <Link href={`/posts/${post.id}`} key={post.id} className="">
        <Card key={post.id} className="bg-white my-4">
          <CardHeader className="flex flex-row items-center gap-4">
            <div>
              <h3 className="font-semibold">{post.title}</h3>
            </div>
          </CardHeader>
          <CardContent>
            <p>{post.body}</p>
          </CardContent>
          <Separator />
          <CardFooter className="justify-between">
            <Button variant="ghost" size="sm">
              <Heart className="w-4 h-4 mr-2" />
              {randomNumberGenerator()}
            </Button>
            <Button variant="ghost" size="sm">
              <MessageCircle className="w-4 h-4 mr-2" />
              {randomNumberGenerator()}
            </Button>
            <Button variant="ghost" size="sm">
              <Share2 className="w-4 h-4 mr-2" />
              {randomNumberGenerator()}
            </Button>
          </CardFooter>
        </Card>
        </Link>
      ))}
    </div>
  )
}