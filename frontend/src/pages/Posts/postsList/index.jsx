import React, { forwardRef } from "react"
import styles from './index.module.scss'
import { usePosts } from "../../../hooks/usePosts"

import { Notification } from "../../../components/UI/Notification"
import { PostInList } from "./PostInList"

const PostsList = forwardRef(({posts, filter,...props}, ref) => {

  const searchedPosts = usePosts( posts, filter.query, filter.sort )
  
  const handleOpenPost = e => { 
    // open post
    props.setPost(searchedPosts.find(post => post._id === e.currentTarget.id))
    // active post
    ref.current.querySelector('.visited')?.classList.remove('visited')
    e.currentTarget.classList.add('visited')
    // close form
    props.formCreate.current.open = false
  }

 return (
  <>
    <div id={styles.total} >
      Total posts: {searchedPosts.length}
    </div>
    <div
      ref={ref} 
      id={styles.totalList}  
    >
      {searchedPosts.length
        ? (searchedPosts.map(post => (
            <PostInList 
              data={post} 
              key={post._id}
              onClick={handleOpenPost}
            />
          )))
        : <Notification>Posts not found</Notification>
      }
    </div>
  </>
 )
})

export { PostsList }