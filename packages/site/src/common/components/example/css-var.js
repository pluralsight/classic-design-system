import Highlight from 'react-highlight'
import PropTypes from 'prop-types'
import React from 'react'
import styleable from 'react-styleable'

import css from './css-var.module.css'
import formatCssVars from './format-css-vars'

class CssVarExample extends React.Component {
  constructor(props) {
    super(props)
  }
  renderSrc() {
    return (
      <Highlight className={'css ' + this.props.css.css}>
        {formatCssVars(this.props.attributes)}
      </Highlight>
    )
  }
  render() {
    return (
      <div className={this.props.css.root}>
        <div className={this.props.css.output}>
          {this.props.output}
        </div>
        <div className={this.props.css.src}>
          <div className={this.props.css.srcOptions}>
            {this.renderSrc()}
          </div>
        </div>
      </div>
    )
  }
}
CssVarExample.propTypes = {
  output: PropTypes.element.isRequired,
  attributes: PropTypes.arrayOf(
    PropTypes.shape({
      varName: PropTypes.string.isRequired,
      attrName: PropTypes.string.isRequired
    })
  ).isRequired
}

export default styleable(css)(CssVarExample)
