import Button from '@pluralsight/ps-design-system-button'
import * as core from '@pluralsight/ps-design-system-core'
import ReactPropTypes from 'prop-types'
import React from 'react'
import FeatureFlags, {
  useFeatureFlags
} from '@pluralsight/ps-design-system-featureflags'
import * as Text from '@pluralsight/ps-design-system-text'

import {
  Chrome,
  Code,
  Content,
  Example,
  Intro,
  P,
  PageHeading,
  PropTypes,
  SectionHeading
} from '../../src/ui/index.js'

export default _ => (
  <Chrome>
    <Content title="Feature Flags">
      <PageHeading packageName="featureflags">Feature Flags</PageHeading>
      <Intro>
        We favor the use of feature flags when a UI change should be released
        uniformly across the product. This allows teams to independently develop
        and deploy.
      </Intro>
      <P>Install the component dependency:</P>
      <Code language="bash">
        npm install @pluralsight/ps-design-system-featureflags
      </Code>
      <PropTypes
        props={[
          PropTypes.row([
            'children',
            'any',
            null,
            null,
            'children that need this context'
          ]),
          PropTypes.row([
            'flags',
            <code>{'{ [name: string]: boolean|string|number }'}</code>,
            null,
            <code>{'{}'}</code>,
            'dictionary of flag names and values'
          ])
        ]}
      />
      <SectionHeading>To support Design System rollouts</SectionHeading>
      <P>
        Certain Design System components may need to react to feature flags.
        Watch for messaging in the
        <Text.Code>#design-system</Text.Code> channel for when feature flags are
        in active use. Product dev teams will need to request flags from the
        flag provider as they normally do. Then feed them to the Design System
        in this manner.
      </P>
      <P>
        Import the <Text.Code>FeatureFlags</Text.Code> React context provider:
      </P>
      <Code language="javascript">
        import FeatureFlags from '@pluralsight/ps-design-system-featureflags'
      </Code>
      <P>And wrap all your Design System code in this provider.</P>
      <Example.React
        includes={{ FeatureFlags, ComponentUsingFlags }}
        codes={[
          `<FeatureFlags flags={{}}>
  <ComponentUsingFlags>Original style</ComponentUsingFlags>
</FeatureFlags>`,
          `<FeatureFlags flags={{ usingNewStyle: true }}>
  <ComponentUsingFlags>New style</ComponentUsingFlags>
</FeatureFlags>
`
        ]}
      />
      <SectionHeading>As a utility component</SectionHeading>
      <P>
        You may also find that you can use the Feature Flags component generally
        as a utility for your own code.
      </P>
      <P>
        Import the <Text.Code>useFeatureFlags</Text.Code> React hook to consume
        the feature Flags
      </P>
      <Code language="javascript">
        {`function ComponentUsingFlags(props) {
  const { flags } = useFeatureFlags()
  const style = {
    background: flags.usingNewStyle ? core.colorsBlue[6] : core.colorsOrange[6]
  }
  return <Button style={style}>{props.children}</Button>
}`}
      </Code>
    </Content>
  </Chrome>
)

function ComponentUsingFlags(props) {
  const { flags } = useFeatureFlags()
  const style = {
    background: flags.usingNewStyle ? core.colorsBlue[6] : core.colorsOrange[6]
  }
  return <Button style={style}>{props.children}</Button>
}
ComponentUsingFlags.propTypes = {
  children: ReactPropTypes.any
}
