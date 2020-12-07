import { Heading, Label } from '@pluralsight/ps-design-system-text'
import React from 'react'

import { A, P, Ul } from '../components/mdx'
import * as styles from './index.module.css'

export const HomePage: React.FC = () => {
  return (
    <div className={styles.home}>
      <header className={styles.header}>
        <div className={styles.headerText}>
          <Heading size={Heading.sizes.xLarge}>
            <h1>
              Pluralsight <br />
              Design System
            </h1>
          </Heading>
          <P size={P.sizes.large}>
            The cohesive design language, shared vocabulary, and building block
            components to accelerate the building of Pluralsight products.
          </P>
        </div>
        <div className={styles.headerImg} />
      </header>

      <ul className={styles.steps}>
        <li>
          <Heading size={Heading.sizes.small}>
            <h2>Design</h2>
          </Heading>
          <P size={P.sizes.normal}>
            Learn how to use the design system Figma libraries.
          </P>
          <Label strong>
            <A href="/guides/designworkflow">See more</A>
          </Label>
        </li>
        <li>
          <Heading size={Heading.sizes.small}>
            <h2>Develop</h2>
          </Heading>
          <P size={P.sizes.normal}>
            Everything you need to get up and running with the code.
          </P>
          <Label strong>
            <A href="/guides/developmentworkflow">See more</A>
          </Label>
        </li>
        <li>
          <Heading size={Heading.sizes.small}>
            <h2>Contribute</h2>
          </Heading>
          <P size={P.sizes.normal}>
            Learn how you can contribute to the design system.
          </P>
          <Label strong>
            <A href="/guides/contribute">See more</A>
          </Label>
        </li>
        <li>
          <Heading size={Heading.sizes.small}>
            <h2>Resources</h2>
          </Heading>
          <ul className={styles.resources}>
            <li>
              <Label strong>
                <A href="https://github.com/pluralsight/design-system">
                  Github
                </A>
              </Label>
            </li>
            <li>
              <Label strong>
                <A href="slack://channel?id=70HPSJPP&team=02A50N5X">Slack</A>
              </Label>{' '}
              <Label size="small" color="secondary">
                (internal)
              </Label>
            </li>
            <li>
              <Label strong>
                <A href="https://www.figma.com/file/YsTklBecdddy9RZ3HXddIseD/PSDS-Web?node-id=69%3A2190">
                  Figma
                </A>
              </Label>{' '}
              <Label size="small" color="secondary">
                (internal)
              </Label>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  )
}
