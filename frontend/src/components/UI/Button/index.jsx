import cl from './style.module.scss'

const Button = ({children,...props}) => {
  return (
    <button 
      {...props}
      className={cl.component}  
    >
      {children}
    </button>
  )
}

export { Button }