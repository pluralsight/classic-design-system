import Button from '@pluralsight/ps-design-system-button/react'
import Icon from '@pluralsight/ps-design-system-icon/react'
import React from 'react'
import Text from '@pluralsight/ps-design-system-text/react'
import Theme from '@pluralsight/ps-design-system-theme/react'

import {
  Chrome,
  Code,
  Content,
  Example,
  Link,
  P,
  PageHeading,
  PropTypes,
  SectionHeading,
  withServerProps
} from '../../src/ui'

export default withServerProps(_ => (
  <Chrome>
    <Content title="Button">
      <PageHeading packageName="button">Button</PageHeading>

      <P>Install the component dependency:</P>
      <Code language="bash">
        npm install @pluralsight/ps-design-system-button
      </Code>

      <P>Include a React component in your project:</P>
      <Code language="javascript">
        import Button from '@pluralsight/ps-design-system-button/react'
      </Code>

      <PropTypes
        props={[
          PropTypes.row([
            'appearance',
            PropTypes.union(Button.appearances),
            null,
            <code>primary</code>,
            <span>
              visual style (from <code>Button.appearances</code>)
            </span>
          ]),
          PropTypes.row([
            'disabled',
            'boolean',
            null,
            <code>false</code>,
            'standard input disable flag'
          ]),
          PropTypes.row([
            'href',
            'string',
            null,
            null,
            'url of resource (renders as anchor)'
          ]),
          PropTypes.row([
            'icon',
            <code>Icon</code>,
            null,
            null,
            'Icon component'
          ]),
          PropTypes.row([
            'iconAlign',
            PropTypes.union(Button.iconAligns),
            null,
            <code>left</code>,
            <span>
              horizontal icon placement (from <code>Button.iconAligns</code>)
            </span>
          ]),
          PropTypes.row([
            'innerRef',
            'DOM element => ()',
            null,
            null,
            'react ref callback'
          ]),
          PropTypes.row([
            'loading',
            'boolean',
            null,
            <code>false</code>,
            'disables button and shows spinner'
          ]),
          PropTypes.row([
            'size',
            PropTypes.union(Button.sizes),
            null,
            <code>medium</code>,
            <span>
              button size (from <code>Button.sizes</code>)
            </span>
          ])
        ]}
      />

      <SectionHeading>Appearance</SectionHeading>
      <P>Buttons come in three standard visual styles.</P>
      <Example.React
        includes={{ Button, Icon }}
        codes={[`<Button>Click me</Button>`].concat(
          Object.keys(Button.appearances).map(
            a =>
              `<Button appearance={Button.appearances.${a}}>Click me</Button>`
          )
        )}
      />

      <SectionHeading>Size</SectionHeading>
      <P>Buttons come in four standard sizes. The default size is 'medium'.</P>
      <Example.React
        includes={{ Button, Icon }}
        codes={Object.keys(Button.sizes).map(
          s => `<Button size={Button.sizes.${s}}>Click me</Button>`
        )}
      />

      <SectionHeading>Icon</SectionHeading>
      <P>
        Buttons may include an icon to the left or right of the label. Read more{' '}
        <Link href="/components/icon">icon docs</Link>.
      </P>
      <Example.React
        includes={{ Button, Icon }}
        codes={[
          `<Button icon={<Icon id={Icon.ids.check} />}>With Icon</Button>`,
          `<Button icon={<Icon id={Icon.ids.channel} />} appearance={Button.appearances.stroke}>With Icon</Button>`,
          `<Button icon={<Icon id={Icon.ids.play} />} iconAlign={Button.iconAligns.right} appearance={Button.appearances.flat}>Aligned to Right</Button>`
        ]}
      />

      <SectionHeading>Icon only</SectionHeading>
      <P>
        Buttons may include an icon without a label. Please provide a{' '}
        <Text.Code>title</Text.Code> prop to display the native tooltip as well
        as to support assitive technology(i.e. screen readers).
      </P>

      <P>
        Read more <Link href="/components/icon">icon docs</Link>.
      </P>

      <Example.React
        includes={{ Button, Icon }}
        codes={[
          `<Button icon={<Icon id={Icon.ids.user} />} title="Profile" />`,
          `
<Button
  icon={<Icon id={Icon.ids.user} />}
  appearance={Button.appearances.flat}
  title="Profile"
/>`
        ]}
      />

      <SectionHeading>Disabled</SectionHeading>
      <P>
        Each button may be displayed as disabled. Do not use disabled treatment
        for non-disabled buttons.
      </P>
      <Example.React
        includes={{ Button, Icon }}
        codes={[
          `<Button disabled>Disabled</Button>`,
          `<Button disabled appearance={Button.appearances.stroke}>Disabled</Button>`,
          `<Button disabled appearance={Button.appearances.flat}>Disabled</Button>`,
          `<Button disabled icon={<Icon id={Icon.ids.pencil} />}>Disabled</Button>`
        ]}
      />

      <SectionHeading>As Link</SectionHeading>
      <P>
        Elements that are visually equivalent to buttons but change the URL and
        link to a new experience should be rendered as HTML anchor tags. Provide
        an <code>href</code> prop, and the button will render as an anchor tag.
      </P>
      <Example.React
        includes={{ Button, Icon }}
        codes={[
          `<Button href="https://duckduckgo.com?q=pluralsight" target="_blank">Link</Button>`,
          `<Button href="https://duckduckgo.com?q=pluralsight%20icons" target="_blank" icon={<Icon id={Icon.ids.pencil} />}>Link with icon</Button>`
        ]}
      />

      <SectionHeading>Loading</SectionHeading>
      <P>
        To show a spinner, pass a <code>loading</code> flag to your button. By
        default, it replaces your icon. If no icon is present, it replaces your
        text.
      </P>
      <Example.React
        orient="vertical"
        includes={{ Button }}
        codes={[
          `
<Button
  icon={<Icon id={Icon.ids.user} />}
  loading
>Loading...</Button>
`
        ]}
      />

      <SectionHeading>Light theme</SectionHeading>
      <P>
        To specify the light theme, wrap your components in a <code>Theme</code>{' '}
        component.
      </P>
      <Example.React
        orient="vertical"
        includes={{ Button, Theme }}
        codes={[
          `
<Theme name={Theme.names.light}>
  <Button
    icon={<Icon id={Icon.ids.user} />}
    appearance={Button.appearances.flat}
  >Light clicks only, please</Button>
</Theme>
`
        ]}
        themeName={Theme.names.light}
      />
    </Content>
  </Chrome>
))
