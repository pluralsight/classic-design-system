import React from 'react'
import TextInput from '@pluralsight/ps-design-system-textinput'
import { SearchIcon } from '@pluralsight/ps-design-system-icon'

const Comp = () => (
  <div className="example-flex-column">
    <TextInput icon={<SearchIcon />} placeholder="Search" />
    <TextInput
      icon={<SearchIcon />}
      iconAlign={TextInput.iconAligns.right}
      placeholder="Search"
    />
  </div>
)

export default Comp
