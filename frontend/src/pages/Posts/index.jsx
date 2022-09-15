import React, { useState, useMemo } from "react"
import cl from './index.module.scss'
import { useFetching } from "../../utils/hooks/useFetching"
import { usePosts } from "../../utils/hooks/usePosts"
import postService from "../../API/services/postService"
import { usePage } from "../../utils/hooks/usePage"
import { getPageCount } from "../../utils/pages"
import { NavLink, Outlet } from "react-router-dom"
import { PostsContext } from "../../utils/context/posts"

import { SearchAndFilter } from "./components/SearchAndFilter"
import { PostsList } from "./components/postsList"
import { Loader } from "../../components/UI/Loader"
import { Error } from "../../components/UI/Error"
import { Pagination } from "../../components/UI/Pagination"
import { HomeLink } from "../../components/UI/homeLink"

const Posts = () => {
  const [filter, setFilter] = useState({ sort: '', query: ''})
  const [posts, setPosts] = useState([])
  const [pageLimit, setPageLimit] = useState(10)
  const [post, setPost] = useState('')

  const [fetchPosts, postsError, isPostsLoading] = useFetching( async () => {
    const posts = await postService.getAll() 
    setPosts(posts)
  })

  useMemo(() => {
    fetchPosts()
  }, [])

  const searchedPosts = usePosts( posts, filter.query, filter.sort )

  const [page, setPage, currentPage] = usePage(searchedPosts, pageLimit)

  const [handleDeletePost, deletePostError, isPostDeliting] = useFetching( async () => {
    await postService.delete(post._id)
    setPost('')
    setPosts(posts.filter(p => p._id !== post._id))
    if (currentPage.length === 1) setPage(page > 1 ? page - 1 : page)
  })

  const pageCount = useMemo(() => {
    return getPageCount(searchedPosts, pageLimit)
  }, [searchedPosts, pageLimit])

  const createPost = newPost => setPosts([...posts, newPost])

  const handleOpenPost = e => { 
    setPost(currentPage.find(p => p._id === e.currentTarget.id))
  }

  return (
    <PostsContext.Provider 
      value={{
        post,
        createPost,
        handleDeletePost,
        deletePostError,
        isPostDeliting
      }} 
    >
      <section id={cl.component}>
        <HomeLink/>
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
              : <>
                <PostsList
                  post={post}
                  onClick={handleOpenPost}
                  currentPage={currentPage}
                  searchedPosts={searchedPosts}
                />
                <Pagination 
                  page={page}
                  changePage={setPage}
                  pagesCount={pageCount} 
                />
                </>
            }
          </section>
          <section id={cl.item}>
            <NavLink to='form' >Create new post</NavLink>
             <Outlet />
          </section>
        </div>
      </section>
    </PostsContext.Provider>
  )
}

export { Posts }