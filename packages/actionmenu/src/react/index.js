import core from '@pluralsight/ps-design-system-core'
import glamorous, { Div } from 'glamorous'
import Icon from '@pluralsight/ps-design-system-icon/react'
import PropTypes from 'prop-types'
import React from 'react'
import sizeMe from 'react-sizeme'

import Arrow from './arrow'

const origins = {
  topLeft: 'topLeft',
  topRight: 'topRight',
  bottomRight: 'bottomRight',
  bottomLeft: 'bottomLeft'
}

const menuPaddingVert = core.layout.spacingTiny
const nestedMenuHorzOverlap = 0 // 3

const Menu = glamorous.ul({
  position: 'absolute',
  display: 'inline-block',
  marginLeft: 0,
  background: core.colors.white,
  borderRadius: '2px',
  padding: `${menuPaddingVert} 0`,
  minWidth: '160px',
  maxWidth: '320px',
  // overflow: 'hidden',
  listStyle: 'none',
  boxShadow: `0 2px 4px rgba(0, 0, 0, 0.5)`
})

const itemHoverStyles = {
  background: core.colors.bone,
  '> ul': {
    display: 'inline-block'
  }
}

const Item = glamorous.li({
  display: 'flex',
  width: '100%',
  alignItems: 'center',
  padding: `0 ${core.layout.spacingMedium}`,
  '> ul': {
    display: 'none'
  },
  ':hover': itemHoverStyles,
  ':focus': itemHoverStyles,
  ':active': itemHoverStyles
})

const ItemChildrenButton = glamorous.button({
  flexGrow: 1,
  padding: 0,
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  textAlign: 'left',
  fontSize: core.type.fontSizeSmall,
  lineHeight: core.type.lineHeightExtra,
  fontWeight: core.type.fontWeightMedium,
  cursor: 'pointer',
  background: 'none',
  border: 'none'
})

const IconComponent = props =>
  <Div
    display="inline-flex"
    alignItems="center"
    marginRight={core.layout.spacingXSmall}
  >
    <Icon id={props.iconId} size={Icon.sizes.small} />
  </Div>

const NestedArrow = _ =>
  <Div marginLeft="auto" paddingLeft={core.layout.spacingXSmall}>
    <Arrow />
  </Div>

const renderNested = props =>
  props.nested
    ? React.cloneElement(props.nested, {
        css: {
          left: props.size.width + nestedMenuHorzOverlap,
          top: `calc(-1 * ${menuPaddingVert})`
        }
      })
    : null

// TODO: if nested, no button, make li the button, add a tabindex
// when click button, focus on menu
// TODO: menu role tablist aria-expanded false by default
const ItemComponent = props => {
  return (
    <Item css={props.css} className={props.className} iconId={props.iconId}>
      {props.iconId && <IconComponent iconId={props.iconId} />}
      <ItemChildrenButton onClick={props.onClick}>
        {props.children}
      </ItemChildrenButton>
      {props.nested && <NestedArrow />}
      {renderNested(props)}
    </Item>
  )
}
ItemComponent.propTypes = {
  iconId: PropTypes.oneOf(Object.keys(Icon.ids)),
  nested: PropTypes.element // ActionMenu
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
ActionMenuComponent.displayName = 'ActionMenu'

ActionMenuComponent.Item = sizeMe({ monitorWidth: true })(ItemComponent)
ActionMenuComponent.Divider = Divider
ActionMenuComponent.origins = origins
ActionMenuComponent.propTypes = {
  origin: PropTypes.oneOf(Object.keys(origins))
}
ActionMenuComponent.defaultProps = {
  origin: origins.topLeft
}

export default ActionMenuComponent
