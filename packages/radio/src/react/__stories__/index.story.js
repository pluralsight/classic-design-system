import core from '@pluralsight/ps-design-system-core'
import React from 'react'
import { storiesOf } from '@storybook/react'

import Radio from '..'

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

storiesOf('Radio', module)
  .addDecorator(PaddingDecorator)
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
  .add('disabled & error', _ => (
    <Radio.Group value="green" disabled error>
      <Radio.Button value="red" label="Red" />
      <Radio.Button value="green" label="Green" />
      <Radio.Button value="blue" label="Blue" />
    </Radio.Group>
  ))
  .add('state demo', _ => <StateDemo />)
