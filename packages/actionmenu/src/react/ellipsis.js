import { css } from 'glamor'
import React from 'react'

import stylesheet from '../css/index.js'

const styles = () => css(stylesheet[`.psds-actionmenu__ellipsis`])

export const Ellipsis = props => <span {...props} {...styles()} />
