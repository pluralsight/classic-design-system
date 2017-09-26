import cors from 'cors'
import express from 'express'

import config from './config'
import packages from './packages'

const app = express()

app.use('/api', cors({ origin: '*' }))
app.use('/api/v1/packages', packages)

app.listen(config.port, _ =>
  console.log(`packages-api on port ${config.port}...`)
)
