import commonjs from '@rollup/plugin-commonjs'
import nodeResolve from '@rollup/plugin-node-resolve'
import babel from '@rollup/plugin-babel'

function plugins() {
  return [
    nodeResolve({
      extensions: ['.js', '.jsx', '.ts', '.tsx']
    }),
    commonjs(),
    babel({
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      envName: 'production',
      exclude: 'node_modules/**',
      babelHelpers: 'bundled'
    })
  ]
}

export const config = ({ root, packageJSON }) => {
  const externalPackages = [
    ...Object.keys(packageJSON.dependencies),
    ...Object.keys(packageJSON.peerDependencies)
  ]
  const external = id => {
    return externalPackages.some(aPackage => id.startsWith(aPackage))
  }
  return {
    input: `${root}/src/index.ts`,
    output: {
      format: 'esm',
      dir: `${root}/dist/esm`,
      preserveModules: true,
      sourcemap: 'hidden'
    },
    plugins: plugins({ root }),
    external
  }
}
