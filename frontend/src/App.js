import React, { useState } from 'react'
import { AuthContext } from './utils/index'
import { PublicRoutes, PrivatRoutes } from './components/index'

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false)

  return (
    <AuthContext.Provider value={{loggedIn, setLoggedIn}} >
      { loggedIn
        ? <PrivatRoutes />
        : <PublicRoutes />
      }
    </AuthContext.Provider>
  )
}

export { App }
