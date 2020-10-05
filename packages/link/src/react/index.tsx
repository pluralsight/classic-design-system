import { css } from 'glamor'
import filterReactProps from '@pluralsight/ps-design-system-filter-react-props'
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
    const ref = React.useRef<HTMLAnchorElement>()
    React.useImperativeHandle(forwardedRef, () => ref.current)
    const themeName = useTheme()

    let tagName = 'a'
    React.useEffect(() => {
      if (ref.current && ref.current.tagName) tagName = ref.current.tagName
    })

    const { children, ...rest } = props
    return React.cloneElement(
      React.Children.only(props.children as React.ReactElement),
      {
        ...style({ appearance: props.appearance, themeName }),
        ...filterReactProps(rest, { tagName })
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
