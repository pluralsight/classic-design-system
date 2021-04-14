import React from 'react'

interface CenterProps extends React.HTMLAttributes<HTMLDivElement> {}

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
