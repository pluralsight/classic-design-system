import PropTypes from 'prop-types'
import React from 'react'
import styleable from 'react-styleable'

export default class SwitcherOption extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    this.props.onSelect(this.props.value)
  }
  render() {
    return (
      <li
        className={
          this.props.isSelected
            ? this.props.css.optionActive
            : this.props.css.option
        }
        onClick={this.handleClick}
      >
        {this.props.children}
      </li>
    )
  }
}

SwitcherOption.propTypes = {
  css: PropTypes.object, // required, cloned
  isSelected: PropTypes.bool,
  onSelect: PropTypes.func, // required, cloned
  value: PropTypes.any.isRequired
}
SwitcherOption.defaultProps = {
  isSelected: false
}
