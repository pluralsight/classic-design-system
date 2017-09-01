import core from '@pluralsight/ps-design-system-core'
import glamorous, { Div } from 'glamorous'
import Icon from '@pluralsight/ps-design-system-icon/react'
import PropTypes from 'prop-types'
import React from 'react'
import sizeMe from 'react-sizeme'

console.log('module')

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
  boxShadow: `0 2px 4px rgba(0, 0, 0, 0.5)`,
  fontSize: core.type.fontSizeSmall
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
  lineHeight: core.type.lineHeightExtra,
  fontWeight: core.type.fontWeightMedium,
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
class ItemComponent extends React.Component {
  constructor(props) {
    super(props)
    this.handleKeyDown = this.handleKeyDown.bind(this)
  }
  componentDidMount() {
    console.log('mounted')
  }
  handleKeyDown(evt) {
    console.log('keydown', evt.key)
    if (evt.key === 'ArrowRight') {
      evt.stopPropagation()
      evt.preventDefault()
    }
  }
  render() {
    const filteredProps = {
      css: this.props.css,
      className: this.props.className,
      iconId: this.props.iconId,
      ...(this.props.nested ? { tabIndex: 0 } : {})
    }
    return (
      <Item {...filteredProps}>
        {this.props.iconId && <IconComponent iconId={this.props.iconId} />}
        <ItemChildrenButton
          onClick={this.props.onClick}
          onKeyDown={this.handleKeyDown}
        >
          {this.props.children}
        </ItemChildrenButton>
        {this.props.nested && <NestedArrow />}
        {renderNested(this.props)}
      </Item>
    )
  }
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
