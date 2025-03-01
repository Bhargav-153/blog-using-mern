import React from 'react'
import { Card, CardContent } from './ui/card'
import { Badge } from "@/components/ui/badge"
import { useSelector } from 'react-redux'
import { Avatar, AvatarImage } from './ui/avatar'
import { IoCalendarOutline } from "react-icons/io5";





const BlogCard = ({props}) => {
 
  return (
    <Card className='pt-5'>
      <CardContent>
        <div className='flex item-center justify-between'>
          <div className='flex justify-between item-center'>
            <Avatar>
              <AvatarImage src={props.author.avatar || "https://github.com/shadcn.png"}/>
            </Avatar>
            <span>{props.author.name}</span>
          </div>
          {props.author.role === 'admin' &&
            <Badge variant="outline" className="bg-rose-500">Admin</Badge>
          }
        </div>

        <div>features</div>
        <div>
          <p> <IoCalendarOutline />
          <span>date</span>
          </p>
          <h2 className='text-2xl font-bold line-clam-2'>title will be here</h2>
         
        </div>
      </CardContent>
    </Card>
  )
}

export default BlogCard