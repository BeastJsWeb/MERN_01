import styles from './index.module.scss'

const Loader = (props) => {
  return (
    <div 
      {...props}
      className={styles.component} 
    >
    </div>
  )
}

export { Loader }