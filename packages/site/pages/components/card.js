/* eslint-disable react/display-name */
import React from 'react'

import Avatar from '@pluralsight/ps-design-system-avatar'
import Button from '@pluralsight/ps-design-system-button'
import Card from '@pluralsight/ps-design-system-card'
import * as core from '@pluralsight/ps-design-system-core'
import * as Layout from '@pluralsight/ps-design-system-layout'
import Theme from '@pluralsight/ps-design-system-theme'
import {
  PathIcon,
  BookmarkIcon,
  MoreIcon,
  PlayCircleIcon,
  ChannelIcon
} from '@pluralsight/ps-design-system-icon'

import {
  Chrome,
  Code,
  Content,
  Example,
  P,
  PageHeading,
  PropTypes,
  SectionHeading,
  TextLink
} from '../../src/ui/index.js'

const decorateCards = (sizes, props, state) => {
  const cardMaxWidths = {
    small: '140px',
    medium: '320px',
    large: '540px'
  }
  // NOTE: jsx-style classes evaluated in the context of Example.React
  let decorated = `<div className="output outputVertical ${
    state.themeName === Theme.names.light ? 'outputLight' : ''
  }">`

  state.codes.forEach((code, i) => {
    decorated += `<div className="outputChild" style={{ maxWidth: '${
      Array.isArray(sizes) ? cardMaxWidths[sizes[i]] : cardMaxWidths.medium
    }'}}>${code}</div>`
  })

  decorated += '</div>'

  return decorated
}
const decorateCardsSML = decorateCards.bind(null, Object.keys(Card.sizes))
const decorateCardsM = decorateCards.bind(null, null)

const capitalize = str => str.charAt(0).toUpperCase() + str.substring(1)

const InAppExample = props => (
  <Theme>
    <div className="gallery">
      <Layout.EqualColumnLayout>
        <ul>
          <li>
            <Card
              tag={<Card.Tag icon={<PathIcon />}>Path</Card.Tag>}
              title={<Card.Title>Advanced TypeScript</Card.Title>}
              progress={0}
              image={<Card.Image src="/static/img/course1.jpg" />}
              metadata1={['Brice Wilson', 'Advanced']}
              metadata2={['0m watched']}
              size={Card.sizes.small}
            />
          </li>
          <li>
            <Card
              bonusBar={<Avatar size={Avatar.sizes.xSmall} name="Jake Trent" />}
              title={
                <Card.Title>
                  Getting Started with Reactive Programming Using RxJS
                </Card.Title>
              }
              progress={20}
              image={<Card.Image src="/static/img/course2.jpg" />}
              metadata1={['Scott Allen', 'Intermediate']}
              metadata2={['23m watched']}
              size={Card.sizes.small}
            />
          </li>
          <li>
            <Card
              actionBar={[
                <Card.Action
                  key="1"
                  title="Book action"
                  icon={<BookmarkIcon />}
                />,
                <Card.Action key="2" title="More action" icon={<MoreIcon />} />
              ]}
              title={
                <Card.Title>
                  Building a JavaScript Development Environment"
                </Card.Title>
              }
              fullOverlay={
                <Card.FullOverlayLink>
                  <a>
                    <PlayCircleIcon size={PlayCircleIcon.sizes.large} />
                  </a>
                </Card.FullOverlayLink>
              }
              progress={67}
              image={<Card.Image src="/static/img/course3.jpg" />}
              metadata1={['Cory House', 'Intermediate']}
              metadata2={['3h 23m watched']}
              size={Card.sizes.small}
            />
          </li>
          <li>
            <Card
              actionBar={[
                <Card.Action
                  key="1"
                  title="Bookmark action"
                  icon={<BookmarkIcon />}
                />,
                <Card.Action key="2" title="More action" icon={<MoreIcon />} />
              ]}
              actionBarVisible
              title={<Card.Title>Webpack Fundamentals"</Card.Title>}
              progress={100}
              metadata1={['Joe Eames', 'Intermediate']}
              metadata2={['90m watched']}
              image={<Card.Image src="/static/img/course4.jpg" />}
              size={Card.sizes.small}
            />
          </li>
        </ul>
      </Layout.EqualColumnLayout>
    </div>

    <Code lang="javascript" collapsible>
      {`<Layout.EqualColumnLayout>
  <ul>
    <li>
      <Card
        tag={<Card.Tag icon={<PathIcon />}>Path</Card.Tag>}
        title={<Card.Title>Advanced TypeScript</Card.Title>}
        progress={0}
        image={<Card.Image src="/static/img/course1.jpg" />}
        metadata1={['Brice Wilson', 'Advanced']}
        metadata2={['0m watched']}
        size={Card.sizes.small}
      />
    </li>
    <li>
      <Card
        bonusBar={<Avatar size={Avatar.sizes.xSmall} name="Jake Trent" />}
        title={
          <Card.Title>
            Getting Started with Reactive Programming Using RxJS
          </Card.Title>
        }
        progress={20}
        image={<Card.Image src="/static/img/course2.jpg" />}
        metadata1={['Scott Allen', 'Intermediate']}
        metadata2={['23m watched']}
        size={Card.sizes.small}
      />
    </li>
    <li>
      <Card
        actionBar={[
          <Card.Action key="1" title="Bookmark" icon={<BookmarkIcon />} />,
          <Card.Action key="2" title="More" icon={<MoreIcon />} />
        ]}
        title={
          <Card.Title>
            Building a JavaScript Development Environment"
          </Card.Title>
        }
        fullOverlay={
          <Card.FullOverlayLink>
            <a>
              <Icon id={PlayCircleIcon size={PlayCircleIcon.sizes.large} />
            </a>
          </Card.FullOverlayLink>
        }
        progress={67}
        image={<Card.Image src="/static/img/course3.jpg" />}
        metadata1={['Cory House', 'Intermediate']}
        metadata2={['3 hr 23m watched']}
        size={Card.sizes.small}
      />
    </li>
    <li>
      <Card
        actionBar={[
          <Card.Action key="1" title="Bookmark" icon={<BookmarkIcon />} />,
          <Card.Action key="2" title="More" icon={<MoreIcon />} />
        ]}
        actionBarVisible
        title={<Card.Title>Webpack Fundamentals"</Card.Title>}
        progress={100}
        metadata1={['Joe Eames', 'Intermediate']}
        metadata2={['90m watched']}
        image={<Card.Image src="/static/img/course4.jpg" />}
        size={Card.sizes.small}
      />
    </li>
  </ul>
</Layout.EqualColumnLayout>
`}
    </Code>

    <style jsx>{`
      .gallery {
        padding: ${core.layout.spacingMedium};
        background: ${core.colors.gray06};
      }
    `}</style>
  </Theme>
)

export default _ => (
  <Chrome>
    <Content title="Card">
      <PageHeading packageName="card">Card</PageHeading>

      <P>Install the component dependency:</P>
      <Code language="bash">
        npm install @pluralsight/ps-design-system-card
      </Code>

      <P>Include a React component in your project:</P>
      <Code language="javascript">
        import Card from '@pluralsight/ps-design-system-card'
      </Code>

      <PropTypes
        props={{
          Card: [
            PropTypes.row([
              'actionBar',
              <span>
                <code>Card.Action[]</code>
              </span>,
              null,
              null,
              'top-right action buttons'
            ]),
            PropTypes.row([
              'actionBarVisible',
              'boolean',
              null,
              <code>false</code>,
              'lock action bar on'
            ]),
            PropTypes.row([
              'bonusBar',
              'React element',
              null,
              null,
              'freeform space in image bottom-left'
            ]),
            PropTypes.row([
              'fullOverlay',
              <code>Card.FullOverlayLink</code>,
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
                <code>Card.Image</code>
                <span> | </span>
                <code>
                  Card.ImageLink {'>'} a {'>'} Card.Image
                </code>
              </span>,
              true,
              null,
              'main image or linked image'
            ]),
            PropTypes.row([
              'metadata1',
              'string[] | React element[]',
              null,
              null,
              'first row of metadata'
            ]),
            PropTypes.row([
              'metadata2',
              'string[] | React element[]',
              null,
              null,
              'second row of metadata'
            ]),
            PropTypes.row(['progress', 'number', null, null, 'progress 0-100']),
            PropTypes.row([
              'size',
              PropTypes.union(Card.sizes),
              null,
              <code>medium</code>,
              <span>
                size of card (from <code>Card.sizes</code>)
              </span>
            ]),
            PropTypes.row([
              'tag',
              <code>Card.Tag</code>,
              null,
              null,
              'categorization label in top-left'
            ]),
            PropTypes.row([
              'title',
              <span>
                <code>
                  Card.TextLink {'>'} a {'>'} Card.Title
                </code>{' '}
                | <code>Card.Title</code>
              </span>,
              true,
              null,
              'card title or linked title'
            ])
          ],
          'Card.Action': [
            PropTypes.row([
              'icon',
              <span>
                <code>Icon</code>
              </span>,
              true,
              null,
              'icon representing action'
            ]),
            PropTypes.row(['title', 'string', true])
          ],
          'Card.Image': [
            PropTypes.row(['src', 'string', true, null, 'image url'])
          ],
          'Card.Tag': [
            PropTypes.row(['icon', <code>*Icon</code>, null, null, 'tag icon'])
          ]
        }}
      />

      <SectionHeading>In-app example</SectionHeading>
      <P>
        The card is a flexible component that will fit the container it's given.
        A gallery is a common container layout that one might encounter in the
        product. This is an example implementation of how the Card might look in
        a gallery in your app, using the{' '}
        <TextLink href="/components/layout">Layout.EqualColumnLayout</TextLink>{' '}
        component.
      </P>
      <InAppExample />

      <SectionHeading>Size</SectionHeading>
      <P>
        While the component is flexible, the size will determine certain base
        proportions and flexibility min and max bounds.
      </P>
      <Example.React
        themeToggle
        decorateCodes={decorateCardsSML}
        includes={{ Button, Card }}
        codes={Object.keys(Card.sizes).map(
          s => `
<Card
  size={Card.sizes.${s}}
  title={<Card.Title>${capitalize(s)} Card</Card.Title>}
  metadata1={['Jim Cooper']}
  image={<Card.Image src="/static/img/course1.jpg" />}
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
        themeToggle
        decorateCodes={decorateCardsM}
        includes={{ Button, Card, BookmarkIcon }}
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
        <Card.Image src="/static/img/course2.jpg" />
      </a>
    </Card.ImageLink>
  }
  title={<Card.Title>Linked image with other overlays</Card.Title>}
  actionBar={[<Card.Action key="1" title="Bookmark action" icon={<BookmarkIcon />} />]}
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
        themeToggle
        decorateCodes={decorateCardsM}
        includes={{ Button, Card }}
        codes={[
          `
<Card
  progress={25}
  title={<Card.Title>The Card Title</Card.Title>}
  image={<Card.Image src="/static/img/course3.jpg" />}
/> `,
          `
<Card
  progress={66.6666667}
  title={<Card.Title>The Card Title</Card.Title>}
  image={<Card.Image src="/static/img/course3.jpg" />}
/> `,
          `
<Card
  progress={100}
  title={<Card.Title>The Card Title</Card.Title>}
  image={<Card.Image src="/static/img/course3.jpg" />}
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
        themeToggle
        decorateCodes={decorateCardsM}
        includes={{ Button, Card }}
        codes={[
          `
<Card
  title={<Card.TextLink><a><Card.Title>Link Title</Card.Title></a></Card.TextLink>}
  image={<Card.Image src="/static/img/course4.jpg" />}
/>
`,
          `
<Card
  title={<Card.Title>Super Long Title of the Technology of the Century as Brought to You By Tech Groupsoft in the Stunning Desert of British Lithuania</Card.Title>}
  image={<Card.Image src="/static/img/course4.jpg" />}
/>
`,
          `
<Card
  title={<Card.TextLink><a><Card.Title>Link with Super Long Title of the Technology of the Century as Brought to You By Tech Groupsoft in the Stunning Desert of British Lithuania</Card.Title></a></Card.TextLink>}
  image={<Card.Image src="/static/img/course4.jpg" />}
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
      <Example.React
        themeToggle
        decorateCodes={decorateCardsM}
        includes={{ Button, Card }}
        codes={[
          `
<Card
  metadata1={['Simon Allardice']}
  title={<Card.Title>Card Title</Card.Title>}
  image={<Card.Image src="/static/img/course1.jpg" />}
/>
`,
          `
<Card
  metadata1={['Simon Allardice']}
  metadata2={['Intermediate', '2h 20m', 'July 24, 1847']}
  title={<Card.Title>Card with Two Lines of Meta</Card.Title>}
  image={<Card.Image src="/static/img/course1.jpg" />}
/>
`,
          `
<Card
  metadata1={[
    <Card.TextLink><a href="https://google.com?query=simon%20allardice">The Honorable Simon Allardice Hailing From Shores Abroad</a></Card.TextLink>
  ]}
  metadata2={[
    'Only about the Best Level in the World for Learning',
    '2h 20m or longer depending',
    "July 24, 1847 or year thereabouts, it's unclear"
  ]}
  title={<Card.Title>Super-long Metadata</Card.Title>}
  image={<Card.Image src="/static/img/course1.jpg" />}
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
        themeToggle
        decorateCodes={decorateCardsM}
        includes={{ Button, Card, BookmarkIcon, MoreIcon }}
        codes={[
          `
<Card
  actionBar={[<Card.Action key="1" title="Bookmark action" icon={<BookmarkIcon />} />]}
  title={<Card.Title>Action bar appears on hover</Card.Title>}
  image={<Card.Image src="/static/img/course2.jpg" />}
/>
`,
          `
<Card
  actionBar={[
    <Card.Action key="1" title="Bookmark action" icon={<BookmarkIcon />} />,
    <Card.Action key="2" title="More action" icon={<MoreIcon />} />
  ]}
  title={<Card.Title>Multiple actions</Card.Title>}
  image={<Card.Image src="/static/img/course2.jpg" />}
/>
`,
          `
<Card
  actionBar={[
    <Card.Action title="Bookmark action" icon={<BookmarkIcon />} />,
    <Card.Action title="More action" icon={<MoreIcon />} />
  ]}
  actionBarVisible
  title={<Card.Title>Action bar locked visible</Card.Title>}
  image={<Card.Image src="/static/img/course2.jpg" />}
/>
`
        ]}
      />

      <SectionHeading>Tag</SectionHeading>
      <P>The tag provides a label, usually categorizing the card's content.</P>
      <Example.React
        themeToggle
        decorateCodes={decorateCardsM}
        includes={{ Button, Card, PathIcon, ChannelIcon }}
        codes={[
          `
<Card
  tag={<Card.Tag icon={<PathIcon />}>Path</Card.Tag>}
  title={<Card.Title>Icon and text</Card.Title>}
  image={
    <Card.Image src="/static/img/course3.jpg" />
  }
/>
`,
          `
<Card
  tag={<Card.Tag>Course</Card.Tag>}
  title={<Card.Title>Text only</Card.Title>}
  image={
    <Card.Image src="/static/img/course3.jpg" />
  }
/>
`,
          `
<Card
  size={Card.sizes.small}
  tag={<Card.Tag icon={<ChannelIcon />}>Channel</Card.Tag>}
  title={<Card.Title>Icon and text on card small</Card.Title>}
  image={
    <Card.Image src="/static/img/course3.jpg" />
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
        themeToggle
        decorateCodes={decorateCardsM}
        includes={{ Button, Card, BookmarkIcon, ChannelIcon }}
        codes={[
          `
<Card
  fullOverlay={<Card.FullOverlayLink>Play</Card.FullOverlayLink>}
  title={<Card.Title>Custom element centered on card image</Card.Title>}
  image={<Card.Image src="/static/img/course4.jpg" />}
/>
`,
          `
<Card
  fullOverlay={<Card.FullOverlayLink>Play</Card.FullOverlayLink>}
  fullOverlayVisible
  title={<Card.Title>Full overlay locked visible</Card.Title>}
  image={<Card.Image src="/static/img/course4.jpg" />}
/>
`,
          `
<Card
  fullOverlay={<Card.FullOverlayLink><a>Custom Thing</a></Card.FullOverlayLink>}
  actionBar={[<Card.Action title="Bookmark action" icon={<BookmarkIcon />} />]}
  tag={<Card.Tag icon={<ChannelIcon />}>Channel</Card.Tag>}
  title={<Card.Title>Combined with other overlays</Card.Title>}
  image={<Card.Image src="/static/img/course4.jpg" />}
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
        themeToggle
        decorateCodes={decorateCardsM}
        includes={{ Button, Card }}
        codes={[
          `
<Card
  bonusBar={<div>Just bonus</div>}
  title={<Card.Title>Custom elements in lower-left</Card.Title>}
  image={<Card.Image src="/static/img/course1.jpg" />}
/>
`
        ]}
      />
    </Content>
  </Chrome>
)
