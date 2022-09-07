import styles from './index.module.scss'

const Button = ({children,...props}) => {
  return (
    <button 
      {...props}
      type='submit'
      className={styles.component}  
    >
      {children}
    </button>
  )
}

export { Button }