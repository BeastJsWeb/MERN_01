import React from 'react'
import './index.scss'

const Input = (props) => {
  const file = props.type === 'file' ? 'button__picture' : ''
  
  return (
    <div className="form__group field">
      <input 
        {...props} 
        className={`form__field ${file}`} 
        id={props.placeholder} 
      />
      <label 
        className={`form__label ${file}`}
        htmlFor={props.placeholder} 
      >
        {props.placeholder}
      </label>
    </div>
  )
}

export { Input }
