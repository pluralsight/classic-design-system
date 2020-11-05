import React from 'react'

import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'

import Drawer from '@pluralsight/ps-design-system-drawer'
import Link from '@pluralsight/ps-design-system-link'

import Table from '../index.js'

storiesOf('table', module)
  .add('empty', _ => <Table />)
  .add('custom className', _ => (
    <Table className="some-class">
      <Table.Row>
        <Table.Cell>innocuous</Table.Cell>
      </Table.Row>
    </Table>
  ))
  .add('custom style', _ => (
    <Table style={{ outline: '1px solid red' }}>
      <Table.Row>
        <Table.Cell>innocuous</Table.Cell>
      </Table.Row>
    </Table>
  ))

storiesOf('row', module)
  .add('one row, empty', _ => (
    <Table>
      <Table.Row />
    </Table>
  ))
  .add('one row, content', _ => (
    <Table>
      <Table.Row>
        <Table.Cell>Something on a row</Table.Cell>
      </Table.Row>
    </Table>
  ))
  .add('multiple rows', _ => (
    <Table>
      <Table.Row>
        <Table.Cell>Something on a row</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Something on a row</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Something on a row</Table.Cell>
      </Table.Row>
    </Table>
  ))
  .add('custom className', _ => (
    <Table>
      <Table.Row className="some-class">
        <Table.Cell>innocuous</Table.Cell>
      </Table.Row>
    </Table>
  ))
  .add('custom style', _ => (
    <Table>
      <Table.Row style={{ outline: '1px solid red' }}>
        <Table.Cell>innocuous</Table.Cell>
      </Table.Row>
    </Table>
  ))

const cellStory = storiesOf('cell', module)
  .add('empty', _ => (
    <Table>
      <Table.Row>
        <Table.Cell />
      </Table.Row>
    </Table>
  ))
  .add('text', _ => (
    <Table>
      <Table.Row>
        <Table.Cell>Cell text</Table.Cell>
      </Table.Row>
    </Table>
  ))
  .add('multiple text', _ => (
    <Table>
      <Table.Row>
        <Table.Cell>Cell 1 text</Table.Cell>
        <Table.Cell>Cell 2 text</Table.Cell>
      </Table.Row>
    </Table>
  ))
  .add('inner padding', _ => (
    <Table>
      <Table.Row>
        <Table.Cell>
          Cell 1 text Cell 1 text Cell 1 text Cell 1 text Cell 1 text Cell 1
          text Cell 1 text Cell 1 text Cell 1 text Cell 1 text Cell 1 text Cell
        </Table.Cell>
        <Table.Cell>
          Cell 2 text Cell 2 text Cell 2 text Cell 2 text Cell 2 text Cell 2
          text Cell 2 text Cell 2 text Cell 2 text Cell 2 text Cell 2 text Cell
        </Table.Cell>
      </Table.Row>
    </Table>
  ))
  .add('emphasis text', _ => (
    <Table>
      <Table.Row>
        <Table.Cell emphasis>em-PHA-sis</Table.Cell>
        <Table.Cell>Non emphasized</Table.Cell>
      </Table.Row>
    </Table>
  ))
  .add('flex 1 | 4', _ => (
    <Table>
      <Table.Row>
        <Table.Cell flex="1">
          Flex 1 Flex 1 Flex 1 Flex 1 Flex 1 Flex 1 Flex 1 Flex 1
        </Table.Cell>
        <Table.Cell flex="4">
          Flex 4 Flex 4 Flex 4 Flex 4 Flex 4 Flex 4 Flex 4 Flex 4
        </Table.Cell>
      </Table.Row>
    </Table>
  ))
  .add('flex 2 | 1', _ => (
    <Table>
      <Table.Row>
        <Table.Cell flex="2">Flex 2</Table.Cell>
        <Table.Cell flex="1">Flex 1</Table.Cell>
      </Table.Row>
    </Table>
  ))
  .add('flex, multiple cell, multiple row', _ => (
    <Table>
      <Table.Row>
        <Table.Cell flex="2">Flex 2</Table.Cell>
        <Table.Cell flex="1">Flex 1</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell flex="2">Flex 2</Table.Cell>
        <Table.Cell flex="1">Flex 1</Table.Cell>
      </Table.Row>
    </Table>
  ))
  .add('auto style anchor tag', _ => (
    <Table>
      <Table.Row>
        <Table.Cell>
          <a href="https://duckduckgo.com">Native anchor tag</a>
        </Table.Cell>
        <Table.Cell>Cell 2</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          <Link>
            <a href="https://duckduckgo.com">Link component with anchor tag</a>
          </Link>
        </Table.Cell>
        <Table.Cell>Cell 2</Table.Cell>
      </Table.Row>
    </Table>
  ))
Object.keys(Table.aligns).forEach(align => {
  cellStory.add(`align ${align}`, _ => (
    <Table>
      <Table.Row>
        <Table.Cell align={align}>Cell aligned {align}</Table.Cell>
      </Table.Row>
    </Table>
  ))
})
cellStory.add('with child anchor', _ => (
  <Table>
    <Table.Row>
      <Table.Cell>
        cell text <a href="#">inline link</a> and more text
      </Table.Cell>
    </Table.Row>
  </Table>
))
cellStory.add('custom className', _ => (
  <Table>
    <Table.Row>
      <Table.Cell className="some-classname">cell text</Table.Cell>
    </Table.Row>
  </Table>
))
cellStory.add('custom style', _ => (
  <Table>
    <Table.Row>
      <Table.Cell style={{ outline: '1px solid red' }}>cell text</Table.Cell>
    </Table.Row>
  </Table>
))

const columnHeaderStory = storiesOf('columnHeader', module)
  .add('text', _ => (
    <Table>
      <Table.Row>
        <Table.ColumnHeader>header text</Table.ColumnHeader>
      </Table.Row>
    </Table>
  ))
  .add('w/ rows', _ => (
    <Table>
      <Table.Row>
        <Table.ColumnHeader sort>header text</Table.ColumnHeader>
        <Table.ColumnHeader sort>header2 text</Table.ColumnHeader>
      </Table.Row>
      <Table.Row>
        <Table.Cell>cell text</Table.Cell>
        <Table.Cell>cell2 text</Table.Cell>
      </Table.Row>
    </Table>
  ))
  .add('w/ drawers', _ => (
    <Table>
      <Table.Row>
        <Table.ColumnHeader sort>header text</Table.ColumnHeader>
        <Table.ColumnHeader sort>header2 text</Table.ColumnHeader>
      </Table.Row>
      <Drawer
        base={
          <Table.Row>
            <Table.Cell>cell text</Table.Cell>
            <Table.Cell>cell2 text</Table.Cell>
          </Table.Row>
        }
      >
        Panel contnet
      </Drawer>
    </Table>
  ))
  .add('sort default', _ => (
    <Table>
      <Table.Row>
        <Table.ColumnHeader sort>header text</Table.ColumnHeader>
      </Table.Row>
    </Table>
  ))
Object.keys(Table.sorts).forEach(sort =>
  columnHeaderStory.add(`sort ${sort}`, _ => (
    <Table>
      <Table.Row>
        <Table.ColumnHeader sort={sort}>sorted header</Table.ColumnHeader>
      </Table.Row>
    </Table>
  ))
)
columnHeaderStory.add('sort default w/ onClick', _ => (
  <Table>
    <Table.Row>
      <Table.ColumnHeader sort onClick={action('click columnHeader 1')}>
        active header
      </Table.ColumnHeader>
      <Table.ColumnHeader sort onClick={action('click columnHeader 2')}>
        other sortable
      </Table.ColumnHeader>
    </Table.Row>
  </Table>
))
Object.keys(Table.sorts).forEach(sort =>
  columnHeaderStory.add(`sort ${sort} w/ onClick`, _ => (
    <Table>
      <Table.Row>
        <Table.ColumnHeader
          sort={sort}
          onClick={action('click columnHeader 1')}
        >
          active header
        </Table.ColumnHeader>
        <Table.ColumnHeader sort onClick={action('click columnHeader 2')}>
          other sortable
        </Table.ColumnHeader>
        <Table.ColumnHeader>no sort</Table.ColumnHeader>
      </Table.Row>
    </Table>
  ))
)
Object.keys(Table.aligns).forEach(align => {
  columnHeaderStory.add(`align ${align}`, _ => (
    <Table>
      <Table.Row>
        <Table.ColumnHeader align={align}>
          {`Header aligned ${align}`}
        </Table.ColumnHeader>
      </Table.Row>
    </Table>
  ))
})
Object.keys(Table.aligns).forEach(align => {
  columnHeaderStory.add(`align ${align} w/ sort`, _ => (
    <Table>
      <Table.Row>
        <Table.ColumnHeader sort align={align}>
          {`Header sortable, aligned ${align}`}
        </Table.ColumnHeader>
      </Table.Row>
    </Table>
  ))
})
Object.keys(Table.aligns).forEach(align => {
  columnHeaderStory.add(`long, align ${align} w/ sort`, _ => (
    <Table>
      <Table.Row>
        <Table.ColumnHeader sort align={align}>
          {` Long header sortable Long header sortable Long header sortable Long header sortable Long header sortable Long header sortable Long header sortable Long header sortable Long header sortable, aligned ${align}`}
        </Table.ColumnHeader>
        <Table.ColumnHeader sort align={align}>
          Short header, same align
        </Table.ColumnHeader>
      </Table.Row>
    </Table>
  ))
})
columnHeaderStory
  .add('custom className', _ => (
    <Table>
      <Table.Row>
        <Table.ColumnHeader className="some-classname">
          header text
        </Table.ColumnHeader>
      </Table.Row>
    </Table>
  ))
  .add('custom style', _ => (
    <Table>
      <Table.Row>
        <Table.ColumnHeader style={{ outline: '1px solid red' }}>
          column header
        </Table.ColumnHeader>
      </Table.Row>
    </Table>
  ))

storiesOf('drawer', module)
  .add('single', _ => (
    <Table>
      <Drawer
        base={
          <Table.Row>
            <Table.Cell>wow</Table.Cell>
          </Table.Row>
        }
      >
        This is panel content
      </Drawer>
    </Table>
  ))
  .add('mulitple', _ => (
    <Table>
      <Drawer
        base={
          <Table.Row>
            <Table.Cell>wow</Table.Cell>
          </Table.Row>
        }
      >
        This is panel content
      </Drawer>
      <Drawer
        base={
          <Table.Row>
            <Table.Cell>wow</Table.Cell>
          </Table.Row>
        }
      >
        This is panel content
      </Drawer>
    </Table>
  ))
  .add('w/ flex, some wrap, some not', _ => (
    <Table>
      <Drawer
        base={
          <Table.Row>
            <Table.Cell flex="2">
              flex 2 flex 2 flex 2 flex 2 flex 2 flex 2 flex 2 flex 2 flex 2
              flex 2 flex 2 flex 2 flex 2 flex 2 flex 2 flex 2 flex 2 flex 2
              flex 2 flex 2 flex 2 flex 2 flex 2 flex 2 flex 2 flex 2 flex 2
              flex 2 flex 2 flex 2 flex 2 flex 2 flex 2 flex 2 flex 2 flex 2
            </Table.Cell>
            <Table.Cell flex="1">
              flex 1 flex 1 flex 1 flex 1 flex 1 flex 1 flex 1 flex 1 flex 1
            </Table.Cell>
          </Table.Row>
        }
      >
        This is panel content
      </Drawer>
      <Drawer
        base={
          <Table.Row>
            <Table.Cell flex="2">
              flex 2 flex 2 flex 2 flex 2 flex 2 flex 2 flex 2 flex 2 flex 2
              flex 2 flex 2 flex 2 flex 2 flex 2 flex 2 flex 2 flex 2 flex 2
              flex 2 flex 2 flex 2 flex 2 flex 2 flex 2 flex 2 flex 2 flex 2
              flex 2 flex 2 flex 2 flex 2 flex 2 flex 2 flex 2 flex 2 flex 2
            </Table.Cell>
            <Table.Cell flex="1">
              flex 1 flex 1 flex 1 flex 1 flex 1 flex 1 flex 1 flex 1 flex 1
            </Table.Cell>
          </Table.Row>
        }
      >
        This is panel content
      </Drawer>
      <Drawer
        base={
          <Table.Row>
            <Table.Cell flex="2">
              flex 2 flex 2 flex 2 flex 2 flex 2 flex 2 flex 2 flex 2 flex 2
              flex 2 flex 2 flex 2 flex 2 flex 2 flex 2 flex 2 flex 2 flex 2
            </Table.Cell>
            <Table.Cell flex="1">
              flex 1 flex 1 flex 1 flex 1 flex 1 flex 1 flex 1 flex 1 flex 1
            </Table.Cell>
          </Table.Row>
        }
      >
        This is panel content
      </Drawer>
    </Table>
  ))
  .add('nested table', _ => {
    const baseRow = (
      <Table.Row>
        <Table.Cell>Parent Cell</Table.Cell>
        <Table.Cell>Parent Cell</Table.Cell>
        <Table.Cell>Parent Cell</Table.Cell>
      </Table.Row>
    )

    return (
      <Table>
        <Drawer base={baseRow} startOpen>
          <Table inDrawer>
            <Table.Row>
              <Table.Cell>Child Cell</Table.Cell>
              <Table.Cell>Child Cell</Table.Cell>
              <Table.Cell>Child Cell</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Child Cell</Table.Cell>
              <Table.Cell>Child Cell</Table.Cell>
              <Table.Cell>Child Cell</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Child Cell</Table.Cell>
              <Table.Cell>Child Cell</Table.Cell>
              <Table.Cell>Child Cell</Table.Cell>
            </Table.Row>
          </Table>
        </Drawer>
      </Table>
    )
  })
