import React from 'react'
import { useTheme } from '@pluralsight/ps-design-system-theme'
import { appearances } from '../vars'
import {
  RefForwardingComponent,
  classNames
} from '@pluralsight/ps-design-system-util'

import '../css/index.css'

const style = ({
  appearance,
  themeName
}: {
  appearance: string
  themeName: string
}) =>
  classNames(
    `psds-link`,
    `psds-link--theme--${themeName}`,
    `psds-link--appearance-${appearance}`
  )

interface LinkStatics {
  appearances: typeof appearances
}

interface Props extends React.HTMLAttributes<HTMLAnchorElement> {
  appearance?: string
}
interface LinkComponent
  extends RefForwardingComponent<Props, HTMLAnchorElement, LinkStatics> {}

const Link = React.forwardRef<HTMLAnchorElement, Props>(
  ({ className, ...props }, forwardedRef) => {
    const { appearance, children: _children, ...rest } = props
    const ref = React.useRef<HTMLAnchorElement>()
    React.useImperativeHandle(forwardedRef, () => ref.current)
    const themeName = useTheme()

    return React.cloneElement(
      React.Children.only(props.children as React.ReactElement),
      {
        className: classNames(style({ appearance, themeName }), className),
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
