import { useTheme, themeNames } from '@pluralsight/ps-design-system-theme'
import { ValueOf, HTMLPropsFor } from '@pluralsight/ps-design-system-util'
import glamorDefault, * as glamorExports from 'glamor'
import React from 'react'

import ListItem from './list-item'
import stylesheet from '../../css/index'
import * as vars from '../../vars/index'

const glamor = glamorDefault || glamorExports

const styles = ({
  themeName,
  size,
  color,
  type
}: {
  themeName: ValueOf<typeof themeNames>
  size: ValueOf<typeof vars.listSizes>
  color: ValueOf<typeof vars.textColors>
  type: ValueOf<typeof vars.listTypes>
}) =>
  glamor.compose(
    glamor.css(stylesheet[`.psds-text__list`]),
    glamor.css(stylesheet[`.psds-text__list--size-${size}`]),
    glamor.css(
      stylesheet[`.psds-text__list--color-${color}.psds-theme--${themeName}`]
    ),
    glamor.css(stylesheet[`.psds-text__list--type-${type}`])
  )

interface ListStatics {
  types: typeof vars.listTypes
  sizes: typeof vars.listSizes
  colors: typeof vars.textColors
  Item: typeof ListItem
}

interface UnorderedListProps extends HTMLPropsFor<'ul'> {
  type?: ValueOf<typeof vars.listTypes>
  size?: ValueOf<typeof vars.listSizes>
  color?: ValueOf<typeof vars.textColors>
}

interface OrderedListProps extends Omit<HTMLPropsFor<'ol'>, 'type'> {
  type?: ValueOf<typeof vars.listTypes>
  size?: ValueOf<typeof vars.listSizes>
  color?: ValueOf<typeof vars.textColors>
}

type ListProps = UnorderedListProps | OrderedListProps

const List: React.FC<ListProps> & ListStatics = ({
  type = vars.listTypes.default,
  size = vars.listSizes.medium,
  color = vars.textColors.primary,
  ...props
}) => {
  const themeName = useTheme()
  const Wrapper: React.FC = wrapperProps =>
    type === 'numbered' ? <ol {...wrapperProps} /> : <ul {...wrapperProps} />

  return <Wrapper {...styles({ themeName, type, size, color })} {...props} />
}

List.sizes = vars.listSizes
List.colors = vars.textColors
List.types = vars.listTypes
List.Item = ListItem

export const sizes = vars.listSizes
export const colors = vars.textColors

export default List
