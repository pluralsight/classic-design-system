import { Link } from 'react-router-dom'
import React from 'react'

import Chrome from '../layouts/chrome'

export default () => (
  <Chrome>
    <Link to="/">Home</Link>
    <Link to="/components/button/">Button</Link>
    <br />
    Awesome Home
  </Chrome>
)
