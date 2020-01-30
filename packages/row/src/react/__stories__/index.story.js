import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import React from 'react'

import Button from '@pluralsight/ps-design-system-button'
import Drawer from '@pluralsight/ps-design-system-drawer'
import * as Icon from '@pluralsight/ps-design-system-icon'

import Row from '../index.js'

const getImgSrc = ({ w = 680, h = 320, id = 42 } = {}) =>
  `//picsum.photos/${w}/${h}?image=${id}&gravity=north`

const longStringsMetaData = [
  'It is impossible to count the grand contributions of this great author',
  'Levels heretofore unknown in the battle for truth and knowledge',
  'A length of such amazing lengthitude so-as to blow the mind'
]

const PlayIcon = () => (
  <Icon.PlayCircleIcon color={Icon.colors.white} size={Icon.sizes.large} />
)

storiesOf('combo', module).add('everything', _ => (
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
          <PlayIcon />
        </a>
      </Row.FullOverlayLink>
    }
    fullOverlayVisible
    image={
      <Row.ImageLink>
        <a href="http://google.com?query=image">
          <Row.Image src={getImgSrc()} />
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
      <Button
        size={Button.sizes.small}
        appearance={Button.appearances.flat}
        key="bookmark"
        icon={<Icon.BookmarkIcon />}
      />,
      <Button
        size={Button.sizes.small}
        appearance={Button.appearances.flat}
        key="gear"
        icon={<Icon.GearIcon />}
      />,
      <Button
        size={Button.sizes.small}
        appearance={Button.appearances.flat}
        key="more"
        icon={<Icon.MoreIcon />}
      />
    ]}
    actionBarVisible
  />
))

const sizeStory = storiesOf('size', module)
Object.keys(Row.sizes).forEach(size =>
  sizeStory.add(size, _ => (
    <Row
      size={size}
      title={`${size} Row`}
      metadata1={['Jim Cooper']}
      image={<Row.Image src={getImgSrc()} />}
    />
  ))
)

const titleStory = storiesOf('title', module)
  .add('string', _ => <Row title="A String Title" />)
  .add('string truncated', _ => (
    <div style={{ maxWidth: 400 }}>
      <Row
        title="We'll have a super time. You can create the world you want to see and be a part of. You have that power. These things happen automatically. All you have to do is just let them happen. Only think about one thing at a time. Don't get greedy."
        titleTruncated
      />
    </div>
  ))
  .add('link', _ => (
    <Row
      title={
        <Row.TextLink>
          <a href="http://google.com">A Link Title</a>
        </Row.TextLink>
      }
    />
  ))
  .add('link truncated', _ => (
    <div style={{ maxWidth: 400 }}>
      <Row
        title={
          <Row.TextLink>
            <a href="http://google.com">
              We'll have a super time. You can create the world you want to see
              and be a part of. You have that power. These things happen
              automatically. All you have to do is just let them happen. Only
              think about one thing at a time. Don't get greedy.
            </a>
          </Row.TextLink>
        }
        titleTruncated
      />
    </div>
  ))

Object.keys(Row.sizes).forEach(size =>
  titleStory.add(`${size} long title`, _ => (
    <Row
      size={size}
      title={`${size} With the Longest Title in the World Because It's Known That If You Give Room For This Kind of a Title, It Will Definitely Come to Pass 2000`}
      metadata1={['Jim Cooper']}
      image={<Row.Image src={getImgSrc()} />}
    />
  ))
)

const progressStory = storiesOf('progress', module)
;[0, 66.6667, 100].forEach(progress =>
  progressStory.add(`${progress} progress`, _ => (
    <Row
      size="medium"
      progress={progress}
      title={`${progress} progress`}
      image={<Row.Image src={getImgSrc()} />}
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

storiesOf('image', module)
  .add(`with image`, _ => (
    <Row
      title="With Image"
      metadata1={['Jim Cooper']}
      image={<Row.Image src={getImgSrc()} />}
    />
  ))
  .add(`with image with overlay`, _ => (
    <Row
      title="With Image"
      metadata1={['Jim Cooper']}
      image={<Row.Image src={getImgSrc()} />}
      fullOverlay={<Row.FullOverlayLink>Element</Row.FullOverlayLink>}
    />
  ))
  .add(`link`, _ => (
    <Row
      title="Linked Image"
      image={
        <Row.ImageLink>
          <a href="http://google.com?query=image">
            <Row.Image src={getImgSrc()} />
          </a>
        </Row.ImageLink>
      }
      metadata1={['Jim Cooper']}
    />
  ))
  .add(`wide image`, _ => (
    <Row
      title="Wide Image"
      image={<Row.Image src={getImgSrc({ w: 350, h: 150 })} />}
      metadata1={['Jim Cooper']}
    />
  ))
  .add(`tall image`, _ => (
    <Row
      title="Tall Image"
      image={<Row.Image src={getImgSrc({ w: 200, h: 400 })} />}
      metadata1={['Jim Cooper']}
    />
  ))
  .add(`small image`, _ => (
    <Row
      title="Small Image"
      image={<Row.Image src={getImgSrc({ w: 30, h: 30 })} />}
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

storiesOf('metadata', module)
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
      image={<Row.Image src={getImgSrc()} />}
      metadata1={longStringsMetaData}
    />
  ))
  .add('super long first string', _ => (
    <Row
      title="Long Strings AND Los Imagereo"
      image={<Row.Image src={getImgSrc()} />}
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

storiesOf('actionBar', module)
  .add('one action', _ => (
    <Row
      title="Ready, Action, Bar!"
      actionBar={[
        <Button
          size={Button.sizes.small}
          appearance={Button.appearances.flat}
          key="bookmark"
          icon={<Icon.BookmarkIcon />}
        />
      ]}
    />
  ))
  .add('long title', _ => (
    <Row
      title="Amazingly, the Longest Title in the World Because It's Known That If You Give Room For This Kind of a Title, It Will Definitely Come to Pass 2000"
      actionBar={[
        <Button
          size={Button.sizes.small}
          appearance={Button.appearances.flat}
          key="bookmark"
          icon={<Icon.BookmarkIcon />}
        />
      ]}
    />
  ))
  .add('long title with image', _ => (
    <Row
      title="Amazingly, the Longest Title in the World Because It's Known That If You Give Room For This Kind of a Title, It Will Definitely Come to Pass 2000"
      actionBar={[
        <Button
          size={Button.sizes.small}
          appearance={Button.appearances.flat}
          key="bookmark"
          icon={<Icon.BookmarkIcon />}
        />
      ]}
      image={<Row.Image src={getImgSrc()} />}
    />
  ))
  .add('locked visible', _ => (
    <Row
      actionBarVisible
      title="Amazingly, the Longest Title in the World Because It's Known That If You Give Room For This Kind of a Title, It Will Definitely Come to Pass 2000"
      actionBar={[
        <Button
          size={Button.sizes.small}
          appearance={Button.appearances.flat}
          key="bookmark"
          icon={<Icon.BookmarkIcon />}
        />
      ]}
      image={<Row.Image src={getImgSrc()} />}
    />
  ))

storiesOf('fullOverlay', module)
  .add('element', _ => (
    <Row
      title="Overlay This!"
      fullOverlay={<Row.FullOverlayLink>Element</Row.FullOverlayLink>}
      image={<Row.Image src={getImgSrc()} />}
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
      image={<Row.Image src={getImgSrc()} />}
    />
  ))
  .add('linked icon', _ => (
    <Row
      title="Overlay This!"
      fullOverlay={
        <Row.FullOverlayLink>
          <a href="http://google.com?query=overlay">
            <PlayIcon />
          </a>
        </Row.FullOverlayLink>
      }
      image={<Row.Image src={getImgSrc()} />}
    />
  ))
  .add('linked icon with image link', _ => (
    <Row
      title="Both Icon and Image Have Separate Click Targets"
      fullOverlay={
        <Row.FullOverlayLink>
          <a href="http://google.com?query=overlay">
            <PlayIcon />
          </a>
        </Row.FullOverlayLink>
      }
      image={
        <Row.ImageLink>
          <a href="http://google.com?query=image">
            <Row.Image src={getImgSrc()} />
          </a>
        </Row.ImageLink>
      }
    />
  ))

const drawerStory = storiesOf('in drawer', module)
Object.keys(Row.sizes).forEach(size =>
  drawerStory.add(size, _ => (
    <Drawer
      base={
        <Row
          title="Course thing you do"
          metadata1={['1m 46s']}
          image={<Row.Image src={getImgSrc()} />}
          actionBar={[
            <Button
              size={Button.sizes.small}
              appearance={Button.appearances.flat}
              icon={<Icon.MoreIcon />}
              key="more"
              onClick={action('clicked action')}
            />
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

storiesOf('in a stack', module).add('no top border on first row', _ => (
  <>
    <Row
      title="Course thing you do"
      metadata1={['1m 46s']}
      image={<Row.Image src={getImgSrc()} />}
      actionBar={[
        <Button
          size={Button.sizes.small}
          appearance={Button.appearances.flat}
          icon={<Icon.MoreIcon />}
          key="more"
        />
      ]}
      actionBarVisible
    />
    <Row
      title="Course thing you do"
      metadata1={['1m 46s']}
      image={<Row.Image src={getImgSrc()} />}
      actionBar={[
        <Button
          size={Button.sizes.small}
          appearance={Button.appearances.flat}
          icon={<Icon.MoreIcon />}
          key="more"
        />
      ]}
      actionBarVisible
    />
  </>
))
