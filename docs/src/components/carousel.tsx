import React from 'react'

export const MockItem: React.FC = props => {
  const style = {
    background: 'pink',
    height: '150px'
  }
  return <div {...props} style={style} />
}
