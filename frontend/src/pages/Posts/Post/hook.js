import axios from "axios"

const handleDelete = (props) => {
  axios.delete(`/api/posts/${props.id}`)
  .then(() => {
    props.setData('')
    props.setPosts(Date.now()) //update posts list
  })
  .catch(e => {
    console.log(e)
    props.setMessage(`warning`)
    setTimeout(() => props.setMessage(''), 1000)
  })
}

export { handleDelete }