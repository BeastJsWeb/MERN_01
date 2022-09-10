import React from 'react'
import cl from './index.module.scss'

const PostInList = ({post, ...props}) => {
  
  return (
    <div 
      {...props}
      id={post._id} 
      className={cl.component}
    >
      <div>
        {post.title}
      </div>
      <div>
        Author: {post.author}
      </div>
    </div> 
  )
}

export { PostInList }
