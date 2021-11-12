import { Request, Response, NextFunction } from 'express'
import { getCustomRepository } from 'typeorm'
import { UserRepository } from '../repositories/UserRepository'

export async function mustBeAdmin(request: Request, response: Response, next: NextFunction) {
  const { user_id } = request
  const userRepository = getCustomRepository(UserRepository)

  const user = await userRepository.findOne(user_id)

  if (user?.admin) return next()

  return response.status(401).json({
    error: 'Unauthorized'
  })
}