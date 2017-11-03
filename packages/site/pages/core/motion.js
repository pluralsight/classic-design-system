import core from '@pluralsight/ps-design-system-core'
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
    </Content>
  </Chrome>
))
