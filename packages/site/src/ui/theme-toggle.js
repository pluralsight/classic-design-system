import core from '@pluralsight/ps-design-system-core'
import PropTypes from 'prop-types'
import React from 'react'
import Theme from '@pluralsight/ps-design-system-theme/react'
import ViewToggle from '@pluralsight/ps-design-system-viewtoggle/react'
import { string as stringUtil } from '@pluralsight/ps-design-system-util'

class Themeable extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      themeName: props.themeName || Theme.defaultName
    }
    this.handleThemeSelect = this.handleThemeSelect.bind(this)
  }
  handleThemeSelect(i) {
    const themeName = Theme.names[Object.keys(Theme.names)[i]]
    this.setState({ themeName })
  }
  render() {
    const { props, state } = this
    return (
      <div className={`themeable themeable-${state.themeName}`}>
        <ThemeToggle
          activeThemeName={state.themeName}
          onSelect={this.handleThemeSelect}
        />
        <Theme name={state.themeName}>{props.children}</Theme>
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
      </div>
    )
  }
}

const ThemeToggle = props => (
  <div className="toggle">
    <ViewToggle onSelect={props.onSelect}>
      {Object.keys(Theme.names).map(themeName => (
        <ViewToggle.Option
          key={themeName}
          active={themeName === props.activeThemeName}
        >
          {stringUtil.capitalize(themeName)}
        </ViewToggle.Option>
      ))}
    </ViewToggle>
    <style jsx>{`
      .toggle {
        position: absolute;
        top: ${core.layout.spacingMedium};
        right: ${core.layout.spacingMedium};
        z-index: 1;
      }
    `}</style>
  </div>
)
ThemeToggle.propTypes = {
  activeThemeName: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
}

ThemeToggle.Container = Themeable

export default ThemeToggle
