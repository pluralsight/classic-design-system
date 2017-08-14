import React from 'react'
import styleable from 'react-styleable'

import css from './logo.module.css'
import Link from '../link'

const Svg = props =>
  <svg
    className={props.css.img}
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a">
        <stop stopColor="#F96816" offset="0%" />
        <stop stopColor="#E80A89" offset="100%" />
      </linearGradient>
    </defs>
    <g fill="none" fillRule="evenodd">
      <path
        d="M16 32c8.837 0 16-7.164 16-15.9993C32.0007 7.164 24.837 0 16 0 7.1637 0 0 7.164 0 16.0007 0 24.836 7.163 32 16 32z"
        fill="url(#a)"
      />
      <path
        d="M8.625 9.5v13l11.25-6.5-11.25-6.5zM10 11.8824L17.1265 16 10 20.1174v-8.235z"
        fill="#FFF"
      />
      <path
        d="M11.875 7.625v16.75L26.25 16 11.875 7.625zm1.375 2.3924L23.5186 16 13.25 21.9826V10.0174z"
        fill="#FFF"
      />
    </g>
  </svg>

export default styleable(css)(props =>
  <Link href="/" className={props.css.root}>
    <Svg css={props.css} />
    <h2 className={props.css.text}>
      <span className={props.css.textCompany}>PLURALSIGHT</span>
      <span className={props.css.textTitle}>
        DESIGN SYSTEM
      </span>
    </h2>
  </Link>
)
