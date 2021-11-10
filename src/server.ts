import 'reflect-metadata'
import express, { Request, Response, NextFunction, request} from  'express'
import 'express-async-errors'
import dotenv from 'dotenv'

import { routes } from './routes'

import './database/connection'

const app = express()

app.use(express.json())
app.use(routes)

app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
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

dotenv.config()

app.listen(process.env.PORT || 4000, () => {
  console.log('Server is running on 4000')
})