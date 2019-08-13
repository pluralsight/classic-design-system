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

[How to use team libraries?](https://help.figma.com/article/29-team-library)

[How to use color and text styles?](https://help.figma.com/article/188-styles-applying-styles)
`}
      </Doc>

      <Table style={{ marginTop: core.layout.spacingLarge }}>
        <Table.Row>
          <Table.ColumnHeader>Library</Table.ColumnHeader>
          <Table.ColumnHeader>Contents</Table.ColumnHeader>
        </Table.Row>

        <Table.Row>
          <Table.Cell>
            <Text.Code>PSDS - Core</Text.Code>
          </Table.Cell>
          <Table.Cell>Color Styles, Icons</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Text.Code>PSDS - Web</Text.Code>
          </Table.Cell>
          <Table.Cell>UI Kit, Web Components, Text Styles</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Text.Code>PSDS - Imagery</Text.Code>
          </Table.Cell>
          <Table.Cell>
            Sample course art, Skills logos, Role badges, Headshots
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Text.Code>PSDS - Extras</Text.Code>
          </Table.Cell>
          <Table.Cell>Device frames, Keyboards</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Text.Code>PSDS - Brand</Text.Code>
          </Table.Cell>
          <Table.Cell>Pluralsight Logos</Table.Cell>
        </Table.Row>
      </Table>

      <Doc>
        {`
## UI Kit

A UI kit is found on the [first page of \`PSDS - Web\`](https://www.figma.com/file/YsTklBecdddy9RZ3HXddIseD/PSDS-Web). It is built on top of team libraries, and can be used as a visual tool kit from which to copy.

![UI Kit](https://github.com/pluralsight/design-system-assets/raw/master/readme-images/ui-kit.png)
`}
      </Doc>

      <Doc>
        {`
## Sketch assets

Sketch libraries are available [here](https://github.com/pluralsight/design-system-assets), but are getting less support at this time.
`}
      </Doc>
    </Content>
  </Chrome>
)
