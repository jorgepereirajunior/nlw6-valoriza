import { Router } from 'express'


import { AuthenticateUserController } from './controllers/AuthenticateUserController'
import { CreateComplimentController } from './controllers/CreateComplimentController'


export const routes = Router()


const authenticateUserController = new AuthenticateUserController()

const createComplimentController = new CreateComplimentController()


routes.post('/login', authenticateUserController.handle)