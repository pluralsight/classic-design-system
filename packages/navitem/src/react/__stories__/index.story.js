import { HomeIcon } from '@pluralsight/ps-design-system-icon'
import { storiesOf } from '@storybook/react'
import React from 'react'

import NavItem from '../index.js'

storiesOf('NavItem', module)
  .add('text only', _ => <NavItem>Text only</NavItem>)
  .add('icon', _ => <NavItem icon={<HomeIcon />}>With icon</NavItem>)
