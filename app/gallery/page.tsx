import { Card, CardContent, CardHeader } from '@/components/ui/card'
import axios from 'axios'
import React from 'react'

const page = async() => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/photos')
  return (
    <div className='flex flex-wrap gap-2'>
        {res.data.map((photo: any) => (
            <Card key={photo.id} className="bg-white my-4 w-full">
                <CardHeader>
                    <h3 className="font-semibold">{photo.title}</h3>
                </CardHeader>
                <CardContent>
                    <img src={photo.url} alt="Photo" className="w-full h-64 object-cover"/>
                </CardContent>
            </Card>
        ))}
    </div>
  )
}

export default page