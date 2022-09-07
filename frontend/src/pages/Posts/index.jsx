import React, { useState, useRef } from "react"
import { Link } from "react-router-dom"
import styles from './index.module.scss'

import { SearchAndFilter } from "./SearchAndFilter"
import { CreatePostForm } from "./createPostForm"
import { PostsList } from "./postsList"
import { Post } from "./Post"

const Posts = ({data}) => {

  const [filter, setFilter] = useState({ sort: '', query: ''})
  const [posts, setPosts] = useState(data)
  const [post, setPost] = useState('')
  const formCreate = useRef()
  const postsList = useRef()
  
  const handleOpenForm = () => {
    setPost('')
    postsList.current.querySelector('.visited')?.classList.remove('visited')
  }
  
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const deletedPost = (id) => {
    setPosts(posts.filter(post => post._id !== id))
    setPost('')
  }

  return (
    <section id={styles.component}>
      <p className={styles.home} >
        Go <Link to="/">Home</Link>
      </p>
      <div className={styles.body}>
        <section id={styles.list}>
          <SearchAndFilter 
            filter={filter}
            setFilter={setFilter}
          />
          <PostsList
            formCreate={formCreate}
            setPost={setPost}
            filter={filter}
            ref={postsList}
            posts={posts}
          />
        </section>
        <section id={styles.item}>
          <details 
            onClick={handleOpenForm}
            ref={formCreate} 
          >
            <summary>
              Create new post
            </summary>
            <CreatePostForm create={createPost} />
          </details>
          { !post ? '' : (
              <Post 
                delete={deletedPost}
                deleted={setPost}
                post={post}
              /> 
            )
          }
        </section>
      </div>
    </section>
  )
}

export { Posts }