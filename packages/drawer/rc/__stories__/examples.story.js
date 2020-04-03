/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react'

import { storiesOf } from '@storybook/react'

import Button from '@pluralsight/ps-design-system-button'
import * as Icon from '@pluralsight/ps-design-system-icon'
import * as Text from '@pluralsight/ps-design-system-text'
import Row from '@pluralsight/ps-design-system-row'

import { Drawer } from '../index.js'

const HeadContent = ({ actions, title = 'Head Content', ...rest }) => (
  <div
    {...rest}
    style={{ display: 'flex', width: '100%', padding: '10px 0', margin: 0 }}
  >
    {title && <Text.P>{title}</Text.P>}
    {actions && <div style={{ marginLeft: 'auto' }}> {actions}</div>}
  </div>
)

const BodyContent = ({ children, title = 'Drawer Content', ...rest }) => (
  <div {...rest} style={{ padding: 20, margin: 0 }}>
    {title && <Text.P>{title}</Text.P>}

    {children}
  </div>
)

const eatEvent = evt => {
  evt.preventDefault()
  evt.stopPropagation()
}

storiesOf('Drawer | RC / examples', module)
  .addDecorator(story => <div style={{ padding: 48 }}>{story()}</div>)
  .add('accordian', () => {
    function Story() {
      const [index, setIndex] = useState(0)

      return Array(8)
        .fill()
        .map((_, key) => (
          <Drawer
            isOpen={index === key}
            key={key}
            onRequestClose={() => setIndex(null)}
            onRequestOpen={() => setIndex(key)}
          >
            <Drawer.Head>
              <HeadContent />
            </Drawer.Head>

            <Drawer.Body>
              <BodyContent />
            </Drawer.Body>
          </Drawer>
        ))
    }

    return <Story />
  })
  .add('Row component', () => (
    <Drawer>
      <Drawer.Head>
        <Row
          actionBar={[
            <Button
              appearance={Button.appearances.flat}
              icon={<Icon.MoreIcon />}
              key="iHeartCats"
              onClick={eatEvent}
              size={Button.sizes.small}
            />
          ]}
          actionBarVisible
          image={<Row.Image src="https://cataas.com/cat" />}
          metadata1={['Kitten McCatbuns', '23 hours of cuteness']}
          size={Row.sizes.medium}
          title="Look at me! I'm a <Row />!"
        />
      </Drawer.Head>

      <Drawer.Body>
        <BodyContent />
      </Drawer.Body>
    </Drawer>
  ))

  .add('stack of sibling drawers', () =>
    Array(4)
      .fill()
      .map((_, key) => (
        <Drawer>
          <Drawer.Head>
            <HeadContent title={`Drawer #${key + 1}`} />
          </Drawer.Head>
          <Drawer.Body>
            <BodyContent />
          </Drawer.Body>
        </Drawer>
      ))
  )
  .add('stack of non-sibling drawers', () =>
    Array(4)
      .fill()
      .map((_, key) => (
        <div>
          <Drawer>
            <Drawer.Head>
              <HeadContent title={`Drawer #${key + 1}`} />
            </Drawer.Head>
            <Drawer.Body>
              <BodyContent />
            </Drawer.Body>
          </Drawer>
        </div>
      ))
  )
  // TODO: Is accessibility labels something we should be responsible for
  .add('custom aria label', () => (
    <Drawer>
      <Drawer.Head aria-label="custom drawer header">
        <HeadContent />
      </Drawer.Head>
      <Drawer.Body aria-label="custom drawer body">
        <BodyContent />
      </Drawer.Body>
    </Drawer>
  ))
