import { compose, css } from 'glamor'
import React, {HTMLAttributes} from 'react'

import { useTheme, names } from '@pluralsight/ps-design-system-theme'

import ListItem from './list-item'

import stylesheet from '../../css'
import * as vars from '../../vars'

const styles = ({ themeName, type}: { themeName: keyof typeof names; type: keyof typeof vars.listTypes}) =>
    compose(
      css(stylesheet[`.psds-text__list.psds-theme--${themeName}`]),
      css(stylesheet[`.psds-text__list`]),
      css(stylesheet[`.psds-text__list--type-${type}`])
    )

interface ListStatics {
  types: typeof vars.listTypes
  Item: typeof ListItem
}
    
interface ListProps extends HTMLAttributes<HTMLUListElement | HTMLOListElement> {
  type?:  keyof typeof vars.listTypes
}

const List: React.FC<ListProps> & ListStatics = ({ type = vars.listTypes.default, ...props }) => {
  const themeName = useTheme()
  const TagName = type === 'numbered' ? 'ol' : 'ul'

  return (
    <TagName
      {...styles({ themeName, type })}
      {...props}
    />
  )
}


List.types = vars.listTypes
List.Item = ListItem

export default List