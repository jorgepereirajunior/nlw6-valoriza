import { Controller, Get, Post, Put, Delete, Middleware } from '@overnightjs/core'
import { Request, Response} from 'express'
import { CreateUser, UpdateUser } from '../entities/User';
import { mustBeAuthenticated } from '../middlewares/MustBeAuthenticated';
import { UserServices } from '../services/users';



@Controller('users')
export class UserController {
  
  @Get('all')
  public async requestAll(request: Request, response: Response): Promise<Response> {
    const userServices = new UserServices()

    const users = await userServices.find().all()

    return response.status(200).json(users)
  }

  @Get('')
  public async requestByName(request: Request, response: Response): Promise<Response> {
    const userServices = new UserServices()

    const { name } = request.query

    const user = await userServices.find().byName(String(name))

    return response.json(user)
  }

  @Post('')
  public async requestToCreateUser(request: Request, response: Response): Promise<Response> {
    const userServices = new UserServices()
    const user: CreateUser = request.body

    await userServices.create().execute(user)

    return response.status(201).json(user)
  }

  @Put(':id')
  public async requestToUpdateUser(request: Request, response: Response): Promise<Response> {
    const userServices = new UserServices()
    const { id } = request.params
    const userUpdate: UpdateUser = request.body

    await userServices.update().execute(id, userUpdate)

    return response.status(200).json({ message: 'User updated'})
  }

  @Delete(':id')
  public async requestToDeleteUser(request: Request, response: Response): Promise<Response> {
    const userServices = new UserServices()
    const { id } = request.params

    await userServices.delete().execute(id)

    return response.status(200).json({ message: 'User deleted'})
  }

  @Get('compliments_send')
  @Middleware(mustBeAuthenticated)
  public async requestComplimentsSent(request: Request, response: Response): Promise<Response> {
    const { user_id } = request
    const userServices = new UserServices()

    const myComplimentsSent = await userServices.find().complimentsSent(user_id)

    return response.status(200).json(myComplimentsSent)
  }

  @Get('compliments_receive')
  @Middleware(mustBeAuthenticated
    )
  public async requestComplimentsReceived(request: Request, response: Response): Promise<Response> {
    const { user_id } = request
    const userServices = new UserServices()

    const myComplimentsReceived = await userServices.find().complimentsReceived(user_id)

    return response.status(200).json(myComplimentsReceived)
  }
}