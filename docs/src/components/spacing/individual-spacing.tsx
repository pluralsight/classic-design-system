import React from 'react'

import { Parent, Example } from './example'

const incrementExamples = [
  { side: 'top', attrName: 'margin-top' },
  { side: 'right', attrName: 'margin-right' },
  { side: 'bottom', attrName: 'margin-bottom' },
  { side: 'left', attrName: 'margin-left' },
]

export const IndividualSpacing = () => (
  <Parent>
    {incrementExamples.map((x, i) => (
      <Example key={i} width={24} side={x.side} />
    ))}
  </Parent>
)
