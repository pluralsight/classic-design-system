import Button from '@pluralsight/ps-design-system-button'
import * as Icon from '@pluralsight/ps-design-system-icon'
import { Meta, Story } from '@storybook/react/types-6-0'
import React from 'react'

import Row from '../../index'

export default {
  title: 'Components/Row',
  component: Row
} as Meta

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

export const Combo: Story = () => (
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
)

export const Sizes: Story = () => (
  <StoryGrid cols={1} style={{ maxWidth: '50vw' }}>
    {Object.values(Row.sizes).map(size => [
      <Row
        key={'short' + size}
        size={size}
        title={`${size} Row`}
        metadata1={['Jim Cooper']}
        image={<Row.Image src={getImgSrc()} />}
      />,
      <Row
        key={'long' + size}
        size={size}
        title={`${size} With the Longest Title in the World Because It's Known That If You Give Room For This Kind of a Title, It Will Definitely Come to Pass 2000`}
        metadata1={['Jim Cooper']}
        image={<Row.Image src={getImgSrc()} />}
      />
    ])}
  </StoryGrid>
)

export const Titles: Story = () => (
  <StoryGrid cols={1}>
    <Row title="A String Title" />
    <div style={{ maxWidth: 400 }}>
      <Row
        title="String trucated - We'll have a super time. You can create the world you want to see and be a part of. You have that power. These things happen automatically. All you have to do is just let them happen. Only think about one thing at a time. Don't get greedy."
        titleTruncated
      />
    </div>
    <Row
      title={
        <Row.TextLink>
          <a href="http://google.com">A Link Title</a>
        </Row.TextLink>
      }
    />
    <div style={{ maxWidth: 400 }}>
      <Row
        title={
          <Row.TextLink>
            <a href="http://google.com">
              Link truncated - We'll have a super time. You can create the world
              you want to see and be a part of. You have that power. These
              things happen automatically. All you have to do is just let them
              happen. Only think about one thing at a time. Don't get greedy.
            </a>
          </Row.TextLink>
        }
        titleTruncated
      />
    </div>
  </StoryGrid>
)

export const Progress: Story = () => (
  <StoryGrid cols={1}>
    {[0, 66.6667, 100].map(progress => (
      <Row
        key={progress}
        size="medium"
        progress={progress}
        title={`${progress} progress`}
        image={<Row.Image src={getImgSrc()} />}
      />
    ))}
    <Row
      size="medium"
      progress={55}
      title="No image, with progress (not shown)"
    />
  </StoryGrid>
)

export const Images: Story = () => (
  <StoryGrid cols={1}>
    <Row
      title="With Image"
      metadata1={['Jim Cooper']}
      image={<Row.Image src={getImgSrc()} />}
    />
    <Row
      title="With Image And Overlay"
      metadata1={['Jim Cooper']}
      image={<Row.Image src={getImgSrc()} />}
      fullOverlay={<Row.FullOverlayLink>Element</Row.FullOverlayLink>}
    />
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
    <Row
      title="Wide Image"
      image={<Row.Image src={getImgSrc({ w: 350, h: 150 })} />}
      metadata1={['Jim Cooper']}
    />
    <Row
      title="Tall Image"
      image={<Row.Image src={getImgSrc({ w: 200, h: 400 })} />}
      metadata1={['Jim Cooper']}
    />
    <Row
      title="Small Image"
      image={<Row.Image src={getImgSrc({ w: 30, h: 30 })} />}
      metadata1={['Jim Cooper']}
    />
    <Row
      title="No Image"
      metadata1={['Jim Cooper']}
      fullOverlay={<Row.FullOverlayLink>Element</Row.FullOverlayLink>}
    />
    <Row
      title="No Image, With Overlay (Not Shown)"
      metadata1={['Jim Cooper']}
      fullOverlay={<Row.FullOverlayLink>Element</Row.FullOverlayLink>}
    />
  </StoryGrid>
)

export const Metadata: Story = () => (
  <StoryGrid cols={1}>
    <Row title="Meta with Strings" metadata1={['Jake Trent']} />
    <Row
      title="Meta With Links"
      metadata1={[
        <Row.TextLink key="link">
          <a href="http://google.com/?query=jaketrent">Jake Trent</a>
        </Row.TextLink>
      ]}
    />
    <Row
      title="The Longest Strings in El Mundo"
      metadata1={longStringsMetaData}
    />
    <Row
      title="Long Strings AND Los Imagereo"
      image={<Row.Image src={getImgSrc()} />}
      metadata1={longStringsMetaData}
    />
    <Row
      title="Long Strings AND Los Imagereo"
      image={<Row.Image src={getImgSrc()} />}
      metadata1={[
        'This string is so long, it should be illegal.This string is so long, it should be illegal.This string is so long, it should be illegal.   This string is so long, it should be illegal. ',
        'This is still visible',
        'And so is this'
      ]}
    />
    <Row
      title="Meta With Links"
      metadata1={longStringsMetaData.map((str, i) => (
        <Row.TextLink key={i}>
          <a href="http://google.com/?query=jaketrent">{str}</a>
        </Row.TextLink>
      ))}
    />
    <Row
      title="2 Lines"
      metadata1={['Jake Trent', 'School of the Internet', 'Blasted Good']}
      metadata2={['Certified GMO-free']}
    />
  </StoryGrid>
)

export const ActionBar: Story = () => (
  <StoryGrid cols={1} style={{ maxWidth: '50vw' }}>
    <Row
      title="One Action"
      actionBar={[
        <Button
          size={Button.sizes.small}
          appearance={Button.appearances.flat}
          key="bookmark"
          icon={<Icon.BookmarkIcon />}
        />
      ]}
    />
    <Row
      title="Long Title - Amazingly, the Longest Title in the World Because It's Known That If You Give Room For This Kind of a Title, It Will Definitely Come to Pass 2000"
      actionBar={[
        <Button
          size={Button.sizes.small}
          appearance={Button.appearances.flat}
          key="bookmark"
          icon={<Icon.BookmarkIcon />}
        />
      ]}
    />
    <Row
      title="Long Title with Image - Amazingly, the Longest Title in the World Because It's Known That If You Give Room For This Kind of a Title, It Will Definitely Come to Pass 2000"
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
    <Row
      actionBarVisible
      title="Locked Visible"
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
  </StoryGrid>
)

export const FullOverlay: Story = () => (
  <StoryGrid cols={1} style={{ maxWidth: '50vw' }}>
    <Row
      title="Element"
      fullOverlay={<Row.FullOverlayLink>Element</Row.FullOverlayLink>}
      image={<Row.Image src={getImgSrc()} />}
    />
    <Row
      title="Link"
      fullOverlay={
        <Row.FullOverlayLink>
          <a href="http://google.com?query=overlay">Click me</a>
        </Row.FullOverlayLink>
      }
      image={<Row.Image src={getImgSrc()} />}
    />
    <Row
      title="Icon Link"
      fullOverlay={
        <Row.FullOverlayLink>
          <a href="http://google.com?query=overlay">
            <PlayIcon />
          </a>
        </Row.FullOverlayLink>
      }
      image={<Row.Image src={getImgSrc()} />}
    />
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
  </StoryGrid>
)

export const StackOfRows: Story = () => (
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
)

interface StoryGridProps extends React.HTMLAttributes<HTMLDivElement> {
  cols?: number
}
const StoryGrid: React.FC<StoryGridProps> = props => {
  const { cols = 2, style, ...rest } = props

  return (
    <div
      style={{
        display: 'grid',
        gap: '20px',
        gridTemplateColumns: Array(cols).fill('1fr').join(' '),
        justifyItems: 'left',
        ...style
      }}
      {...rest}
    />
  )
}
