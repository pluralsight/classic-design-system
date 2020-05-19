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
    <Radio.Group name="default">
      <Radio.Button value="red" label="Red" />
      <Radio.Button value="green" label="Green" />
      <Radio.Button value="blue" label="Blue" />
    </Radio.Group>
  ))
  .add('one selected', _ => (
    <Radio.Group value="green" name="one selected">
      <Radio.Button value="red" label="Red" />
      <Radio.Button value="green" label="Green" />
      <Radio.Button value="blue" label="Blue" />
    </Radio.Group>
  ))
  .add('labels', _ => (
    <Radio.Group
      value="green"
      label="Colors"
      subLabel="These colors are very primary"
      name="labels"
    >
      <Radio.Button value="red" label="Red" />
      <Radio.Button value="green" label="Green" />
      <Radio.Button value="blue" label="Blue" />
    </Radio.Group>
  ))
  .add('error', _ => (
    <Radio.Group value="green" error name="error">
      <Radio.Button value="red" label="Red" />
      <Radio.Button value="green" label="Green" />
      <Radio.Button value="blue" label="Blue" />
    </Radio.Group>
  ))
  .add('disabled', _ => (
    <Radio.Group value="green" disabled name="disabled">
      <Radio.Button value="red" label="Red" />
      <Radio.Button value="green" label="Green" />
      <Radio.Button value="blue" label="Blue" />
    </Radio.Group>
  ))
  .add('disabled & error', _ => (
    <Radio.Group value="green" disabled error name="disabled & error">
      <Radio.Button value="red" label="Red" />
      <Radio.Button value="green" label="Green" />
      <Radio.Button value="blue" label="Blue" />
    </Radio.Group>
  ))
  .add('controlled', _ => {
    function StateDemo() {
      const [value, setValue] = React.useState('red')

      function handleChange(evt, nextValue) {
        setValue(nextValue)
      }

      return (
        <div>
          <div style={{ color: core.colorsTextIcon.highOnDark }}>
            Selected: {value}
            <br />
            <button onClick={() => handleChange(1, 'blue')}>blue</button>
          </div>
          <Radio.Group value={value} onChange={handleChange} name="controlled">
            <Radio.Button value="red" label="Red" />
            <Radio.Button value="green" label="Green" />
            <Radio.Button value="blue" label="Blue" />
          </Radio.Group>
        </div>
      )
    }

    return <StateDemo />
  })
