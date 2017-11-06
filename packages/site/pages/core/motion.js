import core from '@pluralsight/ps-design-system-core'
import { transparentize } from 'polished'

import {
  Chrome,
  Code,
  Content,
  P,
  PageHeading,
  SectionHeading,
  withServerProps
} from '../../src/ui'

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
        <div className="icon">{speed.icon}</div>
        <div className="title">{speed.title}</div>
        <div className="time">{speed.time}</div>
        <div className="varName">{speed.varName}</div>
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
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        min-width: 150px;
        height: 150px;
        margin: calc(${core.layout.spacingLarge} / 2);
        background: ${core.colors.bone};
        color: ${core.colors.gray03};
        border-radius: 12px;
        font-size: ${core.type.fontSizeSmall};
        text-align: center;
      }
      .icon {
        font-size: ${core.type.fontSizeXLarge};
      }
      .title {
        font-weight: ${core.type.fontWeightBook};
        line-height: ${core.type.lineHeightStandard};
        text-transform: uppercase;
      }
      .time {
        font-weight: ${core.type.fontWeightBold};
        line-height: ${core.type.lineHeightStandard};
      }
      .varName {
      }
    `}</style>
  </div>
)

const Dots = props => (
  <div className="dots">
    {props.arr.map((_, i, arr) => (
      <div
        className={`dot ${props.size === 'large' ? 'dotLarge' : ''}`}
        style={{ ...props.style, opacity: (i + 1) / arr.length }}
      />
    ))}
    <style jsx>{`
      .dots {
        display: flex;
        margin: -1px;
      }
      .dot {
        display: block;
        height: 9px;
        width: 9px;
        margin: 1px;
        background: ${core.colors.pink};
        border-radius: 50%;
      }
      .dotLarge {
        height: 75px;
        width: 75px;
      }
    `}</style>
  </div>
)

const VertTriangle = props => (
  <div className="triangle">
    <div className="graphic">
      <svg viewBox="0 0 96 465" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient x1="50%" y1="50%" x2="50%" y2="0%" id="vertTriangle">
            <stop stopColor="#FFF" offset="0%" />
            <stop stopColor="#FFF" stopOpacity="0" offset="100%" />
          </linearGradient>
        </defs>
        <path
          d="M48.458 466L96 1H0"
          transform="translate(0 -1)"
          fill="url(#vertTriangle)"
          fillRule="evenodd"
        />
      </svg>
    </div>
    <div className="label">{props.label}</div>
    <style jsx>{`
      .triangle {
        position: relative;
        height: 465px;
      }
      .graphic {
        position: relative;
      }
      .graphic :global(svg) {
        height: 465px;
      }
      .label {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(-90deg);
        white-space: nowrap;
        font-size: ${core.type.fontSizeSmall};
        font-weight: ${core.type.fontWeightBold};
        text-transform: uppercase;
      }
    `}</style>
  </div>
)

const HorzTriangle = props => (
  <div className="triangle">
    <svg
      className="graphic"
      viewBox="0 0 466 95"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient x1="50%" y1="50%" y2="50%" id="horzTriangle">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#FFF" stopOpacity="0" offset="100%" />
        </linearGradient>
      </defs>
      <path
        d="M108 520.95L574 474v95"
        transform="translate(-108 -474)"
        fill="url(#horzTriangle)"
        fillRule="evenodd"
      />
    </svg>
    <div className="label">{props.label}</div>
    <style jsx>{`
      .triangle {
        position: relative;
        max-width: 475px;
      }
      .graphic {
        position: relative;
        width: 100%;
        margin-top: 6px;
      }
      .label {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        white-space: nowrap;
        font-size: ${core.type.fontSizeSmall};
        font-weight: ${core.type.fontWeightBold};
        text-transform: uppercase;
      }
    `}</style>
  </div>
)

const Distance = _ => (
  <div className="distance">
    <Dots arr={[1, 2, 3, 4, 5, 6, 7]} />
    <VertTriangle label="Relative Distance Travelled" />
    <Dots arr={[1, 2]} />
    <style jsx>{`
      .distance {
        display: flex;
        flex-direction: column;
        align-items: center;
        color: ${core.colors.black};
      }
    `}</style>
  </div>
)

const Size = _ => (
  <div className="size">
    <Dots arr={[1]} />
    <HorzTriangle label="Object Size" />
    <Dots arr={[1]} size="large" style={{ transform: 'translateX(-100%)' }} />
    <style jsx>{`
      .size {
        display: flex;
        align-items: center;
        color: ${core.colors.black};
      }
    `}</style>
  </div>
)
const Square = props => (
  <div className="squareContainer">
    <div className="square" style={props.style}>
      <div className="label">
        <div className="icon">{props.icon}</div>
        <div className="time">{props.time}</div>
      </div>
      {props.children}
    </div>
    <style jsx>{`
      .squareContainer {
        position: relative;
        width: calc(100% - 85px);
        height: 0;
        padding-bottom: calc(100% - 85px);
      }
      .square {
        display: flex;
        align-items: flex-end;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        border-top: 1px dotted ${core.colors.blue};
        border-right: 1px dotted ${core.colors.blue};
        background: ${transparentize(0.8, core.colors.blue)};
      }
      .label {
        position: absolute;
        top: 0;
        right: 0;
        width: 75px;
        padding-top: ${core.layout.spacingMedium};
        text-align: center;
      }
      .icon {
        font-size: ${core.type.fontSizeLarge};
      }
      .time {
        font-weight: ${core.type.fontWeightBold};
      }
    `}</style>
  </div>
)

const Scale = _ => (
  <div className="scale">
    {speeds.reverse().reduce(
      (acc, speed, i) => (
        <Square
          icon={speed.icon}
          time={speed.time}
          style={
            i === speeds.length - 1
              ? { border: `1px solid ${core.colors.blue}` }
              : {}
          }
        >
          {acc}
        </Square>
      ),
      null
    )}
    <style jsx>{`
      .scale {
        max-width: 570px; /* 570px = 475px * 1.2 */
        max-height: 570px; /* 570px = 475px * 1.2 */
      }
    `}</style>
  </div>
)

const Relative = _ => (
  <div className="relative">
    <div className="lhs">
      <Distance />
    </div>
    <div className="rhs">
      <Scale />
      <Size />
    </div>
    <style jsx>{`
      .relative {
        min-width: 766px; /* remove when ready to get further on responsiveness of this graphic */
        display: flex;
        justify-content: center;
        padding: ${core.layout.spacingLarge} 0;
        background: ${core.colors.bone};
        border-radius: 12px;
        color: ${core.colors.black};
        overflow: hidden;
      }
      .lhs {
        flex: 1;
        display: flex;
        justify-content: flex-end;
      }
      .rhs {
        flex: 3;
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
        background: ${core.colors.bone};
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
        background: ${core.colors.pink};
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
          transform: translateX(12%);
        }
        50% {
          transform: translateX(12%);
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
        83.33% {
          transform: translateX(0%);
        }
      }
      .pill1 {
        width: 50%;
        animation: 3000ms 500ms infinite pill1;
      }
      .pill2Container {
        width: calc(100% - 44px);
        animation: 3000ms 500ms infinite pill2;
      }
      .pill3Container {
        width: calc(100% - 44px);
        animation: 3000ms 500ms infinite pill3;
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
        border-right: 1px dashed ${core.colors.blue};
      }
    `}</style>
  </div>
)

const Easing = _ => (
  <div className="easing">
    <div className="functions">
      <div className="function">
        <div className="label">
          Use <b>ease-in-out</b> for moving point to point.
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
            <g fill="none" fill-rule="evenodd">
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
          Use <b>ease-out</b> for entering elements.
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
            <g fill="none" fill-rule="evenodd">
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
          Use <b>ease-in</b> for exiting elements.
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
            <g fill="none" fill-rule="evenodd">
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
          Use <b>linear</b> for opacity or color changes.
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
            <g fill="none" fill-rule="evenodd">
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
        width: calc(50% - ${core.layout.spacingLarge});
        margin: calc(${core.layout.spacingLarge} / 2);
        padding: ${core.layout.spacingLarge};
        background: ${core.colors.bone};
        border-radius: 12px;
        overflow: hidden;
      }
      .defaultFunction {
        margin-top: ${core.layout.spacingLarge};
        text-align: center;
        padding: ${core.layout.spacingLarge};
        background: ${core.colors.bone};
        border-radius: 12px;
        font-size: ${core.type.fontSizeMedium};
        line-height: ${core.type.lineHeightStandard};
        font-weight: ${core.type.fontWeightLight};
      }
      .label {
        width: 215px;
        font-size: ${core.type.fontSizeMedium};
        line-height: ${core.type.lineHeightStandard};
        font-weight: ${core.type.fontWeightLight};
      }
      @keyframes animateEaseinout {
        25% {
          transform: translateX(100%);
          animation-timing-function: ease-in-out;
        }
        50% {
          transform: translateX(100%);
          animation-timing-function: linear;
        }
        75% {
          animation-timing-function: ease-in-out;
          transform: translateX(0%);
        }
      }
      @keyframes animateEaseout {
        33.3% {
          transform: translateX(100%);
          animation-timing-function: ease-out;
        }
        66.6% {
          transform: translateX(100%);
          opacity: 1;
          animation-timing-function: linear;
        }
        67% {
          opacity: 0;
          animation-timing-function: linear;
        }
        100% {
          opacity: 0;
          transform: translateX(0);
          animation-timing-function: linear;
        }
      }
      @keyframes animateEasein {
        33.3% {
          transform: translateX(100%);
          animation-timing-function: linear;
        }
        66.6% {
          transform: translateX(0%);
          opacity: 1;
          animation-timing-function: ease-in;
        }
        67% {
          opacity: 0;
          animation-timing-function: linear;
        }
        100% {
          opacity: 0;
          transform: translateX(100%);
          animation-timing-function: linear;
        }
      }
      @keyframes animateLinear {
        16.6% {
          opacity: 1;
        }
        50% {
          opacity: 0;
        }
        66.6% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }
      .dotContainer {
        position: absolute;
        left: ${core.layout.spacingLarge};
        bottom: ${core.layout.spacingLarge};
      }
      .dotContainer1 {
        animation: 2000ms 500ms infinite animateEaseinout;
        width: calc(215px - 16px - ${core.layout.spacingSmall});
      }
      .dotContainer2 {
        left: -16px;
        width: 215px;
        animation: 1500ms 500ms infinite animateEaseout;
      }
      .dotContainer3 {
        left: -16px;
        width: calc(215px + 16px);
        transform: translateX(100%);
        animation: 1500ms infinite animateEasein;
      }
      .dot4 {
        animation: 3000ms linear infinite animateLinear;
      }
      .dot {
        height: 16px;
        width: 16px;
        border-radius: 50%;
        background: ${core.colors.pink};
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
        padding: ${core.layout.spacingLarge};
        background: ${core.colors.bone};
        border-radius: 12px;
        overflow: hidden;
      }
      @keyframes rotateme {
        to {
          transform: rotate(360deg);
        }
      }
      .box {
        background: ${core.colors.white};
        margin-right: ${core.layout.spacingXLarge};
      }
      .boxSmall {
        border: ${core.layout.spacingXXSmall} solid ${core.colors.pink};
        height: 32px;
        width: 32px;
        animation: 1s linear infinite rotateme;
      }
      .boxLarge {
        border: ${core.layout.spacingSmall} solid ${core.colors.pink};
        height: 128px;
        width: 128px;
        animation: 3s linear infinite rotateme;
      }
    `}</style>
  </div>
)

export default withServerProps(_ => (
  <Chrome>
    <Content title="Motion">
      <PageHeading>Motion</PageHeading>

      <P>
        Use standard motion variables by installing the core dependency via npm.
      </P>
      <Code lang="bash">npm install @pluralsight/ps-design-system-core</Code>

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
        Generally, larger objects look more natural when rotating quicker than
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
))
