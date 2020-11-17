import { css } from 'glamor'
import { useTheme } from '@pluralsight/ps-design-system-theme'
import { appearances } from '../vars'
import { RefForwardingComponent } from '@pluralsight/ps-design-system-util'

import React, { HTMLAttributes } from 'react'

import stylesheet from '../css'

const style = ({
  appearance,
  themeName
}: {
  appearance: string
  themeName: string
}) =>
  css(
    stylesheet[`.psds-link`],
    appearance === appearances.default
      ? stylesheet[
          `.psds-link--appearance-${appearance}.psds-theme--${themeName}`
        ]
      : stylesheet[`.psds-link--appearance-${appearance}`]
  )

interface LinkStatics {
  appearances: typeof appearances
}

interface Props extends HTMLAttributes<HTMLAnchorElement> {
  appearance?: string
}
interface LinkComponent
  extends RefForwardingComponent<Props, HTMLAnchorElement, LinkStatics> {}

const Link = React.forwardRef<HTMLAnchorElement, Props>(
  (props, forwardedRef) => {
    const { appearance, children: _children, ...rest } = props
    const ref = React.useRef<HTMLAnchorElement>()
    React.useImperativeHandle(forwardedRef, () => ref.current)
    const themeName = useTheme()

    return React.cloneElement(
      React.Children.only(props.children as React.ReactElement),
      {
        ...style({ appearance, themeName }),
        ...rest
      }
    )
  }
) as LinkComponent

Link.appearances = appearances

Link.defaultProps = {
  appearance: appearances.default
}

export { appearances }

export default Link
