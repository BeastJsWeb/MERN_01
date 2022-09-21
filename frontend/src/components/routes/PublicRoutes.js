import React from "react"
import { Route, Routes } from "react-router-dom"
import { AuthContainer } from "../../pages/AuthContainer"

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" index element={<AuthContainer />} />
      <Route path="*" element={<AuthContainer />} />

      
    </Routes>
  )
}

export { PublicRoutes }