import Button from '@pluralsight/ps-design-system-button/react'
import Row from '@pluralsight/ps-design-system-row/react'
import Icon from '@pluralsight/ps-design-system-icon/react'
import React from 'react'

import {
  Code,
  Example,
  Heading,
  Link,
  P,
  PageHeading
} from '../../common/components'
import Stack from './stack'

const defaultRow = (
  <Row
    title={'The Row Title'}
    image={<img src="http://via.placeholder.com/350x150" />}
  />
)

export default _ =>
  <div>
    <PageHeading beta>Row</PageHeading>

    <P>Install the component dependency:</P>
    <Code language="bash">
      npm install @pluralsight/ps-design-system-row@beta --save-dev
    </Code>

    <P>Include a React component in your project:</P>
    <Code language="javascript">
      import Row from '@pluralsight/ps-design-system-row/react'
    </Code>

    <Heading size="large">
      <h2>On-page example</h2>
    </Heading>
    <P>
      The row is a flexible component that will expand to fit the container
      it's in. The height and width will grow indefinitely. Define your own
      constrains with parent elements.
    </P>
    <Stack />

    <Heading size="large">
      <h2>Size</h2>
    </Heading>
    <P>
      The size will determine certain base measurements.
    </P>
    <Example.React
      orient="vertical"
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

    <Heading size="large">
      <h2>Image</h2>
    </Heading>
    <P>
      The image will cover the image area given. Image dimensions outside of
      this space will be clipped.
    </P>
    <Example.React
      orient="vertical"
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

    <Heading size="large">
      <h2>Progress</h2>
    </Heading>
    <P>
      Progress, if given, should be a number between 0 and 100 that describes
      the completion level of the content represented on the row.
    </P>
    <Example.React
      orient="vertical"
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

    <Heading size="large">
      <h2>Title</h2>
    </Heading>
    <P>
      The title can be a string or a link, defined by a special subcomponent.
    </P>
    <P>
      The title will grow indefinitely, never truncating.
    </P>
    <Example.React
      orient="vertical"
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

    <Heading size="large">
      <h2>Metadata</h2>
    </Heading>
    <P>
      Metadata is free-form strings or displayable elements like links. Each
      bit
      of metadata is separated by an interpunct.
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

    <Heading size="large">
      <h2>Action Bar</h2>
    </Heading>
    <P>
      The action bar contains the on-row affordances a user can take besides
      linking straight to the content. These are usually buttons.
    </P>
    <Example.React
      orient="vertical"
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

    <Heading size="large">
      <h2>Full Overlay</h2>
    </Heading>
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
  </div>
