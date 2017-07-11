import React from 'react'

import ButtonDoc from './button'
import CardDoc from './card'
import Chrome from '../layouts/chrome'
import TabsDoc from './tabs'
import TextStylesDoc from './text-styles'

const docs = {
  button: <ButtonDoc />,
  card: <CardDoc />,
  tabs: <TabsDoc />,
  'text-styles': <TextStylesDoc />
}

export default props =>
  <Chrome title={props.match.params.componentId}>
    {docs[props.match.params.componentId]}
  </Chrome>
