import { Router } from 'express'
import { CreateUserController } from './controllers/CreateUserController'
import { ListUserController } from './controllers/ListUserController'

export const routes = Router()

const createUserController = new CreateUserController()
const listUserController = new ListUserController()

routes.get('/users', listUserController.handle)
routes.post('/users', createUserController.handle)