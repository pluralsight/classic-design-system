import { storiesOf } from '@storybook/react'
import React from 'react'

import Typeahead from '../index'
import US_STATES from './fixtures/us-states.json'

storiesOf('Components | Typeahead / uncontrolled', module).add(
  'default',
  () => {
    return (
      <Typeahead>
        {US_STATES.map(state => (
          <Typeahead.Suggestion key={state.abbreviation}>
            {state.name}
          </Typeahead.Suggestion>
        ))}
      </Typeahead>
    )
  }
)

storiesOf('Components | Typeahead / controlled', module).add('default', () => (
  <ControlledStory />
))

storiesOf('Components | Typeahead / form props', module)
  .add('label and subLabel', () => (
    <ControlledStory label="Some label" subLabel="Some sublabel" />
  ))
  .add('all', () => (
    <ControlledStory
      label="Some label"
      subLabel="Some sublabel"
      placeholder="Some placeholder"
    />
  ))
  .add('all w/error', () => (
    <ControlledStory
      error
      label="Some label"
      subLabel="Some sublabel"
      placeholder="Some placeholder"
    />
  ))

const appearances = storiesOf('Components | Typeahead / appearances', module)

Object.values(Typeahead.appearances).forEach(appearance => {
  appearances.add(appearance, () => <ControlledStory appearance={appearance} />)
})

const ControlledStory: React.FC<
  React.ComponentProps<typeof Typeahead>
> = props => {
  const [value, setValue] = React.useState('')

  const handleChange = (_evt: unknown, nextValue: string) => {
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
