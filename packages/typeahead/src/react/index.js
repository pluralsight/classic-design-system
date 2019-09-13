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

import useDebounce from './use-debounce.js'
import useOnClickOutside from './use-on-click-outside.js'
import { omit, pick } from './utils.js'

const TEXT_INPUT_PROPS = [
  'appearance',
  'disabled',
  'error',
  'label',
  'name',
  'onChange',
  'placeholder',
  'subLabel',
  'value'
]

const styles = {
  typeahead: (themeName, props) => css(stylesheet['.psds-typeahead'])
}

const Typeahead = React.forwardRef((props, forwardedRef) => {
  const { children, filterFn, onChange, value } = props

  const ref = React.useRef()

  const inputRef = React.useRef()
  React.useImperativeHandle(forwardedRef, () => inputRef.current)

  const controlled = React.useMemo(() => !!onChange, [onChange])
  const [open, setOpen] = React.useState(false)

  const [innerValue, setInnerValue] = React.useState(value)
  const searchTerm = useDebounce(innerValue, 300)

  React.useEffect(() => {
    if (controlled) setInnerValue(value)
  }, [controlled, value])

  const suggestions = React.useMemo(() => {
    const childArray = Children.toArray(children)
    const filtered = filterFn(searchTerm, childArray)

    return filtered.map((child, index) => ({
      comp: child,
      index,
      value: getSuggestionValue(child)
    }))
  }, [children, filterFn, searchTerm])

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

  useOnClickOutside(ref, evt => {
    setOpen(false)
  })

  return (
    <div
      {...filterReactProps(omit(props, TEXT_INPUT_PROPS))}
      {...styles.typeahead()}
      ref={ref}
    >
      <BelowLeft
        when={open}
        show={
          <SuggestionsMenu
            onChange={handleSuggestionMenuChange}
            suggestions={suggestions}
          />
        }
      >
        <div>
          <TextInput
            {...pick(props, TEXT_INPUT_PROPS)}
            onChange={handleChange}
            onFocus={handleFocus}
            ref={inputRef}
            value={innerValue}
          />
        </div>
      </BelowLeft>
    </div>
  )
})

const SuggestionsMenu = React.forwardRef((props, forwardedRef) => {
  const { suggestions, ...rest } = props

  const items = React.useMemo(() => {
    if (suggestions.length <= 0)
      return (
        <React.Fragment>
          <ActionMenu.Item disabled value="">
            no results found
          </ActionMenu.Item>
        </React.Fragment>
      )

    return suggestions.map(sug => (
      <ActionMenu.Item key={sug.index} value={sug.value}>
        {sug.comp}
      </ActionMenu.Item>
    ))
  }, [suggestions])

  return (
    <ActionMenu
      {...rest}
      ref={forwardedRef}
      origin={ActionMenu.origins.topLeft}
      shouldFocusOnMount={false}
    >
      {items}
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
  children: PropTypes.oneOfType([
    elementOfType(Suggestion),
    PropTypes.arrayOf(elementOfType(Suggestion))
  ]),
  filterFn: PropTypes.func,
  loading: PropTypes.bool,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  value: PropTypes.string,

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
  filterFn: filterSuggestions,
  value: ''
}

Typeahead.appearances = vars.appearances

Typeahead.Suggestion = Suggestion

export const appearances = vars.appearances

export default Typeahead

function getSuggestionValue(suggestionInst) {
  return suggestionInst.props.children
}

function filterSuggestions(searchTerm, children) {
  if (!searchTerm || searchTerm.length <= 1) return children
  const term = searchTerm.toLowerCase()

  const matches = child => {
    const value = getSuggestionValue(child)
    return value.toLowerCase().includes(term)
  }

  return children.filter(matches)
}
