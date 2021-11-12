import { Controller, Get, Post, Put, Delete, Middleware } from '@overnightjs/core'
import { Request, Response } from "express"
import { TagServices } from "../services/tags"
import { mustBeAuthenticated } from '../middlewares/MustBeAuthenticated'
import { mustBeAdmin } from '../middlewares/MustBeAdmin'
import { CreateTag, UpdateTag } from '../entities/Tag'


@Controller('tags')
export class TagController {

  @Get('all')
  @Middleware(mustBeAuthenticated)
  public async requestAll(request: Request, response: Response): Promise<Response> {
    const tagServices = new TagServices()

    const tags = await tagServices.find().all()

    return response.status(200).json(tags)
  }

  @Post('')
  @Middleware([mustBeAuthenticated, mustBeAdmin])
  public async requestToCreate(request: Request, response: Response): Promise<Response> {
    const tagServices = new TagServices()

    const { name }: CreateTag = request.body

    const tag = await tagServices.create().execute({name})

    return response.status(201).json(tag)
  }

  @Put(':id')
  @Middleware([mustBeAuthenticated, mustBeAdmin])
  public async requestToUpdate(request: Request, response: Response): Promise<Response> {
    const tagServices = new TagServices()
    const { id } = request.params
    const tagUpdate: UpdateTag = request.body

    await tagServices.update().execute(id, tagUpdate)

    return response.status(201).json({ message: 'Tag updated!'})
  }

  @Delete(':id')
  @Middleware([mustBeAuthenticated, mustBeAdmin])
  public async requestToDelete(request: Request, response: Response): Promise<Response> {
    const tagServices = new TagServices()
    const { id } = request.params

    await tagServices.delete().execute(id)

    return response.status(200).json({ message: 'Tag deleted!'})
  }
}