import React from 'react'

import VerticalTabs from '@pluralsight/ps-design-system-verticaltabs'
import { PlaceholderIcon } from '@pluralsight/ps-design-system-icon'
import * as Text from '@pluralsight/ps-design-system-text'
import * as core from '@pluralsight/ps-design-system-core'

import {
  Chrome,
  Code,
  Content,
  Example,
  P,
  PageHeading,
  PropTypes,
  SectionHeading,
  TextLink,
  ThemeToggle
} from '../../src/ui/index.js'

export default _ => (
  <Chrome>
    <Content title="VerticalTabs">
      <PageHeading packageName="verticaltabs">Vertical Tabs</PageHeading>

      <P>Install the component dependency:</P>
      <Code language="bash">
        npm install @pluralsight/ps-design-system-verticaltabs
      </Code>

      <P>Include a React component in your project:</P>
      <Code language="javascript">
        import VerticalTabs from '@pluralsight/ps-design-system-verticaltabs'
      </Code>

      <PropTypes
        props={{
          'VerticalTabs.Group': [
            PropTypes.row([
              'children',
              <code key="comp">VerticalTabs.Tier1</code>,
              null,
              null,
              'VerticalTabs.Tier1 components'
            ]),
            PropTypes.row([
              'header',
              <code key="comp">VerticalTabs.Group.Header</code>,
              null,
              null,
              'slot group header into position'
            ]),
            PropTypes.row([
              'forceCollapsed',
              'boolean',
              null,
              'false',
              'force lists to be collapsed'
            ]),
            PropTypes.row([
              'hideLabels',
              'boolean',
              null,
              'false',
              'hide text labels'
            ])
          ],
          'VerticalTabs.Group.Header': [
            PropTypes.row([
              'tagName',
              'string',
              null,
              <code key="tag">h2</code>,
              'change default tag of header root tag'
            ]),
            PropTypes.row(['children', 'string', null, null, 'header text'])
          ],
          'VerticalTabs.CollapsibleGroup': [
            PropTypes.row([
              'children',
              'VerticalTabs.Tier1',
              null,
              null,
              'VerticalTabs.Tier1 components'
            ]),
            PropTypes.row([
              'header',
              'VerticalTabs.CollapsibleGroup.Header',
              null,
              null,
              'slot group header into position'
            ]),
            PropTypes.row([
              'startOpen',
              'Boolean',
              null,
              null,
              'group in open is open on first render'
            ]),
            PropTypes.row([
              'groupButtonAriaLabel',
              'string',
              null,
              null,
              'custom label for collapsible group toggle toggle for screenreaders'
            ])
          ],
          'VerticalTabs.CollapsibleGroup.Header': [
            PropTypes.row(['children', 'string', null, null, 'header text']),
            PropTypes.row([
              'tagName',
              'string',
              null,
              <code key="tag">h2</code>,
              'change default tag of header root tag'
            ])
          ],
          'VerticalTabs.Tier1': [
            PropTypes.row([
              'active',
              'boolean',
              null,
              null,
              'changes visual state to active tab tier'
            ]),
            PropTypes.row([
              'children',
              'VerticalTabs.Tier2',
              null,
              null,
              'VerticalTabs.Tier2 components'
            ]),
            PropTypes.row([
              'header',
              'VerticalTabs.Tier1.Header',
              null,
              null,
              'slot tier1 header into position'
            ])
          ],
          'VerticalTabs.Tier1.Header': [
            PropTypes.row(['children', 'string', null, null, 'header text']),
            PropTypes.row(['icon', '*Icon', null, null, 'Icon component'])
          ],
          'VerticalTabs.Tier2': [
            PropTypes.row([
              'active',
              'boolean',
              null,
              null,
              'changes visual state to active tab tier'
            ]),
            PropTypes.row([
              'header',
              'VerticalTabs.Tier2.Header',
              null,
              null,
              'slot tier2 header into position'
            ])
          ],
          'VerticalTabs.Tier2.Header': [
            PropTypes.row(['children', 'string', null, null, 'header text']),
            PropTypes.row(['icon', '*Icon', null, null, 'Icon component'])
          ]
        }}
      />

      <SectionHeading>In-app example</SectionHeading>
      <br />

      <ThemeToggle.Container>
        <FlowNavExample />
      </ThemeToggle.Container>

      <Code lang="javascript" collapsible>
        {`
const FLOW_NAV_ITEMS = [...]

const [open, setOpen] = React.useState(...)

return (
  <VerticalTabs forceCollapsed={!open} hideLabels={!open}>
    <VerticalTabs.Group>
      {FLOW_NAV_ITEMS.map(section => {
        const sectionHeader = (
          <VerticalTabs.Tier1.Header icon={section.header.icon}>
            {section.header.title}
          </VerticalTabs.Tier1.Header>
        )

        return (
          <VerticalTabs.Tier1 header={sectionHeader}>
            {section.items.map(item => {
              const itemHeader = (
                <VerticalTabs.Tier2.Header href={item.href}>
                  {item.title}
                </VerticalTabs.Tier2.Header>
              )

              return <VerticalTabs.Tier2 header={itemHeader} />
            })}
          </VerticalTabs.Tier1>
        )
      })}
    </VerticalTabs.Group>
  </VerticalTabs>
)
`}
      </Code>

      <SectionHeading>Tiers as links</SectionHeading>
      <P>
        To use Tiers as links pass a href with or without onClick to Tier header
      </P>
      <Example.React
        themeToggle
        orient="vertical"
        includes={{ VerticalTabs }}
        codes={[
          `
  <VerticalTabs>
    <VerticalTabs.Tier1
      header={
        <VerticalTabs.Tier1.Header href=" ">
          Tier 1 link
        </VerticalTabs.Tier1.Header>
      }
    />
    <VerticalTabs.Tier2
      header={
        <VerticalTabs.Tier2.Header href=" ">
          Tier 2 link
        </VerticalTabs.Tier2.Header>
      }
    />
  </VerticalTabs>
    `
        ]}
      />
      <SectionHeading>Tiers as buttons</SectionHeading>
      <P>
        To use Tiers as button pass an onClick prop to Tier header without a
        href
      </P>
      <Example.React
        themeToggle
        orient="vertical"
        includes={{ VerticalTabs, PlaceholderIcon }}
        codes={[
          `
  <VerticalTabs>
    <VerticalTabs.Tier1
      header={
        <VerticalTabs.Tier1.Header onClick={_ => {}}>
          Tier 1 button
        </VerticalTabs.Tier1.Header>
      }
    />
    <VerticalTabs.Tier2
      header={
        <VerticalTabs.Tier2.Header onClick={_ => {}}>
          Tier 2 button
        </VerticalTabs.Tier2.Header>
      }
    />
  </VerticalTabs>
    `
        ]}
      />
      <SectionHeading>Tiers with react-router</SectionHeading>
      <P>
        Many users of this component are using it in conjunction with{' '}
        <TextLink href="https://github.com/ReactTraining/react-router/issues/1176">
          <Text.Code>react-router</Text.Code>
        </TextLink>
        . If you'd like to do the same and use{' '}
        <Text.Code>VerticalTabs.Tier1</Text.Code> or{' '}
        <Text.Code>VerticalTabs.Tier2</Text.Code> to trigger react-router links,
        you can follow this pattern.
      </P>
      <ThemeToggle.Container>
        <ul
          style={{
            padding: core.layout.spacingLarge,
            listStyle: 'none'
          }}
        >
          <VerticalTabs.Tier1
            header={
              <VerticalTabs.Tier1.Header icon={<PlaceholderIcon />}>
                Header Link
              </VerticalTabs.Tier1.Header>
            }
          />
        </ul>
      </ThemeToggle.Container>
      <Code
        lang="javascript"
        collapsible
      >{`import Button from "@pluralsight/ps-design-system-button"
import { withRouter } from "react-router-dom"

// #1 Define your react-router-specific ButtonLink
const HeaderLink = withRouter(props => [
  <VerticalTabs.Tier1.Header
    {...props}
    onClick={evt => {
      evt.preventDefault();
      props.onClick && props.onClick(evt);
      props.history.push(props.to);
    }}
    href={props.to}
  />)
))// #2 Invoke it like you'd usually use Link
<VerticalTabs.Tier1 header={
  <HeaderLink to="/other">React-router Link as DS button</HeaderLink>
} />
`}</Code>
    </Content>
  </Chrome>
)

function FlowNavExample(props) {
  const [open, setOpen] = React.useState(false)
  const [activeId, setActiveId] = React.useState('pr-resolution')
  const isActive = id => activeId === id

  const activate = (evt, id) => {
    evt.preventDefault()
    setActiveId(id)
  }
  return (
    <div
      style={{
        display: 'flex',
        height: '100%',
        justifyContent: 'start',
        minHeight: 1000
      }}
    >
      <div
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        style={{ width: open ? 240 : 72 }}
      >
        <VerticalTabs {...props} forceCollapsed={!open} hideLabels={!open}>
          <VerticalTabs.Group>
            {FLOW_NAV.map((section, sectionKey) => {
              const sectionHeader = section.header && (
                <VerticalTabs.Tier1.Header icon={section.header.icon}>
                  {section.header.title}
                </VerticalTabs.Tier1.Header>
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
                      <VerticalTabs.Tier2.Header
                        href={item.href}
                        onClick={evt => activate(evt, item.id)}
                      >
                        {item.title}
                      </VerticalTabs.Tier2.Header>
                    )

                    return (
                      <VerticalTabs.Tier2
                        active={active}
                        header={itemHeader}
                        key={itemKey}
                      />
                    )
                  })}
                </VerticalTabs.Tier1>
              )
            })}
          </VerticalTabs.Group>
        </VerticalTabs>
      </div>
    </div>
  )
}

export const FLOW_NAV = [
  {
    collapsible: false,
    header: {
      href: '#',
      icon: <PlaceholderIcon />,
      id: 'reports-home',
      title: 'Reports Home'
    },
    items: []
  },
  {
    collapsible: true,
    header: {
      icon: <PlaceholderIcon />,
      id: 'operational-reports',
      title: 'Operational Reports'
    },
    items: [
      {
        href: '#',
        id: 'work-log',
        title: 'Work Log'
      },
      {
        href: '#',
        id: 'project-timeline',
        title: 'Project Timeline'
      },
      {
        href: '#',
        id: 'leaderboard',
        title: 'Leaderboard'
      },
      {
        href: '#',
        id: 'snapshot',
        title: 'Snapshot'
      },
      {
        href: '#',
        id: 'daily-updates',
        title: 'Daily Updates'
      },
      {
        href: '#',
        id: 'spot-check',
        title: 'Spot Check'
      }
    ]
  },
  {
    collapsible: true,
    header: {
      icon: <PlaceholderIcon />,
      id: 'review-collaborate',
      title: 'Review & Collaborate'
    },
    items: [
      {
        href: '#',
        id: 'review-workflow',
        title: 'Review Workflow'
      },
      {
        href: '#',
        id: 'review-collab',
        title: 'Review Collaboration'
      },
      {
        href: '#',
        id: 'pr-resolution',
        title: 'PR Resolution'
      },
      {
        href: '#',
        id: 'knowledge-sharing',
        title: 'Knowledge Sharing'
      },
      {
        href: '#',
        id: 'player-card',
        title: 'Player Card'
      }
    ]
  },
  {
    collapsible: true,
    header: {
      icon: <PlaceholderIcon />,
      id: 'delivery',
      title: 'Delivery'
    },
    items: [
      {
        href: '#',
        title: 'Retrospective'
      }
    ]
  },
  {
    collapsible: true,
    header: {
      icon: <PlaceholderIcon />,
      id: 'fundamentals',
      title: 'Fundamentals'
    },
    items: [
      {
        href: '#',
        id: 'fundamentals-code',
        title: 'Code'
      },
      {
        href: '#',
        id: 'fundamentals-submit',
        title: 'Submit'
      },
      {
        href: '#',
        id: 'fundamentals-review',
        title: 'Review'
      }
    ]
  }
]
