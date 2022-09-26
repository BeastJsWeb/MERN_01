import User from "../models/User.js"
import hashService from "./utils/services/hashService.js"
import jwtService from "./utils/services/jwtService.js"

class UserService {
  async registration({username, password}) {
    const hashPassword = hashService.hash(password)
    const user = await User.create({username, password: hashPassword})
    await user.save()
    return {user, message: 'User created successfully'}
  }

  async login(user) {
    const token = jwtService.generateAccessToken(user._id)
    return {token}
  }

  async getUsers() {
    const users = await User.find()
    return users
  }

  async getUser(id) {
    const user = await User.findOne(id)
    const token = jwtService.generateAccessToken(user._id)
    return {token}
  }
}

export default new UserService()