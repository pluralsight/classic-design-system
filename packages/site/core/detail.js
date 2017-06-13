import React from 'react'

import ColorDoc from './color'
import Chrome from '../layouts/chrome'
import InstallationDoc from './installation'
import SpacingDoc from './spacing'
import TypographyDoc from './typography'

const docs = {
  color: <ColorDoc />,
  installation: <InstallationDoc />,
  spacing: <SpacingDoc />,
  typography: <TypographyDoc />
}

export default props =>
  <Chrome title={props.match.params.coreId}>
    {docs[props.match.params.coreId]}
  </Chrome>
