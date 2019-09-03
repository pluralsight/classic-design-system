import core from '@pluralsight/ps-design-system-core'
import React from 'react'
import Table from '@pluralsight/ps-design-system-table/react.js'
import * as Text from '@pluralsight/ps-design-system-text/react.js'

import { Chrome, Content, Doc, PageHeading } from '../src/ui/index.js'

export default _ => (
  <Chrome>
    <Content title="Design assets">
      <PageHeading>Design assets</PageHeading>

      <Doc>
        {`
## Team libraries

Design components, color styles, and text styles are available in [Figma](http://figma.com). Pluralsight team members should find Design System Core and Web libraries enabled by default in all drafts.

`}
      </Doc>

      <Table style={{ marginTop: core.layout.spacingLarge }}>
        <Table.Row>
          <Table.ColumnHeader>Library</Table.ColumnHeader>
          <Table.ColumnHeader>Contents</Table.ColumnHeader>
        </Table.Row>

        <Table.Row>
          <Table.Cell>
            <Text.Code>
              <a
                href="https://www.figma.com/file/HVFUT0XlrkfsTMde6PMWLITj/PSDS-Core"
                style={{ textDecoration: 'underline' }}
              >
                PSDS - Core
              </a>
            </Text.Code>
          </Table.Cell>
          <Table.Cell>Colors, Icons, Grids</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Text.Code>
              <a
                href="https://www.figma.com/file/YsTklBecdddy9RZ3HXddIseD/PSDS-Web"
                style={{ textDecoration: 'underline' }}
              >
                PSDS - Web
              </a>
            </Text.Code>
          </Table.Cell>
          <Table.Cell>UI Kit, Web Components, Text Styles</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Text.Code>
              <a
                href="https://www.figma.com/file/K575lLx48kMoPQGDlbdiWXv7/%E2%97%86-PSDS-Imagery"
                style={{ textDecoration: 'underline' }}
              >
                PSDS - Imagery
              </a>
            </Text.Code>
          </Table.Cell>
          <Table.Cell>
            Sample course art, Skills logos, Role badges, Headshots
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Text.Code>
              <a
                href="https://www.figma.com/file/U7JwbMLo37WPhu3StSq86Kyt/%E2%97%86-PSDS-Extras"
                style={{ textDecoration: 'underline' }}
              >
                PSDS - Extras
              </a>
            </Text.Code>
          </Table.Cell>
          <Table.Cell>Device frames, Keyboards</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Text.Code>
              <a
                href="https://www.figma.com/file/DYZV1wR89TxDo63lEngOLvwm/%E2%97%86-PSDS-Brand"
                style={{ textDecoration: 'underline' }}
              >
                PSDS - Brand
              </a>
            </Text.Code>
          </Table.Cell>
          <Table.Cell>Pluralsight Logos</Table.Cell>
        </Table.Row>
      </Table>
    </Content>
  </Chrome>
)
