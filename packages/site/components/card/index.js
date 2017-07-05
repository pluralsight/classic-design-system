import React from 'react'

import { Code, Example, Heading, Link, P } from '../../common/components'

import Card from '@pluralsight/ps-design-system-card/react'

export default _ =>
  <div>
    <Heading size="xx-large"><h1>Card</h1></Heading>

    <P>
      Install the component dependency:
    </P>
    <Code language="bash">
      npm install @pluralsight/ps-design-system-card --save-dev
    </Code>

    <P>
      Include a React component in your project:
    </P>
    <Code language="javascript">
      import Card from '@pluralsight/ps-design-system-card/react'
    </Code>

    <Heading size="large"><h2>Card</h2></Heading>
    <Example.React component={<Card />} name="Card" permutations={[{}]} />
  </div>
