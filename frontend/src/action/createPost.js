/*import React, { useState } from 'react'

import CreatePostForm from '../components/createPost/createPostForm'

export default function CreatePost(props) {
  
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [content, setContent] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      let res = await fetch('/api/posts', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title: title, 
          author: author, 
          content: content
        })
      })
      await res.json()
      if (res.ok) {
        setTitle('')
        setAuthor('')
        setContent('')
        setMessage(
          <div className='success' >Post created successfully</div>
        )
      }
    } catch (e) {
      console.log(e)
      setMessage(
        <div className='warning' >Some error occured</div>
      )
    }
  }
  return (
    <CreatePostForm {...props}/>
  )
}*/


