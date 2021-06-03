import Avatar, {
  sizes as avatarSizes
} from '@pluralsight/ps-design-system-avatar'
import { themeNames, useTheme } from '@pluralsight/ps-design-system-theme'
import { HTMLPropsFor, ValueOf } from '@pluralsight/ps-design-system-util'
import glamorDefault, * as glamorExports from 'glamor'
import React from 'react'

import stylesheet from '../css/index'

const glamor = glamorDefault || glamorExports

const styles = {
  note: (themeName: ValueOf<typeof themeNames>) =>
    glamor.compose(
      glamor.css(stylesheet['.psds-note']),
      glamor.css(stylesheet[`.psds-note.psds-theme--${themeName}`])
    ),
  actionBar: (
    themeName: ValueOf<typeof themeNames>,
    {
      hasHeading,
      hasMetadata,
      actionBarVisible
    }: { hasHeading: boolean; hasMetadata: boolean; actionBarVisible: boolean }
  ) =>
    glamor.compose(
      glamor.css(stylesheet['.psds-note__action-bar']),
      glamor.css(stylesheet[`.psds-note__action-bar.psds-theme--${themeName}`]),
      actionBarVisible &&
        glamor.css(stylesheet[`.psds-note__action-bar--action-bar-visible`]),
      hasMetadata &&
        !hasHeading &&
        glamor.css(stylesheet['.psds-note__action-bar--meta-sibling'])
    ),
  action: (themeName: ValueOf<typeof themeNames>) =>
    glamor.compose(
      glamor.css(stylesheet['.psds-note__action']),
      glamor.css(stylesheet[`.psds-note__action.psds-theme--${themeName}`])
    ),
  aside: () => glamor.css(stylesheet['.psds-note__aside']),
  contents: (themeName: ValueOf<typeof themeNames>) =>
    glamor.compose(
      glamor.css(stylesheet['.psds-note__contents']),
      glamor.css(stylesheet[`.psds-note__contents.psds-theme--${themeName}`])
    ),
  footer: () => glamor.css(stylesheet['.psds-note__footer']),
  header: () => glamor.css(stylesheet['.psds-note__header']),
  heading: () => glamor.compose(glamor.css(stylesheet['.psds-note__heading'])),
  noteList: () => glamor.css(stylesheet['.psds-note__list']),
  noteListItem: (themeName: ValueOf<typeof themeNames>) =>
    glamor.compose(
      glamor.css(stylesheet['.psds-note__list-item']),
      glamor.css(stylesheet[`.psds-note__list-item.psds-theme--${themeName}`])
    ),
  metadata: (themeName: ValueOf<typeof themeNames>) =>
    glamor.compose(
      glamor.css(stylesheet['.psds-note__metadata']),
      glamor.css(stylesheet[`.psds-note__metadata.psds-theme--${themeName}`])
    ),
  metadataDatum: (themeName: ValueOf<typeof themeNames>) =>
    glamor.compose(
      glamor.css(stylesheet['.psds-note__metadata-datum']),
      glamor.css(
        stylesheet[`.psds-note__metadata-datum.psds-theme--${themeName}`]
      )
    ),
  metadataDot: () => glamor.css(stylesheet['.psds-note__metadata-dot'])
}

interface NoteProps extends HTMLPropsFor<'div'> {
  actionBar?: React.ReactElement<typeof Action>[]
  actionBarVisible?: boolean
  avatar?:
    | React.ReactElement<typeof Avatar>
    | React.ReactElement<typeof AvatarLink>
  heading?: string | React.ReactElement
  message: React.ReactNode
  metadata?: React.ReactNode[]
  onMouseOut?: React.MouseEventHandler
  onMouseOver?: React.MouseEventHandler
}
interface NoteStatics {
  Action: typeof Action
  AvatarLink: typeof AvatarLink
  List: typeof NoteList
}

export const Note: React.FC<NoteProps> & NoteStatics = props => {
  const {
    actionBar,
    actionBarVisible,
    avatar,
    heading,
    message,
    metadata,
    onMouseOut,
    onMouseOver,
    ...rest
  } = props
  const themeName = useTheme()
  const [isHovered, setIsHovered] = React.useState(false)

  const handleMouseOver = (evt: React.MouseEvent) => {
    setIsHovered(true)
    if (onMouseOver) onMouseOver(evt)
  }

  const handleMouseOut = (evt: React.MouseEvent) => {
    setIsHovered(false)
    if (onMouseOut) onMouseOut(evt)
  }

  const hasActions = Array.isArray(actionBar) && actionBar.length > 0
  const hasAside = !!avatar
  const hasHeading = !!heading
  const hasMetadata = Array.isArray(metadata) && metadata.length > 0

  const renderActionBar = hasActions ? (
    <div
      {...styles.actionBar(themeName, {
        hasHeading,
        hasMetadata,
        actionBarVisible: actionBarVisible || isHovered
      })}
    >
      {(actionBar || []).map((action, key) => {
        return React.cloneElement(action, { key })
      })}
    </div>
  ) : null

  return (
    <div
      {...styles.note(themeName)}
      {...rest}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      {hasAside && (
        <div {...styles.aside()}>
          {React.cloneElement(avatar as React.ReactElement<any>, {
            size: avatarSizes.xSmall
          })}
        </div>
      )}

      <div {...styles.contents(themeName)}>
        {hasHeading && (
          <div {...styles.header()}>
            {heading && <div {...styles.heading()}>{heading}</div>}
            {renderActionBar}
          </div>
        )}

        {message}

        <div {...styles.footer()}>
          {hasMetadata && (
            <div {...styles.metadata(themeName)}>
              {(metadata || []).map((datum: React.ReactNode, i) => {
                const hasNext = i < (metadata || []).length - 1

                return (
                  <React.Fragment key={`datum-${i}`}>
                    <span {...styles.metadataDatum(themeName)}>{datum}</span>
                    {hasNext && (
                      <span aria-hidden {...styles.metadataDot()}>
                        &middot;
                      </span>
                    )}
                  </React.Fragment>
                )
              })}
            </div>
          )}

          {!hasHeading && renderActionBar}
        </div>
      </div>
    </div>
  )
}

const NoteList: React.FC<HTMLPropsFor<'ol'>> = ({ children, ...rest }) => {
  const themeName = useTheme()
  return (
    <ol {...styles.noteList()} {...rest}>
      {React.Children.map(children, child => (
        <li {...styles.noteListItem(themeName)}>{child}</li>
      ))}
    </ol>
  )
}
NoteList.displayName = 'Note.List'

interface ActionProps extends HTMLPropsFor<'button'> {
  icon: React.ReactNode
  title: string
}
const Action = React.forwardRef<HTMLButtonElement, ActionProps>(
  (props, ref) => {
    const { icon, ...rest } = props
    const themeName = useTheme()
    return (
      <button ref={ref} {...styles.action(themeName)} {...rest}>
        {icon}
      </button>
    )
  }
)
Action.displayName = 'Note.Action'

const AvatarLink: React.FC = props => {
  const link = props.children as React.ReactElement<any>
  const avatar = link.props.children

  return (
    <>
      {React.cloneElement(link, {
        children: React.cloneElement(avatar as React.ReactElement<any>, {
          size: avatarSizes.xSmall
        })
      })}
    </>
  )
}
AvatarLink.displayName = 'Note.AvatarLink'

Note.Action = Action
Note.AvatarLink = AvatarLink
Note.List = NoteList
