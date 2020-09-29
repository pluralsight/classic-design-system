// NOTE: imported so tsc will copy to dist dir
import './gatsby-express.json'

import path from 'path'

import { Router } from 'express'
import gatsbyExpress from 'gatsby-plugin-express'

import { getConfig } from '../config'

const { publicDir } = getConfig()
const manifest = path.join(__dirname, 'gatsby-express.json')

export const controller = Router()

controller.use(gatsbyExpress(manifest, { publicDir, redirectSlashes: true }))
