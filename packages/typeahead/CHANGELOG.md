# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [10.0.9](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-typeahead@10.0.8...@pluralsight/ps-design-system-typeahead@10.0.9) (2021-06-08)

**Note:** Version bump only for package @pluralsight/ps-design-system-typeahead





## [10.0.8](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-typeahead@10.0.7...@pluralsight/ps-design-system-typeahead@10.0.8) (2021-05-28)

**Note:** Version bump only for package @pluralsight/ps-design-system-typeahead





## [10.0.7](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-typeahead@10.0.6...@pluralsight/ps-design-system-typeahead@10.0.7) (2021-05-26)


### Bug Fixes

* **typeahead:** set correct peer dependency on ps normalize ([0435e5b](https://github.com/pluralsight/design-system/commit/0435e5bc33dcc3eb494043881542d3d76396e61c))





## [10.0.6](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-typeahead@10.0.5...@pluralsight/ps-design-system-typeahead@10.0.6) (2021-05-21)

**Note:** Version bump only for package @pluralsight/ps-design-system-typeahead





## [10.0.5](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-typeahead@10.0.4...@pluralsight/ps-design-system-typeahead@10.0.5) (2021-05-20)

**Note:** Version bump only for package @pluralsight/ps-design-system-typeahead





## [10.0.4](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-typeahead@10.0.3...@pluralsight/ps-design-system-typeahead@10.0.4) (2021-04-30)

**Note:** Version bump only for package @pluralsight/ps-design-system-typeahead





## [10.0.3](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-typeahead@10.0.2...@pluralsight/ps-design-system-typeahead@10.0.3) (2021-04-28)

**Note:** Version bump only for package @pluralsight/ps-design-system-typeahead





## [10.0.2](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-typeahead@10.0.1...@pluralsight/ps-design-system-typeahead@10.0.2) (2021-04-28)

**Note:** Version bump only for package @pluralsight/ps-design-system-typeahead





## [10.0.1](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-typeahead@10.0.0...@pluralsight/ps-design-system-typeahead@10.0.1) (2021-04-27)

**Note:** Version bump only for package @pluralsight/ps-design-system-typeahead





# [10.0.0](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-typeahead@9.0.1...@pluralsight/ps-design-system-typeahead@10.0.0) (2021-04-20)


### Features

* **typeahead:** add style condition to conditional exports ([cf29837](https://github.com/pluralsight/design-system/commit/cf298379d6146119206c918f25db44af746d79ae))
* **typeahead:** expose package.json in conditional exports ([8ea3a54](https://github.com/pluralsight/design-system/commit/8ea3a544ebbd438f63a0b6961e6f3cca98eebed5))
* **typeahead:** refactor to use field and downshift ([#1706](https://github.com/pluralsight/design-system/issues/1706)) ([f4fafde](https://github.com/pluralsight/design-system/commit/f4fafde87d0fa987610881c90ab2c9965c87b07d))


### BREAKING CHANGES

* **typeahead:** value and selectedItem -> { value: React.ReactText label: React.ReactText }

* refactor(select): unifying list api
* **typeahead:** value and selectedItem -> { value: React.ReactText label: React.ReactText }

* refactor(typeahead): remove named react imports





## [9.0.1](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-typeahead@9.0.0...@pluralsight/ps-design-system-typeahead@9.0.1) (2021-04-15)


### Bug Fixes

* **typeahead:** properly order the conditional exports in package ([50179a4](https://github.com/pluralsight/design-system/commit/50179a408154bac15622b1a7e5214ab1038ecae0))





# [9.0.0](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-typeahead@8.0.0...@pluralsight/ps-design-system-typeahead@9.0.0) (2021-04-14)


### Code Refactoring

* **typeahead:** add exports to package.json as alternate entry point ([baa570e](https://github.com/pluralsight/design-system/commit/baa570e2074cdb743d6cacc4bfe109c8ace0148b))
* **typeahead:** convert to esm ([978b7f5](https://github.com/pluralsight/design-system/commit/978b7f5478038aa843724a1a8c6936996a8c1157))


### BREAKING CHANGES

* **typeahead:** add exports to package.json
* **typeahead:** Drop cjs; esm only; all in on tree shaking
* **typeahead:** Remove file imports (eg, packageName/react)





# [8.0.0](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-typeahead@7.1.8...@pluralsight/ps-design-system-typeahead@8.0.0) (2021-04-05)


### flexibility

* remove base from color scale & add parseToRgb ([#1696](https://github.com/pluralsight/design-system/issues/1696)) ([b5abe62](https://github.com/pluralsight/design-system/commit/b5abe62c164f47cde093b6fce1381af2cb47e21e))


### BREAKING CHANGES

* update color.base usages to color[6]

* feat(core): remove colorsBackgroundUtility.base update parseToRgb()
* switch colorsBackgroundUtility.base usage to

* feat(core): adds colorsBackgroundUtilityCsv

* test(core): update snapshot





## [7.1.8](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-typeahead@7.1.7...@pluralsight/ps-design-system-typeahead@7.1.8) (2021-03-31)

**Note:** Version bump only for package @pluralsight/ps-design-system-typeahead





## [7.1.7](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-typeahead@7.1.6...@pluralsight/ps-design-system-typeahead@7.1.7) (2021-03-23)

**Note:** Version bump only for package @pluralsight/ps-design-system-typeahead





## [7.1.6](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-typeahead@7.1.5...@pluralsight/ps-design-system-typeahead@7.1.6) (2021-03-17)

**Note:** Version bump only for package @pluralsight/ps-design-system-typeahead





## [7.1.5](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-typeahead@7.1.4...@pluralsight/ps-design-system-typeahead@7.1.5) (2021-03-11)


### Bug Fixes

* **typeahead:** add z-index to typeahead dropdown and update dropdown ([#1640](https://github.com/pluralsight/design-system/issues/1640)) ([a15b9d4](https://github.com/pluralsight/design-system/commit/a15b9d4db93cf17baa23f46732165dae42567d89))





## [7.1.4](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-typeahead@7.1.3...@pluralsight/ps-design-system-typeahead@7.1.4) (2021-02-25)


### Bug Fixes

* **typeahead:** update peerDep version ([0cd71f3](https://github.com/pluralsight/design-system/commit/0cd71f30da0d35fdf719b66db5aad1cfe950f4b9))





## [7.1.3](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-typeahead@7.1.2...@pluralsight/ps-design-system-typeahead@7.1.3) (2021-02-16)

**Note:** Version bump only for package @pluralsight/ps-design-system-typeahead





## [7.1.2](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-typeahead@7.1.1...@pluralsight/ps-design-system-typeahead@7.1.2) (2021-02-16)

**Note:** Version bump only for package @pluralsight/ps-design-system-typeahead





## [7.1.1](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-typeahead@7.1.0...@pluralsight/ps-design-system-typeahead@7.1.1) (2021-02-16)

**Note:** Version bump only for package @pluralsight/ps-design-system-typeahead





# [7.1.0](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-typeahead@7.0.2...@pluralsight/ps-design-system-typeahead@7.1.0) (2021-02-11)

**Note:** Version bump only for package @pluralsight/ps-design-system-typeahead





## [7.0.2](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-typeahead@7.0.1...@pluralsight/ps-design-system-typeahead@7.0.2) (2021-02-04)

**Note:** Version bump only for package @pluralsight/ps-design-system-typeahead





## [7.0.1](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-typeahead@7.0.0...@pluralsight/ps-design-system-typeahead@7.0.1) (2021-02-01)

**Note:** Version bump only for package @pluralsight/ps-design-system-typeahead





# [7.0.0](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-typeahead@6.0.10...@pluralsight/ps-design-system-typeahead@7.0.0) (2021-01-25)


### Build System

* **typeahead:** update to react@17 ([5304254](https://github.com/pluralsight/design-system/commit/530425410be718c103f21a39d9d8a62629ff74c8))


### BREAKING CHANGES

* **typeahead:** react@17 peerDependency upgrade





## [6.0.10](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-typeahead@6.0.9...@pluralsight/ps-design-system-typeahead@6.0.10) (2021-01-15)

**Note:** Version bump only for package @pluralsight/ps-design-system-typeahead





## [6.0.9](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-typeahead@6.0.8...@pluralsight/ps-design-system-typeahead@6.0.9) (2021-01-05)

**Note:** Version bump only for package @pluralsight/ps-design-system-typeahead





## [6.0.8](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-typeahead@6.0.7...@pluralsight/ps-design-system-typeahead@6.0.8) (2021-01-04)

**Note:** Version bump only for package @pluralsight/ps-design-system-typeahead





## [6.0.7](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-typeahead@6.0.6...@pluralsight/ps-design-system-typeahead@6.0.7) (2020-12-17)

**Note:** Version bump only for package @pluralsight/ps-design-system-typeahead





## [6.0.6](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-typeahead@6.0.5...@pluralsight/ps-design-system-typeahead@6.0.6) (2020-12-17)

**Note:** Version bump only for package @pluralsight/ps-design-system-typeahead





## [6.0.5](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-typeahead@6.0.4...@pluralsight/ps-design-system-typeahead@6.0.5) (2020-12-16)

**Note:** Version bump only for package @pluralsight/ps-design-system-typeahead





## [6.0.4](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-typeahead@6.0.3...@pluralsight/ps-design-system-typeahead@6.0.4) (2020-12-14)

**Note:** Version bump only for package @pluralsight/ps-design-system-typeahead





## [6.0.3](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-typeahead@6.0.2...@pluralsight/ps-design-system-typeahead@6.0.3) (2020-12-11)


### Bug Fixes

* test config syntax and lint errors ([37429b2](https://github.com/pluralsight/design-system/commit/37429b289e428500233a3954c5bf1bb96df852a6))





## [6.0.2](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-typeahead@6.0.1...@pluralsight/ps-design-system-typeahead@6.0.2) (2020-12-07)

**Note:** Version bump only for package @pluralsight/ps-design-system-typeahead





## [6.0.1](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-typeahead@6.0.0...@pluralsight/ps-design-system-typeahead@6.0.1) (2020-12-07)

**Note:** Version bump only for package @pluralsight/ps-design-system-typeahead





# [6.0.0](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-typeahead@5.0.13...@pluralsight/ps-design-system-typeahead@6.0.0) (2020-12-03)


* Feat/update error component (#1485) ([3bd45ef](https://github.com/pluralsight/design-system/commit/3bd45efa91aac5265525af191f10e59244289071)), closes [#1485](https://github.com/pluralsight/design-system/issues/1485)


### BREAKING CHANGES

* Named error pages only take size and href now

* fix(emptystate): remove default prop from generates icons

* fix: lint fixes

* docs: add small example to errors





## [5.0.13](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-typeahead@5.0.12...@pluralsight/ps-design-system-typeahead@5.0.13) (2020-11-30)

**Note:** Version bump only for package @pluralsight/ps-design-system-typeahead





## [5.0.12](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-typeahead@5.0.11...@pluralsight/ps-design-system-typeahead@5.0.12) (2020-11-24)

**Note:** Version bump only for package @pluralsight/ps-design-system-typeahead





## [5.0.11](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-typeahead@5.0.10...@pluralsight/ps-design-system-typeahead@5.0.11) (2020-11-18)

**Note:** Version bump only for package @pluralsight/ps-design-system-typeahead





## [5.0.10](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-typeahead@5.0.9...@pluralsight/ps-design-system-typeahead@5.0.10) (2020-11-17)

**Note:** Version bump only for package @pluralsight/ps-design-system-typeahead





## [5.0.9](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-typeahead@5.0.8...@pluralsight/ps-design-system-typeahead@5.0.9) (2020-11-16)


### Bug Fixes

* **typeahead:** allow selection with tab, enter and space keys ([f9a389c](https://github.com/pluralsight/design-system/commit/f9a389c8d4c2b1907c98154793a5295b50fe6a2e))





## [5.0.8](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-typeahead@5.0.7...@pluralsight/ps-design-system-typeahead@5.0.8) (2020-11-13)

**Note:** Version bump only for package @pluralsight/ps-design-system-typeahead





## [5.0.7](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-typeahead@5.0.6...@pluralsight/ps-design-system-typeahead@5.0.7) (2020-11-12)

**Note:** Version bump only for package @pluralsight/ps-design-system-typeahead





## [5.0.6](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-typeahead@5.0.5...@pluralsight/ps-design-system-typeahead@5.0.6) (2020-11-05)

**Note:** Version bump only for package @pluralsight/ps-design-system-typeahead





## [5.0.5](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-typeahead@5.0.4...@pluralsight/ps-design-system-typeahead@5.0.5) (2020-11-05)

**Note:** Version bump only for package @pluralsight/ps-design-system-typeahead





## [5.0.4](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-typeahead@5.0.3...@pluralsight/ps-design-system-typeahead@5.0.4) (2020-11-02)

**Note:** Version bump only for package @pluralsight/ps-design-system-typeahead





## [5.0.3](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-typeahead@5.0.2...@pluralsight/ps-design-system-typeahead@5.0.3) (2020-10-29)

**Note:** Version bump only for package @pluralsight/ps-design-system-typeahead





## [5.0.2](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-typeahead@5.0.1...@pluralsight/ps-design-system-typeahead@5.0.2) (2020-10-29)

**Note:** Version bump only for package @pluralsight/ps-design-system-typeahead





## [5.0.1](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-typeahead@5.0.0...@pluralsight/ps-design-system-typeahead@5.0.1) (2020-10-28)

**Note:** Version bump only for package @pluralsight/ps-design-system-typeahead





# [5.0.0](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-typeahead@4.2.2...@pluralsight/ps-design-system-typeahead@5.0.0) (2020-10-26)


* Feat/searchinput ts conversion (#1348) ([60df731](https://github.com/pluralsight/design-system/commit/60df731cf78abe60c82e9433ace844f0b32b1a6d)), closes [#1348](https://github.com/pluralsight/design-system/issues/1348)


### BREAKING CHANGES

* single element reference only

* feat(searchinput): fix typings

* feat(searchinput): update stories types

* feat(typeahead): use parentNode instead of second ref

* feat(searchinput): lint fix

* feat(searchinput): lint fix

Co-authored-by: Jake Trent <trent.jake@gmail.com>





## [4.2.2](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-typeahead@4.2.1...@pluralsight/ps-design-system-typeahead@4.2.2) (2020-10-20)

**Note:** Version bump only for package @pluralsight/ps-design-system-typeahead





## [4.2.1](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-typeahead@4.2.0...@pluralsight/ps-design-system-typeahead@4.2.1) (2020-10-13)

**Note:** Version bump only for package @pluralsight/ps-design-system-typeahead





# [4.2.0](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-typeahead@4.1.12...@pluralsight/ps-design-system-typeahead@4.2.0) (2020-10-13)

**Note:** Version bump only for package @pluralsight/ps-design-system-typeahead





## [4.1.12](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-typeahead@4.1.11...@pluralsight/ps-design-system-typeahead@4.1.12) (2020-10-13)

**Note:** Version bump only for package @pluralsight/ps-design-system-typeahead





## [4.1.12](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-typeahead@4.1.10...@pluralsight/ps-design-system-typeahead@4.1.12) (2020-10-09)

**Note:** Version bump only for package @pluralsight/ps-design-system-typeahead





## [4.1.11](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-typeahead@4.1.10...@pluralsight/ps-design-system-typeahead@4.1.11) (2020-10-09)

**Note:** Version bump only for package @pluralsight/ps-design-system-typeahead





## [4.1.10](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-typeahead@4.1.9...@pluralsight/ps-design-system-typeahead@4.1.10) (2020-10-08)

**Note:** Version bump only for package @pluralsight/ps-design-system-typeahead





## [4.1.9](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-typeahead@4.1.8...@pluralsight/ps-design-system-typeahead@4.1.9) (2020-10-08)

**Note:** Version bump only for package @pluralsight/ps-design-system-typeahead





## [4.1.8](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-typeahead@4.1.7...@pluralsight/ps-design-system-typeahead@4.1.8) (2020-10-08)

**Note:** Version bump only for package @pluralsight/ps-design-system-typeahead





## [4.1.7](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-typeahead@4.1.6...@pluralsight/ps-design-system-typeahead@4.1.7) (2020-10-08)

**Note:** Version bump only for package @pluralsight/ps-design-system-typeahead





## [4.1.6](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-typeahead@4.1.5...@pluralsight/ps-design-system-typeahead@4.1.6) (2020-09-28)

**Note:** Version bump only for package @pluralsight/ps-design-system-typeahead





## [4.1.5](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-typeahead@4.1.4...@pluralsight/ps-design-system-typeahead@4.1.5) (2020-09-21)

**Note:** Version bump only for package @pluralsight/ps-design-system-typeahead





## [4.1.4](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-typeahead@4.1.3...@pluralsight/ps-design-system-typeahead@4.1.4) (2020-09-17)

**Note:** Version bump only for package @pluralsight/ps-design-system-typeahead





## [4.1.3](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-typeahead@4.1.2...@pluralsight/ps-design-system-typeahead@4.1.3) (2020-09-15)

**Note:** Version bump only for package @pluralsight/ps-design-system-typeahead





## [4.1.2](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-typeahead@4.1.1...@pluralsight/ps-design-system-typeahead@4.1.2) (2020-09-14)

**Note:** Version bump only for package @pluralsight/ps-design-system-typeahead





## [4.1.1](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-typeahead@4.1.0...@pluralsight/ps-design-system-typeahead@4.1.1) (2020-09-09)

**Note:** Version bump only for package @pluralsight/ps-design-system-typeahead





# [4.1.0](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-typeahead@4.0.22...@pluralsight/ps-design-system-typeahead@4.1.0) (2020-08-25)


### Features

* disabled cursor styles ([#1115](https://github.com/pluralsight/design-system/issues/1115)) ([94fd04c](https://github.com/pluralsight/design-system/commit/94fd04c1751231573c06ad590c037c2cf9397d02))





## [4.0.22](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-typeahead@4.0.21...@pluralsight/ps-design-system-typeahead@4.0.22) (2020-08-13)

**Note:** Version bump only for package @pluralsight/ps-design-system-typeahead





## [4.0.21](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-typeahead@4.0.20...@pluralsight/ps-design-system-typeahead@4.0.21) (2020-08-10)

**Note:** Version bump only for package @pluralsight/ps-design-system-typeahead





## [4.0.20](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-typeahead@4.0.19...@pluralsight/ps-design-system-typeahead@4.0.20) (2020-08-06)

**Note:** Version bump only for package @pluralsight/ps-design-system-typeahead





## [4.0.19](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-typeahead@4.0.18...@pluralsight/ps-design-system-typeahead@4.0.19) (2020-07-17)

**Note:** Version bump only for package @pluralsight/ps-design-system-typeahead





## [4.0.18](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-typeahead@4.0.17...@pluralsight/ps-design-system-typeahead@4.0.18) (2020-07-15)

**Note:** Version bump only for package @pluralsight/ps-design-system-typeahead





## [4.0.17](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-typeahead@4.0.16...@pluralsight/ps-design-system-typeahead@4.0.17) (2020-07-02)

**Note:** Version bump only for package @pluralsight/ps-design-system-typeahead





## [4.0.16](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-typeahead@4.0.15...@pluralsight/ps-design-system-typeahead@4.0.16) (2020-06-25)

**Note:** Version bump only for package @pluralsight/ps-design-system-typeahead





## [4.0.15](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-typeahead@4.0.14...@pluralsight/ps-design-system-typeahead@4.0.15) (2020-05-19)

**Note:** Version bump only for package @pluralsight/ps-design-system-typeahead





## [4.0.14](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-typeahead@4.0.13...@pluralsight/ps-design-system-typeahead@4.0.14) (2020-05-14)

**Note:** Version bump only for package @pluralsight/ps-design-system-typeahead





## [4.0.13](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-typeahead@4.0.12...@pluralsight/ps-design-system-typeahead@4.0.13) (2020-05-07)


### Bug Fixes

* update normalize peer dependency ([cd5b8a4](https://github.com/pluralsight/design-system/commit/cd5b8a41aa231dc2f5102643a3dca9a772d9b5ae))





## [4.0.12](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-typeahead@4.0.11...@pluralsight/ps-design-system-typeahead@4.0.12) (2020-05-06)

**Note:** Version bump only for package @pluralsight/ps-design-system-typeahead





## [4.0.11](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-typeahead@4.0.10...@pluralsight/ps-design-system-typeahead@4.0.11) (2020-05-05)

**Note:** Version bump only for package @pluralsight/ps-design-system-typeahead





## [4.0.10](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-typeahead@4.0.9...@pluralsight/ps-design-system-typeahead@4.0.10) (2020-05-05)

**Note:** Version bump only for package @pluralsight/ps-design-system-typeahead





## [4.0.9](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-typeahead@4.0.8...@pluralsight/ps-design-system-typeahead@4.0.9) (2020-04-24)

**Note:** Version bump only for package @pluralsight/ps-design-system-typeahead





## [4.0.8](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-typeahead@4.0.7...@pluralsight/ps-design-system-typeahead@4.0.8) (2020-04-08)

**Note:** Version bump only for package @pluralsight/ps-design-system-typeahead





## [4.0.7](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-typeahead@4.0.6...@pluralsight/ps-design-system-typeahead@4.0.7) (2020-04-07)

**Note:** Version bump only for package @pluralsight/ps-design-system-typeahead





## [4.0.6](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-typeahead@4.0.5...@pluralsight/ps-design-system-typeahead@4.0.6) (2020-04-03)

**Note:** Version bump only for package @pluralsight/ps-design-system-typeahead





## [4.0.6](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-typeahead@4.0.5...@pluralsight/ps-design-system-typeahead@4.0.6) (2020-04-02)

**Note:** Version bump only for package @pluralsight/ps-design-system-typeahead





## [4.0.5](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-typeahead@4.0.4...@pluralsight/ps-design-system-typeahead@4.0.5) (2020-04-01)

**Note:** Version bump only for package @pluralsight/ps-design-system-typeahead





## [4.0.4](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-typeahead@4.0.3...@pluralsight/ps-design-system-typeahead@4.0.4) (2020-03-27)

**Note:** Version bump only for package @pluralsight/ps-design-system-typeahead





## [4.0.3](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-typeahead@4.0.2...@pluralsight/ps-design-system-typeahead@4.0.3) (2020-03-16)

**Note:** Version bump only for package @pluralsight/ps-design-system-typeahead





## [4.0.2](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-typeahead@4.0.1...@pluralsight/ps-design-system-typeahead@4.0.2) (2020-03-11)

**Note:** Version bump only for package @pluralsight/ps-design-system-typeahead





# [4.0.0](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-typeahead@3.3.12...@pluralsight/ps-design-system-typeahead@4.0.0) (2020-03-11)

**Note:** Version bump only for package @pluralsight/ps-design-system-typeahead





## [3.3.12](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-typeahead@3.3.11...@pluralsight/ps-design-system-typeahead@3.3.12) (2020-03-04)

**Note:** Version bump only for package @pluralsight/ps-design-system-typeahead





## [3.3.11](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-typeahead@3.3.10...@pluralsight/ps-design-system-typeahead@3.3.11) (2020-02-26)

**Note:** Version bump only for package @pluralsight/ps-design-system-typeahead





## [3.3.10](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-typeahead@3.3.9...@pluralsight/ps-design-system-typeahead@3.3.10) (2020-02-21)

**Note:** Version bump only for package @pluralsight/ps-design-system-typeahead





## [3.3.9](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-typeahead@3.3.8...@pluralsight/ps-design-system-typeahead@3.3.9) (2020-02-20)

**Note:** Version bump only for package @pluralsight/ps-design-system-typeahead





## [3.3.8](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-typeahead@3.3.7...@pluralsight/ps-design-system-typeahead@3.3.8) (2020-02-18)

**Note:** Version bump only for package @pluralsight/ps-design-system-typeahead





## [3.3.7](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-typeahead@3.3.6...@pluralsight/ps-design-system-typeahead@3.3.7) (2020-02-18)

**Note:** Version bump only for package @pluralsight/ps-design-system-typeahead





## [3.3.6](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-typeahead@3.3.5...@pluralsight/ps-design-system-typeahead@3.3.6) (2020-02-07)

**Note:** Version bump only for package @pluralsight/ps-design-system-typeahead





## [3.3.5](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-typeahead@3.3.4...@pluralsight/ps-design-system-typeahead@3.3.5) (2020-02-04)

**Note:** Version bump only for package @pluralsight/ps-design-system-typeahead





## [3.3.4](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-typeahead@3.3.3...@pluralsight/ps-design-system-typeahead@3.3.4) (2020-01-30)

**Note:** Version bump only for package @pluralsight/ps-design-system-typeahead





## [3.3.3](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-typeahead@3.3.2...@pluralsight/ps-design-system-typeahead@3.3.3) (2020-01-30)

**Note:** Version bump only for package @pluralsight/ps-design-system-typeahead





## [3.3.2](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-typeahead@3.3.1...@pluralsight/ps-design-system-typeahead@3.3.2) (2020-01-29)

**Note:** Version bump only for package @pluralsight/ps-design-system-typeahead





## [3.3.1](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-typeahead@3.3.0...@pluralsight/ps-design-system-typeahead@3.3.1) (2020-01-28)

**Note:** Version bump only for package @pluralsight/ps-design-system-typeahead





# [3.3.0](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-typeahead@3.2.17...@pluralsight/ps-design-system-typeahead@3.3.0) (2020-01-24)


### Features

* **typeahead:** apply 2020 colors ([63c2494](https://github.com/pluralsight/design-system/commit/63c2494cce166f63fa9dab1793063f6dd34e1171))





## [3.2.17](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-typeahead@3.2.16...@pluralsight/ps-design-system-typeahead@3.2.17) (2020-01-22)

**Note:** Version bump only for package @pluralsight/ps-design-system-typeahead





## [3.2.16](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-typeahead@3.2.14...@pluralsight/ps-design-system-typeahead@3.2.16) (2020-01-22)

**Note:** Version bump only for package @pluralsight/ps-design-system-typeahead





## [3.2.14](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-typeahead@3.2.12...@pluralsight/ps-design-system-typeahead@3.2.14) (2020-01-22)

**Note:** Version bump only for package @pluralsight/ps-design-system-typeahead





## [3.2.12](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-typeahead@3.2.10...@pluralsight/ps-design-system-typeahead@3.2.12) (2020-01-22)

**Note:** Version bump only for package @pluralsight/ps-design-system-typeahead





## [3.2.10](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-typeahead@3.2.9...@pluralsight/ps-design-system-typeahead@3.2.10) (2020-01-22)

**Note:** Version bump only for package @pluralsight/ps-design-system-typeahead





## [3.2.9](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-typeahead@3.2.8...@pluralsight/ps-design-system-typeahead@3.2.9) (2020-01-17)

**Note:** Version bump only for package @pluralsight/ps-design-system-typeahead





## [3.2.8](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-typeahead@3.2.7...@pluralsight/ps-design-system-typeahead@3.2.8) (2020-01-16)

**Note:** Version bump only for package @pluralsight/ps-design-system-typeahead





## [3.2.7](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-typeahead@3.2.6...@pluralsight/ps-design-system-typeahead@3.2.7) (2020-01-16)

**Note:** Version bump only for package @pluralsight/ps-design-system-typeahead





## [3.2.6](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-typeahead@3.2.5...@pluralsight/ps-design-system-typeahead@3.2.6) (2020-01-15)

**Note:** Version bump only for package @pluralsight/ps-design-system-typeahead





## [3.2.5](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-typeahead@3.2.4...@pluralsight/ps-design-system-typeahead@3.2.5) (2020-01-14)

**Note:** Version bump only for package @pluralsight/ps-design-system-typeahead





# [3.2.0](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-typeahead@3.1.3...@pluralsight/ps-design-system-typeahead@3.2.0) (2020-01-08)


### Features

* **typeahead:** keyboard list support ([ce2e26d](https://github.com/pluralsight/design-system/commit/ce2e26d0dd96fac51f7b676c955bfbfdf8cd24de))





## [3.1.3](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-typeahead@3.1.2...@pluralsight/ps-design-system-typeahead@3.1.3) (2019-12-19)

**Note:** Version bump only for package @pluralsight/ps-design-system-typeahead





## [3.1.2](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-typeahead@3.1.1...@pluralsight/ps-design-system-typeahead@3.1.2) (2019-12-18)

**Note:** Version bump only for package @pluralsight/ps-design-system-typeahead





## [3.1.1](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-typeahead@3.1.0...@pluralsight/ps-design-system-typeahead@3.1.1) (2019-12-17)

**Note:** Version bump only for package @pluralsight/ps-design-system-typeahead





# [3.1.0](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-typeahead@3.0.2...@pluralsight/ps-design-system-typeahead@3.1.0) (2019-12-16)


### Bug Fixes

* linting errors cleanup ([3ca1954](https://github.com/pluralsight/design-system/commit/3ca1954965fb2e6376a7e58f7281b183dfe70577))


### Features

* **typeahead:** position checkmark to right of lable ([97f0f3d](https://github.com/pluralsight/design-system/commit/97f0f3dc503df54bd3037e2311387f5489730223))





## [3.0.2](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-typeahead@3.0.1...@pluralsight/ps-design-system-typeahead@3.0.2) (2019-12-05)

**Note:** Version bump only for package @pluralsight/ps-design-system-typeahead





## [3.0.1](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-typeahead@3.0.0...@pluralsight/ps-design-system-typeahead@3.0.1) (2019-12-05)

**Note:** Version bump only for package @pluralsight/ps-design-system-typeahead





# [3.0.0](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-typeahead@2.0.3...@pluralsight/ps-design-system-typeahead@3.0.0) (2019-12-02)


### Features

* **icon:** named icon exports and cli util ([15e1e08](https://github.com/pluralsight/design-system/commit/15e1e08a8f04ac6a0aa2bf3cf78efeb412cd6dd6))


### BREAKING CHANGES

* **icon:** Icons must be refactored to used Named exports inatad of id prop. Please see docs for example





## [2.0.3](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-typeahead@2.0.2...@pluralsight/ps-design-system-typeahead@2.0.3) (2019-11-14)

**Note:** Version bump only for package @pluralsight/ps-design-system-typeahead





## [2.0.2](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-typeahead@2.0.1...@pluralsight/ps-design-system-typeahead@2.0.2) (2019-11-06)


### Bug Fixes

* revert react dep ([c8d1a5a](https://github.com/pluralsight/design-system/commit/c8d1a5a5456e99e9cee64c9ccd8b1a98d0642ac0))





## [2.0.1](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-typeahead@2.0.0...@pluralsight/ps-design-system-typeahead@2.0.1) (2019-11-06)

**Note:** Version bump only for package @pluralsight/ps-design-system-typeahead





# [2.0.0](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-typeahead@1.2.0...@pluralsight/ps-design-system-typeahead@2.0.0) (2019-11-04)


### Code Refactoring

* **core:** esm refactor ([02d5928](https://github.com/pluralsight/design-system/commit/02d5928))
* **position:** esm export refactor ([b66711a](https://github.com/pluralsight/design-system/commit/b66711a))
* **textinput:** esm export refactor ([3df387f](https://github.com/pluralsight/design-system/commit/3df387f))
* **typeahead:** esm export refactor ([d027b3c](https://github.com/pluralsight/design-system/commit/d027b3c))


### BREAKING CHANGES

* **typeahead:** import pattern
* **textinput:** import pattern
* **core:** import patterns
* **position:** new import pattern





# [1.2.0](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-typeahead@1.1.2...@pluralsight/ps-design-system-typeahead@1.2.0) (2019-10-22)


### Bug Fixes

* adds proptype checks ([89362f7](https://github.com/pluralsight/design-system/commit/89362f7))


### Features

* **textinput:** adds small size textinput ([edf5d2d](https://github.com/pluralsight/design-system/commit/edf5d2d))
* **typeahead:** adds small size typeahead ([c3cd0ff](https://github.com/pluralsight/design-system/commit/c3cd0ff))





## [1.1.2](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-typeahead@1.1.1...@pluralsight/ps-design-system-typeahead@1.1.2) (2019-10-21)

**Note:** Version bump only for package @pluralsight/ps-design-system-typeahead





## [1.1.1](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-typeahead@1.1.0...@pluralsight/ps-design-system-typeahead@1.1.1) (2019-10-10)


### Bug Fixes

* **typeahead:** guards for SSR ([9313e07](https://github.com/pluralsight/design-system/commit/9313e07))





# 1.1.0 (2019-10-09)


### Bug Fixes

* **typeahead:** issues with document click events now that we use portal ([04d195e](https://github.com/pluralsight/design-system/commit/04d195e))


### Features

* **typeahead:** allow a value on Suggestion, different than the label ([66d14c3](https://github.com/pluralsight/design-system/commit/66d14c3))
* **typeahead:** basic suggestion filtering ([cb9afa7](https://github.com/pluralsight/design-system/commit/cb9afa7))
* **typeahead:** on click outside hook ([e14ecbb](https://github.com/pluralsight/design-system/commit/e14ecbb))
* **typeahead:** position action menu in related to input field element ([d717468](https://github.com/pluralsight/design-system/commit/d717468))
* **typeahead:** remove ActionMenu and implement custom menu components ([e1312db](https://github.com/pluralsight/design-system/commit/e1312db))
* **typeahead:** render in portal and custom target ([813fad8](https://github.com/pluralsight/design-system/commit/813fad8))
* **typeahead:** scaffolding and component setup ([d1fc6cd](https://github.com/pluralsight/design-system/commit/d1fc6cd))
* **typeahead:** separate search from value ([fde4cc2](https://github.com/pluralsight/design-system/commit/fde4cc2))
* **typeahead:** show checkmark on selected value ([90675c4](https://github.com/pluralsight/design-system/commit/90675c4))
