import React, { useContext } from "react"
import { NavLink } from "react-router-dom"
import cl from './index.module.scss'
import { AuthContext } from "../../../utils/index"
import { Logo, SubmitButton } from "../../index"

const Navbar = () => {
  const {setLoggedIn} = useContext(AuthContext)

  const handleExit = () => {
    setLoggedIn(false)
    localStorage.removeItem('token')
  }

  return (
    <header id={cl.component} >
      <div>
        <NavLink to='/' >
          <Logo />
        </NavLink>
        <NavLink to='/posts' >Posts</NavLink>
      </div>
      <SubmitButton onClick={handleExit} >Logout</SubmitButton>
    </header>
  )
}

export { Navbar }