import core from '@pluralsight/ps-design-system-core'
import Tooltip from '@pluralsight/ps-design-system-tooltip/react'

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
    <Content title="Tooltip">
      <PageHeading packageName="tooltip">Tooltip</PageHeading>

      <P>Install the component dependency:</P>
      <Code language="bash">
        npm install @pluralsight/ps-design-system-tooltip
      </Code>

      <P>Include a React component in your project:</P>
      <Code language="javascript">
        import Tooltip from '@pluralsight/ps-design-system-tooltip/react'
      </Code>

      <PropTypes
        props={[
          PropTypes.row([
            'appearance',
            PropTypes.union(Tooltip.appearances),
            null,
            <code>basic</code>,
            <span>
              visual style (from <code>Tooltip.appearances</code>)
            </span>
          ]),
          PropTypes.row([
            'tailPosition',
            PropTypes.union(Tooltip.tailPositions),
            null,
            null,
            <span>
              positions a tail pointer (from <code>Tooltip.tailPositions</code>)
            </span>
          ]),
          PropTypes.row([
            'onClose',
            'Event => ()',
            null,
            null,
            'displays a close button, triggered on click'
          ])
        ]}
      />

      <SectionHeading>Appearance</SectionHeading>
      <P>
        Tooltips come in {Object.keys(Tooltip.appearances).length} styles.
        Defaults to <code>basic</code>.
      </P>
      <Example.React
        includes={{ Tooltip }}
        codes={Object.keys(Tooltip.appearances).map(
          a => `<Tooltip appearance={Tooltip.appearances.${a}}>${a}</Tooltip>`
        )}
      />

      <SectionHeading>Tail</SectionHeading>
      <P>
        Tooltips can be shown with or without a tail (a directional indicator).
        To make the tail appear, use a <code>Tooltip.tailPositions</code>{' '}
        option.
      </P>
      <Example.React
        includes={{ Tooltip }}
        themeName="light"
        outputStyle={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gridGap: core.layout.spacingMedium
        }}
        outputChildStyle={{ margin: 0 }}
        codes={Object.keys(Tooltip.tailPositions).map(
          tailPosition =>
            `<Tooltip tailPosition={Tooltip.tailPositions.${tailPosition}}>${tailPosition}</Tooltip>`
        )}
      />

      <SectionHeading>Close button</SectionHeading>
      <P>
        Tooltips may be persistent until a user interaction closes them. For a
        close button in the top-right corner of the tooltip, provide a{' '}
        <code>onClose</code> callback.
      </P>
      <Example.React
        includes={{ Tooltip }}
        codes={[
          `<Tooltip onClose={_ => alert('close clicked')}>With a close button for those cases you want the tooltip to persist until closed.</Tooltip>`
        ]}
      />
    </Content>
  </Chrome>
))
