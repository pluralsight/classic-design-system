import { storiesOf } from '@storybook/react'
import React from 'react'

import { FLOW_NAV } from './fixtures.js'
import VerticalTabs from '../index.js'

const { Group, Tier1, Tier2 } = VerticalTabs

storiesOf('components|VerticalTabs/examples', module).add('FLOW', () => {
  function FlowNav(props) {
    const [collapsed, setCollapsed] = React.useState(true)
    const [activeId, setActiveId] = React.useState('pr-resolution')
    const isActive = id => activeId === id

    const activate = (evt, id) => {
      evt.preventDefault()
      setActiveId(id)
    }

    const open = () => setCollapsed(false)
    const close = () => setCollapsed(true)

    return (
      <div
        style={{
          display: 'flex',
          height: '100%',
          justifyContent: 'start',
          width: '100%'
        }}
      >
        <div
          onMouseEnter={open}
          onMouseLeave={close}
          style={{ width: collapsed ? 72 : 240 }}
        >
          <VerticalTabs {...props} hideLabels={collapsed}>
            <Group>
              {FLOW_NAV.map((section, sectionKey) => {
                const sectionHeader = section.header && (
                  <Tier1.Header icon={section.header.icon}>
                    {section.header.title}
                  </Tier1.Header>
                )

                return (
                  <VerticalTabs.Tier1
                    collapsible={section.collapsible}
                    key={sectionKey}
                    header={sectionHeader}
                  >
                    {section.items.map((item, itemKey) => {
                      const active = isActive(item.id)
                      const itemHeader = (
                        <Tier2.Header
                          href={item.href}
                          onClick={evt => activate(evt, item.id)}
                        >
                          {item.title}
                        </Tier2.Header>
                      )

                      return (
                        <Tier2
                          active={active}
                          header={itemHeader}
                          key={itemKey}
                        />
                      )
                    })}
                  </VerticalTabs.Tier1>
                )
              })}
            </Group>
          </VerticalTabs>
        </div>
      </div>
    )
  }

  return <FlowNav />
})
