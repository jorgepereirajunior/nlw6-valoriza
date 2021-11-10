import { getCustomRepository } from "typeorm"
import { User } from "../../entities/User"
import { UserRepository } from "../../repositories/UserRepository"

export class Find {
  constructor(private userRepository = getCustomRepository(UserRepository)) {}

  public async all(): Promise<User[]> {
    const users = await this.userRepository.find()

    if (!users.length) throw new Error('No users')

    return users
  }

  public async byName(name: string): Promise<User> {
    console.log(name)
    const user = await this.userRepository.findOne({ where: {name}})

    if (!user) throw new Error('User not found')

    return user
  }

  // public async byComplimentsSended(id: string)
  
}