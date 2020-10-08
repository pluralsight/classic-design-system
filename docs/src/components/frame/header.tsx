import cx from 'classnames'
import React, { HTMLAttributes } from 'react'

import Button from '@pluralsight/ps-design-system-button'
import { MenuIcon, ThemeIcon } from '@pluralsight/ps-design-system-icon'

import styles from './header.module.css'

interface HeaderProps extends HTMLAttributes<HTMLDivElement> {
  onMenuButtonClick: React.MouseEventHandler<HTMLButtonElement>
  onThemeButtonClick: React.MouseEventHandler<HTMLButtonElement>
}

export const Header: React.FC<HeaderProps> = props => {
  const { onMenuButtonClick, onThemeButtonClick, ...rest } = props

  return (
    <header {...rest} className={cx(styles.header, props.className)}>
      <Button
        appearance={Button.appearances.flat}
        className={styles.menuButton}
        icon={<MenuIcon />}
        onClick={onMenuButtonClick}
        size={Button.sizes.medium}
        title="Toggle Menu"
      />

      <Button
        appearance={Button.appearances.secondary}
        className={styles.themeButton}
        icon={<ThemeIcon />}
        onClick={onThemeButtonClick}
        size={Button.sizes.medium}
        title="Toggle Theme"
      />
    </header>
  )
}
