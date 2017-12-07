import core from '@pluralsight/ps-design-system-core'
import {
  PageHeadingLayout,
  AsideLayout,
  EqualColumnLayout
} from '@pluralsight/ps-design-system-layout/react'
import Text from '@pluralsight/ps-design-system-text/react'
import Theme from '@pluralsight/ps-design-system-theme/react'

import {
  Chrome,
  Code,
  Content,
  Example,
  Heading,
  Link,
  P,
  PageHeading,
  PropTypes,
  SectionHeading,
  withServerProps
} from '../../src/ui'

const BlueBox = props => (
  <div className="bluebox">
    {props.children}
    <style jsx>{`
      .bluebox {
        display: flex;
        height: ${core.layout.spacingLarge};
        background: #8fc4e9;
      }
    `}</style>
  </div>
)

const AsideLayoutOutput = _ => (
  <div className="examples">
    <div className="example">
      <AsideLayout
        aside={
          <AsideLayout.Aside>
            <BlueBox />
          </AsideLayout.Aside>
        }
        main={
          <AsideLayout.Main>
            <BlueBox />
          </AsideLayout.Main>
        }
      />
    </div>
    <div className="example">
      <AsideLayout
        aside={
          <AsideLayout.Aside>
            <BlueBox />
          </AsideLayout.Aside>
        }
        asidePosition={AsideLayout.asidePositions.last}
        main={
          <AsideLayout.Main>
            <BlueBox />
          </AsideLayout.Main>
        }
      />
    </div>
    <style jsx>{`
      .examples {
        padding-bottom: ${core.layout.spacingSmall};
      }
      .example {
        margin-bottom: ${core.layout.spacingMedium};
      }
    `}</style>
  </div>
)

const EqualColumnLayoutOutput = _ => (
  <div className="examples">
    <div className="example">
      <EqualColumnLayout count={EqualColumnLayout.counts.six}>
        <BlueBox />
        <BlueBox />
        <BlueBox />
        <BlueBox />
        <BlueBox />
        <BlueBox />
      </EqualColumnLayout>
    </div>
    <div className="example">
      <EqualColumnLayout>
        <BlueBox />
        <BlueBox />
        <BlueBox />
        <BlueBox />
      </EqualColumnLayout>
    </div>
    <style jsx>{`
      .examples {
        padding-bottom: ${core.layout.spacingSmall};
      }
      .example {
        margin-bottom: ${core.layout.spacingMedium};
      }
    `}</style>
  </div>
)

export default withServerProps(_ => (
  <Chrome>
    <Content title="Layout">
      <PageHeading packageName="layout" beta>
        Layout
      </PageHeading>

      <P>Install the component dependency:</P>
      <Code language="bash">
        npm install @pluralsight/ps-design-system-layout
      </Code>

      <P>Include a React component in your project:</P>
      <Code language="javascript">
        import * as Layout from '@pluralsight/ps-design-system-layout/react'
      </Code>

      <SectionHeading>Page Heading Layout</SectionHeading>
      <P>
        Start your layout with this default template to achieve standard outer
        spacing and title style.
      </P>
      <Example.React
        orient="vertical"
        includes={{ PageHeadingLayout }}
        codes={[
          `
<PageHeadingLayout heading={<h1>Page title</h1>}>
  Page contents
</PageHeadingLayout>
`
        ]}
      />
      <PropTypes
        title="Layout.PageHeadingLayout PropTypes"
        props={[
          PropTypes.row([
            'heading',
            'React.element',
            true,
            null,
            <span>Heading element to display as page title</span>
          ])
        ]}
      />

      <SectionHeading>Aside Layout</SectionHeading>
      <P>Use this layout for any 1/3, 2/3 proportioned layouts.</P>
      <AsideLayoutOutput />
      <Code language="javascript">{`<AsideLayout
  aside={<AsideLayout.Aside></AsideLayout.Aside>}
  main={<AsideLayout.Main></AsideLayout.Main>}  />

<AsideLayout
  aside={<AsideLayout.Aside></AsideLayout.Aside>}
  asidePosition={AsideLayout.asidePositions.last}
  main={<AsideLayout.Main></AsideLayout.Main>}  />`}</Code>
      <PropTypes
        title="Layout.AsideLayout PropTypes"
        props={[
          PropTypes.row([
            'aside',
            'React.element',
            true,
            null,
            <span>Content for aside</span>
          ]),
          PropTypes.row([
            'asidePosition',
            PropTypes.union(AsideLayout.asidePositions),
            false,
            <code>first</code>,
            <span>
              Aside position (from <code>AsideLayout.asidePositions</code>)
            </span>
          ]),
          PropTypes.row([
            'main',
            'React.element',
            true,
            null,
            <span>Main content</span>
          ])
        ]}
      />

      <SectionHeading>Equal Column Layout</SectionHeading>
      <P>
        This layout will provide a set number of columns for an arbitrary number
        of items. If more items than columns are provided, they will flow into
        rows.
      </P>
      <EqualColumnLayoutOutput />
      <Code language="javascript">{`<EqualColumnLayout count={EqualColumnLayout.counts.size}>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</EqualColumnLayout>

<EqualColumnLayout count={EqualColumnLayout.counts.size}>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</EqualColumnLayout>`}</Code>
      <PropTypes
        title="Layout.EqualColumnLayout PropTypes"
        props={[
          PropTypes.row([
            'count',
            PropTypes.union(EqualColumnLayout.counts),
            false,
            <code>four</code>,
            <span>Number of columns in a row at full width</span>
          ])
        ]}
      />
    </Content>
  </Chrome>
))
