import Button from '@pluralsight/ps-design-system-button/react'
import Icon from '@pluralsight/ps-design-system-icon/react'

import {
  Chrome,
  Code,
  Content,
  Example,
  Heading,
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
            'orange fill',
            'visual style'
          ]),
          PropTypes.row([
            'disabled',
            'boolean',
            null,
            <code>false</code>,
            'standard input disable flag'
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
            <code>Button.iconAligns.left</code>,
            'horizontal icon placement'
          ]),
          PropTypes.row([
            'innerRef',
            'function',
            null,
            null,
            'react ref callback'
          ]),
          PropTypes.row([
            'size',
            PropTypes.union(Button.sizes),
            null,
            <code>Button.sizes.medium</code>,
            'button size'
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
      <P>
        Buttons come in four standard sizes. The default size is 'medium'.jjk
        3qjjk
      </P>
      <Example.React
        includes={{ Button, Icon }}
        codes={Object.keys(Button.sizes).map(
          s => `<Button size={Button.sizes.${s}}>Click me</Button>`
        )}
      />

      <SectionHeading>Icon</SectionHeading>
      <P>
        Buttons may include an icon to the left or right of the label. Find out
        more about icons <Link href="/components/icon">here</Link>.
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
        Buttons may include an icon without a label. Find out more about icons{' '}
        <Link href="/components/icon">here</Link>.
      </P>
      <Example.React
        includes={{ Button, Icon }}
        codes={[
          `<Button icon={<Icon id={Icon.ids.user} />} />`,
          `
<Button
  icon={<Icon id={Icon.ids.user} />}
  appearance={Button.appearances.flat}
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
    </Content>
  </Chrome>
))
