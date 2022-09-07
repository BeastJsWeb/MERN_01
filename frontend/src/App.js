import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './style/App.scss'
import { useFetch } from './hooks/useFetch'

import { NotFoundPage } from './pages/NotFound'
import { Homepage } from './pages/Homepage'
import { Layout } from './components/Layout'
import { Loader } from './components/UI/Loader'
import { Posts } from './pages/Posts'

const App = () => {

  const {data, loading} = useFetch('/api/posts/')
  
  const dataWithPreload = loading ? <Loader /> : (data ? <Posts data={data} /> : '')

  console.log(data)
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index path='/' element={<Homepage />} />
          <Route path='posts' element={ dataWithPreload } />
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export { App }
