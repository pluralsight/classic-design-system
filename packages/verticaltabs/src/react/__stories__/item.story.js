import { storiesOf } from '@storybook/react'
import { css } from 'glamor'
import React from 'react'

import Icon from '@pluralsight/ps-design-system-icon'
import VerticalTabs from '../index.js'

const ChildPlaceholder = () => (
  <div {...css({ border: '1px dashed pink', minHeight: 100 })} />
)

const { Tier1, Tier2 } = VerticalTabs

const ContainerDecorator = storyFn => (
  <div style={{ height: '100%', width: '240px' }}>
    <VerticalTabs>{storyFn()}</VerticalTabs>
  </div>
)

storiesOf('components|VerticalTabs/Tier1 Item', module)
  .addDecorator(ContainerDecorator)
  .add('basic', () => (
    <Tier1
      header={
        <Tier1.Header icon={<Icon id={Icon.ids.placeholder} />}>
          text here
        </Tier1.Header>
      }
    />
  ))
  .add('link', () => (
    <Tier1
      header={
        <Tier1.Header href="#" icon={<Icon id={Icon.ids.placeholder} />}>
          text here
        </Tier1.Header>
      }
    />
  ))
  .add('active', () => (
    <Tier1
      active
      header={
        <Tier1.Header href="#" icon={<Icon id={Icon.ids.placeholder} />}>
          text here
        </Tier1.Header>
      }
    />
  ))
  .add('collapsible', () => (
    <Tier1
      collapsible
      header={
        <Tier1.Header icon={<Icon id={Icon.ids.placeholder} />}>
          text here
        </Tier1.Header>
      }
    >
      <ChildPlaceholder />
    </Tier1>
  ))

storiesOf('components|VerticalTabs/Tier2 Item', module)
  .addDecorator(ContainerDecorator)
  .add('basic', () => <Tier2 header={<Tier2.Header>text here</Tier2.Header>} />)
  .add('link', () => (
    <Tier2 header={<Tier2.Header href="#">text here</Tier2.Header>} />
  ))
  .add('active', () => (
    <Tier2 active header={<Tier2.Header href="#">text here</Tier2.Header>} />
  ))
