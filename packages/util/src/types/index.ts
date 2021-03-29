import {
  ForwardRefExoticComponent,
  RefAttributes,
  RefObject,
  ElementType,
  ComponentPropsWithRef,
  ReactElement
} from 'react'

export type HTMLPropsFor<
  Tag extends keyof JSX.IntrinsicElements
> = JSX.IntrinsicElements[Tag]

export type RefFor<K extends keyof HTMLElementTagNameMap> = RefObject<
  HTMLElementTagNameMap[K]
>

export type RefForwardingComponent<
  P = Record<string, unknown>,
  E = Element,
  S = Record<string, unknown>
> = ForwardRefExoticComponent<P & RefAttributes<E>> & S

export type ValueOf<T> = T[keyof T]
