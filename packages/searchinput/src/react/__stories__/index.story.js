import { storiesOf } from '@storybook/react'
import React from 'react'

import SearchInput from '../index'

const noop = () => {}

const SearchInputWithDefaults = props => <SearchInput {...props} />
SearchInputWithDefaults.defaultProps = {
  placeholder: 'Search'
}

storiesOf('SearchInput', module)
  .add('default', _ => <SearchInputWithDefaults />)
  .add('when loading', _ => <SearchInputWithDefaults loading />)
  .add('with onClear prop', _ => <SearchInputWithDefaults onClear={noop} />)
