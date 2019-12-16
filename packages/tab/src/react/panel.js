import PropTypes from 'prop-types'
import React from 'react'

const Panel = props => <div {...props} />

const PanelComponent = props => {
  const panelProps = {
    role: 'tabpanel',
    'aria-labelledby': props.labelledBy,
    ...(props.style ? { style: props.style } : null),
    ...(props.className ? { className: props.className } : null)
  }
  return <Panel {...panelProps}>{props.children}</Panel>
}

PanelComponent.propTypes = {
  labelledBy: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ])
}

export default PanelComponent
