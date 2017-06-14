import React from 'react'

import ButtonDoc from './button'
import InstallationDoc from './installation'
import Chrome from '../layouts/chrome'
import TabsDoc from './tabs'
import TextStylesDoc from './text-styles'

const docs = {
  button: <ButtonDoc />,
  installation: <InstallationDoc />,
  tabs: <TabsDoc />,
  'text-styles': <TextStylesDoc />
}

export default props =>
  <Chrome title={props.match.params.componentId}>
    {docs[props.match.params.componentId]}
  </Chrome>
