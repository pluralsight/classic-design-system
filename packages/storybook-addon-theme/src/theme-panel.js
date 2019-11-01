import * as glamor from 'glamor'
import React from 'react'
import PropTypes from 'prop-types'

import * as core from '@pluralsight/ps-design-system-core'
import { names } from '@pluralsight/ps-design-system-theme'

import { EVENTS } from './constants.js'
import Swatch from './swatch.js'

const styles = {
  panel: () => glamor.css({ padding: core.layout.spacingXSmall })
}

export default function ThemePanel({ active, api, ...props }) {
  function handleThemeSelect(evt, themeName) {
    api.emit(EVENTS.change, themeName)
  }

  if (!active) return null

  return (
    <div {...styles.panel(props)} {...props}>
      {Object.values(names).map(name => (
        <Swatch key={name} name={name} onSelect={handleThemeSelect} />
      ))}
    </div>
  )
}

ThemePanel.propTypes = {
  active: PropTypes.bool.isRequired,
  api: PropTypes.shape({
    emit: PropTypes.func.isRequired
  }).isRequired
}
