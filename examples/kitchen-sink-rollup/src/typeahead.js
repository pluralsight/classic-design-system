import Typeahead from '@pluralsight/ps-design-system-typeahead'
import React from 'react'

const Example = props => {
  const options = ['Beginner', 'Intermediate', 'Advanced']

  return (
    <Typeahead label="Level" placeholder="Select a Level">
      {options.map((option, key) => (
        <Typeahead.Suggestion key={key}>{option}</Typeahead.Suggestion>
      ))}
    </Typeahead>
  )
}

export default Example
