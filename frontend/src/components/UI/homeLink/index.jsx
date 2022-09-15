import { Link } from "react-router-dom"
import cl from './index.module.scss'

const HomeLink = () => {
  return (
    <div className={cl.component} >
      Go <Link to="/">Home</Link>
    </div>
  )
}

export { HomeLink }