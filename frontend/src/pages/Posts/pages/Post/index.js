import React, { useContext } from 'react'
import cl from './index.module.scss'
import { PostsContext } from '../../../../utils/context/posts'

import { Error } from '../../../../components/UI/Error'
import { Button } from '../../../../components/UI/Button'
import { Loader } from '../../../../components/UI/Loader'

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
            <Button onClick={handleDeletePost} >
              Delete
            </Button>
            { deletePostError &&
              <Error>{deletePostError}</Error>
            }
          </div>
          </>
      }
    </div>
  )
}

export { Post }