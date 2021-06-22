import Halo from '@pluralsight/ps-design-system-halo'
import {
  HTMLPropsFor,
  ValueOf,
  stylesFor
} from '@pluralsight/ps-design-system-util'
import glamorDefault, * as glamorExports from 'glamor'
import React from 'react'

import Context from './context'
import stylesheet from '../css/index'
import { alignments } from '../vars/index'

const glamor = glamorDefault || glamorExports

const styles = {
  bar: (props: {
    alignment: ValueOf<typeof alignments>
    selected: boolean
    // eslint-disable-next-line camelcase
    UNSAFE_stylesFor: unknown
  }) => {
    const isHorz = props.alignment === alignments.horizontal
    const isVert = props.alignment === alignments.vertical

    return glamor.compose(
      glamor.css(stylesheet['.psds-navitem__bar']),
      isHorz && glamor.css(stylesheet['.psds-navitem__horz-bar']),
      isVert && glamor.css(stylesheet['.psds-navitem__vert-bar']),
      props.selected && stylesheet['.psds-navitem__bar--selected'],
      stylesFor('navitem__bar', props),
      props.selected && stylesFor('navitem__bar--selected', props)
    )
  },
  button: (props: { selected: boolean }) =>
    glamor.compose(
      glamor.css(stylesheet['.psds-navitem__button']),
      props.selected &&
        glamor.css(stylesheet['.psds-navitem__button--selected'])
    )
}

export const Bar: React.FC<HTMLPropsFor<HTMLDivElement>> = props => {
  // eslint-disable-next-line camelcase
  const { alignment, selected, UNSAFE_stylesFor } = React.useContext(Context)

  return (
    <div
      {...styles.bar({ alignment, selected, UNSAFE_stylesFor })}
      {...props}
    />
  )
}

export const Button: React.FC = props => {
  const { renderContainer, ref, selected, rest } = React.useContext(Context)
  const Container = React.useMemo(() => renderContainer, [renderContainer])

  return (
    <Halo inline gapSize={Halo.gapSizes.small}>
      <Container {...styles.button({ selected })} ref={ref} {...rest}>
        {props.children}
      </Container>
    </Halo>
  )
}
