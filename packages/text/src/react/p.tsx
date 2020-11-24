import { compose, css } from 'glamor'
import React from 'react'

import { useTheme, names } from '@pluralsight/ps-design-system-theme'
import { ValueOf, HTMLPropsFor } from '@pluralsight/ps-design-system-util'

import stylesheet from '../css'

const style = ({ themeName }: { themeName: ValueOf<typeof names> }) =>
  compose(
    css(stylesheet[`.psds-text__p`]),
    css(stylesheet[`.psds-text__p.psds-theme--${themeName}`])
  )

const P: React.FC<HTMLPropsFor<'p'>> = props => {
  const themeName = useTheme()

  return (
    <p {...props} {...style({ themeName })}>
      {props.children}
    </p>
  )
}

export default P
