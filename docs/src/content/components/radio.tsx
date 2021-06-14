import React from 'react'
import Radio from '@pluralsight/ps-design-system-radio'

function Example() {
  const options = [
    { label: 'Red', value: 'red' },
    { label: 'Green', value: 'green' },
    { label: 'Blue', value: 'blue' }
  ]

  return (
    <Radio.Group>
      {options.map(option => (
        <Radio.Button
          key={option.value}
          label={option.label}
          value={option.value}
        />
      ))}
    </Radio.Group>
  )
}

export default Example
