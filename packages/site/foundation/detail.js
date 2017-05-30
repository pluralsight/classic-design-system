import React from 'react'

import ColorDoc from './color'
import Chrome from '../layouts/chrome'

const docs = {
  color: <ColorDoc />
}

export default props => (
  <Chrome title={props.match.params.foundationId}>
    {docs[props.match.params.foundationId]}
  </Chrome>
)
