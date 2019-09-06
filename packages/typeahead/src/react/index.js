import { css } from 'glamor'
import React, { Children } from 'react'
import PropTypes from 'prop-types'

import ActionMenu from '@pluralsight/ps-design-system-actionmenu/react.js'
import filterReactProps from '@pluralsight/ps-design-system-filter-react-props'
import { BelowLeft } from '@pluralsight/ps-design-system-position/react.js'
import { elementOfType } from '@pluralsight/ps-design-system-prop-types'
import TextInput from '@pluralsight/ps-design-system-textinput/react.js'

import stylesheet from '../css/index.js'
import * as vars from '../vars/index.js'

import { omit, pick } from './utils.js'

const TEXT_INPUT_PROPS = [
  'appearance',
  'disabled',
  'error',
  'label',
  'name',
  'placeholder',
  'subLabel'
]

const styles = {
  typeahead: (themeName, props) => css(stylesheet['.psds-typeahead'])
}

const Typeahead = React.forwardRef((props, forwardedRef) => {
  const { children, onChange, value } = props

  const ref = React.useRef()
  React.useImperativeHandle(forwardedRef, () => ref.current)

  const suggestions = React.useMemo(
    () =>
      Children.toArray(children).map((comp, index) => ({
        comp,
        index,
        value: comp.props.children
      })),
    [children]
  )

  const controlled = React.useMemo(() => !!onChange, [onChange])

  const [innerValue, setInnerValue] = React.useState(value)
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    if (controlled) setInnerValue(value)
  }, [controlled, value])

  const handleChange = (evt, nextValue) => {
    if (!nextValue) nextValue = evt.target.value

    if (controlled) onChange(evt, nextValue)
    else setInnerValue(nextValue)
  }

  const handleFocus = evt => {
    setOpen(true)
  }

  const handleSuggestionMenuChange = (evt, nextValue) => {
    setOpen(false)
    handleChange(evt, nextValue)
  }

  return (
    <BelowLeft
      when={open}
      show={
        <SuggestionsMenu
          onChange={handleSuggestionMenuChange}
          suggestions={suggestions}
        />
      }
    >
      <div
        {...filterReactProps(omit(props, TEXT_INPUT_PROPS))}
        {...styles.typeahead()}
        ref={ref}
      >
        <TextInput
          {...pick(props, TEXT_INPUT_PROPS)}
          onChange={handleChange}
          onFocus={handleFocus}
          value={innerValue}
        />
      </div>
    </BelowLeft>
  )
})

const SuggestionsMenu = React.forwardRef((props, forwardedRef) => {
  return (
    <ActionMenu
      {...props}
      ref={forwardedRef}
      origin={ActionMenu.origins.topLeft}
      shouldFocusOnMount={false}
    >
      {props.suggestions.map(({ comp, index, value }) => (
        <ActionMenu.Item key={index} value={value}>
          {comp}
        </ActionMenu.Item>
      ))}
    </ActionMenu>
  )
})

SuggestionsMenu.propTypes = {
  onChange: PropTypes.func,
  suggestions: PropTypes.arrayOf(
    PropTypes.shape({
      comp: PropTypes.node.isRequired,
      index: PropTypes.number.isRequired,
      value: PropTypes.string.isRequired
    })
  ).isRequired
}

const Suggestion = React.forwardRef((props, forwardedRef) => {
  return <div ref={forwardedRef} {...props} />
})

Suggestion.propTypes = {
  children: PropTypes.string.isRequired
}

Typeahead.propTypes = {
  children: PropTypes.arrayOf(elementOfType(Suggestion)),
  loading: PropTypes.bool,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  // props used by underlying TextInput
  appearance: PropTypes.any,
  disabled: PropTypes.any,
  error: PropTypes.any,
  label: PropTypes.any,
  name: PropTypes.any,
  placeholder: PropTypes.any,
  subLabel: PropTypes.any
}
Typeahead.defaultProps = {
  value: ''
}

Typeahead.appearances = vars.appearances

Typeahead.Suggestion = Suggestion

export const appearances = vars.appearances

export default Typeahead
