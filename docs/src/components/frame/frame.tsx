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

import { Aside } from './aside'
import styles from './frame.module.css'
import { Header } from './header'
import { SkipBanner, SkipTarget } from './skip-banner'

const SKIP_TARGET_ID = 'frame--skip-target'
const THEME_COOKIE_NAME = 'psds-docs-theme'

interface Props extends HTMLAttributes<HTMLDivElement> {
  aside: ReactNode
  hasTableOfContents: boolean
}

function oneYearFuture() {
  const today = new Date()
  return new Date(today.getFullYear() + 1, today.getMonth(), today.getDate())
}

export const Frame: React.FC<Props> = props => {
  const { aside, hasTableOfContents, children, ...rest } = props

  const [cookies, setCookie] = useCookies([THEME_COOKIE_NAME])
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)
  const toggleMenu = () => setMenuOpen(!menuOpen)

  const prefersDark =
    canUseDOM() && window.matchMedia('(prefers-color-scheme: dark)').matches

  const initialTheme =
    cookies[THEME_COOKIE_NAME] ||
    (prefersDark && Theme.names.dark) ||
    Theme.names.light
  console.log({ cookie: cookies[THEME_COOKIE_NAME], prefersDark, initialTheme })
  const [themeName, setTheme] = useState<ValueOf<typeof Theme.names>>(
    initialTheme
  )
  const toggleTheme = () => {
    const newThemeName =
      themeName === Theme.names.dark ? Theme.names.light : Theme.names.dark
    setTheme(newThemeName)
    setCookie(THEME_COOKIE_NAME, newThemeName, {
      path: '/',
      expires: oneYearFuture()
    })
  }

  const skipTargetRef = useRef<HTMLAnchorElement>(null)

  const focusSkipTarget = useCallback(() => {
    if (skipTargetRef.current) skipTargetRef.current.focus()
  }, [])

  const className = cx({
    [styles.frame]: true,
    [styles.dark]: themeName === Theme.names.dark,
    [styles.light]: themeName === Theme.names.light,
    [styles.fullWidth]: !hasTableOfContents
  })

  return (
    <>
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

              {children}
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
  return <main className={styles.main} {...props} />
}
