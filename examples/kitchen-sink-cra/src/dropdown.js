import React from 'react'
import Dropdown from '@pluralsight/ps-design-system-dropdown'
import Button from '@pluralsight/ps-design-system-button'

function Example() {
  const options = [
    { value: 'beg', label: 'Beginner' },
    { value: 'int', label: 'Intermediate' },
    { value: 'adv', label: 'Advanced' },
  ]
  const [value, setValue] = React.useState(options[1].value)
  return (
    <div className="example-flex-column">
      <Button onClick={() => setValue('beg')}>Set Beginner</Button>
      <Dropdown
        label="Level"
        placeholder="Select"
        onChange={(evt, value, label) => setValue(value)}
        menu={options.map((opt) => (
          <Dropdown.Item key={opt.value} value={opt.value}>
            {opt.label}
          </Dropdown.Item>
        ))}
        value={value}
      />
      <div>Selected: {value}</div>
    </div>
  )
}

export default Example
