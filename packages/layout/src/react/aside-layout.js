import { compose, css, media } from 'glamor'
import PropTypes from 'prop-types'
import React from 'react'

import { elementOfType } from '@pluralsight/ps-design-system-prop-types'

import { asideLayout as vars } from '../vars/index.js'
import { asideLayoutCSS as stylesheet } from '../css/index.js'

const styleLayout = props => {
  const label = 'psds-aside-layout'
  const position = `${label}--aside-position-${props.asidePosition}`

  return compose(
    css(stylesheet[`.${label}`]),
    css(stylesheet[`.${position}`]),

    media(
      '(min-width: 769px)',
      compose(
        css(stylesheet['@media (min-width: 769px)'][`.${label}`]),
        css(stylesheet['@media (min-width: 769px)'][`.${position}`])
      )
    )
  )
}

const styleAside = props => {
  const label = 'psds-aside-layout__aside'
  const position = `${label}--aside-position-${props.asidePosition}`

  return compose(
    css(stylesheet[`.${label}`]),
    css(stylesheet[`.${position}`]),

    media(
      '(min-width: 769px)',
      compose(
        css(stylesheet['@media (min-width: 769px)'][`.${label}`]),
        css(stylesheet['@media (min-width: 769px)'][`.${position}`])
      )
    )
  )
}

const styleMain = props => {
  const label = 'psds-aside-layout__main'

  return compose(
    css(stylesheet[`.${label}`]),

    media(
      '(min-width: 769px)',
      css(stylesheet['@media (min-width: 769px)'][`.${label}`])
    )
  )
}

const rmNonHtmlProps = props => {
  const { main, aside, asidePosition, ...rest } = props
  return rest
}

const AsideLayout = props => (
  <div {...styleLayout(props)} {...rmNonHtmlProps(props)}>
    {React.cloneElement(props.aside, {
      asidePosition: props.asidePosition
    })}
    {props.main}
  </div>
)

function Aside(props) {
  return (
    <div {...styleAside(props)} {...rmNonHtmlProps(props)}>
      {props.children}
    </div>
  )
}
Aside.displayName = 'AsideLayout.Aside'
Aside.propTypes = {
  children: PropTypes.any
}

const Main = props => (
  <div {...styleMain(props)} {...props}>
    {props.children}
  </div>
)
Main.displayName = 'AsideLayout.Main'
Main.propTypes = {
  children: PropTypes.any
}

AsideLayout.displayName = 'AsideLayout'

AsideLayout.asidePositions = vars.asidePositions

AsideLayout.Aside = Aside
AsideLayout.Main = Main

AsideLayout.propTypes = {
  main: elementOfType(Main).isRequired,
  aside: elementOfType(Aside).isRequired,
  asidePosition: PropTypes.oneOf(
    Object.keys(vars.asidePositions).map(key => vars.asidePositions[key])
  )
}
AsideLayout.defaultProps = {
  asidePosition: vars.asidePositions.first
}

export const asidePositions = vars.asidePositions
export default AsideLayout
