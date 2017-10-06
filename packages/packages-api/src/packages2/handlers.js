// @flow
import * as repo from './repo'

const serialize = data => ({ data })
const serializeError = err => ({ errors: [err] })

export const findAll = async (req: express$Request, res: express$Response) => {
  try {
    const packages = await repo.findAll()
    res.json(serialize(packages))
  } catch (err) {
    res.status(500).json(serializeError(err))
  }
}
