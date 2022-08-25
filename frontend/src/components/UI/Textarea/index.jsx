import React from 'react'
import './index.scss'

const Textarea = ({placeholder,...props}) => {
  return (
    <div className="textarea__group field">
      <textarea className="textarea__field" {...props} id={placeholder}  />
      <label 
        className="textarea__label"
        htmlFor={placeholder} 
      >
        {placeholder}
      </label>
    </div>
  )
}

export { Textarea }
