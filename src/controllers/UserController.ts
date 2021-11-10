import { Request, Response} from 'express'
import { UserService } from '../services/Users';

export interface RequestToCreateUser {
  name: string
  email: string
  password: string
  admin?: boolean
}

export class UserController {
  
  public async requestAll(request: Request, response: Response): Promise<Response> {
    const userServices = new UserService()

    const users = await userServices.find().all()

    return response.status(200).json(users)
  }

  public async requestByName(request: Request, response: Response): Promise<Response> {
    const userServices = new UserService()

    const { name } = request.query

    const user = await userServices.find().byName(String(name))

    return response.json(user)
  }

  public async requestToCreateUser(request: Request, response: Response): Promise<Response> {
    const userServices = new UserService()
    const user: RequestToCreateUser = request.body

    await userServices.create().execute(user)

    return response.status(201).json(user)
  }

  public async requestToDeleteUser(request: Request, response: Response): Promise<Response> {
    const userServices = new UserService()
    const { id } = request.params

    await userServices.delete().execute(id)

    return response.status(200).json({ message: 'User deleted'})
  }
}