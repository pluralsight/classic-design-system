import path from 'path'

import { Router } from 'express'
import gatsbyExpress from 'gatsby-plugin-express'

import { getConfig } from '../config'

const { publicDir } = getConfig()
const gatsbyExpressOutput = path.join(__dirname, 'gatsby-express.json')

export const controller = Router()

controller.use(
  gatsbyExpress(gatsbyExpressOutput, {
    publicDir,
    redirectSlashes: true,
  })
)
