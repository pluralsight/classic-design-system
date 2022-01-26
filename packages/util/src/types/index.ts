import React from 'react'

/**
 * @deprecated
 */
export type RefFor<K extends keyof HTMLElementTagNameMap> = React.RefObject<
  HTMLElementTagNameMap[K]
>

export type RefForwardingComponent<
  P = Record<string, unknown>,
  E = Element,
  S = Record<string, unknown>
> = React.ForwardRefExoticComponent<P & React.RefAttributes<E>> & S

export type ValueOf<T> = T[keyof T]
