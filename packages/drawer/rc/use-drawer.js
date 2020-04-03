import { useReducer } from 'react'

import {
  combineFns,
  createActionCreator,
  persistSynthetic,
  pick,
  removeUndefinedValues,
  switchcaseF
} from './utils.js'

export const actionTypes = {
  close: 'CLOSE',
  open: 'OPEN',
  reset: 'RESET'
}

const defaultState = { controlled: false, isOpen: true }

function baseReducer(prevState, action) {
  const { controlled } = prevState
  const cases = {
    [actionTypes.close]: controlled ? prevState : { isOpen: false },
    [actionTypes.open]: controlled ? prevState : { isOpen: true },
    [actionTypes.reset]: { ...prevState, ...action.payload }
  }

  const handleUnknown = () => {
    throw new Error(`Unhandled type: ${action.type}`)
  }

  return switchcaseF(cases)(handleUnknown)(action.type)
}

export function useDrawer(opts = {}) {
  const {
    initialState = {},
    stateReducer: customReducer = reducerNoop,

    onRequestOpen,
    onRequestClose
  } = opts
  const initialStateWithDefaults = {
    ...defaultState,
    ...removeUndefinedValues(initialState)
  }

  const stateReducer = (prevState, action) => {
    const pendingChanges = baseReducer(prevState, action)
    return customReducer(prevState, action, pendingChanges)
  }

  const [state, dispatch] = useReducer(stateReducer, initialStateWithDefaults)

  const actionCreators = {
    close: createActionCreator(actionTypes.close)(dispatch),
    open: createActionCreator(actionTypes.open)(dispatch),
    reset: createActionCreator(actionTypes.reset)(dispatch)
  }

  const close = combineFns(
    persistSynthetic,
    onRequestClose,
    actionCreators.close
  )
  const open = combineFns(persistSynthetic, onRequestOpen, actionCreators.open)
  const toggle = state.isOpen ? close : open

  return {
    ...pick(state, ['controlled', 'isOpen']),

    close,
    open,
    toggle,
    reset: actionCreators.reset
  }
}

useDrawer.types = actionTypes

const reducerNoop = (state, actions, pendingChanges) => pendingChanges
