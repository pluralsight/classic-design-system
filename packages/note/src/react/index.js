import * as glamor from 'glamor'
import React from 'react'

import { useTheme } from '@pluralsight/ps-design-system-theme/react'
import filterReactProps from '@pluralsight/ps-design-system-filter-react-props'

import css from '../css/index.js'

const styles = {
  note: (themeName, props) =>
    glamor.compose(
      glamor.css(css['.psds-note']),
      glamor.css(css[`.psds-note.psds-theme--${themeName}`])
    ),
  noteList: (themeName, props) =>
    glamor.compose(
      glamor.css(css['.psds-note']),
      glamor.css(css[`.psds-note.psds-theme--${themeName}`])
    )
}

export default function Note(props) {
  const themeName = useTheme()

  return <div {...styles.note(themeName, props)} {...filterReactProps(props)} />
}

Note.propTypes = {}

function NoteList(props) {
  const themeName = useTheme()

  return (
    <div {...styles.noteList(themeName, props)} {...filterReactProps(props)} />
  )
}

Note.List = NoteList
NoteList.displayName = 'Note.List'
