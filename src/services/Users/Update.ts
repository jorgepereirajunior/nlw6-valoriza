import { getCustomRepository } from "typeorm";
import { UpdateUser } from "../../entities/User";
import { UserRepository } from "../../repositories/UserRepository"

export class Update {
  constructor(private userRepository = getCustomRepository(UserRepository)) {}

  public async execute(id: string, userUpate: UpdateUser): Promise<void> {

    if (!id) throw new Error('Incorrect query')

    const user = await this.userRepository.findOne({ where: {id}})

    if (!user) throw new Error('User not found')

    await this.userRepository.update(id, userUpate)

    return
  }
}