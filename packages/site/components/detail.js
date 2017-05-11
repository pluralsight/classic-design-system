import React from 'react'

import ButtonDoc from './button'
import Chrome from '../layouts/chrome'

const docs = {
  button: ButtonDoc
}

const ComponentDoc = props => (
  <Chrome title={props.componentId}>
    Detail doc component for {props.componentId}:
    {React.createElement(docs[props.componentId])}
  </Chrome>
)

export default props => (
  <div>
    <ComponentDoc componentId={props.match.params.componentId} />
  </div>
)
