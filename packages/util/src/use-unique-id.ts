import React from 'react'

import { uniqueId } from './unique-id'

export function useUniqueId(prefix = '') {
  const [id, setId] = React.useState('')

  React.useLayoutEffect(() => {
    setId(uniqueId(prefix))
  }, [prefix])

  return id
}
