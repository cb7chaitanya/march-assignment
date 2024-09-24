import { Card, CardContent, CardHeader } from '@/components/ui/card'
import axios from 'axios'
import { Building, Globe, Home, Mail, Phone, User } from 'lucide-react'
import React from 'react'
const page = async() => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users')
    const users = res.data
  return (
    <div className='flex flex-col items-center'>
        {users.map((user: any) => (
            <Card key={user.id} className="bg-white my-4 w-full">
                <CardHeader>
                    <h3 className="font-semibold">{user.name}</h3>
                </CardHeader>
                <CardContent className='flex flex-col'>
                    <div className='text-zinc-400 flex items-center gap-2'><Mail className='w-4 h-4'/>{user.email}</div>
                    <div className='text-zinc-400 flex items-center gap-2'><User className='w-4 h-4'/>{user.username}</div>
                    <div className='text-zinc-400 flex items-center gap-2'><Phone className='w-4 h-4'/>{user.phone}</div>
                    <div className='text-zinc-400 flex items-center gap-2'><Globe className='w-4 h-4'/>{user.website}</div>
                    <div className='text-zinc-400 flex items-center gap-2'><Home className='w-4 h-4'/>
                        {user.address.city}, {user.address.street}, {user.address.suite}, {user.address.zipcode}
                    </div>
                    <div className='text-zinc-400 flex items-center gap-2'><Building className='w-4 h-4'/>
                        {user.company.name}, {user.company.catchPhrase}, {user.company.bs}
                    </div>
                </CardContent>
            </Card>
        ))}
    </div>
  )
}

export default page