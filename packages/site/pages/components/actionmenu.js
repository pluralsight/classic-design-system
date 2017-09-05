import ActionMenu from '@pluralsight/ps-design-system-actionmenu/react'

import {
  Chrome,
  Code,
  Content,
  Example,
  Heading,
  Link,
  P,
  PageHeading
} from '../../src/ui'

export default _ =>
  <Chrome>
    <Content title="Action Menu">
      <PageHeading beta>Action Menu</PageHeading>

      <P>Install the component dependency:</P>
      <Code language="bash">
        npm install @pluralsight/ps-design-system-actionmenu
      </Code>

      <P>Include a React component in your project:</P>
      <Code language="javascript">
        import ActionMenu from '@pluralsight/ps-design-system-actionmenu/react'
      </Code>

      <Heading size="large">
        <h2>Nesting</h2>
      </Heading>
      <Example.React
        includes={{ ActionMenu }}
        outputStyle={{ minHeight: '170px' }}
        codes={[
          `
<ActionMenu origin={ActionMenu.origins.topLeft}>
  <ActionMenu.Item
    nested={
      <ActionMenu origin={ActionMenu.origins.topLeft}>
        <ActionMenu.Item>
          Nest 1
        </ActionMenu.Item>
        <ActionMenu.Item
          nested={
            <ActionMenu origin={ActionMenu.origins.topLeft}>
              <ActionMenu.Item>
                Nest nest 1-1
              </ActionMenu.Item>
              <ActionMenu.Item>
                Nest nest 1-2
              </ActionMenu.Item>
              <ActionMenu.Item>
                Nest nest 1-3
              </ActionMenu.Item>
            </ActionMenu>
          }
        >
          Nest 2
        </ActionMenu.Item>
        <ActionMenu.Divider />
        <ActionMenu.Item>
          Nest 3
        </ActionMenu.Item>
        <ActionMenu.Item
          nested={
            <ActionMenu origin={ActionMenu.origins.topLeft}>
              <ActionMenu.Item>
                Nest nest 2-1
              </ActionMenu.Item>
              <ActionMenu.Item>
                Nest nest 2-2
              </ActionMenu.Item>
            </ActionMenu>
          }
        >
          Nest 4
        </ActionMenu.Item>
      </ActionMenu>
    }
  >
    One
  </ActionMenu.Item>
  <ActionMenu.Item>
    Two
  </ActionMenu.Item>
</ActionMenu>
`
        ]}
      />
    </Content>
  </Chrome>
