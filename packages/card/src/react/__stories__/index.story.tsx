import React from 'react'
import { storiesOf } from '@storybook/react'

import * as core from '@pluralsight/ps-design-system-core'
import * as Icon from '@pluralsight/ps-design-system-icon'

import Card, { CardProps } from '..'
import { StoryFn } from '@storybook/addons'

const getImgSrc = ({ w = 680, h = 320, id = 42 } = {}) =>
  `//picsum.photos/${w}/${h}?image=${id}&gravity=north`

const longStringsMetaData = [
  'It is impossible to count the grand contributions of this great author',
  'Levels heretofore unknown in the battle for truth and knowledge',
  'A length of such amazing lengthitude so-as to blow the mind'
]

const longTitle =
  'The First Course of Our Age to Teach the Minute Waltz to an Eight Horn Fugle Hummer in Less Than the Average of the First 60 Seconds'

const CardWithDefaults = (props: Partial<CardProps>) => {
  const title = props.title || <Card.Title>Card Title</Card.Title>
  const image = props.image || <Card.Image src={getImgSrc()} />
  return <Card {...props} title={title} image={image} />
}

const sizes = {
  [Card.sizes.small]: { width: '140px' },
  [Card.sizes.medium]: { width: '320px' },
  [Card.sizes.large]: { width: '540px' }
}
const ConstrainSizeDecorator = (size: keyof typeof sizes) => (
  storyFn: StoryFn<JSX.Element>
) => <div style={sizes[size]}>{storyFn()}</div>

storiesOf('combo', module)
  .addDecorator(ConstrainSizeDecorator(Card.sizes.medium))
  .add('everything locked', () => (
    <Card
      title={
        <Card.TextLink>
          <a href="http://duckduckgo.com?q=title">
            <Card.Title>
              Image, Progress, Link Full Overlay, Icon, Link Title, Link Meta1,
              2, Action Bar, and More Really. Why Not Put More In? Release a New
              Edition Every Year With All the Excesses of our VC Budget?
              Boundless Features Will Be Yours 2000
            </Card.Title>
          </a>
        </Card.TextLink>
      }
      fullOverlay={
        <Card.FullOverlayLink>
          <a href="http://duckduckgo.com?q=overlay">
            <Icon.PlayCircleIcon
              size={Icon.sizes.large}
              css={{ '& svg': { fill: core.colorsWhite } }}
            />
          </a>
        </Card.FullOverlayLink>
      }
      fullOverlayVisible
      image={
        <Card.ImageLink>
          <a href="http://duckduckgo.com?q=image">
            <Card.Image src={getImgSrc()} />
          </a>
        </Card.ImageLink>
      }
      metadata1={longStringsMetaData.map((str, i) => (
        <Card.TextLink key={i}>
          <a href="http://duckduckgo.com/?q=jaketrent">{str}</a>
        </Card.TextLink>
      ))}
      metadata2={['Goodness me!']}
      actionBar={[
        <Card.Action
          key="bookmark"
          icon={<Icon.BookmarkIcon />}
          title="Bookmark"
        />,
        <Card.Action key="gear" icon={<Icon.GearIcon />} title="Settings" />,
        <Card.Action key="more" icon={<Icon.MoreIcon />} title="More" />
      ]}
      actionBarVisible
      tag={<Card.Tag icon={<Icon.PathIcon />}>Path</Card.Tag>}
    />
  ))
  .add('everything focusable', () => (
    <Card
      title={
        <Card.TextLink>
          <a href="http://duckduckgo.com?q=title">
            <Card.Title>Should focus</Card.Title>
          </a>
        </Card.TextLink>
      }
      fullOverlay={
        <Card.FullOverlayLink>
          <a href="http://duckduckgo.com?q=overlay">
            <Icon.PlayCircleIcon
              size={Icon.sizes.large}
              style={{ color: core.colorsWhite }}
            />
          </a>
        </Card.FullOverlayLink>
      }
      image={
        <Card.ImageLink>
          <a href="http://duckduckgo.com?q=image">
            <Card.Image src={getImgSrc()} />
          </a>
        </Card.ImageLink>
      }
      metadata1={[
        <Card.TextLink>
          <a href="http://duckduckgo.com/?q=jaketrent">focusable</a>
        </Card.TextLink>
      ]}
      actionBar={[
        <Card.Action
          key="bookmark"
          icon={<Icon.BookmarkIcon />}
          title="Bookmark"
        />,
        <Card.Action key="gear" icon={<Icon.GearIcon />} title="Settings" />,
        <Card.Action key="more" icon={<Icon.MoreIcon />} title="More" />
      ]}
      tag={<Card.Tag icon={<Icon.PathIcon />}>Path</Card.Tag>}
    />
  ))

storiesOf('title', module)
  .addDecorator(ConstrainSizeDecorator(Card.sizes.medium))
  .add('title wrapper', () => (
    <CardWithDefaults title={<Card.Title>Text only</Card.Title>} />
  ))
  .add('text link with title wrapper', () => (
    <CardWithDefaults
      title={
        <Card.TextLink>
          <a href="http://duckduckgo.com?q=text">
            <Card.Title>Text link</Card.Title>
          </a>
        </Card.TextLink>
      }
    />
  ))
  .add('long title, title wrapper', () => (
    <CardWithDefaults title={<Card.Title>{longTitle}</Card.Title>} />
  ))
  .add('long title, text link with title wrapper', () => (
    <CardWithDefaults
      title={
        <Card.TextLink>
          <a href="http://duckduckgo.com?q=text">
            <Card.Title>{longTitle}</Card.Title>
          </a>
        </Card.TextLink>
      }
    />
  ))

storiesOf('image', module)
  .addDecorator(ConstrainSizeDecorator(Card.sizes.medium))
  .add('image only', () => (
    <CardWithDefaults
      image={<Card.Image src={getImgSrc({ w: 400, h: 200 })} />}
    />
  ))
  .add('image link', () => (
    <CardWithDefaults
      image={
        <Card.ImageLink>
          <a href="http://duckduckgo.com">
            <Card.Image src={getImgSrc({ w: 400, h: 200 })} />
          </a>
        </Card.ImageLink>
      }
    />
  ))

storiesOf('actionBar', module)
  .addDecorator(ConstrainSizeDecorator(Card.sizes.medium))
  .add('single action', () => (
    <CardWithDefaults
      actionBar={[
        <Card.Action
          key="bookmark"
          icon={<Icon.BookmarkIcon />}
          title="Bookmark"
        />
      ]}
    />
  ))
  .add('multiple actions', () => (
    <CardWithDefaults
      actionBar={[
        <Card.Action
          key="bookmark"
          icon={<Icon.BookmarkIcon />}
          title="Bookmark"
        />,
        <Card.Action key="paths" icon={<Icon.MoreIcon />} title="More" />
      ]}
    />
  ))
  .add('locked visible', () => (
    <CardWithDefaults
      actionBar={[
        <Card.Action
          key="bookmark"
          icon={<Icon.BookmarkIcon />}
          title="Bookmark"
        />
      ]}
      actionBarVisible
    />
  ))

storiesOf('bonusBar', module)
  .addDecorator(ConstrainSizeDecorator(Card.sizes.medium))
  .add('only text', () => <CardWithDefaults bonusBar="Wow, I'm bonus." />)
  .add('some element', () => (
    <CardWithDefaults bonusBar={<Icon.ChannelIcon size={Icon.sizes.large} />} />
  ))

storiesOf('fullOverlay', module)
  .addDecorator(ConstrainSizeDecorator(Card.sizes.medium))
  .add('text only', () => (
    <CardWithDefaults
      fullOverlay={<Card.FullOverlayLink>Element</Card.FullOverlayLink>}
    />
  ))
  .add('link', () => (
    <CardWithDefaults
      fullOverlay={
        <Card.FullOverlayLink>
          <a href="http://duckduckgo.com?q=overlay">Click me</a>
        </Card.FullOverlayLink>
      }
    />
  ))
  .add('linked icon', () => (
    <CardWithDefaults
      fullOverlay={
        <Card.FullOverlayLink>
          <a href="http://duckduckgo.com?q=overlay">
            <Icon.PlayCircleIcon
              size={Icon.sizes.large}
              style={{ color: core.colorsWhite }}
            />
          </a>
        </Card.FullOverlayLink>
      }
    />
  ))
  .add('linked icon with image link', () => (
    <CardWithDefaults
      fullOverlay={
        <Card.FullOverlayLink>
          <a href="http://duckduckgo.com?q=overlay">
            <Icon.PlayCircleIcon
              size={Icon.sizes.large}
              style={{ color: core.colorsWhite }}
            />
          </a>
        </Card.FullOverlayLink>
      }
      image={
        <Card.ImageLink>
          <a href="http://duckduckgo.com?q=image">
            <Card.Image src={getImgSrc()} />
          </a>
        </Card.ImageLink>
      }
    />
  ))
  .add('locked visible', () => (
    <CardWithDefaults
      fullOverlay={<Card.FullOverlayLink>Element</Card.FullOverlayLink>}
      fullOverlayVisible
    />
  ))

const sizeStory = storiesOf('size', module)
Object.values(Card.sizes).forEach(size =>
  sizeStory.add(size, () =>
    ConstrainSizeDecorator(size)(() => (
      <CardWithDefaults
        size={size}
        title={<Card.Title>{`${size} Card`}</Card.Title>}
      />
    ))
  )
)

storiesOf('metadata', module)
  .addDecorator(ConstrainSizeDecorator(Card.sizes.medium))
  .add('single text', () => <CardWithDefaults metadata1={['Jim Cooper']} />)
  .add('multiple text', () => (
    <CardWithDefaults metadata1={['Jim Cooper', 'Of the Far North']} />
  ))
  .add('text wrapper', () => (
    <CardWithDefaults metadata1={[<Card.Text>Jim Cooper</Card.Text>]} />
  ))
  .add('text link', () => (
    <CardWithDefaults
      metadata1={[
        <Card.TextLink>
          <a href="http://duckduckgo.com?q=jim%20cooper">Jim Cooper</a>
        </Card.TextLink>
      ]}
    />
  ))
  .add('two lines, mixed content', () => (
    <CardWithDefaults
      metadata1={[
        <Card.TextLink>
          <a href="http://duckduckgo.com?q=jim%20cooper">Jim Cooper</a>
        </Card.TextLink>
      ]}
      metadata2={[
        <Card.TextLink>
          <a href="http://duckduckgo.com?q=react">React Path</a>
        </Card.TextLink>,
        'Intermediate',
        <Card.Text>90 mins</Card.Text>
      ]}
    />
  ))

storiesOf('progress', module)
  .addDecorator(ConstrainSizeDecorator(Card.sizes.medium))
  .add('none', () => <CardWithDefaults progress={0} />)
  .add('some', () => <CardWithDefaults progress={33.66667} />)
  .add('done', () => <CardWithDefaults progress={100} />)

storiesOf('tag', module)
  .addDecorator(ConstrainSizeDecorator(Card.sizes.medium))
  .add('text only', () => (
    <CardWithDefaults tag={<Card.Tag>Channel</Card.Tag>} />
  ))
  .add('with icon', () => (
    <CardWithDefaults
      tag={<Card.Tag icon={<Icon.ChannelIcon />}>Channel</Card.Tag>}
    />
  ))
  .add('long single word', () => (
    <CardWithDefaults
      tag={
        <Card.Tag icon={<Icon.ChannelIcon />}>
          ChannelChannelChannelChannelChannelChannelChannelChannelChannelChannelChannel
        </Card.Tag>
      }
    />
  ))
  .add('long multi-word', () => (
    <CardWithDefaults
      tag={
        <Card.Tag icon={<Icon.ChannelIcon />}>
          Channel Channel Channel Channel Channel Channel Channel Channel
          Channel
        </Card.Tag>
      }
    />
  ))

const sizesWithTagsStory = storiesOf('sizes with tags', module)
Object.values(Card.sizes).forEach(size =>
  sizesWithTagsStory.add(size, () =>
    ConstrainSizeDecorator(size)(() => (
      <CardWithDefaults
        size={size}
        title={<Card.Title>{`${size} Card with tag`}</Card.Title>}
        tag={<Card.Tag icon={<Icon.ChannelIcon />}>Channel</Card.Tag>}
      />
    ))
  )
)
