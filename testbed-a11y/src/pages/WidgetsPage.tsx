import EmptyState from '@pluralsight/ps-design-system-emptystate'
import Button from '@pluralsight/ps-design-system-button'
import { FC, MouseEventHandler } from 'react'
import { useHistory } from 'react-router-dom'

import styles from './WidgetsPage.module.css'

export const WidgetsPage: FC = props => {
  const history = useHistory()

  const handleClick: MouseEventHandler = evt => {
    evt.preventDefault()

    history.push('/widgets/create')
  }

  return (
    <div className={styles.page} {...props}>
      <EmptyState
        heading={<EmptyState.Heading>Widgets</EmptyState.Heading>}
        caption={
          <EmptyState.Caption>
            Hedwig Daily Prophet treacle tart full-moon Ollivanders You-Know-Who
            cursed. Fawkes maze raw-steak Voldemort Goblin Wars snitch Forbidden
            forest grindylows wool socks.
          </EmptyState.Caption>
        }
        illustration={
          <EmptyState.Illustration
            name={EmptyState.Illustration.names.magnify}
          />
        }
        actions={
          <EmptyState.Actions>
            <Button
              appearance={Button.appearances.stroke}
              onClick={handleClick}
            >
              Create a New Widget
            </Button>
          </EmptyState.Actions>
        }
      />
    </div>
  )
}
