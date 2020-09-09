/* eslint-disable react/display-name */
import React, { useRef, useEffect } from 'react'

import ActionMenu from '@pluralsight/ps-design-system-actionmenu'
import Button from '@pluralsight/ps-design-system-button'
import * as core from '@pluralsight/ps-design-system-core'
import {
  MoreIcon,
  ChannelIcon,
  PathIcon,
  ReportIcon
} from '@pluralsight/ps-design-system-icon'
import { BelowLeft } from '@pluralsight/ps-design-system-position'
import * as Text from '@pluralsight/ps-design-system-text'
import Theme from '@pluralsight/ps-design-system-theme'

import {
  Chrome,
  Code,
  Content,
  Example,
  P,
  PageHeading,
  PropTypes,
  SectionHeading
} from '../../src/ui/index.js'

const InAppExample = React.forwardRef((_, forwardedRef) => {
  const categories = [
    {
      name: 'Channels',
      options: [
        { value: 'dev', label: 'Development' },
        { value: 'ops', label: 'Operations' },
        { value: 'des', label: 'Design' }
      ]
    },
    {
      name: 'Socialz',
      options: [
        { value: 't', label: 'Twitz' },
        { value: 'd', label: 'DaBook' },
        { value: 'i', label: 'Instas' }
      ]
    }
  ]
  const [isOpen, setIsOpen] = React.useState(false)
  const [selected, select] = React.useState({})

  function handleSelect(evt, value) {
    select({ value, label: evt.currentTarget.innerText })
    setIsOpen(false)
  }
  const ref = ActionMenu.useMenuRef(true)
  React.useImperativeHandle(forwardedRef, () => ref.current)
  return (
    <>
      <style jsx>{`
        .example {
          padding: ${core.layout.spacingLarge};
          background: ${core.colorsBackgroundDark[2]};
          color: ${core.colorsTextIcon.highOnDark};
          min-height: 200px;
        }
        .label {
          padding: ${core.layout.spacingLarge} 0;
          font-size: ${core.type.fontSizeMedium};
        }
      `}</style>

      <Theme>
        <div className="example">
          <BelowLeft
            when={isOpen}
            show={
              <div>
                <ActionMenu
                  ref={ref}
                  origin={ActionMenu.origins.topLeft}
                  onClick={handleSelect}
                >
                  {categories.map(cat => (
                    <ActionMenu.Item
                      key={cat.name}
                      nested={cat.options.map(opt => (
                        <ActionMenu.Item
                          value={opt.value}
                          key={opt.value}
                          tagName="button"
                        >
                          {opt.label}
                        </ActionMenu.Item>
                      ))}
                    >
                      {cat.name}
                    </ActionMenu.Item>
                  ))}
                </ActionMenu>
              </div>
            }
          >
            <Button
              appearance={Button.appearances.secondary}
              size={Button.sizes.small}
              icon={<MoreIcon />}
              onClick={_ => setIsOpen(!isOpen)}
            />
          </BelowLeft>

          <div className="label">
            Clicked Item: {selected.label} ({selected.value})
          </div>
        </div>
      </Theme>

      <Code collapsible language="javascript">
        {`import ActionMenu from '@pluralsight/ps-design-system-actionmenu'
import { BelowLeft } from '@pluralsight/ps-design-system-position'
import Button from '@pluralsight/ps-design-system-button'

function InAppExample() {
  const categories = [
    {
      name: 'Channels',
      options: [
        { value: 'dev', label: 'Development' },
        { value: 'ops', label: 'Operations' },
        { value: 'des', label: 'Design' }
      ]
    },
    {
      name: 'Socialz',
      options: [
        { value: 't', label: 'Twitz' },
        { value: 'd', label: 'DaBook' },
        { value: 'i', label: 'Instas' }
      ]
    }
  ]
  const [isOpen, setIsOpen] = React.useState(false)
  const [selected, select] = React.useState({})

  function handleSelect(evt, value) {
    select({ value, label: evt.currentTarget.innerText })
    setIsOpen(false)
  }

  const ref = ActionMenu.useMenuRef(true)
  React.useImperativeHandle(forwardedRef, () => ref.current)

  return (
    <React.Fragment>
      <BelowLeft
        when={isOpen}
        show={
          <div>
            <ActionMenu
              ref={ref}
              origin={ActionMenu.origins.topLeft}
              onChange={handleSelect}
              whoa="adsf"
            >
              {categories.map(cat => (
                <ActionMenu.Item
                  key={cat.name}
                  nested={cat.options.map(opt => (
                    <ActionMenu.Item
                      value={opt.value}
                      key={opt.value}
                      tagName="button"
                    >
                      {opt.label}
                    </ActionMenu.Item>
                  ))}
                >
                  {cat.name}
                </ActionMenu.Item>
              ))}
            </ActionMenu>
          </div>
        }
      >
        <Button
          appearance={Button.appearances.secondary}
          size={Button.sizes.small}
          icon={<MoreIcon />}
          onClick={_ => setIsOpen(!isOpen)}
        />
      </BelowLeft>

      <div className="label">
        Clicked Item: {selected.label} ({selected.value})
      </div>
    </React.Fragment>
  )
}`}
      </Code>
    </>
  )
})

export default _ => (
  <Chrome>
    <Content title="Action Menu">
      <PageHeading packageName="actionmenu">Action Menu</PageHeading>

      <P>Install the component dependency:</P>
      <Code language="bash">
        npm install @pluralsight/ps-design-system-actionmenu
      </Code>

      <P>Include a React component in your project:</P>
      <Code language="javascript">
        import ActionMenu from '@pluralsight/ps-design-system-actionmenu'
      </Code>

      <PropTypes
        props={{
          ActionMenu: [
            PropTypes.row([
              'onClose',
              'function',
              null,
              null,
              'triggered when a menu collapses; providing it renders an overlay that triggers this function on click'
            ]),
            PropTypes.row([
              'onClick',
              <span>(Event, value) {'=>'} ()</span>,
              null,
              null,
              'triggered when an item selected via click, enter or space'
            ]),
            PropTypes.row([
              'origin',
              PropTypes.union(ActionMenu.origins),
              null,
              <code>topLeft</code>,
              <span>
                orientation (from <code>ActionMenu.origins</code>) of nested
                menus
              </span>
            ])
          ],
          'ActionMenu.Item': [
            PropTypes.row([
              'disabled',
              'boolean',
              null,
              <code>false</code>,
              'visually disabled, non-interactive'
            ]),
            PropTypes.row(['href', 'string', null, null, 'anchor tag uri']),
            PropTypes.row([
              'nested',
              <code>ActionMenu</code>,
              null,
              null,
              'nested (ActionMenu.Item)s'
            ]),
            PropTypes.row([
              'onClick',
              'Event => ()',
              null,
              null,
              'triggered on item select: click, enter or space'
            ]),
            PropTypes.row([
              'origin',
              PropTypes.union(ActionMenu.origins),
              null,
              null,
              <span>
                override orientation (from <code>ActionMenu.origins</code>) of
                items nested menu
              </span>
            ]),
            PropTypes.row([
              'tagName',
              'boolean',
              null,
              <code>a</code>,
              <span>
                ActionMenu.Item trigger element tag (from{' '}
                <code>ActionMenu.tagName</code>){' '}
              </span>
            ]),
            PropTypes.row([
              'value',
              <code>string | number</code>,
              null,
              null,
              <span>
                value sent to <code>Menu#onChange</code>
              </span>
            ])
          ]
        }}
      />

      <SectionHeading>In-app example</SectionHeading>
      <P>
        Menus can originate from various affordance types: buttons, dropdowns,
        and stand-alone icons. All menus left align with the affordance by
        default.
      </P>
      <InAppExample />

      <P>
        <em>
          Note: The above example on this page uses to focus the first item in
          menu <Text.Code>ActionMenu.useMenuRef(true)</Text.Code>
        </em>
      </P>
      <SectionHeading>Icons</SectionHeading>
      <P>
        Use <code>ActionMenu.Icon</code> to add context and recognition to
        action menu items.
      </P>
      <Example.React
        includes={{
          ActionMenu,
          ChannelIcon,
          PathIcon,
          ReportIcon
        }}
        codes={[
          ` <ActionMenu >
      <ActionMenu.Item>
        <ActionMenu.Icon marginLeft>
          <ChannelIcon />
        </ActionMenu.Icon>
        One item
      </ActionMenu.Item>
      <ActionMenu.Item>
        <ActionMenu.Icon marginLeft>
          <PathIcon />
        </ActionMenu.Icon>
        Two item
      </ActionMenu.Item>
      <ActionMenu.Item>
        <ActionMenu.Icon marginLeft>
          <ReportIcon />
        </ActionMenu.Icon>
        Three item
      </ActionMenu.Item>
    </ActionMenu>
`
        ]}
      />

      <SectionHeading>Ellipsis</SectionHeading>
      <P>
        Use <code>ActionMenu.Ellipsis</code> to add ellipsis to action menu
        items.
      </P>
      <Example.React
        includes={{ ActionMenu }}
        codes={[
          `
    <ActionMenu  >
      <ActionMenu.Item>
        <ActionMenu.Ellipsis>
          One item that has text that goes on forever and onward into the
          universes yet to be
        </ActionMenu.Ellipsis>
      </ActionMenu.Item>
      <ActionMenu.Item>
        <ActionMenu.Ellipsis>
          Another item that takes a long time to explain in the context of
          everything that is in a line.
        </ActionMenu.Ellipsis>
      </ActionMenu.Item>
    </ActionMenu>
`
        ]}
      />

      <SectionHeading>Dividers</SectionHeading>
      <P>
        Dividers can be useful to separate similar actions. Dividers are applied
        at the list level, below the assigned list item.
      </P>
      <Example.React
        includes={{ ActionMenu }}
        codes={[
          `
    <ActionMenu >
      <ActionMenu.Item>
        One item
      </ActionMenu.Item>
      <ActionMenu.Divider />
      <ActionMenu.Item>
        Two item
      </ActionMenu.Item>
      <ActionMenu.Item>
        Three item
      </ActionMenu.Item>
      <ActionMenu.Divider />
      <ActionMenu.Item>
        Four item
      </ActionMenu.Item>
    </ActionMenu>
`
        ]}
      />

      <SectionHeading>Nesting</SectionHeading>
      <P>Nested menu lists may spawn from parent menu list items.</P>
      <Example.React
        includes={{ ActionMenu }}
        outputChildStyle={{
          padding: `0 0 ${core.layout.spacingLarge} 0`
        }}
        codes={[
          `
    <ActionMenu >
      <ActionMenu.Item>
        One item
      </ActionMenu.Item>
      <ActionMenu.Divider />
      <ActionMenu.Item
        nested={
          <React.Fragment>
            <ActionMenu.Item>
              Nest 1
            </ActionMenu.Item>
            <ActionMenu.Item
              nested={
                <React.Fragment>
                  <ActionMenu.Item>
                    Nest nest 1-1
                  </ActionMenu.Item>
                  <ActionMenu.Item>
                    Nest nest 1-2
                  </ActionMenu.Item>
                  <ActionMenu.Item>
                    Nest nest 1-3
                  </ActionMenu.Item>
                </React.Fragment>
              }
            >
              Nest 2
            </ActionMenu.Item>
            <ActionMenu.Divider />
            <ActionMenu.Item
              nested={
                <React.Fragment>
                  <ActionMenu.Item>
                    Nest nest 3-1
                  </ActionMenu.Item>
                  <ActionMenu.Item>
                    Nest nest 3-2
                  </ActionMenu.Item>
                </React.Fragment>
              }
            >
              Nest 3
            </ActionMenu.Item>
          </React.Fragment>
        }
      >
        Two item
      </ActionMenu.Item>
      <ActionMenu.Item>
        Three item
      </ActionMenu.Item>
      <ActionMenu.Divider />
      <ActionMenu.Item>
        Four item
      </ActionMenu.Item>
    </ActionMenu>
`
        ]}
      />

      <SectionHeading>Origin</SectionHeading>
      <P>
        The origin prop determines the starting position and direction of nested
        menus.
      </P>
      <Code language="javascript">
        {Object.keys(ActionMenu.origins)
          .reduce(
            (acc, origin) => acc.concat([`ActionMenu.origins.${origin}`]),
            []
          )
          .join('\n')}
      </Code>
      <P>Here's an example of ActionMenu.origins.bottomRight in action:</P>
      <Example.React
        includes={{ ActionMenu }}
        outputStyle={{
          height: `calc(200px + (2 * ${core.layout.spacingLarge}))`,
          position: 'relative'
        }}
        outputChildStyle={{
          position: 'relative',
          height: '200px',
          width: '100%',
          padding: core.layout.spacingLarge
        }}
        codes={[
          `
    <ActionMenu origin={ActionMenu.origins.bottomRight} >
    <ActionMenu.Item
      nested={
        <React.Fragment>
          <ActionMenu.Item>Nest 1</ActionMenu.Item>
          <ActionMenu.Item
            nested={
              <React.Fragment>
                <ActionMenu.Item>Nest nest 1-1</ActionMenu.Item>
                <ActionMenu.Item>Nest nest 1-2</ActionMenu.Item>
                <ActionMenu.Item>Nest nest 1-3</ActionMenu.Item>
              </React.Fragment>
            }
          >
            Nest 2
          </ActionMenu.Item>
          <ActionMenu.Divider />
          <ActionMenu.Item>Nest 3</ActionMenu.Item>
          <ActionMenu.Item
            nested={
              <React.Fragment>
                <ActionMenu.Item>Nest nest 2-1</ActionMenu.Item>
                <ActionMenu.Item>Nest nest 2-2</ActionMenu.Item>
              </React.Fragment>
            }
          >
            Nest 4
          </ActionMenu.Item>
        </React.Fragment>
      }
    >
      One
    </ActionMenu.Item>
    <ActionMenu.Item>Two</ActionMenu.Item>
  </ActionMenu>
`
        ]}
      />

      <SectionHeading>Disabled Items</SectionHeading>
      <P>
        To keep items in the menu but make them disabled, mark with a{' '}
        <Text.Code>disabled</Text.Code> prop.
      </P>
      <Example.React
        includes={{ ActionMenu }}
        outputStyle={{
          height: `calc(200px + (2 * ${core.layout.spacingLarge}))`,
          position: 'relative'
        }}
        outputChildStyle={{
          position: 'relative',
          height: '200px',
          width: '100%',
          padding: core.layout.spacingLarge
        }}
        codes={[
          `
    <ActionMenu >
      <ActionMenu.Item>
        Normal, enabled
      </ActionMenu.Item>
      <ActionMenu.Item disabled>
        Present, but disabled
      </ActionMenu.Item>
      <ActionMenu.Item>
        Normal, enabled
      </ActionMenu.Item>
    </ActionMenu>
`
        ]}
      />
    </Content>
  </Chrome>
)
