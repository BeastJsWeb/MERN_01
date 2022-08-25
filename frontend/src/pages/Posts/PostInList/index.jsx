import React from 'react'
import './index.scss'

const PostInList = ({data, ...props}) => {
  
  return (
    <div 
      id={data._id}
      onClick={props.onClick} 
      className={`column__post`}
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
