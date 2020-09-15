import { PrismTheme } from 'prism-react-renderer'

interface Tokens {
  baseText: string
  blockBg: string
  commentText: string
  functionText: string
  keywordText: string
  operatorText: string
  propertyText: string
  punctuationText: string
  selectorText: string
  variableText: string
}

const colorsCodeDark: Tokens = {
  baseText: '#ffffff',
  blockBg: '#1e2429',
  commentText: '#718096',
  functionText: '#8ed1f6',
  keywordText: '#c0a3ff',
  operatorText: '#8ed1f6',
  propertyText: '#ffa3c8',
  punctuationText: '#8ed1f6;',
  selectorText: '#ccfc7a',
  variableText: '#ccfc7a',
}

const colorsCodeLight: Tokens = {
  baseText: '#1e2429',
  blockBg: '#f7f9fa',
  commentText: '#718096',
  functionText: '#0074ab',
  keywordText: '#5934ac',
  operatorText: '#0074ab',
  propertyText: '#c13368',
  punctuationText: '#0074ab',
  selectorText: '#588a00',
  variableText: '#588a00',
}

export const darkTheme = createTheme(colorsCodeDark)

export const lightTheme = createTheme(colorsCodeLight)

function createTheme(tokens: Tokens): PrismTheme {
  return {
    plain: { color: tokens.baseText, backgroundColor: tokens.blockBg },
    styles: [
      {
        types: ['comment', 'prolog', 'doctype', 'cdata'],
        style: { color: tokens.commentText },
      },
      {
        types: ['punctuation'],
        style: { color: tokens.punctuationText },
      },
      {
        types: [
          'property',
          'tag',
          'boolean',
          'number',
          'constant',
          'symbol',
          'deleted',
        ],
        style: { color: tokens.propertyText },
      },
      {
        types: [
          'selector',
          'attr-name',
          'string',
          'char',
          'builtin',
          'inserted',
        ],
        style: { color: tokens.selectorText },
      },
      {
        types: ['operator', 'entity', 'url'],
        style: {
          color: tokens.operatorText,
        },
      },
      {
        types: ['atrule', 'attr-value', 'keyword'],
        style: { color: tokens.keywordText },
      },
      {
        types: ['function'],
        style: { color: tokens.functionText },
      },
      {
        types: ['regex', 'important', 'variable'],
        style: { color: tokens.variableText },
      },
    ],
  }
}
