import { Request, Response } from 'express'
import { ListUserSendComplimentsServie } from '../services/ListUserSendComplimentsService'

export class ListUserSendComplimentsController {
  async handle(request: Request, response: Response) {
    const { user_id } = request
    const listUserSendComplimentsService = new ListUserSendComplimentsServie()

    const compliments = await listUserSendComplimentsService.execute(user_id)

    return response.json(compliments)
  }
}