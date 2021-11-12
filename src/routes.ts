import { Router } from 'express'

import { ensureAdmin } from './middlewares/ensureAdmin'
import { ensureAuthenticated } from './middlewares/ensureAuthenticated'

import { AuthenticateUserController } from './controllers/AuthenticateUserController'
import { CreateComplimentController } from './controllers/CreateComplimentController'
import { UserController } from './controllers/UserController'
import { TagController } from './controllers/TagController'

export const routes = Router()


const authenticateUserController = new AuthenticateUserController()

const createComplimentController = new CreateComplimentController()

routes.get('/users/all', new UserController().requestAll)
routes.get('/users', new UserController().requestByName)
routes.post('/users', new UserController().requestToCreateUser)
routes.put('/users/:id', new UserController().requestToUpdateUser)
routes.delete('/users/:id', new UserController().requestToDeleteUser)

routes.get('/users/compliments_send', ensureAuthenticated, new UserController().requestComplimentsSent)
routes.get('/users/compliments_receive', ensureAuthenticated, new UserController().requestComplimentsReceived)


routes.get('/tags', ensureAuthenticated, new TagController().requestAll)
routes.post('/tags', ensureAuthenticated, ensureAdmin,  new TagController().requestToCreate)
routes.put('/tags/:id', ensureAuthenticated, ensureAdmin, new TagController().requestToUpdate)
routes.delete('/tags/:id', ensureAuthenticated, ensureAdmin, new TagController().requestToDelete)

routes.post('/login', authenticateUserController.handle)

routes.post('/compliments', ensureAuthenticated, createComplimentController.handle)
