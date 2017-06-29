import { Heading, P } from '@pluralsight/ps-design-system-text/react'
import { Link } from 'react-router-dom'
import React from 'react'

import Chrome from '../layouts/chrome'

export default () =>
  <Chrome>
    <Heading size="xx-large"><h2>Welcome!</h2></Heading>
    <P>
      Welcome to the Pluralsight Design System.
    </P>
    <P>
      This project is being WIPped up as we you read this. Feel free to have a
      look around. Inspect a gradient or two.
    </P>
  </Chrome>
