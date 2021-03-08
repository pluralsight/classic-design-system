import Avatar from '@pluralsight/ps-design-system-avatar'
import Halo from '@pluralsight/ps-design-system-halo'
import { HTMLPropsFor, RefFor } from '@pluralsight/ps-design-system-util'
import { compose, css } from 'glamor'
import React, { ReactNode, MouseEventHandler } from 'react'

import stylesheet from '../css'

const styles = {
  navUser: (props: NavUserProps) => {
    const clickable: boolean = !!props.href || !!props.onClick

    return compose(
      css(stylesheet['.psds-navuser']),
      clickable && css(stylesheet['.psds-navuser--clickable'])
    )
  },
  meta: () => css(stylesheet['.psds-navuser__plan-name']),
  name: () => css(stylesheet['.psds-navuser__name']),
  words: () => css(stylesheet['.psds-navuser__words'])
}

interface BaseNavUserProps {
  meta?: ReactNode
  name?: string
  src?: string
}
interface AnchorProps extends BaseNavUserProps, HTMLPropsFor<'a'> {
  href: string
  onClick?: MouseEventHandler<HTMLAnchorElement>
}
interface ButtonProps extends BaseNavUserProps, HTMLPropsFor<'button'> {
  href?: undefined
  onClick: MouseEventHandler<HTMLButtonElement>
}
interface DivProps extends BaseNavUserProps, HTMLPropsFor<'div'> {
  href?: undefined
  onClick?: MouseEventHandler<HTMLDivElement>
}

type NavUserElement = HTMLAnchorElement | HTMLButtonElement | HTMLDivElement
type NavUserProps = AnchorProps | ButtonProps | DivProps
type NavUserComponent = React.ForwardRefExoticComponent<NavUserProps> & {
  (props: AnchorProps, ref?: RefFor<'a'>): JSX.Element
  (props: ButtonProps, ref?: RefFor<'button'>): JSX.Element
  (props: DivProps, ref?: RefFor<'div'>): JSX.Element
}

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
    const wrapperRef = isAnchor
      ? (ref as RefFor<'a'>)
      : isButton
      ? (ref as RefFor<'button'>)
      : (ref as RefFor<'div'>)
    const wrapperRest = isAnchor
      ? (rest as HTMLPropsFor<'a'>)
      : isButton
      ? (rest as HTMLPropsFor<'button'>)
      : (rest as HTMLPropsFor<'div'>)

    return (
      <Halo inline gapSize={Halo.gapSizes.small}>
        {React.createElement(
          tagName,
          {
            ref: wrapperRef,
            ...styles.navUser(props),
            ...wrapperRest
          },
          <>
            <Avatar src={src} size={Avatar.sizes.xSmall} name={name} />
            <Words name={name} meta={meta} />
          </>
        )}
      </Halo>
    )
  }
) as NavUserComponent

NavUser.displayName = 'NavUser'

export default NavUser

interface WordsProps extends HTMLPropsFor<'div'> {
  meta?: ReactNode
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
