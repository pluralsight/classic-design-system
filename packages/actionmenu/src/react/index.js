import core from '@pluralsight/ps-design-system-core'
import glamorous, { Div } from 'glamorous'
import Icon from '@pluralsight/ps-design-system-icon/react'
import PropTypes from 'prop-types'
import React from 'react'

const Menu = glamorous.div({
  position: 'absolute',
  display: 'inline-block',
  background: core.colors.white,
  borderRadius: '2px',
  padding: `${core.layout.spacingTiny} 0`,
  maxWidth: '320px',
  overflow: 'hidden'
})

const Item = glamorous.div({
  display: 'flex',
  alignItems: 'center',
  padding: `0 ${core.layout.spacingMedium}`,
  fontSize: core.type.fontSizeSmall,
  lineHeight: core.type.lineHeightExtra,
  fontWeight: core.type.fontWeightMedium,
  cursor: 'pointer',
  ':hover, :active, :focus': {
    background: core.colors.bone
  }
})

const ItemChildren = glamorous.div({
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis'
})

const IconComponent = props =>
  <Div
    display="inline-flex"
    alignItems="center"
    marginRight={core.layout.spacingXSmall}
  >
    <Icon id={props.iconId} size={Icon.sizes.small} />
  </Div>

const ItemComponent = props => {
  return (
    <Item css={props.css} className={props.className} iconId={props.iconId}>
      {props.iconId && <IconComponent iconId={props.iconId} />}
      <ItemChildren>{props.children}</ItemChildren>
    </Item>
  )
}
ItemComponent.propTypes = {
  iconId: PropTypes.oneOf(Object.keys(Icon.ids))
}

const Divider = glamorous.div({
  height: '1px',
  width: '100%',
  backgroundColor: core.colors.gray01,
  margin: `${core.layout.spacingTiny} 0`
})

const ActionMenuComponent = props =>
  <Menu css={props.css} className={props.className}>
    {props.children}
  </Menu>

ActionMenuComponent.Item = ItemComponent
ActionMenuComponent.Divider = Divider
ActionMenuComponent.propTypes = {}
ActionMenuComponent.defaultProps = {}

export default ActionMenuComponent
