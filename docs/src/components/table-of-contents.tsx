import { Heading } from '@pluralsight/ps-design-system-text'
import VerticalTabs from '@pluralsight/ps-design-system-verticaltabs'
import React from 'react'
import GithubSlugger from 'github-slugger'

import * as styles from './table-of-contents.module.css'

export interface Heading {
  value: string
  depth: number
}

interface TableOfContentsProps {
  headings: Heading[]
}
export const TableOfContents: React.FC<TableOfContentsProps> = props => {
  let slugger = new GithubSlugger()
  React.useEffect(() => {
    slugger = new GithubSlugger()
  }, [slugger])
  return (
    <nav className={styles.toc}>
      <Heading size={Heading.sizes.xXXSmall} color={Heading.colors.secondary}>
        <h4 className={styles.title}>Contents</h4>
      </Heading>
      <VerticalTabs>
        {props.headings
          .filter(h => h.depth > 1)
          .map(h => {
            const href = '#' + slugger.slug(h.value)

            return h.depth === 2 ? (
              <VerticalTabs.Tier1
                key={h.value}
                header={
                  <VerticalTabs.Tier1.Header href={href}>
                    {h.value}
                  </VerticalTabs.Tier1.Header>
                }
              />
            ) : (
              <VerticalTabs.Tier2
                key={h.value}
                header={
                  <VerticalTabs.Tier2.Header href={href}>
                    {h.value}
                  </VerticalTabs.Tier2.Header>
                }
              />
            )
          })}
      </VerticalTabs>
    </nav>
  )
}
