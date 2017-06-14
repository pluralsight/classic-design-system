import React from 'react'
import styleable from 'react-styleable'

import css from '../css/list.module.css'

class List extends React.Component {
  render() {
    return (
      <div className={this.props.css['ps-tab-list']}>{this.props.children}</div>
    )
  }
}

export default styleable(css)(List)
