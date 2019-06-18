import * as glamor from 'glamor'
import React from 'react'
import PropTypes from 'prop-types'

import Avatar from '@pluralsight/ps-design-system-avatar/react'
import Icon from '@pluralsight/ps-design-system-icon/react'
import { useTheme } from '@pluralsight/ps-design-system-theme/react'
import {
  arrayOfMaxLength,
  elementOfType
} from '@pluralsight/ps-design-system-prop-types'
import filterReactProps from '@pluralsight/ps-design-system-filter-react-props'

import css from '../css/index.js'

const styles = {
  note: themeName =>
    glamor.compose(
      glamor.css(css['.psds-note']),
      glamor.css(css[`.psds-note.psds-theme--${themeName}`])
    ),
  actionBar: themeName =>
    glamor.compose(
      glamor.css(css['.psds-note__action-bar']),
      glamor.css(css[`.psds-note__action-bar.psds-theme--${themeName}`])
    ),
  action: _ => glamor.css(css['.psds-note__action']),
  aside: _ => glamor.css(css['.psds-note__aside']),
  contents: themeName =>
    glamor.compose(
      glamor.css(css['.psds-note__contents']),
      glamor.css(css[`.psds-note__contents.psds-theme--${themeName}`])
    ),
  footer: _ => glamor.css(css['.psds-note__footer']),
  header: _ => glamor.css(css['.psds-note__header']),
  heading: themeName =>
    glamor.compose(
      glamor.css(css['.psds-note__heading']),
      glamor.css(css[`.psds-note__heading.psds-theme--${themeName}`])
    ),
  noteList: _ => glamor.css(css['.psds-note__list']),
  noteListItem: _ => glamor.css(css['.psds-note__list-item']),
  metadata: themeName =>
    glamor.compose(
      glamor.css(css['.psds-note__metadata']),
      glamor.css(css[`.psds-note__metadata.psds-theme--${themeName}`])
    ),
  metadataDatum: themeName =>
    glamor.compose(
      glamor.css(css['.psds-note__metadata-datum']),
      glamor.css(css[`.psds-note__metadata-datum.psds-theme--${themeName}`])
    ),
  metadataDot: _ => glamor.css(css['.psds-note__metadata-dot'])
}

export default function Note(props) {
  const themeName = useTheme()

  const hasActions = !!props.actionBar && props.actionBar.length > 0
  const hasAside = !!props.avatar
  const hasHeading = !!props.heading
  const hasMeta = !!props.metadata && props.metadata.length > 0

  const actionBar = hasActions ? (
    <ActionBar>
      {props.actionBar.map((action, key) => {
        return React.cloneElement(action, { key })
      })}
    </ActionBar>
  ) : null

  return (
    <div {...styles.note(themeName, props)} {...filterReactProps(props)}>
      {hasAside && (
        <Aside>
          {React.cloneElement(props.avatar, { size: Avatar.sizes.xSmall })}
        </Aside>
      )}

      <Contents>
        {hasHeading && (
          <Header>
            {props.heading && <Heading>{props.heading}</Heading>}
            {actionBar}
          </Header>
        )}

        {props.message}

        <Footer>
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

          {!hasHeading && actionBar}
        </Footer>
      </Contents>
    </div>
  )
}

function NoteList({ children, ...props }) {
  return (
    <ol {...styles.noteList()} {...filterReactProps(props)}>
      {React.Children.map(children, child => (
        <li {...styles.noteListItem()}>{child}</li>
      ))}
    </ol>
  )
}

NoteList.displayName = 'Note.List'
NoteList.propTypes = {
  children: PropTypes.node
}

function ActionBar(props) {
  const themeName = useTheme()
  return <div {...styles.actionBar(themeName)} {...props} />
}

const Action = React.forwardRef((props, ref) => (
  <button
    ref={ref}
    {...styles.action()}
    {...filterReactProps(props, { tagName: 'button' })}
  >
    {props.icon}
  </button>
))

Action.displayName = 'Note.Action'
Action.propTypes = {
  icon: elementOfType(Icon).isRequired,
  title: PropTypes.string.isRequired
}

function AvatarLink(props) {
  const link = props.children
  const avatar = link.props.children

  return (
    <React.Fragment>
      {React.cloneElement(link, {
        children: React.cloneElement(avatar, { size: Avatar.sizes.xSmall })
      })}
    </React.Fragment>
  )
}
AvatarLink.propTypes = {
  children: PropTypes.shape({
    type: PropTypes.oneOf(['a']),
    props: PropTypes.shape({
      children: elementOfType(Avatar).isRequired
    }).isRequired
  }).isRequired
}

function Aside(props) {
  return <div {...styles.aside()} {...props} />
}

function Contents(props) {
  const themeName = useTheme()
  return <div {...styles.contents(themeName)} {...props} />
}

function Footer(props) {
  return <div {...styles.footer()} {...props} />
}

function Header(props) {
  return <div {...styles.header()} {...props} />
}

function Heading(props) {
  const themeName = useTheme()
  return <div {...styles.heading(themeName)} {...props} />
}

function Metadata(props) {
  const themeName = useTheme()
  return <div {...styles.metadata(themeName)} {...props} />
}

function MetadataDatum(props) {
  const themeName = useTheme()
  return <span {...styles.metadataDatum(themeName)} {...props} />
}

function MetadataDot(props) {
  return (
    <span aria-hidden {...styles.metadataDot()} {...props}>
      &middot;
    </span>
  )
}

Note.Action = Action
Note.AvatarLink = AvatarLink
Note.List = NoteList

Note.propTypes = {
  actionBar: arrayOfMaxLength(2, PropTypes.node),
  avatar: PropTypes.oneOfType([
    elementOfType(Avatar),
    elementOfType(Note.AvatarLink)
  ]),
  heading: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  message: PropTypes.node.isRequired,
  metadata: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.node])
  )
}
