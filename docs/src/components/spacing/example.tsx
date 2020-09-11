import React from 'react'

import * as styles from './example.module.css'

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1)

export const Parent = (props) => <div className={styles.parent}>{props.children}</div>

export const Example = (props) => (
  <div className={styles.example}>
    <div className={styles.box}>
      <Border {...props} />
      <Lines {...props} />
    </div>
    <Label {...props} />
    <Var {...props} />
  </div>
)

interface BorderProps {
  sides: string
  width: number
}
const Border: React.FC<BorderProps> = (props) =>
  props.sides === 'all' ? (
    <div style={{ borderWidth: props.width }} className={styles.border}></div>
  ) : null

interface LabelProps {
  label: string
  width: number
}
const Label: React.FC<LabelProps> = (props) =>
  props.label ? (
    <div className={styles.label}>{`${props.width}px - ${props.label}`}</div>
  ) : null

interface VarProps {
  varName: string
}
const Var: React.FC<VarProps> = (props) =>
  props.varName ? <code className={styles.varName}>{props.varName}</code> : null

type Sides = 'all' | 'top' | 'right' | 'bottom' | 'left'

const dimension = (side: Sides) =>
  side === 'left' || side === 'right' ? 'width' : 'height'

interface SingleLineProps {
  side: Sides
  sides: string
  width: number
}
const SingleLine: React.FC<SingleLineProps> = (props) => (
  <div
    style={{ [dimension(props.side)]: props.width }}
    className={`${styles.line} ${styles.[`line${capitalize(props.side)}`]} ${
      props.sides !== 'all' ? styles.lineSingleSide : ''
    }`}
  ></div>
)

function AllLines(props) {
  return ['top', 'right', 'bottom', 'left'].map((side) => (
    <SingleLine {...props} key={side} side={side} />
  ))
}

interface LinesProps {
  sides: string
}
const Lines: React.FC<LinesProps> = (props) =>
  props.sides === 'all' ? <AllLines {...props} /> : <SingleLine {...props} />

