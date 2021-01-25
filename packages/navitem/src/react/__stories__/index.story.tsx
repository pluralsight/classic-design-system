import { action } from '@storybook/addon-actions'
import ActionMenu from '@pluralsight/ps-design-system-actionmenu'
import Button from '@pluralsight/ps-design-system-button'
import { colorsGradient } from '@pluralsight/ps-design-system-core'
import { HomeIcon } from '@pluralsight/ps-design-system-icon'
import { BelowRight } from '@pluralsight/ps-design-system-position'
import { HTMLPropsFor } from '@pluralsight/ps-design-system-util'
import { storiesOf } from '@storybook/react'
import React from 'react'

import NavItem from '..'

const stories = storiesOf('NavItem', module)

Object.values(NavItem.alignments).forEach(alignment => {
  stories.add(alignment, () => {
    const Story = () => {
      const isVertical = alignment === NavItem.alignments.vertical

      return (
        <Grid>
          {isVertical && <NavItem alignment={alignment}>Text only</NavItem>}

          <NavItem alignment={alignment} icon={<HomeIcon />}>
            With icon
          </NavItem>

          {isVertical && <NavItem alignment={alignment} icon={<HomeIcon />} />}

          <NavItem
            alignment={alignment}
            renderContainer={(injected: HTMLPropsFor<'a'>) => (
              <a {...injected} href="https://jaketrent.com" />
            )}
            icon={<HomeIcon />}
          >
            Link to web
          </NavItem>

          <NavItem alignment={alignment} menu icon={<HomeIcon />}>
            With menu
          </NavItem>

          <NavItem alignment={alignment} selected icon={<HomeIcon />}>
            Selected
          </NavItem>

          <NavItem
            alignment={alignment}
            icon={<HomeIcon />}
            selected
            UNSAFE_stylesFor={{
              'navitem__bar--selected': {
                background: colorsGradient.skillsBackground
              }
            }}
          >
            Skills Selected
          </NavItem>

          <NavItem
            alignment={alignment}
            icon={<HomeIcon />}
            selected
            UNSAFE_stylesFor={{
              'navitem__bar--selected': {
                background: colorsGradient.flowBackground
              }
            }}
          >
            Flow Selected
          </NavItem>

          <NavItem
            alignment={alignment}
            icon={<HomeIcon />}
            UNSAFE_stylesFor={{
              'navitem__bar--selected': {
                background: colorsGradient.flowBackground
              }
            }}
          >
            Flow
          </NavItem>
        </Grid>
      )
    }

    return <Story />
  })
})

stories.add('rest props', () => (
  <>
    <NavItem href="https://jaketrent.com">Link</NavItem>
    <NavItem selected onClick={action('clicked')}>
      Action
    </NavItem>
  </>
))

stories.add('styleFor', () => (
  <>
    <NavItem
      UNSAFE_stylesFor={{
        navitem__bar: { color: 'red' },
        'navitem__bar--selected': { background: 'blue' }
      }}
    >
      test
    </NavItem>

    <NavItem
      selected
      UNSAFE_stylesFor={{
        navitem__bar: { color: 'red' },
        'navitem__bar--selected': { background: 'blue' }
      }}
    >
      test
    </NavItem>
  </>
))

stories.add('position', () => {
  function Example() {
    const [open2, setOpen2] = React.useState(false)
    const [open, setOpen] = React.useState(false)
    return (
      <div>
        <BelowRight
          show={
            <ActionMenu>
              <ActionMenu.Item>
                <ActionMenu.Icon marginLeft>
                  <HomeIcon />
                </ActionMenu.Icon>
                Button menu
              </ActionMenu.Item>
            </ActionMenu>
          }
          when={open2}
        >
          <Button icon={<HomeIcon />} onClick={() => setOpen2(!open2)}>
            Button {open2.toString()}
          </Button>
        </BelowRight>

        <BelowRight
          show={
            <ActionMenu>
              <ActionMenu.Item>
                <ActionMenu.Icon marginLeft>
                  <HomeIcon />
                </ActionMenu.Icon>
                Nav item menu
              </ActionMenu.Item>
            </ActionMenu>
          }
          when={open}
        >
          <NavItem icon={<HomeIcon />} menu onClick={() => setOpen(!open)}>
            NavItem {open.toString()}
          </NavItem>
        </BelowRight>
      </div>
    )
  }

  return <Example />
})

const Grid: React.FC = props => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, auto)',
      gap: '32px',
      justifyItems: 'center'
    }}
    {...props}
  />
)
