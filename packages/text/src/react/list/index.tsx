import { compose, css } from 'glamor'
import React from 'react'

import { useTheme, names } from '@pluralsight/ps-design-system-theme'
import { ValueOf, HTMLPropsFor } from '@pluralsight/ps-design-system-util'

import ListItem from './list-item'

import stylesheet from '../../css'
import * as vars from '../../vars'

const styles = ({
  themeName,
  type
}: {
  themeName: ValueOf<typeof names>
  type: ValueOf<typeof vars.listTypes>
}) =>
  compose(
    css(stylesheet[`.psds-text__list.psds-theme--${themeName}`]),
    css(stylesheet[`.psds-text__list`]),
    css(stylesheet[`.psds-text__list--type-${type}`])
  )

interface ListStatics {
  types: typeof vars.listTypes
  Item: typeof ListItem
}

interface UnorderedListProps extends HTMLPropsFor<'ul'> {
  type?: ValueOf<typeof vars.listTypes>
}

interface OrderedListProps extends Omit<HTMLPropsFor<'ol'>, 'type'> {
  type?: ValueOf<typeof vars.listTypes>
}

type ListProps = UnorderedListProps | OrderedListProps

const List: React.FC<ListProps> & ListStatics = ({
  type = vars.listTypes.default,
  ...props
}) => {
  const themeName = useTheme()
  const Wrapper: React.FC = wrapperProps =>
    type === 'numbered' ? <ol {...wrapperProps} /> : <ul {...wrapperProps} />

  return <Wrapper {...styles({ themeName, type })} {...props} />
}

List.types = vars.listTypes
List.Item = ListItem

export default List
