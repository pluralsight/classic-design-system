import React from 'react'
import styleable from 'react-styleable'

import css from './font-weight.module.css'
import { Example } from '../../common/components'

const weights = [
  { label: 'BOLD', weight: 700, varName: 'psTypeFontWeightBold' },
  { label: 'MEDIUM', weight: 500, varName: 'psTypeFontWeightMedium' },
  { label: 'BOOK', weight: 400, varName: 'psTypeFontWeightBook' },
  { label: 'LIGHT', weight: 300, varName: 'psTypeFontWeightLight' },
  { label: 'EXTRA LIGHT', weight: 200, varName: 'psTypeFontWeightXLight' }
]

const Weights = styleable(css)(props =>
  <div className={props.css.root}>
    {props.weights.map((w, i) =>
      <div className={props.css.weight} key={i}>
        <div
          style={{ fontWeight: w.weight }}
          className={props.css.weightLetters}
        >
          Aa
        </div>
        <div className={props.css.weightLabel}>
          {w.label} ({w.weight})
        </div>
      </div>
    )}
  </div>
)

export default props =>
  <Example.CssVar
    output={<Weights weights={weights} />}
    attributes={weights.map(x => ({
      varName: x.varName,
      attrName: 'font-weight'
    }))}
  />
