import { Meta, Story } from '@storybook/react/types-6-0'
import React from 'react'

import { PaddingDecorator } from './shared'
import { Code, P } from '../../index'

export default {
  title: 'Components/Text/Code',
  component: Code,
  decorators: [PaddingDecorator]
} as Meta

export const Empty: Story = () => (
  <P>
    before|
    <Code />
    |after
  </P>
)

export const Standalone: Story = () => <Code>inline code</Code>

export const LeadSingleLine: Story = () => (
  <P>
    <Code>inline code</Code> that is here
  </P>
)

export const EndsSingleLine: Story = () => (
  <P>
    This is where we see <Code>inline code</Code>
  </P>
)

export const MiddleOfParagraph: Story = () => (
  <P>
    Please advise soonest streamline data-point, and execute , price point. This
    is not the hill i want to die on going forward. Diversify kpis not the long
    pole in my tent. Synergize productive mindfulness can you send me an invite?
    nor high-level so back of the net vertical integration. Deliverables{' '}
    <Code>inline code</Code> granularity minimize backwards overflow. Baseline
    locked and loaded, and locked and loaded. Get buy-in programmatically, or
    out of the loop. I'll book a meeting so we can solution this before the
    sprint is over get buy-in, and closing these latest prospects is like
    putting socks on an octopus. Knowledge is power bake it in but take five,
    punch the tree, and come back in here with a clear head.
  </P>
)

export const MaintainsWhitespace: Story = () => <Code> in the middle </Code>

export const LineWrap: Story = () => (
  <P>
    text at the start
    <Code>
      buy-in programmatically, or out of the loop. I'll book a meeting so we can
      solution this before the sprint is over get buy-in, and closing these
      latest prospects is like putting socks on an octopus. Knowledge is power
    </Code>
    text on the end
  </P>
)
