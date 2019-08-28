import Button from '@pluralsight/ps-design-system-button/react.js'
import React from 'react'

import { GithubIcon } from './index.js'

class OpenIssuePrompt extends React.PureComponent {
  render() {
    return (
      <div className="open-issue-prompt">
        <Button
          href="//github.com/pluralsight/design-system/issues/new"
          icon={<GithubIcon />}
          target="_blank"
        >
          Open an issue
        </Button>

        <style jsx>{`
          .open-issue-prompt {
            position: fixed;
            bottom: 20px;
            right: 20px;
            z-index: 100;
          }
          .open-issue-prompt > :global(a) {
            border-radius: 20px;
            box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
          }
        `}</style>
      </div>
    )
  }
}

export default OpenIssuePrompt
