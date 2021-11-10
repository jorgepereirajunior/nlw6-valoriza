import { Router } from 'express'

import { ensureAdmin } from './middlewares/ensureAdmin'
import { ensureAuthenticated } from './middlewares/ensureAuthenticated'

import { CreateTagController } from './controllers/CreateTagController'
import { CreateUserController } from './controllers/CreateUserController'
import { ListUserController } from './controllers/ListUserController'
import { ListTagController } from './controllers/ListTagController'
import { AuthenticateUserController } from './controllers/AuthenticateUserController'
import { CreateComplimentController } from './controllers/CreateComplimentController'
import { ListUserSendComplimentsController } from './controllers/ListUserSendComplimentsController'
import { ListUserReceiveComplimentsController } from './controllers/ListUserReceiveComplimentsController'

export const routes = Router()

const createUserController = new CreateUserController()
const listUserController = new ListUserController()
const listUserSendComplimentController = new ListUserSendComplimentsController()
const listUserReceiveComplimentController = new ListUserReceiveComplimentsController()

const createTagController = new CreateTagController()
const listTagController = new ListTagController()

const authenticateUserController = new AuthenticateUserController()

const createComplimentController = new CreateComplimentController()

routes.get('/users', listUserController.handle)
routes.post('/users', createUserController.handle)

routes.get('/users/compliments_send', ensureAuthenticated, listUserSendComplimentController.handle)
routes.get('/users/compliments_receive', ensureAuthenticated, listUserReceiveComplimentController.handle)


routes.get('/tags', ensureAuthenticated, listTagController.handle)
routes.post('/tags', ensureAuthenticated, ensureAdmin,  createTagController.handle)

routes.post('/login', authenticateUserController.handle)

routes.post('/compliments', ensureAuthenticated, createComplimentController.handle)
