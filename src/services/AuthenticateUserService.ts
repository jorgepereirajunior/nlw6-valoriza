import { getCustomRepository } from "typeorm"
import { UserRepositories } from "../repositories/UserRepositories"
import { compare } from 'bcryptjs'

import { sign } from 'jsonwebtoken'


interface AuthRequest {
  email: string
  password: string
}

export class AuthenticateUserService {

  async execute({email, password}: AuthRequest) {
    const userRepository = getCustomRepository(UserRepositories)

    const user = await userRepository.findOne({
      email
    })

    if (!user) throw new Error('Email/Password incorrect!')

    const passwordMatch = await compare(password, user.password)

    if(!passwordMatch) throw new Error('Email/Password incorrect!')

    const token = sign({
      email: user.email
    }, '06d946116701138b8e368c1298fcd556', {
      subject: user.id,
      expiresIn: '1d'
    })

    return token
  }
}