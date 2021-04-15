import * as Icon from '@pluralsight/ps-design-system-icon'
import { storiesOf } from '@storybook/react'
import glamorDefault, * as glamorExports from 'glamor'
import React from 'react'

import VerticalTabs from '../index'

const glamor = glamorDefault || glamorExports
const { CollapsibleGroup, Group, Tier1, Tier2 } = VerticalTabs

const noop = () => null

const longTitle = `Polaroid slow-carb chartreuse keytar cold-pressed salvia single-origin coffee.`

const ContainerDecorator = (storyFn: () => React.ReactNode) => (
  <div {...glamor.css({ height: '100%', width: '240px' })}>
    <VerticalTabs>{storyFn()}</VerticalTabs>
  </div>
)

const Placeholder: React.FC = props => (
  <div {...glamor.css({ height: 100, border: '1px dashed pink' })} {...props} />
)

storiesOf('components|VerticalTabs/Group', module)
  .addDecorator(ContainerDecorator)
  .add('basic', () => (
    <Group>
      <Tier1 header={<Tier1.Header>First</Tier1.Header>} />
      <Tier1 header={<Tier1.Header>Second</Tier1.Header>} />
      <Tier1 header={<Tier1.Header>Third</Tier1.Header>} />
      <Tier1 header={<Tier1.Header>Fourth</Tier1.Header>} />
    </Group>
  ))
  .add('header', () => (
    <Group header={<Group.Header>Group Header</Group.Header>}>
      <Tier1 header={<Tier1.Header>First</Tier1.Header>} />
      <Tier1 header={<Tier1.Header>Second</Tier1.Header>} />
      <Tier1 header={<Tier1.Header>Third</Tier1.Header>} />
      <Tier1 header={<Tier1.Header>Fourth</Tier1.Header>} />
    </Group>
  ))
  .add('tiers', () => (
    <Group header={<Group.Header>Group Header</Group.Header>}>
      <Tier1 header={<Tier1.Header>First</Tier1.Header>}>
        <Tier2 header={<Tier2.Header>First</Tier2.Header>} />
        <Tier2 header={<Tier2.Header>Second</Tier2.Header>} />
        <Tier2 header={<Tier2.Header>Third</Tier2.Header>} />
      </Tier1>

      <Tier1 header={<Tier1.Header>Second</Tier1.Header>}>
        <Tier2 header={<Tier2.Header>First</Tier2.Header>} />
        <Tier2 header={<Tier2.Header>Second</Tier2.Header>} />
        <Tier2 header={<Tier2.Header>Third</Tier2.Header>} />
      </Tier1>
    </Group>
  ))
  .add('active item', () => (
    <Group header={<Group.Header>Group Header</Group.Header>}>
      <Tier1 header={<Tier1.Header>First</Tier1.Header>} />
      <Tier1 header={<Tier1.Header>Second</Tier1.Header>} />
      <Tier1 active header={<Tier1.Header>Third</Tier1.Header>} />
      <Tier1 header={<Tier1.Header>Fourth</Tier1.Header>} />
    </Group>
  ))
  .add('collapsible', () => (
    <CollapsibleGroup
      header={<CollapsibleGroup.Header>Group Header</CollapsibleGroup.Header>}
    >
      <Tier1 header={<Tier1.Header>First</Tier1.Header>} />
      <Tier1 header={<Tier1.Header>Second</Tier1.Header>} />
      <Tier1 header={<Tier1.Header>Third</Tier1.Header>} />
      <Tier1 header={<Tier1.Header>Fourth</Tier1.Header>} />
    </CollapsibleGroup>
  ))
  .add('collapsible open', () => (
    <CollapsibleGroup
      header={<CollapsibleGroup.Header>Group Header</CollapsibleGroup.Header>}
      startOpen
    >
      <Tier1 header={<Tier1.Header>First</Tier1.Header>} />
      <Tier1 header={<Tier1.Header>Second</Tier1.Header>} />
      <Tier1 header={<Tier1.Header>Third</Tier1.Header>} />
      <Tier1 header={<Tier1.Header>Fourth</Tier1.Header>} />
    </CollapsibleGroup>
  ))

storiesOf('components|VerticalTabs/Tier1', module)
  .addDecorator(ContainerDecorator)
  .add('basic', () => (
    <Tier1
      header={
        <Tier1.Header icon={<Icon.PlaceholderIcon />}>text here</Tier1.Header>
      }
    />
  ))
  .add('link', () => (
    <Tier1
      header={
        <Tier1.Header href="#" icon={<Icon.PlaceholderIcon />}>
          text here
        </Tier1.Header>
      }
    />
  ))
  .add('button', () => (
    <Tier1
      header={
        <Tier1.Header onClick={noop} icon={<Icon.PlaceholderIcon />}>
          text here
        </Tier1.Header>
      }
    />
  ))
  .add('active', () => (
    <Tier1
      active
      header={
        <Tier1.Header icon={<Icon.PlaceholderIcon />}>text here</Tier1.Header>
      }
    />
  ))
  .add('collapsible', () => (
    <Tier1
      collapsible
      header={
        <Tier1.Header icon={<Icon.PlaceholderIcon />}>text here</Tier1.Header>
      }
    >
      <Placeholder />
    </Tier1>
  ))

storiesOf('components|VerticalTabs/Tier2', module)
  .addDecorator(ContainerDecorator)
  .add('basic', () => <Tier2 header={<Tier2.Header>text here</Tier2.Header>} />)
  .add('link', () => (
    <Tier2 header={<Tier2.Header href="#">text here</Tier2.Header>} />
  ))
  .add('button', () => (
    <Tier2 header={<Tier2.Header onClick={noop}>text here</Tier2.Header>} />
  ))
  .add('active', () => (
    <Tier2 active header={<Tier2.Header>text here</Tier2.Header>} />
  ))

storiesOf('components|VerticalTabs/truncation', module)
  .addDecorator(ContainerDecorator)
  .add('basic', () => (
    <>
      <Group header={<Group.Header>{longTitle}</Group.Header>}>
        <Tier1 header={<Tier1.Header>{longTitle}</Tier1.Header>}>
          <Tier2 header={<Tier2.Header>{longTitle}</Tier2.Header>} />
          <Tier2 header={<Tier2.Header>{longTitle}</Tier2.Header>} />
          <Tier2 header={<Tier2.Header>{longTitle}</Tier2.Header>} />
        </Tier1>

        <Tier1
          header={
            <Tier1.Header icon={<Icon.PlaceholderIcon />}>
              {longTitle}
            </Tier1.Header>
          }
        >
          <Tier2 header={<Tier2.Header>{longTitle}</Tier2.Header>} />
          <Tier2 header={<Tier2.Header>{longTitle}</Tier2.Header>} />
          <Tier2 header={<Tier2.Header>{longTitle}</Tier2.Header>} />
        </Tier1>
      </Group>

      <CollapsibleGroup
        header={<CollapsibleGroup.Header>{longTitle}</CollapsibleGroup.Header>}
        startOpen
      >
        <Tier1 header={<Tier1.Header>{longTitle}</Tier1.Header>}>
          <Tier2 header={<Tier2.Header>{longTitle}</Tier2.Header>} />
          <Tier2 header={<Tier2.Header>{longTitle}</Tier2.Header>} />
          <Tier2 header={<Tier2.Header>{longTitle}</Tier2.Header>} />
        </Tier1>

        <Tier1
          header={
            <Tier1.Header icon={<Icon.PlaceholderIcon />}>
              {longTitle}
            </Tier1.Header>
          }
        >
          <Tier2 header={<Tier2.Header>{longTitle}</Tier2.Header>} />
          <Tier2 header={<Tier2.Header>{longTitle}</Tier2.Header>} />
          <Tier2 header={<Tier2.Header>{longTitle}</Tier2.Header>} />
        </Tier1>
      </CollapsibleGroup>
    </>
  ))
