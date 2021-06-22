import { HTMLPropsFor, ValueOf } from '@pluralsight/ps-design-system-util'
import glamorDefault, * as glamorExports from 'glamor'
import React from 'react'

import { asideLayoutCSS as stylesheet } from '../css/index'
import { asideLayout as vars } from '../vars/index'

const glamor = glamorDefault || glamorExports

const styleLayout = (asidePosition: ValueOf<typeof vars.asidePositions>) => {
  const label = 'psds-aside-layout'
  const position = `${label}--aside-position-${asidePosition}`

  return glamor.compose(
    glamor.css(stylesheet[`.${label}`]),
    glamor.css(stylesheet[`.${position}`]),

    glamor.media(
      '(min-width: 769px)',
      glamor.compose(
        glamor.css(stylesheet['@media (min-width: 769px)'][`.${label}`]),
        glamor.css(stylesheet['@media (min-width: 769px)'][`.${position}`])
      )
    )
  )
}
interface AsideLayoutProps extends HTMLPropsFor<HTMLDivElement> {
  main: React.ReactElement<typeof Main>
  aside: React.ReactElement<typeof Aside>
  asidePosition?: ValueOf<typeof vars.asidePositions>
}
interface AsideLayoutStatics {
  Aside: typeof Aside
  asidePositions: typeof vars.asidePositions
  Main: typeof Main
}
const AsideLayout: React.FC<AsideLayoutProps> & AsideLayoutStatics = props => {
  const {
    asidePosition = vars.asidePositions.first,
    aside,
    main,
    ...rest
  } = props
  return (
    <div {...styleLayout(asidePosition)} {...rest}>
      {React.cloneElement<AsideProps>(aside as any, {
        _asidePosition: asidePosition
      })}
      {main}
    </div>
  )
}

const styleAside = (asidePosition: ValueOf<typeof vars.asidePositions>) => {
  const label = 'psds-aside-layout__aside'
  const position = `${label}--aside-position-${asidePosition}`

  return glamor.compose(
    glamor.css(stylesheet[`.${label}`]),
    glamor.css(stylesheet[`.${position}`]),

    glamor.media(
      '(min-width: 769px)',
      glamor.compose(
        glamor.css(stylesheet['@media (min-width: 769px)'][`.${label}`]),
        glamor.css(stylesheet['@media (min-width: 769px)'][`.${position}`])
      )
    )
  )
}
interface AsideProps extends HTMLPropsFor<HTMLDivElement> {
  _asidePosition?: AsideLayoutProps['asidePosition']
}
const Aside: React.FC<AsideProps> = props => {
  const {
    _asidePosition: asidePositionFromParent = vars.asidePositions.first,
    children,
    ...rest
  } = props
  return (
    <div {...styleAside(asidePositionFromParent)} {...rest}>
      {children}
    </div>
  )
}
Aside.displayName = 'AsideLayout.Aside'

const styleMain = () => {
  const label = 'psds-aside-layout__main'

  return glamor.compose(
    glamor.css(stylesheet[`.${label}`]),

    glamor.media(
      '(min-width: 769px)',
      glamor.css(stylesheet['@media (min-width: 769px)'][`.${label}`])
    )
  )
}
const Main: React.FC = props => (
  <div {...styleMain()} {...props}>
    {props.children}
  </div>
)
Main.displayName = 'AsideLayout.Main'

AsideLayout.displayName = 'AsideLayout'
AsideLayout.asidePositions = vars.asidePositions
AsideLayout.Aside = Aside
AsideLayout.Main = Main
export const asidePositions = vars.asidePositions
export default AsideLayout
