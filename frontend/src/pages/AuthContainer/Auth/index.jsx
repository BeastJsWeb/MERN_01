import React, { useState, useContext } from "react"
import { Form, Input, SubmitButton, Error, Success, Loader } from "../../../components/index"
import { useFetching } from "../../../utils"
import authService from "../../../API/services/authService"
import { AuthContext } from "../../../utils/index"

const Auth = ({newUser}) => {
  const {setLoggedIn} = useContext(AuthContext)
  const [isCreated, setIsCreated] = useState('')
  const [form, setForm] = useState({username: '', password: ''})
  const [fetchUser, isError, isLoading] = useFetching( async () => {
    if (newUser) {
      //registration
      const signUp = await authService.registration(form)
      setIsCreated(signUp)
      setTimeout(() => setIsCreated(''), 3000)
    } else {
      // login
      const auth = await authService.login(form)
      setLoggedIn(true)
      localStorage.setItem('token', auth.token)
    }
    return setForm({username: '', password: ''})
  })

  const handleFetchUser = e => {
    e.preventDefault()
    fetchUser()
  }

  if (isLoading) return <Loader />

  return (
    <Form onSubmit={handleFetchUser} >
      <Input 
        placeholder='name'
        type='text' 
        value={form.login} 
        onChange={e => setForm({...form, username: e.target.value})}
      />
      <Input 
        placeholder='password'
        type='password' 
        value={form.password} 
        onChange={e => setForm({...form, password: e.target.value})}
      />
      <SubmitButton>
        { newUser ? 'create account' : 'login' }
      </SubmitButton>
      { isError && 
        <Error>
          {isError.response.data.message}
          {isError.response.data.errors?.errors.map(({msg}) => 
            <div key={msg} >
              {msg}
            </div>
          )}
        </Error>
      }
      { isCreated &&
        <Success>{isCreated.message}</Success>
      }
    </Form>
  )
}

export { Auth }