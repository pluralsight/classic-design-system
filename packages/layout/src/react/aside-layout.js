import * as glamor from 'glamor'
import PropTypes from 'prop-types'
import React from 'react'

import { AsideLayout as vars } from '../vars/index.js'
import { AsideLayout as css } from '../css/index.js'

const styleLayout = props =>
  glamor.css(
    css['.psds-aside-layout'],
    css[`.psds-aside-layout--aside-position-${props.asidePosition}`],
    {
      '@media (min-width: 769px)':
        css['@media (min-width: 769px)'][
          `.psds-aside-layout--aside-position-${props.asidePosition}`
        ]
    }
  )

const styleAside = props =>
  glamor.css(
    css['.psds-aside-layout__aside'],
    css[`.psds-aside-layout__aside--aside-position-${props.asidePosition}`],
    {
      '@media (min-width: 769px)': {
        ...css['@media (min-width: 769px)'][`.psds-aside-layout__aside`],
        ...css['@media (min-width: 769px)'][
          `.psds-aside-layout__aside--aside-position-${props.asidePosition}`
        ]
      }
    }
  )

const styleMain = props =>
  glamor.css(css['.psds-aside-layout__main'], {
    '@media (min-width: 769px)':
      css['@media (min-width: 769px)']['.psds-aside-layout__main']
  })

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
  main: PropTypes.element.isRequired, // AsideLayout.Main
  aside: PropTypes.element.isRequired, // AsideLayout.Aside
  asidePosition: PropTypes.oneOf(
    Object.keys(vars.asidePositions).map(key => vars.asidePositions[key])
  )
}
AsideLayout.defaultProps = {
  asidePosition: vars.asidePositions.first
}

export const asidePositions = vars.asidePositions
export default AsideLayout
