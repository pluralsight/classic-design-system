# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [8.1.3](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@8.1.2...@pluralsight/ps-design-system-viewtoggle@8.1.3) (2021-04-28)

**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle





## [8.1.2](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@8.1.1...@pluralsight/ps-design-system-viewtoggle@8.1.2) (2021-04-28)

**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle





## [8.1.1](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@8.1.0...@pluralsight/ps-design-system-viewtoggle@8.1.1) (2021-04-27)


### Bug Fixes

* **viewtoggle:** update aria attribute ([#1724](https://github.com/pluralsight/design-system/issues/1724)) ([7cb7784](https://github.com/pluralsight/design-system/commit/7cb7784ad4187fb5ead2f4ebcb8ae416e6b7a80c))





# [8.1.0](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@8.0.1...@pluralsight/ps-design-system-viewtoggle@8.1.0) (2021-04-20)


### Features

* **viewtoggle:** add style condition to conditional exports ([5e8e5e6](https://github.com/pluralsight/design-system/commit/5e8e5e6a6fb0f1a5022fba495a636785347053ba))
* **viewtoggle:** expose package.json in conditional exports ([bb2d074](https://github.com/pluralsight/design-system/commit/bb2d074b7883eb2b2f933a7aedd5bfae3e96b096))





## [8.0.1](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@8.0.0...@pluralsight/ps-design-system-viewtoggle@8.0.1) (2021-04-15)


### Bug Fixes

* **viewtoggle:** properly order the conditional exports in package ([4e4b800](https://github.com/pluralsight/design-system/commit/4e4b8008fda9a8457e7ce6866de593903a11ec82))





# [8.0.0](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@7.1.10...@pluralsight/ps-design-system-viewtoggle@8.0.0) (2021-04-14)


### Code Refactoring

* **viewtoggle:** add exports to package.json as alternate entry point ([546e972](https://github.com/pluralsight/design-system/commit/546e97265f78a2dce4ca61bfb3f8f7bf396879cd))
* **viewtoggle:** convert to esm ([7ed063f](https://github.com/pluralsight/design-system/commit/7ed063fa34a42a4b6a69d2b9ac74ca96ab0b184c))


### BREAKING CHANGES

* **viewtoggle:** add exports to package.json

FIRST:

import * as fs from 'fs'
import glob from 'glob'
import prettier from 'prettier'

glob('packages/**/package.json', (err, files) => {
  files
    .filter(filePath => !/node_modules/.test(filePath))
    .forEach(filePath => {
      const contents = fs.readFileSync(filePath, 'utf8')
      const pkg = JSON.parse(contents)
      pkg.exports = {
        import: './' + pkg.module,
        require: './' + pkg.main
      }
      fs.writeFileSync(
        filePath,
        prettier.format(JSON.stringify(pkg), {
          parser: 'json-stringify'
        }),
        'utf8'
      )
    })
})

LAST:

for FILE in $(git diff --name-only); do
  PACKAGE=`echo $FILE | sed "s|packages/\(.*\)/.*|\1|"`
  git add "$FILE"
  git commit -m "refactor($PACKAGE): add exports to package.json as alternate entry point" \
    --message "BREAKING CHANGE: add exports to package.json" -n
done
* **viewtoggle:** Drop cjs; esm only; all in on tree shaking
* **viewtoggle:** Remove file imports (eg, packageName/react)





## [7.1.10](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@7.1.9...@pluralsight/ps-design-system-viewtoggle@7.1.10) (2021-04-05)

**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle





## [7.1.9](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@7.1.8...@pluralsight/ps-design-system-viewtoggle@7.1.9) (2021-03-31)

**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle





## [7.1.8](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@7.1.7...@pluralsight/ps-design-system-viewtoggle@7.1.8) (2021-03-26)

**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle





## [7.1.7](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@7.1.6...@pluralsight/ps-design-system-viewtoggle@7.1.7) (2021-03-23)

**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle





## [7.1.6](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@7.1.5...@pluralsight/ps-design-system-viewtoggle@7.1.6) (2021-03-17)

**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle





## [7.1.5](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@7.1.4...@pluralsight/ps-design-system-viewtoggle@7.1.5) (2021-03-11)

**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle





## [7.1.4](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@7.1.3...@pluralsight/ps-design-system-viewtoggle@7.1.4) (2021-02-25)


### Bug Fixes

* **viewtoggle:** update peerDep version ([06b4412](https://github.com/pluralsight/design-system/commit/06b441249cb02132e3d7023f63ab56a2187df778))





## [7.1.3](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@7.1.2...@pluralsight/ps-design-system-viewtoggle@7.1.3) (2021-02-16)

**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle





## [7.1.2](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@7.1.1...@pluralsight/ps-design-system-viewtoggle@7.1.2) (2021-02-16)

**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle





## [7.1.1](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@7.1.0...@pluralsight/ps-design-system-viewtoggle@7.1.1) (2021-02-16)

**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle





# [7.1.0](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@7.0.2...@pluralsight/ps-design-system-viewtoggle@7.1.0) (2021-02-11)

**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle





## [7.0.2](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@7.0.1...@pluralsight/ps-design-system-viewtoggle@7.0.2) (2021-02-04)

**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle





## [7.0.1](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@7.0.0...@pluralsight/ps-design-system-viewtoggle@7.0.1) (2021-02-01)

**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle





# [7.0.0](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@6.1.25...@pluralsight/ps-design-system-viewtoggle@7.0.0) (2021-01-25)


### Build System

* **viewtoggle:** update to react@17 ([d3b92ca](https://github.com/pluralsight/design-system/commit/d3b92cafa7d3221b26181c5d9bb1870e24d33147))


### BREAKING CHANGES

* **viewtoggle:** react@17 peerDependency upgrade





## [6.1.25](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@6.1.24...@pluralsight/ps-design-system-viewtoggle@6.1.25) (2021-01-15)

**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle





## [6.1.24](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@6.1.23...@pluralsight/ps-design-system-viewtoggle@6.1.24) (2021-01-05)

**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle





## [6.1.23](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@6.1.22...@pluralsight/ps-design-system-viewtoggle@6.1.23) (2021-01-04)

**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle





## [6.1.22](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@6.1.21...@pluralsight/ps-design-system-viewtoggle@6.1.22) (2020-12-17)

**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle





## [6.1.21](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@6.1.20...@pluralsight/ps-design-system-viewtoggle@6.1.21) (2020-12-17)

**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle





## [6.1.20](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@6.1.19...@pluralsight/ps-design-system-viewtoggle@6.1.20) (2020-12-16)

**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle





## [6.1.19](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@6.1.18...@pluralsight/ps-design-system-viewtoggle@6.1.19) (2020-12-14)

**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle





## [6.1.18](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@6.1.17...@pluralsight/ps-design-system-viewtoggle@6.1.18) (2020-12-11)


### Bug Fixes

* test config syntax and lint errors ([37429b2](https://github.com/pluralsight/design-system/commit/37429b289e428500233a3954c5bf1bb96df852a6))





## [6.1.17](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@6.1.16...@pluralsight/ps-design-system-viewtoggle@6.1.17) (2020-12-07)

**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle





## [6.1.16](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@6.1.15...@pluralsight/ps-design-system-viewtoggle@6.1.16) (2020-12-07)

**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle





## [6.1.15](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@6.1.14...@pluralsight/ps-design-system-viewtoggle@6.1.15) (2020-12-03)

**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle





## [6.1.14](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@6.1.13...@pluralsight/ps-design-system-viewtoggle@6.1.14) (2020-11-30)

**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle





## [6.1.13](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@6.1.12...@pluralsight/ps-design-system-viewtoggle@6.1.13) (2020-11-24)

**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle





## [6.1.12](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@6.1.11...@pluralsight/ps-design-system-viewtoggle@6.1.12) (2020-11-18)

**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle





## [6.1.11](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@6.1.10...@pluralsight/ps-design-system-viewtoggle@6.1.11) (2020-11-17)

**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle





## [6.1.10](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@6.1.9...@pluralsight/ps-design-system-viewtoggle@6.1.10) (2020-11-16)

**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle





## [6.1.9](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@6.1.8...@pluralsight/ps-design-system-viewtoggle@6.1.9) (2020-11-12)

**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle





## [6.1.8](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@6.1.7...@pluralsight/ps-design-system-viewtoggle@6.1.8) (2020-11-05)

**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle





## [6.1.7](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@6.1.6...@pluralsight/ps-design-system-viewtoggle@6.1.7) (2020-11-02)

**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle





## [6.1.6](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@6.1.5...@pluralsight/ps-design-system-viewtoggle@6.1.6) (2020-10-29)

**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle





## [6.1.5](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@6.1.4...@pluralsight/ps-design-system-viewtoggle@6.1.5) (2020-10-29)

**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle





## [6.1.4](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@6.1.3...@pluralsight/ps-design-system-viewtoggle@6.1.4) (2020-10-28)

**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle





## [6.1.3](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@6.1.2...@pluralsight/ps-design-system-viewtoggle@6.1.3) (2020-10-26)

**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle





## [6.1.2](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@6.1.1...@pluralsight/ps-design-system-viewtoggle@6.1.2) (2020-10-20)

**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle





## [6.1.1](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@6.1.0...@pluralsight/ps-design-system-viewtoggle@6.1.1) (2020-10-13)

**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle





# [6.1.0](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@6.0.21...@pluralsight/ps-design-system-viewtoggle@6.1.0) (2020-10-13)

**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle





## [6.0.21](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@6.0.20...@pluralsight/ps-design-system-viewtoggle@6.0.21) (2020-10-13)


### Bug Fixes

* typings ([0710f92](https://github.com/pluralsight/design-system/commit/0710f92bb60ddb7c6a3791a6a8f2300a466e2885))





## [6.0.20](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@6.0.19...@pluralsight/ps-design-system-viewtoggle@6.0.20) (2020-10-08)

**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle





## [6.0.19](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@6.0.18...@pluralsight/ps-design-system-viewtoggle@6.0.19) (2020-10-08)

**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle





## [6.0.18](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@6.0.17...@pluralsight/ps-design-system-viewtoggle@6.0.18) (2020-10-08)


### Bug Fixes

* **viewtoggle:** fix minor regressions ([e748094](https://github.com/pluralsight/design-system/commit/e74809453457f031529db96d425bc57e5eac66a4))





## [6.0.17](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@6.0.16...@pluralsight/ps-design-system-viewtoggle@6.0.17) (2020-09-17)

**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle





## [6.0.16](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@6.0.15...@pluralsight/ps-design-system-viewtoggle@6.0.16) (2020-09-15)

**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle





## [6.0.15](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@6.0.14...@pluralsight/ps-design-system-viewtoggle@6.0.15) (2020-09-14)

**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle





## [6.0.14](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@6.0.13...@pluralsight/ps-design-system-viewtoggle@6.0.14) (2020-09-09)

**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle





## [6.0.13](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@6.0.12...@pluralsight/ps-design-system-viewtoggle@6.0.13) (2020-08-13)

**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle





## [6.0.12](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@6.0.11...@pluralsight/ps-design-system-viewtoggle@6.0.12) (2020-08-10)

**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle





## [6.0.11](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@6.0.10...@pluralsight/ps-design-system-viewtoggle@6.0.11) (2020-07-17)

**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle





## [6.0.10](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@6.0.9...@pluralsight/ps-design-system-viewtoggle@6.0.10) (2020-05-14)

**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle





## [6.0.9](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@6.0.8...@pluralsight/ps-design-system-viewtoggle@6.0.9) (2020-05-07)


### Bug Fixes

* update normalize peer dependency ([cd5b8a4](https://github.com/pluralsight/design-system/commit/cd5b8a41aa231dc2f5102643a3dca9a772d9b5ae))





## [6.0.8](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@6.0.7...@pluralsight/ps-design-system-viewtoggle@6.0.8) (2020-04-08)

**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle





## [6.0.7](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@6.0.6...@pluralsight/ps-design-system-viewtoggle@6.0.7) (2020-04-07)

**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle





## [6.0.6](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@6.0.5...@pluralsight/ps-design-system-viewtoggle@6.0.6) (2020-04-03)

**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle





## [6.0.6](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@6.0.5...@pluralsight/ps-design-system-viewtoggle@6.0.6) (2020-04-02)

**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle





## [6.0.5](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@6.0.4...@pluralsight/ps-design-system-viewtoggle@6.0.5) (2020-04-01)

**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle





## [6.0.4](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@6.0.3...@pluralsight/ps-design-system-viewtoggle@6.0.4) (2020-03-27)

**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle





## [6.0.3](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@6.0.2...@pluralsight/ps-design-system-viewtoggle@6.0.3) (2020-03-16)

**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle





## [6.0.2](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@6.0.1...@pluralsight/ps-design-system-viewtoggle@6.0.2) (2020-03-11)

**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle





# [6.0.0](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@5.0.28...@pluralsight/ps-design-system-viewtoggle@6.0.0) (2020-03-11)

**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle





## [5.0.28](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@5.0.27...@pluralsight/ps-design-system-viewtoggle@5.0.28) (2020-02-26)


### Bug Fixes

* removes conditional uses of useRef ([f54265e](https://github.com/pluralsight/design-system/commit/f54265e9a57f1a3ca4acd334008ab1a0276c2ebf))





## [5.0.27](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@5.0.26...@pluralsight/ps-design-system-viewtoggle@5.0.27) (2020-02-18)

**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle





## [5.0.26](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@5.0.25...@pluralsight/ps-design-system-viewtoggle@5.0.26) (2020-02-07)

**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle





## [5.0.25](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@5.0.24...@pluralsight/ps-design-system-viewtoggle@5.0.25) (2020-02-04)


### Bug Fixes

* named imports from core ([4ba16f5](https://github.com/pluralsight/design-system/commit/4ba16f548e665bdf86bf2a8e1875a1f58bceb33c))





## [5.0.24](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@5.0.23...@pluralsight/ps-design-system-viewtoggle@5.0.24) (2020-01-30)

**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle





## [5.0.23](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@5.0.22...@pluralsight/ps-design-system-viewtoggle@5.0.23) (2020-01-30)

**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle





## [5.0.22](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@5.0.21...@pluralsight/ps-design-system-viewtoggle@5.0.22) (2020-01-29)

**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle





## [5.0.21](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@5.0.20...@pluralsight/ps-design-system-viewtoggle@5.0.21) (2020-01-28)

**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle





## [5.0.20](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@5.0.19...@pluralsight/ps-design-system-viewtoggle@5.0.20) (2020-01-24)

**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle





## [5.0.19](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@5.0.18...@pluralsight/ps-design-system-viewtoggle@5.0.19) (2020-01-22)


### Bug Fixes

* **viewtoggle:** remove prop themeName from dom element ([fe01ed5](https://github.com/pluralsight/design-system/commit/fe01ed5f2b7a1cf745fbaff3f46e08c0f6ce81eb))





## [5.0.18](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@5.0.16...@pluralsight/ps-design-system-viewtoggle@5.0.18) (2020-01-22)

**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle





## [5.0.16](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@5.0.14...@pluralsight/ps-design-system-viewtoggle@5.0.16) (2020-01-22)

**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle





## [5.0.14](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@5.0.12...@pluralsight/ps-design-system-viewtoggle@5.0.14) (2020-01-22)

**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle





## [5.0.12](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@5.0.11...@pluralsight/ps-design-system-viewtoggle@5.0.12) (2020-01-22)

**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle





## [5.0.11](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@5.0.10...@pluralsight/ps-design-system-viewtoggle@5.0.11) (2020-01-17)

**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle





## [5.0.10](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@5.0.9...@pluralsight/ps-design-system-viewtoggle@5.0.10) (2020-01-16)

**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle





## [5.0.9](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@5.0.8...@pluralsight/ps-design-system-viewtoggle@5.0.9) (2020-01-14)

**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle





## [5.0.7](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@5.0.6...@pluralsight/ps-design-system-viewtoggle@5.0.7) (2019-12-19)

**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle





## [5.0.6](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@5.0.5...@pluralsight/ps-design-system-viewtoggle@5.0.6) (2019-12-18)

**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle





## [5.0.5](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@5.0.4...@pluralsight/ps-design-system-viewtoggle@5.0.5) (2019-12-17)

**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle





## [5.0.4](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@5.0.3...@pluralsight/ps-design-system-viewtoggle@5.0.4) (2019-12-16)


### Bug Fixes

* linting errors cleanup ([3ca1954](https://github.com/pluralsight/design-system/commit/3ca1954965fb2e6376a7e58f7281b183dfe70577))





## [5.0.3](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@5.0.2...@pluralsight/ps-design-system-viewtoggle@5.0.3) (2019-12-05)

**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle





## [5.0.2](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@5.0.1...@pluralsight/ps-design-system-viewtoggle@5.0.2) (2019-12-02)

**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle





## [5.0.1](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@5.0.0...@pluralsight/ps-design-system-viewtoggle@5.0.1) (2019-11-06)


### Bug Fixes

* revert react dep ([c8d1a5a](https://github.com/pluralsight/design-system/commit/c8d1a5a5456e99e9cee64c9ccd8b1a98d0642ac0))





# [5.0.0](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@4.0.6...@pluralsight/ps-design-system-viewtoggle@5.0.0) (2019-11-04)


### Code Refactoring

* **core:** esm refactor ([02d5928](https://github.com/pluralsight/design-system/commit/02d5928))
* **viewtoggle:** esm export refactor ([e4121b1](https://github.com/pluralsight/design-system/commit/e4121b1))


### BREAKING CHANGES

* **viewtoggle:** import pattern
* **core:** import patterns





## [4.0.6](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@4.0.5...@pluralsight/ps-design-system-viewtoggle@4.0.6) (2019-10-21)

**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle





## [4.0.5](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@4.0.4...@pluralsight/ps-design-system-viewtoggle@4.0.5) (2019-10-09)

**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle





## [4.0.4](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@4.0.3...@pluralsight/ps-design-system-viewtoggle@4.0.4) (2019-10-04)

**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle





## [4.0.3](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@4.0.2...@pluralsight/ps-design-system-viewtoggle@4.0.3) (2019-10-02)

**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle





## [4.0.2](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@4.0.1...@pluralsight/ps-design-system-viewtoggle@4.0.2) (2019-09-17)

**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle





## [4.0.1](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@4.0.0...@pluralsight/ps-design-system-viewtoggle@4.0.1) (2019-08-26)


### Bug Fixes

* **viewtoggle:** error that happens when the active option is removed ([ad13efc](https://github.com/pluralsight/design-system/commit/ad13efc))





# [4.0.0](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@3.0.0...@pluralsight/ps-design-system-viewtoggle@4.0.0) (2019-08-09)


### Bug Fixes

* **viewtoggle:** dep range character ([e62529a](https://github.com/pluralsight/design-system/commit/e62529a))


### Build System

* **viewtoggle:** move theme package to peerDeps ([26ed7d7](https://github.com/pluralsight/design-system/commit/26ed7d7))


### BREAKING CHANGES

* **viewtoggle:** @pluralsight/ps-design-system-theme is now a peerDependency and
must be installed separately





# [3.0.0](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@2.0.12...@pluralsight/ps-design-system-viewtoggle@3.0.0) (2019-08-06)


### Bug Fixes

* **viewtoggle:** active item bg on initial render ([936dd82](https://github.com/pluralsight/design-system/commit/936dd82))


### Code Refactoring

* **viewtoggle:** change onSelect param order ([7607cd0](https://github.com/pluralsight/design-system/commit/7607cd0))


### Features

* **viewtoggle:** use hooks and forward refs ([99237ad](https://github.com/pluralsight/design-system/commit/99237ad))


### Performance Improvements

* **viewtoggle:** memoize initial index lookup ([33eea39](https://github.com/pluralsight/design-system/commit/33eea39))


### BREAKING CHANGES

* **viewtoggle:** onSelect param order changed. the Event is the first parameter and the option index
is the second
* **viewtoggle:** latest react (v16.8.6) is now a requirement





## [2.0.12](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@2.0.11...@pluralsight/ps-design-system-viewtoggle@2.0.12) (2019-07-30)

**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle





## [2.0.11](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@2.0.10...@pluralsight/ps-design-system-viewtoggle@2.0.11) (2019-07-30)

**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle





## [2.0.10](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@2.0.9...@pluralsight/ps-design-system-viewtoggle@2.0.10) (2019-07-18)

**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle





## [2.0.9](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@2.0.8...@pluralsight/ps-design-system-viewtoggle@2.0.9) (2019-06-03)

**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle





## [2.0.8](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@2.0.7...@pluralsight/ps-design-system-viewtoggle@2.0.8) (2019-05-31)

**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle





## [2.0.7](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@2.0.6...@pluralsight/ps-design-system-viewtoggle@2.0.7) (2019-05-14)

**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle





## [2.0.6](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@2.0.5...@pluralsight/ps-design-system-viewtoggle@2.0.6) (2019-05-01)

**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle





## [2.0.5](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@2.0.4...@pluralsight/ps-design-system-viewtoggle@2.0.5) (2019-04-24)

**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle





## [2.0.4](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@2.0.3...@pluralsight/ps-design-system-viewtoggle@2.0.4) (2019-04-23)


### Bug Fixes

* dependency range ([e6e59f9](https://github.com/pluralsight/design-system/commit/e6e59f9))





## [2.0.3](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@2.0.2...@pluralsight/ps-design-system-viewtoggle@2.0.3) (2019-04-08)

**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle





## [2.0.2](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@2.0.1...@pluralsight/ps-design-system-viewtoggle@2.0.2) (2019-03-20)

**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle





## [2.0.1](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@2.0.0...@pluralsight/ps-design-system-viewtoggle@2.0.1) (2019-03-12)

**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle





# [2.0.0](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@1.3.26...@pluralsight/ps-design-system-viewtoggle@2.0.0) (2019-03-04)


### Features

* **theme:** forward refs ([5946706](https://github.com/pluralsight/design-system/commit/5946706))


### BREAKING CHANGES

* **theme:** bump to react 16.3 to use forwardrefs api





## [1.3.26](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@1.3.25...@pluralsight/ps-design-system-viewtoggle@1.3.26) (2019-02-12)

**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle





## [1.3.25](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@1.3.24...@pluralsight/ps-design-system-viewtoggle@1.3.25) (2019-01-08)

**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle





## [1.3.24](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@1.3.23...@pluralsight/ps-design-system-viewtoggle@1.3.24) (2019-01-02)

**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle





## [1.3.23](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@1.3.22...@pluralsight/ps-design-system-viewtoggle@1.3.23) (2018-12-21)

**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle





## [1.3.22](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@1.3.20...@pluralsight/ps-design-system-viewtoggle@1.3.22) (2018-12-20)

**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle





## [1.3.21](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@1.3.20...@pluralsight/ps-design-system-viewtoggle@1.3.21) (2018-12-20)

**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle





## [1.3.20](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@1.3.19...@pluralsight/ps-design-system-viewtoggle@1.3.20) (2018-12-14)

**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle





## [1.3.19](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@1.3.18...@pluralsight/ps-design-system-viewtoggle@1.3.19) (2018-11-30)

**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle





## [1.3.18](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@1.3.17...@pluralsight/ps-design-system-viewtoggle@1.3.18) (2018-11-14)

**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle





## [1.3.17](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@1.3.16...@pluralsight/ps-design-system-viewtoggle@1.3.17) (2018-11-14)

**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle





## [1.3.16](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@1.3.15...@pluralsight/ps-design-system-viewtoggle@1.3.16) (2018-11-14)

**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle





## [1.3.15](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@1.3.14...@pluralsight/ps-design-system-viewtoggle@1.3.15) (2018-11-09)


### Bug Fixes

* upgrade storybook and fix issues with require.context ([ba6a6e8](https://github.com/pluralsight/design-system/commit/ba6a6e8))





## [1.3.14](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@1.3.13...@pluralsight/ps-design-system-viewtoggle@1.3.14) (2018-10-31)

**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle





<a name="1.3.13"></a>
## [1.3.13](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@1.3.12...@pluralsight/ps-design-system-viewtoggle@1.3.13) (2018-10-31)




**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle

<a name="1.3.12"></a>
## [1.3.12](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@1.3.11...@pluralsight/ps-design-system-viewtoggle@1.3.12) (2018-10-10)




**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle

<a name="1.3.11"></a>
## [1.3.11](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@1.3.10...@pluralsight/ps-design-system-viewtoggle@1.3.11) (2018-09-25)




**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle

<a name="1.3.9"></a>
## [1.3.9](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@1.3.8...@pluralsight/ps-design-system-viewtoggle@1.3.9) (2018-07-31)




**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle

<a name="1.3.8"></a>
## [1.3.8](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@1.3.7...@pluralsight/ps-design-system-viewtoggle@1.3.8) (2018-07-30)




**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle

<a name="1.3.7"></a>
## [1.3.7](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@1.3.6...@pluralsight/ps-design-system-viewtoggle@1.3.7) (2018-07-26)




**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle

<a name="1.3.6"></a>
## [1.3.6](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@1.3.5...@pluralsight/ps-design-system-viewtoggle@1.3.6) (2018-07-09)




**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle

<a name="1.3.5"></a>
## [1.3.5](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@1.3.4...@pluralsight/ps-design-system-viewtoggle@1.3.5) (2018-06-26)




**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle

<a name="1.3.4"></a>
## [1.3.4](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@1.3.3...@pluralsight/ps-design-system-viewtoggle@1.3.4) (2018-06-26)




**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle

<a name="1.3.3"></a>
## [1.3.3](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@1.3.2...@pluralsight/ps-design-system-viewtoggle@1.3.3) (2018-06-19)




**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle

<a name="1.3.2"></a>
## [1.3.2](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@1.3.1...@pluralsight/ps-design-system-viewtoggle@1.3.2) (2018-06-14)


### Bug Fixes

* root index.js to not require compilation ([2316b0d](https://github.com/pluralsight/design-system/commit/2316b0d))




<a name="1.3.1"></a>
## [1.3.1](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@1.3.0...@pluralsight/ps-design-system-viewtoggle@1.3.1) (2018-06-05)




**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle

<a name="1.3.0"></a>
# [1.3.0](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@1.2.8...@pluralsight/ps-design-system-viewtoggle@1.3.0) (2018-05-21)


### Features

* add module entry for each component ([f3110da](https://github.com/pluralsight/design-system/commit/f3110da))




<a name="1.2.8"></a>
## [1.2.8](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@1.2.7...@pluralsight/ps-design-system-viewtoggle@1.2.8) (2018-05-09)




**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle

<a name="1.2.7"></a>
## [1.2.7](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@1.2.6...@pluralsight/ps-design-system-viewtoggle@1.2.7) (2018-04-19)




**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle

<a name="1.2.6"></a>
## [1.2.6](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@1.2.4...@pluralsight/ps-design-system-viewtoggle@1.2.6) (2018-04-14)




**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle

<a name="1.2.5"></a>
## [1.2.5](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@1.2.4...@pluralsight/ps-design-system-viewtoggle@1.2.5) (2018-04-09)




**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle

<a name="1.2.4"></a>
## [1.2.4](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@1.2.3...@pluralsight/ps-design-system-viewtoggle@1.2.4) (2018-03-27)




**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle

<a name="1.2.3"></a>
## [1.2.3](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@1.2.2...@pluralsight/ps-design-system-viewtoggle@1.2.3) (2018-03-09)




**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle

<a name="1.2.2"></a>
## [1.2.2](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@1.2.1...@pluralsight/ps-design-system-viewtoggle@1.2.2) (2018-03-06)




**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle

<a name="1.2.1"></a>
## [1.2.1](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@1.2.0...@pluralsight/ps-design-system-viewtoggle@1.2.1) (2018-02-23)




**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle

<a name="1.2.0"></a>
# [1.2.0](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@1.1.22...@pluralsight/ps-design-system-viewtoggle@1.2.0) (2018-02-13)


### Features

* **viewtoggle:** extract stylesheet ([eacc17c](https://github.com/pluralsight/design-system/commit/eacc17c))




<a name="1.1.22"></a>
## [1.1.22](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@1.1.21...@pluralsight/ps-design-system-viewtoggle@1.1.22) (2018-02-12)




**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle

<a name="1.1.21"></a>
## [1.1.21](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@1.1.20...@pluralsight/ps-design-system-viewtoggle@1.1.21) (2018-02-12)




**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle

<a name="1.1.20"></a>
## [1.1.20](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@1.1.19...@pluralsight/ps-design-system-viewtoggle@1.1.20) (2018-02-09)




**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle

<a name="1.1.19"></a>
## [1.1.19](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@1.1.18...@pluralsight/ps-design-system-viewtoggle@1.1.19) (2018-02-08)




**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle

<a name="1.1.18"></a>
## [1.1.18](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@1.1.17...@pluralsight/ps-design-system-viewtoggle@1.1.18) (2018-02-08)




**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle

<a name="1.1.17"></a>
## [1.1.17](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@1.1.16...@pluralsight/ps-design-system-viewtoggle@1.1.17) (2018-02-06)




**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle

<a name="1.1.16"></a>
## [1.1.16](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@1.1.15...@pluralsight/ps-design-system-viewtoggle@1.1.16) (2018-02-01)




**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle

<a name="1.1.15"></a>
## [1.1.15](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@1.1.14...@pluralsight/ps-design-system-viewtoggle@1.1.15) (2018-02-01)




**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle

<a name="1.1.14"></a>
## [1.1.14](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@1.1.13...@pluralsight/ps-design-system-viewtoggle@1.1.14) (2018-01-30)




**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle

<a name="1.1.13"></a>
## [1.1.13](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@1.1.11...@pluralsight/ps-design-system-viewtoggle@1.1.13) (2018-01-29)




**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle

<a name="1.1.12"></a>
## [1.1.12](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@1.1.11...@pluralsight/ps-design-system-viewtoggle@1.1.12) (2018-01-29)




**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle

<a name="1.1.11"></a>
## [1.1.11](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@1.1.9...@pluralsight/ps-design-system-viewtoggle@1.1.11) (2018-01-24)




**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle

<a name="1.1.10"></a>
## [1.1.10](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@1.1.9...@pluralsight/ps-design-system-viewtoggle@1.1.10) (2018-01-24)




**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle

<a name="1.1.9"></a>
## [1.1.9](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@1.1.8...@pluralsight/ps-design-system-viewtoggle@1.1.9) (2018-01-22)




**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle

<a name="1.1.8"></a>
## [1.1.8](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@1.1.7...@pluralsight/ps-design-system-viewtoggle@1.1.8) (2018-01-11)




**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle

<a name="1.1.7"></a>
## [1.1.7](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@1.1.6...@pluralsight/ps-design-system-viewtoggle@1.1.7) (2018-01-11)




**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle

<a name="1.1.6"></a>
## [1.1.6](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@1.1.5...@pluralsight/ps-design-system-viewtoggle@1.1.6) (2018-01-11)




**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle

<a name="1.1.5"></a>
## [1.1.5](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@1.1.4...@pluralsight/ps-design-system-viewtoggle@1.1.5) (2018-01-11)




**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle

<a name="1.1.4"></a>
## [1.1.4](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@1.1.3...@pluralsight/ps-design-system-viewtoggle@1.1.4) (2017-12-20)




**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle

<a name="1.1.3"></a>
## [1.1.3](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@1.1.2...@pluralsight/ps-design-system-viewtoggle@1.1.3) (2017-12-19)




**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle

<a name="1.1.2"></a>
## [1.1.2](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@1.1.1...@pluralsight/ps-design-system-viewtoggle@1.1.2) (2017-12-19)




**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle

<a name="1.1.1"></a>
## [1.1.1](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-viewtoggle@1.1.0...@pluralsight/ps-design-system-viewtoggle@1.1.1) (2017-12-18)




**Note:** Version bump only for package @pluralsight/ps-design-system-viewtoggle

<a name="1.1.0"></a>
# 1.1.0 (2017-12-13)


### Features

* **viewtoggle:** new component initial commit ([813dbfb](https://github.com/pluralsight/design-system/commit/813dbfb))
