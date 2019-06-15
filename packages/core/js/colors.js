const core = {
  // abstract token names
  color: {
    white: '#ffffff',
    black: '#000000',
    // the numbers below represents the 'L' in the color's HSL value
    neutral: {
      9: '#181818',
      13: '#222222',
      21: '#363636',
      33: '#555555',
      68: '#AAAAAA',
      80: '#CCCCCC',
      95: '#F2F2F2'
    },
    pink: {
      47: '#E80A89'
    },
    red: {
      54: '#DE3636',
      66: '#D99077',
      69: '#F26D6D'
    },
    orange: {
      53: '#F96816',
      61: '#FF7B39',
      55: '#F05A28',
      70: '#FF9466'
    },
    yellow: {
      50: '#FFC200',
      75: '#FFCA80'
    },
    green: {
      40: '#23AA5A',
      47: '#86CE21',
      64: '#B8CC7A',
      76: '#ABD9C6'
    },
    blue: {
      42: '#137BC2',
      72: '#8AC7E6'
    },
    purple: {
      74: '#E695BD'
    }
  }
}

module.exports = {
  // specific token names mapped to abstracts above
  text: {
    onInteractve: core.color.white,
    onDisabled: core.color.neutral[68]
  },

  interactive: {
    default: core.color.orange[53],
    hover: core.color.orange[61],
    disabled: core.color.neutral[33]
  },

  // old literal token names
  white: core.color.white,
  bone: core.color.neutral[95],
  gray01: core.color.neutral[80],
  gray02: core.color.neutral[68],
  gray03: core.color.neutral[33],
  gray04: core.color.neutral[21],
  gray05: core.color.neutral[13],
  gray06: core.color.neutral[9],
  black: core.color.black,

  pink: core.color.pink[47],
  red: core.color.red[54],
  orange: core.color.orange[53],
  orangeLight: core.color.orange[61],
  yellow: core.color.yellow[50],
  greenLight: core.color.green[47],
  green: core.color.green[40],
  blue: core.color.blue[42],

  gradientHorz: `linear-gradient(to right, ${core.color.orange[55]}, ${
    core.color.pink[47]
  })`,
  gradientVert: `linear-gradient(to bottom, ${core.color.orange[55]}, ${
    core.color.pink[47]
  })`,

  codeRed: core.color.red[69],
  codeOrange: core.color.orange[70],
  codeYellow: core.color.yellow[75],
  codeGreen: core.color.green[64],
  codeTurquoise: core.color.green[76],
  codeBlue: core.color.blue[72],
  codePurple: core.color.purple[74],
  codeSand: core.color.red[66]
}
