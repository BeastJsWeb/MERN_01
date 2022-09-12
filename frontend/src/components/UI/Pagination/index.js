import { useState } from 'react'
import cl from './index.module.scss'

const Pagination = ({pagesCount}) => {
  const [page, setPage] = useState(1)

  return (
    <div id={cl.component}>
      {pagesCount.map(p => 
        <button  
          key={p} 
          onClick={() => setPage(p)} 
          className={
            p === page ? [cl.btn, cl.active].join(' ') : cl.btn
          }
        >
          {p}
        </button>
      )}
    </div>
  )
}

export { Pagination }