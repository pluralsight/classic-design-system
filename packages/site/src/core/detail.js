import React from 'react'

import ColorDoc from './color'
import { Content } from '../common/components'
import BuildDoc from './build'
import SpacingDoc from './spacing'
import TypographyDoc from './typography'
import UsageDoc from './usage'

const docs = {
  build: <BuildDoc />,
  color: <ColorDoc />,
  spacing: <SpacingDoc />,
  typography: <TypographyDoc />,
  usage: <UsageDoc />
}

export default props =>
  <Content title={props.match.params.coreId}>
    {docs[props.match.params.coreId]}
  </Content>
