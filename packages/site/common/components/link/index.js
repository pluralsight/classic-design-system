import React from 'react'
import styleable from 'react-styleable'

import css from './index.module.css'

export default styleable(css)(props =>
                              {
                                const child = React.Children.only(props.children)
                                const newProps = {
                                  className: (child.props.className ? `${child.props.className} ` : '') + props.css['ps-link']
                                }
                                return React.cloneElement(child, newProps)
                              }
                             )
