import React, { useState, useEffect } from 'react'
import './index.scss'

import { Notification } from '../../../components/UI/Notification'
import { Button } from '../../../components/UI/Button'

const Post = (props) => { 

  const [data, setData] = useState(null)
  const [isDelete, setDelete] = useState('')
  //open post in list
  useEffect(() => {
    fetch(`/api/posts/${props.id}`)
      .then(res => res.json())
      .then(data => setData(data))
      .catch((e) => console.log(e))
    console.log(props.id)
  }, [props.id])
  // delete post
  const deleteRes = async () => {
    try {
      const res = await fetch(`/api/posts/${props.id}`, {method: 'DELETE'})
      if (!res.ok) {
        setDelete(`warning`)
        setTimeout(() => setDelete(''), 1000)
        return
      } 
      await res.json()
      setDelete('')
      setData('')
      props.setPosts(Date.now()) //update posts list
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <>
      {!data ? '' : (
        <div
          id={data._id} 
          className='post' 
        >
          <p>
            {data.title}
          </p>
          { 
            !data.picture ? '' : (
            <img 
              alt='post'
              width={150}
              height={100}
              src={`/${data.picture}`}  
            />)
          }
          <div>
            Author: {data.author}
          </div>
          <div>
            Content: <br/>{data.content}
          </div>
          <div>
            <Button onClick={deleteRes} >
              Delete
            </Button>
            <Notification data={isDelete} />
          </div>
        </div>
      )}
    </>
  )
}

export { Post }