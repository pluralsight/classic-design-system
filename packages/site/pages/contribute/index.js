import core from '@pluralsight/ps-design-system-core'

import {
  Chrome,
  Content,
  Doc,
  Heading,
  P,
  SectionHeading,
  withServerProps
} from '../../src/ui'

const Bar = props =>
  <div className="bar" style={props.style}>
    <style jsx>{`
      .bar {
         margin: ${core.layout.spacingXSmall} 0;
         height: 5px;
         background: ${core.colors.gradientHorz};
      }
  `}</style>
  </div>

const Levels = props =>
  <div className="levels">
    {props.children}
    <style jsx>{`
      .levels {
        display: flex;
        flex-wrap: wrap;
        margin: ${core.layout.spacingLarge} calc(-1 * ${core.layout
      .spacingLarge} / 2) calc(${core.layout.spacingLarge} / 2);
      }
    `}</style>
  </div>

const Level = props =>
  <div className="level">
    {props.children}
    <style jsx>{`
      .level {
        flex: 1;
        min-width: 150px;
        padding: ${core.layout.spacingMedium};
        margin: calc(${core.layout.spacingLarge} / 2);
        background: ${core.colors.bone};
        color: ${core.colors.gray06};
        text-align: left;
        display: flex;
        flex-direction: column;
        border-radius: 12px;
        overflow: hidden;
      }
    `}</style>
  </div>

Level.Title = props =>
  <div>
    <h3 className="title">
      {props.children}
      <Bar />
    </h3>
    <style jsx>{`
      .title {
        display: inline-block;
        font-weight: ${core.type.fontWeightBold}
        text-transform: uppercase;
      }
  `}</style>
  </div>

Level.Desc = props =>
  <div className="desc">
    {props.children}
    <style jsx>{`  `}</style>
  </div>

const LevelHeading = props => <SectionHeading>{props.children}</SectionHeading>

const LevelList = props =>
  <div className="list">
    {props.children}
    <style jsx>{`
      .list {
        padding-bottom: ${core.layout.spacingXLarge};
        border-bottom: 1px solid ${core.colors.gray01};
        margin-bottom: ${core.layout.spacingSmall};
      }
    `}</style>
  </div>

export default withServerProps(_ =>
  <Chrome>
    <Content title="Install">
      <Heading size="xxLarge">
        <h1>Contribute</h1>
      </Heading>
      <P>
        The Design System is a project that can help the whole company and needs
        the whole company to succeed in its goals.{' '}
      </P>
      <P>
        There are different levels of contribution. Choose a way to contribute
        that brings out the best in you and is best for the project.
      </P>
      <Levels>
        <Level>
          <Level.Title>
            Guide
          </Level.Title>
          <Level.Desc>
            You stay in contact with the Design System project and help it move
            in
            a helpful direction.
          </Level.Desc>
        </Level>
        <Level>
          <Level.Title>
            Adopt
          </Level.Title>
          <Level.Desc>
            You use the Design System on your projects for design consistency
            and engineering speed.
          </Level.Desc>
        </Level>
        <Level>
          <Level.Title>
            Share
          </Level.Title>
          <Level.Desc>
            You promote the Design System, answer questions, and help other
            teams integrate.
          </Level.Desc>
        </Level>
        <Level>
          <Level.Title>
            Create
          </Level.Title>
          <Level.Desc>
            You help make the Design System itself. You share ownership of the
            project.
          </Level.Desc>
        </Level>
      </Levels>

      <LevelList>
        <LevelHeading>Guide</LevelHeading>
        <Doc>{`
### Ask for a feature
Jump on the [Github project](https://github.com/pluralsight/design-system), and let us know what you need from the Design System.  Once we know what you need, we can work with you to make it more helpful to you.

### Report a bug
The Design System is used in many places.  We have a hard time keeping our eyes on all of them to keep up with the issues you’re having.  If you see something amiss, please report it via a [Github issue](https://github.com/pluralsight/design-system/issues/new) so we have insight in order to resolve it.

### Offer design direction
Maybe you have a visual, interactive, or code design insight.  We’d love to chat about your ideas and see how they might fit and be used to improve the Design System.   Join [#design-system-dev](slack://channel?team=pluralsight&id=design-system-dev) and share.
`}</Doc>
      </LevelList>

      <LevelList>
        <LevelHeading>Adopt</LevelHeading>
        <Doc>{`
### Install it
Pull out the trusty [npm install](/install) and use the Design System.  Get it into your project and offload the creation and maintenance of these UI building blocks to a shared library.

### Design with it
Use the Design System in your compositions.  When your application designs match the Style Guide (and thus the Design System), you make implementing an app-wide consistent UI straightforward and a joy to write.

### Plan for it
Plan for Design System integration.  If the Design System has elements in it that will help you go faster, plan on that -- it’s an essential Design System goal.  If the Design System doesn’t have the elements you need, consider planning in time as a team to help create the part of the Design System that you and everyone could use.
`}</Doc>
      </LevelList>

      <LevelList>
        <LevelHeading>Share</LevelHeading>
        <Doc>{`
### Promote it
If you’ve had a good experience with the Design System, share that.  You can help your team and other teams have the same benefits you have had.  The benefit remains locked up in the Design System until teams know about it and try it out.

### Answer questions
The Design System has a broad and growing surface area.  You have had an experience with it that gives you the opportunity to help others.  Be ready to help your teammates and others.  Jump into [#design-system-help](slack://channel?team=pluralsight&id=design-system-help) and answer questions that are brought up.  As we share our knowledge, there are more people around to help with us.

### Assist an integration
We’ve made special effort to make the Design System easy to get started with, but the first steps are always the hardest.  Sit down and spend some time with someone making their first integration.
`}</Doc>
      </LevelList>

      <LevelHeading>Create</LevelHeading>
      <Doc>{`
### Make a Pull Request
There’s a lot of code that has been written, and there’s even more left to write.  It’ll be satisfying to take a look at the final product and know that you made your mark on it.  Help as big as new components or as small as a typo fix in the docs is helpful and wanted.  Get into, become familiar with our code Contribution Guide, and push some bits.  

### Contribute to the design group
The design group meets together regularly to review the Style Guide and the latest designs.  The Design System is impacted by all these discussions and decisions.  Bring your best ideas and share them.  
`}</Doc>
    </Content>
  </Chrome>
)
