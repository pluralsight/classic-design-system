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
  PageHeading,
  PropTypes,
  SectionHeading,
  withServerProps
} from '../../src/ui'

const capitalize = str => str.charAt(0).toUpperCase() + str.substring(1)

const Carousel = props => (
  <div className="root">
    <div className="carousel">
      <div className="cardContainer">
        <Card
          title={<Card.Title>Advanced TypeScript</Card.Title>}
          progress={0}
          image={
            <Card.Image src="http://lorempixel.com/output/people-q-c-300-200-4.jpg" />
          }
          metadata1={['Brice Wilson', 'Advanced']}
          metadata2={['0m watched']}
          size={Card.sizes.small}
        />
      </div>
      <div className="cardContainer">
        <Card
          title={
            <Card.Title>
              Getting Started with Reactive Programming Using RxJS
            </Card.Title>
          }
          progress={20}
          image={
            <Card.Image src="http://lorempixel.com/output/people-q-c-300-200-2.jpg" />
          }
          metadata1={['Scott Allen', 'Intermediate']}
          metadata2={['23m watched']}
          size={Card.sizes.small}
        />
      </div>
      <div className="cardContainer">
        <Card
          title={
            <Card.Title>
              Building a JavaScript Development Environment"
            </Card.Title>
          }
          progress={67}
          image={
            <Card.Image src="http://lorempixel.com/output/people-q-c-300-200-7.jpg" />
          }
          metadata1={['Cory House', 'Intermediate']}
          metadata2={['3 hr 23m watched']}
          size={Card.sizes.small}
        />
      </div>
      <div className="cardContainer">
        <Card
          title={<Card.Title>Webpack Fundamentals"</Card.Title>}
          progress={100}
          metadata1={['Joe Eames', 'Intermediate']}
          metadata2={['90m watched']}
          image={
            <Card.Image src="http://lorempixel.com/output/people-q-c-300-200-5.jpg" />
          }
          size={Card.sizes.small}
        />
      </div>
    </div>
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
)

export default withServerProps(_ => (
  <Chrome>
    <Content title="Card">
      <PageHeading packageName="card">Card</PageHeading>

      <P>Install the component dependency:</P>
      <Code language="bash">
        npm install @pluralsight/ps-design-system-card
      </Code>

      <P>Include a React component in your project:</P>
      <Code language="javascript">
        import Card from '@pluralsight/ps-design-system-card/react'
      </Code>

      <PropTypes
        title="Card PropTypes"
        props={[
          [
            'actionBar',
            <span>
              <code>Card.Action[]</code>
            </span>,
            null,
            null,
            'top-right action buttons'
          ],
          [
            'actionBarVisible',
            'boolean',
            null,
            <code>false</code>,
            'lock action bar on'
          ],
          [
            'bonusBar',
            'React element',
            null,
            null,
            'freeform space in image bottom-left'
          ],
          [
            'fullOverlay',
            <code>Card.FullOverlayLink</code>,
            null,
            null,
            'hover state for image'
          ],
          [
            'fullOverlayVisible',
            'boolean',
            null,
            <code>false</code>,
            'lock full overlay on'
          ],
          [
            'image',
            <span>
              <code>Card.Image</code> |
              <code>Card.ImageLink > a > Card.Image</code>
            </span>,
            true,
            null,
            'main image or linked image'
          ],
          [
            'metadata1',
            'string[] | React element[]',
            null,
            null,
            'first row of metadata'
          ],
          [
            'metadata2',
            'string[] | React element[]',
            null,
            null,
            'second row of metadata'
          ],
          ['progress', 'number', null, null, 'progress 0-100'],
          [
            'size',
            PropTypes.union(Card.sizes),
            null,
            <code>Card.sizes.medium</code>,
            'size of card'
          ],
          [
            'tag',
            <code>Card.Tag</code>,
            null,
            null,
            'categorization label in top-left'
          ],
          [
            'title',
            <span>
              <code>Card.TextLink > a > Card.Title</code> |{' '}
              <code>Card.Title</code>
            </span>,
            true,
            null,
            'card title or linked title'
          ]
        ]}
      />

      <PropTypes
        title="Card.Action PropTypes"
        props={[
          [
            'icon',
            <span>
              <code>Icon</code>
            </span>,
            true,
            null,
            'icon representing action'
          ]
        ]}
      />

      <PropTypes
        title="Card.Image PropTypes"
        props={[['src', 'string', true, null, 'image url']]}
      />

      <PropTypes
        title="Card.Tag PropTypes"
        props={[['icon', <code>Icon</code>, null, null, 'tag icon']]}
      />

      <SectionHeading>In-app example</SectionHeading>
      <P>
        The card is a flexible component that will fit the container it's given
        within certain bounds. A carousel is a common container layout that one
        might encounter in the product. This is an example implementation of how
        the Card might look in a carousel in your app.
      </P>
      <Carousel />

      <SectionHeading>Size</SectionHeading>
      <P>
        While the component is flexible, the size will determine certain base
        proportions and flexibility min and max bounds.
      </P>
      <Example.React
        orient="vertical"
        includes={{ Button, Card, Icon }}
        codes={Object.keys(Card.sizes).map(
          s => `
<Card
  size={Card.sizes.${s}}
  title={<Card.Title>${capitalize(s)} Card</Card.Title>}
  metadata1={['Jim Cooper']}
  image={<Card.Image src="http://lorempixel.com/output/technics-q-c-680-320-6.jpg" />}
/>
`
        )}
      />

      <SectionHeading>Image</SectionHeading>
      <P>
        The image will cover the space given. This space is variable width but
        set height according to the `size` property.
      </P>
      <Example.React
        orient="vertical"
        includes={{ Button, Card, Icon }}
        codes={[
          `
<Card
  image={<Card.Image src="http://via.placeholder.com/350x150" />}
  title={<Card.Title>Wide image</Card.Title>}
/>
`,
          `
<Card
  image={<Card.Image src="http://via.placeholder.com/200x400" />}
  title={<Card.Title>Tall image</Card.Title>}
/>
`,
          `
<Card
  image={
    <Card.ImageLink>
      <a href="https://google.com" target="_blank">
        <Card.Image src="http://lorempixel.com/output/technics-q-c-680-320-2.jpg" />
      </a>
    </Card.ImageLink>
  }
  title={<Card.Title>Linked image with other overlays</Card.Title>}
  actionBar={[<Card.Action icon={<Icon id="bookmark" />} />]}
  fullOverlay={
    <Card.FullOverlayLink>
      <a href="https://google.com?q=full%20overlay" target="_blank">
        Full Overlay
      </a>
    </Card.FullOverlayLink>
  }
/>
            `
        ]}
      />

      <SectionHeading>Progress</SectionHeading>
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
  title={<Card.Title>The Card Title</Card.Title>}
  image={<Card.Image src="http://lorempixel.com/output/technics-q-c-680-320-1.jpg" />}
/> `,
          `
<Card
  progress={66.6666667}
  title={<Card.Title>The Card Title</Card.Title>}
  image={<Card.Image src="http://lorempixel.com/output/technics-q-c-680-320-1.jpg" />}
/> `,
          `
<Card
  progress={100}
  title={<Card.Title>The Card Title</Card.Title>}
  image={<Card.Image src="http://lorempixel.com/output/technics-q-c-680-320-1.jpg" />}
/> `
        ]}
      />

      <SectionHeading>Title</SectionHeading>
      <P>
        The title can be a string or a some other element, such as a link, that
        contains a string
      </P>
      <P>
        Strings are line-clamped to 2 lines max, then the text will overflow
        with an ellipsis appended.
      </P>
      <Example.React
        orient="vertical"
        includes={{ Button, Card, Icon }}
        codes={[
          `
<Card
  title={<Card.TextLink><a><Card.Title>Link Title</Card.Title></a></Card.TextLink>}
  image={<Card.Image src="http://lorempixel.com/output/nature-q-c-680-320-10.jpg" />}
/>
`,
          `
<Card
  title={<Card.Title>Super Long Title of the Technology of the Century as Brought to You By Tech Groupsoft in the Stunning Desert of British Lithuania</Card.Title>}
  image={<Card.Image src="http://lorempixel.com/output/nature-q-c-680-320-10.jpg" />}
/>
`,
          `
<Card
  title={<Card.TextLink><a><Card.Title>Link with Super Long Title of the Technology of the Century as Brought to You By Tech Groupsoft in the Stunning Desert of British Lithuania</Card.Title></a></Card.TextLink>}
  image={<Card.Image src="http://lorempixel.com/output/nature-q-c-680-320-10.jpg" />}
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
      <Example.React
        orient="vertical"
        includes={{ Button, Card, Icon }}
        codes={[
          `
<Card
  metadata1={['Simon Allardice']}
  title={<Card.Title>Card Title</Card.Title>}
  image={<Card.Image src="http://lorempixel.com/output/abstract-q-c-680-320-4.jpg" />}
/>
`,
          `
<Card
  metadata1={['Simon Allardice']}
  metadata2={['Intermediate', '2hr 20min', 'July 24, 1847']}
  title={<Card.Title>Card with Two Lines of Meta</Card.Title>}
  image={<Card.Image src="http://lorempixel.com/output/abstract-q-c-680-320-4.jpg" />}
/>
`,
          `
<Card
  metadata1={[
    <Card.TextLink><a href="https://google.com?query=simon%20allardice">The Honorable Simon Allardice Hailing From Shores Abroad</a></Card.TextLink>
  ]}
  metadata2={[
    'Only about the Best Level in the World for Learning',
    '2hr 20min or longer depending',
    "July 24, 1847 or year thereabouts, it's unclear"
  ]}
  title={<Card.Title>Super-long Metadata</Card.Title>}
  image={<Card.Image src="http://lorempixel.com/output/abstract-q-c-680-320-4.jpg" />}
/>
`
        ]}
      />

      <SectionHeading>Action Bar</SectionHeading>
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
  actionBar={[<Card.Action icon={<Icon id={Icon.ids.bookmark} />} />]}
  title={<Card.Title>Action bar appears on hover</Card.Title>}
  image={<Card.Image src="http://lorempixel.com/output/food-q-c-680-320-8.jpg" />}
/>
`,
          `
<Card
  actionBar={[
    <Card.Action icon={<Icon id={Icon.ids.bookmark} />} />,
    <Card.Action icon={<Icon id={Icon.ids.more} />} />
  ]}
  title={<Card.Title>Multiple actions</Card.Title>}
  image={<Card.Image src="http://lorempixel.com/output/food-q-c-680-320-8.jpg" />}
/>
`,
          `
<Card
  actionBar={[
    <Card.Action icon={<Icon id={Icon.ids.bookmark} />} />,
    <Card.Action icon={<Icon id={Icon.ids.more} />} />
  ]}
  actionBarVisible
  title={<Card.Title>Action bar locked visible</Card.Title>}
  image={<Card.Image src="http://lorempixel.com/output/food-q-c-680-320-8.jpg" />}
/>
`
        ]}
      />

      <SectionHeading>Tag</SectionHeading>
      <P>The tag provides a label, usually categorizing the card's content.</P>
      <Example.React
        orient="vertical"
        includes={{ Button, Card, Icon }}
        codes={[
          `
<Card
  tag={<Card.Tag icon={<Icon id={Icon.ids.path} />}>Path</Card.Tag>}
  title={<Card.Title>Icon and text</Card.Title>}
  image={
    <Card.Image src="http://lorempixel.com/output/technics-q-c-680-320-5.jpg" />
  }
/>
`,
          `
<Card
  tag={<Card.Tag>Course</Card.Tag>}
  title={<Card.Title>Text only</Card.Title>}
  image={
    <Card.Image src="http://lorempixel.com/output/technics-q-c-680-320-5.jpg" />
  }
/>
`,
          `
<Card
  size={Card.sizes.small}
  tag={<Card.Tag icon={<Icon id={Icon.ids.channel} />}>Channel</Card.Tag>}
  title={<Card.Title>Tag hidden if card small</Card.Title>}
  image={
    <Card.Image src="http://lorempixel.com/output/technics-q-c-680-320-5.jpg" />
  }
/>
`
        ]}
      />

      <SectionHeading>Full Overlay</SectionHeading>
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
  fullOverlay={<Card.FullOverlayLink>Play</Card.FullOverlayLink>}
  title={<Card.Title>Custom element centered on card image</Card.Title>}
  image={<Card.Image src="http://lorempixel.com/output/nature-q-c-680-320-5.jpg" />}
/>
`,
          `
<Card
  fullOverlay={<Card.FullOverlayLink>Play</Card.FullOverlayLink>}
  fullOverlayVisible
  title={<Card.Title>Full overlay locked visible</Card.Title>}
  image={<Card.Image src="http://lorempixel.com/output/nature-q-c-680-320-5.jpg" />}
/>
`,
          `
<Card
  fullOverlay={<Card.FullOverlayLink><a>Custom Thing</a></Card.FullOverlayLink>}
  actionBar={[<Card.Action icon={<Icon id={Icon.ids.bookmark} />} />]}
  tag={<Card.Tag icon={<Icon id={Icon.ids.channel} />}>Channel</Card.Tag>}
  title={<Card.Title>Combined with other overlays</Card.Title>}
  image={<Card.Image src="http://lorempixel.com/output/nature-q-c-680-320-5.jpg" />}
/>
`
        ]}
      />

      <SectionHeading>Bonus Bar</SectionHeading>
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
  title={<Card.Title>Custom elements in lower-left</Card.Title>}
  image={<Card.Image src="http://lorempixel.com/output/animals-q-c-680-320-8.jpg" />}
/>
`
        ]}
      />
    </Content>
  </Chrome>
))
