import React, { useState, useContext } from "react"
import cl from './style.module.scss'
import { AuthContext } from "../../utils/context/auth"

import { Form } from "../../components/form/form"
import { Input } from "../../components/form/Input"
import { Button } from "../../components/UI/Button"
import { Logo } from "../../components/UI/logo"

const Login = () => {
  const {setIsAuth} = useContext(AuthContext)
  const [form, setForm] = useState({login: '', password: ''})

  const login = e => {
    e.preventDefault()
    setIsAuth(true)
  }

  return (
    <div id={cl.component} >
      <Logo />
      <Form onSubmit={login} >
        <Input 
          placeholder='Login' 
          type='text' 
          value={form.login} 
          onChange={e => setForm({...form, login: e.target.value})}
        />
        <Input 
          placeholder='Password' 
          type='password' 
          value={form.password} 
          onChange={e => setForm({...form, password: e.target.value})}
        />
        <Button >Войти</Button>
      </Form>
    </div>
  )
}

export { Login }