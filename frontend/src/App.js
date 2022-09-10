import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './style/App.scss'

import { NotFoundPage } from './pages/NotFound'
import { Homepage } from './pages/Homepage'
import { Layout } from './components/Layout'
import { Posts } from './pages/Posts'

const App = () => {
  
  return (
    <Routes>
      <Route path='/' element={<Layout />} >
        <Route index path='/' element={<Homepage />} />
        <Route path='posts' element={<Posts />} />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export { App }
