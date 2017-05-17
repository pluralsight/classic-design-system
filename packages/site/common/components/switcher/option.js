import PropTypes from 'prop-types'
import React from 'react'
import styleable from 'react-styleable'

export default class SwitcherOption extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  componentDidMount() {
    if (this.props.isSelected) setTimeout(_ => this.handleClick(), 0)
  }
  handleClick() {
    this.props.onSelect(this.props.value, this.el)
  }
  render() {
    return (
      <button
        className={
          this.props.isSelected
            ? this.props.css.optionActive
            : this.props.css.option
        }
        onClick={this.handleClick}
        ref={el => (this.el = el)}
      >
        {this.props.children}
      </button>
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
