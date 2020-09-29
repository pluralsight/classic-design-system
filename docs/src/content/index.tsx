import { Heading } from '@pluralsight/ps-design-system-text'
import Theme, { useTheme } from '@pluralsight/ps-design-system-theme'
import cx from 'classnames'
import React from 'react'

import { A, P, Ul } from '../components/mdx'
import * as styles from './index.module.css'

export const HomePage: React.FC = () => {
  const themeName = useTheme()
  return (
    <div
      className={cx({
        [styles.home]: true,
        [styles.light]: themeName === Theme.names.light,
        [styles.dark]: themeName === Theme.names.dark
      })}
    >
      <header className={styles.header}>
        <div className={styles.headerText}>
          <Heading size={Heading.sizes.xLarge}>
            <h1>
              Pluralsight <br />
              Design System
            </h1>
          </Heading>
          <P>
            The Pluralsight Design System strives toward a cohesive design
            language for Pluralsight’s products, a shared vocabulary for our
            teams, and building block components to accelerate development.
          </P>
        </div>
        <div className={styles.headerImg} />
      </header>

      <ul className={styles.steps}>
        <li>
          <Heading size={Heading.sizes.medium}>
            <h2>Install & configure</h2>
          </Heading>
          <P>Everything you need to get up and running with the code.</P>
          <A href="/install">See more</A>
        </li>
        <li>
          <Heading size={Heading.sizes.medium}>
            <h2>Contribute</h2>
          </Heading>
          <P>
            Want to pitch in? We have opportunities for internal and external
            contributions.
          </P>
          <A href="/contribute">See more</A>
        </li>
        <li>
          <Heading size={Heading.sizes.medium}>
            <h2>Resources</h2>
          </Heading>
          <ul className={styles.resources}>
            <li>
              <A href="https://github.com/pluralsight/design-system">Github</A>
            </li>
            <li>
              <A href="slack://channel?id=70HPSJPP&team=02A50N5X">Slack</A>{' '}
              (internal)
            </li>
            <li>
              <A href="https://www.figma.com/file/YsTklBecdddy9RZ3HXddIseD/PSDS-Web?node-id=69%3A2190">
                Figma
              </A>{' '}
              (internal)
            </li>
          </ul>
        </li>
      </ul>
    </div>
  )
}
