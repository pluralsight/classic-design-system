import { storiesOf } from '@storybook/react'
import React from 'react'
import PropTypes from 'prop-types'

import Typeahead from '../index.js'
import { combineFns } from '../utils.js'

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

function ControlledStory(props) {
  const defaultValue = US_STATES[0].name
  const [value, setValue] = React.useState(defaultValue)

  const handleChange = combineFns((evt, nextValue) => {
    setValue(nextValue)
  }, props.onChange)

  return (
    <Typeahead onChange={handleChange} value={value} {...props}>
      {US_STATES.map(state => (
        <Typeahead.Suggestion key={state.abbreviation}>
          {state.name}
        </Typeahead.Suggestion>
      ))}
    </Typeahead>
  )
}
ControlledStory.propTypes = {
  onChange: PropTypes.func
}
