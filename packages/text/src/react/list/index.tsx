import { compose, css } from 'glamor'
import React from 'react'

import { useTheme, names } from '@pluralsight/ps-design-system-theme'
import { ValueOf, HTMLPropsFor } from '@pluralsight/ps-design-system-util'

import ListItem from './list-item'

import stylesheet from '../../css'
import * as vars from '../../vars'

const styles = ({
  themeName,
  size,
  color,
  type
}: {
  themeName: ValueOf<typeof names>
  size: ValueOf<typeof vars.listSizes>
  color: ValueOf<typeof vars.textColors>
  type: ValueOf<typeof vars.listTypes>
}) =>
  compose(
    css(stylesheet[`.psds-text__list`]),
    css(stylesheet[`.psds-text__list--size-${size}`]),
    css(
      stylesheet[`.psds-text__list--color-${color}.psds-theme--${themeName}`]
    ),
    css(stylesheet[`.psds-text__list--type-${type}`])
  )

interface ListStatics {
  types: typeof vars.listTypes
  sizes: typeof vars.listSizes
  colors: typeof vars.textColors
  Item: typeof ListItem
}

interface UnorderedListProps extends HTMLPropsFor<'ul'> {
  size?: ValueOf<typeof vars.listSizes>
  color?: ValueOf<typeof vars.textColors>
  type?: ValueOf<typeof vars.listTypes>
}

interface OrderedListProps extends Omit<HTMLPropsFor<'ol'>, 'type'> {
  type?: ValueOf<typeof vars.listTypes>
  color?: ValueOf<typeof vars.textColors>
  type?: ValueOf<typeof vars.listTypes>
}

type ListProps = UnorderedListProps | OrderedListProps

const List: React.FC<ListProps> & ListStatics = ({
  size = vars.listSizes.medium,
  color = vars.textColors.primary,
  type = vars.listTypes.default,
  ...props
}) => {
  const themeName = useTheme()
  const Wrapper: React.FC = wrapperProps =>
    type === 'numbered' ? <ol {...wrapperProps} /> : <ul {...wrapperProps} />


  return <Wrapper {...styles({ themeName, type })} {...props} />
}

List.sizes = vars.listSizes
List.colors = vars.textColors
List.types = vars.listTypes
List.Item = ListItem

export const sizes = vars.listSizes
export const colors = vars.textColors

export default List
