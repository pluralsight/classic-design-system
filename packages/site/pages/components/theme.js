import Button from '@pluralsight/ps-design-system-button'
import core from '@pluralsight/ps-design-system-core'
import React from 'react'
import * as Text from '@pluralsight/ps-design-system-text'
import Theme from '@pluralsight/ps-design-system-theme/react.js'

import {
  Chrome,
  Code,
  Content,
  Intro,
  P,
  PageHeading,
  PropTypes,
  SectionHeading
} from '../../src/ui/index.js'

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

export default _ => (
  <Chrome>
    <Content title="Button">
      <PageHeading packageName="theme">Theme</PageHeading>

      <Intro>
        The Theme component helps adjust all other components visually to a
        "dark" or a "light" page design.
      </Intro>

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
        <Text.Code>Theme</Text.Code> component. If you're on React &lt; 16,
        you'll need to wrap a single child, so a child{' '}
        <Text.Code>div</Text.Code> may be required.
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
        the default, but the <Text.Code>Theme</Text.Code> component can change
        that for a page or subset of themeable components.
      </P>
      <P>
        Here's an example of the <Text.Code>Button</Text.Code> component in both
        "light" and "dark" themes.
      </P>
      <ContrastingExample />
    </Content>
  </Chrome>
)
