// NOTE: is there a better way to do this?
import * as illustrations from '../react/illustrations'

export const illustrationNames = Object.keys(illustrations).reduce(
  (acc, id) => {
    acc[id] = `${id}`
    return acc
  },
  {}
)
