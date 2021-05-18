const { execSync } = require('child_process')
const { resolve } = require('path')

const { generateComponents } = require('./icon/generate-components')
const { cleanSvgs } = require('./icon/clean-svgs')
const { copySvgs } = require('./copy-svgs')

const root = resolve(__dirname, '../')
const run = cmd => execSync(cmd, { stdio: 'inherit', cwd: root })

// icon
const iconSvgs = resolve(root, 'src/icon/svg')
const icons = resolve(root, 'src/icon/react/icons')
cleanSvgs(iconSvgs)
generateComponents({ dest: icons, src: iconSvgs })

// emptystate
const emptystate = resolve(root, 'src/emptystate/react/illustrations')
const emptystateSvgs = resolve(root, 'src/emptystate/svg')
run(
  `svgr --config-file scripts/emptystate/svgr.config.cjs  --typescript --filename-case kebab --ext "dist.tsx" -d ${emptystate} ${emptystateSvgs}`
)
run('rm -rf src/emptystate/react/illustrations/index.dist.tsx')

//  errors
const errors = resolve(root, 'src/errors/react/illustrations')
const errorSvgs = resolve(root, 'src/errors/svg')
run(
  `svgr --typescript --filename-case kebab --ext "dist.tsx" -d ${errors} ${errorSvgs}`
)
run('rm -rf src/errors/react/illustrations/index.dist.tsx')

// copy svgs
copySvgs(
  { src: iconSvgs, dest: resolve(root, 'dist/svgs/icon') },
  { src: emptystateSvgs, dest: resolve(root, 'dist/svgs/emptystate') },
  { src: errorSvgs, dest: resolve(root, 'dist/svgs/errors') }
)
