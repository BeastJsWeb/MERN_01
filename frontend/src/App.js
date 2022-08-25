import React, {useState, useEffect} from 'react'
import './style/App.scss'
import { Routes, Route } from 'react-router-dom'

import { NotFoundPage } from './pages/NotFound'
import { Homepage } from './pages/Homepage'
import { Layout } from './components/Layout'
import { Loader } from './components/UI/Loader'
import { Posts } from './pages/Posts'

const App = () => {

  const [data, setData] = useState(null)
  const [posts, setPosts] = useState(null)

  useEffect(() => {
    fetch(`/api/posts/`)
      .then(res => res.json())
      .then(data => setData(data))
      .catch((e) => console.log(e))
  }, [posts])

  const dataWithPreload = !data ? <Loader /> : <Posts children={data} setPosts={setPosts} />
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
