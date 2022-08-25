import './index.scss'

const Button = ({children,...props}) => {
  return (
    <button 
      {...props}
      type='submit'
      className="button"  
    >
      {children}
    </button>
  )
}

export { Button }