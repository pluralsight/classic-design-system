const { danger, warn } = require('danger')
const toolbox = require('danger-plugin-toolbox')

const checkDescription = ({ minLength = 10 } = {}) => {
  const { github } = danger

  if (github.pr.body && github.pr.body.length > minLength) return

  warn(':pencil2: Please add a description.')
}

// NOTE: jest snapshots make this useless because of the high amount of changes
// TODO: find a way to filter out snapshot changes
const checkFileChangeLimit = ({ threshold = 1000 } = {}) => {
  const { github: { pr } } = danger // prettier-ignore

  if (pr.additions + pr.deletions <= threshold) return

  warn(':exclamation: This is a big PR. Can you break this into smaller PRs?')
}

const checkForReviewer = () => {
  const { github } = danger
  if (github.pr && github.pr.requested_reviewers.length > 0) return

  warn(':exclamation: Please assign a teammate to review your PR.')
}

void (async function main() {
  // thank new contributors
  toolbox.commonContribution({ msg: 'Thanks for contributing :tada:' })

  // are there any leftover console commands
  toolbox.jsConsoleCommands({ logType: 'fail' })

  // are new images minified
  toolbox.imageMinified({ logType: 'fail' })

  // are there skipped or focused tests
  toolbox.jsTestShortcuts({ logTypeSkipped: 'message', logTypeFocused: 'fail' })

  checkDescription()

  checkFileChangeLimit()

  checkForReviewer()
})()
