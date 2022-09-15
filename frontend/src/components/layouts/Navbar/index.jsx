import React, { useContext } from "react"
import { NavLink } from "react-router-dom"
import cl from './index.module.scss'
import { AuthContext } from "../../../utils/context/auth"

import { Logo } from "../../UI/logo"
import { Button } from "../../UI/Button"

const Navbar = () => {
  const {setIsAuth} = useContext(AuthContext)

  return (
    <header id={cl.component} >
      <div>
        <NavLink to='/' >
          <Logo />
        </NavLink>
        <NavLink to='/posts' >Posts</NavLink>
      </div>
      <Button onClick={() => setIsAuth(false)} >Exit</Button>
    </header>
  )
}

export { Navbar }