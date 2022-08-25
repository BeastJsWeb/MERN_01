import React from 'react'
import './index.scss'

const Input = (props) => {
  return (
    <div className="form__group field">
      <input 
        {...props} 
        className="form__field" 
        id={props.placeholder} 
      />
      <label 
        className="form__label"
        htmlFor={props.placeholder} 
      >
        {props.placeholder}
      </label>
    </div>
  )
}

export { Input }
