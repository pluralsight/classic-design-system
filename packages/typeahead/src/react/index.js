import { css } from 'glamor'
import React from 'react'
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
  const ref = React.useRef()
  React.useImperativeHandle(forwardedRef, () => ref.current)

  const [currentValue, setCurrentValue] = React.useState(props.value)
  const [searchTerm, setSearchTerm] = React.useState('')
  const [menuIsOpen, setMenuIsOpen] = React.useState(false)

  React.useEffect(() => {
    setCurrentValue(props.value)
  }, [props.value])

  React.useEffect(() => {
    if (!props.onChange) return
    props.onChange(currentValue)
  }, [currentValue, props])

  React.useEffect(() => {
    setMenuIsOpen(false)
  }, [currentValue])

  const handleInputChange = evt => {
    const { value: nextValue } = evt.target
    setSearchTerm(nextValue)
  }

  const handleInputFocus = evt => {
    setMenuIsOpen(true)
  }

  const handleMenuChange = (evt, nextValue) => {
    setCurrentValue(nextValue)
  }

  const options = useCollectOptions(props.children)

  const currentLabel = React.useMemo(() => {
    const selected = options.find(option => option.value === currentValue)
    return selected && selected.label
  }, [currentValue, options])

  const displayValue = React.useMemo(() => searchTerm || currentLabel || '', [
    searchTerm,
    currentLabel
  ])

  return (
    <BelowLeft
      when={menuIsOpen}
      show={
        <ActionMenu
          onChange={handleMenuChange}
          origin={ActionMenu.origins.topLeft}
        >
          {options.map(({ comp, index, value }) => (
            <ActionMenu.Item key={index} value={value}>
              {comp}
            </ActionMenu.Item>
          ))}
        </ActionMenu>
      }
    >
      <div
        {...filterReactProps(omit(props, TEXT_INPUT_PROPS))}
        {...styles.typeahead()}
        ref={ref}
      >
        <TextInput
          {...pick(props, TEXT_INPUT_PROPS)}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          value={displayValue}
        />
      </div>
    </BelowLeft>
  )
})

const Suggestion = React.forwardRef((props, forwardedRef) => {
  const ref = React.useRef()
  React.useImperativeHandle(forwardedRef, () => ref.current)

  return <div ref={ref} {...props} />
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

function useCollectOptions(children) {
  return React.useMemo(
    () =>
      React.Children.toArray(children).map((comp, index) => ({
        comp,
        index,
        value: comp.props.children
      })),
    [children]
  )
}
