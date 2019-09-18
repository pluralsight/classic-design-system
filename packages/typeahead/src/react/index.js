import React, { Children } from 'react'
import PropTypes from 'prop-types'

import ActionMenu from '@pluralsight/ps-design-system-actionmenu/react.js'
import core from '@pluralsight/ps-design-system-core'
import filterReactProps from '@pluralsight/ps-design-system-filter-react-props'
import Icon from '@pluralsight/ps-design-system-icon/react.js'
import { BelowLeft } from '@pluralsight/ps-design-system-position/react.js'
import { elementOfType } from '@pluralsight/ps-design-system-prop-types'
import TextInput from '@pluralsight/ps-design-system-textinput/react.js'

import * as vars from '../vars/index.js'

import { combineFns, omit, pick } from './utils.js'

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
const Typeahead = React.forwardRef((props, forwardedRef) => {
  const { children, filterFn, onChange, value } = props

  const portal = usePortal()
  const containerRef = React.useRef()

  const fieldRef = React.useRef()
  const inputRef = React.useRef()
  React.useImperativeHandle(forwardedRef, () => inputRef.current)

  const [controlled] = React.useState(typeof value !== 'undefined')
  const [open, setOpen] = React.useState(false)

  const [innerValue, setInnerValue] = React.useState(value || '')
  const [searchTerm, setSearchTerm] = React.useState('')

  React.useEffect(() => {
    if (controlled) setInnerValue(value)
  }, [controlled, value])

  React.useEffect(() => {
    if (!open) setSearchTerm('')
  }, [open])

  useOnDocumentClick(evt => {
    const isInnerClick =
      !containerRef.current ||
      containerRef.current.contains(evt.target) ||
      portal.current.contains(evt.target)

    if (isInnerClick) return

    setOpen(false)
  })

  const suggestions = React.useMemo(() => {
    const childArray = Children.toArray(children)
    return childArray.map((child, index) => ({
      comp: child,
      index,
      value: getSuggestionValue(child)
    }))
  }, [children])

  const filteredSuggestions = React.useMemo(
    () => filterFn(searchTerm, suggestions),
    [filterFn, searchTerm, suggestions]
  )

  const handleChange = (evt, nextValue) => {
    if (!nextValue) nextValue = evt.target.value
    setSearchTerm(nextValue)

    if (!controlled) setInnerValue(nextValue)
    if (onChange) onChange(evt, nextValue)
  }

  const handleFocus = combineFns(evt => {
    setOpen(true)
  }, props.onFocus)

  const handleSuggestionMenuChange = (evt, nextValue) => {
    setOpen(false)
    handleChange(evt, nextValue)
  }

  return (
    <div
      {...filterReactProps(omit(props, TEXT_INPUT_PROPS))}
      ref={containerRef}
    >
      <BelowLeft
        inNode={portal.current}
        when={open}
        show={
          <SuggestionsMenu
            activeValue={innerValue}
            onChange={handleSuggestionMenuChange}
            suggestions={filteredSuggestions}
          />
        }
        target={fieldRef}
      >
        <TextInput
          {...pick(props, TEXT_INPUT_PROPS)}
          iconAlign={TextInput.iconAligns.right}
          icon={<Icon id={Icon.ids.caretDown} />}
          onChange={handleChange}
          onFocus={handleFocus}
          ref={{ field: fieldRef, input: inputRef }}
          value={innerValue}
        />
      </BelowLeft>
    </div>
  )
})

function CheckIcon({ visible, ...props }) {
  const style = { color: visible ? core.colors.blue : 'transparent' }
  return <Icon id={Icon.ids.check} style={style} />
}
CheckIcon.propTypes = {
  visible: PropTypes.bool.isRequired
}

const SuggestionsMenu = React.forwardRef((props, forwardedRef) => {
  const { activeValue, suggestions, ...rest } = props

  const items = React.useMemo(() => {
    if (suggestions.length <= 0)
      return (
        <ActionMenu.Item disabled value="">
          no results found
        </ActionMenu.Item>
      )

    return suggestions.map(sug => (
      <ActionMenu.Item
        key={sug.index}
        icon={<CheckIcon visible={sug.value === activeValue} />}
        value={sug.value}
      >
        {sug.comp}
      </ActionMenu.Item>
    ))
  }, [activeValue, suggestions])

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
  activeValue: PropTypes.string.isRequired,
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
  filterFn: filterSuggestions
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
  const matches = ({ value }) => value.toLowerCase().includes(term)

  return children.filter(matches)
}

function useOnDocumentClick(handler) {
  React.useEffect(() => {
    document.addEventListener('mousedown', handler)
    document.addEventListener('touchstart', handler)

    return () => {
      document.removeEventListener('mousedown', handler)
      document.removeEventListener('touchstart', handler)
    }
  }, [handler])
}

function usePortal() {
  const ref = React.useRef(document.createElement('div'))

  React.useEffect(() => {
    const { current } = ref
    document.body.appendChild(current)

    return () => {
      document.body.removeChild(current)
    }
  }, [])

  return ref
}
