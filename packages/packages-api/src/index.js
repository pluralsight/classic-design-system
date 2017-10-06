// @flow
import cors from 'cors'
import express from 'express'

import config from './config'
import packages from './packages'
import packages2 from './packages2'

const app: express$Application = express()

app.use('/api', cors({ origin: '*' }))
app.use('/api/v1/packages', packages)
app.use('/api/v2/packages', packages2)

app.listen(config.port, _ =>
  console.log(`packages-api on port ${config.port}...`)
)
