import {
  useTheme,
  names as themeNames
} from '@pluralsight/ps-design-system-theme'
import {
  RefForwardingComponent,
  ValueOf
} from '@pluralsight/ps-design-system-util'
import glamorDefault, * as glamorExports from 'glamor'
import React from 'react'

import stylesheet from '../css/index'
import { appearances } from '../vars/index'

const glamor = glamorDefault || glamorExports

const style = ({
  appearance,
  themeName
}: {
  appearance: ValueOf<typeof appearances>
  themeName: ValueOf<typeof themeNames>
}) =>
  glamor.css(
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

interface Props extends React.HTMLAttributes<HTMLAnchorElement> {
  appearance?: string
}
interface LinkComponent
  extends RefForwardingComponent<Props, HTMLAnchorElement, LinkStatics> {}

const Link = React.forwardRef<HTMLAnchorElement, Props>(
  (props, forwardedRef) => {
    const {
      appearance = appearances.default,
      children: _children,
      ...rest
    } = props
    const ref = React.useRef<HTMLAnchorElement>()
    React.useImperativeHandle(
      forwardedRef,
      () => ref.current as unknown as HTMLAnchorElement
    )
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

export { appearances }

export default Link
