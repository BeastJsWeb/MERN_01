import React from 'react'
import cl from './index.module.scss'
import { Outlet } from 'react-router-dom'
import { Navbar } from '../Navbar'

const PageContainer = () => {
  return (
    <div id={cl.component} >
      <Navbar />
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </div>
  )
}

export { PageContainer }
