import React, { useState, useRef, useMemo } from "react"
import { Link } from "react-router-dom"
import cl from './index.module.scss'
import { useFetching } from "../../hooks/useFetching"
import { usePosts } from "../../hooks/usePosts"
import postService from "../../API/postService"

import { SearchAndFilter } from "./SearchAndFilter"
import { CreatePostForm } from "./createPostForm"
import { PostsList } from "./postsList"
import { Post } from "./Post"
import { Loader } from "../../components/UI/Loader"
import { Error } from "../../components/UI/Error"

const Posts = () => {

  const [filter, setFilter] = useState({ sort: '', query: ''})
  const [posts, setPosts] = useState([])
  const [post, setPost] = useState('')
  const formCreate = useRef()
  const postsList = useRef()

  const [fetchPosts, postsError, isPostsLoading] = useFetching( async () => {
    const posts = await postService.getAll() 
    setPosts(posts)
  })

  const searchedPosts = usePosts( posts, filter.query, filter.sort )
  
  useMemo(() => {
    fetchPosts()
  }, [])
  
  const handleOpenForm = () => {
    setPost('')
    postsList.current.querySelector('.visited')?.classList.remove('visited')
  }

  const handleOpenPost = e => { 
    // open post
    setPost(searchedPosts.find(post => post._id === e.currentTarget.id))
    // active post
    postsList.current.querySelector('.visited')?.classList.remove('visited')
    e.currentTarget.classList.add('visited')
    // close form
    formCreate.current.open = false
  }
  
  const createPost = newPost => {
    return setPosts([...posts, newPost])
  }

  const deletedPost = id => {
    setPost('')
    setPosts(posts.filter(post => post._id !== id))
  }

  return (
    <section id={cl.component}>
      <p className={cl.home} >
        Go 
        <Link to="/">Home</Link>
      </p>
      <div className={cl.body}>
        <section id={cl.list}>
          <SearchAndFilter 
            filter={filter}
            setFilter={setFilter}
          />
          { postsError &&
            <Error>{postsError}</Error>
          }
          { isPostsLoading
            ? <Loader />
            : <PostsList
                ref={postsList}
                onClick={handleOpenPost}
                searchedPosts={searchedPosts}
              />
          }
        </section>
        <section id={cl.item}>
          <details 
            onClick={handleOpenForm}
            ref={formCreate} 
          >
            <summary>Create new post</summary>
            <CreatePostForm createPost={createPost} />
          </details>
          {post 
            ? <Post 
                deletedPost={deletedPost}
                post={post}
              /> 
            : ''
          }
        </section>
      </div>
    </section>
  )
}

export { Posts }