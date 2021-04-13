import CircularProgress from '@pluralsight/ps-design-system-circularprogress'
import React from 'react'

function Example() {
  return (
    <div className="example-grid--col-2">
      <CircularProgress size={CircularProgress.sizes.small} value={75} />
      <CircularProgress size={CircularProgress.sizes.medium} value={75} />
    </div>
  )
}

export default Example
