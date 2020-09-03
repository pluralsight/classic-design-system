import React, { HTMLAttributes } from 'react'
import Button from '@pluralsight/ps-design-system-button'

import styles from './skip-banner.module.css'

interface SkipBannerProps extends HTMLAttributes<HTMLDivElement> {
  href: string
}

export const SkipBanner: React.FC<SkipBannerProps> = (props) => (
  <div className={styles.skipBanner} {...props}>
    <Button
      appearance={Button.appearances.secondary}
      size={Button.sizes.small}
      tabIndex={0}
    >
      skip to main content
    </Button>
  </div>
)

export const SkipTarget = React.forwardRef<
  HTMLAnchorElement,
  HTMLAttributes<HTMLAnchorElement>
>((props, ref) => <a ref={ref} tabIndex={-1} {...props} />)
