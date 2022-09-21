import React from "react"
import cl from './index.module.scss'

const Error = ({children,...props}) => {
  
  return (
      <div 
        {...props}
        className={cl.component}
      >
        {children}
      </div>
  )
}

export { Error }