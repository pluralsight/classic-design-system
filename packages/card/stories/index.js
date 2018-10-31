import addons from '@storybook/addons'
import Button from '@pluralsight/ps-design-system-button/react'
import Icon from '@pluralsight/ps-design-system-icon/react'
import React from 'react'
import themeDecorator from '@pluralsight/ps-design-system-storybook-addon-theme'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import core from '@pluralsight/ps-design-system-core'

import Card from '../react'

const longStringsMetaData = [
  'It is impossible to count the grand contributions of this great author',
  'Levels heretofore unknown in the battle for truth and knowledge',
  'A length of such amazing lengthitude so-as to blow the mind'
]
const longTitle =
  'The First Course of Our Age to Teach the Minute Waltz to an Eight Horn Fugle Hummer in Less Than the Average of the First 60 Seconds'

const CardWithDefaults = props => (
  <Card
    {...{
      title: <Card.Title>Card Title</Card.Title>,
      image: (
        <Card.Image src="http://lorempixel.com/output/technics-q-c-680-320-6.jpg" />
      )
    }}
    {...props}
  />
)

const sizes = {
  [Card.sizes.small]: { width: '140px' },
  [Card.sizes.medium]: { width: '320px' },
  [Card.sizes.large]: { width: '540px' }
}
const ConstrainSizeDecorator = size => storyFn => (
  <div style={sizes[size]}>{storyFn()}</div>
)

storiesOf('combo', module)
  .addDecorator(ConstrainSizeDecorator(Card.sizes.medium))
  .addDecorator(themeDecorator(addons))
  .add('everything locked', _ => (
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
            <Icon
              size={Icon.sizes.large}
              css={{ '& svg': { fill: core.colors.white } }}
              id={Icon.ids.playCircle}
            />
          </a>
        </Card.FullOverlayLink>
      }
      fullOverlayVisible
      image={
        <Card.ImageLink>
          <a href="http://duckduckgo.com?q=image">
            <Card.Image src="http://lorempixel.com/output/technics-q-c-680-320-6.jpg" />
          </a>
        </Card.ImageLink>
      }
      metadata1={longStringsMetaData.map(str => (
        <Card.TextLink>
          <a href="http://duckduckgo.com/?q=jaketrent">{str}</a>
        </Card.TextLink>
      ))}
      metadata2={['Goodness me!']}
      actionBar={[
        <Card.Action
          key="bookmark"
          icon={<Icon id={Icon.ids.bookmark} />}
          title="Bookmark"
        />,
        <Card.Action
          key="gear"
          icon={<Icon id={Icon.ids.gear} />}
          title="Settings"
        />,
        <Card.Action
          key="more"
          icon={<Icon id={Icon.ids.more} />}
          title="More"
        />
      ]}
      actionBarVisible
      tag={<Card.Tag icon={<Icon id={Icon.ids.path} />}>Path</Card.Tag>}
    />
  ))
  .add('everything focusable', _ => (
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
            <Icon
              size={Icon.sizes.large}
              css={{ '& svg': { fill: core.colors.white } }}
              id={Icon.ids.playCircle}
            />
          </a>
        </Card.FullOverlayLink>
      }
      image={
        <Card.ImageLink>
          <a href="http://duckduckgo.com?q=image">
            <Card.Image src="http://lorempixel.com/output/technics-q-c-680-320-6.jpg" />
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
          icon={<Icon id={Icon.ids.bookmark} />}
          title="Bookmark"
        />,
        <Card.Action
          key="gear"
          icon={<Icon id={Icon.ids.gear} />}
          title="Settings"
        />,
        <Card.Action
          key="more"
          icon={<Icon id={Icon.ids.more} />}
          title="More"
        />
      ]}
      tag={<Card.Tag icon={<Icon id={Icon.ids.path} />}>Path</Card.Tag>}
    />
  ))

storiesOf('title', module)
  .addDecorator(ConstrainSizeDecorator(Card.sizes.medium))
  .addDecorator(themeDecorator(addons))
  .add('title wrapper', _ => (
    <CardWithDefaults title={<Card.Title>Text only</Card.Title>} />
  ))
  .add('text link with title wrapper', _ => (
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
  .add('long title, title wrapper', _ => (
    <CardWithDefaults title={<Card.Title>{longTitle}</Card.Title>} />
  ))
  .add('long title, text link with title wrapper', _ => (
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
  .addDecorator(themeDecorator(addons))
  .add('image only', _ => (
    <CardWithDefaults
      image={<Card.Image src="http://lorempixel.com/400/200/sports/" />}
    />
  ))
  .add('image link', _ => (
    <CardWithDefaults
      image={
        <Card.ImageLink>
          <a href="http://duckduckgo.com">
            <Card.Image src="http://lorempixel.com/400/200/sports/" />
          </a>
        </Card.ImageLink>
      }
    />
  ))

storiesOf('actionBar', module)
  .addDecorator(ConstrainSizeDecorator(Card.sizes.medium))
  .addDecorator(themeDecorator(addons))
  .add('single action', _ => (
    <CardWithDefaults
      actionBar={[
        <Card.Action
          key="bookmark"
          icon={<Icon id="bookmark" />}
          title="Bookmark"
        />
      ]}
    />
  ))
  .add('multiple actions', _ => (
    <CardWithDefaults
      actionBar={[
        <Card.Action
          key="bookmark"
          icon={<Icon id={Icon.ids.bookmark} />}
          title="Bookmark"
        />,
        <Card.Action
          key="paths"
          icon={<Icon id={Icon.ids.more} />}
          title="More"
        />
      ]}
    />
  ))
  .add('locked visible', _ => (
    <CardWithDefaults
      actionBar={[
        <Card.Action
          key="bookmark"
          icon={<Icon id="bookmark" />}
          title="Bookmark"
        />
      ]}
      actionBarVisible
    />
  ))

storiesOf('bonusBar', module)
  .addDecorator(ConstrainSizeDecorator(Card.sizes.medium))
  .addDecorator(themeDecorator(addons))
  .add('only text', _ => <CardWithDefaults bonusBar="Wow, I'm bonus." />)
  .add('some element', _ => (
    <CardWithDefaults
      bonusBar={<Icon id={Icon.ids.channel} size={Icon.sizes.large} />}
    />
  ))

storiesOf('fullOverlay', module)
  .addDecorator(ConstrainSizeDecorator(Card.sizes.medium))
  .addDecorator(themeDecorator(addons))
  .add('text only', _ => (
    <CardWithDefaults
      fullOverlay={<Card.FullOverlayLink>Element</Card.FullOverlayLink>}
    />
  ))
  .add('link', _ => (
    <CardWithDefaults
      fullOverlay={
        <Card.FullOverlayLink>
          <a href="http://duckduckgo.com?q=overlay">Click me</a>
        </Card.FullOverlayLink>
      }
    />
  ))
  .add('linked icon', _ => (
    <CardWithDefaults
      fullOverlay={
        <Card.FullOverlayLink>
          <a href="http://duckduckgo.com?q=overlay">
            <Icon
              size={Icon.sizes.large}
              css={{ '& svg': { fill: core.colors.white } }}
              id={Icon.ids.playCircle}
            />
          </a>
        </Card.FullOverlayLink>
      }
    />
  ))
  .add('linked icon with image link', _ => (
    <CardWithDefaults
      fullOverlay={
        <Card.FullOverlayLink>
          <a href="http://duckduckgo.com?q=overlay">
            <Icon
              size={Icon.sizes.large}
              css={{ '& svg': { fill: core.colors.white } }}
              id={Icon.ids.playCircle}
            />
          </a>
        </Card.FullOverlayLink>
      }
      image={
        <Card.ImageLink>
          <a href="http://duckduckgo.com?q=image">
            <Card.Image src="http://lorempixel.com/output/technics-q-c-680-320-6.jpg" />
          </a>
        </Card.ImageLink>
      }
    />
  ))
  .add('locked visible', _ => (
    <CardWithDefaults
      fullOverlay={<Card.FullOverlayLink>Element</Card.FullOverlayLink>}
      fullOverlayVisible
    />
  ))

const sizeStory = storiesOf('size', module).addDecorator(themeDecorator(addons))
Object.keys(Card.sizes).forEach(size =>
  sizeStory.add(size, _ =>
    ConstrainSizeDecorator(size)(_ => (
      <CardWithDefaults
        size={size}
        title={<Card.Title>{`${size} Card`}</Card.Title>}
      />
    ))
  )
)

storiesOf('metadata', module)
  .addDecorator(ConstrainSizeDecorator(Card.sizes.medium))
  .addDecorator(themeDecorator(addons))
  .add('single text', _ => <CardWithDefaults metadata1={['Jim Cooper']} />)
  .add('multiple text', _ => (
    <CardWithDefaults metadata1={['Jim Cooper', 'Of the Far North']} />
  ))
  .add('text wrapper', _ => (
    <CardWithDefaults metadata1={[<Card.Text>Jim Cooper</Card.Text>]} />
  ))
  .add('text link', _ => (
    <CardWithDefaults
      metadata1={[
        <Card.TextLink>
          <a href="http://duckduckgo.com?q=jim%20cooper">Jim Cooper</a>
        </Card.TextLink>
      ]}
    />
  ))
  .add('two lines, mixed content', _ => (
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
  .addDecorator(themeDecorator(addons))
  .add('none', _ => <CardWithDefaults progress={0} />)
  .add('some', _ => <CardWithDefaults progress={33.66667} />)
  .add('done', _ => <CardWithDefaults progress={100} />)

storiesOf('tag', module)
  .addDecorator(ConstrainSizeDecorator(Card.sizes.medium))
  .addDecorator(themeDecorator(addons))
  .add('text only', _ => (
    <CardWithDefaults tag={<Card.Tag>Channel</Card.Tag>} />
  ))
  .add('with icon', _ => (
    <CardWithDefaults
      tag={<Card.Tag icon={<Icon id={Icon.ids.channel} />}>Channel</Card.Tag>}
    />
  ))
  .add('long single word', _ => (
    <CardWithDefaults
      tag={
        <Card.Tag icon={<Icon id={Icon.ids.channel} />}>
          ChannelChannelChannelChannelChannelChannelChannelChannelChannelChannelChannel
        </Card.Tag>
      }
    />
  ))
  .add('long multi-word', _ => (
    <CardWithDefaults
      tag={
        <Card.Tag icon={<Icon id={Icon.ids.channel} />}>
          Channel Channel Channel Channel Channel Channel Channel Channel
          Channel
        </Card.Tag>
      }
    />
  ))
