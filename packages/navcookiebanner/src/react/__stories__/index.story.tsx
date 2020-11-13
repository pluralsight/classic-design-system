import { storiesOf } from '@storybook/react'
import React from 'react'

import NavCookieBanner from '..'

storiesOf('NavCookieBanner', module)
  .add('Basic', () => <NavCookieBanner />)
  .add('Custom message', () => (
    <NavCookieBanner
      message={
        <>
          <label>This is here to annoy you.</label>
        </>
      }
    />
  ))
