import React from "react"
import cl from './style.module.scss'

const Success = ({children,...props}) => {
  
  return (
      <div 
        {...props}
        className={cl.component}
      >
        {children}
      </div>
  )
}

export { Success }