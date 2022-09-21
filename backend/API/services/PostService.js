import Post from "../models/Post.js"
import fileService from "./utils/services/fileService.js"

class PostService {
  async create(post, picture) {
    if (!picture) {
      const createdPost = await Post.create(post) // DB
      return createdPost
      
    } else {
      const fileName = fileService.saveFile(picture)
      const createdPost = await Post.create({...post, picture: fileName}) // DB
      return createdPost
    }
  }

  async getAll() {
    const posts = await Post.find() // DB
    return posts
  }

  async getOne(id) {
    if (!id) {
      throw new Error('id not specified')
    }
    const post = await Post.findById(id) // DB
    return post
  }

  async update(post) {
      if (!post._id) {
        throw new Error('id not specified')
      }
      const updatedPost = await Post.findByIdAndUpdate(post._id, post, {new: true}) // DB
      return updatedPost
  }

  async delete(id) {
    if (!id) {
      throw new Error('id not specified')
    }
    const post = await Post.findByIdAndDelete(id) // DB
    return post
  }
}

export default new PostService()