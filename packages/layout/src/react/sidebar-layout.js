import * as glamor from 'glamor'
import PropTypes from 'prop-types'
import React from 'react'

import { SidebarLayout as vars } from '../vars'
import { SidebarLayout as css } from '../css'

const styleLayout = props =>
  glamor.css(
    css['.psds-sidebar-layout'],
    css[`.psds-sidebar-layout--sidebar-position-${props.sidebarPosition}`],
    {
      '@media (min-width: 769px)':
        css['@media (min-width: 769px)'][
          `.psds-sidebar-layout--sidebar-position-${props.sidebarPosition}`
        ]
    }
  )

const styleSidebar = props =>
  glamor.css(
    css['.psds-sidebar-layout__sidebar'],
    css[
      `.psds-sidebar-layout__sidebar--sidebar-position-${props.sidebarPosition}`
    ],
    {
      '@media (min-width: 769px)': {
        ...css['@media (min-width: 769px)'][`.psds-sidebar-layout__sidebar`],
        ...css['@media (min-width: 769px)'][
          `.psds-sidebar-layout__sidebar--sidebar-position-${props.sidebarPosition}`
        ]
      }
    }
  )

const styleMain = props =>
  glamor.css(css['.psds-sidebar-layout__main'], {
    '@media (min-width: 769px)':
      css['@media (min-width: 769px)']['.psds-sidebar-layout__main']
  })

const rmNonHtmlProps = props => {
  const { main, sidebar, sidebarPosition, ...rest } = props
  return rest
}

const SidebarLayout = props => (
  <div {...styleLayout(props)} {...rmNonHtmlProps(props)}>
    {React.cloneElement(props.sidebar, {
      sidebarPosition: props.sidebarPosition
    })}
    {props.main}
  </div>
)

const Sidebar = props => (
  <div {...styleSidebar(props)} {...rmNonHtmlProps(props)}>
    {props.children}
  </div>
)
Sidebar.displayName = 'SidebarLayout.Sidebar'

const Main = props => (
  <div {...styleMain(props)} {...props}>
    {props.children}
  </div>
)
Main.displayName = 'SidebarLayout.Main'

SidebarLayout.displayName = 'SidebarLayout'

SidebarLayout.sidebarPositions = vars.sidebarPositions

SidebarLayout.Sidebar = Sidebar
SidebarLayout.Main = Main

SidebarLayout.propTypes = {
  main: PropTypes.element.isRequired, // SidebarLayout.Main
  sidebar: PropTypes.element.isRequired, // SidebarLayout.Main
  sidebarPosition: PropTypes.oneOf(Object.keys(vars.sidebarPositions))
}
SidebarLayout.defaultProps = {
  sidebarPosition: vars.sidebarPositions.first
}

export const sidebarPositions = vars.sidebarPositions
export default SidebarLayout
