import { action } from '@storybook/addon-actions'
import addons from '@storybook/addons'
import core from '@pluralsight/ps-design-system-core'
import Icon from '@pluralsight/ps-design-system-icon/react'
import React from 'react'
import { storiesOf } from '@storybook/react'
import themeDecorator from '@pluralsight/ps-design-system-storybook-addon-theme'

import Radio from '../react'

const PaddingDecorator = storyFn => (
  <div style={{ padding: core.layout.spacingLarge }}>{storyFn()}</div>
)

class StateDemo extends React.Component {
  constructor() {
    super()
    this.state = { value: 'red' }
    this.handleSelect = this.handleSelect.bind(this)
  }
  handleSelect(_, value) {
    this.setState(_ => ({ value }))
  }
  render() {
    return (
      <div>
        <div style={{ color: core.colors.gray03 }}>
          Selected: {this.state.value}
        </div>
        <Radio.Group value={this.state.value} onSelect={this.handleSelect}>
          <Radio.Button value="red" label="Red" />
          <Radio.Button value="green" label="Green" />
          <Radio.Button value="blue" label="Blue" />
        </Radio.Group>
      </div>
    )
  }
}

const someStory = storiesOf('Radio', module)
  .addDecorator(PaddingDecorator)
  .addDecorator(themeDecorator(addons))
  .add('default', _ => (
    <Radio.Group>
      <Radio.Button value="red" label="Red" />
      <Radio.Button value="green" label="Green" />
      <Radio.Button value="blue" label="Blue" />
    </Radio.Group>
  ))
  .add('one selected', _ => (
    <Radio.Group value="green">
      <Radio.Button value="red" label="Red" />
      <Radio.Button value="green" label="Green" />
      <Radio.Button value="blue" label="Blue" />
    </Radio.Group>
  ))
  .add('error', _ => (
    <Radio.Group value="green" error>
      <Radio.Button value="red" label="Red" />
      <Radio.Button value="green" label="Green" />
      <Radio.Button value="blue" label="Blue" />
    </Radio.Group>
  ))
  .add('disabled', _ => (
    <Radio.Group value="green" disabled>
      <Radio.Button value="red" label="Red" />
      <Radio.Button value="green" label="Green" />
      <Radio.Button value="blue" label="Blue" />
    </Radio.Group>
  ))
  .add('state demo', _ => <StateDemo />)
