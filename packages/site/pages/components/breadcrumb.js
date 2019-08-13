import core from '@pluralsight/ps-design-system-core'
import Breadcrumb from '@pluralsight/ps-design-system-breadcrumb/react.js'
import { PageHeadingLayout } from '@pluralsight/ps-design-system-layout/react.js'
import React from 'react'
import Tab from '@pluralsight/ps-design-system-tab/react.js'
import Theme from '@pluralsight/ps-design-system-theme/react.js'
import { transparentize } from '@pluralsight/ps-design-system-util/color.js'

import {
  Chrome,
  Code,
  Content,
  Guideline,
  Intro,
  P,
  PageHeading,
  PropTypes,
  SectionHeading
} from '../../src/ui/index.js'

const PinkBox = props => (
  <div className="pink-box">
    <style jsx>{`
      .pink-box {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-top: ${core.layout.spacingMedium} solid
          ${transparentize(0.5, core.colors.pink)};
        border-bottom: ${core.layout.spacingMedium} solid
          ${transparentize(0.5, core.colors.pink)};
      }
    `}</style>
  </div>
)

const InAppExample = _ => (
  <div className="example">
    <Theme name={Theme.names.dark}>
      <PageHeadingLayout heading={<h2>Page title</h2>}>
        <Tab.List>
          <Tab.ListItem id="example1">Menu Item</Tab.ListItem>
          <Tab.ListItem id="example2">Menu Item</Tab.ListItem>
          <Tab.ListItem id="example3">Menu Item</Tab.ListItem>
          <Tab.ListItem id="example4">Menu Item</Tab.ListItem>
        </Tab.List>
        <div className="boxContainer">
          <PinkBox />
          <Breadcrumb style={{ position: 'relative' }}>
            All the things
          </Breadcrumb>
        </div>
      </PageHeadingLayout>
      <Code language="javascript">
        {`<Breadcrumb>All the things</Breadcrumb>`}
      </Code>
    </Theme>
    <style jsx>{`
      .example {
        background: ${core.colors.gray06};
      }
      .boxContainer {
        position: relative;
        display: inline-block;
      }
    `}</style>
  </div>
)

export default _ => (
  <Chrome>
    <Content title="Breadcrumb">
      <PageHeading packageName="breadcrumb">Breadcrumb</PageHeading>

      <Intro>
        The breadcrumb is to provide a consistently-placed and styled affordance
        to orient and move up a hierarchy.
      </Intro>

      <P>Install the component dependency:</P>
      <Code language="bash">
        npm install @pluralsight/ps-design-system-breadcrumb
      </Code>

      <P>Include a React component in your project:</P>
      <Code language="javascript">
        import Breadcrumb from '@pluralsight/ps-design-system-breadcrumb/react'
      </Code>

      <PropTypes
        props={[
          PropTypes.row([
            'disabled',
            'boolean',
            null,
            <code>false</code>,
            'standard input disable flag'
          ]),
          PropTypes.row([
            'innerRef',
            'DOM element => ()',
            null,
            null,
            'react ref callback'
          ])
        ]}
      />

      <SectionHeading>In-app example</SectionHeading>
      <P>
        The breadcrumb should be placed toward the top left of the page. Below
        any persistent heading or navigation elements.
      </P>
      <InAppExample />

      <SectionHeading>Guidelines</SectionHeading>
      <P>
        Reference the destination screen or page directly. Don't add text like
        "Back to..."
      </P>
      <Guideline
        do={<Breadcrumb>All things</Breadcrumb>}
        dont={<Breadcrumb>Back to all things</Breadcrumb>}
      />

      <P>
        Breadcrumbs should be written in sentence case, except for proper nouns
        or product titles.
      </P>
      <Guideline
        do={<Breadcrumb>All the things</Breadcrumb>}
        dont={<Breadcrumb>All The Things</Breadcrumb>}
      />
    </Content>
  </Chrome>
)
