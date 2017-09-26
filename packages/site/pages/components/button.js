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
        Buttons may include an icon to the left or right of the label. Find out
        more about icons <Link href="/components/icon">here</Link>.
      </P>
      <Example.React
        includes={{ Button, Icon }}
        codes={[
          `<Button icon={<Icon id={Icon.ids.check} />}>With Icon</Button>`,
          `<Button icon={<Icon id={Icon.ids.channel} />} appearance="stroke">With Icon</Button>`,
          `<Button icon={<Icon id={Icon.ids.play} />} iconAlign="right" appearance="flat">Aligned to Right</Button>`
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
    </Content>
  </Chrome>
))
