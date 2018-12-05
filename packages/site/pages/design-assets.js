import core from '@pluralsight/ps-design-system-core'
import React from 'react'
import Table from '@pluralsight/ps-design-system-table/react'
import * as Text from '@pluralsight/ps-design-system-text/react'

import { Chrome, Content, Doc, PageHeading, withServerProps } from '../src/ui'

export default withServerProps(_ => (
  <Chrome>
    <Content title="Install">
      <PageHeading>Design assets</PageHeading>
      <Doc>{`
## Sketch libraries

[What are Libraries?](https://sketchapp.com/docs/libraries/)

1. Open Preferences in Sketch.
1. Select **Libraries** tab.
1. Click **Add Library…**
1. Make sure you have **Google Drive** set up and the **Design** folder synced to your local drive.
1. Navigate to **Product > Design > PS Design System - Libraries >**
1. Select any applicable libraries to install.
`}</Doc>
      <Table style={{ marginTop: core.layout.spacingLarge }}>
        <Table.Row>
          <Table.ColumnHeader>Library</Table.ColumnHeader>
          <Table.ColumnHeader>Contents</Table.ColumnHeader>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Text.Code>PSDS - Core.sketch</Text.Code>
          </Table.Cell>
          <Table.Cell>Color swatches for overrides, UI icons</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Text.Code>PSDS - Web.sketch</Text.Code>
          </Table.Cell>
          <Table.Cell>Components for web (imports Core)</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Text.Code>PSDS - Android.sketch</Text.Code>
          </Table.Cell>
          <Table.Cell>Components for Android (imports Core)</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Text.Code>PSDS - iOS.sketch</Text.Code>
          </Table.Cell>
          <Table.Cell>Components for iOS (imports Core)</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Text.Code>PSDS - Extras.sketch</Text.Code>
          </Table.Cell>
          <Table.Cell>Pluralsight logos, Avatars / personas</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Text.Code>PSDS - Content Imagery.sketch</Text.Code>
          </Table.Cell>
          <Table.Cell>Content imagery, Topic logos</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Text.Code>PSDS - Core.sketch</Text.Code>
          </Table.Cell>
          <Table.Cell>Color swatches for overrides, UI icons</Table.Cell>
        </Table.Row>
      </Table>

      <Doc>{`
## Sketch UI kit

**Product > Design > PS Design System - UI Kit.sketch**

\`PS Design System - UI Kit.sketch\` is a collection of shared symbols and pattern composites. It builds on the PSDS libraries and can be used as a visual tool kit from which to copy. Sync the latest version from Google Drive.

![Sketch UI Kit](https://github.com/pluralsight/design-system-assets/raw/master/readme-images/ui-kit.png)

## Sketch color palettes

To use the design system color palettes, install the [Shared Sketch Palettes](https://github.com/andrewfiorillo/sketch-palettes) plugin.

Download the [Pluralsight Sketch palette](https://pluralsight.github.io/design-system-assets/Sketch/color-palettes/PS%20Design%20System%20-%20Colors.sketchpalette)

1. After you've installed the plugin, go to **Plugins > Sketch Palettes > Clear Palette**
1. Select global/document presets.
1. Select **Plugins > Sketch Palettes > Load Palette**
1. Select \`PS Design System - Colors.sketchpalette\` file.
1. In the source dropdown, select **Global**
1. Click **Load**
1. Pluralsight UI colors should now appear in your Sketch color picker.

![Color palette](https://github.com/pluralsight/design-system-assets/raw/master/readme-images/palette.png)

![Color palette](https://github.com/pluralsight/design-system-assets/raw/master/readme-images/palette-gradient.png)

## Fonts

Install any necessary fonts when using design asset files. Font files may be found here:

**Product > Design > _Resources > Fonts**

View available typographic styles [here](https://design-system.pluralsight.com/core/typography/)

`}</Doc>

      <Table style={{ marginTop: core.layout.spacingLarge }}>
        <Table.Row>
          <Table.ColumnHeader>Font</Table.ColumnHeader>
          <Table.ColumnHeader>Info</Table.ColumnHeader>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Text.Code>Gotham SSm</Text.Code>
          </Table.Cell>
          <Table.Cell>
            Use for all web products. Download from Google Drive{' '}
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Text.Code>Source Code Pro</Text.Code>
          </Table.Cell>
          <Table.Cell>Use for code / monospace elements. </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Text.Code>San Francisco</Text.Code>
          </Table.Cell>
          <Table.Cell>Use for iOS native apps </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Text.Code>Roboto</Text.Code>
          </Table.Cell>
          <Table.Cell>Use for Android native apps </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Text.Code>Segoe UI</Text.Code>
          </Table.Cell>
          <Table.Cell>Use for Windows native apps </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Text.Code>Gotham</Text.Code>
          </Table.Cell>
          <Table.Cell>
            Print / marketing only. **Not for use in web products**{' '}
          </Table.Cell>
        </Table.Row>
      </Table>

      <Doc>{`
## Version control and contribution

Changes to design assets are visible through the [commit log](https://github.com/pluralsight/design-system-assets/commits/master).

This [design-system-assets repo](https://github.com/pluralsight/design-system-assets) serves as a master collection and source of truth. However, everyday consumption is delivered via Google Drive. Google Drive edit permissions are restricted to control version tracking, and the contents of the master repository are copied nightly to ensure Google Drive contains current versions.

Contribution is tentatively managed via pull requests directly into [this repository](https://github.com/pluralsight/design-system-assets). This allows tracking of design proposals and changes from anyone. This workflow is under review and additional tooling may be introduced to better handle visual difference.

![Version control](https://github.com/pluralsight/design-system-assets/raw/master/readme-images/version-control.png)
`}</Doc>
    </Content>
  </Chrome>
))
