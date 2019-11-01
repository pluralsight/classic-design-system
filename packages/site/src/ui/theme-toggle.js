import PropTypes from 'prop-types'
import React from 'react'

import * as core from '@pluralsight/ps-design-system-core'
import Theme from '@pluralsight/ps-design-system-theme'
import ViewToggle from '@pluralsight/ps-design-system-viewtoggle/react.js'
import { capitalize } from '@pluralsight/ps-design-system-util'

function ThemeToggle(props) {
  return (
    <React.Fragment>
      <style jsx>{`
        .toggle {
          position: absolute;
          top: ${core.layout.spacingXSmall};
          right: ${core.layout.spacingXSmall};
          z-index: 1;
        }
      `}</style>

      <div className="toggle">
        <ViewToggle onSelect={props.onSelect}>
          {Object.keys(Theme.names).map(themeName => (
            <ViewToggle.Option
              key={themeName}
              active={themeName === props.activeThemeName}
            >
              {capitalize(themeName)}
            </ViewToggle.Option>
          ))}
        </ViewToggle>
      </div>
    </React.Fragment>
  )
}

ThemeToggle.propTypes = {
  activeThemeName: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
}

function Themeable(props) {
  const [themeName, setThemeName] = React.useState(Theme.defaultName)

  const handleSelect = (evt, index) => {
    const nextTheme = Theme.names[Object.keys(Theme.names)[index]]
    setThemeName(nextTheme)
  }

  return (
    <React.Fragment>
      <style jsx>{`
        .themeable {
          position: relative;
        }
        .themeable-dark {
          background: ${core.colors.gray06};
        }
        .themeable-light {
          background: ${core.colors.bone};
        }
      `}</style>

      <div className={`themeable themeable-${themeName}`}>
        <ThemeToggle activeThemeName={themeName} onSelect={handleSelect} />
        <Theme name={themeName}>{props.children}</Theme>
      </div>
    </React.Fragment>
  )
}

Themeable.propTypes = {
  children: PropTypes.node
}

ThemeToggle.Container = Themeable

export default ThemeToggle
