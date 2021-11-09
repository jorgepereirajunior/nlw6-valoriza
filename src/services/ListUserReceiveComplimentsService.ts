import { getCustomRepository } from "typeorm";
import { ComplimentRepository } from "../repositories/ComplimentRepositories";


export class ListUserReceiveComplimentsServie {
  async execute(user_id: string) {
    const complimentsRepository = getCustomRepository(ComplimentRepository)

    const compliments = await complimentsRepository.find({
      where: {
        user_receiver: user_id
      }
    })

    return compliments
  }
}