import React from 'react'

import VerticalTabs from '@pluralsight/ps-design-system-verticaltabs'
import Icon from '@pluralsight/ps-design-system-icon/react.js'
import * as Text from '@pluralsight/ps-design-system-text'
import core from '@pluralsight/ps-design-system-core'
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
              'VerticalTabs.Tier1',
              null,
              null,
              'VerticalTabs.Tier1 components'
            ]),
            PropTypes.row([
              'header',
              'VerticalTabs.Group.Header',
              null,
              null,
              'slot group header into position'
            ])
          ],
          'VerticalTabs.Group.Header': [
            PropTypes.row([
              'tagName',
              'string',
              null,
              <code>h2</code>,
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
              <code>h2</code>,
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
            PropTypes.row(['icon', 'Icon', null, null, 'Icon component'])
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
            PropTypes.row(['icon', 'Icon', null, null, 'Icon component'])
          ]
        }}
      />

      <SectionHeading>VerticalTabs</SectionHeading>
      <P>
        Using VerticalTabs sub components example
        <ul>
          <li>VerticalTabs</li>
          <li>VerticalTabs.Divider</li>
          <li>VerticalTabs.Group</li>
          <li>VerticalTabs.Group.Header</li>
          <li>VerticalTabs.CollapsibleGroup</li>
          <li>VerticalTabs.CollapsibleGroup.Header</li>
          <li>VerticalTabs.Tier1</li>
          <li>VerticalTabs.Tier1.Header</li>
          <li>VerticalTabs.Tier2</li>
          <li>VerticalTabs.Tier2.Header</li>
        </ul>
      </P>
      <Example.React
        themeToggle
        orient="vertical"
        includes={{ VerticalTabs, Icon }}
        codes={[
          `
<VerticalTabs>
  <VerticalTabs.Tier1
    header={
      <VerticalTabs.Tier1.Header>Install</VerticalTabs.Tier1.Header>
    }
  />
  <VerticalTabs.Tier1
    header={
      <VerticalTabs.Tier1.Header>Design assets</VerticalTabs.Tier1.Header>
    }
  />
  <VerticalTabs.Tier1
    header={
      <VerticalTabs.Tier1.Header>Contribute</VerticalTabs.Tier1.Header>
    }
  />
  <VerticalTabs.Tier1
    header={
      <VerticalTabs.Tier1.Header>Roadmap</VerticalTabs.Tier1.Header>
    }
  />
<VerticalTabs.Divider />
<VerticalTabs.Group
  header={
    <VerticalTabs.Group.Header>Foundations</VerticalTabs.Group.Header>
  }
>
  <VerticalTabs.Tier1
    header={
      <VerticalTabs.Tier1.Header
        icon={<Icon id={Icon.ids.placeholder} />}
      >
        Color
      </VerticalTabs.Tier1.Header>
    }
  />
  <VerticalTabs.Tier1
    header={
      <VerticalTabs.Tier1.Header
        icon={<Icon id={Icon.ids.placeholder} />}
      >
        Typography
      </VerticalTabs.Tier1.Header>
    }
  />
  <VerticalTabs.Tier1
    header={
      <VerticalTabs.Tier1.Header
        icon={<Icon id={Icon.ids.placeholder} />}
      >
        Spacing
      </VerticalTabs.Tier1.Header>
    }
  />
  <VerticalTabs.Tier1
    header={
      <VerticalTabs.Tier1.Header
        icon={<Icon id={Icon.ids.placeholder} />}
      >
        Iconography
      </VerticalTabs.Tier1.Header>
    }
  />
  <VerticalTabs.Tier1
    header={
      <VerticalTabs.Tier1.Header
        icon={<Icon id={Icon.ids.placeholder} />}
      >
        Voice & Tone
      </VerticalTabs.Tier1.Header>
    }
  />
</VerticalTabs.Group>
<VerticalTabs.Divider />
<VerticalTabs.CollapsibleGroup
startOpen
  header={
    <VerticalTabs.CollapsibleGroup.Header>Components</VerticalTabs.CollapsibleGroup.Header>
  }
>
  <VerticalTabs.Tier1
    active
    header={<VerticalTabs.Tier1.Header>Avatar</VerticalTabs.Tier1.Header>}
  >
    <VerticalTabs.Tier2
      active
      header={
        <VerticalTabs.Tier2.Header>Prop types</VerticalTabs.Tier2.Header>
      }
    />
    <VerticalTabs.Tier2
      header={
        <VerticalTabs.Tier2.Header>Guidelines</VerticalTabs.Tier2.Header>
      }
    />
  </VerticalTabs.Tier1>
  <VerticalTabs.Tier1
    header={<VerticalTabs.Tier1.Header>Button</VerticalTabs.Tier1.Header>}
  />
  <VerticalTabs.Tier1
    header={<VerticalTabs.Tier1.Header>Badge</VerticalTabs.Tier1.Header>}
  />
  <VerticalTabs.Tier1
    header={
      <VerticalTabs.Tier1.Header>Breadcrumb</VerticalTabs.Tier1.Header>
    }
  />
</VerticalTabs.CollapsibleGroup>
</VerticalTabs>
`
        ]}
      />
      <SectionHeading>Tiers as links</SectionHeading>
      <P>
        To use Tiers as links pass a href with or without onClick to Tier header
      </P>
      <Example.React
        themeToggle
        orient="vertical"
        includes={{ VerticalTabs, Icon }}
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
        includes={{ VerticalTabs, Icon }}
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
              <VerticalTabs.Tier1.Header
                icon={<Icon id={Icon.ids.placeholder} />}
              >
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
