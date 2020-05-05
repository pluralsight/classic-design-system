import { compose, css } from 'glamor'
import React from 'react'
import PropTypes from 'prop-types'

import Avatar from '@pluralsight/ps-design-system-avatar'
import { useTheme } from '@pluralsight/ps-design-system-theme'
import { elementOfType } from '@pluralsight/ps-design-system-prop-types'
import filterReactProps from '@pluralsight/ps-design-system-filter-react-props'

import stylesheet from '../css/index.js'

const styles = {
  note: themeName =>
    compose(
      css(stylesheet['.psds-note']),
      css(stylesheet[`.psds-note.psds-theme--${themeName}`])
    ),
  actionBar: (themeName, props) =>
    compose(
      css(stylesheet['.psds-note__action-bar']),
      css(stylesheet[`.psds-note__action-bar.psds-theme--${themeName}`]),
      props.actionBarVisible &&
        css(stylesheet[`.psds-note__action-bar--action-bar-visible`]),
      props.hasMetadata &&
        !props.hasHeading &&
        css(stylesheet['.psds-note__action-bar--meta-sibling'])
    ),
  action: themeName =>
    compose(
      css(stylesheet['.psds-note__action']),
      css(stylesheet[`.psds-note__action.psds-theme--${themeName}`])
    ),
  aside: _ => css(stylesheet['.psds-note__aside']),
  contents: themeName =>
    compose(
      css(stylesheet['.psds-note__contents']),
      css(stylesheet[`.psds-note__contents.psds-theme--${themeName}`])
    ),
  footer: _ => css(stylesheet['.psds-note__footer']),
  header: _ => css(stylesheet['.psds-note__header']),
  heading: () => compose(css(stylesheet['.psds-note__heading'])),
  noteList: _ => css(stylesheet['.psds-note__list']),
  noteListItem: themeName =>
    compose(
      css(stylesheet['.psds-note__list-item']),
      css(stylesheet[`.psds-note__list-item.psds-theme--${themeName}`])
    ),
  metadata: themeName =>
    compose(
      css(stylesheet['.psds-note__metadata']),
      css(stylesheet[`.psds-note__metadata.psds-theme--${themeName}`])
    ),
  metadataDatum: themeName =>
    compose(
      css(stylesheet['.psds-note__metadata-datum']),
      css(stylesheet[`.psds-note__metadata-datum.psds-theme--${themeName}`])
    ),
  metadataDot: _ => css(stylesheet['.psds-note__metadata-dot'])
}

export default function Note(props) {
  const themeName = useTheme()
  const [isHovered, setIsHovered] = React.useState(false)

  const handleMouseOver = (...args) => {
    setIsHovered(true)
    if (props.onMouseOver) props.onMouseOver(...args)
  }

  const handleMouseOut = (...args) => {
    setIsHovered(false)
    if (props.onMouseOut) props.onMouseOut(...args)
  }

  const hasActions = !!props.actionBar && props.actionBar.length > 0
  const hasAside = !!props.avatar
  const hasHeading = !!props.heading
  const hasMetadata = !!props.metadata && props.metadata.length > 0

  const actionBar = hasActions ? (
    <ActionBar
      hasHeading={hasHeading}
      hasMetadata={hasMetadata}
      actionBarVisible={props.actionBarVisible || isHovered}
    >
      {props.actionBar.map((action, key) => {
        return React.cloneElement(action, { key })
      })}
    </ActionBar>
  ) : null

  return (
    <div
      {...styles.note(themeName, props)}
      {...filterReactProps(props)}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
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
          {hasMetadata && (
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
  const themeName = useTheme()
  return (
    <ol {...styles.noteList()} {...filterReactProps(props)}>
      {React.Children.map(children, child => (
        <li {...styles.noteListItem(themeName)}>{child}</li>
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
  return <div {...styles.actionBar(themeName, props)}>{props.children}</div>
}
ActionBar.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node)
}

const Action = React.forwardRef((props, ref) => {
  const themeName = useTheme()
  return (
    <button
      ref={ref}
      {...styles.action(themeName)}
      {...filterReactProps(props, { tagName: 'button' })}
    >
      {props.icon}
    </button>
  )
})

Action.displayName = 'Note.Action'
Action.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired
}

function AvatarLink(props) {
  const link = props.children
  const avatar = link.props.children

  return (
    <>
      {React.cloneElement(link, {
        children: React.cloneElement(avatar, { size: Avatar.sizes.xSmall })
      })}
    </>
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
  return <div {...styles.heading()} {...props} />
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
  actionBar: PropTypes.node,
  actionBarVisible: PropTypes.bool,
  avatar: PropTypes.oneOfType([
    elementOfType(Avatar),
    elementOfType(Note.AvatarLink)
  ]),
  heading: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  message: PropTypes.node.isRequired,
  metadata: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.node])
  ),
  onMouseOut: PropTypes.func,
  onMouseOver: PropTypes.func
}
