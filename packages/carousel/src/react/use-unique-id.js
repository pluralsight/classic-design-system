import { useRef } from 'react'

import { uniqueId } from '../js/utils'

export default function useUniqueId(prefix = '') {
  return useRef(uniqueId(prefix)).current
}
