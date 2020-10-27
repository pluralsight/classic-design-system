import * as core from '@pluralsight/ps-design-system-core'
import TextInput from '@pluralsight/ps-design-system-textinput'
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
// TODO: rm
import PropTypes from 'prop-types'
import React from 'react'

import DatePicker from '..'

function StateDemo(props) {
  const [value, setValue] = React.useState(props.value)

  function handleDatePickerSelect(nextValue) {
    setValue(nextValue)
  }

  return (
    <div>
      <div style={{ color: core.colorsTextIcon.highOnDark }}>
        Selected: {value}
      </div>

      <DatePicker value={value} onSelect={handleDatePickerSelect} />
    </div>
  )
}

StateDemo.propTypes = { value: PropTypes.string }

storiesOf('labels', module)
  .add('none', _ => (
    <DatePicker onSelect={action('onselect')} onSubBlur={action('onblur')} />
  ))
  .add('compare w/ textinput', _ => (
    <div>
      <div style={{ marginBottom: core.layout.spacingSmall }}>
        <DatePicker />
      </div>

      <div>
        <TextInput type="date" />
      </div>
    </div>
  ))
  .add('label', _ => <DatePicker label="Some label" />)
  .add('subLabel', _ => <DatePicker subLabel="Some sublabel" />)
  .add('label and subLabel', _ => (
    <DatePicker label="Some label" subLabel="Some sublabel" />
  ))

storiesOf('value', module)
  .add('single slash-separated value', _ => <DatePicker value="12/07/1941" />)
  .add('updated value, no initial', _ => <StateDemo />)
  .add('updated value, w/ initial', _ => <StateDemo value="3/15/1995" />)

const appearanceStory = storiesOf('appearance', module)
Object.values(DatePicker.appearances).forEach(appearance =>
  appearanceStory.add(appearance, _ => <DatePicker appearance={appearance} />)
)
Object.values(DatePicker.appearances).forEach(appearance =>
  appearanceStory.add(`${appearance} w/ error`, _ => (
    <DatePicker appearance={appearance} error label="Problem field" />
  ))
)

storiesOf('disabled', module).add('compare', _ => (
  <div>
    <DatePicker label="Normal" subLabel="Still normal" />
    <DatePicker label="I'm not usable" subLabel="Neither am I" disabled />
  </div>
))

storiesOf('whitelist', module)
  .add('name', _ => <DatePicker name="myFieldNameOfPower" />)
  .add('onChange', _ => <DatePicker onChange={action('I changed')} />)

storiesOf('layouts', module)
  .add('full width', _ => (
    <div style={{ border: '1px solid blue', width: '500px' }}>
      <DatePicker label="First" style={{ display: 'block', width: '100%' }} />
      <DatePicker
        error
        label="Second"
        style={{ display: 'block', width: '100%' }}
      />
      <DatePicker
        appearance={DatePicker.appearances.subtle}
        label="Third"
        style={{ display: 'block', width: '100%' }}
      />
      <DatePicker
        appearance={DatePicker.appearances.subtle}
        error
        label="Fourth"
        style={{ display: 'block', width: '100%' }}
      />
    </div>
  ))
  .add('right-aligned', _ => (
    <div style={{ border: '1px solid blue' }}>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <DatePicker appearance={DatePicker.appearances.subtle} />
      </div>
      <div style={{ border: '3px solid green', height: '50px' }} />
    </div>
  ))
