import axios from "axios"
import { Card, CardContent, CardHeader } from "../ui/card"

const Comment = async({params}: {params: {id: string}}) => {
    const comments = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}/comments`)
    return (
        <div>
            <div className="text-lg font-semibold tracking-tight lg:text-2xl">
                Comments
            </div>
            {comments.data.map((comment: any) => (
                    <Card key={comment.id} className="bg-white my-4">
                        <CardHeader className="flex flex-row items-center gap-4">
                            <div>
                                <h3 className="font-semibold">{comment.name}</h3>
                                <h3 className="font-semibold text-sm text-zinc-400">{comment.email}</h3>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p>{comment.body}</p>
                        </CardContent>
                    </Card>
            ))}
        </div>
    )
}

export default Comment