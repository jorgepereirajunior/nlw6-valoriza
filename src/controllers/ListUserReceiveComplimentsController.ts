import { Request, Response } from 'express'
import { ListUserReceiveComplimentsServie } from '../services/ListUserReceiveComplimentsService'

export class ListUserReceiveComplimentsController {
  async handle(request: Request, response: Response) {
    const { user_id } = request
    const listUserReceiveComplimentsService = new ListUserReceiveComplimentsServie()

    const compliments = await listUserReceiveComplimentsService.execute(user_id)

    return response.json(compliments)
  }
}