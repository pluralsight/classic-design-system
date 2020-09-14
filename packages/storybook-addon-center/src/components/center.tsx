import React, { HTMLAttributes } from 'react'

interface CenterProps extends HTMLAttributes<HTMLDivElement> {}

export const Center: React.FC<CenterProps> = props => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      minWidth: '100vw',
      overflow: 'auto'
    }}
  >
    <div
      style={{
        margin: 'auto',
        height: '100%' // IE Hack
      }}
      {...props}
    />
  </div>
)
