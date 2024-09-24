'use client'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import axios from "axios"
import { Edit, Plus } from "lucide-react"
import { useParams } from "next/navigation"
import { useState } from "react"

export function PostForm({type}: {type?: string}) {
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const params = useParams()
    const { id } = params
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
        if(type === 'edit'){
          const response = await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, {title, body})
          alert("Post updated successfully!")
          console.log(response);
          alert("Post created successfully!");
        } else {
          const response = await axios.post("https://jsonplaceholder.typicode.com/posts/api/posts", { title, body, userId: 1 });
          console.log(response);
          alert("Post created successfully!");
        }
      } catch (error) {
        console.error(error);
        alert("Error creating post!");
      }
  }
  return (
    <Dialog>
      <DialogTrigger asChild className="text-black">
        {type === 'edit' ? <Button variant="outline"><Edit className="w-4 h-4" /></Button> : <Button variant="outline"><Plus className="w-4 h-4" /></Button>}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-black">{type === 'edit' ? 'Edit Post' : 'Create Post'}</DialogTitle>
          <DialogDescription>
            {type === 'edit' ? 'Fill in your details to edit a post' : 'Fill in your details to create a post'}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="title" className="text-right text-black">
              Title
            </Label>
            <Input
              id="title"
              defaultValue="Title..."
              className="col-span-3 text-black"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="body" className="text-right text-black">
              Content
            </Label>
            <Input
              id="body"
              defaultValue="content..."
              className="col-span-3 text-black"
              onChange={(e) => setBody(e.target.value)}
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">{type === 'edit' ? 'Save Changes' : 'Create Post'}</Button>
        </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
