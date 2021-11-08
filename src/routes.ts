import { Router } from 'express'

import { ensureAdmin } from './middlewares/ensureAdmin'

import { CreateTagController } from './controllers/CreateTagController'
import { CreateUserController } from './controllers/CreateUserController'
import { ListUserController } from './controllers/ListUserController'
import { ListTagController } from './controllers/ListTagController'

export const routes = Router()

const createUserController = new CreateUserController()
const listUserController = new ListUserController()

const createTagController = new CreateTagController()
const listTagController = new ListTagController()

routes.get('/users', listUserController.handle)
routes.post('/users', createUserController.handle)


routes.get('/tags', listTagController.handle)
routes.post('/tags', ensureAdmin, createTagController.handle)