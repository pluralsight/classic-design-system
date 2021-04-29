import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { babel } from '@rollup/plugin-babel';
export default {
  input: 'src/index.jsx',
  external:['glamor', 'react', 'react-dom'],
  output: {
    file: 'build-rollup/bundle.js',
    format: 'esm',
  },
  plugins: [commonjs({sourceMap: false}), nodeResolve(), babel({ babelHelpers: 'bundled' })]
};