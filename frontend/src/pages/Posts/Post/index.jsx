import React from 'react'
import styles from './index.module.scss'
import postService from '../../../API/postService'
import { useFetching } from '../../../hooks/useFetching'

import { Error } from '../../../components/UI/Error'
import { Button } from '../../../components/UI/Button'
import { Loader } from '../../../components/UI/Loader'

const Post = ({post, deletedPost}) => { 

  const [handleDeletePost, postsError, isPostDeliting] = useFetching( async () => {
    await postService.delete(post._id)
    deletedPost(post._id)
  })

  if (!post) return ''

  return (
    <div id={post._id} className={styles.component} >
      { isPostDeliting
        ? <Loader />
        : <>
          <p>{post.title}</p>
          { post.picture 
            ? <img src={`/${post.picture}`} alt='post' width={150} height={100} />
            : ''
          }
          <div>Author: {post.author}</div>
          <div>Content: <br/>{post.content}</div>
          <div>
            <Button onClick={handleDeletePost} >
              Delete
            </Button>
            { postsError &&
              <Error>{postsError}</Error>
            }
          </div>
          </>
      }
    </div>
  )
}

export { Post }