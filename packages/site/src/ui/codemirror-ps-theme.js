import React from 'react'

import {
  colorsCode,
  colorsTextIcon,
  type
} from '@pluralsight/ps-design-system-core'

export default function CodeMirrorPsTheme() {
  return (
    <style global jsx>{`
      .cm-s-ps-codemirror {
        font-size: 1em;
        line-height: 1.5em;
        font-family: ${type.fontFamilyCode};
        letter-spacing: 0.3px;
        word-spacing: 1px;
        background: #272822;
        color: ${colorsTextIcon.highOnDark};
      }
      .cm-s-ps-codemirror .CodeMirror-lines {
        padding: 8px 0;
      }
      .cm-s-ps-codemirror .CodeMirror-gutters {
        box-shadow: 1px 0 2px 0 rgba(0, 0, 0, 0.5);
        -webkit-box-shadow: 1px 0 2px 0 rgba(0, 0, 0, 0.5);
        background-color: #272822;
        padding-right: 10px;
        z-index: 3;
        border: none;
      }
      .cm-s-ps-codemirror div.CodeMirror-cursor {
        border-left: 3px solid #f8f8f2;
      }
      .cm-s-ps-codemirror .CodeMirror-activeline-background {
        background: #3e3d32;
      }
      .cm-s-ps-codemirror .CodeMirror-selected {
        background: #49483e;
      }
      .cm-s-ps-codemirror .cm-comment {
        color: ${colorsTextIcon.lowOnDark};
      }
      .cm-s-ps-codemirror .cm-string {
        color: ${colorsCode.green};
      }
      .cm-s-ps-codemirror .cm-number {
        color: ${colorsCode.orange};
      }
      .cm-s-ps-codemirror .cm-atom {
        color: ${colorsCode.red};
      }
      .cm-s-ps-codemirror .cm-keyword {
        color: ${colorsCode.red};
      }
      .cm-s-ps-codemirror .cm-variable {
        color: ${colorsCode.purple};
      }
      .cm-s-ps-codemirror .cm-def {
        font-style: italic;
        color: ${colorsCode.yellow};
      }
      .cm-s-ps-codemirror .cm-variable-2 {
        color: ${colorsCode.purple};
      }
      .cm-s-ps-codemirror .cm-property {
        color: ${colorsCode.blue};
      }
      .cm-s-ps-codemirror .cm-operator {
        color: ${colorsTextIcon.lowOnDark};
      }
      .cm-s-ps-codemirror .CodeMirror-linenumber {
        color: #75715e;
      }
    `}</style>
  )
}
