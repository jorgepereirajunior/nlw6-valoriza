import { Server } from '@overnightjs/core'
import express, { Request, Response, NextFunction} from 'express'
import 'express-async-errors'
import { createConnection, getConnection } from 'typeorm'
import { ComplimentController } from './controllers/ComplimentController'

import { TagController } from './controllers/TagController'
import { UserController } from './controllers/UserController'

export class SetupServer extends Server {
  constructor() {
    super()
  }

  public async init(): Promise<void> {
    await this.startConnection()
    this.setupExpress()
    this.setupControllers()
    this.setupErrors()
  }

  private setupExpress(): void {
    this.app.use(express.json())
  }

  private setupControllers(): void {
    this.addControllers([
      new UserController(),
      new TagController(),
      new ComplimentController()
    ])
  }

  private setupErrors(): void {
    this.app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
      if (error instanceof Error) {
        return response.status(400).json({
          error: error.message
        })
      }
    
      return response.status(500).json({
        status: 'error',
        message: 'Internal Server Error!'
      })
    })
  }

  public async startConnection(): Promise<void> {
    await createConnection()
  }

  public async closeConnection(): Promise<void> {
    await getConnection().close()
  }

  public async start(): Promise<void> {

    this.app.listen(process.env.PORT || 4000, () => {
      console.log('Overnight Server running on port 4000')
    })
  }
}