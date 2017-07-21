import Button from '@pluralsight/ps-design-system-button/react'
import Card from '@pluralsight/ps-design-system-card/react'
import Icon from '@pluralsight/ps-design-system-icon/react'
import React from 'react'

import Carousel from './carousel'
import { Code, Example, Heading, Link, P } from '../../common/components'

const defaultCard = (
  <Card
    title={'The Card Title'}
    image={<img src="http://via.placeholder.com/350x150" />}
  />
)

export default _ =>
  <div>
    <Heading size="xx-large">
      <h1>Card</h1>
    </Heading>

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
    <Example.React2
      code={`
<Card
  size="large"
  metadata={['Great author']}
  image={<img src="http://lorempixel.com/output/technics-q-c-680-320-6.jpg" />}
/>
`}
    />

    <Example.React
      component={defaultCard}
      orient="vertical"
      name="Card"
      permutations={[
        {
          size: 'large',
          metadata1: ['Great Author'],
          image: (
            <img src="http://lorempixel.com/output/technics-q-c-680-320-6.jpg" />
          )
        },
        {
          size: 'medium',
          metadata1: ['Great Author'],

          image: (
            <img src="http://lorempixel.com/output/technics-q-c-680-320-6.jpg" />
          )
        },
        {
          size: 'small',
          metadata1: ['Great Author'],
          image: (
            <img src="http://lorempixel.com/output/technics-q-c-680-320-6.jpg" />
          )
        }
      ]}
    />

    <Heading size="large">
      <h2>Image</h2>
    </Heading>
    <P>
      The image will cover the space given. This space is variable width but set
      height according to the `size` property.
    </P>
    <Example.React
      component={<Card image={<img />} title="fake" />}
      orient="vertical"
      name="Card"
      permutations={[
        {
          size: 'medium',
          image: <img src="http://via.placeholder.com/350x150" />,
          title: 'Wide image'
        },
        {
          size: 'medium',
          image: <img src="http://via.placeholder.com/200x400" />,
          title: 'Tall image'
        },
        {
          actionBar: [
            <Button appearance="flat" icon={<Icon id="bookmark" />} />
          ],
          fullOverlay: (
            <a href="https://google.com?q=full%20overlay" target="_blank">
              Full Overlay
            </a>
          ),
          size: 'medium',
          image: (
            <a href="https://google.com" target="_blank">
              <img src="http://lorempixel.com/output/technics-q-c-680-320-2.jpg" />
            </a>
          ),
          title: 'Linked image'
        }
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
      component={defaultCard}
      orient="vertical"
      name="Card"
      permutations={[
        {
          progress: 25,
          image: (
            <img src="http://lorempixel.com/output/technics-q-c-680-320-1.jpg" />
          )
        },
        {
          progress: 66.666667,
          image: (
            <img src="http://lorempixel.com/output/technics-q-c-680-320-1.jpg" />
          )
        },
        {
          progress: 100,
          image: (
            <img src="http://lorempixel.com/output/technics-q-c-680-320-1.jpg" />
          )
        }
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
      Strings are line-clamped to 2 lines max, then the text will overflow with
      an ellipsis appended.
    </P>
    <Example.React
      component={defaultCard}
      name="Card"
      orient="vertical"
      permutations={[
        {
          title: <a>Link Title</a>,
          image: (
            <img src="http://lorempixel.com/output/nature-q-c-680-320-10.jpg" />
          )
        },
        {
          title:
            'Super Long Title of the Technology of the Century as Brought to You By Tech Groupsoft in the Stunning Desert of British Lithuania',
          image: (
            <img src="http://lorempixel.com/output/nature-q-c-680-320-10.jpg" />
          )
        },
        {
          title: (
            <a>
              Link with Super Long Title of the Technology of the Century as
              Brought to You By Tech Groupsoft in the Stunning Desert of British
              Lithuania
            </a>
          ),
          image: (
            <img src="http://lorempixel.com/output/nature-q-c-680-320-10.jpg" />
          )
        }
      ]}
    />

    <Heading size="large">
      <h2>Metadata</h2>
    </Heading>
    <P>
      Metadata is free-form strings or displayable elements like links. Each bit
      of metadata is separated by an interpunct.
    </P>
    <P>
      Metadata is constrained to a single line, overflowing with an ellipsis
      indicated. The first datum is given display space precendence.
    </P>
    <Example.React
      component={defaultCard}
      name="Card"
      orient="vertical"
      permutations={[
        {
          metadata1: ['Simon Allardice'],
          image: (
            <img src="http://lorempixel.com/output/abstract-q-c-680-320-4.jpg" />
          )
        },
        {
          metadata1: ['Simon Allardice'],
          metadata2: ['Intermediate', '2hr 20min', 'July 24, 1847'],
          image: (
            <img src="http://lorempixel.com/output/abstract-q-c-680-320-4.jpg" />
          )
        },
        {
          image: (
            <img src="http://lorempixel.com/output/abstract-q-c-680-320-4.jpg" />
          ),
          metadata1: [
            <a>The Honorable Simon Allardice Hailing From Shores Abroad</a>
          ],
          metadata2: [
            'Only about the Best Level in the World for Learning',
            '2hr 20min or longer depending',
            "July 24, 1847 or year thereabouts, it's unclear"
          ]
        }
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
      component={defaultCard}
      orient="vertical"
      name="Card"
      permutations={[
        {
          actionBar: [
            <Button appearance="flat" icon={<Icon id="bookmark" />} />
          ],
          image: (
            <img src="http://lorempixel.com/output/food-q-c-680-320-8.jpg" />
          )
        },
        {
          actionBar: [
            <Button appearance="flat" icon={<Icon id="bookmark" />} />,
            <Button appearance="flat" icon={<Icon id="more" />} />
          ],
          image: (
            <img src="http://lorempixel.com/output/food-q-c-680-320-8.jpg" />
          )
        },
        {
          actionBar: [
            <Button appearance="flat" icon={<Icon id="bookmark" />} />,
            <Button appearance="flat" icon={<Icon id="more" />} />
          ],
          actionBarVisible: true,
          image: (
            <img src="http://lorempixel.com/output/food-q-c-680-320-8.jpg" />
          )
        }
      ]}
    />

    <Heading size="large">
      <h2>Tag</h2>
    </Heading>
    <P>The tag provides a label usually categorizing the card's content.</P>
    <Example.React
      component={defaultCard}
      orient="vertical"
      name="Card"
      permutations={[
        {
          tag: [<Icon id="path" />, <span>Path</span>],
          image: (
            <img src="http://lorempixel.com/output/technics-q-c-680-320-5.jpg" />
          )
        },
        {
          tag: [<span>Course</span>],
          image: (
            <img src="http://lorempixel.com/output/technics-q-c-680-320-5.jpg" />
          )
        },
        {
          size: 'small',
          tag: [<Icon id="channel" />, <span>Channel</span>],
          image: (
            <img src="http://lorempixel.com/output/technics-q-c-680-320-5.jpg" />
          )
        }
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
      component={defaultCard}
      orient="vertical"
      name="Card"
      permutations={[
        {
          fullOverlay: <div>Play</div>,
          image: (
            <img src="http://lorempixel.com/output/nature-q-c-680-320-5.jpg" />
          )
        },
        {
          actionBar: [
            <Button appearance="flat" icon={<Icon id="bookmark" />} />
          ],
          fullOverlay: <a>Custom Thing</a>,
          tag: [<Icon id="channel" />, <span>Channel</span>],
          image: (
            <img src="http://lorempixel.com/output/nature-q-c-680-320-5.jpg" />
          )
        },
        {
          fullOverlay: <div>Play</div>,
          fullOverlayVisible: true,
          image: (
            <img src="http://lorempixel.com/output/nature-q-c-680-320-5.jpg" />
          )
        }
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
      component={defaultCard}
      name="Card"
      permutations={[
        {
          bonusBar: <div>Just bonus</div>,
          image: (
            <img src="http://lorempixel.com/output/animals-q-c-680-320-8.jpg" />
          )
        }
      ]}
    />
  </div>
