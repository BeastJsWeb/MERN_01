import styles from './index.module.scss'

const Loader = (props) => {
  return (
    <div 
      {...props}
      className={styles.component} 
    >
      Loadding...
    </div>
  )
}

export { Loader }