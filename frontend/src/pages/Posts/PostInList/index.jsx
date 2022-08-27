import React from 'react'
import styles from './index.module.scss'

const PostInList = ({data, ...props}) => {
  
  return (
    <div 
      id={data._id}
      onClick={props.onClick} 
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
