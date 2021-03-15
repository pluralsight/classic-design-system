import * as core from '@pluralsight/ps-design-system-core'
import React from 'react'
import { DecoratorFn, storiesOf } from '@storybook/react'

import Checkbox from '../index.js'

const PaddingDecorator: DecoratorFn = storyFn => (
  <div style={{ padding: core.layout.spacingLarge }}>{storyFn()}</div>
)

storiesOf('Checkbox', module)
  .addDecorator(PaddingDecorator)
  .add('default', () => <Checkbox name="colorRed" value="red" label="Red" />)
  .add('checked', () => (
    <Checkbox checked name="colorRed" value="red" label="Red" />
  ))
  .add('indeterminate', () => (
    <Checkbox indeterminate name="colorRed" value="red" label="Red" />
  ))
  .add('checked & indeterminate', () => (
    <Checkbox checked indeterminate name="colorRed" value="red" label="Red" />
  ))
  .add('error', () => (
    <div>
      <Checkbox checked error name="colorRed" value="red" label="Red" />
      <Checkbox error name="colorRed" value="red" label="Red" />
    </div>
  ))
  .add('disabled', () => (
    <Checkbox disabled name="colorRed" value="red" label="Red" />
  ))
  .add('disabled & errored', () => (
    <Checkbox disabled error name="colorRed" value="red" label="Red" />
  ))
  .add('state demo', () => {
    function StateDemo() {
      const [values, updateValues] = React.useState<{
        [name: string]: React.ReactText
      }>({})

      function handleCheck(
        _evt:
          | React.KeyboardEvent<HTMLLabelElement>
          | React.MouseEvent<HTMLLabelElement, MouseEvent>,
        checked: boolean,
        value: React.ReactText,
        name: string | undefined
      ) {
        if (typeof name === 'string') {
          const nextValues = { ...values }

          if (checked) nextValues[name] = value
          else delete nextValues[name]

          updateValues(nextValues)
        }
      }

      const colorNames = Object.keys(values)
      const checked = (name: string) => colorNames.indexOf(name) > -1

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
