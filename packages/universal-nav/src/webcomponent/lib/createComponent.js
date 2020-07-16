import { createElement } from 'react'

export const createComponent = tag => props =>
  createElement(tag, props, ...props.children)
