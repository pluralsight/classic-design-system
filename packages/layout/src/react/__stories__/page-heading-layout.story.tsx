import { Meta, Story } from '@storybook/react/types-6-0'

import React from 'react'

import Button from '@pluralsight/ps-design-system-button'
import * as core from '@pluralsight/ps-design-system-core'
import Link from '@pluralsight/ps-design-system-link'

import { PageHeadingLayout } from '..'

export default {
  title: 'Components/PageHeadingLayout',
  component: PageHeadingLayout
} as Meta

const mockActions = [
  <Button key="action-1">Wow, an action</Button>,
  <Link key="action-2">
    <a href="https://duckduckgo.com">A link</a>
  </Link>
]

const mockManyActions = [
  <Button key="action-1">Wow, an action</Button>,
  <Link key="action-2">
    <a href="https://duckduckgo.com">A link</a>
  </Link>,
  <Button key="action-3">Wow, an action</Button>,
  <Link key="action-4">
    <a href="https://duckduckgo.com">A link</a>
  </Link>,
  <Button key="action-5">Wow, an action</Button>,
  <Link key="action-6">
    <a href="https://duckduckgo.com">A link</a>
  </Link>,
  <Button key="action-7">Wow, an action</Button>,
  <Link key="action-8">
    <a href="https://duckduckgo.com">A link</a>
  </Link>
]

export const Default: Story = () => (
  <PageHeadingLayout heading={<h2>My Page</h2>}>My content</PageHeadingLayout>
)

export const LongTitle: Story = () => (
  <PageHeadingLayout
    heading={
      <h2>
        My page is here and it's long. My page is here and it's long. My page is
        here and it's long. My page is here and it's long.
      </h2>
    }
  >
    My content
  </PageHeadingLayout>
)
export const WithActions: Story = () => (
  <PageHeadingLayout heading={<h2>My Page</h2>} actions={mockActions}>
    My content
  </PageHeadingLayout>
)

export const LongTitleWithActions: Story = () => (
  <PageHeadingLayout
    actions={mockActions}
    heading={
      <h2>
        My page is here and it's long. My page is here and it's long. My page is
        here and it's long. My page is here and it's long.
      </h2>
    }
  >
    My content
  </PageHeadingLayout>
)

export const LongTitleWithLotsOfActions: Story = () => (
  <PageHeadingLayout
    heading={
      <h2>
        My page is here and it's long. My page is here and it's long. My page is
        here and it's long. My page is here and it's long.
      </h2>
    }
    actions={mockManyActions}
  >
    My content
  </PageHeadingLayout>
)

export const LotsOfActions: Story = () => (
  <PageHeadingLayout heading={<h2>My Page</h2>} actions={mockManyActions}>
    My content
  </PageHeadingLayout>
)
