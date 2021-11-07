import { getCustomRepository } from "typeorm";
import { UserRepositories } from "../repositories/UserRepositories";


export class ListUserService {

  constructor (private userRepository = getCustomRepository(UserRepositories)) {}

  public async execute() {
    const user = await this.userRepository.find()

    return user
  }
}