/* eslint-disable */

/// <reference types="react" />

export declare type AnyTag = keyof JSX.IntrinsicElements
export declare type ElementOf<
  Tag extends AnyTag
> = JSX.IntrinsicElements[Tag] extends React.HTMLAttributes<infer E>
  ? E
  : JSX.IntrinsicElements[Tag] extends React.SVGProps<infer E>
  ? E
  : never

declare function ScreenReaderOnly<Tag extends AnyTag>(
  props: {
    as: Tag
  } & PropsOf<Tag>
): JSX.Element

declare namespace ScreenReaderOnly {
  var defaultProps: {
    as: string
  }
}

export default ScreenReaderOnly
