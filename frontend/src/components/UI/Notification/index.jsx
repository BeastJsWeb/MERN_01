import React, { useMemo } from "react"
import styles from './index.module.scss'

const Notification = ({children, message,...props}) => {
  
  const messageType = useMemo(() => {
    if (message === 'created') return styles.created
    if (message === 'warning') return styles.warning
    if (message === 'deleted') return styles.deleted
  }, [message])
  
  return (
    <div 
      {...props}
      className={`
        ${styles.component}
        ${messageType}
      `}
    >
      {children}
    </div>
  )
}

export { Notification }