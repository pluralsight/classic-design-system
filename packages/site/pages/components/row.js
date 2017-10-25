import core from '@pluralsight/ps-design-system-core'
import Icon from '@pluralsight/ps-design-system-icon/react'
import Row from '@pluralsight/ps-design-system-row/react'

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

const Stack = props => (
  <div className="stack">
    <Row
      title="Advanced TypeScript"
      progress={0}
      image={
        <Row.Image src="http://lorempixel.com/output/people-q-c-300-200-4.jpg" />
      }
      metadata1={['Brice Wilson', 'Advanced']}
      metadata2={['0m watched']}
    />
    <Row
      title="Getting Started with Reactive Programming Using RxJS"
      progress={20}
      image={
        <Row.Image src="http://lorempixel.com/output/people-q-c-300-200-2.jpg" />
      }
      metadata1={['Scott Allen', 'Intermediate']}
      metadata2={['23m watched']}
    />
    <Row
      title="Building a JavaScript Development Environment"
      progress={67}
      image={
        <Row.Image src="http://lorempixel.com/output/people-q-c-300-200-7.jpg" />
      }
      metadata1={['Cory House', 'Intermediate']}
      metadata2={['3 hr 23m watched']}
    />
    <Row
      title="Webpack Fundamentals"
      progress={100}
      metadata1={['Joe Eames', 'Intermediate']}
      metadata2={['90m watched']}
      image={
        <Row.Image src="http://lorempixel.com/output/people-q-c-300-200-5.jpg" />
      }
    />
    <style jsx>{`
      .stack {
        width: 75%;
        padding: ${core.layout.spacingMedium};
        background: ${core.colors.gray06};
      }
    `}</style>
  </div>
)

export default withServerProps(_ => (
  <Chrome>
    <Content title="Row">
      <PageHeading beta packageName="row">
        Row
      </PageHeading>

      <P>Install the component dependency:</P>
      <Code language="bash">npm install @pluralsight/ps-design-system-row</Code>

      <P>Include a React component in your project:</P>
      <Code language="javascript">
        import Row from '@pluralsight/ps-design-system-row/react'
      </Code>

      <PropTypes
        title="Row PropTypes"
        props={[
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
            null,
            <code>medium</code>,
            <span>
              size of row (from <code>Row.sizes</code>)
            </span>
          ]),
          PropTypes.row([
            'title',
            <span>
              <code>Row.TextLink > a > Row.Text</code> | <code>Row.Text</code>
            </span>,
            true,
            null,
            'row title or linked title'
          ])
        ]}
      />

      <PropTypes
        title="Row.Action PropTypes"
        props={[
          PropTypes.row([
            'icon',
            <span>
              <code>Icon</code>
            </span>,
            true,
            null,
            'icon representing action'
          ])
        ]}
      />

      <PropTypes
        title="Row.Image PropTypes"
        props={[PropTypes.row(['src', 'string', true, null, 'image url'])]}
      />

      <SectionHeading>In-app example</SectionHeading>
      <P>
        The row is a flexible component that will expand to fit the container
        it's in. The height and width will grow indefinitely. Define your own
        constrains with parent elements.
      </P>
      <Stack />

      <SectionHeading>Size</SectionHeading>
      <P>The size will determine certain base measurements.</P>
      <Example.React
        orient="vertical"
        includes={{ Row, Icon }}
        codes={[
          `
<Row
  size={Row.sizes.medium}
  title="Medium Row"
  metadata1={['Jim Cooper']}
  image={<Row.Image src="http://lorempixel.com/output/technics-q-c-680-320-6.jpg" />}
/>
`,
          `
<Row
  size={Row.sizes.small}
  title="Small Row"
  metadata1={['Joe Eames']}
  image={<Row.Image src="http://lorempixel.com/output/technics-q-c-680-320-6.jpg" />}
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
        <img src="http://lorempixel.com/output/technics-q-c-680-320-2.jpg" />
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
        codes={[
          `
<Row
  progress={25}
  title="The Row Title"
  image={<Row.Image src="http://lorempixel.com/output/technics-q-c-680-320-1.jpg" />}
/> `,
          `
<Row
  progress={66.6666667}
  title="The Row Title"
  image={<Row.Image src="http://lorempixel.com/output/technics-q-c-680-320-1.jpg" />}
/> `,
          `
<Row
  progress={100}
  title="The Row Title"
  image={<Row.Image src="http://lorempixel.com/output/technics-q-c-680-320-1.jpg" />}
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
        codes={[
          `
<Row
  title={<Row.TextLink><a>Link Title</a></Row.TextLink>}
  image={<Row.Image src="http://lorempixel.com/output/nature-q-c-680-320-10.jpg" />}
/>
`,
          `
<Row
  title="Super Long Title of the Technology of the Century as Brought to You By Tech Groupsoft in the Stunning Desert of British Lithuania"
  image={<Row.Image src="http://lorempixel.com/output/nature-q-c-680-320-10.jpg" />}
/>
`,
          `
<Row
  title={<Row.TextLink><a>Link with Super Long Title of the Technology of the Century as Brought to You By Tech Groupsoft in the Stunning Desert of British Lithuania</a></Row.TextLink>}
  image={<Row.Image src="http://lorempixel.com/output/nature-q-c-680-320-10.jpg" />}
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
        indicated. The first datum is given display space precendence.
      </P>
      <P>
        Metadata can be strings or links, defined by the `Row.TextLink`
        subcomponent.
      </P>
      <Example.React
        orient="vertical"
        includes={{ Row, Icon }}
        codes={[
          `
<Row
  metadata1={['Simon Allardice']}
  title="Row Title"
  image={<Row.Image src="http://lorempixel.com/output/abstract-q-c-680-320-4.jpg" />}
/>
`,
          `
<Row
  metadata1={['Simon Allardice']}
  metadata2={['Intermediate', '2hr 20min', 'July 24, 1847']}
  title="Row with Two Lines of Meta"
  image={<Row.Image src="http://lorempixel.com/output/abstract-q-c-680-320-4.jpg" />}
/>
`,
          `
<Row
  metadata1={[
    <Row.TextLink><a href="https://google.com?query=simon%20allardice">The Honorable Simon Allardice Hailing From Shores Abroad</a></Row.TextLink>
  ]}
  metadata2={[
    'Only about the Best Level in the World for Learning',
    '2hr 20min or longer depending',
    "July 24, 1847 or year thereabouts, it's unclear"
  ]}
  title="Super-long Metadata"
  image={<Row.Image src="http://lorempixel.com/output/abstract-q-c-680-320-4.jpg" />}
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
        codes={[
          `
<Row
  actionBar={[<Row.Action key="bookmark" icon={<Icon id="bookmark" />} />]}
  title="Action bar appears on hover"
  image={<Row.Image src="http://lorempixel.com/output/food-q-c-680-320-8.jpg" />}
/>
`,

          `
<Row
  actionBar={[
    <Row.Action key="bookmark" icon={<Icon id="bookmark" />} />,
    <Row.Action key="more" icon={<Icon id="more" />} />
  ]}
  title="Multiple actions"
  image={<Row.Image src="http://lorempixel.com/output/food-q-c-680-320-8.jpg" />}
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
  image={<Row.Image src="http://lorempixel.com/output/food-q-c-680-320-8.jpg" />}
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
        codes={[
          `
<Row
  fullOverlay={<div>Play</div>}
  title="Custom element centered on row image"
  image={<Row.Image src="http://lorempixel.com/output/nature-q-c-680-320-5.jpg" />}
/>
`,
          `
<Row
  fullOverlay={<div>Play</div>}
  fullOverlayVisible
  title="Full overlay locked visible"
  image={<Row.Image src="http://lorempixel.com/output/nature-q-c-680-320-5.jpg" />}
/>
`,
          `
<Row
  fullOverlay={<Row.FullOverlayLink><a>Custom Thing</a></Row.FullOverlayLink>}
  actionBar={[<Row.Action key="bookmark" icon={<Icon id="bookmark" />} />]}
  title="Combined with other overlays"
  image={<Row.Image src="http://lorempixel.com/output/nature-q-c-680-320-5.jpg" />}
/>
`
        ]}
      />
    </Content>
  </Chrome>
))
