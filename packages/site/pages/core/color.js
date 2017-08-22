import core from '@pluralsight/ps-design-system-core'
import PropTypes from 'prop-types'
import React from 'react'

import { Chrome, Code, Content, Example, Heading, Link, P } from '../../src/ui'

const Palette = props =>
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

const GradientStop = props =>
  <div className="stop">
    {props.children}
    <style jsx>{`
      .stop {
        color: ${core.colors.white};
        white-space: nowrap;
      }
    `}</style>
  </div>

const GradientVar = props =>
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

const Gradient = props =>
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

const HorzGradient = props =>
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
      .start, .stop, .var {
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

const VertGradient = props =>
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
      .start, .stop, .var {
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

const Swatch = props =>
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
      .hex, .var {
        white-space: nowrap;
      }
      .var {
        opacity: 0.75;
        font-size: ${core.type.fontSizeXSmall};
      }
      .swatchLight .hex, .swatchLight .var {
        color: ${core.colors.gray05};
      }
      .swatchDark .hex, .swatchDark .var {
        color: ${core.colors.white};
      }
    `}</style>
  </div>

const DarkSwatch = props => <Swatch {...props} />
const LightSwatch = props => <Swatch {...props} light />

export default _ =>
  <Chrome>
    <Content title="Color">
      <Heading size="xxLarge"><h1>Color</h1></Heading>

      <Heading size="large"><h2>Grayscale colors</h2></Heading>
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

      <Heading size="large"><h2>UI colors</h2></Heading>
      <P>
        UI colors emphasize interface elements such as buttons, links, accents
        and vizualization.
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

      <Heading size="large"><h2>Gradient</h2></Heading>
      <P>
        So fresh. Use the standard gradient to emphasize and showcase the brand.
        Use sparingly.
      </P>
      <div>
        <Palette>
          <Gradient var={core.colors.gradientHorz}>
            <div>
              <GradientStop>
                F05A28
              </GradientStop>
              <GradientVar>
                psColorsGradientHorz
              </GradientVar>
            </div>
            <div className="gradientHorzStop2">
              <GradientStop>
                E80A89
              </GradientStop>
            </div>
          </Gradient>
          <Gradient var={core.colors.gradientVert}>
            <div className="gradientVert">
              <GradientStop>
                F05A28
              </GradientStop>
              <GradientVar>
                psColorsGradientVert
              </GradientVar>
              <div className="gradientVertStop2">
                <GradientStop>
                  E80A89
                </GradientStop>
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
