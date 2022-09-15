import React from "react"
import { NavLink } from "react-router-dom"
import cl from './index.module.scss'

const PostsList = ({searchedPosts, onClick, post, currentPage}) => {

  if (!searchedPosts) return ''

  return (
    <div className={cl.component} >
      <div id={cl.total} >
        { searchedPosts.length
          ? <>Total posts: {searchedPosts.length}</>
          : <div>Posts not found</div>
        }
      </div>
      <div id={cl.totalList} >
        { searchedPosts.length
          ? currentPage.map(p => 
              <NavLink to={`post/${p._id}`} key={p._id} >
                <div 
                  id={p._id} 
                  onClick={onClick}
                  className={
                    p === post ? [cl.post, cl.active].join(' ') : cl.post
                  }
                >
                  <div>
                    {p.title}
                  </div>
                  <div>
                    Author: {p.author}
                  </div>
                </div>
              </NavLink> 
            )
          : ''
        }
      </div>
    </div>
  )
}

export { PostsList }