import React from 'react'
import { Card, CardContent } from './ui/card'
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarImage } from "./ui/avatar";
import { IoCalendarOutline } from "react-icons/io5";
import moment from 'moment'
import { Link } from 'react-router-dom';
import { RouteBlogDetails } from '@/helpers/RouteName';
import usericon from '@/assets/images/user.png'
// import { Avatar } from './ui/avatar'
// import { AvatarImage } from '@radix-ui/react-avatar'





const BlogCard = ({ props }) => {
  // if (!props || !props.category || !props.slug) {
  //   return null; // or some fallback UI
  // }

  return (
    <Link to={RouteBlogDetails(props.category.slug, props.slug)}>
    <Card className='pt-5'>
      <CardContent >
        <div className='flex item-center justify-between '>
          <div className='flex justify-between item-center text-xl gap-2 font-bold ' >
            <Avatar>
              <AvatarImage src={props.author?.avatar || usericon} />
            </Avatar>
            <span>{props.author?.name || "Unknown"}</span>
          </div>
          {props.author?.role === 'admin' &&
            <Badge variant="outline" className="bg-rose-500">Admin</Badge>
          }
        </div>

        <div className=' my-2 '>
          <img src={props.featuredImage} className='rounded ' />
        </div>
        <div>
          <p className='flex item-center gap-2 mb-2'> 
            <IoCalendarOutline />
            <span>{moment(props.createdAt).format('DD-MM-YYYY')}</span>
          </p>
          <h2 className='text-2xl font-bold line-clam-2'>{props.title}</h2>

        </div>
      </CardContent>
    </Card>
    </Link>
    
  )
}

export default BlogCard


