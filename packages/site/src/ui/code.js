import CodeMirror from 'react-codemirror'
import core from '@pluralsight/ps-design-system-core'

import CodeMirrorCss from '../../vendor/codemirror-css'
import CodeMirrorTheme from '../../vendor/codemirror-theme-monokai-sublime-css'

let modeLoaded = false
if (typeof window !== 'undefined' && typeof window.navigator !== 'undefined') {
  require('codemirror/mode/javascript/javascript')
  require('codemirror/mode/css/css')
  modeLoaded = true
}

import { string } from 'prop-types'

/* TODO: rename CodeBlock, do inline as Code*/
const Code = props => {
  const options = {
    readOnly: true,
    theme: 'monokai-sublime'
  }
  if (modeLoaded) options.mode = props.lang

  return (
    <div className="code">
      <CodeMirrorCss />
      <CodeMirrorTheme />
      <CodeMirror value={props.children} options={options} />
      <style jsx>{`
        .code {
          padding: ${core.layout.spacingLarge};
          background: ${core.colors.gray04};
        }
        .code :global(.CodeMirror) {
          background: none;
        }
        .code :global(.CodeMirror), .code :global(.CodeMirror-scroll) {
          height: auto;
        }
      `}</style>
    </div>
  )
}

Code.propTypes = {
  lang: string
}

Code.defaultProps = {
  lang: 'javascript'
}

export default Code
