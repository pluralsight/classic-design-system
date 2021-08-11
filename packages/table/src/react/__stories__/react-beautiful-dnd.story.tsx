import { colorsTextIcon } from '@pluralsight/ps-design-system-core'
import {
  PageHeadingLayout,
  PageWidthLayout
} from '@pluralsight/ps-design-system-layout'
import * as Text from '@pluralsight/ps-design-system-text'
import { useTheme } from '@pluralsight/ps-design-system-theme'
import {
  DragDropContext,
  DraggableProvided,
  DraggableStateSnapshot,
  DropResult,
  Droppable,
  DroppableProvided,
  Draggable
} from 'react-beautiful-dnd'

import { Meta, Story } from '@storybook/react/types-6-0'
import React from 'react'

import Table from '../index'
import { generateUser } from './seed'

export default {
  title: 'Components/Table/react-beautiful-dnd',
  component: Table,
  decorators: [
    Story => (
      <PageWidthLayout>
        <PageHeadingLayout
          heading={
            <Text.Heading size="large">
              <h1>Page title</h1>
            </Text.Heading>
          }
        >
          <Story />
        </PageHeadingLayout>
      </PageWidthLayout>
    )
  ],
  parameters: { center: { disabled: true }, storyshots: { disable: true } }
} as Meta

export const Basic: Story = () => {
  const [data, setData] = React.useState(() =>
    new Array(50).fill(null).map(() => generateUser())
  )

  const handleBeforeDragStart = () => {}
  const handleDragEnd = (result: DropResult) => {
    const { destination, source } = result

    if (!destination) return
    if (destination.index === source.index) return

    const nextData = reorder(data, source.index, destination.index)
    setData(nextData)
  }

  const Container = React.forwardRef<HTMLDivElement>((p, containerRef) => (
    <div {...p} ref={containerRef} style={{ maxHeight: 500 }} />
  ))

  return (
    <DragDropContext
      onBeforeDragStart={handleBeforeDragStart}
      onDragEnd={handleDragEnd}
    >
      <Table renderContainer={Container} scrollable>
        <Table.Head>
          <Table.Row>
            <Table.Header role="columnheader" scope="col" />
            <Table.Header role="columnheader" scope="col">
              First name
            </Table.Header>
            <Table.Header role="columnheader" scope="col">
              Last name
            </Table.Header>
            <Table.Header role="columnheader" scope="col">
              Email
            </Table.Header>
          </Table.Row>
        </Table.Head>

        <Droppable droppableId="droppable-body">
          {({ droppableProps, placeholder, innerRef }: DroppableProvided) => (
            <Table.Body
              ref={ref => {
                innerRef(ref)
              }}
              {...droppableProps}
            >
              {data.map((user, i) => (
                <Draggable
                  draggableId={user.handle}
                  key={user.handle}
                  index={i}
                >
                  {(
                    provided: DraggableProvided,
                    snapshot: DraggableStateSnapshot
                  ) => (
                    <DraggableRow
                      key={i}
                      ref={provided.innerRef}
                      provided={provided}
                      snapshot={snapshot}
                    >
                      <Table.Header role="rowheader" scope="row">
                        {user.firstName}
                      </Table.Header>
                      <Table.Cell>{user.lastName}</Table.Cell>
                      <Table.Cell>{user.email}</Table.Cell>
                    </DraggableRow>
                  )}
                </Draggable>
              ))}

              {placeholder}
            </Table.Body>
          )}
        </Droppable>
      </Table>
    </DragDropContext>
  )
}

const Handle: React.FC = props => {
  const dark = useTheme() === 'dark'

  return (
    <div
      {...props}
      style={{
        backgroundColor: dark
          ? colorsTextIcon.lowOnDark
          : colorsTextIcon.lowOnLight,
        cursor: 'grab',
        display: 'inline-block',
        height: '16px',
        width: '10px',
        position: 'relative'
      }}
    />
  )
}

interface DraggableRowProps extends React.ComponentProps<typeof Table.Row> {
  provided: DraggableProvided
  snapshot: DraggableStateSnapshot
}
const DraggableRow = React.forwardRef<HTMLTableRowElement, DraggableRowProps>(
  (props, ref) => {
    const { children, provided, snapshot, ...rest } = props

    return (
      <Table.Row ref={ref} {...provided.draggableProps} {...rest}>
        <Table.Cell>
          <Handle {...provided.dragHandleProps} />
        </Table.Cell>
        {children}
      </Table.Row>
    )
  }
)

const reorder = (
  list: unknown[],
  startIndex: number,
  endIndex: number
): any[] => {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)

  return result
}
