import { Router } from "express"
import PostController from "../controllers/PostController.js"
import UserController from "../controllers/UserController.js"
import validatorService from "./utils/validatorService.js"
import { auth } from "../middleware/auth.middleware.js"

const router = new Router()

router.post('/registration', validatorService.auth(), UserController.registration)
router.post('/login', validatorService.auth(), UserController.login)
router.get('/auth', auth, UserController.getUser)
router.get('/users', UserController.getUsers)

router.post('/posts', PostController.create)
router.get('/posts', PostController.getAll)
router.get('/posts/:id', PostController.getOne)
router.put('/posts', PostController.update)
router.delete('/posts/:id', PostController.delete)

export default router