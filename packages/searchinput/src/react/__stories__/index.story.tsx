import { storiesOf } from '@storybook/react'
import React from 'react'

import SearchInput, { SearchInputProps} from '..'

const noop = () => {}

const SearchInputWithDefaults: React.FC<SearchInputProps> = props => <SearchInput {...props} />
SearchInputWithDefaults.defaultProps = {
  placeholder: 'Search'
}

storiesOf('SearchInput', module)
  .add('default', () => <SearchInputWithDefaults />)
  .add('when loading', () => <SearchInputWithDefaults loading />)
  .add('with onClear prop', () => <SearchInputWithDefaults onClear={noop} />)
  .add('with TextInput-type props', () => (
    <SearchInputWithDefaults
      onClear={noop}
      error
      label="Label"
      placeholder="Le placeholder"
      subLabel="Sub label"
    />
  ))
