const toolbox = require('danger-plugin-toolbox')

void (async function main() {
  // thank new contributors
  toolbox.commonContribution({ msg: 'Thanks for contributing :tada:' })

  // are there any leftover console commands
  toolbox.jsConsoleCommands({ logType: 'fail' })

  // are new images minified
  toolbox.imageMinifiedJpg()
  toolbox.imageMinifiedPng()

  // are there skipped or focused tests
  toolbox.jsTestShortcuts({ logTypeSkipped: 'message', logTypeFocused: 'fail' })

  toolbox.commonPrDescription({ minLength: 10, msg: ':pencil2: Please add a description.' })
})()
