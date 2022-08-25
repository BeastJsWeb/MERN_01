import React, { useState, useRef, useMemo } from "react"
import { Link } from "react-router-dom"
import './index.scss'

import { CreatePostForm } from "./createPostForm"
import { Notification } from "../../components/UI/Notification"
import { PostInList } from "./PostInList"
import { Select } from "../../components/UI/Select"
import { Input } from "../../components/UI/Input"
import { Post } from "./Post"

const Posts = ({children, ...props}) => {

  const [searchQuery, setSearchQuery] = useState('')
  const [postId, setPostId] = useState('')
  const [selectedSort, setSelectedSort] = useState('')
  const formCreate = useRef()
  //const [posts, setPosts] = useState(children)
  
  const handlePost = e => { 
    // send ID
    setPostId(e.currentTarget.id)
    // active post
    let posts = document.querySelectorAll('.column__post')
    posts.forEach(post => {
      post.classList.remove('visited')
    })
    e.currentTarget.classList.add('visited')
    // close form
    formCreate.current.open = false
  }
  
  const handleOpenForm = () => setPostId('')
  
  /*const sortedPosts = (e) => {
    setSelectedSort(e.target.value)
    //return [...children].sort((a, b) => a[e.target.value].localCompare(b[e.target.value]))
  }*/

  const SearchedPosts = useMemo(() => (
    children.filter(post => {
      if (searchQuery) {
        return post.title.toLowerCase().includes(searchQuery.toLowerCase())
      } 
      return post
    }) 
  ), [searchQuery, children])

  return (
    <section id="posts">
      <p className="home" >
        Go <Link to="/">Home</Link>
      </p>
      <div className="posts__body">

        <section id="posts__list">
          <div className="search">
            <Input 
              type='text'
              maxLength={20}
              value={searchQuery}
              placeholder='Search...'
              onChange={e => setSearchQuery(e.target.value)}
            />
            <Select 
              value={selectedSort}
              defaultValue='Sort'
              onChange={e => setSelectedSort(e.target.value)}
              options={[
                {name: 'by title', value: 'title'},
                {name: 'by author', value: 'author'}
              ]}
            />
          </div>
          <div id="posts__total" >
            Total posts: {SearchedPosts.length}
          </div>
          <div id="list" >
            {SearchedPosts.length
              ? (SearchedPosts.map(postData => (
                  <PostInList 
                    data={postData}
                    id={postData._id} 
                    key={postData._id}
                    onClick={handlePost}
                  />
                )))
              : <Notification>Posts not found</Notification>
            }
          </div>
        </section>

        <section id="posts__item">
          <details 
            ref={formCreate} 
            onClick={handleOpenForm}
          >
            <summary>
              Create new post
            </summary>
            <CreatePostForm 
              setPosts={props.setPosts}
            />
          </details>
          { !postId ? '' : (
              <Post 
                id={postId}
                setPosts={props.setPosts}
              /> 
            )
          }
        </section>

      </div>
    </section>
  )
}

export { Posts }