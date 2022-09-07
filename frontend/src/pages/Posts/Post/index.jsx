import React, { useState } from 'react'
import styles from './index.module.scss'
import axios from 'axios'

import { Notification } from '../../../components/UI/Notification'
import { Button } from '../../../components/UI/Button'
import { Loader } from '../../../components/UI/Loader'

const Post = ({post,deletePost}) => { 

  const [message, setMessage] = useState('')
  const [load, setLoad] = useState(false)
  // delete post
  const handleDelete = () => {
    setLoad(true)
    axios.delete(`/api/posts/${post._id}`)
    .then(() => {
      deletePost(post._id)
    })
    .catch(e => {
      console.log(e)
      setMessage(`warning`)
      setTimeout(() => setMessage(''), 1000)
    })
    .finally(() => setLoad(false))
  }
  
  if (load) return <Loader />

  return (
    <>
      {!post ? '' :
        <div
          id={post._id} 
          className={styles.component} 
        >
          <p>
            {post.title}
          </p>
          { !post.picture ? '' : (
            <img 
              alt='post'
              width={150}
              height={100}
              src={`/${post.picture}`}  
            /> )
          }
          <div>
            Author: {post.author}
          </div>
          <div>
            Content: <br/>{post.content}
          </div>
          <div>
            <Button onClick={handleDelete} >
              Delete
            </Button>
            <Notification message={message} />
          </div>
        </div>
      }
    </>
  )
}

export { Post }