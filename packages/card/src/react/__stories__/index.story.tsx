import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'

import * as core from '@pluralsight/ps-design-system-core'
import * as Icon from '@pluralsight/ps-design-system-icon'

import Card, { CardProps } from '../index'
// import { StoryFn } from '@storybook/addons'

const sizes = {
  [Card.sizes.small]: { width: '140px' },
  [Card.sizes.medium]: { width: '320px' },
  [Card.sizes.large]: { width: '540px' }
}

const ConstrainSizeDecorator = (size: keyof typeof sizes) => (
  StoryElement: Story
) => (
  <div style={sizes[size]}>
    <StoryElement />
  </div>
)

export default {
  title: 'Components/Card',
  component: Card,
  decorators: [ConstrainSizeDecorator(Card.sizes.medium)]
}

const getImgSrc = ({ w = 680, h = 320, id = 42 } = {}) =>
  `//picsum.photos/${w}/${h}?image=${id}&gravity=north`

const longStringsMetaData = [
  'It is impossible to count the grand contributions of this great author',
  'Levels heretofore unknown in the battle for truth and knowledge',
  'A length of such amazing lengthitude so-as to blow the mind'
]

const longTitle =
  'The First Course of Our Age to Teach the Minute Waltz to an Eight Horn Fugle Hummer in Less Than the Average of the First 60 Seconds'

export const CardWithDefaults = (props: Partial<CardProps>) => {
  const title = props.title || <Card.Title>Card Title</Card.Title>
  const image = props.image || (
    <Card.Image src={getImgSrc()} aria-label="default image" />
  )
  return <Card {...props} title={title} image={image} />
}

export const EverythingLocked: Story = () => (
  <Card
    title={
      <Card.TextLink>
        <a href="http://duckduckgo.com?q=title">
          <Card.Title>
            Image, Progress, Link Full Overlay, Icon, Link Title, Link Meta1, 2,
            Action Bar, and More Really. Why Not Put More In? Release a New
            Edition Every Year With All the Excesses of our VC Budget? Boundless
            Features Will Be Yours 2000
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
          <Card.Image src={getImgSrc()} aria-label="image" />
        </a>
      </Card.ImageLink>
    }
    metadata1={longStringsMetaData.map((str: string, i: number) => (
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
)

export const EverythingFocusable: Story = () => (
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
          <Card.Image src={getImgSrc()} aria-label="image" />
        </a>
      </Card.ImageLink>
    }
    metadata1={[
      <Card.TextLink key="meta">
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
)

export const TitleText: Story = () => (
  <CardWithDefaults title={<Card.Title>Text only</Card.Title>} />
)

export const TitleLink: Story = () => (
  <CardWithDefaults
    title={
      <Card.TextLink>
        <a href="http://duckduckgo.com?q=text">
          <Card.Title>Text link</Card.Title>
        </a>
      </Card.TextLink>
    }
  />
)

export const TitleLong: Story = () => (
  <CardWithDefaults title={<Card.Title>{longTitle}</Card.Title>} />
)

export const TitleLongLink: Story = () => (
  <CardWithDefaults
    title={
      <Card.TextLink>
        <a href="http://duckduckgo.com?q=text">
          <Card.Title>{longTitle}</Card.Title>
        </a>
      </Card.TextLink>
    }
  />
)

export const Image: Story = () => (
  <CardWithDefaults
    image={
      <Card.Image src={getImgSrc({ w: 400, h: 200 })} aria-label="image" />
    }
  />
)

export const ImageWithAlt: Story = () => (
  <CardWithDefaults
    image={<Card.Image src={getImgSrc({ w: 400, h: 200 })} alt="image" />}
  />
)

export const ImageLink: Story = () => (
  <CardWithDefaults
    image={
      <Card.ImageLink>
        <a href="http://duckduckgo.com">
          <Card.Image src={getImgSrc({ w: 400, h: 200 })} aria-label="image" />
        </a>
      </Card.ImageLink>
    }
  />
)

export const ActionBar: Story = () => (
  <CardWithDefaults
    actionBar={[
      <Card.Action
        key="bookmark"
        icon={<Icon.BookmarkIcon />}
        title="Bookmark"
      />
    ]}
  />
)

export const ActionBarMultiple: Story = () => (
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
)

export const ActionBarLockedVisible: Story = () => (
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
)

export const BonusBarText: Story = () => (
  <CardWithDefaults bonusBar="Wow, I'm bonus." />
)

export const BonusBarElement: Story = () => (
  <CardWithDefaults bonusBar={<Icon.ChannelIcon size={Icon.sizes.large} />} />
)

export const FullOverlay: Story = () => (
  <CardWithDefaults
    fullOverlay={<Card.FullOverlayLink>Element</Card.FullOverlayLink>}
  />
)

export const FullOverlayLink: Story = () => (
  <CardWithDefaults
    fullOverlay={
      <Card.FullOverlayLink>
        <a href="http://duckduckgo.com?q=overlay">Click me</a>
      </Card.FullOverlayLink>
    }
  />
)

export const FullOverlayLinkIcon: Story = () => (
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
)

export const FullOverlayLinkIconLink: Story = () => (
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
          <Card.Image src={getImgSrc()} aria-label="image" />
        </a>
      </Card.ImageLink>
    }
  />
)

export const FullOverlayLockedVisible: Story = () => (
  <CardWithDefaults
    fullOverlay={<Card.FullOverlayLink>Element</Card.FullOverlayLink>}
    fullOverlayVisible
  />
)

export const Sizes: Story = () => (
  <div>
    {Object.values(Card.sizes).map(size => (
      <div style={sizes[size]} key={size}>
        <CardWithDefaults
          size={size}
          title={<Card.Title>{`${size} Card`}</Card.Title>}
        />
      </div>
    ))}
  </div>
)

export const MetadataSingle: Story = () => (
  <CardWithDefaults metadata1={['Jim Cooper']} />
)

export const MetadataMultiple: Story = () => (
  <CardWithDefaults metadata1={['Jim Cooper', 'Of the Far North']} />
)

export const MetadataTextWrapper: Story = () => (
  <CardWithDefaults
    metadata1={[<Card.Text key="text">Jim Cooper</Card.Text>]}
  />
)

export const MetadataTextLink: Story = () => (
  <CardWithDefaults
    metadata1={[
      <Card.TextLink key="text">
        <a href="http://duckduckgo.com?q=jim%20cooper">Jim Cooper</a>
      </Card.TextLink>
    ]}
  />
)

export const MetadataTwoLines: Story = () => (
  <CardWithDefaults
    metadata1={[
      <Card.TextLink key="text">
        <a href="http://duckduckgo.com?q=jim%20cooper">Jim Cooper</a>
      </Card.TextLink>
    ]}
    metadata2={[
      <Card.TextLink key="text1">
        <a href="http://duckduckgo.com?q=react">React Path</a>
      </Card.TextLink>,
      'Intermediate',
      <Card.Text key="text2">90 mins</Card.Text>
    ]}
  />
)

export const Progress: Story = () => (
  <div>
    <CardWithDefaults progress={0} />
    <CardWithDefaults progress={33.6667} />
    <CardWithDefaults progress={100} />
  </div>
)

export const TagText: Story = () => (
  <CardWithDefaults tag={<Card.Tag>Channel</Card.Tag>} />
)

export const TagIcon: Story = () => (
  <CardWithDefaults
    tag={<Card.Tag icon={<Icon.ChannelIcon />}>Channel</Card.Tag>}
  />
)

export const TagLongSingleWord: Story = () => (
  <CardWithDefaults
    tag={
      <Card.Tag icon={<Icon.ChannelIcon />}>
        ChannelChannelChannelChannelChannelChannelChannelChannelChannelChannelChannel
      </Card.Tag>
    }
  />
)

export const TagLongMultiWord: Story = () => (
  <CardWithDefaults
    tag={
      <Card.Tag icon={<Icon.ChannelIcon />}>
        Channel Channel Channel Channel Channel Channel Channel Channel Channel
      </Card.Tag>
    }
  />
)

export const TagSizes: Story = () => (
  <div>
    {Object.values(Card.sizes).map(size => (
      <div style={sizes[size]} key={size}>
        <CardWithDefaults
          size={size}
          title={<Card.Title>{`${size} Card with tag`}</Card.Title>}
          tag={<Card.Tag icon={<Icon.ChannelIcon />}>Channel</Card.Tag>}
        />
      </div>
    ))}
  </div>
)
