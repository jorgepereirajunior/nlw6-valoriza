import 'reflect-metadata'
import express from  'express'

import './database/connection'

const app = express()

app.listen(process.env.PORT || 4000, () => {
  console.log('Server is running on 4000')
})