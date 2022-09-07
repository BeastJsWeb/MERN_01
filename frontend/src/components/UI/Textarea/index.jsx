import React from 'react'
import styles from './index.module.scss'

const Textarea = ({placeholder,...props}) => {
  return (
    <div className={styles.component}>
      <textarea 
        {...props} 
        id={placeholder}  
      />
      <label htmlFor={placeholder} >
        {placeholder}
      </label>
    </div>
  )
}

export { Textarea }
