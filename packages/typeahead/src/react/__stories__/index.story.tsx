import { storiesOf } from '@storybook/react'
import React from 'react'

import Typeahead from '../index.js'

import US_STATES from './fixtures/us-states.json'

storiesOf('Components | Typeahead / uncontrolled', module).add('default', _ => {
  return (
    <Typeahead>
      {US_STATES.map(state => (
        <Typeahead.Suggestion key={state.abbreviation}>
          {state.name}
        </Typeahead.Suggestion>
      ))}
    </Typeahead>
  )
})

storiesOf('Components | Typeahead / controlled', module).add('default', _ => (
  <ControlledStory />
))

storiesOf('Components | Typeahead / form props', module)
  .add('label and subLabel', _ => (
    <ControlledStory label="Some label" subLabel="Some sublabel" />
  ))
  .add('all', _ => (
    <ControlledStory
      label="Some label"
      subLabel="Some sublabel"
      placeholder="Some placeholder"
    />
  ))
  .add('all w/error', _ => (
    <ControlledStory
      error
      label="Some label"
      subLabel="Some sublabel"
      placeholder="Some placeholder"
    />
  ))

const appearances = storiesOf('Components | Typeahead / appearances', module)

for (const appearance in Typeahead.appearances) {
  appearances.add(appearance, _ => <ControlledStory appearance={appearance} />)
}

function ControlledStory(props) {
  const [value, setValue] = React.useState('')

  const handleChange = (evt, nextValue) => {
    const nextState = US_STATES.find(state => state.abbreviation === nextValue)

    if (nextState) {
      setValue(nextState.name)
    } else {
      setValue(nextValue)
    }
  }

  return (
    <Typeahead onChange={handleChange} value={value} {...props}>
      {US_STATES.map(state => (
        <Typeahead.Suggestion
          key={state.abbreviation}
          value={state.abbreviation}
        >
          {state.name}
        </Typeahead.Suggestion>
      ))}
    </Typeahead>
  )
}
