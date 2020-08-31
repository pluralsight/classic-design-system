import { Router } from 'express'

export const controller = Router()

controller.get('/health-check', function healthCheck(_req, res) {
  res.sendStatus(200)
})
