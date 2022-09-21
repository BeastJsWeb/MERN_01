import styles from './index.module.scss'

const SubmitButton = ({children,...props}) => {
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

export { SubmitButton }