import PropTypes from 'prop-types'
import React from 'react'
import ReactDOM from 'react-dom'
import styleable from 'react-styleable'

import css from './index.css'

class List extends React.Component {
  constructor(props) {
    super(props)
    this.state = { selectedOption: {} }
    this.handleSelect = this.handleSelect.bind(this)
  }
  componentDidMount() {
    this.setSelectedOption(this.getSelectedNode())
  }
  setSelectedOption(node) {
    this.setState({
      selectedOption: node
    })
  }
  getSelectedNode(value) {
    const selectedOption = this.refs[value || this.props.value]
    return selectedOption ? ReactDOM.findDOMNode(selectedOption) : {}
  }
  handleSelect(value) {
    const node = this.getSelectedNode(value)
    this.setSelectedOption(node)
    this.props.onSelect(value)
  }
  renderChildren(children, props) {
    return React.Children.map(children, (child, i) => {
      return React.cloneElement(child, {
        css: this.props.css,
        isSelected: props.value === child.props.value,
        onSelect: this.handleSelect,
        ref: child.props.value
      })
    })
  }
  renderActivePill(node) {
    const style = {
      left: node.offsetLeft,
      width: node.offsetWidth,
      height: node.offsetHeight
    }
    return <li className={this.props.css.optionActiveBg} style={style} />
  }
  render() {
    return (
      <ul className={this.props.css.root}>
        {this.renderActivePill(this.state.selectedOption)}
        {this.renderChildren(this.props.children, this.props)}
      </ul>
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
