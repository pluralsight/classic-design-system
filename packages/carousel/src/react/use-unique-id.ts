import { useLayoutEffect, useState } from 'react'

import { uniqueId } from '../js/utils'

export default function useUniqueId(prefix = '') {
  const [id, setId] = useState('')

  useLayoutEffect(() => {
    setId(uniqueId(prefix))
  }, [prefix])

  return id
}
