import Heading from '@pluralsight/ps-heading/react'
import { Link as RouterLink } from 'react-router-dom'
import React from 'react'

import { Code, Example, P, Link } from '../../common/components'

export default props =>
  <div>
    <Heading size="xx-large"><h1>Text styles</h1></Heading>

    <Heading size="large"><h2>Headings</h2></Heading>
    <P>
      Install the component dependency:
    </P>
    <Code language="bash">
      npm install @pluralsight/ps-heading --save-dev
    </Code>

    <P>
      Include a React component in your project:
    </P>
    <Code language="javascript">
      import Heading from '@pluralsight/ps-heading/react'
    </Code>

    <P>
      For more project setup guidance, see the
      {' '}
      <RouterLink to="/components/installation">
        Component Installation Instructions
      </RouterLink>
      .
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
