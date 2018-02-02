import core from '@pluralsight/ps-design-system-core'
import * as glamor from 'glamor'
import glamorous from 'glamorous'
import PropTypes from 'prop-types'
import React from 'react'
import {
  defaultName as themeDefaultName,
  names as themeNames
} from '@pluralsight/ps-design-system-theme/react'

const getTextWidthActiveStyles = ({ themeName }) => ({
  fontWeight: core.type.fontWeightMedium,
  color: {
    [themeNames.dark]: core.colors.white,
    [themeNames.light]: core.colors.gray06
  }[themeName]
})

const getTextWidthHoverStyles = ({ themeName }) =>
  ({
    [themeNames.dark]: {
      color: core.colors.white
    },
    [themeNames.light]: {
      color: core.colors.gray06
    }
  }[themeName])

const getBarHoverStyles = _ => ({
  backgroundColor: core.colors.gray02,
  height: core.layout.spacingXXSmall,
  opacity: 1
})

const getBarActiveStyles = ({ active }) => ({
  backgroundColor: core.colors.orange,
  ...(active ? { opacity: 1, height: core.layout.spacingXXSmall } : {})
})

const TextWidth = glamorous.div({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  height: 'calc(100% + 1px)',
  marginBottom: '-1px',
  fontWeight: core.type.fontWeightBook,
  padding: `0 0 ${core.layout.spacingXXSmall} 0`,
  transition: `color ${core.motion.speedXFast} linear`
})

const Bar = glamorous.span({
  position: 'absolute',
  left: 0,
  right: 0,
  bottom: 0,
  width: '100%',
  display: 'block',
  height: 0,
  opacity: 0,
  transition: `height ${core.motion.speedNormal} ease-in-out, opacity ${
    core.motion.speedNormal
  } ease-in-out`
})

const ListItem = glamorous.button(
  {
    height: '100%',
    background: 'none',
    border: 0,
    cursor: 'pointer',
    padding: `0 calc(${core.layout.spacingXLarge} / 2)`,
    ':focus': {
      outline: 'none'
    },
    ':first-child': {
      paddingLeft: 0
    }
  },
  props => ({
    // TextWidth
    ':hover div': getTextWidthHoverStyles(props),
    ':focus div': getTextWidthHoverStyles(props),
    ':active div': getTextWidthActiveStyles(props),
    // Bar
    ':hover span': getBarHoverStyles(props),
    ':focus span': getBarHoverStyles(props),
    ':active span': getBarActiveStyles(props)
  }),
  ({ themeName }) =>
    ({
      [themeNames.dark]: { color: core.colors.gray02 },
      [themeNames.light]: { color: core.colors.gray03 }
    }[themeName]),
  props =>
    props.active
      ? {
          // TextWidth
          ':hover div': getTextWidthActiveStyles(props),
          ':focus div': getTextWidthActiveStyles(props),
          '& div': getTextWidthActiveStyles(props),
          // Bar
          ':hover span': getBarActiveStyles(props),
          ':focus span': getBarActiveStyles(props),
          '& span': getBarActiveStyles(props)
        }
      : null
)

const ListItemComponent = (props, context) => (
  <ListItem
    role="tab"
    aria-selected={props.active}
    onClick={props.onClick}
    active={props.active}
    innerRef={props.innerRef}
    tabIndex="-1"
    themeName={context.themeName || themeDefaultName}
  >
    <TextWidth>
      {props.children}
      <Bar />
    </TextWidth>
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
