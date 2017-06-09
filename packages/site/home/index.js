import Heading from '@pluralsight/ps-heading/react'
import { Link } from 'react-router-dom'
import React from 'react'

import Chrome from '../layouts/chrome'
import { P } from '../common/components'

export default () =>
  <Chrome>
    <Heading.Gigantic>Welcome!</Heading.Gigantic>
    <P>
      Welcome to the Pluralsight Design System.
    </P>
    <P>
      This project is being WIPped up as we you read this. Feel free to have a
      look around. Inspect a gradient or two.
    </P>
  </Chrome>
