import React from 'react'

import ButtonReadme from '../../packages/button/README.md'
import Chrome from '../layouts/chrome'

const COMPONENT_PATH_PREFIX = '../../components/'

const docs = {
  button: ButtonReadme
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
