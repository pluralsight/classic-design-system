import Button from '@pluralsight/ps-design-system-button/react'
import core from '@pluralsight/ps-design-system-core'
import Text from '@pluralsight/ps-design-system-text/react'
import Theme from '@pluralsight/ps-design-system-theme/react'

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

const ContrastingExample = _ => (
  <div className="contrast">
    <div className="side light">
      <Theme name={Theme.names.light}>
        <Button appearance={Button.appearances.flat} size={Button.sizes.large}>
          Light
        </Button>
      </Theme>
    </div>
    <div className="side dark">
      <Theme>
        <Button appearance={Button.appearances.flat} size={Button.sizes.large}>
          Dark
        </Button>
      </Theme>
    </div>
    <style jsx>{`
      .contrast {
        display: flex;
        margin: ${core.layout.spacingLarge} 0;
      }
      .side {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: ${core.layout.spacingXXLarge} ${core.layout.spacingLarge};
      }
      .light {
        background: ${core.colors.bone};
      }
      .dark {
        background: ${core.colors.gray05};
      }
    `}</style>
  </div>
)

export default withServerProps(_ => (
  <Chrome>
    <Content title="Button">
      <PageHeading packageName="theme">Theme</PageHeading>

      <P>Install the component dependency:</P>
      <Code language="bash">
        npm install @pluralsight/ps-design-system-theme
      </Code>

      <P>Include a React component in your project:</P>
      <Code language="javascript">
        import Theme from '@pluralsight/ps-design-system-theme/react'
      </Code>

      <PropTypes
        props={[
          PropTypes.row([
            'name',
            PropTypes.union(Theme.names),
            null,
            <code>Theme.defaultName</code>,
            <span>controls which theme is used in child components</span>
          ])
        ]}
      />

      <SectionHeading>Usage pattern</SectionHeading>
      <P>
        To theme a component or part of the page, surround it in the{' '}
        <code>Theme</code> component. If you're on React &lt; 16, you'll need to
        wrap a single child, so a child <code>div</code> may be required.
      </P>
      <Code language="html">
        {`<Theme name={Theme.names.light}>
  <div>
    <MyComponents />
    More stuff...
  </div>
</Theme>`}
      </Code>

      <P>
        The product is mostly presented within a "dark" interface theme. This is
        the default, but the <code>Theme</code> component can change that for a
        page or subset of themable components.
      </P>
      <P>
        Here's an example of the <code>Button</code> component in both "light"
        and "dark" themes.
      </P>
      <ContrastingExample />

      <SectionHeading>Themeable Components</SectionHeading>
      <P>These components will respond to changes in the Theme.</P>
      <Text.List type={Text.List.types.bulleted}>
        <Text.List.Item>
          <Link href="/components/button#light-theme">Button</Link>
        </Text.List.Item>
        <Text.List.Item>
          <Link href="/components/tab#light-theme">Tab</Link>
        </Text.List.Item>
        <Text.List.Item>
          <Link href="/components/text#light-theme">Text</Link>
        </Text.List.Item>
      </Text.List>
    </Content>
  </Chrome>
))
