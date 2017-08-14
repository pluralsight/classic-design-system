import Icon from '@pluralsight/ps-design-system-icon/react'
import React from 'react'

import { Code, Example, Heading, Link, P } from '../../common/components'
import Color from './color'
import CommonSet from './common-set'

export default props => {
  return (
    <div>
      <Heading size="xxLarge">
        <h1>Icon</h1>
      </Heading>

      <P>Install the component dependency:</P>
      <Code language="bash">
        npm install @pluralsight/ps-design-system-icon --save-dev
      </Code>

      <P>Include a React component in your project:</P>
      <Code language="javascript">
        import Icon from '@pluralsight/ps-design-system-icon/react'
      </Code>

      <Heading size="large">
        <h2>Size</h2>
      </Heading>
      <P>Icons can take on four standard sizes.</P>
      <Example.React
        codes={[
          `
<Icon id={Icon.ids.code} size="xLarge" />
`,
          `
<Icon id={Icon.ids.code} size="large" />
`,
          `
<Icon id={Icon.ids.code} size="medium" />
`,
          `
<Icon id={Icon.ids.code} size="small" />
`
        ]}
      />

      <Color />
      <CommonSet />
    </div>
  )
}
