import { useLayoutEffect, useState } from 'react'

import { uniqueId } from './unique-id'

export function useUniqueId(prefix = '') {
  const [id, setId] = useState('')

  useLayoutEffect(() => {
    setId(uniqueId(prefix))
  }, [prefix])

  return id
}
