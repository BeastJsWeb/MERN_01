import UserService from "../services/UserService.js"
import { validationResult } from "express-validator"
import User from "../models/User.js"
import bcrypt from 'bcryptjs'

class UserController {
  async registration(req, res) {
    try {
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        return res.status(400).json({message: 'Registration failed', errors})
      }
      const {username} = req.body
      const candidate = await User.findOne({username})
      if (candidate) {
        return res.status(400).json({message: 'Name already exists'})
      }
      const registr = await UserService.registration(req.body)
      return res.json(registr)
    } catch (e) {
      console.log(e)
      res.status(500).json(e)
    }
  }

  async login(req, res) {
    try {
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        return res.status(400).json({message: 'Authorization failed', errors})
      }
      const {username, password} = req.body
      const user = await User.findOne({username})
      if (!user) {
        return res.status(400).json({message: `User ${username} not found`})
      }
      const validPassword = bcrypt.compareSync(password, user.password)
      if (!validPassword) {
        return res.status(400).json({message: 'Password not found'})
      }
      const auth = await UserService.login(user)
      return res.json(auth)
    } catch (e) {
      console.log(e)
      return res.status(500).json(e)
    }
  }

  async getUsers(req, res) {
    try {
      const users = await UserService.getUsers()
      return res.json(users)
    } catch (e) {
      console.log(e)
      return res.status(500).json(e)
    }
  }

  async getUser(req, res) {
    try {
      const user = await UserService.getUser(req.body)
      return res.json(user)
    } catch (e) {
      console.log(e)
      return res.status(500).json(e)
    }
  }
}

export default new UserController()