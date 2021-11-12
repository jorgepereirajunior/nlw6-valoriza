import { Request, Response } from "express";
import { TagServices } from "../services/Tags";
import { RequestToCreateTag } from "../services/Tags/Create";
import { RequestToUpdateTag } from "../services/Tags/Update";


export class TagController {

  public async requestAll(request: Request, response: Response): Promise<Response> {
    const tagServices = new TagServices()

    const tags = await tagServices.find().all()

    return response.status(200).json(tags)
  }

  public async requestToCreate(request: Request, response: Response): Promise<Response> {
    const tagServices = new TagServices()

    const { name }: RequestToCreateTag = request.body

    const tag = await tagServices.create().execute({name})

    return response.status(201).json(tag)
  }

  public async requestToUpdate(request: Request, response: Response): Promise<Response> {
    const tagServices = new TagServices()
    const { id } = request.params
    const tagUpdate: RequestToUpdateTag = request.body

    await tagServices.update().execute(id, tagUpdate)

    return response.status(201).json({ message: 'Tag updated!'})
  }

  public async requestToDelete(request: Request, response: Response): Promise<Response> {
    const tagServices = new TagServices()
    const { id } = request.params

    await tagServices.delete().execute(id)

    return response.status(200).json({ message: 'Tag deleted!'})
  }
}