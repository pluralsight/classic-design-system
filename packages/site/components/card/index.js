import React from 'react'

import { Code, Example, Heading, Link, P } from '../../common/components'

import Card from '@pluralsight/ps-design-system-card/react'

const defaultCard = (
  <Card
    title={<a>The Card Title</a>}
    image={<img src="http://via.placeholder.com/350x150" />}
  />
)

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
      component={defaultCard}
      name="Card"
      permutations={[{ size: 'large' }, {}, { size: 'small' }]}
    />

    <Heading size="large"><h2>Card progress</h2></Heading>
    <Example.React
      component={defaultCard}
      name="Card"
      permutations={[{ progress: 0.25 }, { progress: 0.66 }, { progress: 1 }]}
    />

    <Heading size="large"><h2>Card metadata</h2></Heading>
    <Example.React
      component={defaultCard}
      name="Card"
      permutations={[
        { metadata1: ['Simon Allardice'] },
        {
          metadata1: ['Simon Allardice'],
          metadata2: ['Intermediate', '2hr 20min', 'July 24, 1847']
        },
        {
          metadata1: [
            <a>The Honorable Simon Allardice Hailing From Shores Abroad</a>
          ],
          metadata2: [
            'Only about the Best Level in the World for Learning',
            '2hr 20min or longer depending',
            "July 24, 1847 or year thereabouts, it's unclear"
          ]
        }
      ]}
    />
  </div>
