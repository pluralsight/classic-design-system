import * as glamor from 'glamor'
import PropTypes from 'prop-types'
import React from 'react'

import css from '../css'

const styles = {
  buttonContainer: _ => glamor.css(css['.psds-radio-group__button-container']),
  group: ({ disabled }) =>
    glamor.css(
      css['.psds-radio-group'],
      disabled && css['.psds-radio-group--disabled'],
      { ':focus': css['.psds-radio-group:focus'] }
    )
}
class Group extends React.Component {
  constructor(props) {
    super(props)
    this.circles = []
    this.state = { focusValue: null, value: this.props.value }
    this.handleSelect = this.handleSelect.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)
    this.handleGroupFocus = this.handleGroupFocus.bind(this)
    this.handleButtonFocus = this.handleButtonFocus.bind(this)
  }
  componentDidUpdate(prevProps) {
    if (prevProps.value !== this.props.value) {
      this.setState({ value: this.props.value })
    }
  }
  handleKeyDown(evt) {
    if (evt.key === 'Enter' || evt.key === ' ') {
      const buttonArray = React.Children.toArray(this.props.children)
      const focusedButton = buttonArray.find(
        button => button.props.value === this.state.focusValue
      )
      const value = focusedButton.props.value
      this.setState({ value })
      if (typeof this.props.onSelect === 'function')
        this.props.onSelect(evt, value)
    } else if (evt.key === 'ArrowDown') {
      this.keyboardNav(evt, 1)
    } else if (evt.key === 'ArrowUp') {
      this.keyboardNav(evt, -1)
    } else if (evt.key === 'Tab') {
      this.setState({ focusValue: null })
    }
  }
  keyboardNav(evt, indexDelta) {
    evt.stopPropagation()
    evt.preventDefault()
    const buttonArray = React.Children.toArray(this.props.children)
    const currentValueIndex = buttonArray.findIndex(
      button => button.props.value === this.state.focusValue
    )
    const newFocusIndex =
      currentValueIndex + indexDelta > buttonArray.length - 1
        ? currentValueIndex
        : currentValueIndex + indexDelta < 0
          ? 0
          : currentValueIndex + indexDelta
    const newFocusValue = buttonArray[newFocusIndex].props.value
    this.setState({ focusValue: newFocusValue })
  }
  handleGroupFocus() {
    if (this.props.disabled || this.state.focusValue) return

    const buttonArray = React.Children.toArray(this.props.children)
    const defaultFocusValue = buttonArray[0].props.value
    this.setState({ focusValue: defaultFocusValue })
  }
  handleButtonFocus(evt, focusValue) {
    this.setState({ focusValue })
  }
  handleSelect(evt, value) {
    this.setState(
      _ => ({ focusValue: value, value }),
      _ => {
        if (typeof this.props.onSelect === 'function')
          this.props.onSelect(evt, value)
      }
    )
  }
  render() {
    const { props, state } = this
    return (
      <div
        tabIndex={props.tabIndex || '0'}
        onFocus={props.disabled ? null : this.handleGroupFocus}
        onKeyDown={props.disabled ? null : this.handleKeyDown}
        role="radiogroup"
        {...styles.group(props)}
      >
        {React.Children.map(props.children, (child, i) => (
          <div {...styles.buttonContainer(props)}>
            {React.cloneElement(child, {
              checked: state.value === child.props.value,
              tabIndex:
                i === 0 && child.props.value > -1 ? child.props.value : 0,
              _disabled: props.disabled,
              _error: props.error,
              _isFocused: child.props.value === state.focusValue,
              _name: props.name,
              _onClick: this.handleSelect,
              _onFocus: this.handleButtonFocus
            })}
          </div>
        ))}
      </div>
    )
  }
}

Group.propTypes = {
  // TODO: children only Radio.Button
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  name: PropTypes.string,
  onSelect: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
Group.defaultProps = {
  disabled: false,
  error: false
}

export default Group
