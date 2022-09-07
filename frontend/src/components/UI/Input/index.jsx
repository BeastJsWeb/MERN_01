import React, { useMemo } from 'react'
import styles from './index.module.scss'

const Input = ({placeholder, loaded,...props}) => {
  
  const file = useMemo(() => {
    if (props.type === 'file') return  styles.button
  }, [props.type])
  
  const fileLoaded = useMemo(() => {
    if (loaded) return  styles.loaded
    return placeholder
  }, [loaded, placeholder])
  
  return (
    <div className={styles.component}>
      <input 
        {...props}  
        className={file}
        id={placeholder} 
      />
      <label 
        className={[file, fileLoaded].join(' ')}
        htmlFor={fileLoaded} 
      >
        {placeholder}
      </label>
    </div>
  )
}

export { Input }
