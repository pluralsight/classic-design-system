import React from 'react'

import { uniqueId } from '../js/utils'

export default function useUniqueId(
  prefix = '',
  customUniqueId?: (prefix: string) => string
) {
  const [id, setId] = React.useState('')

  React.useLayoutEffect(() => {
    setId(customUniqueId ? customUniqueId(prefix) : uniqueId(prefix))
  }, [prefix])

  return id
}
