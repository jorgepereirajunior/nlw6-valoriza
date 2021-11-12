import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken'

interface Payload {
  sub: string
}

export function mustBeAuthenticated(request: Request, response: Response, next: NextFunction) {
  const authToken = request.headers.authorization

  if (!authToken) return response.status(401).json({
    error: 'Unauthorized'
  })

  const [, token] = authToken.split(' ')

  try {
    const { sub } = verify(token, '06d946116701138b8e368c1298fcd556') as Payload

    request.user_id = sub

    return next()
  } catch (error) {
    return response.status(401).json({
      error: 'Unauthorized'
    })
  }

}