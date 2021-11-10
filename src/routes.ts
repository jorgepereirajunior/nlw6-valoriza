import { Router } from 'express'

import { ensureAdmin } from './middlewares/ensureAdmin'
import { ensureAuthenticated } from './middlewares/ensureAuthenticated'

import { CreateTagController } from './controllers/CreateTagController'
import { ListTagController } from './controllers/ListTagController'
import { AuthenticateUserController } from './controllers/AuthenticateUserController'
import { CreateComplimentController } from './controllers/CreateComplimentController'
import { ListUserSendComplimentsController } from './controllers/ListUserSendComplimentsController'
import { ListUserReceiveComplimentsController } from './controllers/ListUserReceiveComplimentsController'
import { UserController } from './controllers/UserController'

export const routes = Router()

const listUserSendComplimentController = new ListUserSendComplimentsController()
const listUserReceiveComplimentController = new ListUserReceiveComplimentsController()

const createTagController = new CreateTagController()
const listTagController = new ListTagController()

const authenticateUserController = new AuthenticateUserController()

const createComplimentController = new CreateComplimentController()

routes.get('/users/all', new UserController().requestAll)
routes.get('/users', new UserController().requestByName)
routes.post('/users', new UserController().requestToCreateUser)
routes.delete('/users/:id', new UserController().requestToDeleteUser)

routes.get('/users/compliments_send', ensureAuthenticated, listUserSendComplimentController.handle)
routes.get('/users/compliments_receive', ensureAuthenticated, listUserReceiveComplimentController.handle)


routes.get('/tags', ensureAuthenticated, listTagController.handle)
routes.post('/tags', ensureAuthenticated, ensureAdmin,  createTagController.handle)

routes.post('/login', authenticateUserController.handle)

routes.post('/compliments', ensureAuthenticated, createComplimentController.handle)
