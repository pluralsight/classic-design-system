import cx from 'classnames'
import React, {
  HTMLAttributes,
  ReactNode,
  useCallback,
  useRef,
  useState,
} from 'react'
import { Helmet } from 'react-helmet'

import Theme from '@pluralsight/ps-design-system-theme'

import { Aside } from './aside'
import { Header } from './header'
import { SkipBanner, SkipTarget } from './skip-banner'

import styles from './frame.module.css'

const SKIP_TARGET_ID = 'frame--skip-target'

interface Props extends HTMLAttributes<HTMLDivElement> {
  aside: ReactNode
}

export const Frame: React.FC<Props> = (props) => {
  const { aside, children, ...rest } = props

  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)
  const toggleMenu = () => setMenuOpen(!menuOpen)

  const [theme, setTheme] = useState<ValueOf<typeof Theme.names>>(
    Theme.names.light
  )
  const toggleTheme = () => {
    setTheme(theme === Theme.names.dark ? Theme.names.light : Theme.names.dark)
  }

  const skipTargetRef = useRef<HTMLAnchorElement>(null)

  const focusSkipTarget = useCallback(() => {
    if (skipTargetRef.current) skipTargetRef.current.focus()
  }, [])

  const className = cx({
    [styles.frame]: true,
    [styles.dark]: theme === Theme.names.dark,
    [styles.light]: theme === Theme.names.light,
  })

  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://cloud.typography.com/6966154/6397212/css/fonts.css"
        />
      </Helmet>

      <Theme name={theme}>
        <SkipBanner href={'#' + SKIP_TARGET_ID} onClick={focusSkipTarget} />

        <div className={className} {...rest}>
          <Header
            onMenuButtonClick={toggleMenu}
            onThemeButtonClick={toggleTheme}
          />

          <Container>
            <Aside onRequestClose={closeMenu} open={menuOpen}>
              {aside}
            </Aside>

            <Main>
              <SkipTarget id={SKIP_TARGET_ID} ref={skipTargetRef} />

              {children}
            </Main>
          </Container>
        </div>
      </Theme>
    </>
  )
}

const Container: React.FC = (props) => (
  <div className={styles.container} {...props} />
)

const Main: React.FC = (props) => <main className={styles.main} {...props} />
