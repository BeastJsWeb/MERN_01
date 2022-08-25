import React from 'react'
import logo from '../../logo.svg'
import { NavLink, Outlet } from 'react-router-dom'

import './header.scss'
import './main.scss'
import './footer.scss'

const Layout = () => {
  return (
    <>
      <header>
        <NavLink to='/'>
          <img src={logo} className="App-logo" width={50} height={50} alt="logo" />
        </NavLink>
        <NavLink to='/posts'>Posts</NavLink>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>footer 2022</footer>
    </>
  )
}

export { Layout }
