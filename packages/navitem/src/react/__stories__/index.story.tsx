import { action } from '@storybook/addon-actions'
import { colorsGradient } from '@pluralsight/ps-design-system-core'
import { HomeIcon } from '@pluralsight/ps-design-system-icon'
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
            renderContainer={injected => (
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
