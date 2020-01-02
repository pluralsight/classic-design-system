import * as glamor from 'glamor'
import React from 'react'
import PropTypes from 'prop-types'

import { layout } from '@pluralsight/ps-design-system-core'
import { EVENTS, featFlags } from './constants.js'
import { Switch } from './switch.js'

const styles = {
  panel: () => glamor.css({ padding: layout.spacingXSmall })
}

export const FeatureFlagsPanel = ({ active, api, ...props }) => {
  const handleFeatureFlagChange = (evt, flag) => api.emit(EVENTS.change, flag)
  return !active ? null : (
    <div {...styles.panel(props)} {...props}>
      {[featFlags].map(name => (
        <Switch key={name} name={name} onChange={handleFeatureFlagChange} />
      ))}
    </div>
  )
}

FeatureFlagsPanel.propTypes = {
  active: PropTypes.bool.isRequired,
  api: PropTypes.shape({
    emit: PropTypes.func.isRequired
  }).isRequired
}
