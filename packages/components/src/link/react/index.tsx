import { useTheme, themeNames } from '../../theme'
import { forwardRefWithStatics, ValueOf } from '../../util'
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
  appearance?: ValueOf<typeof appearances>
}

export const Link = forwardRefWithStatics<
  Props,
  HTMLAnchorElement,
  LinkStatics
>((props, forwardedRef) => {
  const {
    appearance = appearances.default,
    children: _children,
    ...rest
  } = props
  const ref = React.useRef<HTMLAnchorElement>()
  React.useImperativeHandle(
    forwardedRef,
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    () => ref.current as HTMLAnchorElement
  )
  const themeName = useTheme()

  return React.cloneElement(
    React.Children.only(props.children as React.ReactElement),
    {
      ...style({ appearance, themeName }),
      ...rest
    }
  )
})

Link.appearances = appearances
