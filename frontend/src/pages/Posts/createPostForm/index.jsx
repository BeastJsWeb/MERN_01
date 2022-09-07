import React, { useState } from 'react'
import styles from './index.module.scss'
import axios from 'axios'

import { Notification } from '../../../components/UI/Notification'
import { Textarea } from '../../../components/UI/Textarea'
import { Button } from '../../../components/UI/Button'
import { Input } from '../../../components/UI/Input'

const CreatePostForm = (props) => {
  
  const [form, setForm] = useState({title: '', author: '', content: '', picture: ''})
  const [message, setMessage] = useState('')
  // create post
  const handleSubmit = (e) => {
    e.preventDefault()
    const config = { 
      headers: {'Content-Type': 'multipart/form-data'}
    }
    axios.post('/api/posts', {...form}, config)
    .then(({data}) => {
      setMessage('created')   // succes message
      const newPost = {
        ...form, 
        _id: data._id,
        picture: data.picture
      }
      props.create(newPost)
      setTimeout(() => setMessage(''), 1000)  // succes message
      setForm({title: '', author: '', content: '', picture: ''}) // clear input
    })
    .catch(e => {
      console.log(e)
      setMessage('warning')
      setTimeout(() => setMessage(''), 3000)
    })
  }

  return (
    <form 
      autoComplete='off'
      className={styles.component}
      onSubmit={handleSubmit} 
    >
      <Input 
        required
        type='text'
        value={form.title}  
        maxLength={100} 
        placeholder='Title'
        onChange={e => setForm({...form, title: e.target.value})}
      />
      <Input 
        required
        type='text'
        value={form.author}   
        maxLength={50} 
        placeholder="Author"
        onChange={e => setForm({...form, author: e.target.value})}
      />
      <Textarea 
        required
        type='text'
        value={form.content}  
        maxLength={200}
        placeholder="Content"
        onChange={e => setForm({...form, content: e.target.value})}
      />
      <Input
        type='file'
        loaded={form.picture.name}
        placeholder='Picture'
        onChange={e => setForm({...form, picture: e.target.files[0]})}
      />
      <Button>Send</Button>
      <Notification message={message}/>
    </form>
  )
}

export { CreatePostForm }
