import React from 'react'
import styles from './index.module.scss'

const PostInList = ({data, ...props}) => {
  
  return (
    <div 
      {...props}
      id={data._id} 
      className={styles.body}
    >
      <div>
        {data.title}
      </div>
      <div>
        Author: {data.author}
      </div>
    </div> 
  )
}

export { PostInList }
