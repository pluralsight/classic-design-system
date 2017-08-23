import core from '@pluralsight/ps-design-system-core'
import PropTypes from 'prop-types'
import React from 'react'

const cssVars = {
  outerHeight: '24px',
  innerHeight: '20px'
}
const optionSelector = `
.option {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${cssVars.innerHeight};
  line-height: calc(${cssVars.innerHeight} - 1px);
  font-size: 10px; /* TODO: size not in design system, ok? */
  color: ${core.colors.white};
  padding: 0 13px;
  border: none;
  background: none;
  border-radius: calc(${cssVars.innerHeight} / 2);
  cursor: pointer;
  transition: all .4s;
  font-weight: ${core.type.fontWeightMedium};
}
`

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
    return (
      <div className="option optionActiveBg" style={style}>
        <style jsx>{`
          .optionActiveBg {
            position: absolute;
            top: 2px;
            width: calc(50% - 6px);
            background: ${core.colors.white};
            box-shadow: 1px 1px 2px rgba(0, 0, 0, .6);
          }
        `}</style>
      </div>
    )
  }
  render() {
    return (
      <div className="list">
        {this.renderActivePill(this.state.selectedOption)}
        {this.renderChildren(this.props.children, this.props)}
        <style jsx>{`
          .list {
            position: relative;
            display: inline-flex;
            margin: 0;
            padding: 2px 3px;
            height: ${cssVars.outerHeight};
            background: ${core.colors.gray03};
            border-radius: calc(${cssVars.outerHeight} / 2);
            white-space: nowrap;
          }
          ${optionSelector}
        `}</style>
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

class Option extends React.Component {
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
        className={`option ${this.props.isSelected ? 'optionActive' : ''}`}
        onClick={this.handleClick}
        ref={el => (this.el = el)}
      >
        {this.props.children}

        <style jsx>{`
          ${optionSelector}
          .optionActive {
            color: ${core.colors.gray05};
          }
        `}</style>
      </button>
    )
  }
}

Option.propTypes = {
  isSelected: PropTypes.bool,
  onSelect: PropTypes.func, // required, cloned
  value: PropTypes.any.isRequired
}
Option.defaultProps = {
  isSelected: false
}

export default {
  List,
  Option
}
