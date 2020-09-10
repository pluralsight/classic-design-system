import { PrismTheme } from 'prism-react-renderer'

import {
  colorsBackgroundDark,
  colorsBackgroundLight,
  colorsTextIcon,
} from '@pluralsight/ps-design-system-core'

export const darkTheme: PrismTheme = {
  plain: {
    color: colorsTextIcon.lowOnDark,
    backgroundColor: colorsBackgroundDark[2],
  },

  // TODO: replace with PS colors
  styles: [
    {
      types: ['namespace'],
      style: { opacity: 0.7 },
    },
    {
      types: ['atrule'],
      style: { color: '#c792ea' },
    },
    {
      types: ['attr-name'],
      style: { color: '#ffcb6b' },
    },
    {
      types: ['attr-value'],
      style: { color: '#a5e844' },
    },
    {
      types: ['attribute'],
      style: { color: '#a5e844' },
    },
    {
      types: ['boolean'],
      style: { color: '#c792ea' },
    },
    {
      types: ['builtin'],
      style: { color: '#ffcb6b' },
    },
    {
      types: ['cdata'],
      style: { color: '#80cbc4' },
    },
    {
      types: ['char'],
      style: { color: '#80cbc4' },
    },
    {
      types: ['class'],
      style: { color: '#ffcb6b' },
    },
    {
      types: ['class-name'],
      style: { color: '#f2ff00' },
    },
    {
      types: ['comment'],
      style: { color: '#616161' },
    },
    {
      types: ['constant'],
      style: { color: '#c792ea' },
    },
    {
      types: ['deleted'],
      style: { color: '#ff6666' },
    },
    {
      types: ['doctype'],
      style: { color: '#616161' },
    },
    {
      types: ['entity'],
      style: { color: '#ff6666' },
    },
    {
      types: ['function'],
      style: { color: '#c792ea' },
    },
    {
      types: ['hexcode'],
      style: { color: '#f2ff00' },
    },
    {
      types: ['id'],
      style: {
        color: '#c792ea',
        fontWeight: 'bold',
      },
    },
    {
      types: ['important'],
      style: {
        color: '#c792ea',
        fontWeight: 'bold',
      },
    },
    {
      types: ['inserted'],
      style: { color: '#80cbc4' },
    },
    {
      types: ['keyword'],
      style: { color: '#c792ea' },
    },
    {
      types: ['number'],
      style: { color: '#fd9170' },
    },
    {
      types: ['operator'],
      style: { color: '#89ddff' },
    },
    {
      types: ['prolog'],
      style: { color: '#616161' },
    },
    {
      types: ['property'],
      style: { color: '#80cbc4' },
    },
    {
      types: ['pseudo-class'],
      style: { color: '#a5e844' },
    },
    {
      types: ['pseudo-element'],
      style: { color: '#a5e844' },
    },
    {
      types: ['punctuation'],
      style: { color: '#89ddff' },
    },
    {
      types: ['regex'],
      style: { color: '#f2ff00' },
    },
    {
      types: ['selector'],
      style: { color: '#ff6666' },
    },
    {
      types: ['string'],
      style: { color: '#a5e844' },
    },
    {
      types: ['symbol'],
      style: { color: '#c792ea' },
    },
    {
      types: ['tag'],
      style: { color: '#ff6666' },
    },
    {
      types: ['unit'],
      style: { color: '#fd9170' },
    },
    {
      types: ['url'],
      style: { color: '#ff6666' },
    },
    {
      types: ['variable'],
      style: { color: '#ff6666' },
    },
  ],
}

export const lightTheme: PrismTheme = {
  plain: {
    color: colorsTextIcon.lowOnLight,
    backgroundColor: colorsBackgroundLight[2],
  },

  // TODO: replace with PS colors
  styles: [
    {
      types: ['namespace'],
      style: { opacity: 0.7 },
    },
    {
      types: ['atrule'],
      style: { color: '#7c4dff' },
    },
    {
      types: ['attr-name'],
      style: { color: '#39adb5' },
    },
    {
      types: ['attr-value'],
      style: { color: '#f6a434' },
    },
    {
      types: ['attribute'],
      style: { color: '#f6a434' },
    },
    {
      types: ['boolean'],
      style: { color: '#7c4dff' },
    },
    {
      types: ['builtin'],
      style: { color: '#39adb5' },
    },
    {
      types: ['cdata'],
      style: { color: '#39adb5' },
    },
    {
      types: ['char'],
      style: { color: '#39adb5' },
    },
    {
      types: ['class'],
      style: { color: '#39adb5' },
    },
    {
      types: ['class-name'],
      style: { color: '#6182b8' },
    },
    {
      types: ['comment'],
      style: { color: '#aabfc9' },
    },
    {
      types: ['constant'],
      style: { color: '#7c4dff' },
    },
    {
      types: ['deleted'],
      style: { color: '#e53935' },
    },
    {
      types: ['doctype'],
      style: { color: '#aabfc9' },
    },
    {
      types: ['entity'],
      style: { color: '#e53935' },
    },
    {
      types: ['function'],
      style: { color: '#7c4dff' },
    },
    {
      types: ['hexcode'],
      style: { color: '#f76d47' },
    },
    {
      types: ['id'],
      style: {
        color: '#7c4dff',
        fontWeight: 'bold',
      },
    },
    {
      types: ['important'],
      style: {
        color: '#7c4dff',
        fontWeight: 'bold',
      },
    },
    {
      types: ['inserted'],
      style: { color: '#39adb5' },
    },
    {
      types: ['keyword'],
      style: { color: '#7c4dff' },
    },
    {
      types: ['number'],
      style: { color: '#f76d47' },
    },
    {
      types: ['operator'],
      style: { color: '#39adb5' },
    },
    {
      types: ['prolog'],
      style: { color: '#aabfc9' },
    },
    {
      types: ['property'],
      style: { color: '#39adb5' },
    },
    {
      types: ['pseudo-class'],
      style: { color: '#f6a434' },
    },
    {
      types: ['pseudo-element'],
      style: { color: '#f6a434' },
    },
    {
      types: ['punctuation'],
      style: { color: '#39adb5' },
    },
    {
      types: ['regex'],
      style: { color: '#6182b8' },
    },
    {
      types: ['selector'],
      style: { color: '#e53935' },
    },
    {
      types: ['string'],
      style: { color: '#f6a434' },
    },
    {
      types: ['symbol'],
      style: { color: '#7c4dff' },
    },
    {
      types: ['tag'],
      style: { color: '#e53935' },
    },
    {
      types: ['unit'],
      style: { color: '#f76d47' },
    },
    {
      types: ['url'],
      style: { color: '#e53935' },
    },
    {
      types: ['variable'],
      style: { color: '#e53935' },
    },
  ],
}
