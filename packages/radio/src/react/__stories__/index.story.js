import * as core from '@pluralsight/ps-design-system-core'
import React from 'react'
import { storiesOf } from '@storybook/react'

import Radio from '../index.js'

const PaddingDecorator = storyFn => (
  <div style={{ padding: core.layout.spacingLarge }}>{storyFn()}</div>
)

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
  .add('state demo', _ => {
    function StateDemo() {
      const [value, setValue] = React.useState('red')

      function handleSelect(evt, nextValue) {
        setValue(nextValue)
      }

      return (
        <div>
          <div style={{ color: core.colorsTextIcon.highOnDark }}>
            Selected: {value}
          </div>
          <Radio.Group value={value} onSelect={handleSelect}>
            <Radio.Button value="red" label="Red" />
            <Radio.Button value="green" label="Green" />
            <Radio.Button value="blue" label="Blue" />
          </Radio.Group>
        </div>
      )
    }

    return <StateDemo />
  })
