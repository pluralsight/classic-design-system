import React from 'react'

import 'code-example-dependencies-loader!'
import ButtonDoc from './button'
import CardDoc from './card'
import { Content } from '../common/components'
import IconDoc from './icon'
import RowDoc from './row'
import TabsDoc from './tabs'
import TextStylesDoc from './text-styles'

const docs = {
  button: <ButtonDoc />,
  card: <CardDoc />,
  icon: <IconDoc />,
  row: <RowDoc />,
  tabs: <TabsDoc />,
  'text-styles': <TextStylesDoc />
}

export default props =>
  <Content title={props.match.params.componentId}>
    {docs[props.match.params.componentId]}
  </Content>
