import { Link } from 'react-router-dom'
import React from 'react'

import Chrome from '../layouts/chrome'

export default () => (
  <Chrome title="Components">
    <h2>Components</h2>
    <Link to="/components/button">Button</Link>
  </Chrome>
)
