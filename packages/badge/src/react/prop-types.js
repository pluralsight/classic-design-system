import { names as themeNames } from '@pluralsight/ps-design-system-theme/vars'
import * as vars from '../vars'

export function appearancePropChecker(
  props,
  propName,
  componentName = 'ANONYMOUS'
) {
  // oneOf(appearances)
  const expectedValues = Object.values(vars.appearances)
  if (!expectedValues.includes(props.appearance)) {
    const valuesString = JSON.stringify(expectedValues)

    return new Error(
      `Invalid prop \`${propName}\` of value \`${
        props.appearance
      }\` supplied to \`${componentName}\`, expected one of ${valuesString}`
    )
  }

  // light theme does not support stroke appearance
  const isLightTheme = props.themeName === themeNames.light
  const isStrokeAppearance = props.appearance === vars.appearances.stroke

  if (isLightTheme && isStrokeAppearance) {
    return new Error(
      `${
        props.appearance
      } ${propName} in ${componentName} cannot be used with ${
        props.themeName
      } theme`
    )
  }

  // assume all ok
  return null
}
