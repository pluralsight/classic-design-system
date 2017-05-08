import React from 'react'

import ButtonReadme from '../../packages/button/README.md'

const COMPONENT_PATH_PREFIX = '../../components/'

const docs = {
  button: ButtonReadme
}

const ComponentDoc = props => (
  <div>
    Detail doc component for {props.componentId}:
    {React.createElement(docs[props.componentId])}
  </div>
)

export default props => (
  <div>
    <ComponentDoc componentId={props.match.params.componentId} />
  </div>
)
