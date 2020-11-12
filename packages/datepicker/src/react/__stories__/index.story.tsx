import * as core from '@pluralsight/ps-design-system-core'
import TextInput from '@pluralsight/ps-design-system-textinput'
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import React from 'react'

import DatePicker from '..'

const StateDemo: React.FC<{ value?: Date }> = props => {
  const [value, setValue] = React.useState(props.value)

  function handleDatePickerSelect(
    _evt: React.MouseEvent | React.FocusEvent,
    nextValue: Date
  ) {
    setValue(nextValue)
  }

  return (
    <div>
      <div style={{ color: core.colorsTextIcon.highOnDark }}>
        Selected: {value?.toString()}
      </div>

      <DatePicker value={value} onSelect={handleDatePickerSelect} />
    </div>
  )
}

storiesOf('labels', module)
  .add('none', () => (
    <DatePicker
      onSelect={action('onselect')}
      onSubBlur={action('onblur')}
      value={undefined}
    />
  ))
  .add('compare w/ textinput', () => (
    <div>
      <div style={{ marginBottom: core.layout.spacingSmall }}>
        <DatePicker value={undefined} />
      </div>

      <div>
        <TextInput type="date" />
      </div>
    </div>
  ))
  .add('label', () => <DatePicker label="Some label" value={undefined} />)
  .add('subLabel', () => (
    <DatePicker subLabel="Some sublabel" value={undefined} />
  ))
  .add('label and subLabel', () => (
    <DatePicker label="Some label" subLabel="Some sublabel" value={undefined} />
  ))

storiesOf('value', module)
  .add('date', () => <DatePicker value={new Date(1941, 11, 7)} />)
  .add('updated value, no initial', () => <StateDemo />)
  .add('updated value, w/ initial', () => (
    <StateDemo value={new Date(1995, 2, 15)} />
  ))
  .add('controlled value changes', () => {
    const Demo: React.FC = props => {
      const dates = [new Date(1941, 11, 7), new Date(1776, 6, 4)]
      const [i, setI] = React.useState(0)
      const [value, setValue] = React.useState(dates[i])

      React.useEffect(() => {
        const timer = setInterval(() => {
          const newI = i === dates.length - 1 ? 0 : i + 1
          setValue(dates[newI])
          setI(newI)
        }, 2000)

        return () => clearTimeout(timer)
      })

      return (
        <div>
          <div style={{ color: core.colorsTextIcon.highOnDark }}>
            Sending in: {value?.toString()}
          </div>

          <DatePicker value={value} />
        </div>
      )
    }

    return <Demo />
  })

const appearanceStory = storiesOf('appearance', module)
Object.values(DatePicker.appearances).forEach(appearance =>
  appearanceStory.add(appearance, () => (
    <DatePicker appearance={appearance} value={undefined} />
  ))
)
Object.values(DatePicker.appearances).forEach(appearance =>
  appearanceStory.add(`${appearance} w/ error`, () => (
    <DatePicker
      appearance={appearance}
      error
      label="Problem field"
      value={undefined}
    />
  ))
)

storiesOf('disabled', module).add('compare', () => (
  <div>
    <DatePicker label="Normal" subLabel="Still normal" value={undefined} />
    <DatePicker
      label="I'm not usable"
      subLabel="Neither am I"
      disabled
      value={new Date(1941, 11, 7)}
    />
  </div>
))

storiesOf('whitelist', module)
  .add('onChange', () => (
    <DatePicker onChange={action('I changed')} value={undefined} />
  ))
  .add('name', () => (
    <DatePicker
      onChange={action('I changed')}
      value={new Date(1944, 3, 2, 0, 0, 0, 0)}
      name="dateForForm"
    />
  ))

storiesOf('layouts', module)
  .add('full width', () => (
    <div style={{ border: '1px solid blue', width: '500px' }}>
      <DatePicker
        label="First"
        style={{ display: 'block', width: '100%' }}
        value={undefined}
      />
      <DatePicker
        error
        label="Second"
        style={{ display: 'block', width: '100%' }}
        value={undefined}
      />
      <DatePicker
        appearance={DatePicker.appearances.subtle}
        label="Third"
        style={{ display: 'block', width: '100%' }}
        value={undefined}
      />
      <DatePicker
        appearance={DatePicker.appearances.subtle}
        error
        label="Fourth"
        style={{ display: 'block', width: '100%' }}
        value={undefined}
      />
    </div>
  ))
  .add('right-aligned', () => (
    <div style={{ border: '1px solid blue' }}>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <DatePicker
          appearance={DatePicker.appearances.subtle}
          value={undefined}
        />
      </div>
      <div style={{ border: '3px solid green', height: '50px' }} />
    </div>
  ))
