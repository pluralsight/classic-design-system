import Banner from '@pluralsight/ps-design-system-banner/react'
import Icon from '@pluralsight/ps-design-system-icon/react'
import * as Text from '@pluralsight/ps-design-system-text/react'

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
    <Content title="Banner">
      <PageHeading packageName="banner">Banner</PageHeading>

      <P>Install the component dependency:</P>
      <Code language="bash">
        npm install @pluralsight/ps-design-system-banner
      </Code>

      <P>Include a React component in your project:</P>
      <Code language="javascript">
        import Banner from '@pluralsight/ps-design-system-banner/react'
      </Code>

      <PropTypes
        props={[
          PropTypes.row([
            'color',
            PropTypes.union(Banner.colors),
            null,
            <code>{Banner.colors.blue}</code>,
            <span>
              banner color (from <code>Banner.colors</code>)
            </span>
          ]),
          PropTypes.row([
            'onClick',
            'Event => ()',
            null,
            null,
            'displays dismiss button, triggered on click'
          ])
        ]}
      />

      <SectionHeading>Color</SectionHeading>
      <P>
        Banners come in {Object.keys(Banner.colors).length} colors. Banner
        colors change based on message displayed.
      </P>
      <Example.React
        includes={{ Banner }}
        orient="vertical"
        codes={Object.keys(Banner.colors).map(
          c =>
            `<Banner color={Banner.colors.${c}}>This is a ${c} message</Banner>`
        )}
      />

      <SectionHeading>Dismissible</SectionHeading>
      <P>
        Banners that a user can dismiss should use the{' '}
        <Text.Code>onClick</Text.Code> event handler to display an "X" icon in
        the top-right corner of the component.
      </P>
      <Example.React
        orient="vertical"
        includes={{ Banner }}
        codes={[
          `<Banner onClick={_ => alert('Clicked to dismiss!')}>User should be able to dismiss this.</Banner>`
        ]}
      />
    </Content>
  </Chrome>
))
