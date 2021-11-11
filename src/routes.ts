import { Router } from 'express'

import { ensureAdmin } from './middlewares/ensureAdmin'
import { ensureAuthenticated } from './middlewares/ensureAuthenticated'

import { CreateTagController } from './controllers/CreateTagController'
import { ListTagController } from './controllers/ListTagController'
import { AuthenticateUserController } from './controllers/AuthenticateUserController'
import { CreateComplimentController } from './controllers/CreateComplimentController'
import { UserController } from './controllers/UserController'

export const routes = Router()

const createTagController = new CreateTagController()
const listTagController = new ListTagController()

const authenticateUserController = new AuthenticateUserController()

const createComplimentController = new CreateComplimentController()

routes.get('/users/all', new UserController().requestAll)
routes.get('/users', new UserController().requestByName)
routes.post('/users', new UserController().requestToCreateUser)
routes.put('/users/:id', new UserController().requestToUpdateUser)
routes.delete('/users/:id', new UserController().requestToDeleteUser)

routes.get('/users/compliments_send', ensureAuthenticated, new UserController().requestComplimentsSent)
routes.get('/users/compliments_receive', ensureAuthenticated, new UserController().requestComplimentsReceived)


routes.get('/tags', ensureAuthenticated, listTagController.handle)
routes.post('/tags', ensureAuthenticated, ensureAdmin,  createTagController.handle)

routes.post('/login', authenticateUserController.handle)

routes.post('/compliments', ensureAuthenticated, createComplimentController.handle)
