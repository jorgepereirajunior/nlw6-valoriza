import 'reflect-metadata'
import dotenv from 'dotenv'
import { SetupServer } from './serverOver'

(async () => {
  dotenv.config()

  const server = new SetupServer()
  server.init()
  await server.start()
})()