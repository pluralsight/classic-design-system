import { useLayoutEffect, useState } from 'react'

import { uniqueId } from '../js/utils.js'

export default function useUniqueId(
  prefix = '',
  customUniqueId?: (prefix: string) => string
) {
  const [id, setId] = useState('')

  useLayoutEffect(() => {
    setId(customUniqueId ? customUniqueId(prefix) : uniqueId(prefix))
  }, [prefix])

  return id
}
