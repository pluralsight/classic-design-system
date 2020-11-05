import { colorsGradient } from '@pluralsight/ps-design-system-core'
import { HomeIcon } from '@pluralsight/ps-design-system-icon'
import { storiesOf } from '@storybook/react'
import PropTypes from 'prop-types'
import React from 'react'

import NavItem from '../index.js'

function Grid(props) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, auto)',
        gap: '32px',
        justifyItems: 'center'
      }}
    >
      {props.children}
    </div>
  )
}
Grid.propTypes = {
  children: PropTypes.node
}

const stories = storiesOf('NavItem', module)

Object.keys(NavItem.alignments).forEach(key =>
  stories.add(NavItem.alignments[key], _ => (
    <Grid>
      {NavItem.alignments[key] !== 'vertical' && (
        <NavItem alignment={NavItem.alignments[key]}>Text only</NavItem>
      )}
      <NavItem alignment={NavItem.alignments[key]} icon={<HomeIcon />}>
        With icon
      </NavItem>

      {NavItem.alignments[key] !== 'vertical' && (
        <NavItem alignment={NavItem.alignments[key]} icon={<HomeIcon />} />
      )}
      <NavItem
        alignment={NavItem.alignments[key]}
        href="https://jaketrent.com"
        icon={<HomeIcon />}
      >
        Link to web
      </NavItem>
      <NavItem alignment={NavItem.alignments[key]} menu icon={<HomeIcon />}>
        With menu
      </NavItem>
      <NavItem alignment={NavItem.alignments[key]} selected icon={<HomeIcon />}>
        Selected
      </NavItem>
      <NavItem
        UNSAFE_stylesFor={{
          'navitem__bar--selected': {
            background: colorsGradient.skillsBackground
          }
        }}
        alignment={NavItem.alignments[key]}
        selected
        icon={<HomeIcon />}
      >
        Skills Selected
      </NavItem>
      <NavItem
        UNSAFE_stylesFor={{
          'navitem__bar--selected': {
            background: colorsGradient.flowBackground
          }
        }}
        alignment={NavItem.alignments[key]}
        selected
        icon={<HomeIcon />}
      >
        Flow Selected
      </NavItem>
      <NavItem
        UNSAFE_stylesFor={{
          'navitem__bar--selected': {
            background: colorsGradient.flowBackground
          }
        }}
        alignment={NavItem.alignments[key]}
        icon={<HomeIcon />}
      >
        Flow
      </NavItem>
    </Grid>
  ))
)
