import { getCustomRepository } from "typeorm";
import { Compliment, CreateCompliment } from "../../entities/Compliment";
import { ComplimentRepository } from "../../repositories/ComplimentRepositories";
import { UserRepository } from "../../repositories/UserRepository";



export class Create {
  constructor(
    private complimentRepository = getCustomRepository(ComplimentRepository),
    private userRepository = getCustomRepository(UserRepository)
  ) {}

  public async execute({
    tag_id,
    user_sender,
    user_receiver,
    message
  } : CreateCompliment): Promise<Compliment> {

    if (user_sender === user_receiver) throw new Error('Users incorrects')

    const userReceiverExist = await this.userRepository.findOne(user_receiver)

    if (!userReceiverExist) throw new Error('User receiver does not exists')

    const compliment = this.complimentRepository.create({
      tag_id,
      user_sender,
      user_receiver,
      message
    })

    await this.complimentRepository.save(compliment)

    return compliment
  }

}