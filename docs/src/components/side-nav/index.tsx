import React, { HTMLAttributes } from 'react'

interface Props extends HTMLAttributes<HTMLDivElement> {}

export const SideNav: React.FC<Props> = () => {
  return <nav />
}
