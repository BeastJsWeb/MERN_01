import React from "react"
import './index.scss'

const Notification = ({children, ...props}) => {
  return (
    
    <div className="notification" {...props} >
      {children}
    </div>
  )
}

export { Notification }