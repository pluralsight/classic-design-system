import { useCallback, useEffect, useMemo, useReducer } from 'react'
import { isString } from '@pluralsight/ps-design-system-util'
import { switchcase } from './utils'

type Callback = () => void
type State = Record<string, boolean>
type Action = { type: string; data?: State; key?: string }

export function useKeybinding(
  binding: string[],
  callback: Callback,
  el: HTMLElement | Document = document
) {
  const initialMapping = useMemo(() => {
    const map = binding.reduce<Record<string, boolean>>(
      (acc, key) => ({
        ...acc,
        [key.toLowerCase()]: false
      }),
      {}
    )

    return map
  }, [binding])

  const [keys, setKeys] = useReducer(reducer, initialMapping)

  const handleKeyDown = useCallback(
    (evt: Event) => {
      if (!(evt instanceof KeyboardEvent)) return
      const key = evt.key.toLowerCase()

      const isBoundKey = binding.indexOf(key) > -1
      if (!isBoundKey) return

      setKeys({ type: 'keydown', key })
    },
    [binding]
  )

  const handleKeyUp = useCallback(
    (evt: Event) => {
      if (!(evt instanceof KeyboardEvent)) return
      const key = evt.key.toLowerCase()

      const isBoundKey = binding.indexOf(key) > -1
      if (!isBoundKey) return

      setKeys({ type: 'keyup', key })
    },
    [binding]
  )

  useEffect(() => {
    el.addEventListener('keydown', handleKeyDown, { capture: true })
    el.addEventListener('keyup', handleKeyUp, { capture: true })

    return () => {
      el.removeEventListener('keydown', handleKeyDown, { capture: true })
      el.removeEventListener('keyup', handleKeyUp, { capture: true })
    }
  }, [el, handleKeyDown, handleKeyUp])

  useEffect(() => {
    const isMatch = Object.values(keys).every(Boolean)
    if (!isMatch) return

    callback()
    setKeys({ type: 'reset', data: initialMapping })
  }, [keys, callback, initialMapping])
}

const reducer = (state: State, action: Action) => {
  const fn = switchcase<() => State>(
    {
      keydown: () => ({
        ...state,
        ...(isString(action.key) && { [action.key]: true })
      }),
      keyup: () => ({
        ...state,
        ...(isString(action.key) && { [action.key]: false })
      }),
      reset: () => action.data ?? {}
    },
    () => state,
    action.type
  )

  return fn()
}
