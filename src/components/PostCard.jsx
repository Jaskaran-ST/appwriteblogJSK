import React from 'react'
import appwriteService from "../appwrite/configuration"
import {Link} from 'react-router'

function PostCard({$id,title,featuredImage}) {
  return (
    <Link to={`/post/${$id}`}>
        <div className='w-fu;; bg-pink-200 rounded-xl p-4'>
            <div className='w-full justify-center mb-4'>
                <img src={appwriteService.getFilePreview(featuredImage)} alt={title} />
            </div>
            <h2 className='text-xl font-bold'>{title}</h2>
        </div>
    </Link>
  )
}

export default PostCard