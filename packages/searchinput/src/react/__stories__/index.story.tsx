import { storiesOf } from '@storybook/react'
import React, { useState } from 'react'

import SearchInput, { SearchInputProps } from '..'

const noop = () => {}

const SearchInputWithDefaults: React.FC<SearchInputProps> = props => {
  const [value, setValue] = useState('')
  return (
    <SearchInput
      value={value}
      onChange={(evt: React.ChangeEvent<HTMLInputElement>) => {
        setValue(evt.target.value)
      }}
      onClear={() => setValue('')}
      {...props}
    />
  )
}
SearchInputWithDefaults.defaultProps = {
  placeholder: 'Search'
}

storiesOf('SearchInput', module)
  .add('with onClear', () => <SearchInputWithDefaults />)
  .add('no onClear', () => <SearchInputWithDefaults onClear={undefined} />)
  .add('no state-controlled value', () => (
    <SearchInputWithDefaults value="set, no typity" />
  ))
  .add('when loading', () => <SearchInputWithDefaults loading />)
  .add('with TextInput-type props', () => (
    <SearchInputWithDefaults
      error
      label="Label"
      placeholder="Le placeholder"
      subLabel="Sub label"
    />
  ))
