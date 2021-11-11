import { getCustomRepository } from "typeorm"
import { Compliment } from "../../entities/Compliment"
import { User } from "../../entities/User"
import { ComplimentRepository } from "../../repositories/ComplimentRepositories"
import { UserRepository } from "../../repositories/UserRepository"

export class Find {
  constructor(
    private userRepository = getCustomRepository(UserRepository),
    private complimentRepository = getCustomRepository(ComplimentRepository)
  ) {}

  public async all(): Promise<User[]> {
    const users = await this.userRepository.find()

    if (!users.length) throw new Error('No users')

    return users
  }

  public async byName(name: string): Promise<User> {
    
    const user = await this.userRepository.findOne({ where: {name}})

    if (!user) throw new Error('User not found')

    return user
  }

  public async complimentsSent(id: string): Promise<Compliment[]> {

    const myComplimentsSent = await this.complimentRepository.find({ where: {
      user_sender: id
    }})

    return myComplimentsSent
  }

  public async complimentsReceived(id: string): Promise<Compliment[]> {

    const myComplimentsReceived = await this.complimentRepository.find({ where: {
      user_receiver: id
    }})

    return myComplimentsReceived
  }
  
}