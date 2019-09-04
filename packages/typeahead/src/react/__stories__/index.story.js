import { storiesOf } from '@storybook/react'
import React from 'react'

import Typeahead from '../index.js'

const suggestions = [
  { label: 'First' },
  { label: 'Second' },
  { label: 'Third' }
]

storiesOf('Typeahead', module).add('default', _ => {
  function Story() {
    const [value, setValue] = React.useState(suggestions[0].value)

    function handleChange(evt, nextValue) {
      setValue(nextValue)
    }

    return (
      <Typeahead onChange={handleChange} value={value}>
        {suggestions.map((suggestion, key) => (
          <Typeahead.Suggestion key={key}>
            {suggestion.label}
          </Typeahead.Suggestion>
        ))}
      </Typeahead>
    )
  }

  return <Story />
})
