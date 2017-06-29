import { P } from '@pluralsight/ps-design-system-text/react'
import { Link as RouterLink } from 'react-router-dom'
import Link from '@pluralsight/ps-link/react'
import React from 'react'

import { Code } from '../../common/components'

export default _ =>
  <div>
    <P>
      Install the component dependency:
    </P>
    <Code language="bash">
      npm install @pluralsight/ps-design-system-text --save-dev
    </Code>

    <P>
      Include a React component in your project:
    </P>
    <Code language="javascript">
      import Text from '@pluralsight/ps-design-system-text/react'
    </Code>

    <P>
      For more project setup guidance, see the{' '}
      <Link>
        <RouterLink to="/components/installation">
          Component Installation Instructions
        </RouterLink>
      </Link>
      .
    </P>
  </div>
