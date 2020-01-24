import * as core from '@pluralsight/ps-design-system-core'
import PropTypes from 'prop-types'
import React from 'react'

import {
  Chrome,
  Code,
  Content,
  P,
  PageHeading,
  SectionHeading
} from '../../src/ui/index.js'

const Palette = props => (
  <div className="palette">
    {props.children}
    <style>{`
      .palette {
        display: flex;
        flex-wrap: wrap;
        margin: calc(-0.5 * ${core.layout.spacingLarge})
          calc(-0.5 * ${core.layout.spacingLarge});
      }
    `}</style>
  </div>
)
Palette.propTypes = {
  children: PropTypes.node
}

const GradientStop = props => (
  <div className="stop">
    {props.children}
    <style jsx>{`
      .stop {
        color: ${core.colors.white};
        white-space: nowrap;
      }
    `}</style>
  </div>
)
GradientStop.propTypes = {
  children: PropTypes.node
}

const GradientVar = props => (
  <div className="var">
    {props.children}
    <style jsx>{`
      .var {
        color: ${core.colors.white};
        white-space: nowrap;
        opacity: 0.75;
        font-size: ${core.type.fontSizeXSmall};
      }
    `}</style>
  </div>
)
GradientVar.propTypes = {
  children: PropTypes.node
}

const Gradient = props => (
  <div
    className="gradient"
    style={{
      background: props.var
    }}
  >
    {props.children}
    <style jsx>{`
      .gradient {
        flex: 1;
        display: flex;
        height: 120px;
        margin: calc(${core.layout.spacingLarge} / 2);
        padding: ${core.layout.spacingLarge} ${core.layout.spacingSmall};
      }
    `}</style>
  </div>
)
Gradient.propTypes = {
  children: PropTypes.node,
  var: PropTypes.string
}

const Swatch = props => (
  <div
    className={`swatch ${props.light ? 'swatchLight' : 'swatchDark'}`}
    style={{ backgroundColor: '#' + props.hex }}
  >
    <div className="hex">{props.hex}</div>
    <div className="var">psColors{props.var}</div>
    <style jsx>{`
      .swatch {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 120px;
        width: 150px;
        padding: ${core.layout.spacingSmall};
        margin: calc(${core.layout.spacingLarge} / 2);
      }
      .swatchLight {
        border: 1px solid ${core.colors.gray01};
      }
      .hex,
      .var {
        white-space: nowrap;
      }
      .var {
        opacity: 0.75;
        font-size: ${core.type.fontSizeXSmall};
      }
      .swatchLight .hex,
      .swatchLight .var {
        color: ${core.colors.gray05};
      }
      .swatchDark .hex,
      .swatchDark .var {
        color: ${core.colors.white};
      }
    `}</style>
  </div>
)
Swatch.propTypes = {
  hex: PropTypes.string,
  light: PropTypes.bool,
  var: PropTypes.string
}

const DarkSwatch = props => <Swatch {...props} />
const LightSwatch = props => <Swatch {...props} light />

function Label(props) {
  return (
    <header>
      <h3>{props.children}</h3>
      <style jsx>{`
        h3 {
          font-size: ${core.type.fontSizeSmall};
          line-height: ${core.type.lineHeightTight};
          margin: ${core.layout.spacingLarge} 0 ${core.layout.spacingXSmall} 0;
        }
      `}</style>
    </header>
  )
}
Label.propTypes = {
  children: PropTypes.node
}

function Swatch2(props) {
  return (
    <div className="swatch">
      <div className="name">{props.name}</div>
      <div className="var">{props.var}</div>
      <div className="hex">{props.hex}</div>
      <style jsx>{`
        .swatch {
          background: ${props.hex};
          border: ${props.border ? `1px solid ${props.border}` : 'none'};
          color: ${props.fg ? props.fg : core.colorsTextIcon.highOnDark};
          display: block;
          height: 88px;
          padding: 14px ${core.layout.spacingSmall};
        }
        .name {
          font-size: 16px;
          font-weight: 350;
          line-height: ${core.type.lineHeightTight};
          margin-bottom: ${core.layout.spacingXXSmall};
        }
        .var {
          font-size: ${core.type.fontSizeXSmall};
          font-weight: 500;
          line-height: 16px;
          margin-bottom: ${core.layout.spacingXXSmall};
        }
        .hex {
          font-size: ${core.type.fontSizeXSmall};
          font-weight: 500;
          line-height: ${core.type.fontSizeSmall};
        }
      `}</style>
    </div>
  )
}
Swatch2.propTypes = {
  border: PropTypes.string,
  fg: PropTypes.string,
  name: PropTypes.string.isRequired,
  var: PropTypes.string.isRequired,
  hex: PropTypes.string.isRequired
}

function Grid(props) {
  return (
    <div className="grid">
      {props.children}
      <style jsx>{`
        .grid {
          display: grid;
          gap: ${core.layout.spacingMedium} ${core.layout.spacingLarge};
          grid-template-columns: repeat(${props.cols}, 1fr);
        }
      `}</style>
    </div>
  )
}
Grid.defaultProps = {
  cols: 3
}
Grid.propTypes = {
  children: PropTypes.node,
  cols: PropTypes.number
}

const colorCategories = [
  {
    heading: 'Background colors',
    subCategories: [
      {
        label: 'Dark',
        colors: [
          {
            name: 'Background - Dark 1',
            var: 'psColorsBackgroundDark1',
            hex: core.colorsBackgroundDark[1]
          },
          {
            name: 'Background - Dark 2',
            var: 'psColorsBackgroundDark2',
            hex: core.colorsBackgroundDark[2]
          },
          {
            name: 'Background - Dark 3',
            var: 'psColorsBackgroundDark3',
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
            hex: core.colorsBackgroundLight[1]
          },
          {
            name: 'Background - Light 2',
            var: 'psColorsBackgroundLight2',
            hex: core.colorsBackgroundLight[2]
          },
          {
            name: 'Background - Light 3',
            var: 'psColorsBackgroundLight3',
            hex: core.colorsBackgroundLight[3],
            border: core.colorsBorder.lowOnLight
          }
        ]
      }
    ]
  }
]

export default _ => (
  <Chrome>
    <Content title="Color">
      <PageHeading>Color</PageHeading>

      {colorCategories.map(cat => {
        return (
          <div>
            <SectionHeading>{cat.heading}</SectionHeading>
            {cat.subCategories.map(subCat => (
              <div key={cat.heading + subCat.label}>
                <Label>{subCat.label}</Label>
                <Grid>
                  {subCat.colors.map(color => (
                    <Swatch2
                      key={color.var}
                      name={color.name}
                      var={color.var}
                      hex={color.hex}
                      border={color.border}
                      fg={color.fg || subCat.fg}
                    />
                  ))}
                </Grid>
              </div>
            ))}
          </div>
        )
      })}

      <SectionHeading>Legacy grayscale colors</SectionHeading>
      <P>Grayscale colors are used for containers, text, lines and borders.</P>
      <div>
        <Palette>
          <LightSwatch hex="FFFFFF" var="White" />
          <LightSwatch hex="F2F2F2" var="Bone" />
          <DarkSwatch hex="CCCCCC" var="Gray01" />
          <DarkSwatch hex="AAAAAA" var="Gray02" />
          <DarkSwatch hex="555555" var="Gray03" />
          <DarkSwatch hex="363636" var="Gray04" />
          <DarkSwatch hex="222222" var="Gray05" />
          <DarkSwatch hex="181818" var="Gray06" />
          <DarkSwatch hex="000000" var="Black" />
        </Palette>
        <br />
        <Code language="css">{`@import "@pluralsight/ps-design-system-core";
.mySelector {
  color: var(--psColorsGray04);
}`}</Code>
      </div>

      <SectionHeading>Legacy UI colors</SectionHeading>
      <P>
        UI colors emphasize interface elements such as buttons, links, accents
        and visualization.
      </P>
      <div>
        <Palette>
          <DarkSwatch hex="E80A89" var="Pink" />
          <DarkSwatch hex="DE3636" var="Red" />
          <DarkSwatch hex="F96816" var="Orange" />
          <DarkSwatch hex="FF7B39" var="OrangeLight" />
          <DarkSwatch hex="FFC200" var="Yellow" />
          <DarkSwatch hex="86CE21" var="GreenLight" />
          <DarkSwatch hex="23AA5A" var="Green" />
          <DarkSwatch hex="137BC2" var="Blue" />
        </Palette>

        <br />
        <Code language="css">{`@import "@pluralsight/ps-design-system-core";
.mySelector {
  color: var(--psColorsOrange);
}`}</Code>
      </div>

      <SectionHeading>Legacy gradient</SectionHeading>
      <P>
        So fresh. Use the standard gradient to emphasize and showcase the brand.
        Use sparingly.
      </P>
      <div>
        <Palette>
          <Gradient var={core.colors.gradientHorz}>
            <div>
              <GradientStop>F05A28</GradientStop>
              <GradientVar>psColorsGradientHorz</GradientVar>
            </div>
            <div className="gradientHorzStop2">
              <GradientStop>E80A89</GradientStop>
            </div>
          </Gradient>
          <Gradient var={core.colors.gradientVert}>
            <div className="gradientVert">
              <GradientStop>F05A28</GradientStop>
              <GradientVar>psColorsGradientVert</GradientVar>
              <div className="gradientVertStop2">
                <GradientStop>E80A89</GradientStop>
              </div>
            </div>
          </Gradient>
        </Palette>
        <br />
        <Code language="css">{`@import "@pluralsight/ps-design-system-core";
.mySelector {
  background: var(--psColorsGradientHorz);
}`}</Code>
      </div>
    </Content>

    <style jsx>{`
      .gradientHorzStop2 {
        margin-left: auto;
      }
      .gradientVertStop2 {
        margin-top: auto;
      }
      .gradientVert {
        display: flex;
        flex-direction: column;
      }
    `}</style>
  </Chrome>
)
