import React, { useState } from 'react'

import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'

import Drawer from '@pluralsight/ps-design-system-drawer'
import Link from '@pluralsight/ps-design-system-link'

import Table from '..'

storiesOf('table', module)
  .add('empty', () => <Table />)
  .add('custom className', () => (
    <Table className="some-class">
      <Table.Row>
        <Table.Cell>innocuous</Table.Cell>
      </Table.Row>
    </Table>
  ))
  .add('custom style', () => (
    <Table style={{ outline: '1px solid red' }}>
      <Table.Row>
        <Table.Cell>innocuous</Table.Cell>
      </Table.Row>
    </Table>
  ))

storiesOf('row', module)
  .add('one row, empty', () => (
    <Table>
      <Table.Row />
    </Table>
  ))
  .add('one row, content', () => (
    <Table>
      <Table.Row>
        <Table.Cell>Something on a row</Table.Cell>
      </Table.Row>
    </Table>
  ))
  .add('multiple rows', () => (
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
  .add('custom className', () => (
    <Table>
      <Table.Row className="some-class">
        <Table.Cell>innocuous</Table.Cell>
      </Table.Row>
    </Table>
  ))
  .add('custom style', () => (
    <Table>
      <Table.Row style={{ outline: '1px solid red' }}>
        <Table.Cell>innocuous</Table.Cell>
      </Table.Row>
    </Table>
  ))

const cellStory = storiesOf('cell', module)
  .add('empty', () => (
    <Table>
      <Table.Row>
        <Table.Cell />
      </Table.Row>
    </Table>
  ))
  .add('text', () => (
    <Table>
      <Table.Row>
        <Table.Cell>Cell text</Table.Cell>
      </Table.Row>
    </Table>
  ))
  .add('multiple text', () => (
    <Table>
      <Table.Row>
        <Table.Cell>Cell 1 text</Table.Cell>
        <Table.Cell>Cell 2 text</Table.Cell>
      </Table.Row>
    </Table>
  ))
  .add('inner padding', () => (
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
  .add('emphasis text', () => (
    <Table>
      <Table.Row>
        <Table.Cell emphasis>em-PHA-sis</Table.Cell>
        <Table.Cell>Non emphasized</Table.Cell>
      </Table.Row>
    </Table>
  ))
  .add('flex 1 | 4', () => (
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
  .add('flex 2 | 1', () => (
    <Table>
      <Table.Row>
        <Table.Cell flex="2">Flex 2</Table.Cell>
        <Table.Cell flex="1">Flex 1</Table.Cell>
      </Table.Row>
    </Table>
  ))
  .add('flex, multiple cell, multiple row', () => (
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
  .add('auto style anchor tag', () => (
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
Object.values(Table.aligns).forEach(align => {
  cellStory.add(`align ${align}`, () => (
    <Table>
      <Table.Row>
        <Table.Cell align={align}>Cell aligned {align}</Table.Cell>
      </Table.Row>
    </Table>
  ))
})
cellStory.add('with child anchor', () => (
  <Table>
    <Table.Row>
      <Table.Cell>
        cell text <a href="#">inline link</a> and more text
      </Table.Cell>
    </Table.Row>
  </Table>
))
cellStory.add('custom className', () => (
  <Table>
    <Table.Row>
      <Table.Cell className="some-classname">cell text</Table.Cell>
    </Table.Row>
  </Table>
))
cellStory.add('custom style', () => (
  <Table>
    <Table.Row>
      <Table.Cell style={{ outline: '1px solid red' }}>cell text</Table.Cell>
    </Table.Row>
  </Table>
))

const columnHeaderStory = storiesOf('columnHeader', module)
  .add('text', () => (
    <Table>
      <Table.Row>
        <Table.ColumnHeader>header text</Table.ColumnHeader>
      </Table.Row>
    </Table>
  ))
  .add('w/ rows', () => (
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
  .add('w/ drawers', () => (
    <Table>
      <Table.Row>
        <Table.ColumnHeader sort>header text</Table.ColumnHeader>
        <Table.ColumnHeader sort>header2 text</Table.ColumnHeader>
      </Table.Row>
      <Drawer>
        <Drawer.Summary>
          <Table.Row>
            <Table.Cell>cell text</Table.Cell>
            <Table.Cell>cell2 text</Table.Cell>
          </Table.Row>
        </Drawer.Summary>
        <Drawer.Details>Details content</Drawer.Details>
      </Drawer>
    </Table>
  ))
  .add('sort default', () => (
    <Table>
      <Table.Row>
        <Table.ColumnHeader sort>header text</Table.ColumnHeader>
      </Table.Row>
    </Table>
  ))
Object.values(Table.sorts).forEach(sort =>
  columnHeaderStory.add(`sort ${sort}`, () => (
    <Table>
      <Table.Row>
        <Table.ColumnHeader sort={sort}>sorted header</Table.ColumnHeader>
      </Table.Row>
    </Table>
  ))
)
columnHeaderStory.add('sort default w/ onClick', () => (
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
Object.values(Table.sorts).forEach(sort =>
  columnHeaderStory.add(`sort ${sort} w/ onClick`, () => (
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
Object.values(Table.aligns).forEach(align => {
  columnHeaderStory.add(`align ${align}`, () => (
    <Table>
      <Table.Row>
        <Table.ColumnHeader align={align}>
          {`Header aligned ${align}`}
        </Table.ColumnHeader>
      </Table.Row>
    </Table>
  ))
})
Object.values(Table.aligns).forEach(align => {
  columnHeaderStory.add(`align ${align} w/ sort`, () => (
    <Table>
      <Table.Row>
        <Table.ColumnHeader sort align={align}>
          {`Header sortable, aligned ${align}`}
        </Table.ColumnHeader>
      </Table.Row>
    </Table>
  ))
})
Object.values(Table.aligns).forEach(align => {
  columnHeaderStory.add(`long, align ${align} w/ sort`, () => (
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
  .add('custom className', () => (
    <Table>
      <Table.Row>
        <Table.ColumnHeader className="some-classname">
          header text
        </Table.ColumnHeader>
      </Table.Row>
    </Table>
  ))
  .add('custom style', () => (
    <Table>
      <Table.Row>
        <Table.ColumnHeader style={{ outline: '1px solid red' }}>
          column header
        </Table.ColumnHeader>
      </Table.Row>
    </Table>
  ))

storiesOf('drawer', module)
  .add('single', () => (
    <Table>
      <Drawer>
        <Drawer.Summary>
          <Table.Row>
            <Table.Cell>wow</Table.Cell>
          </Table.Row>
        </Drawer.Summary>
        <Drawer.Details>This is details content</Drawer.Details>
      </Drawer>
    </Table>
  ))
  .add('mulitple', () => (
    <Table>
      <Drawer>
        <Drawer.Summary>
          <Table.Row>
            <Table.Cell>wow</Table.Cell>
          </Table.Row>
        </Drawer.Summary>
        <Drawer.Details>This is details content</Drawer.Details>
      </Drawer>
      <Drawer>
        <Drawer.Summary>
          <Table.Row>
            <Table.Cell>wow</Table.Cell>
          </Table.Row>
        </Drawer.Summary>
        <Drawer.Details>This is details content</Drawer.Details>
      </Drawer>
    </Table>
  ))
  .add('w/ flex, some wrap, some not', () => (
    <Table>
      <Drawer>
        <Drawer.Summary>
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
        </Drawer.Summary>
        <Drawer.Details>This is details content</Drawer.Details>
      </Drawer>
      <Drawer>
        <Drawer.Summary>
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
        </Drawer.Summary>
        <Drawer.Details>This is details content</Drawer.Details>
      </Drawer>
      <Drawer>
        <Drawer.Summary>
          <Table.Row>
            <Table.Cell flex="2">
              flex 2 flex 2 flex 2 flex 2 flex 2 flex 2 flex 2 flex 2 flex 2
              flex 2 flex 2 flex 2 flex 2 flex 2 flex 2 flex 2 flex 2 flex 2
            </Table.Cell>
            <Table.Cell flex="1">
              flex 1 flex 1 flex 1 flex 1 flex 1 flex 1 flex 1 flex 1 flex 1
            </Table.Cell>
          </Table.Row>
        </Drawer.Summary>
        <Drawer.Details>This is details content</Drawer.Details>
      </Drawer>
    </Table>
  ))
  .add('nested table', () => {
    const BaseRow = () => (
      <Table.Row>
        <Table.Cell>Parent Cell</Table.Cell>
        <Table.Cell>Parent Cell</Table.Cell>
        <Table.Cell>Parent Cell</Table.Cell>
      </Table.Row>
    )
    const useStartOpen = () => {
      const [isOpen, setOpen] = useState(true)
      const onToggle = () => {
        /** custom logic **/
        setOpen(!isOpen)
      }
      return { isOpen, onToggle }
    }
    return (
      <Table>
        <Drawer {...useStartOpen()}>
          <Drawer.Summary>
            <BaseRow />
          </Drawer.Summary>
          <Drawer.Details>
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
          </Drawer.Details>
        </Drawer>
      </Table>
    )
  })
