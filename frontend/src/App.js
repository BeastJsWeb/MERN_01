import React, { useState } from 'react'
import { AuthContext } from './utils/context/auth'

import { PublicRoutes } from './components/routes/puplicRoutes'
import { PrivatRoutes } from './components/routes/privatRoutes'

const App = () => {
  const [isAuth, setIsAuth] = useState(false)
  
  return (
    <AuthContext.Provider value={{isAuth, setIsAuth}} >
      { isAuth
        ? <PrivatRoutes />
        : <PublicRoutes />
      }
    </AuthContext.Provider>
  )
}

export { App }
