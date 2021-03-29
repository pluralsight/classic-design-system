import React from 'react'

export interface Props extends React.HTMLAttributes<SVGElement> {
  title?: string
}

export interface Statics {
  small: SmallIllustration
}

export type Illustration = React.FC<Props> & Statics
export type SmallIllustration = React.FC<Props>
