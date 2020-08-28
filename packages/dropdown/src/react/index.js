import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import ActionMenu from '@pluralsight/ps-design-system-actionmenu'
import { Item } from './item.js'
import { useDropdown, DropdownContext } from '../js/index.js'
import { Label } from './label.js'
import { Layout } from './layout.js'
import { Menu } from './menu.js'
import { SubLabel } from './sub-label.js'
import { Button } from './button.js'
import { Selected } from './selected.js'
import * as vars from '../vars/index.js'

const Dropdown = forwardRef(
  (
    {
      appearance,
      disabled,
      className,
      error,
      label,
      menu,
      onChange,
      onClick,
      placeholder,
      size,
      subLabel,
      style,
      value,
      ...rest
    },
    forwardedRef
  ) => {
    const {
      combinedRef,
      handleKeyDown,
      handleMenuChange,
      handleToggleOpen,
      inNode,
      isOpen,
      longestMenuItemState,
      menuPosition,
      menuRef,
      selectedLabel,
      selectedValue,
      setMenuPosition,
      setOpen,
      width
    } = useDropdown({
      forwardedRef,
      menu,
      value,
      onChange,
      onClick,
      placeholder
    })
    return (
      <Layout
        disabled={disabled}
        style={style}
        className={className}
        onKeyDown={handleKeyDown}
        label={<Label label={label} />}
        menu={
          <DropdownContext.Provider value={selectedValue}>
            <Menu
              inNode={inNode}
              isOpen={isOpen}
              menu={menu}
              menuPosition={menuPosition}
              onClick={handleMenuChange}
              onClose={() => {
                setOpen(false)
              }}
              ref={menuRef}
              width={width}
            />
          </DropdownContext.Provider>
        }
        subLabel={<SubLabel subLabel={subLabel} />}
        button={
          <Button
            appearance={appearance}
            disabled={disabled}
            error={error}
            isOpen={isOpen}
            onClick={handleToggleOpen}
            setMenuPosition={setMenuPosition}
            size={size}
            ref={combinedRef}
            {...rest}
          >
            <Selected
              appearance={appearance}
              label={longestMenuItemState.label}
              placeholder={placeholder}
              selectedLabel={selectedLabel}
              size={size}
            />
          </Button>
        }
      />
    )
  }
)

Dropdown.displayName = 'Dropdown'
Dropdown.propTypes = {
  appearance: PropTypes.oneOf(
    Object.keys(vars.appearances).map(k => vars.appearances[k])
  ),
  disabled: PropTypes.bool,
  className: PropTypes.string,
  error: PropTypes.bool,
  label: PropTypes.node,
  menu: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)])
    .isRequired,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  placeholder: PropTypes.string,
  size: PropTypes.oneOf(Object.values(vars.sizes)),
  subLabel: PropTypes.node,
  style: PropTypes.object,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}
Dropdown.defaultProps = {
  appearance: vars.appearances.default,
  disabled: false,
  error: false,
  size: vars.sizes.medium,
  menu: <span />
}
Dropdown.context = DropdownContext
Dropdown.Item = Item
Dropdown.Divider = ActionMenu.Divider
Dropdown.appearances = vars.appearances
Dropdown.sizes = vars.sizes
Dropdown.Label = Label
Dropdown.Layout = Layout
Dropdown.Menu = Menu
Dropdown.SubLabel = SubLabel
Dropdown.Button = Button
Dropdown.Selected = Selected
export default Dropdown
