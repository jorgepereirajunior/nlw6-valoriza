import { getCustomRepository } from 'typeorm'
import { UserRepositories } from "../repositories/UserRepositories";


interface UserRequest {
  name: string
  email: string
  password: string
  admin?: boolean
}

export class CreateUSerService {

  constructor (private userRepository = getCustomRepository(UserRepositories)) {}

  async execute({ name, email, password, admin }: UserRequest ) {
    // const userRpository = getCustomRepository(UserRepositories)

    if (!email) {
      throw new Error('Email incorrect!')  
    }

    const alreadyExist = await this.userRepository.findOne({
      email
    })

    if (alreadyExist) {
      throw new Error('User already exists!')
    }

    const user = this.userRepository.create({
      name,
      email,
      password,
      admin
    })

    await this.userRepository.save(user)

    return user
  }
}