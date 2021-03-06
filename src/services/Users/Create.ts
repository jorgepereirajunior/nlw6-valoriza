import { User } from "../../entities/User";
import { UserRepository } from "../../repositories/UserRepository";

import { hash } from 'bcryptjs'
import { getCustomRepository } from "typeorm";

export interface RequestToCreateUser {
  name: string
  email: string
  password: string
  admin?: boolean
}

export class Create {

  constructor(private userRepository = getCustomRepository(UserRepository)) {}

  public async execute({ name, email, password, admin}: RequestToCreateUser): Promise<User> {
    
    if (!email) {
      throw new Error('Email incorrect!')  
    }
    
    const alreadyExist = await this.userRepository.findOne({email})
  
    if (alreadyExist) {
      throw new Error('User already exists!')
    }

    const passwordHash = await hash(password, 8)

    const user = this.userRepository.create({
      name,
      email,
      password: passwordHash,
      admin
    })

    await this.userRepository.save(user)

    return user
  }
}