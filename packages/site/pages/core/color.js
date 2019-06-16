import core from '@pluralsight/ps-design-system-core'
import PropTypes from 'prop-types'
import React from 'react'

import {
  Chrome,
  Code,
  Content,
  Example,
  Link,
  P,
  PageHeading,
  SectionHeading,
  withServerProps
} from '../../src/ui'

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

const HorzGradient = props => (
  <div
    className="root"
    style={{
      background: `linear-gradient(to right, #${props.start}, #${props.stop})`
    }}
  >
    <div>
      <div className="start">{props.start}</div>
      <div className="var">psColorsGradientHorz</div>
    </div>
    <div className="stop">{props.stop}</div>
    <style jsx>{`
      .root {
        flex: 1 0 auto;
        display: flex;
        width: calc(50% - (2 * var(--psLayoutSpacingLarge)));
        height: 120px;
        padding: var(--psLayoutSpacingLarge) var(--psLayoutSpacingSmall);
        margin: calc(${core.layout.spacingLarge} / 2);
      }
      .start,
      .stop,
      .var {
        color: var(--psColorsWhite);
        white-space: nowrap;
      }
      .root .stop {
        margin-left: auto;
      }
      .var {
        opacity: 0.75;
        font-size: var(--psTypeFontSizeXSmall);
      }
    `}</style>
  </div>
)

const VertGradient = props => (
  <div
    className="root"
    style={{
      background: `linear-gradient(to bottom, #${props.start}, #${props.stop})`
    }}
  >
    <div className="start">{props.start}</div>
    <div className="var">psColorsGradientVert</div>
    <div className="stop">{props.stop}</div>
    <style jsx>{`
      .root {
        flex: 1 0 auto;
        flex-direction: column;
        display: flex;
        width: calc(50% - (2 * var(--psLayoutSpacingLarge)));
        height: 120px;
        padding: var(--psLayoutSpacingLarge) var(--psLayoutSpacingSmall);
        margin: calc(${core.layout.spacingLarge} / 2);
      }
      .start,
      .stop,
      .var {
        color: var(--psColorsWhite);
        white-space: nowrap;
      }
      .root .stop {
        margin-top: auto;
      }
      .var {
        opacity: 0.75;
        font-size: var(--psTypeFontSizeXSmall);
      }
    `}</style>
  </div>
)

const Swatch = props => (
  <div
    className={`swatch ${props.light ? 'swatchLight' : 'swatchDark'}`}
    style={{ backgroundColor: props.hex }}
  >
    <div className="hex">{props.hex}</div>
    <div className="var">psColors{props.var}</div>
    <style jsx>{`
      .swatch {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 120px;
        width: calc(25% - ${core.layout.spacingLarge});
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

const DarkSwatch = props => <Swatch {...props} />
const LightSwatch = props => <Swatch {...props} light />

export default withServerProps(_ => (
  <Chrome>
    <Content title="Color">
      <PageHeading>Color</PageHeading>

      <SectionHeading>Grayscale colors</SectionHeading>
      <P>Grayscale colors are used for containers, text, lines and borders.</P>
      <div>
        <Palette>
          <LightSwatch hex={core.colors.white} var="White" />
          <LightSwatch hex={core.colors.bone} var="Bone" />
          <DarkSwatch hex={core.colors.gray01} var="Gray01" />
          <DarkSwatch hex={core.colors.gray02} var="Gray02" />
          <DarkSwatch hex={core.colors.gray03} var="Gray03" />
          <DarkSwatch hex={core.colors.gray04} var="Gray04" />
          <DarkSwatch hex={core.colors.gray05} var="Gray05" />
          <DarkSwatch hex={core.colors.gray06} var="Gray06" />
          <DarkSwatch hex={core.colors.black} var="Black" />
        </Palette>
        <br />
        <Code language="css">{`@import "@pluralsight/ps-design-system-core";
.mySelector {
  color: var(--psColorsGray04);
}`}</Code>
      </div>

      <SectionHeading>UI colors</SectionHeading>
      <P>
        UI colors emphasize interface elements such as buttons, links, accents
        and vizualization.
      </P>
      <div>
        <Palette>
          <DarkSwatch hex={core.colors.pink} var="Pink" />
          <DarkSwatch hex={core.colors.red} var="Red" />
          <DarkSwatch
            hex={core.colors.interactive.default}
            var="InteractiveDefault"
          />
          <DarkSwatch
            hex={core.colors.interactive.hover}
            var="InteractiveHover"
          />
          <DarkSwatch hex={core.colors.yellow} var="Yellow" />
          <DarkSwatch hex={core.colors.greenLight} var="GreenLight" />
          <DarkSwatch hex={core.colors.green} var="Green" />
          <DarkSwatch hex={core.colors.blue} var="Blue" />
        </Palette>

        <br />
        <Code language="css">{`@import "@pluralsight/ps-design-system-core";
.mySelector {
  color: var(--psInteractiveDefault);
}`}</Code>
      </div>

      <SectionHeading>Gradient</SectionHeading>
      <P>
        So fresh. Use the standard gradient to emphasize and showcase the brand.
        Use sparingly.
      </P>
      <div>
        <Palette>
          <Gradient var={core.colors.gradientHorz}>
            <div>
              <GradientStop>#F05A28</GradientStop>
              <GradientVar>psColorsGradientHorz</GradientVar>
            </div>
            <div className="gradientHorzStop2">
              <GradientStop>#E80A89</GradientStop>
            </div>
          </Gradient>
          <Gradient var={core.colors.gradientVert}>
            <div className="gradientVert">
              <GradientStop>#F05A28</GradientStop>
              <GradientVar>psColorsGradientVert</GradientVar>
              <div className="gradientVertStop2">
                <GradientStop>#E80A89</GradientStop>
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
))
