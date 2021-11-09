import { getCustomRepository } from "typeorm";
import { ComplimentRepository } from "../repositories/ComplimentRepositories";
import { UserRepositories } from "../repositories/UserRepositories";

interface ComplimentRequest {
  tag_id: string
  user_sender: string
  user_receiver: string
  message: string
}

export class CreateComplimentService {
  async execute({ tag_id, user_sender, user_receiver, message}: ComplimentRequest) {
    const complimentRepository = getCustomRepository(ComplimentRepository)
    const userRepository = getCustomRepository(UserRepositories)
    
    const userReceiverExists = await userRepository.findOne(user_receiver)

    if (user_sender === user_receiver) throw new Error('Users incorrect')
    
    if (!userReceiverExists) throw new Error('User receiver does not exists')

    const compliment = complimentRepository.create({
      tag_id,
      user_sender,
      user_receiver,
      message
    })

    await complimentRepository.save(compliment)

    return compliment
  }
}