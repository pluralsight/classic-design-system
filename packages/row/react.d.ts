import { ValueOf } from '@pluralsight/ps-design-system-util'
import React from 'react'
import * as vars from './dist/esm/vars/index'
declare type MetadataNode =
  | string
  | React.ReactElement<typeof Text>
  | React.ReactElement<typeof TextLink>
interface RowProps
  extends Omit<
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >,
    'title'
  > {
  actionBar?: React.ReactNode[]
  actionBarVisible?: boolean
  fullOverlay?: React.ReactNode | React.ReactElement<typeof FullOverlayLink>
  fullOverlayVisible?: boolean
  image?:
    | React.ReactElement<typeof Image>
    | React.ReactElement<typeof ImageLink>
  metadata1?: MetadataNode[]
  metadata2?: MetadataNode[]
  progress?: number
  size?: ValueOf<typeof vars.sizes>
  title?:
    | string
    | React.ReactElement<typeof Text>
    | React.ReactElement<typeof TextLink>
  titleTruncated?: boolean
}
interface RowStatics {
  FullOverlayLink: typeof FullOverlayLink
  Image: typeof Image
  ImageLink: typeof ImageLink
  Text: typeof Text
  TextLink: typeof TextLink
  sizes: typeof vars.sizes
}
declare const Row: React.FC<RowProps> & RowStatics
interface FullOverlayLinkProps extends React.HTMLAttributes<HTMLSpanElement> {}
declare const FullOverlayLink: React.FC<FullOverlayLinkProps>
interface ImageProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string
}
declare const Image: React.FC<ImageProps>
interface ImageLinkProps extends React.HTMLAttributes<HTMLSpanElement> {}
declare const ImageLink: React.FC<ImageLinkProps>
interface TextProps extends React.HTMLAttributes<HTMLSpanElement> {}
declare const Text: React.FC<TextProps>
interface TextLinkProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactElement<'a'>
  truncated?: boolean
}
declare const TextLink: React.FC<TextLinkProps>
export declare const sizes: Readonly<
  import('@pluralsight/ps-design-system-util/dist/esm/key-mirror').KeyMirror<
    ['small', 'medium']
  >
>
export default Row
