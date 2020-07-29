import { storiesOf } from '@storybook/react'
import React from 'react'

import NavCookieBanner from '../index.js'

storiesOf('NavCookieBanner', module)
  .add('Basic', _ => <NavCookieBanner />)
  .add('Custom message', _ => (
    <NavCookieBanner
      message={
        <>
          <label>This is here to annoy you.</label>
        </>
      }
    />
  ))
