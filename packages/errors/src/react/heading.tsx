import { compose, css } from 'glamor'
import React, { HTMLAttributes } from 'react'

import {
  css as stylesheet,
  headingSizes
} from '@pluralsight/ps-design-system-text'
import {
  useTheme,
  names as themeNames
} from '@pluralsight/ps-design-system-theme'
import { ValueOf } from '@pluralsight/ps-design-system-util'

const rmChildren = ({
  children,
  ...rest
}: {
  children?: React.ReactNode
  rest?: Record<string, unknown>
}) => rest

const styles = {
  text: ({
    size,
    themeName
  }: {
    size: ValueOf<typeof headingSizes>
    themeName: ValueOf<typeof themeNames>
  }) =>
    compose(
      css(stylesheet['.psds-text__heading']),
      css(stylesheet[`.psds-text__heading.psds-theme--${themeName}`]),
      css(stylesheet[`.psds-text__heading--size-${size}`]),
      css(
        stylesheet[`.psds-text__heading--size-${size}.psds-theme--${themeName}`]
      )
    )
}

export interface HeadingProps extends HTMLAttributes<HTMLElement> {
  size: ValueOf<typeof headingSizes>
}

const Heading: React.FC<HeadingProps> = ({ size, ...props }) => {
  const themeName = useTheme()

  return React.cloneElement(
    React.Children.only(props.children as React.ReactElement),
    {
      ...rmChildren(props),
      ...styles.text({ size, themeName })
    }
  )
}

export default Heading
