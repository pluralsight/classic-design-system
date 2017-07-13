import React from 'react'
import styleable from 'react-styleable'

import css from './font-size.module.css'
import { Example } from '../../common/components'

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

const Sizes = styleable(css)(props =>
  <div className={props.css.root}>
    {props.sizes.map((w, i) =>
      <div className={props.css.size} key={i}>
        <div style={{ fontSize: w.size }} className={props.css.sizeSentence}>
          The quick brown fox jumps over the lazy dog.
        </div>
        <div className={props.css.sizeLabel}>
          {w.size} - {w.label}
        </div>
      </div>
    )}
  </div>
)

export default props =>
  <Example.CssVar
    output={<Sizes sizes={sizes} />}
    attributes={sizes.map(x => ({
      varName: x.varName,
      attrName: 'font-size'
    }))}
  />
