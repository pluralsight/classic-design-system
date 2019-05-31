import React from 'react'

import DataWell from '@pluralsight/ps-design-system-datawell/react'
import core from '@pluralsight/ps-design-system-core'
import * as Text from '@pluralsight/ps-design-system-text/react'
import Theme from '@pluralsight/ps-design-system-theme/react'

import {
  Chrome,
  Code,
  Content,
  Example,
  P,
  PageHeading,
  PropTypes,
  SectionHeading,
  withServerProps
} from '../../src/ui/index.js'

function InAppExample(props) {
  return (
    <Theme>
      <div className="example">
        <div style={{ display: 'flex' }}>
          <DataWell label="Active learners">7.2 Billion</DataWell>
          <DataWell label="Pluralsight ROI">Vast</DataWell>
          <DataWell label="Lives changed" subLabel="Up to 11">
            11/10
          </DataWell>
        </div>
      </div>

      <Code
        collapsible
        language="javascript"
      >{`<div style={{ display: 'flex' }}>
  <DataWell label="Active learners">7.2 Billion</DataWell>
  <DataWell label="Pluralsight ROI">Vast</DataWell>
  <DataWell label="Lives changed" subLabel="Up to 11">11/10</DataWell>
</div>`}</Code>

      <style jsx>{`
        .example {
          padding: ${core.layout.spacingLarge};
          background: ${core.colors.gray06};
          color: ${core.colors.white};
          min-height: 200px;
        }
      `}</style>
    </Theme>
  )
}

export default withServerProps(_ => (
  <Chrome>
    <Content title="Data Well">
      <PageHeading packageName="datawell">Data Well</PageHeading>

      <P>Install the component dependency:</P>
      <Code language="bash">
        npm install @pluralsight/ps-design-system-datawell
      </Code>

      <P>Include a React component in your project:</P>
      <Code language="javascript">
        import DataWell from '@pluralsight/ps-design-system-datawell/react'
      </Code>

      <PropTypes
        props={[
          PropTypes.row([
            'children',
            <code>node</code>,
            true,
            null,
            'main data to display'
          ]),
          PropTypes.row([
            'label',
            <code>string</code>,
            true,
            null,
            'primary explanatory label'
          ]),
          PropTypes.row([
            'subLabel',
            <code>node</code>,
            false,
            null,
            'secondary contextual label'
          ])
        ]}
      />

      <SectionHeading>In-app example</SectionHeading>
      <P>
        Often Data Wells are shown in a row. Data Well is designed to fit inside
        this experience. Simply wrap them in a flex container.
      </P>
      <InAppExample />

      <SectionHeading>Labels</SectionHeading>
      <P>
        Labels should provide context into the main meaning of the data shown.
        <Text.Code>label</Text.Code> is always required.{' '}
        <Text.Code>subLabel</Text.Code> is optional
      </P>
      <Example.React
        includes={{ DataWell }}
        codes={[
          `<DataWell 
  label="Design System efficiency multiplier" 
  subLabel="Rough estimate"
>
  ~123.11451
</DataWell>`
        ]}
      />
    </Content>
  </Chrome>
))
