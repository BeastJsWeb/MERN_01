import React from "react"
import { Route, Routes } from "react-router-dom"
import { PageContainer } from "../index"
import { Homepage } from "../../pages/Homepage"
import { Posts } from "../../pages/Posts"
import { CreatePost } from "../../pages/Posts/pages/CreatePost"
import { Post } from "../../pages/Posts/pages/Post"
import { NotFoundPage } from "../../pages/NotFound"

export const PrivatRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<PageContainer />} >
        <Route index path='/' element={<Homepage />} />
        <Route path="MERN_01/" element={<Homepage />} />
        <Route path='posts' element={<Posts />} >
          <Route path='form' element={<CreatePost />} />
          <Route path='post/:id' element={<Post />} />
        </Route>
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

