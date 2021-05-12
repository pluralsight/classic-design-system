import { Meta, Story } from '@storybook/react/types-6-0'

import React from 'react'

import Link from '../index'

export default {
  title: 'Components/Link',
  component: Link
} as Meta

export const Appearances: Story = () => (
  <div>
    {Object.values(Link.appearances).map((appearance, i) => (
      <Link key={i} appearance={appearance}>
        <a href="http://duckduckgo.com">{appearance}</a>
      </Link>
    ))}
  </div>
)
