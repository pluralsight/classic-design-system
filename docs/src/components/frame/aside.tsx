import cx from 'classnames'
import React, { HTMLAttributes, useRef } from 'react'

import useOnClickOutside from '../../hooks/use-on-click-outside'
import useOnEscape from '../../hooks/use-on-escape'

import styles from './aside.module.css'

interface Props extends HTMLAttributes<HTMLDivElement> {
  onRequestClose: () => void
  open: boolean
}

export const Aside: React.FC<Props> = props => {
  const { onRequestClose, open, ...rest } = props

  const ref = useRef()

  useOnClickOutside(ref, onRequestClose)
  useOnEscape(onRequestClose)

  const className = cx({
    [styles.aside]: true,
    [styles.closed]: !open
  })

  return <aside className={className} ref={ref} {...rest} />
}
