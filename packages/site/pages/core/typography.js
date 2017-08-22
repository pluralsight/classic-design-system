import core from '@pluralsight/ps-design-system-core'
import { Chrome, Code, Content, Heading, P } from '../../src/ui'

const FontFamily = props =>
  <div>
    <div className="family">
      <div>
        ABCDEFGHIJKLMNOPQRSTUVWXYZ
      </div>
      <div>
        abcdefghijklmnopqrstuvwxyz
      </div>
      <div>
        0123456789
      </div>
    </div>
    <P>
      Apply the font family to the entire page. The recommended method is to
      include the normalize stylesheet. First install:
    </P>
    <Code language="bash">{`npm install @pluralsight/ps-design-system-normalize`}</Code>
    <P>Then include it in your global stylesheet:</P>
    <Code language="css">{`@import "@pluralsight/ps-design-system-normalize";`}</Code>
    <style jsx>{`
      .family {
        background: ${core.colors.bone};
        padding: ${core.layout.spacingLarge};
        color: ${core.colors.gray06};
        font-size: ${core.type.fontSizeLarge};
        line-height: ${core.type.lineHeightExtra};
        letter-spacing: ${core.layout.spacingSmall};
        border-radius: 12px;
      }
    `}</style>
  </div>

const weights = [
  { label: 'BOLD', weight: 700, varName: 'psTypeFontWeightBold' },
  { label: 'MEDIUM', weight: 500, varName: 'psTypeFontWeightMedium' },
  { label: 'BOOK', weight: 400, varName: 'psTypeFontWeightBook' },
  { label: 'LIGHT', weight: 300, varName: 'psTypeFontWeightLight' },
  { label: 'EXTRA LIGHT', weight: 200, varName: 'psTypeFontWeightXLight' }
]

const FontWeight = props =>
  <div>
    <div className="weights">
      {weights.map((w, i) =>
        <div className="weight" key={i}>
          <div style={{ fontWeight: w.weight }} className="weightLetters">
            Aa
          </div>
          <div className="weightLabel">
            {w.label} ({w.weight})
          </div>
        </div>
      )}
    </div>
    <Code language="css">{`@import "@pluralsight/ps-design-system-core";
.mySelector { font-weight: var(--psTypeFontWeightBold); }`}</Code>
    <style jsx>{`
      .weights {
        display: flex;
        flex-wrap: wrap;
        margin: calc(-1 * ${core.layout.spacingLarge} / 2)
          calc(-1 * ${core.layout.spacingLarge} / 2) calc(${core.layout
      .spacingLarge} / 2);
      }
      .weight {
        flex: 1;
        height: 150px;
        min-width: 150px;
        margin: calc(${core.layout.spacingLarge} / 2);
        background: ${core.colors.bone};
        color: ${core.colors.gray06};
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 12px;
      }
      .weightLetters {
        font-size: ${core.type.fontSizeGigantic};
        letter-spacing: ${core.type.letterSpacingGigantic};
      }
      .weightLabel {
        color: ${core.colors.gray03};
        font-size: ${core.type.fontSizeXSmall};
      }
    `}</style>
  </div>

// TODO: pull from core js vars
const sizes = [
  { label: 'Gigantic', size: '60px', varName: 'psTypeFontSizeGigantic' },
  { label: 'XXX-Large', size: '48px', varName: 'psTypefontSizeXXXLarge' },
  { label: 'XX-Large', size: '36px', varName: 'psTypeFontSizeXXLarge' },
  { label: 'X-Large', size: '30px', varName: 'psTypeFontSizeXLarge' },
  { label: 'Large', size: '24px', varName: 'psTypeFontSizeLarge' },
  { label: 'Medium', size: '18px', varName: 'psTypeFontSizeMedium' },
  { label: 'Small', size: '14px', varName: 'psTypeFontSizeSmall' },
  { label: 'X-Small', size: '12px', varName: 'psTypeFontSizeXSmall' }
]

const FontSize = props =>
  <div>
    <div className="sizes">
      {sizes.map((w, i) =>
        <div className="size" key={i}>
          <div style={{ fontSize: w.size }} className="sizeSentence">
            The quick brown fox jumps over the lazy dog.
          </div>
          <div className="sizeLabel">
            {w.size} - {w.label}
          </div>
        </div>
      )}
    </div>
    <Code language="css">{`@import "@pluralsight/ps-design-system-core";
.mySelector { font-size: var(--psTypeFontSizeLarge); }`}</Code>
    <style jsx>{`
      .sizes {
        background: ${core.colors.bone};
        border-radius: 12px;
        white-space: nowrap;
        overflow: hidden;
        padding: ${core.layout.spacingLarge};
        margin-bottom: ${core.layout.spacingMedium}
      }
      .size {
        color: ${core.colors.gray06};
      }
      .size + .size {
        margin-top: ${core.layout.spacingLarge};
      }
      .sizeSentence {
        color: ${core.colors.gray06};
        margin-bottom: ${core.layout.spacingXSmall};
      }
      .sizeLabel {
        color: ${core.colors.gray03};
        font-size: ${core.type.fontSizeXSmall};
      }
    `}</style>
  </div>

export default _ =>
  <Chrome>
    <Content title="Typography">
      <Heading size="xxLarge"><h1>Typography</h1></Heading>

      <Heading size="large"><h2>Install the Font</h2></Heading>
      <P>
        To use the Pluralsight font-family on your site, you must install it by
        importing it from typography.com using Pluralsight's
        assigned CSS Key.
      </P>
      <Code lang="css">
        @import url(https://cloud.typography.com/6966154/691568/css/fonts.css);
      </Code>

      <Heading size="large"><h2>Font family</h2></Heading>
      <P>
        Pluralsight's font family for the web is Gotham SSm.
      </P>
      <FontFamily />

      <Heading size="large"><h2>Font weight</h2></Heading>
      <P>
        Five Gotham SSm font weights are available for use.
      </P>
      <FontWeight />

      <Heading size="large"><h2>Font size</h2></Heading>
      <P>
        Eight Gotham SSm font sizes are available.
      </P>
      <FontSize />
    </Content>
  </Chrome>
