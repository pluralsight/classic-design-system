import * as core from '@pluralsight/ps-design-system-core'
import React from 'react'
import { storiesOf } from '@storybook/react'

import Radio from '..'

const PaddingDecorator = (storyFn: () =>{}) => (
  <div style={{ padding: core.layout.spacingLarge }}>{storyFn()}</div>
)

storiesOf('Radio', module)
  .addDecorator(PaddingDecorator)
  .add('default', () => (
    <Radio.Group name="default">
      <Radio.Button value="red" label="Red" />
      <Radio.Button value="green" label="Green" />
      <Radio.Button value="blue" label="Blue" />
    </Radio.Group>
  ))
  .add('one selected', () => (
    <Radio.Group value="green" name="one selected">
      <Radio.Button value="red" label="Red" />
      <Radio.Button value="green" label="Green" />
      <Radio.Button value="blue" label="Blue" />
    </Radio.Group>
  ))
  .add('labels', () => (
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
  .add('error', () => (
    <Radio.Group value="green" error name="error">
      <Radio.Button value="red" label="Red" />
      <Radio.Button value="green" label="Green" />
      <Radio.Button value="blue" label="Blue" />
    </Radio.Group>
  ))
  .add('disabled', () => (
    <Radio.Group value="green" disabled name="disabled">
      <Radio.Button value="red" label="Red" />
      <Radio.Button value="green" label="Green" />
      <Radio.Button value="blue" label="Blue" />
    </Radio.Group>
  ))
  .add('disabled & error', () => (
    <Radio.Group value="green" disabled error name="disabled & error">
      <Radio.Button value="red" label="Red" />
      <Radio.Button value="green" label="Green" />
      <Radio.Button value="blue" label="Blue" />
    </Radio.Group>
  ))
  .add('controlled', () => {
    function StateDemo() {
      const [value, setValue] = React.useState('red' as React.ReactText)

      function handleChange(evt?: React.MouseEvent, nextValue?:React.ReactText) {
        setValue(nextValue as React.ReactText)
      }

      return (
        <div>
          <div style={{ color: core.colorsTextIcon.highOnDark }}>
            Selected: {value}
            <br />
            <button onClick={(e: React.MouseEvent) => handleChange(e, 'blue')}>blue</button>
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
  .add('multiple radio groups', () => (
    <div>
      <Radio.Group name="group one">
        <Radio.Button value="red" label="Red" />
        <Radio.Button value="green" label="Green" />
        <Radio.Button value="blue" label="Blue" />
      </Radio.Group>
      <Radio.Group name="group two">
        <Radio.Button value="red" label="Red" />
        <Radio.Button value="green" label="Green" />
        <Radio.Button value="blue" label="Blue" />
      </Radio.Group>
    </div>
  ))
