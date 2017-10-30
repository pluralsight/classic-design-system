import core from '@pluralsight/ps-design-system-core'
import * as glamor from 'glamor'
import glamorous from 'glamorous'
import PropTypes from 'prop-types'
import React from 'react'
import {
  defaultName as themeDefaultName,
  names as themeNames
} from '@pluralsight/ps-design-system-theme/react'

const getBarActiveStyles = ({ themeName }) => ({
  fontWeight: core.type.fontWeightMedium,
  paddingBottom: 0,
  borderBottom: `${core.layout.spacingXXSmall} solid ${core.colors.orange}`,
  color: {
    [themeNames.dark]: core.colors.white,
    [themeNames.light]: core.colors.gray06
  }[themeName]
})

const getBarHoverStyles = ({ themeName }) =>
  ({
    [themeNames.dark]: {
      color: core.colors.white,
      borderBottom: `4px solid ${core.colors.gray02}`,
      paddingBottom: 0
    },
    [themeNames.light]: {
      color: core.colors.gray06,
      borderBottom: `4px solid ${core.colors.gray03}`,
      paddingBottom: 0
    }
  }[themeName])

const Bar = glamorous.div({
  display: 'flex',
  alignItems: 'center',
  height: 'calc(100% + 1px)',
  marginBottom: '-1px',
  fontWeight: core.type.fontWeightBook,
  padding: `0 0 ${core.layout.spacingXXSmall} 0`
})

const ListItem = glamorous.button(
  {
    height: '100%',
    background: 'none',
    border: 0,
    cursor: 'pointer',
    padding: `0 calc(${core.layout.spacingXLarge} / 2)`,
    color: core.colors.gray02,
    transition: `color ${core.motion.speedNormal}`,
    ':focus': {
      outline: 'none'
    },
    ':first-child': {
      paddingLeft: 0
    }
  },
  props => ({
    ':hover div': getBarHoverStyles(props),
    ':focus div': getBarHoverStyles(props),
    ':active div': getBarActiveStyles(props)
  }),
  ({ themeName }) =>
    ({
      [themeNames.dark]: { color: core.colors.gray02 },
      [themeNames.light]: { color: core.colors.gray03 }
    }[themeName]),
  props =>
    props.active
      ? {
          ':hover div': getBarActiveStyles(props),
          ':focus div': getBarActiveStyles(props),
          '& div': getBarActiveStyles(props)
        }
      : null
)

const ListItemComponent = (props, context) => (
  <ListItem
    role="tab"
    aria-selected={props.active}
    onClick={props.onClick}
    active={props.active}
    themeName={context.themeName || themeDefaultName}
  >
    <Bar>{props.children}</Bar>
  </ListItem>
)

ListItemComponent.propTypes = {
  active: PropTypes.bool,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onClick: PropTypes.func
}
ListItemComponent.defaultProps = {
  active: false
}
ListItemComponent.contextTypes = {
  themeName: PropTypes.string
}

export default ListItemComponent
