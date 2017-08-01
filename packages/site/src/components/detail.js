import React from 'react'

import 'code-example-dependencies-loader!'
import ButtonDoc from './button'
import CardDoc from './card'
import Chrome from '../layouts/chrome'
import IconDoc from './icon'
import TabsDoc from './tabs'
import TextStylesDoc from './text-styles'

const docs = {
  button: <ButtonDoc />,
  card: <CardDoc />,
  icon: <IconDoc />,
  tabs: <TabsDoc />,
  'text-styles': <TextStylesDoc />
}

export default props =>
  <Chrome title={props.match.params.componentId}>
    {docs[props.match.params.componentId]}
  </Chrome>
