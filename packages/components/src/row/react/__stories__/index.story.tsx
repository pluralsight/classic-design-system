import { Button } from '../../../button'
import * as Icon from '../../../icon'
import { storiesOf } from '@storybook/react'
import React from 'react'

import { Row } from '../index'

const getImgSrc = ({ w = 680, h = 320, id = 42 } = {}) =>
  `//picsum.photos/${w}/${h}?image=${id}&gravity=north`

const longStringsMetaData = [
  'It is impossible to count the grand contributions of this great author',
  'Levels heretofore unknown in the battle for truth and knowledge',
  'A length of such amazing lengthitude so-as to blow the mind'
]

const PlayIcon: React.FC = () => (
  <Icon.PlayCircleIcon
    color={Icon.colors.textIconHighOnDark}
    size={Icon.sizes.large}
  />
)

storiesOf('combo', module).add('everything', () => (
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
    metadata1={longStringsMetaData.map((str, i) => (
      <Row.TextLink key={i}>
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
Object.values(Row.sizes).forEach(size =>
  sizeStory.add(size, () => (
    <Row
      size={size}
      title={`${size} Row`}
      metadata1={['Jim Cooper']}
      image={<Row.Image src={getImgSrc()} />}
    />
  ))
)

const titleStory = storiesOf('title', module)
  .add('string', () => <Row title="A String Title" />)
  .add('string truncated', () => (
    <div style={{ maxWidth: 400 }}>
      <Row
        title="We'll have a super time. You can create the world you want to see and be a part of. You have that power. These things happen automatically. All you have to do is just let them happen. Only think about one thing at a time. Don't get greedy."
        titleTruncated
      />
    </div>
  ))
  .add('link', () => (
    <Row
      title={
        <Row.TextLink>
          <a href="http://google.com">A Link Title</a>
        </Row.TextLink>
      }
    />
  ))
  .add('link truncated', () => (
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

Object.values(Row.sizes).forEach(size =>
  titleStory.add(`${size} long title`, () => (
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
  progressStory.add(`${progress} progress`, () => (
    <Row
      size="medium"
      progress={progress}
      title={`${progress} progress`}
      image={<Row.Image src={getImgSrc()} />}
    />
  ))
)
progressStory.add('no image', () => (
  <Row
    size="medium"
    progress={55}
    title="No image, with progress (not shown)"
  />
))

storiesOf('image', module)
  .add('with image', () => (
    <Row
      title="With Image"
      metadata1={['Jim Cooper']}
      image={<Row.Image src={getImgSrc()} />}
    />
  ))
  .add('with image with overlay', () => (
    <Row
      title="With Image"
      metadata1={['Jim Cooper']}
      image={<Row.Image src={getImgSrc()} />}
      fullOverlay={<Row.FullOverlayLink>Element</Row.FullOverlayLink>}
    />
  ))
  .add('link', () => (
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
  .add('wide image', () => (
    <Row
      title="Wide Image"
      image={<Row.Image src={getImgSrc({ w: 350, h: 150 })} />}
      metadata1={['Jim Cooper']}
    />
  ))
  .add('tall image', () => (
    <Row
      title="Tall Image"
      image={<Row.Image src={getImgSrc({ w: 200, h: 400 })} />}
      metadata1={['Jim Cooper']}
    />
  ))
  .add('small image', () => (
    <Row
      title="Small Image"
      image={<Row.Image src={getImgSrc({ w: 30, h: 30 })} />}
      metadata1={['Jim Cooper']}
    />
  ))
  .add('no image', () => (
    <Row
      title="No Image"
      metadata1={['Jim Cooper']}
      fullOverlay={<Row.FullOverlayLink>Element</Row.FullOverlayLink>}
    />
  ))
  .add('no image with overlay', () => (
    <Row
      title="No Image, With Overlay (Not Shown)"
      metadata1={['Jim Cooper']}
      fullOverlay={<Row.FullOverlayLink>Element</Row.FullOverlayLink>}
    />
  ))

storiesOf('metadata', module)
  .add('string', () => (
    <Row title="Meta with Strings" metadata1={['Jake Trent']} />
  ))
  .add('link', () => (
    <Row
      title="Meta With Links"
      metadata1={[
        <Row.TextLink key="link">
          <a href="http://google.com/?query=jaketrent">Jake Trent</a>
        </Row.TextLink>
      ]}
    />
  ))
  .add('long strings', () => (
    <Row
      title="The Longest Strings in El Mundo"
      metadata1={longStringsMetaData}
    />
  ))
  .add('long strings with image', () => (
    <Row
      title="Long Strings AND Los Imagereo"
      image={<Row.Image src={getImgSrc()} />}
      metadata1={longStringsMetaData}
    />
  ))
  .add('super long first string', () => (
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
  .add('long links', () => (
    <Row
      title="Meta With Links"
      metadata1={longStringsMetaData.map((str, i) => (
        <Row.TextLink key={i}>
          <a href="http://google.com/?query=jaketrent">{str}</a>
        </Row.TextLink>
      ))}
    />
  ))
  .add('two lines', () => (
    <Row
      title="Meta With Links"
      metadata1={['Jake Trent', 'School of the Internet', 'Blasted Good']}
      metadata2={['Certified GMO-free']}
    />
  ))

storiesOf('actionBar', module)
  .add('one action', () => (
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
  .add('long title', () => (
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
  .add('long title with image', () => (
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
  .add('locked visible', () => (
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
  .add('element', () => (
    <Row
      title="Overlay This!"
      fullOverlay={<Row.FullOverlayLink>Element</Row.FullOverlayLink>}
      image={<Row.Image src={getImgSrc()} />}
    />
  ))
  .add('link', () => (
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
  .add('linked icon', () => (
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
  .add('linked icon with image link', () => (
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

storiesOf('in a stack', module).add('no top border on first row', () => (
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
