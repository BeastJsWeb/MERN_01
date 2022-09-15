import cl from './style.module.scss'

const Form = ({children,...props}) => {
  return (
    <form 
      {...props}
      id={cl.component} 
      autoComplete="off" 
    >
      {children}
    </form>
  )
}

export { Form }