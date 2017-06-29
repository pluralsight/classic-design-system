import { Heading, P } from '@pluralsight/ps-design-system-text/react'
import React from 'react'

import { Example, Link } from '../../common/components'

export default _ =>
  <div>
    <Heading size="large"><h2>Heading styles</h2></Heading>

    <P>
      Heading styles compose complimentary typography attributes for simplified
      implementation. Try to use common heading styles when possible.
    </P>

    <Example.React
      component={<Heading><h2 style={{ color: 'white' }}>Heading</h2></Heading>}
      name="Heading"
      orient="vertical"
      permutations={[
        { size: 'xx-large' },
        { size: 'large' },
        { size: 'medium' }
      ]}
    />
  </div>
