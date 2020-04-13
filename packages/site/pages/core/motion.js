import * as core from '@pluralsight/ps-design-system-core'
import React from 'react'

import {
  Chrome,
  Code,
  Content,
  P,
  PageHeading,
  SectionHeading
} from '../../src/ui/index.js'

const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1)

const speeds = Object.keys(core.motion)
  .filter(key => /^speed/.test(key))
  .map(key => ({ varName: key, time: core.motion[key] }))
  .reverse()
  .map((speed, i) => ({
    ...speed,
    title: ['Extra Slow', 'Slow', 'Normal', 'Fast', 'Extra Fast'][i],
    icon: ['🐌', '🐢', '🐐', '🐇', '🐆'][i]
  }))

const Speeds = _ => (
  <div className="speeds">
    {speeds.map(speed => (
      <div className="speed" key={speed.title}>
        <div className="box">
          <div className="icon">{speed.icon}</div>
          <div className="title">{speed.title}</div>
          <div className="time">{speed.time}</div>
        </div>
        <div className="varName">
          <code>psMotion{capitalize(speed.varName)}</code>
        </div>
      </div>
    ))}
    <style jsx>{`
      .speeds {
        display: flex;
        flex-wrap: wrap;
        margin: calc(${core.layout.spacingLarge} / -2);
      }
      .speed {
        flex: 1;
        margin: calc(${core.layout.spacingLarge} / 2);
        font-size: ${core.type.fontSizeSmall};
        text-align: center;
      }
      .box {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        min-width: 150px;
        height: 150px;
        background: ${core.colorsBackgroundLight[2]};
        border-radius: 12px;
      }
      .icon {
        font-size: ${core.type.fontSizeXLarge};
      }
      .title {
        color: ${core.colorsTextIcon.lowOnLight};
        font-weight: ${core.type.fontWeightBook};
        line-height: ${core.type.lineHeightStandard};
        text-transform: uppercase;
      }
      .time {
        color: ${core.colorsTextIcon.lowOnLight};
        font-weight: ${core.type.fontWeightBold};
        line-height: ${core.type.lineHeightStandard};
      }
      .varName {
        margin-top: ${core.layout.spacingSmall};
        font-size: ${core.type.fontSizeXSmall};
        color: ${core.colorsPink[6]};
      }
    `}</style>
  </div>
)

const Relative = _ => (
  <div className="relative">
    <img
      alt="Use slower animations for larger objects or longer distances."
      srcSet="/static/img/motionSpeedScale.png,
              /static/img/motionSpeedScale@2x.png 1.5x"
      src="/static/img/motionSpeedScale.png"
    />
    <style jsx>{`
      .relative {
        padding: ${core.layout.spacingLarge} ${core.layout.spacingXLarge};
        background: ${core.colorsBackgroundLight[2]};
        border-radius: 12px;
        overflow: hidden;
        text-align: center;
      }
      .scaleImg {
        max-width: 100%;
      }
    `}</style>
  </div>
)

const Travel = _ => (
  <div className="travel">
    <div className="lines">
      <div className="line" />
      <div className="line" />
      <div className="line" />
      <div className="line" />
      <div className="line" />
      <div className="line" />
      <div className="line" />
    </div>
    <div className="pills">
      <div className="pill pill1" />
      <div className="pill2Container">
        <div className="pill pill2" />
      </div>
      <div className="pill3Container">
        <div className="pill pill3" />
      </div>
    </div>
    <style jsx>{`
      .travel {
        position: relative;
        height: 213px;
        width: 100%;
        background: ${core.colorsBackgroundLight[2]};
        border-radius: 12px;
        overflow: hidden;
        margin-bottom: ${core.layout.spacingLarge};
      }
      .pills {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        padding: 0 ${core.layout.spacingMedium};
      }
      .pill {
        background: ${core.colorsPink[6]};
        height: 44px;
        margin-top: ${core.layout.spacingLarge};
        border-radius: 22px;
      }
      @keyframes pill1 {
        6.67% {
          transform: translateX(100%);
        }
        50% {
          transform: translateX(100%);
        }
        56.67% {
          transform: translateX(0%);
        }
      }
      @keyframes pill2 {
        6.67% {
          transform: translateX(calc(25% - 44px));
        }
        50% {
          transform: translateX(calc(25% - 44px));
        }
        56.67% {
          transform: translateX(0%);
        }
      }
      @keyframes pill3 {
        16.67% {
          transform: translateX(100%);
        }
        50% {
          transform: translateX(100%);
        }
        66.67% {
          transform: translateX(0%);
        }
      }
      .pill1 {
        width: 50%;
        animation: 4000ms 500ms infinite pill1;
      }
      .pill2Container {
        width: calc(100% - 44px);
        animation: 4000ms 500ms infinite pill2;
      }
      .pill3Container {
        width: calc(100% - 44px);
        animation: 4000ms 500ms infinite pill3;
      }
      .pill2,
      .pill3 {
        width: 44px;
      }
      .lines {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        padding: ${core.layout.spacingSmall} 12.5% ${core.layout.spacingSmall} 0;
      }
      .line {
        flex: 1;
        border-right: 1px dashed ${core.colorsBlue[6]};
      }
    `}</style>
  </div>
)

const Easing = _ => (
  <div className="easing">
    <div className="functions">
      <div className="function">
        <div className="label">
          <div>
            Use <b>ease-in-out</b> for moving point to point.
          </div>
          <div className="dotContainer dotContainer1">
            <div className="dot" />
          </div>
        </div>
        <div className="graphic">
          <svg
            width="151"
            height="103"
            viewBox="0 0 151 103"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="none" fillRule="evenodd">
              <path
                d="M1 100h149"
                stroke="#AAA"
                strokeWidth="2"
                opacity=".54"
              />
              <path
                d="M76.12 2v98"
                stroke="#979797"
                strokeWidth="2"
                opacity=".54"
                strokeDasharray="4,4"
              />
              <path
                d="M2 100.117s53.59 4.667 73.973-49.437C96.357-3.424 148.567 2.164 148.567 2.164"
                stroke="#8FC4E9"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </g>
          </svg>
        </div>
      </div>
      <div className="function">
        <div className="label">
          <div>
            Use <b>ease-out</b> for entering elements.
          </div>
          <div className="dotContainer dotContainer2">
            <div className="dot" />
          </div>
        </div>
        <div className="graphic">
          <svg
            width="151"
            height="102"
            viewBox="0 0 151 102"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="none" fillRule="evenodd">
              <path
                d="M1 100h149"
                stroke="#AAA"
                strokeWidth="2"
                opacity=".54"
              />
              <path
                d="M76.12 2v98"
                stroke="#979797"
                strokeWidth="2"
                opacity=".54"
                strokeDasharray="4,4"
              />
              <path
                d="M2 99.953S56.412 2 148.567 2"
                stroke="#8FC4E9"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </g>
          </svg>
        </div>
      </div>
      <div className="function">
        <div className="label">
          <div>
            Use <b>ease-in</b> for exiting elements.
          </div>
          <div className="dotContainer dotContainer3">
            <div className="dot" />
          </div>
        </div>
        <div className="graphic">
          <svg
            width="151"
            height="102"
            viewBox="0 0 151 102"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="none" fillRule="evenodd">
              <path
                d="M1 100h149"
                stroke="#AAA"
                strokeWidth="2"
                opacity=".54"
              />
              <path
                d="M76.12 2v98"
                stroke="#979797"
                strokeWidth="2"
                opacity=".54"
                strokeDasharray="4,4"
              />
              <path
                d="M2 99.953S133.785 68.603 148.567 2"
                stroke="#8FC4E9"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </g>
          </svg>
        </div>
      </div>
      <div className="function">
        <div className="label">
          <div>
            Use <b>linear</b> for opacity or color changes.
          </div>
          <div className="dotContainer">
            <div className="dot dot4" />
          </div>
        </div>
        <div className="graphic">
          <svg
            width="151"
            height="103"
            viewBox="0 0 151 103"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="none" fillRule="evenodd">
              <path
                d="M1 100h149H1z"
                stroke="#AAA"
                strokeWidth="2"
                opacity=".54"
              />
              <path
                d="M76.12 2v98"
                stroke="#979797"
                strokeWidth="2"
                opacity=".54"
                strokeDasharray="4,4"
              />
              <path
                d="M2 100.218L148.567 2"
                stroke="#8FC4E9"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </g>
          </svg>
        </div>
      </div>
    </div>
    <div className="defaultFunction">
      When in doubt, use <b>ease-in-out</b>.
    </div>
    <style jsx>{`
      b {
        font-weight: ${core.type.fontWeightBold};
      }
      .easing {
        overflow: hidden;
        margin-bottom: ${core.layout.spacingLarge};
      }
      .functions {
        display: flex;
        flex-wrap: wrap;
        margin: calc(${core.layout.spacingLarge} / -2);
      }
      .function {
        position: relative;
        display: flex;
        flex-direction: column;
        width: calc(50% - ${core.layout.spacingLarge});
        margin: calc(${core.layout.spacingLarge} / 2);
        padding: ${core.layout.spacingLarge};
        background: ${core.colorsBackgroundLight[2]};
        border-radius: 12px;
        overflow: hidden;
      }
      .defaultFunction {
        margin-top: ${core.layout.spacingLarge};
        text-align: center;
        padding: ${core.layout.spacingLarge};
        background: ${core.colorsBackgroundLight[2]};
        border-radius: 12px;
        font-size: ${core.type.fontSizeMedium};
        line-height: ${core.type.lineHeightStandard};
        font-weight: ${core.type.fontWeightLight};
      }
      .label {
        font-size: ${core.type.fontSizeMedium};
        line-height: ${core.type.lineHeightStandard};
        font-weight: ${core.type.fontWeightLight};
        margin-bottom: ${core.layout.spacingLarge};
      }
      .graphic {
        text-align: center;
      }
      .graphic svg {
        max-width: 100%;
      }
      @keyframes animateEaseinout {
        0% {
          animation-timing-function: ease-in-out;
        }
        16.67% {
          transform: translateX(100%);
          animation-timing-function: linear;
        }
        50% {
          transform: translateX(100%);
          animation-timing-function: ease-in-out;
        }
        66.67% {
          transform: translateX(0%);
          animation-timing-function: linear;
        }
        100% {
          transform: translateX(0%);
        }
      }
      @keyframes animateEaseout {
        0% {
          animation-timing-function: ease-out;
        }
        20% {
          transform: translateX(100%);
          animation-timing-function: linear;
        }
        60% {
          transform: translateX(100%);
          opacity: 1;
        }
        60.01% {
          opacity: 0;
        }
        100% {
          opacity: 0;
          transform: translateX(0);
        }
      }
      @keyframes animateEasein {
        0% {
          transform: translateX(100%);
          animation-timing-function: ease-in;
        }
        20% {
          transform: translateX(0%);
          animation-timing-function: linear;
        }
        100% {
          transform: translateX(0%);
        }
      }
      @keyframes animateLinear {
        0% {
          opacity: 0;
          animation-timing-function: linear;
        }
        16.6% {
          opacity: 1;
        }
        50% {
          opacity: 1;
        }
        66.6% {
          opacity: 0;
        }
        100% {
          opacity: 0;
        }
      }
      .dotContainer {
        position: relative;
        margin-top: ${core.layout.spacingMedium};
      }
      .dotContainer1 {
        animation: 3000ms infinite animateEaseinout;
        width: calc(100% - 16px);
      }
      .dotContainer2 {
        left: -16px;
        width: 100%;
        animation: 2500ms 500ms infinite animateEaseout;
      }
      .dotContainer3 {
        left: -48px;
        width: calc(100% + 32px);
        transform: translateX(calc(100% - 32px));
        animation: 2500ms infinite animateEasein;
      }
      .dot4 {
        animation: 3000ms infinite animateLinear;
      }
      .dot {
        height: 16px;
        width: 16px;
        border-radius: 50%;
        background: ${core.colorsPink[6]};
      }
      @media screen and (min-width: 769px) {
        .function {
          flex-direction: row;
        }
        .label {
          display: flex;
          flex-direction: column;
          margin: 0 ${core.layout.spacingSmall} 0 0;
        }
        .dotContainer {
          margin-top: auto;
        }
      }
    `}</style>
  </div>
)

const Rotation = _ => (
  <div className="rotation">
    <div className="box boxLarge" />
    <div className="box boxSmall" />
    <style jsx>{`
      .rotation {
        display: flex;
        margin-bottom: ${core.layout.spacingLarge};
        padding: ${core.layout.spacingXLarge};
        background: ${core.colorsBackgroundLight[2]};
        border-radius: 12px;
        overflow: hidden;
      }
      @keyframes rotateme {
        to {
          transform: rotate(360deg);
        }
      }
      .box {
        background: ${core.colorsBackgroundLight[3]};
        margin-right: ${core.layout.spacingXLarge};
      }
      .boxSmall {
        border: ${core.layout.spacingXXSmall} solid ${core.colorsPink[6]};
        height: 32px;
        width: 32px;
        animation: 1s linear infinite rotateme;
      }
      .boxLarge {
        border: ${core.layout.spacingSmall} solid ${core.colorsPink[6]};
        height: 128px;
        width: 128px;
        animation: 3s linear infinite rotateme;
      }
    `}</style>
  </div>
)

export default _ => (
  <Chrome>
    <Content title="Motion">
      <PageHeading>Motion</PageHeading>

      <SectionHeading>Speed</SectionHeading>
      <P>
        Motion speed should most often occur at the following standard
        increments.
      </P>
      <Speeds />
      <div style={{ margin: `${core.layout.spacingLarge} 0` }}>
        <Code lang="css">{`@import "@pluralsight/ps-design-system-core";
.mySelector {
  animation-duration: var(--psMotionSpeedXFast);
}`}</Code>
      </div>
      <P>Some general guidance on selecting a duration.</P>
      <Relative />

      <P>
        A small object moving a great relative distance may have slightly longer
        duration so that the movement isn’t too fast and abrupt.
      </P>
      <Travel />

      <SectionHeading>Easing</SectionHeading>
      <P>Some general guidance on selecting an easing curve.</P>
      <Easing />
      <Code lang="css">{`@import "@pluralsight/ps-design-system-core";
.mySelector {
  animation-timing-function: ease-in-out;
}`}</Code>

      <SectionHeading>Rotation</SectionHeading>
      <P>
        Generally, larger objects look more natural when rotating slower than
        smaller objects. The easing property for rotation should be{' '}
        <b>linear</b>.
      </P>
      <Rotation />
      <Code lang="css">{`@import "@pluralsight/ps-design-system-core";
@keyframes rotateme { to { transform: rotate(360deg); }}
.mySelector {
  animation: var(--psMotionSpeedNormal) linear infinite rotateme;
}`}</Code>
    </Content>
  </Chrome>
)
