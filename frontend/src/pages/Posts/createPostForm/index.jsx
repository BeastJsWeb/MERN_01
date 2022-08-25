import React, { useState } from 'react'
import './index.scss'
import axios from 'axios'

import { Notification } from '../../../components/UI/Notification'
import { Textarea } from '../../../components/UI/Textarea'
import { Button } from '../../../components/UI/Button'
import { Input } from '../../../components/UI/Input'

const CreatePostForm = (props) => {
  
  const [form, setForm] = useState({ title: '', author: '', content: '' })
  const [fileIsLoad, setFileIsLoad] = useState(null)
  const [message, setMessage] = useState('')
  // create post
  const handleSubmit = async (e) => {
    e.preventDefault()
    const fd = new FormData()
    fd.append('picture', fileIsLoad)
    axios.post('/api/posts', {
      title: form.title, 
      author: form.author, 
      content: form.content
    })
    .then(() => {
      props.setPosts(Date.now()) //update posts list
      setForm({ title: '', author: '', content: '' }) // clear input
      setMessage('created')   // succes message
      setTimeout(() => setMessage(''), 1000)  // succes message
    })
    .catch(e => {
      console.log(e)
      setMessage('warning')
      setTimeout(() => setMessage(''), 3000)
    })

    /*if (fileIsLoad) {
      const fd = new FormData()
      fd.append('files', fileIsLoad, fileIsLoad.name)
      axios.post('/api/posts', fd)
      .then(res => {
        console.log(res)
        setFileIsLoad(null)
      })
      .catch(e => {
        console.log(e)
      })
    }*/

    try {
      /*let res = await fetch('/api/posts', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: form.title, 
          author: form.author, 
          content: form.content
        })
      })
      await res.json()*/
      

      
      /*const formData = new FormData()
      formData.append('image', fileIsLoad, fileIsLoad.name)
      let resFile = await fetch('/api/posts', {
        method: 'POST',
        headers: {
          'content-type': 'multipart/form-data'
        },
        body: JSON.stringify({
          files: {picture: formData}
        })
      })
      await console.log(resFile)
      //await resFile.json()*/
      
    } catch (e) {
      
    }
  }

  return (
    <form onSubmit={handleSubmit} >
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
        name='picture'
        onChange={e => setFileIsLoad(e.target.files[0])}
      />
      <Button>Send</Button>
      <Notification className={message}/>
    </form>
  )
}

export { CreatePostForm }
