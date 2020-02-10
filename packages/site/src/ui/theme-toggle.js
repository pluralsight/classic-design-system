import PropTypes from 'prop-types'
import React from 'react'

import {
  colorsBackgroundDark,
  colorsBackgroundLight,
  layout
} from '@pluralsight/ps-design-system-core'
import Theme from '@pluralsight/ps-design-system-theme'
import ViewToggle from '@pluralsight/ps-design-system-viewtoggle'
import { capitalize } from '@pluralsight/ps-design-system-util'

export default function ThemeToggle(props) {
  return (
    <>
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

      <style jsx>{`
        .toggle {
          position: absolute;
          top: ${layout.spacingXSmall};
          right: ${layout.spacingXSmall};
          z-index: 1;
        }
      `}</style>
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
      <div className={`themeable themeable-${themeName}`}>
        <ThemeToggle activeThemeName={themeName} onSelect={handleSelect} />
        <Theme name={themeName}>{props.children}</Theme>
      </div>

      <style jsx>{`
        .themeable {
          position: relative;
        }
        .themeable-dark {
          background: ${colorsBackgroundDark[1]};
        }
        .themeable-light {
          background: ${colorsBackgroundLight[1]};
        }
      `}</style>
    </>
  )
}

Themeable.propTypes = {
  children: PropTypes.node
}

ThemeToggle.Container = Themeable
