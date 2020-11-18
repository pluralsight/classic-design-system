import React from 'react'
import { Meta } from '@storybook/react/types-6-0'

import Table from '..'

export default {
  title: 'Components/Table',
  component: Table
} as Meta

export const Basic: React.FC = () => (
  <Table>
    <Table.Head>
      <Table.Row>
        <Table.Header>1</Table.Header>
        <Table.Header>2</Table.Header>
        <Table.Header>3</Table.Header>
        <Table.Header>4</Table.Header>
        <Table.Header>5</Table.Header>
        <Table.Header>6</Table.Header>
        <Table.Header>7</Table.Header>
      </Table.Row>
    </Table.Head>

    <Table.Body>
      <Table.Row>
        <Table.Cell>1</Table.Cell>
        <Table.Cell>2</Table.Cell>
        <Table.Cell>3</Table.Cell>
        <Table.Cell>4</Table.Cell>
        <Table.Cell>5</Table.Cell>
        <Table.Cell>6</Table.Cell>
        <Table.Cell>7</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>1</Table.Cell>
        <Table.Cell>2</Table.Cell>
        <Table.Cell>3</Table.Cell>
        <Table.Cell>4</Table.Cell>
        <Table.Cell>5</Table.Cell>
        <Table.Cell>6</Table.Cell>
        <Table.Cell>7</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>1</Table.Cell>
        <Table.Cell>2</Table.Cell>
        <Table.Cell>3</Table.Cell>
        <Table.Cell>4</Table.Cell>
        <Table.Cell>5</Table.Cell>
        <Table.Cell>6</Table.Cell>
        <Table.Cell>7</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
)
