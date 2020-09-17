import { PrismTheme } from 'prism-react-renderer'

import {
  colorsBackgroundDark,
  colorsBackgroundLight,
  colorsBlue,
  colorsGreen,
  colorsOrange,
  colorsPink,
  colorsPurple,
  colorsRed,
  colorsTextIcon
} from '@pluralsight/ps-design-system-core'

export const darkTheme: PrismTheme = {
  plain: {
    color: colorsTextIcon.highOnDark,
    backgroundColor: colorsBackgroundDark[2]
  },
  styles: [
    {
      types: ['namespace'],
      style: { opacity: 0.7 }
    },
    {
      types: ['atrule'],
      style: { color: '#996300' }
    },
    {
      types: ['attr-name'],
      style: { color: '#996300' }
    },
    {
      types: ['attr-value'],
      style: { color: '#996300' }
    },
    {
      types: ['attribute'],
      style: { color: '#996300' }
    },
    {
      types: ['boolean'],
      style: { color: colorsGreen[4] }
    },
    {
      types: ['builtin'],
      style: { color: colorsTextIcon.lowOnDark }
    },
    {
      types: ['cdata'],
      style: { color: '#996300' }
    },
    {
      types: ['char'],
      style: { color: '#996300' }
    },
    {
      types: ['class'],
      style: { color: '#996300' }
    },
    {
      types: ['class-name', 'maybe-class-name'],
      style: { color: colorsBlue[4] }
    },
    {
      types: ['comment'],
      style: {
        color: colorsTextIcon.lowOnDark,
        fontStyle: 'italic'
      }
    },
    {
      types: ['constant'],
      style: { color: colorsRed[4] }
    },
    {
      types: ['deleted'],
      style: { color: '#996300' }
    },
    {
      types: ['doctype'],
      style: { color: '#996300' }
    },
    {
      types: ['entity'],
      style: { color: '#996300' }
    },
    {
      types: ['function'],
      style: { color: colorsBlue[5] }
    },
    {
      types: ['hexcode'],
      style: { color: '#996300' }
    },
    {
      types: ['id'],
      style: {
        color: '#996300',
        fontWeight: 'bold'
      }
    },
    {
      types: ['important'],
      style: {
        color: '#996300',
        fontWeight: 'bold'
      }
    },
    {
      types: ['inserted'],
      style: { color: '#996300' }
    },
    {
      types: ['keyword'],
      style: { color: colorsPink[4] }
    },
    {
      types: ['number'],
      style: { color: colorsGreen[4] }
    },
    {
      types: ['operator'],
      style: { color: colorsTextIcon.lowOnDark }
    },
    {
      types: ['parameter'],
      style: { color: colorsBlue[4] }
    },
    {
      types: ['prolog'],
      style: { color: colorsTextIcon.lowOnDark }
    },
    {
      types: ['property'],
      style: { color: '#996300' }
    },
    {
      types: ['property-access'],
      style: { color: colorsPurple[3] }
    },
    {
      types: ['pseudo-class'],
      style: { color: '#996300' }
    },
    {
      types: ['pseudo-element'],
      style: { color: '#996300' }
    },
    {
      types: ['punctuation'],
      style: { color: colorsTextIcon.lowOnDark }
    },
    {
      types: ['regex'],
      style: { color: colorsOrange[4] }
    },
    {
      types: ['selector'],
      style: { color: '#996300' }
    },
    {
      types: ['string'],
      style: { color: colorsGreen[4] }
    },
    {
      types: ['symbol'],
      style: { color: '#996300' }
    },
    {
      types: ['tag'],
      style: { color: '#996300' }
    },
    {
      types: ['unit'],
      style: { color: '#996300' }
    },
    {
      types: ['url'],
      style: { color: '#996300' }
    },
    {
      types: ['variable'],
      style: { color: '#996300' }
    }
  ]
}

export const lightTheme: PrismTheme = {
  plain: {
    color: colorsTextIcon.highOnLight,
    backgroundColor: colorsBackgroundLight[2]
  },
  styles: [
    {
      types: ['namespace'],
      style: { opacity: 0.7 }
    },
    {
      types: ['atrule'],
      style: { color: '#996300' }
    },
    {
      types: ['attr-name'],
      style: { color: '#996300' }
    },
    {
      types: ['attr-value'],
      style: { color: '#996300' }
    },
    {
      types: ['attribute'],
      style: { color: '#996300' }
    },
    {
      types: ['boolean'],
      style: { color: colorsGreen[8] }
    },
    {
      types: ['builtin'],
      style: { color: colorsTextIcon.lowOnLight }
    },
    {
      types: ['cdata'],
      style: { color: '#996300' }
    },
    {
      types: ['char'],
      style: { color: '#996300' }
    },
    {
      types: ['class'],
      style: { color: '#996300' }
    },
    {
      types: ['class-name', 'maybe-class-name'],
      style: { color: colorsBlue[8] }
    },
    {
      types: ['comment'],
      style: {
        color: colorsTextIcon.lowOnLight,
        fontStyle: 'italic'
      }
    },
    {
      types: ['constant'],
      style: { color: colorsRed[8] }
    },
    {
      types: ['deleted'],
      style: { color: '#996300' }
    },
    {
      types: ['doctype'],
      style: { color: '#996300' }
    },
    {
      types: ['entity'],
      style: { color: '#996300' }
    },
    {
      types: ['function'],
      style: { color: colorsBlue[7] }
    },
    {
      types: ['hexcode'],
      style: { color: '#996300' }
    },
    {
      types: ['id'],
      style: {
        color: '#996300',
        fontWeight: 'bold'
      }
    },
    {
      types: ['important'],
      style: {
        color: '#996300',
        fontWeight: 'bold'
      }
    },
    {
      types: ['inserted'],
      style: { color: '#996300' }
    },
    {
      types: ['keyword'],
      style: { color: colorsPink[8] }
    },
    {
      types: ['number'],
      style: { color: colorsGreen[8] }
    },
    {
      types: ['operator'],
      style: { color: colorsTextIcon.lowOnLight }
    },
    {
      types: ['parameter'],
      style: { color: colorsBlue[8] }
    },
    {
      types: ['prolog'],
      style: { color: colorsTextIcon.lowOnLight }
    },
    {
      types: ['property'],
      style: { color: '#996300' }
    },
    {
      types: ['property-access'],
      style: { color: colorsPurple[7] }
    },
    {
      types: ['pseudo-class'],
      style: { color: '#996300' }
    },
    {
      types: ['pseudo-element'],
      style: { color: '#996300' }
    },
    {
      types: ['punctuation'],
      style: { color: colorsTextIcon.lowOnLight }
    },
    {
      types: ['regex'],
      style: { color: colorsOrange[8] }
    },
    {
      types: ['selector'],
      style: { color: '#996300' }
    },
    {
      types: ['string'],
      style: { color: colorsGreen[8] }
    },
    {
      types: ['symbol'],
      style: { color: '#996300' }
    },
    {
      types: ['tag'],
      style: { color: '#996300' }
    },
    {
      types: ['unit'],
      style: { color: '#996300' }
    },
    {
      types: ['url'],
      style: { color: '#996300' }
    },
    {
      types: ['variable'],
      style: { color: '#996300' }
    }
  ]
}
