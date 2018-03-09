import core from '@pluralsight/ps-design-system-core'
import { Code as DSCode } from '@pluralsight/ps-design-system-text/react'

import {
  Chrome,
  Code,
  Content,
  Link,
  P,
  PageHeading,
  SectionHeading,
  withServerProps
} from '../../src/ui'

const FontFamily = props => (
  <div>
    <div className="family">
      <div>ABCDEFGHIJKLMNOPQRSTUVWXYZ</div>
      <div>abcdefghijklmnopqrstuvwxyz</div>
      <div>0123456789</div>
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
)

const weights = [
  { label: 'BOLD', weight: 700, varName: 'psTypeFontWeightBold' },
  { label: 'MEDIUM', weight: 500, varName: '…ypeFontWeightMedium' },
  { label: 'BOOK', weight: 400, varName: 'psTypeFontWeightBook' },
  { label: 'LIGHT', weight: 300, varName: 'psTypeFontWeightLight' },
  { label: 'EXTRA LIGHT', weight: 200, varName: '…ypeFontWeightXLight' }
]

const FontWeight = props => (
  <div>
    <div className="weights">
      {weights.map((w, i) => (
        <div className="weight" key={i}>
          <div className="box">
            <div style={{ fontWeight: w.weight }} className="weightLetters">
              Aa
            </div>
            <div className="weightLabel">
              {w.label} ({w.weight})
            </div>
          </div>
          <code className="weightVar">{w.varName}</code>
        </div>
      ))}
    </div>
    <div className="codeExample">
      <Code language="css">{`@import "@pluralsight/ps-design-system-core";
.mySelector { font-weight: var(--psTypeFontWeightBold); }`}</Code>
    </div>
    <style jsx>{`
      .weights {
        display: flex;
        flex-wrap: wrap;
        margin: calc(${core.layout.spacingLarge} / -2);
      }
      .weight {
        flex: 1;
        margin: calc(${core.layout.spacingLarge} / 2);
        color: ${core.colors.gray06};
        text-align: center;
      }
      .box {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 12px;
        background: ${core.colors.bone};
        height: 150px;
        min-width: 150px;
      }
      .weightLetters {
        font-size: ${core.type.fontSizeGigantic};
        letter-spacing: ${core.type.letterSpacingGigantic};
      }
      .weightLabel {
        color: ${core.colors.gray03};
        font-size: ${core.type.fontSizeXSmall};
      }
      .weightVar {
        margin-top: ${core.layout.spacingSmall};
        font-size: ${core.type.fontSizeXSmall};
        color: ${core.colors.pink};
      }
      .codeExample {
        margin-top: ${core.layout.spacingLarge};
      }
    `}</style>
  </div>
)

// TODO: pull from core js vars
const sizes = [
  { label: 'Gigantic', size: '60px', varName: 'psTypeFontSizeGigantic' },
  { label: 'Jumbo', size: '48px', varName: 'psTypefontSizeJumbo' },
  { label: 'XX-Large', size: '36px', varName: 'psTypeFontSizeXXLarge' },
  { label: 'X-Large', size: '30px', varName: 'psTypeFontSizeXLarge' },
  { label: 'Large', size: '24px', varName: 'psTypeFontSizeLarge' },
  { label: 'Medium', size: '18px', varName: 'psTypeFontSizeMedium' },
  { label: 'Small', size: '14px', varName: 'psTypeFontSizeSmall' },
  { label: 'X-Small', size: '12px', varName: 'psTypeFontSizeXSmall' }
]

const FontSize = props => (
  <div>
    <div className="sizes">
      {sizes.map((w, i) => (
        <div className="size" key={i}>
          <div style={{ fontSize: w.size }} className="sizeSentence">
            The quick brown fox jumps over the lazy dog.
          </div>
          <div className="sizeLabel">
            {w.size} - {w.label}
          </div>
          <code className="sizeVar">{w.varName}</code>
        </div>
      ))}
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
        margin-bottom: ${core.layout.spacingMedium};
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
      .sizeVar {
        margin-top: ${core.layout.spacingSmall};
        font-size: ${core.type.fontSizeXSmall};
        color: ${core.colors.pink};
      }
    `}</style>
  </div>
)

const LineHeight = _ => (
  <div>
    <div className="lineHeights">
      <div className="lineHeight">
        <div className="text textHuge">
          <div className="textBg textBgHuge" />
          <div className="textInner">
            Lorem ipsum dolor sit amet, consectetur
          </div>
        </div>
        <div className="label">40px - Huge</div>
        <code className="varName">psTypeLineHeightHuge</code>
      </div>
      <div className="lineHeight">
        <div className="text textExtra">
          <div className="textBg textBgExtra" />
          <div className="textInner">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
          </div>
        </div>
        <div className="label">32px - Extra</div>
        <code className="varName">psTypeLineHeightExtra</code>
      </div>
      <div className="lineHeight">
        <div className="text textStandard">
          <div className="textBg textBgStandard" />
          <div className="textInner">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore
          </div>
        </div>
        <div className="label">24px - Standard</div>
        <code className="varName">psTypeLineHeightStandard</code>
      </div>
      <div className="lineHeight">
        <div className="text textTight">
          <div className="textBg textBgTight" />
          <div className="textInner">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis
          </div>
        </div>
        <div className="label">20px - Tight</div>
        <code className="varName">psTypeLineHeightTight</code>
      </div>
    </div>
    <style jsx>{`
      .lineHeights {
        display: flex;
        flex-wrap: wrap;
        margin: calc(${core.layout.spacingLarge} / -2);
      }
      .lineHeight {
        width: calc(50% - ${core.layout.spacingLarge});
        margin: calc(${core.layout.spacingLarge} / 2);
        border-radius: 12px;
        padding: ${core.layout.spacingLarge};
        background: ${core.colors.bone};
      }
      .text {
        position: relative;
        overflow: hidden;
      }
      .textInner {
        position: relative;
      }
      .textBg {
        position: absolute;
        height: 300px;
        width: 100%;
        background: linear-gradient(
          to bottom,
          #b4d9f2,
          #b4d9f2 1px,
          #efefef 1px,
          #efefef
        );
        background-size: 1px 8px;
      }
      .textHuge {
        font-size: ${core.type.fontSizeXLarge};
        line-height: ${core.type.lineHeightHuge};
      }
      .textExtra {
        font-size: ${core.type.fontSizeLarge};
        line-height: ${core.type.lineHeightExtra};
      }
      .textStandard {
        font-size: ${core.type.fontSizeMedium};
        line-height: ${core.type.lineHeightStandard};
      }
      .textTight {
        font-size: ${core.type.fontSizeXSmall};
        line-height: ${core.type.lineHeightTight};
      }
      .textBgHuge {
        top: 31px;
      }
      .textBgExtra {
        top: 25px;
      }
      .textBgStandard {
        top: 18px;
      }
      .textBgTight {
        top: 14px;
        background-size: 1px 4px;
      }
      .label {
        margin-top: ${core.layout.spacingSmall};
        color: ${core.colors.gray03};
        font-weight: ${core.type.fontWeightMedium};
      }
      .varName {
        margin-top: ${core.layout.spacingSmall};
        font-size: ${core.type.fontSizeXSmall};
        color: ${core.colors.pink};
      }
    `}</style>
  </div>
)

const MonospaceFont = _ => (
  <div>
    <div className="box">
      <div>{`A B C D E F G H I J K L M N O P Q R S T U V W X Y Z`}</div>
      <div>{`a b c d e f g h i j k l m n o p q r s t u v w x y z`}</div>
      <div>{`0 1 2 3 4 5 6 7 8 9`}</div>
      <div>{`‘ ? ’ “ ! ” ( % ) [ # ] { @ } / & \ < - + ÷ × = >`}</div>
      <div>{`® © $ € £ ¥ ¢ : ; , . *`}</div>
    </div>
    <P>
      To use the Source Code Pro on your site, you can install it by importing
      it from{' '}
      <Link href="https://fonts.googleapis.com/css?family=Source+Code+Pro:500">
        Google fonts
      </Link>.
    </P>
    <P>Only one Source Code Pro font weight is available for use.</P>
    <div className="box fontWeight">
      <div className="fontLetter">Aa</div>
      <div className="fontLabel">MEDIUM (500)</div>
    </div>
    <P>
      Use monspace font when presenting code. Refrain from using for any other
      purpose. When displaying code, try keeping the font size consistent at{' '}
      <DSCode>psTypeFontSizeSmall</DSCode> size whenever possible. Add
      consistent{' '}
      <Link href="/components/code#syntax-highlighting">
        syntax highlighting
      </Link>.
    </P>
    <style jsx>{`
      .box {
        background: ${core.colors.bone};
        border-radius: 12px;
        padding: ${core.layout.spacingLarge};
        margin: ${core.layout.spacingLarge} 0;
        font-size: ${core.type.fontSizeLarge};
        line-height: ${core.type.lineHeightExtra};
        font-weight: ${core.type.fontWeightBook};
      }
      .fontWeight {
        text-align: center;
      }
      .fontLetter {
        padding: ${core.layout.spacingLarge};
        font-family: ${core.type.fontFamilyCode};
        font-weight: ${core.type.fontWeightMedium};
        font-size: ${core.type.fontSizeGigantic};
        letter-spacing: ${core.type.letterSpacingGigantic};
      }
      .fontLabel {
        color: ${core.colors.gray03};
        font-size: ${core.type.fontSizeXSmall};
      }
    `}</style>
  </div>
)

export default withServerProps(_ => (
  <Chrome>
    <Content title="Typography">
      <PageHeading>Typography</PageHeading>

      <SectionHeading>Install the Font</SectionHeading>
      <P>
        To use the Pluralsight font-family on your site, you must install it by
        importing it from typography.com using Pluralsight's assigned CSS Key.
      </P>
      <Code lang="css">
        @import url(https://cloud.typography.com/6966154/691568/css/fonts.css);
      </Code>

      <SectionHeading>Font family</SectionHeading>
      <P>Pluralsight's font family for the web is Gotham SSm.</P>
      <FontFamily />

      <SectionHeading>Font weight</SectionHeading>
      <P>Five Gotham SSm font weights are available for use.</P>
      <FontWeight />

      <SectionHeading>Font size</SectionHeading>
      <P>Eight Gotham SSm font sizes are available.</P>
      <FontSize />

      <SectionHeading>Line height</SectionHeading>
      <P>
        Four line height increments are available. Each font size also has a
        default line height.
      </P>
      <LineHeight />
      <div style={{ marginTop: core.layout.spacingLarge }}>
        <Code language="css">{`@import "@pluralsight/ps-design-system-core";
.mySelector { line-height: var(--psTypeLineHeightStandard); }`}</Code>
      </div>

      <SectionHeading>Monospace font</SectionHeading>
      <P>
        Pluralsight’s monospace font family for the web is{' '}
        <Link
          href="https://fonts.googleapis.com/css?family=Source+Code+Pro:500"
          target="_blank"
        >
          Source Code Pro
        </Link>.
      </P>
      <MonospaceFont />
    </Content>
  </Chrome>
))
