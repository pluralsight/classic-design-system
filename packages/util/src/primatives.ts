/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * NOTE: Polymorphic approach inspired by(lifted from) reach-ui
 *       ref: https://github.com/reach/reach-ui/blob/develop/packages/utils/src/index.tsx
 *
 *       - danethurber 3/19/21
 */

import type {
  ComponentPropsWithRef,
  ComponentType,
  ElementType,
  ForwardRefExoticComponent,
  ForwardRefRenderFunction,
  MutableRefObject,
  PropsWithChildren,
  PropsWithoutRef,
  ReactElement,
  RefAttributes,
  ValidationMap,
  WeakValidationMap
} from 'react'
import { forwardRef, memo } from 'react'

export type As<BaseProps = any> = ElementType<BaseProps>

export type ElementTagNameMap = HTMLElementTagNameMap &
  Pick<
    SVGElementTagNameMap,
    Exclude<keyof SVGElementTagNameMap, keyof HTMLElementTagNameMap>
  >

export type PropsWithAs<CompType extends As, ComponentProps> = ComponentProps &
  Omit<ComponentPropsWithRef<CompType>, 'as' | keyof ComponentProps> & {
    as?: CompType
  }

export type PropsFromAs<CompType extends As, ComponentProps> = (PropsWithAs<
  CompType,
  ComponentProps
> & { as: CompType }) &
  PropsWithAs<CompType, ComponentProps>

export interface FunctionComponentWithAs<
  DefaultComponentType extends As,
  ComponentProps
> {
  /**
   * Inherited from React.FunctionComponent with modifications to support `as`
   */
  <CompType extends As>(
    props: PropsWithAs<CompType, ComponentProps>,
    context?: any
  ): ReactElement<any, any> | null
  (
    props: PropsWithAs<DefaultComponentType, ComponentProps>,
    context?: any
  ): ReactElement<any, any> | null

  /**
   * Inherited from React.FunctionComponent
   */
  displayName?: string
  propTypes?: WeakValidationMap<
    PropsWithAs<DefaultComponentType, ComponentProps>
  >
  contextTypes?: ValidationMap<any>
  defaultProps?: Partial<PropsWithAs<DefaultComponentType, ComponentProps>>
}

interface ExoticComponentWithAs<
  DefaultComponentType extends As,
  ComponentProps
> {
  /**
   * **NOTE**: Exotic components are not callable.
   * Inherited from React.ExoticComponent with modifications to support `as`
   */
  (
    props: PropsWithAs<DefaultComponentType, ComponentProps>
  ): ReactElement | null
  <CompType extends As>(
    props: PropsWithAs<CompType, ComponentProps> & {
      as: CompType
    }
  ): ReactElement | null

  /**
   * Inherited from React.ExoticComponent
   */
  readonly $$typeof: symbol
}

interface NamedExoticComponentWithAs<
  DefaultComponentType extends As,
  ComponentProps
> extends ExoticComponentWithAs<DefaultComponentType, ComponentProps> {
  /**
   * Inherited from React.NamedExoticComponent
   */
  displayName?: string
}

export interface ForwardRefExoticComponentWithAs<
  DefaultComponentType extends As,
  ComponentProps
> extends NamedExoticComponentWithAs<DefaultComponentType, ComponentProps> {
  /**
   * Inherited from React.ForwardRefExoticComponent
   * Will show `ForwardRef(${Component.displayName || Component.name})` in devtools by default,
   * but can be given its own specific name
   */
  defaultProps?: Partial<PropsWithAs<DefaultComponentType, ComponentProps>>
  propTypes?: WeakValidationMap<
    PropsWithAs<DefaultComponentType, ComponentProps>
  >
}

export interface MemoExoticComponentWithAs<
  DefaultComponentType extends As,
  ComponentProps
> extends NamedExoticComponentWithAs<DefaultComponentType, ComponentProps> {
  readonly type: DefaultComponentType extends ComponentType
    ? DefaultComponentType
    : FunctionComponentWithAs<DefaultComponentType, ComponentProps>
}

export interface ForwardRefWithAsRenderFunction<
  DefaultComponentType extends As,
  ComponentProps = Record<string, any>
> {
  (
    props: PropsWithChildren<PropsFromAs<DefaultComponentType, ComponentProps>>,
    ref:
      | ((
          instance:
            | (DefaultComponentType extends keyof ElementTagNameMap
                ? ElementTagNameMap[DefaultComponentType]
                : any)
            | null
        ) => void)
      | MutableRefObject<
          | (DefaultComponentType extends keyof ElementTagNameMap
              ? ElementTagNameMap[DefaultComponentType]
              : any)
          | null
        >
      | null
  ): ReactElement | null
  displayName?: string
  // explicit rejected with `never` required due to
  // https://github.com/microsoft/TypeScript/issues/36826
  /**
   * defaultProps are not supported on render functions
   */
  defaultProps?: never
  /**
   * propTypes are not supported on render functions
   */
  propTypes?: never
}

export function forwardRefWithAs<
  Props,
  DefaultComponentType extends As = 'div'
>(render: ForwardRefWithAsRenderFunction<DefaultComponentType, Props>) {
  return forwardRef(render) as ForwardRefExoticComponentWithAs<
    DefaultComponentType,
    Props
  >
}

export function forwardRefWithAsAndStatics<
  Props,
  DefaultComponentType extends As = 'div',
  Statics = unknown
>(render: ForwardRefWithAsRenderFunction<DefaultComponentType, Props>) {
  return forwardRef(render) as ForwardRefExoticComponentWithAs<
    DefaultComponentType,
    Props
  > &
    Statics
}

export function forwardRefWithStatics<
  Props,
  TagName = 'div',
  Statics = unknown
>(render: ForwardRefRenderFunction<HTMLDivElement, Props>) {
  return forwardRef(render) as ForwardRefExoticComponent<
    PropsWithoutRef<Props> & RefAttributes<TagName>
  > &
    Statics
}

export function memoWithAs<Props, DefaultComponentType extends As = 'div'>(
  Component: FunctionComponentWithAs<DefaultComponentType, Props>,
  propsAreEqual?: (
    prevProps: Readonly<PropsWithChildren<Props>>,
    nextProps: Readonly<PropsWithChildren<Props>>
  ) => boolean
) {
  return memo(Component, propsAreEqual) as MemoExoticComponentWithAs<
    DefaultComponentType,
    Props
  >
}
