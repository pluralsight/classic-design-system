import * as core from '@pluralsight/ps-design-system-core'
import React from 'react'
import { storiesOf } from '@storybook/react'

import Checkbox from '../index.js'

const PaddingDecorator = storyFn => (
  <div style={{ padding: core.layout.spacingLarge }}>{storyFn()}</div>
)

storiesOf('Checkbox', module)
  .addDecorator(PaddingDecorator)
  .add('default', _ => <Checkbox name="colorRed" value="red" label="Red" />)
  .add('checked', _ => (
    <Checkbox checked name="colorRed" value="red" label="Red" />
  ))
  .add('indeterminate', _ => (
    <Checkbox indeterminate name="colorRed" value="red" label="Red" />
  ))
  .add('checked & indeterminate', _ => (
    <Checkbox checked indeterminate name="colorRed" value="red" label="Red" />
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
  .add('disabled & errored', _ => (
    <Checkbox disabled error name="colorRed" value="red" label="Red" />
  ))
  .add('state demo', _ => {
    function StateDemo() {
      const [values, updateValues] = React.useState([])

      function handleCheck(evt, checked, value, name) {
        const nextValues = { ...values }

        if (checked) nextValues[name] = value
        else delete nextValues[name]

        updateValues(nextValues)
      }

      const colorNames = Object.keys(values)
      const checked = name => colorNames.indexOf(name) > -1

      return (
        <div>
          <div style={{ color: core.colorsTextIcon.highOnDark }}>
            Checked:{' '}
            {colorNames.map(name => `${name}: ${values[name]}`).join('; ')}
          </div>

          <Checkbox
            onCheck={handleCheck}
            name="colorRed"
            value="red"
            label="Red"
            checked={checked('colorRed')}
          />

          <Checkbox
            onCheck={handleCheck}
            name="colorGreen"
            value="green"
            label="Green"
            checked={checked('colorGreen')}
          />

          <Checkbox
            onCheck={handleCheck}
            name="colorBlue"
            value="blue"
            label="Blue"
            checked={checked('colorBlue')}
          />
        </div>
      )
    }

    return <StateDemo />
  })
