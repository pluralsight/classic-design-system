import * as glamor from 'glamor'
import PropTypes from 'prop-types'
import React, { createContext, useEffect, useState } from 'react'

import filterReactProps from '@pluralsight/ps-design-system-filter-react-props'
import { elementOfType } from '@pluralsight/ps-design-system-prop-types'
import { useTheme } from '@pluralsight/ps-design-system-theme/react'

import css, { sizeClasses, themeClasses } from '../css/index.js'
import * as vars from '../vars/index.js'

import * as illustrations from './illustrations/index.js'
import useResizeObserver from './use-resize-observer.js'

const Context = createContext({
  size: null,
  themeName: null
})

const combineClasses = (className, { size, themeName }) =>
  glamor.css(
    css[className],
    css[className + themeClasses[themeName]],
    css[className + sizeClasses[size]]
  )

const styles = {
  emptyState: (_, ctx, { hasRenderedOnce }) => {
    return glamor.compose(
      combineClasses('.psds-emptystate', ctx),
      !hasRenderedOnce && css['.psds-emptystate--hidden']
    )
  },
  actions: (_, ctx) => combineClasses('.psds-emptystate__actions', ctx),
  caption: (_, ctx) => combineClasses('.psds-emptystate__caption', ctx),
  heading: (_, ctx) => combineClasses('.psds-emptystate__heading', ctx),
  illustration: (props, ctx) =>
    combineClasses('.psds-emptystate__illustration', ctx)
}

const Actions = props => (
  <Context.Consumer>
    {ctx => (
      <div {...styles.actions(props, ctx)} {...filterReactProps(props)} />
    )}
  </Context.Consumer>
)
Actions.propTypes = {
  children: PropTypes.node
}

const Caption = props => (
  <Context.Consumer>
    {ctx => (
      <p
        {...styles.caption(props, ctx)}
        {...filterReactProps(props, { tagName: 'p' })}
      />
    )}
  </Context.Consumer>
)
Caption.propTypes = {
  children: PropTypes.node
}

const Heading = ({ as: Tag, ...props }) => (
  <Context.Consumer>
    {ctx => (
      <Tag
        {...styles.heading(props, ctx)}
        {...filterReactProps(props, { tagName: Tag })}
      />
    )}
  </Context.Consumer>
)
Heading.defaultProps = {
  as: 'h1'
}
Heading.propTypes = {
  as: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5']),
  children: PropTypes.node
}

const IllustrationNotFound = () => null
const Illustration = props => {
  const isCustom = !!props.children

  return (
    <Context.Consumer>
      {ctx => {
        let Comp = illustrations[props.name] || IllustrationNotFound
        Comp = ctx.size === vars.sizes.small && Comp.small ? Comp.small : Comp

        if (isCustom) Comp = () => props.children

        return (
          <div {...styles.illustration(props, ctx)}>
            <Comp {...filterReactProps(props, { tagName: 'svg' })} />
          </div>
        )
      }}
    </Context.Consumer>
  )
}
Illustration.names = vars.illustrationNames
Illustration.propTypes = {
  children: PropTypes.node,
  name: PropTypes.oneOf(Object.values(Illustration.names))
}

const renderSmallIfElementLessThan = 450

export default function EmptyState(props) {
  const [hasRenderedOnce, setHasRenderedOnce] = useState(false)
  const { ref, width } = useResizeObserver()
  const themeName = useTheme()

  useEffect(() => {
    setHasRenderedOnce(true)
  }, [])

  const hasPropSizeOverride = !!props.size
  const observableSize =
    width <= renderSmallIfElementLessThan ? vars.sizes.small : vars.sizes.large

  const size = hasPropSizeOverride ? props.size : observableSize
  const ctx = { size, themeName }

  return (
    <Context.Provider value={ctx}>
      <div
        {...styles.emptyState(props, ctx, { hasRenderedOnce })}
        {...filterReactProps(props)}
        ref={ref}
      >
        {props.illustration}
        {props.heading}
        {props.caption}
        {props.actions}
      </div>
    </Context.Provider>
  )
}

EmptyState.sizes = vars.sizes

EmptyState.propTypes = {
  actions: elementOfType(Actions),
  caption: elementOfType(Caption),
  heading: elementOfType(Heading).isRequired,
  illustration: elementOfType(Illustration),
  size: PropTypes.oneOf(Object.values(EmptyState.sizes)),
  themeName: PropTypes.string
}

EmptyState.Actions = Actions
EmptyState.Actions.displayName = 'EmptyState.Actions'

EmptyState.Caption = Caption
EmptyState.Caption.displayName = 'EmptyState.Caption'

EmptyState.Heading = Heading
EmptyState.Heading.displayName = 'EmptyState.Heading'

EmptyState.Illustration = Illustration
EmptyState.Illustration.displayName = 'EmptyState.Illustration'
