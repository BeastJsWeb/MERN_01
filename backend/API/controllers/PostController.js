import PostService from "../services/PostService.js"

class PostController {
  async create(req, res) {
    try {
      const post = await PostService.create(
        req,
        req.body,
        req.files 
        ? req.files.picture 
        : undefined
      )
      return res.json(post)
    } catch (e) {
      console.log(e)
      return res.status(500).json(e)
    }
  }

  async getAll(req, res) {
    try {
      const posts = await PostService.getAll()
      return res.json(posts)
    } catch (e) {
      console.log(e)
      return res.status(500).json(e)
    }
  }

  async getOne(req, res) {
    try {
      const post = await PostService.getOne(req.params.id)
      return res.json(post)
    } catch (e) {
      console.log(e)
      return res.status(500).json(e)
    }
  }

  async update(req, res) {
    try {
      const updatedPost = await PostService.upgate(req.body)
      return res.json(updatedPost)
    } catch (e) {
      console.log(e)
      return res.status(500).json(e)
    }
  }

  async delete(req, res) {
    try {
      const post = await PostService.delete(req.params.id)
      return res.json(post)
    } catch (e) {
      console.log(e)
      return res.status(500).json(e)
    }
  }
}

export default new PostController()