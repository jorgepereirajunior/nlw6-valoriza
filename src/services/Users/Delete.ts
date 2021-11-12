import { getCustomRepository } from "typeorm";
import { UserRepository } from "../../repositories/UserRepository";


export class Delete {
  constructor(private userRepository = getCustomRepository(UserRepository)) {}

  public async execute(id: string): Promise<void> {
   
    if (!id) throw new Error('Incorrect query')

    const user = await this.userRepository.findOne(id)

    if (!user) throw new Error('User not found')

    await this.userRepository.delete(user)

    return
  }
}