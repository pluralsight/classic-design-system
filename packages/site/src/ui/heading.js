import core from '@pluralsight/ps-design-system-core'
import * as glamor from 'glamor'
import { Heading } from '@pluralsight/ps-design-system-text/react'

const styleSize = ({ size }) =>
  ({
    large: {
      margin: '56px 0 0 0'
    },
    xxLarge: {
      margin: '56px 0'
    }
  }[size])

const style = props =>
  glamor.css(
    {
      color: core.colors.gray06
    },
    styleSize(props)
  )

export default props =>
  <div className={`heading ${props.size}`}>
    <Heading>
      {props.children}
    </Heading>
    <style jsx>{`
      /* TODO: style with jsx without global tag */
      .heading :global(h1),
      .heading :global(h2),
      .heading :global(h3),
      .heading :global(h4) {
        color: ${core.colors.gray06}
      }
      .heading.${Heading.sizes.large} :global(h1),
      .heading.${Heading.sizes.large} :global(h2),
      .heading.${Heading.sizes.large} :global(h3),
      .heading.${Heading.sizes.large} :global(h4) {
         margin: 56px 0 0 0;
      }
      .heading.${Heading.sizes.xxLarge} :global(h1),
      .heading.${Heading.sizes.xxLarge} :global(h2),
      .heading.${Heading.sizes.xxLarge} :global(h3),
      .heading.${Heading.sizes.xxLarge} :global(h4) {
         margin: 56px 0;
      }
`}</style>
  </div>
