import React, { forwardRef } from "react"
import cl from './index.module.scss'
import { PostInList } from "./PostInList"

const PostsList = forwardRef(({searchedPosts, onClick}, ref) => {

  if (!searchedPosts) return ''

  return (
    <>
      <div id={cl.total} >
        { searchedPosts.length
          ? <>Total posts: {searchedPosts.length}</>
          : <div>Posts not found</div>
        }
      </div>
      <div ref={ref} id={cl.totalList} >
        { searchedPosts.length
          ? searchedPosts.map(post => (
              <PostInList 
                post={post} 
                key={post._id}
                onClick={onClick}
              />
            ))
          : ''
        }
      </div>
    </>
  )
})

export { PostsList }