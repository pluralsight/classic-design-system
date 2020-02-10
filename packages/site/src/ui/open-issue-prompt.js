import React from 'react'

import Button from '@pluralsight/ps-design-system-button'

import { GithubIcon } from './index.js'

export default function OpenIssuePrompt(props) {
  return (
    <>
      <div className="open-issue-prompt">
        <Button
          href="https://github.com/pluralsight/design-system/issues/new"
          icon={<GithubIcon />}
          target="_blank"
        >
          Open an issue
        </Button>
      </div>

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
    </>
  )
}
