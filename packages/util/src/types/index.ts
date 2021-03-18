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

/* -------------------------------------------------------------------------------------------------
 * Utility types
 * ----------------------------------------------------------------------------------------------- */
type Merge<P1 = Record<string, unknown>, P2 = Record<string, unknown>> = Omit<
  P1,
  keyof P2
> &
  P2

type MergeProps<E, P = Record<string, unknown>> = P &
  Merge<E extends ElementType ? ComponentPropsWithRef<E> : never, P>

type NarrowIntrinsic<E> = E extends keyof JSX.IntrinsicElements ? E : never

/* -------------------------------------------------------------------------------------------------
 * ForwardRefComponent
 * ----------------------------------------------------------------------------------------------- */

export interface ForwardRefComponent<
  IntrinsicElementString,
  OwnProps = Record<string, unknown>
  /**
   * Extends original type to ensure built in React types play nice
   * with polymorphic components still e.g. `React.ElementRef` etc.
   */
> extends ForwardRefExoticComponent<
    MergeProps<
      IntrinsicElementString,
      OwnProps & { as?: IntrinsicElementString }
    >
  > {
  /**
   * When passing an `as` prop as a string, use this overload.
   * Merges original own props (without DOM props) and the inferred props
   * from `as` element with the own props taking precendence.
   *
   * We explicitly define a `JSX.IntrinsicElements` overload so that
   * events are typed for consumers.
   */
  <
    As extends keyof JSX.IntrinsicElements = NarrowIntrinsic<IntrinsicElementString>
  >(
    props: MergeProps<As, OwnProps & { as: As }>
  ): ReactElement | null

  /**
   * When passing an `as` prop as a component, use this overload.
   * Merges original own props (without DOM props) and the inferred props
   * from `as` element with the own props taking precendence.
   *
   * We don't use `React.ComponentType` here as we get type errors
   * when consumers try to do inline `as` components.
   */
  <As extends ElementType>(
    props: MergeProps<As, OwnProps & { as: As }>
  ): ReactElement | null
}
