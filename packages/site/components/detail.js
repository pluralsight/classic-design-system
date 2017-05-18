import React from 'react'

import ButtonDoc from './button'
import Chrome from '../layouts/chrome'

const docs = {
  button: <ButtonDoc />
}

export default props => (
  <Chrome title={props.componentId}>
    {docs[props.match.params.componentId]}
  </Chrome>
)
