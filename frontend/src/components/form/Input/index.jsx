import React, { useMemo } from 'react'
import cl from './index.module.scss'

const Input = ({placeholder, loaded,...props}) => {
  
  const file = useMemo(() => {
    if (props.type === 'file') return  cl.button
  }, [props.type])
  
  const fileLoaded = useMemo(() => {
    if (loaded) return  cl.loaded
    return placeholder
  }, [loaded, placeholder])
  
  return (
    <div className={cl.component}>
      <input 
        {...props}  
        className={file}
        id={placeholder} 
        autoComplete="new-password"
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
