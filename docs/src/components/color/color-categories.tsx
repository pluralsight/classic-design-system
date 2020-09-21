import * as core from '@pluralsight/ps-design-system-core'
import { CheckCircleIcon } from '@pluralsight/ps-design-system-icon'
import * as Text from '@pluralsight/ps-design-system-text'
import React from 'react'

import { H2 } from '../mdx'
import * as styles from './color-categories.module.css'

export const ColorCategories: React.FC = () => {
  return (
    <>
      {colorCategories.map(cat => {
        return (
          <div key={cat.heading}>
            <H2>{cat.heading}</H2>
            {cat.explanation}
            {cat.subCategories.map((subCat, i) => (
              <div key={i}>
                <Text.P>{subCat.label}</Text.P>
                <Grid
                  cols={
                    subCat.colors.length < 3
                      ? subCat.colors.length
                      : subCat.cols
                  }
                  bg={subCat.gridBg}
                >
                  {subCat.colors.map(color => (
                    <Swatch
                      key={color.var}
                      name={color.name}
                      var={color.var}
                      js={color.js}
                      hex={color.hex}
                      icon={color.icon || subCat.icon || cat.icon}
                      border={color.border || subCat.border}
                      fg={color.fg || subCat.fg}
                      bg={color.bg || subCat.bg || color.hex}
                      borderExample={color.borderExample}
                    />
                  ))}
                </Grid>
              </div>
            ))}
          </div>
        )
      })}
    </>
  )
}
interface Color {
  name: string
  var: string
  js: string
  hex: string
  border?: string
  bg?: string
  fg?: string
  borderExample?: string
  icon?: React.ReactNode
}
interface SubCategory {
  label?: string
  gridBg?: string
  fg?: string
  bg?: string
  border?: string
  cols?: number
  colors: Color[]
  icon?: React.ReactNode
}
interface ColorCategory {
  heading: string
  explanation?: React.ReactNode
  icon?: React.ReactNode
  subCategories: SubCategory[]
}
const colorCategories: ColorCategory[] = [
  {
    heading: 'Background colors',
    explanation: (
      <Text.P>
        There are three background colors available to use for surfaces in the
        app. The lower the number, the lower the elevation of the surface.
        Background 1 Is the app background.
      </Text.P>
    ),
    subCategories: [
      {
        label: 'Dark',
        colors: [
          {
            name: 'Background - Dark 1',
            var: 'psColorsBackgroundDark1',
            js: 'colorsBackgroundDark[1]',
            hex: core.colorsBackgroundDark[1]
          },
          {
            name: 'Background - Dark 2',
            var: 'psColorsBackgroundDark2',
            js: 'colorsBackgroundDark[2]',
            hex: core.colorsBackgroundDark[2]
          },
          {
            name: 'Background - Dark 3',
            var: 'psColorsBackgroundDark3',
            js: 'colorsBackgroundDark[3]',
            hex: core.colorsBackgroundDark[3]
          }
        ]
      },
      {
        label: 'Light',
        fg: core.colorsTextIcon.highOnLight,
        colors: [
          {
            name: 'Background - Light 1',
            var: 'psColorsBackgroundLight1',
            js: 'colorsBackgroundLight[1]',
            hex: core.colorsBackgroundLight[1]
          },
          {
            name: 'Background - Light 2',
            var: 'psColorsBackgroundLight2',
            js: 'colorsBackgroundLight[2]',
            hex: core.colorsBackgroundLight[2]
          },
          {
            name: 'Background - Light 3',
            var: 'psColorsBackgroundLight3',
            js: 'colorsBackgroundLight[3]',
            hex: core.colorsBackgroundLight[3],
            border: core.colorsBorder.lowOnLight
          }
        ]
      }
    ]
  },
  {
    heading: 'Utility color',
    explanation: (
      <Text.P>
        Use utility color with transparency to lighten or darken backgrounds
        beyond the three colors provided.
      </Text.P>
    ),
    subCategories: [
      {
        label: 'Utility base color',
        colors: [
          {
            name: 'Utility',
            var: 'psColorsBackgroundUtilityBase',
            js: 'colorsBackgroundUtility.base',
            bg: core.colorsBackgroundUtility.base,
            hex: core.colorsBackgroundUtility.base + ' / rgba(138, 153, 168, 1)'
          }
        ]
      },
      {
        label: 'Utility with transparency on a dark background',
        gridBg: core.colorsBackgroundDark[2],
        colors: [
          {
            name: 'Utility-25',
            var: 'psColorsBackgroundUtility25',
            js: 'colorsBackgroundUtility[25]',
            hex: core.colorsBackgroundUtility[25]
          },
          {
            name: 'Utility-30',
            var: 'psColorsBackgroundUtility30',
            js: 'colorsBackgroundUtility[30]',
            hex: core.colorsBackgroundUtility[30]
          },
          {
            name: 'Utility-40',
            var: 'psColorsBackgroundUtility40',
            js: 'colorsBackgroundUtility[40]',
            hex: core.colorsBackgroundUtility[40]
          }
        ]
      },
      {
        label: 'Utility with transparency on a light background',
        gridBg: core.colorsBackgroundLight[2],
        fg: core.colorsTextIcon.highOnLight,
        colors: [
          {
            name: 'Utility-25',
            var: 'psColorsBackgroundUtility25',
            js: 'colorsBackgroundUtility[25]',
            hex: core.colorsBackgroundUtility[25]
          },
          {
            name: 'Utility-30',
            var: 'psColorsBackgroundUtility30',
            js: 'colorsBackgroundUtility[30]',
            hex: core.colorsBackgroundUtility[30]
          },
          {
            name: 'Utility-40',
            var: 'psColorsBackgroundUtility40',
            js: 'colorsBackgroundUtility[40]',
            hex: core.colorsBackgroundUtility[40]
          }
        ]
      }
    ]
  },
  {
    heading: 'Primary action & text link colors',
    subCategories: [
      {
        colors: [
          {
            name: 'Primary Action - Background',
            var: 'psColorsPrimaryActionBackground',
            js: 'colorsPrimaryAction.background',
            hex: core.colorsPrimaryAction.background
          }
        ]
      },
      {
        colors: [
          {
            name: 'Primary Action Text - On Dark',
            var: 'psColorsPrimaryActionTextDarkTheme',
            js: 'colorsPrimaryAction.textDarkTheme',
            hex: core.colorsPrimaryAction.textDarkTheme,
            bg: core.colorsBackgroundDark[1],
            fg: core.colorsPrimaryAction.textDarkTheme
          },
          {
            name: 'Primary Action Text - On Light',
            var: 'psColorsPrimaryActionTextLightTheme',
            js: 'colorsPrimaryAction.textLightTheme',
            hex: core.colorsPrimaryAction.textLightTheme,
            border: core.colorsBorder.lowOnLight,
            bg: core.colorsBackgroundLight[3],
            fg: core.colorsPrimaryAction.textLightTheme
          }
        ]
      }
    ]
  },
  {
    heading: 'Status colors',
    subCategories: [
      {
        colors: [
          {
            name: 'Status - Success',
            var: 'psColorsStatusSuccess',
            js: 'colorsStatus.success',
            hex: core.colorsStatus.success
          },
          {
            name: 'Status - Warning',
            var: 'psColorsStatusWarning',
            js: 'colorsStatus.warning',
            hex: core.colorsStatus.warning,
            fg: core.colorsTextIcon.highOnLight
          },
          {
            name: 'Status - Error',
            var: 'psColorsStatusError',
            js: 'colorsStatus.error',
            hex: core.colorsStatus.error
          },
          {
            name: 'Status - Info',
            var: 'psColorsStatusInfo',
            js: 'colorsStatus.info',
            hex: core.colorsStatus.info
          }
        ]
      }
    ]
  },
  {
    heading: 'Text & icon colors',
    icon: <CheckCircleIcon />,
    subCategories: [
      {
        label: 'On dark backgrounds',
        bg: core.colorsBackgroundDark[1],
        colors: [
          {
            name: 'Text & Icons - On Dark - High Contrast',
            var: 'psColorsTextIconHighOnDark',
            js: 'colorsTextIcon.highOnDark',
            hex: '#FFFFFF, 95% opacity',
            fg: core.colorsTextIcon.highOnDark
          },
          {
            name: 'Text & Icons - On Dark - Low Contrast',
            var: 'psColorsTextIconLowOnDark',
            js: 'colorsTextIcon.lowOnDark',
            hex: '#FFFFFF, 65% opacity',
            fg: core.colorsTextIcon.lowOnDark
          }
        ]
      },
      {
        label: 'On light backgrounds',
        bg: core.colorsBackgroundLight[3],
        border: core.colorsBorder.lowOnLight,
        colors: [
          {
            name: 'Text & Icons - On Light - High Contrast',
            var: 'psColorsTextIconHighOnLight',
            js: 'colorsTextIcon.highOnLight',
            hex: '#000000, 95% opacity',
            fg: core.colorsTextIcon.highOnLight
          },
          {
            name: 'Text & Icons - On Light - Low Contrast',
            var: 'psColorsTextIconLowOnLight',
            js: 'colorsTextIcon.lowOnLight',
            hex: '#000000, 55% opacity',
            fg: core.colorsTextIcon.lowOnLight
          }
        ]
      }
    ]
  },
  {
    heading: 'Border colors',
    subCategories: [
      {
        label: 'On dark backgrounds',
        bg: core.colorsBackgroundDark[1],
        colors: [
          {
            name: 'Border - On Dark - High Contrast',
            var: 'psColorsBorderHighOnDark',
            hex: '#FFFFFF, 30% opacity',
            js: 'colorsBorder.highOnDark',
            fg: core.colorsTextIcon.highOnDark,
            borderExample: core.colorsBorder.highOnDark
          },
          {
            name: 'Border - On Dark - Low Contrast',
            var: 'psColorsBorderLowOnDark',
            hex: '#FFFFFF, 15% opacity',
            js: 'colorsBorder.lowOnDark',
            fg: core.colorsTextIcon.lowOnDark,
            borderExample: core.colorsBorder.lowOnDark
          }
        ]
      },
      {
        label: 'On light backgrounds',
        bg: core.colorsBackgroundLight[3],
        border: core.colorsBorder.lowOnLight,
        colors: [
          {
            name: 'Border - On Light - High Contrast',
            var: 'psColorsBorderHighOnLight',
            hex: '#000000, 30% opacity',
            js: 'colorsBorder.highOnLight',
            fg: core.colorsTextIcon.highOnLight,
            borderExample: core.colorsBorder.highOnLight
          },
          {
            name: 'Border - On Light - Low Contrast',
            var: 'psColorsBorderLowOnLight',
            hex: '#000000, 15% opacity',
            js: 'colorsBorder.lowOnLight',
            fg: core.colorsTextIcon.lowOnLight,
            borderExample: core.colorsBorder.lowOnLight
          }
        ]
      }
    ]
  },
  {
    heading: 'Brand gradients',
    subCategories: [
      {
        colors: [
          {
            name: 'Brand Gradient - Skills',
            var: 'psColorsGradientSkillsBackground',
            js: 'colorsGradient.skillsBackground',
            hex: `${core.colorsGradient.skillsStop0} to ${core.colorsGradient.skillsStop100}`,
            bg: core.colorsGradient.skillsBackground
          },
          {
            name: 'Brand Gradient - Flow',
            var: 'psColorsGradientFlowBackground',
            js: 'colorsGradient.flowBackground',
            hex: `${core.colorsGradient.flowStop0} to ${core.colorsGradient.flowStop100}`,
            bg: core.colorsGradient.flowBackground
          }
        ]
      }
    ]
  },
  {
    heading: 'Code colors',
    subCategories: [
      {
        fg: core.colorsTextIcon.highOnLight,
        colors: [
          {
            name: 'Code - White',
            var: 'psColorsCodeWhite',
            js: 'colorsCode.white',
            hex: core.colorsCode.white,
            border: core.colorsBorder.lowOnLight
          },
          {
            name: 'Code - Gray',
            var: 'psColorsCodeGray',
            js: 'colorsCode.gray',
            hex: core.colorsCode.gray
          },
          {
            name: 'Code - Orange',
            var: 'psColorsCodeOrange',
            js: 'colorsCode.orange',
            hex: core.colorsCode.orange
          },
          {
            name: 'Code - Yellow',
            var: 'psColorsCodeYellow',
            js: 'colorsCode.yellow',
            hex: core.colorsCode.yellow
          },
          {
            name: 'Code - Green',
            var: 'psColorsCodeGreen',
            js: 'colorsCode.green',
            hex: core.colorsCode.green
          },
          {
            name: 'Code - Turquoise',
            var: 'psColorsCodeTurquoise',
            js: 'colorsCode.turquoise',
            hex: core.colorsCode.turquoise
          },
          {
            name: 'Code - Blue',
            var: 'psColorsCodeBlue',
            js: 'colorsCode.blue',
            hex: core.colorsCode.blue
          },
          {
            name: 'Code - Purple',
            var: 'psColorsCodePurple',
            js: 'colorsCode.purple',
            hex: core.colorsCode.purple
          },
          {
            name: 'Code - Sand',
            var: 'psColorsCodeSand',
            js: 'colorsCode.sand',
            hex: core.colorsCode.sand
          }
        ]
      }
    ]
  },
  {
    heading: 'Neutrals',
    subCategories: [
      {
        colors: [
          {
            name: 'Black',
            var: 'psColorsBlack',
            js: 'colorsBlack',
            hex: core.colorsBlack
          },
          {
            name: 'White',
            var: 'psColorsWhite',
            js: 'colorsWhite',
            hex: core.colorsWhite,
            fg: core.colorsTextIcon.highOnLight,
            border: core.colorsBorder.lowOnLight
          }
        ]
      }
    ]
  },
  {
    heading: 'All colors',
    explanation: (
      <Text.P>
        These are additional colors beyond the core set. They can be used for
        things like illustrations, complex data visualizations, etc. Colors
        numbered 6 are the same as base colors. (e.g.,{' '}
        <Text.Code>psColorsBlue6</Text.Code> has the same value as{' '}
        <Text.Code>psColorsBlueBase</Text.Code>)
      </Text.P>
    ),
    subCategories: [
      formatAllColorSubCategory({ color: core.colorsBlue, name: 'Blue' }),
      formatAllColorSubCategory({
        color: core.colorsTeal,
        name: 'Teal',
        fgSwitch: 7
      }),
      formatAllColorSubCategory({
        color: core.colorsGreen,
        name: 'Green'
      }),
      formatAllColorSubCategory({
        color: core.colorsLime,
        name: 'Lime',
        fgSwitch: 8
      }),
      formatAllColorSubCategory({
        color: core.colorsYellow,
        name: 'Yellow',
        fgSwitch: 8
      }),
      formatAllColorSubCategory({
        color: core.colorsOrange,
        name: 'Orange',
        fgSwitch: 7
      }),
      formatAllColorSubCategory({
        color: core.colorsRed,
        name: 'Red'
      }),
      formatAllColorSubCategory({
        color: core.colorsPink,
        name: 'Pink'
      }),
      formatAllColorSubCategory({
        color: core.colorsPurple,
        name: 'Purple'
      })
    ]
  }
]

interface SwatchProps {
  border?: string
  bg?: string
  fg?: string
  icon?: React.ReactNode
  borderExample?: string
  name: string
  var: string
  js: string
  hex: string
}
const Swatch: React.FC<SwatchProps> = props => {
  return (
    <div
      className={styles.swatch}
      style={{
        background: props.bg,
        border: props.border ? `1px solid ${props.border}` : 'none',
        color: props.fg ? props.fg : core.colorsTextIcon.highOnDark,
        display: props.borderExample ? 'display' : 'flex'
      }}
    >
      <div className={styles.swatchText}>
        <div className={styles.swatchName}>{props.name}</div>
        <div className={styles.swatchVar}>CSS: {props.var}</div>
        <div className={styles.swatchVar}>JS: {props.js}</div>
        <div className={styles.swatchHex}>{props.hex}</div>
      </div>
      {props.icon && <div className={styles.swatchIcon}>{props.icon}</div>}
      {props.borderExample && (
        <div
          className={styles.swatchBorderExample}
          style={{
            borderTop: `1px solid ${props.borderExample}`
          }}
        />
      )}
    </div>
  )
}

interface GridProps {
  bg?: string
  cols?: number
}
const gridPropDefaults = {
  cols: 3
}
const Grid: React.FC<GridProps> = props => {
  return (
    <div
      className={styles.grid}
      style={{
        gap:
          props.cols || gridPropDefaults.cols >= 5
            ? 0
            : `${core.layout.spacingMedium} ${core.layout.spacingLarge}`,
        gridTemplateColumns: `repeat(${
          props.cols || gridPropDefaults.cols
        }, 1fr)`,
        backgroundColor: props.bg || 'none',
        padding: props.bg ? core.layout.spacingLarge : 0
      }}
    >
      {props.children}
    </div>
  )
}

interface SubCategoryColorInputs {
  name: string
  color: Record<string, string>
  fgSwitch?: number
}
function formatAllColorSubCategory({
  color,
  fgSwitch,
  name
}: SubCategoryColorInputs): SubCategory {
  return {
    cols: 5,
    colors: Object.keys(color)
      .map(key => parseInt(key, 10))
      .filter(key => Number.isInteger(key))
      .map(key => ({
        name: name + ' ' + key + (key === 6 ? ' (Base)' : ''),
        var: 'psColors' + name + key,
        hex: color[key],
        js: `colors${name}[${key}]`,
        fg:
          key < (fgSwitch || 6)
            ? core.colorsTextIcon.highOnLight
            : core.colorsTextIcon.highOnDark
      }))
  }
}
