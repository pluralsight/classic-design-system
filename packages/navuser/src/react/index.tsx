import Avatar from '@pluralsight/ps-design-system-avatar'
import Halo from '@pluralsight/ps-design-system-halo'
import { PropsOf, RefFor } from '@pluralsight/ps-design-system-util'
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
interface AnchorProps extends BaseNavUserProps, PropsOf<'a'> {
  href: string
  onClick?: MouseEventHandler<HTMLAnchorElement>
}
interface ButtonProps extends BaseNavUserProps, PropsOf<'button'> {
  href?: undefined
  onClick: MouseEventHandler<HTMLButtonElement>
}
interface DivProps extends BaseNavUserProps, PropsOf<'div'> {
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

    const Wrapper: React.FC = wrapperProps =>
      isAnchor ? (
        <a
          ref={ref as RefFor<'a'>}
          {...(rest as PropsOf<'a'>)}
          {...wrapperProps}
        />
      ) : isButton ? (
        <button
          ref={ref as RefFor<'button'>}
          {...wrapperProps}
          {...(rest as PropsOf<'button'>)}
        />
      ) : (
        <div
          ref={ref as RefFor<'div'>}
          {...wrapperProps}
          {...(rest as PropsOf<'div'>)}
        />
      )

    return (
      <Halo inline gapSize={Halo.gapSizes.small}>
        <Wrapper {...styles.navUser(props)}>
          <>
            <Avatar src={src} size={Avatar.sizes.xSmall} name={name} />
            <Words name={name} meta={meta} />
          </>
        </Wrapper>
      </Halo>
    )
  }
) as NavUserComponent

NavUser.displayName = 'NavUser'

export default NavUser

interface WordsProps extends PropsOf<'div'> {
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
