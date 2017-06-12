import React from 'react'

import ColorDoc from './color'
import Chrome from '../layouts/chrome'
import SpacingDoc from './spacing'
import TypographyDoc from './typography'

const docs = {
  color: <ColorDoc />,
  spacing: <SpacingDoc />,
  typography: <TypographyDoc />
}

export default props =>
  <Chrome title={props.match.params.foundationId}>
    {docs[props.match.params.foundationId]}
  </Chrome>
