import cl from './style.module.scss'
import logotype from '../../../assets/svg/logo.svg'

const Logo = () => {
  return (
    <div id={cl.component} >
      M E R N
      <img 
        src={logotype}  
        alt="logo"
        width={50} 
        height={50}  
        className={cl.logo}
      />
    </div>
  )
}

export { Logo }