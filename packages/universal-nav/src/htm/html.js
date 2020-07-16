import htm from 'htm'
import { createElement } from 'react'

// We could use some enviormental variable to toggle this?
export const html = htm.bind(createElement)

export const h = createElement
