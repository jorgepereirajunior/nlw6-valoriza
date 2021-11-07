import { Request, Response } from 'express'
import { CreateUSerService } from '../services/CreateUserService'

export class CreateUserController {

  async handle(request: Request, response: Response) {
    const { name, email, password, admin } = request.body

    const createUserService = new CreateUSerService()

    const user = await createUserService.execute({name, email, password, admin})

    return response.json(user)
  }
}