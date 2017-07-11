import React from 'react'

import Chrome from '../layouts/chrome'
import WebpackDoc from './webpack'

const docs = {
  webpack: <WebpackDoc />
}

export default props =>
  <Chrome title={props.match.params.buildId}>
    {docs[props.match.params.buildId]}
  </Chrome>
