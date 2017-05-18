import React from 'react'
import styleable from 'react-styleable'

import css from './index.css'
import Group from './group'
import GroupTitle from './group-title'
import Link from './link'
import Logo from './logo'

export default styleable(css)(props => (
  <nav className={props.css.root}>
    <Logo />
    <Group>
      <GroupTitle>COMPONENTS</GroupTitle>
      <Link href={`/components/button`}>Button</Link>
    </Group>
  </nav>
))
