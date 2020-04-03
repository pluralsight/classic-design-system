/* eslint-disable react/prop-types */
import React, { useState } from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Button from '@pluralsight/ps-design-system-button'
import * as Text from '@pluralsight/ps-design-system-text'

import { Drawer } from '../index.js'
import { combineFns } from '../utils.js'

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

storiesOf('Drawer | RC / uncontrolled', module)
  .addDecorator(story => <div style={{ padding: 48 }}>{story()}</div>)
  .add('default', () => (
    <Drawer>
      <Drawer.Head>
        <HeadContent />
      </Drawer.Head>

      <Drawer.Body>
        <BodyContent />
      </Drawer.Body>
    </Drawer>
  ))
  .add('prop: onChange', () => (
    <Drawer onChange={action('on change')}>
      <Drawer.Head>
        <HeadContent />
      </Drawer.Head>

      <Drawer.Body>
        <BodyContent />
      </Drawer.Body>
    </Drawer>
  ))
  .add('as render prop', () => (
    <Drawer>
      {({ isOpen, toggle }) => (
        <>
          <Drawer.Head>
            <HeadContent
              onClick={eatEvent}
              actions={
                <Button onClick={combineFns(toggle, eatEvent)}>
                  {isOpen ? 'close' : 'open'}
                </Button>
              }
              title="Click should not toggle"
            />
          </Drawer.Head>

          <Drawer.Body>
            <BodyContent />
          </Drawer.Body>
        </>
      )}
    </Drawer>
  ))

storiesOf('Drawer | RC / controlled', module)
  .addDecorator(story => <div style={{ padding: 48 }}>{story()}</div>)
  .add('prop: isOpen', () => {
    function Story() {
      const [isOpen, setIsOpen] = useState(true)

      return (
        <Drawer isOpen={isOpen}>
          <Drawer.Head>
            <HeadContent
              actions={
                <div>
                  <Button
                    disabled={isOpen}
                    onClick={combineFns(() => {
                      setIsOpen(true)
                    }, eatEvent)}
                  >
                    open
                  </Button>

                  <Button
                    disabled={!isOpen}
                    onClick={combineFns(() => {
                      setIsOpen(false)
                    }, eatEvent)}
                  >
                    close
                  </Button>
                </div>
              }
              title="Click should not toggle"
            />
          </Drawer.Head>

          <Drawer.Body>
            <BodyContent />
          </Drawer.Body>
        </Drawer>
      )
    }

    return <Story />
  })
  .add('prop: onRequest(Open/Close/)', () => {
    function Story() {
      const [isOpen, setIsOpen] = useState(true)

      return (
        <Drawer
          isOpen={isOpen}
          onRequestOpen={() => setIsOpen(true)}
          onRequestClose={() => setIsOpen(false)}
        >
          {({ isOpen, close, open }) => (
            <>
              <Drawer.Head onClick={eatEvent}>
                <HeadContent
                  actions={
                    <div>
                      <Button
                        disabled={isOpen}
                        onClick={combineFns(open, eatEvent)}
                      >
                        open
                      </Button>

                      <Button
                        disabled={!isOpen}
                        onClick={combineFns(close, eatEvent)}
                      >
                        close
                      </Button>
                    </div>
                  }
                />
              </Drawer.Head>

              <Drawer.Body>
                <BodyContent />
              </Drawer.Body>
            </>
          )}
        </Drawer>
      )
    }

    return <Story />
  })

storiesOf('Drawer | RC / advanced', module)
  .addDecorator(story => <div style={{ padding: 48 }}>{story()}</div>)
  .add('default', () => {
    function Story() {
      const initialState = { isOpen: true }
      const stateReducer = (prevState, action, pendingChanges) => {
        if (action.type === Drawer.types.close && !confirm('allow to close'))
          return prevState

        if (action.type === Drawer.types.open && !confirm('allow to open'))
          return prevState

        return pendingChanges
      }

      return (
        <Drawer initialState={initialState} stateReducer={stateReducer}>
          {({ isOpen, close, open }) => (
            <>
              <Drawer.Head onClick={eatEvent}>
                <HeadContent
                  actions={
                    <div>
                      <Button
                        disabled={isOpen}
                        onClick={combineFns(open, eatEvent)}
                      >
                        open
                      </Button>

                      <Button
                        disabled={!isOpen}
                        onClick={combineFns(close, eatEvent)}
                      >
                        close
                      </Button>
                    </div>
                  }
                />
              </Drawer.Head>

              <Drawer.Body>
                <BodyContent />
              </Drawer.Body>
            </>
          )}
        </Drawer>
      )
    }

    return <Story />
  })
