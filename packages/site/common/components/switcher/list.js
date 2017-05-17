import PropTypes from 'prop-types'
import React from 'react'
import styleable from 'react-styleable'

import css from './index.css'

class List extends React.Component {
  constructor(props) {
    super(props)
    this.state = { selectedOption: {} }
    this.handleSelect = this.handleSelect.bind(this)
  }
  setSelectedOption(node) {
    this.setState({
      selectedOption: node
    })
  }
  handleSelect(value, node) {
    this.setSelectedOption(node)
    this.props.onSelect(value)
  }
  renderChildren(children, props) {
    return React.Children.map(children, (child, i) => {
      return React.cloneElement(child, {
        css: this.props.css,
        isSelected: props.value === child.props.value,
        onSelect: this.handleSelect
      })
    })
  }
  renderActivePill(node) {
    const style = {
      left: node.offsetLeft,
      width: node.offsetWidth,
      height: node.offsetHeight
    }
    return <div className={this.props.css.optionActiveBg} style={style} />
  }
  render() {
    return (
      <div className={this.props.css.root}>
        {this.renderActivePill(this.state.selectedOption)}
        {this.renderChildren(this.props.children, this.props)}
      </div>
    )
  }
}

List.propTypes = {
  value: PropTypes.any,
  onSelect: PropTypes.func
}

List.defaultProps = {
  onSelect: () => {}
}

export default styleable(css)(List)
