import * as React from 'react'
import { render } from 'react-dom'

import './styles.css'

import Example from './example'

const el = document.getElementById('root')

const Wrapper: React.FC = () => {
  return (
    <div>
      <Example />
    </div>
  )
}

render(<Wrapper />, el)
