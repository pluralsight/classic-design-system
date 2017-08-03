import Link from '@pluralsight/ps-design-system-link/react'
import React from 'react'

import { Code, P } from '../../common/components'

export default _ =>
  <div>
    <P>Install the component dependency:</P>
    <Code language="bash">
      npm install @pluralsight/ps-design-system-text --save-dev
    </Code>

    <P>Include a React component in your project:</P>
    <Code language="javascript">
      import * as Text from '@pluralsight/ps-design-system-text/react'
    </Code>
  </div>
