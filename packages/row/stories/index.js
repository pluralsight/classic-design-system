import addons from '@storybook/addons'
import core from '@pluralsight/ps-design-system-core'
import Drawer from '@pluralsight/ps-design-system-drawer/react'
import Icon from '@pluralsight/ps-design-system-icon/react'
import React from 'react'
import { storiesOf } from '@storybook/react'
import themeDecorator from '@pluralsight/ps-design-system-storybook-addon-theme'

import Row from '../react'

const longStringsMetaData = [
  'It is impossible to count the grand contributions of this great author',
  'Levels heretofore unknown in the battle for truth and knowledge',
  'A length of such amazing lengthitude so-as to blow the mind'
]

const comboStory = storiesOf('combo', module)
  .addDecorator(themeDecorator(addons))
  .add('everything', _ => (
    <Row
      title={
        <Row.TextLink>
          <a href="http://google.com?query=title">
            Image, Progress, Link Full Overlay, Icon, Link Title, Link Meta1, 2,
            Action Bar, and More Really. Why Not Put More In? Release a New
            Edition Every Year With All the Excesses of our VC Budget? Boundless
            Features Will Be Yours 2000
          </a>
        </Row.TextLink>
      }
      fullOverlay={
        <Row.FullOverlayLink>
          <a href="http://google.com?query=overlay">
            <Icon
              size={Icon.sizes.large}
              css={{ '& svg': { fill: core.colors.white } }}
              id={Icon.ids.playCircle}
            />
          </a>
        </Row.FullOverlayLink>
      }
      fullOverlayVisible
      image={
        <Row.ImageLink>
          <a href="http://google.com?query=image">
            <Row.Image src="http://lorempixel.com/output/technics-q-c-680-320-6.jpg" />
          </a>
        </Row.ImageLink>
      }
      metadata1={longStringsMetaData.map(str => (
        <Row.TextLink>
          <a href="http://google.com/?query=jaketrent">{str}</a>
        </Row.TextLink>
      ))}
      metadata2={['Goodness me!']}
      actionBar={[
        <Row.Action key="bookmark" icon={<Icon id={Icon.ids.bookmark} />} />,
        <Row.Action key="gear" icon={<Icon id={Icon.ids.gear} />} />,
        <Row.Action key="more" icon={<Icon id={Icon.ids.more} />} />
      ]}
      actionBarVisible
    />
  ))

const sizeStory = storiesOf('size', module).addDecorator(themeDecorator(addons))
Object.keys(Row.sizes).forEach(size =>
  sizeStory.add(size, _ => (
    <Row
      size={size}
      title={`${size} Row`}
      metadata1={['Jim Cooper']}
      image={
        <Row.Image src="http://lorempixel.com/output/technics-q-c-680-320-6.jpg" />
      }
    />
  ))
)

const titleStory = storiesOf('title', module)
  .addDecorator(themeDecorator(addons))
  .add('string', _ => <Row title="A String Title" />)
  .add('link', _ => (
    <Row
      title={
        <Row.TextLink>
          <a href="http://google.com">A Link Title</a>
        </Row.TextLink>
      }
    />
  ))
Object.keys(Row.sizes).forEach(size =>
  titleStory.add(`${size} long title`, _ => (
    <Row
      size={size}
      title={`${size} With the Longest Title in the World Because It's Known That If You Give Room For This Kind of a Title, It Will Definitely Come to Pass 2000`}
      metadata1={['Jim Cooper']}
      image={
        <Row.Image src="http://lorempixel.com/output/technics-q-c-680-320-6.jpg" />
      }
    />
  ))
)

const progressStory = storiesOf('progress', module).addDecorator(
  themeDecorator(addons)
)
;[0, 66.6667, 100].forEach(progress =>
  progressStory.add(`${progress} progress`, _ => (
    <Row
      size="medium"
      progress={progress}
      title={`${progress} progress`}
      image={
        <Row.Image src="http://lorempixel.com/output/technics-q-c-680-320-6.jpg" />
      }
    />
  ))
)
progressStory.add(`no image`, _ => (
  <Row
    size="medium"
    progress={55}
    title="No image, with progress (not shown)"
  />
))

const imageStory = storiesOf('image', module)
  .addDecorator(themeDecorator(addons))
  .add(`with image`, _ => (
    <Row
      title="With Image"
      metadata1={['Jim Cooper']}
      image={
        <Row.Image src="http://lorempixel.com/output/technics-q-c-680-320-6.jpg" />
      }
    />
  ))
  .add(`with image with overlay`, _ => (
    <Row
      title="With Image"
      metadata1={['Jim Cooper']}
      image={
        <Row.Image src="http://lorempixel.com/output/technics-q-c-680-320-6.jpg" />
      }
      fullOverlay={<Row.FullOverlayLink>Element</Row.FullOverlayLink>}
    />
  ))
  .add(`link`, _ => (
    <Row
      title="Linked Image"
      image={
        <Row.ImageLink>
          <a href="http://google.com?query=image">
            <Row.Image src="http://lorempixel.com/output/technics-q-c-680-320-6.jpg" />
          </a>
        </Row.ImageLink>
      }
      metadata1={['Jim Cooper']}
    />
  ))
  .add(`wide image`, _ => (
    <Row
      title="Wide Image"
      image={<Row.Image src="http://via.placeholder.com/350x150" />}
      metadata1={['Jim Cooper']}
    />
  ))
  .add(`tall image`, _ => (
    <Row
      title="Tall Image"
      image={<Row.Image src="http://via.placeholder.com/200x400h" />}
      metadata1={['Jim Cooper']}
    />
  ))
  .add(`small image`, _ => (
    <Row
      title="Small Image"
      image={<Row.Image src="http://via.placeholder.com/30x30h" />}
      metadata1={['Jim Cooper']}
    />
  ))
  .add(`no image`, _ => (
    <Row
      title="No Image"
      metadata1={['Jim Cooper']}
      fullOverlay={<Row.FullOverlayLink>Element</Row.FullOverlayLink>}
    />
  ))
  .add(`no image with overlay`, _ => (
    <Row
      title="No Image, With Overlay (Not Shown)"
      metadata1={['Jim Cooper']}
      fullOverlay={<Row.FullOverlayLink>Element</Row.FullOverlayLink>}
    />
  ))

const metadataStory = storiesOf('metadata', module)
  .addDecorator(themeDecorator(addons))
  .add('string', _ => (
    <Row title="Meta with Strings" metadata1={['Jake Trent']} />
  ))
  .add('link', _ => (
    <Row
      title="Meta With Links"
      metadata1={[
        <Row.TextLink>
          <a href="http://google.com/?query=jaketrent">Jake Trent</a>
        </Row.TextLink>
      ]}
    />
  ))
  .add('long strings', _ => (
    <Row
      title="The Longest Strings in El Mundo"
      metadata1={longStringsMetaData}
    />
  ))
  .add('long strings with image', _ => (
    <Row
      title="Long Strings AND Los Imagereo"
      image={
        <Row.Image src="http://lorempixel.com/output/technics-q-c-680-320-6.jpg" />
      }
      metadata1={longStringsMetaData}
    />
  ))
  .add('super long first string', _ => (
    <Row
      title="Long Strings AND Los Imagereo"
      image={
        <Row.Image src="http://lorempixel.com/output/technics-q-c-680-320-6.jpg" />
      }
      metadata1={[
        'This string is so long, it should be illegal.This string is so long, it should be illegal.This string is so long, it should be illegal.   This string is so long, it should be illegal. ',
        'This is still visible',
        'And so is this'
      ]}
    />
  ))
  .add('long links', _ => (
    <Row
      title="Meta With Links"
      metadata1={longStringsMetaData.map(str => (
        <Row.TextLink>
          <a href="http://google.com/?query=jaketrent">{str}</a>
        </Row.TextLink>
      ))}
    />
  ))
  .add('two lines', _ => (
    <Row
      title="Meta With Links"
      metadata1={['Jake Trent', 'School of the Internet', 'Blasted Good']}
      metadata2={['Certified GMO-free']}
    />
  ))

const actionBarStory = storiesOf('actionBar', module)
  .addDecorator(themeDecorator(addons))
  .add('one action', _ => (
    <Row
      title="Ready, Action, Bar!"
      actionBar={[<Row.Action key="bookmark" icon={<Icon id="bookmark" />} />]}
    />
  ))
  .add('long title', _ => (
    <Row
      title="Amazingly, the Longest Title in the World Because It's Known That If You Give Room For This Kind of a Title, It Will Definitely Come to Pass 2000"
      actionBar={[<Row.Action key="bookmark" icon={<Icon id="bookmark" />} />]}
    />
  ))
  .add('long title with image', _ => (
    <Row
      title="Amazingly, the Longest Title in the World Because It's Known That If You Give Room For This Kind of a Title, It Will Definitely Come to Pass 2000"
      actionBar={[<Row.Action key="bookmark" icon={<Icon id="bookmark" />} />]}
      image={
        <Row.Image src="http://lorempixel.com/output/technics-q-c-680-320-6.jpg" />
      }
    />
  ))
  .add('locked visible', _ => (
    <Row
      actionBarVisible
      title="Amazingly, the Longest Title in the World Because It's Known That If You Give Room For This Kind of a Title, It Will Definitely Come to Pass 2000"
      actionBar={[<Row.Action key="bookmark" icon={<Icon id="bookmark" />} />]}
      image={
        <Row.Image src="http://lorempixel.com/output/technics-q-c-680-320-6.jpg" />
      }
    />
  ))

const fullOverlayStory = storiesOf('fullOverlay', module)
  .addDecorator(themeDecorator(addons))
  .add('element', _ => (
    <Row
      title="Overlay This!"
      fullOverlay={<Row.FullOverlayLink>Element</Row.FullOverlayLink>}
      image={
        <Row.Image src="http://lorempixel.com/output/technics-q-c-680-320-6.jpg" />
      }
    />
  ))
  .add('link', _ => (
    <Row
      title="Overlay This!"
      fullOverlay={
        <Row.FullOverlayLink>
          <a href="http://google.com?query=overlay">Click me</a>
        </Row.FullOverlayLink>
      }
      image={
        <Row.Image src="http://lorempixel.com/output/technics-q-c-680-320-6.jpg" />
      }
    />
  ))
  .add('linked icon', _ => (
    <Row
      title="Overlay This!"
      fullOverlay={
        <Row.FullOverlayLink>
          <a href="http://google.com?query=overlay">
            <Icon
              size={Icon.sizes.large}
              css={{ '& svg': { fill: core.colors.white } }}
              id={Icon.ids.playCircle}
            />
          </a>
        </Row.FullOverlayLink>
      }
      image={
        <Row.Image src="http://lorempixel.com/output/technics-q-c-680-320-6.jpg" />
      }
    />
  ))
  .add('linked icon with image link', _ => (
    <Row
      title="Both Icon and Image Have Separate Click Targets"
      fullOverlay={
        <Row.FullOverlayLink>
          <a href="http://google.com?query=overlay">
            <Icon
              size={Icon.sizes.large}
              css={{ '& svg': { fill: core.colors.white } }}
              id={Icon.ids.playCircle}
            />
          </a>
        </Row.FullOverlayLink>
      }
      image={
        <Row.ImageLink>
          <a href="http://google.com?query=image">
            <Row.Image src="http://lorempixel.com/output/technics-q-c-680-320-6.jpg" />
          </a>
        </Row.ImageLink>
      }
    />
  ))

const drawerStory = storiesOf('in drawer', module).addDecorator(
  themeDecorator(addons)
)

Object.keys(Row.sizes).forEach(size =>
  drawerStory.add(size, _ => (
    <Drawer
      base={
        <Row
          title="Course thing you do"
          metadata1={['1m 46s']}
          image={
            <Row.Image src="http://lorempixel.com/output/technics-q-c-680-320-6.jpg" />
          }
          actionBar={[
            <Row.Action icon={<Icon id={Icon.ids.more} />} key="more" />
          ]}
          actionBarVisible
          size={size}
        />
      }
    >
      <div>some goodies in the drawer</div>
    </Drawer>
  ))
)
