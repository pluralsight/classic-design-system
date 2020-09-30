import Theme from '@pluralsight/ps-design-system-theme'
import { canUseDOM } from '@pluralsight/ps-design-system-util'
import cx from 'classnames'
import React, {
  HTMLAttributes,
  ReactNode,
  useCallback,
  useRef,
  useState
} from 'react'
import { useCookies } from 'react-cookie'
import { Helmet } from 'react-helmet'

import { Aside } from './aside'
import styles from './frame.module.css'
import { Header } from './header'
import { SkipBanner, SkipTarget } from './skip-banner'

const SKIP_TARGET_ID = 'frame--skip-target'
const THEME_COOKIE_NAME = 'psds-docs-theme'

interface Props extends HTMLAttributes<HTMLDivElement> {
  aside: ReactNode
}

export const Frame: React.FC<Props> = props => {
  const { aside, children, ...rest } = props

  const [cookies, setCookie] = useCookies([THEME_COOKIE_NAME])
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)
  const toggleMenu = () => setMenuOpen(!menuOpen)

  const [themeName, setTheme] = useState<ValueOf<typeof Theme.names>>(
    cookies[THEME_COOKIE_NAME] || Theme.names.light
  )
  const toggleTheme = () => {
    const newThemeName =
      themeName === Theme.names.dark ? Theme.names.light : Theme.names.dark
    setTheme(newThemeName)
    setCookie(THEME_COOKIE_NAME, newThemeName)
  }

  const skipTargetRef = useRef<HTMLAnchorElement>(null)

  const focusSkipTarget = useCallback(() => {
    if (skipTargetRef.current) skipTargetRef.current.focus()
  }, [])

  const isComponentPage =
    canUseDOM() && /components|core|guides/.test(window.location.pathname)

  const className = cx({
    [styles.frame]: true,
    [styles.dark]: themeName === Theme.names.dark,
    [styles.light]: themeName === Theme.names.light,
    [styles.fullWidth]: !isComponentPage
  })

  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://cloud.typography.com/6966154/6397212/css/fonts.css"
        />
      </Helmet>

      <Theme name={themeName}>
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

              <article>{children}</article>
            </Main>
          </Container>
        </div>
      </Theme>
    </>
  )
}

const Container: React.FC = props => (
  <div className={styles.container} {...props} />
)

const Main: React.FC = props => {
  return (
    <main
      className={styles.main}
      {...props}
    />
  )
}
