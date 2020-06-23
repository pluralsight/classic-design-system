import { HomeIcon } from '@pluralsight/ps-design-system-icon'
import { storiesOf } from '@storybook/react'
import React from 'react'

import NavItem from '../index.js'

storiesOf('NavItem', module)
  .add('text only', _ => <NavItem>Text only</NavItem>)
  .add('icon', _ => <NavItem icon={<HomeIcon />}>With icon</NavItem>)
  .add('selected', _ => (
    <NavItem selected icon={<HomeIcon />}>
      Selected
    </NavItem>
  ))
  .add('link', _ => (
    <NavItem href="https://jaketrent.com" icon={<HomeIcon />}>
      Link to web
    </NavItem>
  ))
  .add('menu', _ => (
    <NavItem menu={<div>Placeholder menu</div>}>With menu</NavItem>
  ))
