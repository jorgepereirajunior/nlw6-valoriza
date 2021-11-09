import { getCustomRepository } from "typeorm";
import { ComplimentRepository } from "../repositories/ComplimentRepositories";


export class ListUserSendComplimentsServie {
  async execute(user_id: string) {
    const complimentsRepository = getCustomRepository(ComplimentRepository)

    const compliments = await complimentsRepository.find({
      where: {
        user_sender: user_id
      }
    })

    return compliments
  }
}