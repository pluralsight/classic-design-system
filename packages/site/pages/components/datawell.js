import React from 'react'

import DataWell from '@pluralsight/ps-design-system-datawell/react.js'
import * as Text from '@pluralsight/ps-design-system-text/react.js'

import {
  Chrome,
  Code,
  Content,
  Example,
  P,
  Guideline,
  PageHeading,
  PropTypes,
  SectionHeading,
  withServerProps
} from '../../src/ui/index.js'

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

      <SectionHeading>Labels</SectionHeading>
      <P>
        Often Data Wells are shown in a row. Data Well is designed to fit inside
        this experience. Simply wrap them in a flex container. Labels should
        provide context into the main meaning of the data shown.
      </P>
      <P>
        <Text.Code>label</Text.Code> is always required.{' '}
        <Text.Code>subLabel</Text.Code> is optional.
      </P>
      <Example.React
        themeToggle
        includes={{ DataWell }}
        codes={[
          `<div style={{ display: 'flex' }}>
  <DataWell label="Active learners">7.2 Billion</DataWell>
  <DataWell label="Pluralsight ROI">Vast</DataWell>
  <DataWell label="Lives changed" subLabel="Up to 11">
    11/10
  </DataWell>
</div>`
        ]}
      />

      <SectionHeading>Guidelines</SectionHeading>
      <P>Keep labels, sublabels, and values short as possible.</P>
      <Guideline
        do={
          <DataWell label="Royalty Payments" subLabel="Last 30 days">
            $123M
          </DataWell>
        }
        dont={
          <DataWell
            label="Royalties Paid to Authors"
            subLabel="For the period of the last thirty days"
          >
            $123,456,789.03
          </DataWell>
        }
      />
    </Content>
  </Chrome>
))
