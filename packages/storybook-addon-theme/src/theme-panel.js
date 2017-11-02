import Button from '@pluralsight/ps-design-system-button/react'
import core from '@pluralsight/ps-design-system-core'
import React from 'react'
import Theme from '@pluralsight/ps-design-system-theme/react'

const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1)

export default class ThemePanel extends React.Component {
  handleThemeClick(themeName) {
    this.props.channel.emit('theme', themeName)
    this.props.api.setQueryParams({ themeName })
  }
  render() {
    return (
      <div>
        {Object.keys(Theme.names).map(name => (
          <Button
            style={{ margin: core.layout.spacingSmall }}
            onClick={this.handleThemeClick.bind(this, name)}
            key={name}
          >
            {capitalize(name)}
          </Button>
        ))}
      </div>
    )
  }
}
