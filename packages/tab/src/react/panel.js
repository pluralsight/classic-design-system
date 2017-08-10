import glamorous from 'glamorous'
import React from 'react'

const Panel = glamorous.div({})

const PanelComponent = props =>
  <Panel role="tabpanel" aria-labelledby={props.label} {...props}>
    {props.children}
  </Panel>

import PropTypes from 'prop-types'
PanelComponent.propTypes = {
  labelledBy: PropTypes.string.isRequired
}

export default PanelComponent
