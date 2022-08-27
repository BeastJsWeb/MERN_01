import React, { useState } from 'react'
import styles from './index.module.scss'
import axios from 'axios'

import { Notification } from '../../../components/UI/Notification'
import { Textarea } from '../../../components/UI/Textarea'
import { Button } from '../../../components/UI/Button'
import { Input } from '../../../components/UI/Input'

const CreatePostForm = (props) => {
  
  const [form, setForm] = useState({ title: '', author: '', content: '', picture: null })
  const [message, setMessage] = useState('')
  // create post
  const handleSubmit = (e) => {
    e.preventDefault()

    axios.post('/api/posts', {
        title: form.title, 
        author: form.author, 
        content: form.content,
        picture: form.picture
      }, { headers: {
        'Content-Type': 'multipart/form-data'
    }})
    .then(() => {
      setMessage('created')   // succes message
      props.setPosts(Date.now()) //update posts list
      setTimeout(() => setMessage(''), 1000)  // succes message
      setForm({ title: '', author: '', content: '', picture: null }) // clear input
    })
    .catch(e => {
      console.log(e)
      setMessage('warning')
      setTimeout(() => setMessage(''), 3000)
    })
  }

  return (
    <form 
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
        placeholder='Picture'
        onChange={e => setForm({...form, picture: e.target.files[0]})}
      />
      <Button>Send</Button>
      <Notification className={message}/>
    </form>
  )
}

export { CreatePostForm }
