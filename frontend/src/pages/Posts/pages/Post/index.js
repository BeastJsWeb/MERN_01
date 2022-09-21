import React, { useContext } from 'react'
import cl from './index.module.scss'
import { PostsContext } from '../../../../utils/index'
import { Error, SubmitButton, Loader } from '../../../../components/index'

const Post = () => { 
  const {post, handleDeletePost, deletePostError, isPostDeliting} = useContext(PostsContext)

  if (!post) return ''

  return (
    <div id={post._id} className={cl.component} >
      { isPostDeliting
        ? <Loader />
        : <>
          <p>{post.title}</p>
          { post.picture &&
            <img src={`/${post.picture}`} alt='post' width={150} height={100} />
          }
          <div>Author: {post.author}</div>
          <div>Content: <br/>{post.content}</div>
          <div>
            <SubmitButton onClick={handleDeletePost} >
              Delete
            </SubmitButton>
            { deletePostError &&
              <Error>{deletePostError.message}</Error>
            }
          </div>
          </>
      }
    </div>
  )
}

export { Post }