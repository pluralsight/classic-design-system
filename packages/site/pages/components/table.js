import Avatar from '@pluralsight/ps-design-system-avatar'
import * as core from '@pluralsight/ps-design-system-core'
import Drawer from '@pluralsight/ps-design-system-drawer'
import PT from 'prop-types'
import React from 'react'
import Table from '@pluralsight/ps-design-system-table/react.js'
import Theme from '@pluralsight/ps-design-system-theme'
import * as Text from '@pluralsight/ps-design-system-text/react.js'

import {
  Chrome,
  Code,
  Content,
  Example,
  Intro,
  Link,
  P,
  PageHeading,
  PropTypes,
  SectionHeading
} from '../../src/ui/index.js'

const PinkBox = props => (
  <div className="pink-box">
    <span>{`<${props.children}>`}</span>
    <style jsx>{`
      .pink-box {
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px dashed ${core.colors.pink};
        color: ${core.colors.pink};
        font-size: 16px;
        font-family: ${core.type.fontFamilyCode};
        height: 100px;
      }
    `}</style>
  </div>
)
PinkBox.propTypes = {
  children: PT.node
}

class InAppExample extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fields: [
        { key: 'name', name: 'Name', align: Table.aligns.left },
        { key: 'courses', name: 'Unique Courses', align: Table.aligns.right },
        { key: 'viewTime', name: 'View Time', align: Table.aligns.right }
      ],
      sortKey: 'name',
      sortDirection: Table.sorts.asc,
      rows: [
        {
          name: 'Tod Gentille',
          courses: 41,
          viewTime: 839
        },
        {
          name: 'Dmitry Borodyansky',
          courses: 2,
          viewTime: 12
        },
        {
          name: 'Jake Trent',
          courses: 7,
          viewTime: 294
        }
      ]
    }
    this.handleSortClick = this.handleSortClick.bind(this)
    this.sortRows = this.sortRows.bind(this)
  }
  handleSortClick(sortKey, sortDirection) {
    this.setState({ sortKey, sortDirection })
  }
  sortRows(row1, row2) {
    const { state } = this
    const [rowA, rowB] =
      state.sortDirection === Table.sorts.asc ? [row1, row2] : [row2, row1]
    return typeof rowA[state.sortKey] === 'string'
      ? rowA[state.sortKey].localeCompare(rowB[state.sortKey])
      : rowA[state.sortKey] - rowB[state.sortKey]
  }
  render() {
    const { handleSortClick, props, sortRows, state } = this
    return (
      <div className="example">
        <Theme name={props.themeName}>
          <Table>
            <Table.Row>
              {state.fields.map(field => (
                <Table.ColumnHeader
                  align={field.align}
                  key={field.key}
                  onClick={evt => handleSortClick(field.key, evt)}
                  sort={
                    state.sortKey === field.key ? state.sortDirection : true
                  }
                >
                  {field.name}
                </Table.ColumnHeader>
              ))}
            </Table.Row>
            {state.rows.sort(sortRows).map(row => (
              <Table.Row key={row.name}>
                <Table.Cell>
                  <Avatar
                    name={row.name}
                    size={Avatar.sizes.xSmall}
                    style={{ minWidth: Avatar.widths.xSmall }}
                  />
                  <div style={{ marginLeft: core.layout.spacingSmall }}>
                    {row.name}
                  </div>
                </Table.Cell>
                <Table.Cell align={Table.aligns.right}>
                  {row.courses}
                </Table.Cell>
                <Table.Cell align={Table.aligns.right}>
                  {row.viewTime}m
                </Table.Cell>
              </Table.Row>
            ))}
          </Table>
        </Theme>
        <style jsx>{`
          .example {
            padding: ${core.layout.spacingLarge};
            background: ${props.themeName === Theme.names.light
              ? core.colors.bone
              : core.colors.gray06};
          }
        `}</style>
      </div>
    )
  }
}
InAppExample.propTypes = {
  themeName: PropTypes.string
}
InAppExample.defaultProps = {
  themeName: Theme.names.dark
}

export default _ => (
  <Chrome>
    <Content title="Table">
      <PageHeading packageName="table">Table</PageHeading>
      <Intro>
        Use tables to display static data in a tabular format. If columnar
        display is not required, consider a list of{' '}
        <Link href="/components/row">Row</Link> components instead.
      </Intro>

      <P>Install the component dependency:</P>
      <Code language="bash">
        npm install @pluralsight/ps-design-system-table
      </Code>

      <P>Include a React component in your project:</P>
      <Code language="javascript">
        import Button from '@pluralsight/ps-design-system-table/react'
      </Code>

      <PropTypes
        props={{
          Table: [
            PropTypes.row([
              'children',
              PropTypes.union({ 'Table.Row': null, Drawer: null }),
              null,
              null,
              'content of table, per row'
            ]),
            PropTypes.row([
              'inDrawer',
              'boolean',
              null,
              <code>false</code>,
              'used to add additional styles when table is nested in a Drawer'
            ])
          ],
          'Table.Cell': [
            PropTypes.row([
              'align',
              PropTypes.union(Table.aligns),
              null,
              <code>left</code>,
              'text alignment'
            ]),
            PropTypes.row([
              'emphasis',
              'boolean',
              null,
              <code>false</code>,
              'highlight content priority'
            ]),
            PropTypes.row([
              'flex',
              'string',
              null,
              null,
              <span>
                <code>flex</code> css attribute to control column width
              </span>
            ])
          ],
          'Table.ColumnHeader': [
            PropTypes.row([
              'align',
              PropTypes.union(Table.aligns),
              null,
              <code>left</code>,
              'text alignment'
            ]),
            PropTypes.row([
              'flex',
              'string',
              null,
              null,
              <span>
                <code>flex</code> css attribute to control column width
              </span>
            ]),
            PropTypes.row([
              'onClick',
              <span>
                <code>sort</code>
                {' => ()'}
              </span>,
              null,
              null,
              'triggered on header click, returns new sort direction'
            ]),
            PropTypes.row([
              'sort',
              PropTypes.union(Table.sorts),
              null,
              null,
              'labels column as sortable or sorted'
            ])
          ]
        }}
      />

      <SectionHeading>In-app example</SectionHeading>
      <InAppExample />

      <SectionHeading>Emphasis</SectionHeading>
      <P>
        Place the primary column, often "Name" or "Title", leftmost in the
        table. Add emphasis to visually anchor the primary column.
      </P>
      <Example.React
        themeToggle
        includes={{ Table }}
        orient="vertical"
        codes={[
          `<Table>
  <Table.Row>
    <Table.ColumnHeader>Column</Table.ColumnHeader>
    <Table.ColumnHeader>Column</Table.ColumnHeader>
  </Table.Row>
  <Table.Row>
    <Table.Cell emphasis>Emphasized</Table.Cell>
    <Table.Cell>Cell</Table.Cell>
  </Table.Row>
  <Table.Row>
    <Table.Cell emphasis>Emphasized</Table.Cell>
    <Table.Cell>Cell</Table.Cell>
  </Table.Row>
  <Table.Row>
    <Table.Cell emphasis>Emphasized</Table.Cell>
    <Table.Cell>Cell</Table.Cell>
  </Table.Row>
</Table>`
        ]}
      />

      <SectionHeading>Sorting</SectionHeading>
      <P>
        Add sorting to your table with the <code>sort</code> prop. It will
        control which <code>ColumnHeader</code> is marked as sorted.
      </P>
      <P>
        Providing an <code>onClick</code> prop will make it become clickable.
        When clicked, the callback will receive what it expects to be the new
        sort order on that column. If your callback needs additional data, like
        a column identifier, it is up to you to prebind it.
      </P>
      <Example.React
        themeToggle
        includes={{ Table }}
        orient="vertical"
        codes={[
          `<Table>
  <Table.Row>
    <Table.ColumnHeader sort={Table.sorts.asc} onClick={sort => alert(sort)}>Column</Table.ColumnHeader>
    <Table.ColumnHeader sort>Column</Table.ColumnHeader>
  </Table.Row>
  <Table.Row>
    <Table.Cell>Broccoli</Table.Cell>
    <Table.Cell>Orange</Table.Cell>
  </Table.Row>
  <Table.Row>
    <Table.Cell>Cucumber</Table.Cell>
    <Table.Cell>Strawberry</Table.Cell>
  </Table.Row>
  <Table.Row>
    <Table.Cell>Kale</Table.Cell>
    <Table.Cell>Banana</Table.Cell>
  </Table.Row>
</Table>`
        ]}
      />

      <SectionHeading>Column alignment</SectionHeading>
      <P>
        Always left align alphabetic columns. Always right align numeric
        columns.
      </P>
      <Example.React
        themeToggle
        includes={{ Table }}
        orient="vertical"
        codes={[
          `<Table>
  <Table.Row>
    <Table.ColumnHeader align={Table.aligns.left}>Column label</Table.ColumnHeader>
    <Table.ColumnHeader align={Table.aligns.center}>Column label</Table.ColumnHeader>
    <Table.ColumnHeader align={Table.aligns.right}>Column label</Table.ColumnHeader>
  </Table.Row>
  <Table.Row>
    <Table.Cell align={Table.aligns.left}>Broccoli</Table.Cell>
    <Table.Cell align={Table.aligns.center}>Orange</Table.Cell>
    <Table.Cell align={Table.aligns.right}>1</Table.Cell>
  </Table.Row>
  <Table.Row>
    <Table.Cell align={Table.aligns.left}>Cucumber</Table.Cell>
    <Table.Cell align={Table.aligns.center}>Strawberry</Table.Cell>
    <Table.Cell align={Table.aligns.right}>123</Table.Cell>
  </Table.Row>
  <Table.Row>
    <Table.Cell align={Table.aligns.left}>Kale</Table.Cell>
    <Table.Cell align={Table.aligns.center}>Banana</Table.Cell>
    <Table.Cell align={Table.aligns.right}>123,456</Table.Cell>
  </Table.Row>
</Table>`
        ]}
      />

      <SectionHeading>Column width</SectionHeading>
      <P>
        By default, all columns are equally spaced. A single column may be
        prioritized to be grow differently by using the <code>flex</code> prop
        which is a convenience API for the{' '}
        <Link
          href="https://developer.mozilla.org/en-US/docs/Web/CSS/flex"
          target="_blank"
        >
          flex CSS attribute
        </Link>
        .
      </P>
      <Example.React
        themeToggle
        includes={{ Table }}
        orient="vertical"
        codes={[
          `<Table>
  <Table.Row>
    <Table.ColumnHeader flex="4">Column</Table.ColumnHeader>
    <Table.ColumnHeader>Column</Table.ColumnHeader>
  </Table.Row>
  <Table.Row>
    <Table.Cell flex="4">This column is prioritized to take more of the available space.</Table.Cell>
    <Table.Cell>Cell</Table.Cell>
  </Table.Row>
  <Table.Row>
    <Table.Cell flex="4">Cell</Table.Cell>
    <Table.Cell>Cell</Table.Cell>
  </Table.Row>
</Table>`
        ]}
      />

      <SectionHeading>Drawer</SectionHeading>
      <P>
        Pass the{' '}
        <Link href="/components/drawer">
          <Text.Code>Drawer</Text.Code>
        </Link>{' '}
        component as a direct child of <Text.Code>Table</Text.Code> in order to
        expose additional content or controls in your UI. Pass the row's{' '}
        <Text.Code>Table.Row</Text.Code> to the{' '}
        <Text.Code>Drawer base</Text.Code> prop.
      </P>
      <Example.React
        themeToggle
        includes={{ Drawer, PinkBox, Table }}
        orient="vertical"
        codes={[
          `<Table>
  <Table.Row>
    <Table.ColumnHeader>Column</Table.ColumnHeader>
    <Table.ColumnHeader>Column</Table.ColumnHeader>
    <Table.ColumnHeader>Column</Table.ColumnHeader>
  </Table.Row>
  <Drawer base={
    <Table.Row>
      <Table.Cell>Cell</Table.Cell>
      <Table.Cell>Cell</Table.Cell>
      <Table.Cell>Cell</Table.Cell>
    </Table.Row>
  }>
    <PinkBox>DrawerPanel</PinkBox>
  </Drawer>
  <Drawer startOpen base={
    <Table.Row>
      <Table.Cell>Cell</Table.Cell>
      <Table.Cell>Cell</Table.Cell>
      <Table.Cell>Cell</Table.Cell>
    </Table.Row>
  }>
    <PinkBox>DrawerPanel</PinkBox>
  </Drawer>
</Table>`
        ]}
      />

      <P>
        You can also nest an entire <Text.Code>Table</Text.Code> inside a{' '}
        <Link href="/components/drawer">
          <Text.Code>Drawer</Text.Code>
        </Link>
        . Mark the nested <Text.Code>Table</Text.Code> with the{' '}
        <Text.Code>isDrawer</Text.Code> prop to get the correct styling.
      </P>

      <Example.React
        themeToggle
        includes={{ Drawer, Table }}
        orient="vertical"
        codes={[
          `<Table>
  <Table.Row>
    <Table.ColumnHeader>Column</Table.ColumnHeader>
    <Table.ColumnHeader>Column</Table.ColumnHeader>
    <Table.ColumnHeader>Column</Table.ColumnHeader>
  </Table.Row>

  <Drawer startOpen base={
    <Table.Row>
      <Table.Cell>Cell</Table.Cell>
      <Table.Cell>Cell</Table.Cell>
      <Table.Cell>Cell</Table.Cell>
    </Table.Row>
  }>
    <Table inDrawer>
      <Table.Row>
        <Table.Cell>Nested Cell</Table.Cell>
        <Table.Cell>Nested Cell</Table.Cell>
        <Table.Cell>Nested Cell</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Nested Cell</Table.Cell>
        <Table.Cell>Nested Cell</Table.Cell>
        <Table.Cell>Nested Cell</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Nested Cell</Table.Cell>
        <Table.Cell>Nested Cell</Table.Cell>
        <Table.Cell>Nested Cell</Table.Cell>
      </Table.Row>
    </Table>
  </Drawer>
</Table>`
        ]}
      />
    </Content>
  </Chrome>
)
