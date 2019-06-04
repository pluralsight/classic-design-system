import * as glamor from 'glamor'
import React from 'react'
import PropTypes from 'prop-types'

import Avatar from '@pluralsight/ps-design-system-avatar/react'
import { useTheme } from '@pluralsight/ps-design-system-theme/react'
import { elementOfType } from '@pluralsight/ps-design-system-prop-types'
import filterReactProps from '@pluralsight/ps-design-system-filter-react-props'

import css from '../css/index.js'

const styles = {
  note: (themeName, props) =>
    glamor.compose(
      glamor.css(css['.psds-note']),
      glamor.css(css[`.psds-note.psds-theme--${themeName}`])
    ),

  aside: _ => glamor.css(css['.psds-note__aside']),
  contents: themeName =>
    glamor.compose(
      glamor.css(css['.psds-note__contents']),
      glamor.css(css[`.psds-note__contents.psds-theme--${themeName}`])
    ),
  heading: _ => glamor.css(css['.psds-note__heading']),
  noteList: _ => glamor.css(css['.psds-note__list']),
  metadata: themeName =>
    glamor.compose(
      glamor.css(css['.psds-note__metadata']),
      glamor.css(css[`.psds-note__metadata.psds-theme--${themeName}`])
    ),
  metadataDatum: _ => glamor.css(css['.psds-note__metadata-datum']),
  metadataDot: _ => glamor.css(css['.psds-note__metadata-dot'])
}

export default function Note(props) {
  const themeName = useTheme()
  const hasAside = !!props.avatar
  const hasMeta = !!props.metadata && props.metadata.length > 0

  return (
    <div {...styles.note(themeName, props)} {...filterReactProps(props)}>
      {hasAside && (
        <Aside>
          {React.cloneElement(props.avatar, { size: Avatar.sizes.xSmall })}
        </Aside>
      )}

      <Contents>
        {props.heading && <Heading>{props.heading}</Heading>}
        {props.message}

        {hasMeta && (
          <Metadata>
            {props.metadata.map((datum, i) => {
              const hasNext = i < props.metadata.length - 1

              return (
                <React.Fragment key={`datum-${i}`}>
                  <MetadataDatum>{datum}</MetadataDatum>
                  {hasNext && <MetadataDot />}
                </React.Fragment>
              )
            })}
          </Metadata>
        )}
      </Contents>
    </div>
  )
}

Note.propTypes = {
  avatar: elementOfType(Avatar),
  heading: PropTypes.node,
  message: PropTypes.node.isRequired,
  metadata: PropTypes.arrayOf(PropTypes.string)
}

function Aside(props) {
  return <div {...styles.aside()} {...props} />
}

function Contents(props) {
  const themeName = useTheme()
  return <div {...styles.contents(themeName)} {...props} />
}

function Heading(props) {
  return <div {...styles.heading()} {...props} />
}

function NoteList(props) {
  return <div {...styles.noteList()} {...filterReactProps(props)} />
}

Note.List = NoteList
NoteList.displayName = 'Note.List'

function Metadata(props) {
  const themeName = useTheme()
  return <div {...styles.metadata(themeName)} {...props} />
}

function MetadataDatum(props) {
  return <span {...styles.metadataDatum()} {...props} />
}

function MetadataDot(props) {
  return (
    <span aria-hidden {...styles.metadataDot()} {...props}>
      &middot;
    </span>
  )
}
