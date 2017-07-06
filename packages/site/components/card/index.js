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

    <Heading size="large"><h2>Card sizes</h2></Heading>
    <Example.React
      component={
        <Card image={<img src="http://via.placeholder.com/350x150" />} />
      }
      name="Card"
      permutations={[{ size: 'large' }, {}, { size: 'small' }]}
    />

    <Heading size="large"><h2>Card progress</h2></Heading>
    <Example.React
      component={
        <Card image={<img src="http://via.placeholder.com/350x150" />} />
      }
      name="Card"
      permutations={[{ progress: 0.25 }, { progress: 0.66 }, { progress: 1 }]}
    />
  </div>
