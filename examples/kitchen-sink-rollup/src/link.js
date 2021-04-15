import React from 'react'
import Link from '@pluralsight/ps-design-system-link'

const Comp = () => (
  <div className="example-flex-column">
    <p>
      Lorem ipsum dolor sit amet{' '}
      <Link>
        <a href="https://duckduckgo.com">basic link</a>
      </Link>{' '}
      nisi ut aliquip ex ea commodo consequat.
    </p>
    <p>
      Lorem ipsum dolor sit amet{' '}
      <Link appearance={Link.appearances.subtle}>
        <a href="https://duckduckgo.com">subtle link</a>
      </Link>{' '}
      nisi ut aliquip ex ea commodo consequat.
    </p>
  </div>
)

export default Comp
