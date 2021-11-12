import { Controller, Post } from "@overnightjs/core";
import { Request, Response } from "express";

import { RequestCreteCompliment } from "../entities/Compliment";
import { ComplimentServices } from "../services/compliments";


@Controller('compliments')
export class ComplimentController {

  @Post('')
  public async requestToCreate(request: Request, response: Response): Promise<Response> {
    const complimentServices = new ComplimentServices()
    const { user_id } = request
    const { tag_id, user_receiver, message }: RequestCreteCompliment = request.body

    const compliment = await complimentServices.create().execute({
      tag_id,
      user_sender: user_id,
      user_receiver,
      message
    })

    return response.json(compliment)
  }
}