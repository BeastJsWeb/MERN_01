import cl from './index.module.scss'
import { usePagination } from '../../../utils/hooks/usePagination'

const Pagination = ({pagesCount, page, changePage}) => {

  const [pagesCountArrey] = usePagination(pagesCount)

  return (
    <div id={cl.component}>
      {pagesCountArrey.map(p => 
        <button  
          key={p} 
          onClick={() => changePage(p)} 
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