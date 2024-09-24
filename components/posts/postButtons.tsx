'use client'
import { Button } from '@/components/ui/button'
import axios from 'axios'
import { Delete, Edit } from 'lucide-react'
import { PostForm } from './postForm'

const PostButtons = ({params}: {params: {id: string}}) => {
    const { id } = params
    const handleDelete = async() => {
        await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
        alert("Post deleted successfully")
    }
    return (
        <div className="flex gap-4">
            <PostForm type="edit" />
            <Button variant="outline" className="w-8 h-8 p-0" onClick={handleDelete}>
                <Delete className="w-4 h-4" />
            </Button>
        </div>
    )
}

export default PostButtons