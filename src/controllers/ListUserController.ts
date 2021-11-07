import { Request, Response } from 'express'
import { ListUserService } from '../services/ListUserService';

export class ListUserController {

  // constructor (private listUserService = new ListUserService()) {}

  async handle(request: Request, response: Response) {
    const listUserService = new ListUserService()
    const user = await listUserService.execute()

    return response.json(user)
  }
}