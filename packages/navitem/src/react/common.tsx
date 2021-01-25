import Halo from '@pluralsight/ps-design-system-halo'
import {
  HTMLPropsFor,
  ValueOf,
  stylesFor
} from '@pluralsight/ps-design-system-util'
import { compose, css } from 'glamor'
import React, { FC, useContext, useMemo } from 'react'

import Context from './context'
import stylesheet from '../css'
import { alignments } from '../vars'

const styles = {
  bar: (props: {
    alignment: ValueOf<typeof alignments>
    selected: boolean
    // eslint-disable-next-line camelcase
    UNSAFE_stylesFor: unknown
  }) => {
    const isHorz = props.alignment === alignments.horizontal
    const isVert = props.alignment === alignments.vertical

    return compose(
      css(stylesheet['.psds-navitem__bar']),
      isHorz && css(stylesheet['.psds-navitem__horz-bar']),
      isVert && css(stylesheet['.psds-navitem__vert-bar']),
      props.selected && stylesheet['.psds-navitem__bar--selected'],
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

export const Bar: FC<HTMLPropsFor<'div'>> = props => {
  // eslint-disable-next-line camelcase
  const { alignment, selected, UNSAFE_stylesFor } = useContext(Context)

  return (
    <div
      {...styles.bar({ alignment, selected, UNSAFE_stylesFor })}
      {...props}
    />
  )
}

export const Button: FC = props => {
  const { renderContainer, ref, selected, rest } = useContext(Context)
  const Container = useMemo(() => renderContainer, [renderContainer])

  return (
    <Halo inline gapSize={Halo.gapSizes.small}>
      <Container {...styles.button({ selected })} ref={ref} {...rest}>
        {props.children}
      </Container>
    </Halo>
  )
}
