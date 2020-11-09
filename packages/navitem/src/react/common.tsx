import Halo from '@pluralsight/ps-design-system-halo'
import { PropsOf, ValueOf, stylesFor } from '@pluralsight/ps-design-system-util'
import { compose, css } from 'glamor'
import React, { useContext } from 'react'

import stylesheet from '../css'
import { alignments } from '../vars'

import Context from './context'

const styles = {
  bar: (props: {
    alignment: ValueOf<typeof alignments>
    selected: boolean
  }) => {
    const isHorz = (props.alignment = alignments.horizontal)
    const isVert = (props.alignment = alignments.vertical)

    return compose(
      css(stylesheet['.psds-navitem__bar']),
      isHorz && css(stylesheet['.psds-navitem__horz-bar']),
      isVert && css(stylesheet['.psds-navitem__vert-bar']),
      stylesFor('navitem__bar', props),
      props.selected && stylesFor('navitem__bar--selected', props)
    )
  },
  button: (props: { selected: boolean }) =>
    compose(
      css(stylesheet['.psds-navitem__button']),
      props.selected && css(stylesheet['.psds-navitem__button--selected'])
    )
}

export const Bar: React.FC<PropsOf<'div'>> = props => {
  const { alignment, selected } = useContext(Context)
  return <div {...styles.bar({ alignment, selected })} {...props} />
}

export const Button: React.FC = props => {
  const { renderContainer: Container, selected } = useContext(Context)

  return (
    <Halo inline gapSize={Halo.gapSizes.small}>
      <Container {...styles.button({ selected })}>{props.children}</Container>
    </Halo>
  )
}
