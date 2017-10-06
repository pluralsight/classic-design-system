// @flow
import express from 'express'

import * as handlers from './handlers'

const app: express$Application = express()

app.get('/', handlers.findAll)

export default app
