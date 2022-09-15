import React from "react"
import { Route, Routes } from "react-router-dom"

import { Login } from "../../pages/Login"

const PublicRoutes = ({auth}) => {
  return (
    <Routes>
      <Route path="/*" index element={<Login auth={auth} />} />
    </Routes>
  )
}

export { PublicRoutes }