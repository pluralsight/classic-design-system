import React from 'react'

import ButtonDoc from './button'
import InstallationDoc from './installation'
import Chrome from '../layouts/chrome'

const docs = {
  button: <ButtonDoc />,
  installation: <InstallationDoc />
}

export default props =>
  <Chrome title={props.match.params.componentId}>
    {docs[props.match.params.componentId]}
  </Chrome>
