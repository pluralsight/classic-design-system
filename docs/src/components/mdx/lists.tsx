import * as Text from '@pluralsight/ps-design-system-text'
import React, { HTMLAttributes } from 'react'

export const Ol: React.FC<HTMLAttributes<HTMLOListElement>> = props => (
  <Text.List type={Text.List.types.numbered} {...props} />
)

export const Ul: React.FC<HTMLAttributes<HTMLUListElement>> = props => (
  <Text.List type={Text.List.types.bulleted} {...props} />
)
