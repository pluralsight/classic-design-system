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
      babelHelpers: 'runtime'
    })
  ]
}

export const config = ({ root, packageJSON }) => {
  const externalPackages = [
    ...Object.keys(packageJSON.dependencies),
    ...Object.keys(packageJSON.peerDependencies)
  ]
  const external = id => {
    return externalPackages.some(
      aPackage => id.startsWith(aPackage) || id.includes('@babel/runtime')
    )
  }
  return {
    input: `${root}/src/index.ts`,
    output: [
      {
        format: 'cjs',
        dir: `${root}/dist/cjs`,
        preserveModules: true,
        sourcemap: true,
        exports: 'named'
      },
      {
        format: 'esm',
        dir: `${root}/dist/esm`,
        preserveModules: true,
        sourcemap: true
      }
    ],
    plugins: plugins({ root }),
    external
  }
}
