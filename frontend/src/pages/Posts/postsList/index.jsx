import React, { forwardRef, useState } from "react"
import cl from './index.module.scss'
import { getPageCount } from "../../../utils/pages"
import { usePagination } from "../../../hooks/usePagination"

import { Pagination } from "../../../components/UI/Pagination"

const PostsList = forwardRef(({searchedPosts, onClick, post}, ref) => {

  const [limit, setLimit] = useState(10)
  const [pagesCount] = usePagination(searchedPosts, getPageCount, limit)

  if (!searchedPosts) return ''

  return (
    <>
      <div id={cl.total} >
        { searchedPosts.length
          ? <>Total posts: {searchedPosts.length}</>
          : <div>Posts not found</div>
        }
      </div>
      <div ref={ref} id={cl.totalList} >
        { searchedPosts.length
          ? searchedPosts.map(p => 
              <div 
                id={p._id} 
                key={p._id}
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
            )
          : ''
        }
      </div>
      <Pagination pagesCount={pagesCount} />
    </>
  )
})

export { PostsList }