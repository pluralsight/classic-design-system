import cx from 'classnames'
import React, { HTMLAttributes, useRef } from 'react'

import Theme, { useTheme } from '@pluralsight/ps-design-system-theme'

import useOnClickOutside from '../../hooks/use-on-click-outside'
import useOnEscape from '../../hooks/use-on-escape'
import { useScrollRestoration } from '../side-nav/use-scroll-restoration'

import styles from './aside.module.css'

interface Props extends HTMLAttributes<HTMLDivElement> {
  onRequestClose: () => void
  open: boolean
}

export const Aside: React.FC<Props> = props => {
  const { onRequestClose, open, ...rest } = props

  const scrollRestore = useScrollRestoration('sidenav-list')

  const ref = useRef()
  const theme = useTheme()

  useOnClickOutside(ref, onRequestClose)
  useOnEscape(onRequestClose)

  const className = cx({
    [styles.aside]: true,
    [styles.closed]: !open,
    [styles.dark]: theme === Theme.names.dark,
    [styles.light]: theme === Theme.names.light
  })

  return <aside className={className} ref={ref} {...rest} {...scrollRestore} />
}
