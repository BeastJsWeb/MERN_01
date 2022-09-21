import React, { useContext, useMemo, useState } from "react"
import cl from './style.module.scss'
import { Logo, Loader, Button } from "../../components/index"
import { AuthContext, useFetching } from "../../utils/index"
import authService from "../../API/services/authService"
import { Auth } from "./Auth"

const AuthContainer = () => {
  const {setLoggedIn} = useContext(AuthContext)
  const [isUser, setIsUser] = useState(false)
  // auth
  const [fetchAuth, authError, authIsLoading] = useFetching( async () => {
    const auth = await authService.auth()
    setLoggedIn(true)
    localStorage.setItem('token', auth.token)
  })

  useMemo(() => {
    fetchAuth()
  }, [])

  useMemo(() => {
    if (authError) return localStorage.removeItem('token')
  }, [authError])

  const handleToogleForm = () => setIsUser(isUser => !isUser)

  if (authIsLoading) return <Loader />

  return (
    <div id={cl.component} >
      <Logo />
      <Auth newUser={isUser} />
      <div>
        or
      </div>
      <Button onClick={handleToogleForm} >
        { isUser
          ? 'Log In'
          : 'Sign Up'
        }
      </Button>
    </div>
  )
}

export { AuthContainer }