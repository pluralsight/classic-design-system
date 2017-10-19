import glamorous from 'glamorous'
import React from 'react'

const Panel = glamorous.div({})

const PanelComponent = props => (
  <Panel role="tabpanel" aria-labelledby={props.labelledBy}>
    {props.children}
  </Panel>
)

import PropTypes from 'prop-types'
PanelComponent.propTypes = {
  labelledBy: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired
}

export default PanelComponent
