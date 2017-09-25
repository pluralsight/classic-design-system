// @flow
import express from 'express'

import config from './config'

const app = express()

app.get('/', (req, res) => res.json({ wow: 'zers' }))

app.listen(config.port, _ =>
  console.log(`packages-api on port ${config.port}...`)
)
