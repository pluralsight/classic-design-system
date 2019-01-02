import createReactContext from 'create-react-context'
import * as glamor from 'glamor'
import PropTypes from 'prop-types'
import React from 'react'

import filterReactProps from '@pluralsight/ps-design-system-filter-react-props'
import { elementOfType } from '@pluralsight/ps-design-system-prop-types'
import { withTheme } from '@pluralsight/ps-design-system-theme/react'
import { names as themeNames } from '@pluralsight/ps-design-system-theme/vars'

import css, { sizeClasses, themeClasses } from '../css'
import * as vars from '../vars'

import * as illustrations from './illustrations'

const Context = createReactContext({ size: null, themeName: null })

const buildMediaClasses = className => {
  const all = '(min-width: 0)'
  const desktop = '(min-width: 769px)'

  return glamor.compose(
    glamor.media(all, css[className + sizeClasses.small]),
    glamor.media(desktop, css[className + sizeClasses.large])
  )
}

const combineClasses = (className, { size, themeName }) => {
  const base = glamor.css(
    css[className],
    css[className + themeClasses[themeName]]
  )

  // NOTE: a `size` prop disables responsive media queries
  const removeResponsiveMediaQueries = !!size
  const media = removeResponsiveMediaQueries
    ? glamor.css(css[className + sizeClasses[size]])
    : buildMediaClasses(className)

  return glamor.compose(
    base,
    media
  )
}

const styles = {
  emptyState: (_, ctx) => combineClasses('.psds-emptystate', ctx),
  actions: (props, ctx) => combineClasses('.psds-emptystate__actions', ctx),
  caption: (props, ctx) => combineClasses('.psds-emptystate__caption', ctx),
  heading: (props, ctx) => combineClasses('.psds-emptystate__heading', ctx),
  illustration: (_, ctx) =>
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
        const styleAttrs = styles.illustration(props, ctx)

        if (isCustom)
          return <div {...styleAttrs} {...filterReactProps(props)} />

        const Comp = illustrations[props.name] || IllustrationNotFound
        return (
          <Comp
            {...styleAttrs}
            {...filterReactProps(props, { tagName: 'svg' })}
          />
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

const EmptyState = withTheme(({ size, themeName, ...props }) => {
  const ctx = { size, themeName }

  return (
    <Context.Provider value={ctx}>
      <div {...styles.emptyState(props, ctx)} {...filterReactProps(props)}>
        {props.illustration}
        {props.heading}
        {props.caption}
        {props.actions}
      </div>
    </Context.Provider>
  )
})

EmptyState.sizes = vars.sizes

EmptyState.propTypes = {
  actions: elementOfType(Actions),
  caption: elementOfType(Caption),
  heading: elementOfType(Heading).isRequired,
  illustration: elementOfType(Illustration),
  size: PropTypes.oneOf(Object.values(EmptyState.sizes)),
  themeName: PropTypes.oneOf(Object.values(themeNames))
}

EmptyState.Actions = Actions
EmptyState.Actions.displayName = 'EmptyState.Actions'

EmptyState.Caption = Caption
EmptyState.Caption.displayName = 'EmptyState.Caption'

EmptyState.Heading = Heading
EmptyState.Heading.displayName = 'EmptyState.Heading'

EmptyState.Illustration = Illustration
EmptyState.Illustration.displayName = 'EmptyState.Illustration'

export default EmptyState
