// import Button from '@pluralsight/ps-design-system-button/react'
import React from 'react'
import addons from '@storybook/addons'
import Theme from '@pluralsight/ps-design-system-theme/react'

export default class ThemePanel extends React.Component {
  handleThemeClick(themeName) {
    this.props.channel.emit('theme', themeName)
    this.props.api.setQueryParams({ themeName })
  }
  render() {
    return (
      <div>
        {Object.keys(Theme.names).map(name => (
          <button onClick={this.handleThemeClick.bind(this, name)} key={name}>
            {name}
          </button>
        ))}
      </div>
    )
  }
}
