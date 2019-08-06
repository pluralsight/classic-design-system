import React from 'react'

import ActionMenu from '@pluralsight/ps-design-system-actionmenu/react'
import Button from '@pluralsight/ps-design-system-button/react'
import core from '@pluralsight/ps-design-system-core'
import Icon from '@pluralsight/ps-design-system-icon/react'
import { BelowLeft } from '@pluralsight/ps-design-system-position/react'
import * as Text from '@pluralsight/ps-design-system-text/react'
import Theme from '@pluralsight/ps-design-system-theme/react'

import {
  Chrome,
  Code,
  Content,
  Example,
  P,
  PageHeading,
  PropTypes,
  SectionHeading,
  withServerProps
} from '../../src/ui'

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

  function handleSelect(evt, value, label) {
    select({ value, label })
    setIsOpen(false)
  }

  return (
    <React.Fragment>
      <style jsx>{`
        .example {
          padding: ${core.layout.spacingLarge};
          background: ${core.colors.gray06};
          color: ${core.colors.white};
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
                  origin={ActionMenu.origins.topLeft}
                  onChange={handleSelect}
                >
                  {categories.map(cat => (
                    <ActionMenu.Item
                      key={cat.name}
                      nested={
                        <ActionMenu>
                          {cat.options.map(opt => (
                            <ActionMenu.Item value={opt.value} key={opt.value}>
                              {opt.label}
                            </ActionMenu.Item>
                          ))}
                        </ActionMenu>
                      }
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
              icon={<Icon id={Icon.ids.more} />}
              onClick={_ => setIsOpen(!isOpen)}
            />
          </BelowLeft>

          <div className="label">
            Clicked Item: {selected.label} ({selected.value})
          </div>
        </div>
      </Theme>

      <Code collapsible language="javascript">
        {`function InAppExample() {
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

  function handleSelect(evt, value, label) {
    select({ value, label })
    setIsOpen(false)
  }

  return (
    <React.Fragment>
      <BelowLeft
        when={isOpen}
        show={
          <div>
            <ActionMenu
              origin={ActionMenu.origins.topLeft}
              onChange={handleSelect}
              whoa="adsf"
            >
              {categories.map(cat => (
                <ActionMenu.Item
                  key={cat.name}
                  nested={
                    <ActionMenu>
                      {cat.options.map(opt => (
                        <ActionMenu.Item value={opt.value} key={opt.value}>
                          {opt.label}
                        </ActionMenu.Item>
                      ))}
                    </ActionMenu>
                  }
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
          icon={<Icon id={Icon.ids.more} />}
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
    </React.Fragment>
  )
}

export default withServerProps(_ => (
  <Chrome>
    <Content title="Action Menu">
      <PageHeading packageName="actionmenu">Action Menu</PageHeading>

      <P>Install the component dependency:</P>
      <Code language="bash">
        npm install @pluralsight/ps-design-system-actionmenu
      </Code>

      <P>Include a React component in your project:</P>
      <Code language="javascript">
        import ActionMenu from '@pluralsight/ps-design-system-actionmenu/react'
      </Code>

      <PropTypes
        props={{
          ActionMenu: [
            PropTypes.row([
              'onClose',
              'function',
              null,
              null,
              'triggered when a menu collapses'
            ]),
            PropTypes.row([
              'onChange',
              <span>(Event, value, label) => ()</span>,
              null,
              null,
              'triggered when an item selected'
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
            ]),
            PropTypes.row([
              'shouldFocusOnMount',
              'boolean',
              null,
              <code>true</code>,
              'focus first menu item on render'
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
              'icon',
              <code>Icon</code>,
              null,
              null,
              'Icon component'
            ]),
            PropTypes.row([
              'isActive',
              'boolean',
              null,
              <code>false</code>,
              'visually active (set automatically)'
            ]),
            PropTypes.row([
              'nested',
              <code>ActionMenu</code>,
              null,
              null,
              'nested ActionMenu'
            ]),
            PropTypes.row([
              'onClick',
              'Event => ()',
              null,
              null,
              'triggered on item click'
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

      <SectionHeading>Icons</SectionHeading>
      <P>Use icons to add context and recognition to action menu items.</P>
      <Example.React
        includes={{ ActionMenu, Icon }}
        codes={[
          `
<ActionMenu css={{ position: 'relative' }} shouldFocusOnMount={false}>
  <ActionMenu.Item icon={<Icon id={Icon.ids.channel} />}>
    Channels
  </ActionMenu.Item>
  <ActionMenu.Item icon={<Icon id={Icon.ids.path} />}>
    Paths
  </ActionMenu.Item>
  <ActionMenu.Item icon={<Icon id={Icon.ids.report} />}>
    Reports
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
<ActionMenu css={{ position: 'relative' }} shouldFocusOnMount={false}>
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
<ActionMenu css={{ position: 'relative' }} shouldFocusOnMount={false}>
  <ActionMenu.Item>
    One item
  </ActionMenu.Item>
  <ActionMenu.Divider />
  <ActionMenu.Item
    nested={
      <ActionMenu>
        <ActionMenu.Item>
          Nest 1
        </ActionMenu.Item>
        <ActionMenu.Item
          nested={
            <ActionMenu>
              <ActionMenu.Item>
                Nest nest 1-1
              </ActionMenu.Item>
              <ActionMenu.Item>
                Nest nest 1-2
              </ActionMenu.Item>
              <ActionMenu.Item>
                Nest nest 1-3
              </ActionMenu.Item>
            </ActionMenu>
          }
        >
          Nest 2
        </ActionMenu.Item>
        <ActionMenu.Divider />
        <ActionMenu.Item
          nested={
            <ActionMenu>
              <ActionMenu.Item>
                Nest nest 3-1
              </ActionMenu.Item>
              <ActionMenu.Item>
                Nest nest 3-2
              </ActionMenu.Item>
            </ActionMenu>
          }
        >
          Nest 3
        </ActionMenu.Item>
      </ActionMenu>
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
<ActionMenu origin={ActionMenu.origins.bottomRight} shouldFocusOnMount={false}>
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
</ActionMenu>
`
        ]}
      />

      <P>
        <em>
          Note: Examples on this page use{' '}
          <Text.Code>shouldFocusOnMount=false</Text.Code> only in order to
          display the examples without interrupting your browsing experience. In
          most real-world scenarios, you will want to leave the default focus
          behavior in tact.
        </em>
      </P>

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
<ActionMenu shouldFocusOnMount={false}>
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
))
