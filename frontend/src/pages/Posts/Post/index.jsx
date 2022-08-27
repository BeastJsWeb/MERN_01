import React, { useState, useEffect } from 'react'
import styles from './index.module.scss'
import axios from 'axios'

import { Notification } from '../../../components/UI/Notification'
import { Button } from '../../../components/UI/Button'

const Post = (props) => { 

  const [data, setData] = useState('')
  const [message, setMessage] = useState('')
  //open post in list
  useEffect(() => {
    fetch(`/api/posts/${props.id}`)
      .then(res => res.json())
      .then(data => setData(data))
      .catch((e) => console.log(e))
    console.log(props.id)
  }, [props.id])
  // delete post
  const handleDelete = () => {
    axios.delete(`/api/posts/${props.id}`)
    .then(() => {
      setData('')
      props.setPosts(Date.now()) //update posts list
    })
    .catch(e => {
      console.log(e)
      setMessage(`warning`)
      setTimeout(() => setMessage(''), 1000)
    })
  }

  return (
    <div
      id={data._id} 
      className={styles.component} 
    >
      <p>
        {data.title}
      </p>
      { !data.picture ? '' : (
        <img 
          alt='post'
          width={150}
          height={100}
          src={`/${data.picture}`}  
        />)}
      <div>
        Author: {data.author}
      </div>
      <div>
        Content: <br/>{data.content}
      </div>
      <div>
        <Button onClick={handleDelete} >
          Delete
        </Button>
        <Notification className={message} />
      </div>
    </div>
  )
}

export { Post }