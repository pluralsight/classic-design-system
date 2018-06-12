import { action } from '@storybook/addon-actions'
import addons from '@storybook/addons'
import core from '@pluralsight/ps-design-system-core'
import Icon from '@pluralsight/ps-design-system-icon/react'
import React from 'react'
import { storiesOf } from '@storybook/react'
import themeDecorator from '@pluralsight/ps-design-system-storybook-addon-theme'

import Checkbox from '../react'

const PaddingDecorator = storyFn => (
  <div style={{ padding: core.layout.spacingLarge }}>{storyFn()}</div>
)

class StateDemo extends React.Component {
  constructor() {
    super()
    this.state = { values: {} }
    this.handleCheck = this.handleCheck.bind(this)
  }
  handleCheck(evt, checked, value, name) {
    if (checked) {
      this.setState({ values: { ...this.state.values, [name]: value } })
    } else {
      const { [name]: omit, ...values } = this.state.values
      this.setState({ values })
    }
  }
  render() {
    const colorNames = Object.keys(this.state.values)
    const checked = name => colorNames.indexOf(name) > -1
    return (
      <div>
        <div style={{ color: core.colors.gray03 }}>
          Checked:{' '}
          {colorNames
            .map(name => `${name}: ${this.state.values[name]}`)
            .join('; ')}
        </div>
        <Checkbox
          onCheck={this.handleCheck}
          name="colorRed"
          value="red"
          label="Red"
          checked={checked('colorRed')}
        />
        <Checkbox
          onCheck={this.handleCheck}
          name="colorGreen"
          value="green"
          label="Green"
          checked={checked('colorGreen')}
        />
        <Checkbox
          onCheck={this.handleCheck}
          name="colorBlue"
          value="blue"
          label="Blue"
          checked={checked('colorBlue')}
        />
      </div>
    )
  }
}

const someStory = storiesOf('Checkbox', module)
  .addDecorator(PaddingDecorator)
  .addDecorator(themeDecorator(addons))
  .add('default', _ => <Checkbox name="colorRed" value="red" label="Red" />)
  .add('checked', _ => (
    <Checkbox checked name="colorRed" value="red" label="Red" />
  ))
  .add('error', _ => (
    <div>
      <Checkbox checked error name="colorRed" value="red" label="Red" />
      <Checkbox error name="colorRed" value="red" label="Red" />
    </div>
  ))
  .add('disabled', _ => (
    <Checkbox disabled name="colorRed" value="red" label="Red" />
  ))
  .add('state demo', _ => <StateDemo />)
