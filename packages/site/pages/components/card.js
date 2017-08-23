import Button from '@pluralsight/ps-design-system-button/react'
import Card from '@pluralsight/ps-design-system-card/react'
import core from '@pluralsight/ps-design-system-core'
import Icon from '@pluralsight/ps-design-system-icon/react'

import {
  Chrome,
  Code,
  Content,
  Example,
  Heading,
  Link,
  P,
  PageHeading
} from '../../src/ui'

const Carousel = props =>
  <div className="root">
    <div className="carousel">
      <div className="cardContainer">
        <Card
          title="Advanced TypeScript"
          progress={0}
          image={
            <img src="http://lorempixel.com/output/people-q-c-300-200-4.jpg" />
          }
          metadata1={['Brice Wilson', 'Advanced']}
          metadata2={['0m watched']}
          size="small"
        />
      </div>
      <div className="cardContainer">
        <Card
          title="Getting Started with Reactive Programming Using RxJS"
          progress={20}
          image={
            <img src="http://lorempixel.com/output/people-q-c-300-200-2.jpg" />
          }
          metadata1={['Scott Allen', 'Intermediate']}
          metadata2={['23m watched']}
          size="small"
        />
      </div>
      <div className="cardContainer">
        <Card
          title="Building a JavaScript Development Environment"
          progress={67}
          image={
            <img src="http://lorempixel.com/output/people-q-c-300-200-7.jpg" />
          }
          metadata1={['Cory House', 'Intermediate']}
          metadata2={['3 hr 23m watched']}
          size="small"
        />
      </div>
      <div className="cardContainer">
        <Card
          title="Webpack Fundamentals"
          progress={100}
          metadata1={['Joe Eames', 'Intermediate']}
          metadata2={['90m watched']}
          image={
            <img src="http://lorempixel.com/output/people-q-c-300-200-5.jpg" />
          }
          size="small"
        />
      </div>
    </div>
    <Code lang="css">
      {`@import "@pluralsight/ps-design-system-core";

.carousel {
  width: 100%;
  display: flex;
  padding: var(--psLayoutSpacingMedium);
  background: var(--psColorsGray06);
}
.cardContainer {
  flex: 1;
}
.cardContainer + .cardContainer {
  margin-left: var(--psLayoutSpacingMedium);
}
`}
    </Code>
    <style jsx>{`
      .carousel {
        width: 100%;
        display: flex;
        padding: ${core.layout.spacingMedium};
        background: ${core.colors.gray06};
      }
      .cardContainer {
        flex: 1;
      }
      .cardContainer + .cardContainer {
        margin-left: ${core.layout.spacingMedium};
      }
    `}</style>
  </div>

export default _ =>
  <Chrome>
    <Content title="Card">

      <PageHeading>Card</PageHeading>

      <P>Install the component dependency:</P>
      <Code language="bash">
        npm install @pluralsight/ps-design-system-card --save-dev
      </Code>

      <P>Include a React component in your project:</P>
      <Code language="javascript">
        import Card from '@pluralsight/ps-design-system-card/react'
      </Code>

      <Heading size="large">
        <h2>On-page example</h2>
      </Heading>
      <P>
        The card is a flexible component that will fit the container it's given
        within certain bounds. A carousel is a common container layout that
        one might encounter in the product. This is an example implementation of
        how your carousel might look in your app.
      </P>
      <Carousel />

      <Heading size="large">
        <h2>Size</h2>
      </Heading>
      <P>
        While the component is flexible, the size will determine certain base
        proportions and flexibility min and max bounds.
      </P>
      <Example.React
        orient="vertical"
        includes={{ Button, Card, Icon }}
        codes={[
          `
<Card
  size="large"
  title="Large Card"
  metadata1={['Jim Cooper']}
  image={<img src="http://lorempixel.com/output/technics-q-c-680-320-6.jpg" />}
/>
`,
          `
<Card
  size="medium"
  title="Medium Card"
  metadata1={['Joe Eames']}
  image={<img src="http://lorempixel.com/output/technics-q-c-680-320-6.jpg" />}
/>
`,
          `
<Card
  size="small"
  title="Small Card"
  metadata1={['Cory House']}
  image={<img src="http://lorempixel.com/output/technics-q-c-680-320-6.jpg" />}
/>
`
        ]}
      />

      <Heading size="large">
        <h2>Image</h2>
      </Heading>
      <P>
        The image will cover the space given. This space is variable width but
        set
        height according to the `size` property.
      </P>
      <Example.React
        orient="vertical"
        includes={{ Button, Card, Icon }}
        codes={[
          `
<Card
  image={<img src="http://via.placeholder.com/350x150" />}
  title="Wide image"
/>
`,
          `
<Card
  image={<img src="http://via.placeholder.com/200x400" />}
  title="Tall image"
/>
`,
          `
<Card
  image={
    <a href="https://google.com" target="_blank">
      <img src="http://lorempixel.com/output/technics-q-c-680-320-2.jpg" />
    </a>
  }
  title="Linked image with other overlays"
  actionBar={[<Button appearance="flat" icon={<Icon id="bookmark" />} />]}
  fullOverlay={
    <a href="https://google.com?q=full%20overlay" target="_blank">
      Full Overlay
    </a>
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
        the completion level of the content represented on the card.
      </P>
      <Example.React
        orient="vertical"
        includes={{ Button, Card, Icon }}
        codes={[
          `
<Card
  progress={25}
  title="The Card Title"
  image={<img src="http://lorempixel.com/output/technics-q-c-680-320-1.jpg" />}
/> `,
          `
<Card
  progress={66.6666667}
  title="The Card Title"
  image={<img src="http://lorempixel.com/output/technics-q-c-680-320-1.jpg" />}
/> `,
          `
<Card
  progress={100}
  title="The Card Title"
  image={<img src="http://lorempixel.com/output/technics-q-c-680-320-1.jpg" />}
/> `
        ]}
      />

      <Heading size="large">
        <h2>Title</h2>
      </Heading>
      <P>
        The title can be a string or a some other element, such as a link, that
        contains a string
      </P>
      <P>
        Strings are line-clamped to 2 lines max, then the text will overflow
        with
        an ellipsis appended.
      </P>
      <Example.React
        orient="vertical"
        includes={{ Button, Card, Icon }}
        codes={[
          `
<Card
  title={<a>Link Title</a>}
  image={<img src="http://lorempixel.com/output/nature-q-c-680-320-10.jpg" />}
/>
`,
          `
<Card
  title="Super Long Title of the Technology of the Century as Brought to You By Tech Groupsoft in the Stunning Desert of British Lithuania"
  image={<img src="http://lorempixel.com/output/nature-q-c-680-320-10.jpg" />}
/>
`,
          `
<Card
  title={<a>Link with Super Long Title of the Technology of the Century as Brought to You By Tech Groupsoft in the Stunning Desert of British Lithuania</a>}
  image={<img src="http://lorempixel.com/output/nature-q-c-680-320-10.jpg" />}
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
      <Example.React
        orient="vertical"
        includes={{ Button, Card, Icon }}
        codes={[
          `
<Card
  metadata1={['Simon Allardice']}
  title="Card Title"
  image={<img src="http://lorempixel.com/output/abstract-q-c-680-320-4.jpg" />}
/>
`,
          `
<Card
  metadata1={['Simon Allardice']}
  metadata2={['Intermediate', '2hr 20min', 'July 24, 1847']}
  title="Card with Two Lines of Meta"
  image={<img src="http://lorempixel.com/output/abstract-q-c-680-320-4.jpg" />}
/>
`,
          `
<Card
  metadata1={[
    <a href="https://google.com?query=simon%20allardice">The Honorable Simon Allardice Hailing From Shores Abroad</a>
  ]}
  metadata2={[
    'Only about the Best Level in the World for Learning',
    '2hr 20min or longer depending',
    "July 24, 1847 or year thereabouts, it's unclear"
  ]}
  title="Super-long Metadata"
  image={<img src="http://lorempixel.com/output/abstract-q-c-680-320-4.jpg" />}
/>
`
        ]}
      />

      <Heading size="large">
        <h2>Action Bar</h2>
      </Heading>
      <P>
        The action bar contains the on-card affordances a user can take besides
        linking straight to the content. These are usually buttons.
      </P>
      <Example.React
        orient="vertical"
        includes={{ Button, Card, Icon }}
        codes={[
          `
<Card
  actionBar={[<Button appearance="flat" icon={<Icon id="bookmark" />} />]}
  title="Action bar appears on hover"
  image={<img src="http://lorempixel.com/output/food-q-c-680-320-8.jpg" />}
/>
`,

          `
<Card
  actionBar={[
    <Button appearance="flat" icon={<Icon id="bookmark" />} />,
    <Button appearance="flat" icon={<Icon id="more" />} />
  ]}
  title="Multiple actions"
  image={<img src="http://lorempixel.com/output/food-q-c-680-320-8.jpg" />}
/>
`,

          `
<Card
  actionBar={[
    <Button appearance="flat" icon={<Icon id="bookmark" />} />,
    <Button appearance="flat" icon={<Icon id="more" />} />
  ]}
  actionBarVisible={true}
  title="Action bar locked visible"
  image={<img src="http://lorempixel.com/output/food-q-c-680-320-8.jpg" />}
/>
`
        ]}
      />

      <Heading size="large">
        <h2>Tag</h2>
      </Heading>
      <P>The tag provides a label, usually categorizing the card's content.</P>
      <Example.React
        orient="vertical"
        includes={{ Button, Card, Icon }}
        codes={[
          `
<Card
  tag={[<Icon id="path" />, <span>Path</span>]}
  title="Icon and text"
  image={
    <img src="http://lorempixel.com/output/technics-q-c-680-320-5.jpg" />
  }
/>
`,
          `
<Card
  tag={[<span>Course</span>]}
  title="Text only"
  image={
    <img src="http://lorempixel.com/output/technics-q-c-680-320-5.jpg" />
  }
/>
`,
          `
<Card
  size="small"
  tag={[<Icon id="channel" />, <span>Channel</span>]}
  title="Tag hidden if card small"
  image={
    <img src="http://lorempixel.com/output/technics-q-c-680-320-5.jpg" />
  }
/>
`
        ]}
      />

      <Heading size="large">
        <h2>Full Overlay</h2>
      </Heading>
      <P>
        A special main action representing the main interaction for the card can
        be provided here. It will appear overlaid in the center of the image.
      </P>
      <Example.React
        orient="vertical"
        includes={{ Button, Card, Icon }}
        codes={[
          `
<Card
  fullOverlay={<div>Play</div>}
  title="Custom element centered on card image"
  image={<img src="http://lorempixel.com/output/nature-q-c-680-320-5.jpg" />}
/>
`,
          `
<Card
  fullOverlay={<div>Play</div>}
  fullOverlayVisible={true}
  title="Full overlay locked visible"
  image={<img src="http://lorempixel.com/output/nature-q-c-680-320-5.jpg" />}
/>
`,
          `
<Card
  fullOverlay={<a>Custom Thing</a>}
  actionBar={[<Button appearance="flat" icon={<Icon id="bookmark" />} />]}
  tag={[<Icon id="channel" />, <span>Channel</span>]}
  title="Combined with other overlays"
  image={<img src="http://lorempixel.com/output/nature-q-c-680-320-5.jpg" />}
/>
`
        ]}
      />

      <Heading size="large">
        <h2>Bonus Bar</h2>
      </Heading>
      <P>
        Some cards may make use of a freeform area of content overlaid in the
        bottom-left corner of the image area. Use with dignity.
      </P>
      <Example.React
        includes={{ Button, Card, Icon }}
        codes={[
          `
<Card
  bonusBar={<div>Just bonus</div>}
  title="Custom elements in lower-left"
  image={<img src="http://lorempixel.com/output/animals-q-c-680-320-8.jpg" />}
/>
`
        ]}
      />
    </Content>
  </Chrome>
