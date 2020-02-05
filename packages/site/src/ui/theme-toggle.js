import PropTypes from 'prop-types'
import React from 'react'

import Theme from '@pluralsight/ps-design-system-theme'
import * as core from '@pluralsight/ps-design-system-core'
import ViewToggle from '@pluralsight/ps-design-system-viewtoggle'
import { capitalize } from '@pluralsight/ps-design-system-util'

function ThemeToggle(props) {
  return (
    <>
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
    </>
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
    <>
      <style jsx>{`
        .themeable {
          position: relative;
        }
        .themeable-dark {
          background: ${core.colorsBackgroundDark[1]};
        }
        .themeable-light {
          background: ${core.colorsBackgroundLight[1]};
        }
      `}</style>

      <div className={`themeable themeable-${themeName}`}>
        <ThemeToggle activeThemeName={themeName} onSelect={handleSelect} />
        <Theme name={themeName}>{props.children}</Theme>
      </div>
    </>
  )
}

Themeable.propTypes = {
  children: PropTypes.node
}

ThemeToggle.Container = Themeable

export default ThemeToggle
