const {execSync} = require('child_process');
const {resolve} = require('path');

const root = resolve(__dirname);
const run = (cmd) => execSync(cmd, {stdio: 'inherit', cwd: root});

const { build: esbuild } = require('esbuild')

esbuild({
  entryPoints: ['./src/index.jsx'],
  outdir: './build-esbuild/index.js',
  splitting: true,
  bundle: true,
  format: 'esm',
  external:['glamor', 'react', 'react-dom']
}).catch(() => process.exit(1))


run(`yarn run build:parcel`);
run(`yarn run build:rollup`);
run(`yarn run build:snowpack`);
run(`yarn run build:webpack`);
run(`yarn run build:webpack-4`);

