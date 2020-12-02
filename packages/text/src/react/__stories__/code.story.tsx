import * as core from '@pluralsight/ps-design-system-core'
import { storiesOf } from '@storybook/react'
import React from 'react'

import Code from '../code'
import P from '../p'

const PaddingDecorator = (storyFn: () => React.ReactNode) => (
  <div style={{ padding: core.layout.spacingXLarge }}>{storyFn()}</div>
)

storiesOf('Code', module)
  .addDecorator(PaddingDecorator)
  .add('empty', () => (
    <P>
      before|
      <Code />
      |after
    </P>
  ))
  .add('standalone', () => <Code>inline code</Code>)
  .add('lead single line', () => (
    <P>
      <Code>inline code</Code> that is here
    </P>
  ))
  .add('ends single line', () => (
    <P>
      This is where we see <Code>inline code</Code>
    </P>
  ))
  .add('middle of paragraph', () => (
    <P>
      Please advise soonest streamline data-point, and execute , price point.
      This is not the hill i want to die on going forward. Diversify kpis not
      the long pole in my tent. Synergize productive mindfulness can you send me
      an invite? nor high-level so back of the net vertical integration.
      Deliverables <Code>inline code</Code> granularity minimize backwards
      overflow. Baseline locked and loaded, and locked and loaded. Get buy-in
      programmatically, or out of the loop. I'll book a meeting so we can
      solution this before the sprint is over get buy-in, and closing these
      latest prospects is like putting socks on an octopus. Knowledge is power
      bake it in but take five, punch the tree, and come back in here with a
      clear head.
    </P>
  ))
  .add('maintains whitespace', () => <Code> in the middle </Code>)
  .add('line wrap', () => (
    <P>
      text at the start
      <Code>
        buy-in programmatically, or out of the loop. I'll book a meeting so we
        can solution this before the sprint is over get buy-in, and closing
        these latest prospects is like putting socks on an octopus. Knowledge is
        power
      </Code>
      text on the end
    </P>
  ))
