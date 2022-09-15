import React, { useState, useContext } from 'react'
import styles from './index.module.scss'
import postService from '../../../../API/services/postService'
import { useFetching } from '../../../../utils/hooks/useFetching'
import { PostsContext } from '../../../../utils/context/posts'

import { Form } from '../../../../components/form/form'
import { Error } from '../../../../components/UI/Error'
import { Textarea } from '../../../../components/form/Textarea'
import { Button } from '../../../../components/UI/Button'
import { Input } from '../../../../components/form/Input'
import { Loader } from '../../../../components/UI/Loader'

const CreatePost = () => {
  const {createPost} = useContext(PostsContext)
  
  const [form, setForm] = useState({title: '', author: '', content: '', picture: ''})

  const [handleSubmit, submitEror, submitting] = useFetching( async () => {
    const createdPost = await postService.create(form)
    const newPost = {
      ...form, 
      _id: createdPost._id,
      picture: createdPost.picture
    }
    createPost(newPost)
    setForm({title: '', author: '', content: '', picture: ''})
  })
  
  const onSubmit = (e) => {
    e.preventDefault()
    handleSubmit()
  }

  if (submitting) return <Loader />

  return (
    <Form 
      onSubmit={onSubmit} 
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
      { submitEror &&
        <Error>{submitEror}</Error>
      }
    </Form>
  )
}

export { CreatePost }
