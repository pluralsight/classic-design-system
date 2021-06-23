import Avatar from '@pluralsight/ps-design-system-avatar'
import Halo from '@pluralsight/ps-design-system-halo'
import { HTMLPropsFor, RefFor } from '@pluralsight/ps-design-system-util'
import glamorDefault, * as glamorExports from 'glamor'
import React from 'react'

import stylesheet from '../css/index'

const glamor = glamorDefault || glamorExports

const styles = {
  navUser: (props: NavUserProps) => {
    const clickable: boolean = !!props.href || !!props.onClick

    return glamor.compose(
      glamor.css(stylesheet['.psds-navuser']),
      clickable && glamor.css(stylesheet['.psds-navuser--clickable'])
    )
  },
  meta: () => glamor.css(stylesheet['.psds-navuser__plan-name']),
  name: () => glamor.css(stylesheet['.psds-navuser__name']),
  words: () => glamor.css(stylesheet['.psds-navuser__words'])
}

interface NavUserProps
  extends HTMLPropsFor<HTMLAnchorElement | HTMLButtonElement | HTMLDivElement> {
  meta?: React.ReactNode
  name?: string
  src?: string
  href?: string
  target?: string
  rel?: string
  onClick?: React.MouseEventHandler<
    HTMLAnchorElement | HTMLButtonElement | HTMLDivElement
  >
}

type NavUserElement = HTMLAnchorElement | HTMLButtonElement | HTMLDivElement

const NavUser = React.forwardRef<NavUserElement, NavUserProps>(
  (props, forwardedRef) => {
    const { meta, name, src, ...rest } = props

    const ref = React.useRef<NavUserElement>(null)
    React.useImperativeHandle(
      forwardedRef,
      () => (ref.current as unknown) as NavUserElement
    )

    const isAnchor = 'href' in props
    const isButton = !isAnchor && 'onClick' in props
    const tagName = isAnchor ? 'a' : isButton ? 'button' : 'div'

    return (
      <Halo inline gapSize={Halo.gapSizes.small}>
        {React.createElement(
          tagName,
          {
            ref: ref as any,
            ...styles.navUser(props),
            ...rest
          },
          <>
            <Avatar src={src} size={Avatar.sizes.xSmall} name={name} />
            <Words name={name} meta={meta} />
          </>
        )}
      </Halo>
    )
  }
)

NavUser.displayName = 'NavUser'

export default NavUser

interface WordsProps extends HTMLPropsFor<HTMLDivElement> {
  meta?: React.ReactNode
  name?: string
}
const Words: React.FC<WordsProps> = props => {
  const { name, meta, ...rest } = props

  return (
    <div {...styles.words()} {...rest}>
      <div {...styles.name()}>{name}</div>
      <div {...styles.meta()}>{meta}</div>
    </div>
  )
}
