import core from '@pluralsight/ps-design-system-core'
import React from 'react'

import Icon from '@pluralsight/ps-design-system-icon'
import Row from '@pluralsight/ps-design-system-row/react.js'
import Theme from '@pluralsight/ps-design-system-theme'

import {
  Chrome,
  Code,
  Content,
  Example,
  P,
  PageHeading,
  PropTypes,
  SectionHeading
} from '../../src/ui/index.js'

const InAppExample = props => (
  <Theme>
    <div className="example">
      <Row
        title="Advanced TypeScript"
        progress={0}
        image={<Row.Image src="/static/img/course1.jpg" />}
        metadata1={['Brice Wilson', 'Advanced']}
        metadata2={['0m watched']}
      />
      <Row
        title="Getting Started with Reactive Programming Using RxJS"
        progress={20}
        image={<Row.Image src="/static/img/course2.jpg" />}
        metadata1={['Scott Allen', 'Intermediate']}
        metadata2={['23m watched']}
      />
      <Row
        title="Building a JavaScript Development Environment"
        progress={67}
        image={<Row.Image src="/static/img/course3.jpg" />}
        metadata1={['Cory House', 'Intermediate']}
        metadata2={['3h 23m watched']}
      />
      <Row
        title="Webpack Fundamentals"
        progress={100}
        metadata1={['Joe Eames', 'Intermediate']}
        metadata2={['90m watched']}
        image={<Row.Image src="/static/img/course4.jpg" />}
      />
    </div>

    <Code collapsible language="javascript">{`<Row
  title="Advanced TypeScript"
  progress={0}
  image={<Row.Image src="/static/img/course1.jpg" />}
  metadata1={['Brice Wilson', 'Advanced']}
  metadata2={['0m watched']}
/>
<Row
  title="Getting Started with Reactive Programming Using RxJS"
  progress={20}
  image={<Row.Image src="/static/img/course2.jpg" />}
  metadata1={['Scott Allen', 'Intermediate']}
  metadata2={['23m watched']}
/>
<Row
  title="Building a JavaScript Development Environment"
  progress={67}
  image={<Row.Image src="/static/img/course3.jpg" />}
  metadata1={['Cory House', 'Intermediate']}
  metadata2={['3 hr 23m watched']}
/>
<Row
  title="Webpack Fundamentals"
  progress={100}
  metadata1={['Joe Eames', 'Intermediate']}
  metadata2={['90m watched']}
  image={<Row.Image src="/static/img/course4.jpg" />}
/>`}</Code>

    <style jsx>{`
      .example {
        padding: ${core.layout.spacingLarge};
        background: ${core.colors.gray06};
      }
    `}</style>
  </Theme>
)

export default _ => (
  <Chrome>
    <Content title="Row">
      <PageHeading packageName="row">Row</PageHeading>

      <P>Install the component dependency:</P>
      <Code language="bash">npm install @pluralsight/ps-design-system-row</Code>

      <P>Include a React component in your project:</P>
      <Code language="javascript">
        import Row from '@pluralsight/ps-design-system-row/react'
      </Code>

      <PropTypes
        props={{
          Row: [
            PropTypes.row([
              'actionBar',
              <span>
                <code>Row.Action[]</code>
              </span>,
              null,
              null,
              'far-right action buttons'
            ]),
            PropTypes.row([
              'actionBarVisible',
              'boolean',
              null,
              <code>false</code>,
              'lock action bar on'
            ]),
            PropTypes.row([
              'fullOverlay',
              <code>Row.FullOverlayLink</code>,
              null,
              null,
              'hover state for image'
            ]),
            PropTypes.row([
              'fullOverlayVisible',
              'boolean',
              null,
              <code>false</code>,
              'lock full overlay on'
            ]),
            PropTypes.row([
              'image',
              <span>
                <code>Row.Image</code> |
                <code>Row.ImageLink > a > Row.Image</code>
              </span>,
              null,
              null,
              'main image or linked image'
            ]),
            PropTypes.row([
              'metadata1',
              <code>Row.Text, Row.TextLink</code>,
              null,
              null,
              'first row of metadata'
            ]),
            PropTypes.row([
              'metadata2',
              <code>Row.Text, Row.TextLink</code>,
              null,
              null,
              'second row of metadata'
            ]),
            PropTypes.row(['progress', 'number', null, null, 'progress 0-100']),
            PropTypes.row([
              'size',
              PropTypes.union(Row.sizes),
              false,
              null,
              <span>
                disable resizing layout and set explicit size (from{' '}
                <code>Row.sizes</code>)
              </span>
            ]),
            PropTypes.row([
              'title',
              <span>
                string | <code>Row.TextLink > a > string</code>
              </span>,
              true,
              null,
              'row title or linked title'
            ]),
            PropTypes.row([
              'titleTruncated',
              'boolean',
              null,
              <code>false</code>,
              'limit title to 2 lines'
            ])
          ],
          'Row.Action': [
            PropTypes.row([
              'icon',
              <span>
                <code>Icon</code>
              </span>,
              true,
              null,
              'icon representing action'
            ])
          ],
          'Row.Image': [
            PropTypes.row(['src', 'string', true, null, 'image url'])
          ]
        }}
      />

      <SectionHeading>In-app example</SectionHeading>
      <P>
        The row is a flexible component that will expand to fit the container
        it's in. The height and width will grow indefinitely. Define your own
        constrains with parent elements.
      </P>
      <InAppExample />

      <SectionHeading>Size</SectionHeading>
      <P>The size will determine certain base measurements.</P>
      <Example.React
        orient="vertical"
        includes={{ Row, Icon }}
        themeToggle
        codes={[
          `
<Row
  size={Row.sizes.medium}
  title="Medium Row"
  metadata1={['Jim Cooper']}
  image={<Row.Image src="/static/img/course1.jpg" />}
/>
`,
          `
<Row
  size={Row.sizes.small}
  title="Small Row"
  metadata1={['Joe Eames']}
  image={<Row.Image src="/static/img/course1.jpg" />}
/>
`
        ]}
      />

      <SectionHeading>Image</SectionHeading>
      <P>
        The image will cover the image area given. Image dimensions outside of
        this space will be clipped.
      </P>
      <Example.React
        orient="vertical"
        includes={{ Row, Icon }}
        themeToggle
        codes={[
          `
<Row
  image={<Row.Image src="http://via.placeholder.com/350x150" />}
  title="Wide image"
/>
`,
          `
<Row
  image={<Row.Image src="http://via.placeholder.com/200x400" />}
  title="Tall image"
/>
`,
          `
<Row
  image={
    <Row.ImageLink>
      <a href="https://google.com" target="_blank">
        <img src="/static/img/course2.jpg" />
      </a>
    </Row.ImageLink>
  }
  title="Linked image with other overlays"
  actionBar={[<Row.Action key="bookmark" icon={<Icon id="bookmark" />} />]}
  fullOverlay={
    <Row.FullOverlayLink>
      <a href="https://google.com?q=full%20overlay" target="_blank">
        Full Overlay
      </a>
    </Row.FullOverlayLink>
  }
/>
            `
        ]}
      />

      <SectionHeading>Progress</SectionHeading>
      <P>
        Progress, if given, should be a number between 0 and 100 that describes
        the completion level of the content represented on the row.
      </P>
      <Example.React
        orient="vertical"
        includes={{ Row, Icon }}
        themeToggle
        codes={[
          `
<Row
  progress={25}
  title="The Row Title"
  image={<Row.Image src="/static/img/course3.jpg" />}
/> `,
          `
<Row
  progress={66.6666667}
  title="The Row Title"
  image={<Row.Image src="/static/img/course3.jpg" />}
/> `,
          `
<Row
  progress={100}
  title="The Row Title"
  image={<Row.Image src="/static/img/course3.jpg" />}
/> `
        ]}
      />

      <SectionHeading>Title</SectionHeading>
      <P>
        The title can be a string or a link, defined by a special subcomponent.
      </P>
      <P>The title will grow indefinitely, never truncating.</P>
      <Example.React
        orient="vertical"
        includes={{ Row, Icon }}
        themeToggle
        codes={[
          `
<Row
  title={<Row.TextLink><a>Link Title</a></Row.TextLink>}
  image={<Row.Image src="/static/img/course4.jpg" />}
/>
`,
          `
<Row
  title="Super Long Title of the Technology of the Century as Brought to You By Tech Groupsoft in the Stunning Desert of British Lithuania"
  image={<Row.Image src="/static/img/course4.jpg" />}
/>
`,
          `
<Row
  title={<Row.TextLink><a>Link with Super Long Title of the Technology of the Century as Brought to You By Tech Groupsoft in the Stunning Desert of British Lithuania</a></Row.TextLink>}
  image={<Row.Image src="/static/img/course4.jpg" />}
/>
`
        ]}
      />

      <SectionHeading>Metadata</SectionHeading>
      <P>
        Metadata is free-form strings or displayable elements like links. Each
        bit of metadata is separated by an interpunct.
      </P>
      <P>
        Metadata is constrained to a single line, overflowing with an ellipsis
        indicated. The first datum is given display space precedence.
      </P>
      <P>
        Metadata can be strings or links, defined by the `Row.TextLink`
        subcomponent.
      </P>
      <Example.React
        orient="vertical"
        includes={{ Row, Icon }}
        themeToggle
        codes={[
          `
<Row
  metadata1={['Simon Allardice']}
  title="Row Title"
  image={<Row.Image src="/static/img/course1.jpg" />}
/>
`,
          `
<Row
  metadata1={['Simon Allardice']}
  metadata2={['Intermediate', '2h 20m', 'July 24, 1847']}
  title="Row with Two Lines of Meta"
  image={<Row.Image src="/static/img/course1.jpg" />}
/>
`,
          `
<Row
  metadata1={[
    <Row.TextLink><a href="https://google.com?query=simon%20allardice">The Honorable Simon Allardice Hailing From Shores Abroad</a></Row.TextLink>
  ]}
  metadata2={[
    'Only about the Best Level in the World for Learning',
    '2h 20m or longer depending',
    "July 24, 1847 or year thereabouts, it's unclear"
  ]}
  title="Super-long Metadata"
  image={<Row.Image src="/static/img/course1.jpg" />}
/>
`
        ]}
      />

      <SectionHeading>Action Bar</SectionHeading>
      <P>
        The action bar contains the on-row affordances a user can take besides
        linking straight to the content. These are usually buttons.
      </P>
      <Example.React
        orient="vertical"
        includes={{ Row, Icon }}
        themeToggle
        codes={[
          `
<Row
  actionBar={[<Row.Action key="bookmark" icon={<Icon id="bookmark" />} />]}
  title="Action bar appears on hover"
  image={<Row.Image src="/static/img/course2.jpg" />}
/>
`,

          `
<Row
  actionBar={[
    <Row.Action key="bookmark" icon={<Icon id="bookmark" />} />,
    <Row.Action key="more" icon={<Icon id="more" />} />
  ]}
  title="Multiple actions"
  image={<Row.Image src="/static/img/course2.jpg" />}
/>
`,

          `
<Row
  actionBar={[
    <Row.Action key="bookmark" icon={<Icon id="bookmark" />} />,
    <Row.Action key="more" icon={<Icon id="more" />} />
  ]}
  actionBarVisible
  title="Action bar locked visible"
  image={<Row.Image src="/static/img/course2.jpg" />}
/>
`
        ]}
      />

      <SectionHeading>Full Overlay</SectionHeading>
      <P>
        A special main action representing the main interaction for the row can
        be provided here. It will appear overlaid in the center of the image.
      </P>
      <P>
        To make the full overlay linkable, use the `Row.FullOverlayLink`
        subcomponent.
      </P>
      <Example.React
        orient="vertical"
        includes={{ Row, Icon }}
        themeToggle
        codes={[
          `
<Row
  fullOverlay={<div>Play</div>}
  title="Custom element centered on row image"
  image={<Row.Image src="/static/img/course3.jpg" />}
/>
`,
          `
<Row
  fullOverlay={<div>Play</div>}
  fullOverlayVisible
  title="Full overlay locked visible"
  image={<Row.Image src="/static/img/course3.jpg" />}
/>
`,
          `
<Row
  fullOverlay={
    <Row.FullOverlayLink>
      <a href="https://pluralsight.com" target="_blank">Custom Link</a>
    </Row.FullOverlayLink>
  }
  actionBar={[<Row.Action key="bookmark" icon={<Icon id="bookmark" />} />]}
  title="Combined with other overlays"
  image={<Row.Image src="/static/img/course3.jpg" />}
/>
`
        ]}
      />
    </Content>
  </Chrome>
)
