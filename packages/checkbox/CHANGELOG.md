# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [10.0.0](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-checkbox@9.1.13...@pluralsight/ps-design-system-checkbox@10.0.0) (2021-07-26)


### Code Refactoring

* **checkbox:** convert to vanilla css; remove glamor; dashify ([46d4716](https://github.com/pluralsight/design-system/commit/46d4716044c58a8db8e9fe612d42cadfc2fcc5e4)), closes [#1859](https://github.com/pluralsight/design-system/issues/1859)


### BREAKING CHANGES

* **checkbox:** convert styles to vanilla css; requires bundling
* **checkbox:** dashify css selectors
* **checkbox:** move passed className prop to parent node (label)





## [9.1.13](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-checkbox@9.1.12...@pluralsight/ps-design-system-checkbox@9.1.13) (2021-06-28)

**Note:** Version bump only for package @pluralsight/ps-design-system-checkbox





## [9.1.12](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-checkbox@9.1.11...@pluralsight/ps-design-system-checkbox@9.1.12) (2021-06-22)

**Note:** Version bump only for package @pluralsight/ps-design-system-checkbox





## [9.1.11](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-checkbox@9.1.10...@pluralsight/ps-design-system-checkbox@9.1.11) (2021-06-22)

**Note:** Version bump only for package @pluralsight/ps-design-system-checkbox





## [9.1.10](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-checkbox@9.1.8...@pluralsight/ps-design-system-checkbox@9.1.10) (2021-06-22)

**Note:** Version bump only for package @pluralsight/ps-design-system-checkbox





## [9.1.9](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-checkbox@9.1.8...@pluralsight/ps-design-system-checkbox@9.1.9) (2021-06-18)

**Note:** Version bump only for package @pluralsight/ps-design-system-checkbox





## [9.1.8](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-checkbox@9.1.7...@pluralsight/ps-design-system-checkbox@9.1.8) (2021-06-18)

**Note:** Version bump only for package @pluralsight/ps-design-system-checkbox





## [9.1.7](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-checkbox@9.1.6...@pluralsight/ps-design-system-checkbox@9.1.7) (2021-06-10)

**Note:** Version bump only for package @pluralsight/ps-design-system-checkbox





## [9.1.6](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-checkbox@9.1.5...@pluralsight/ps-design-system-checkbox@9.1.6) (2021-06-10)

**Note:** Version bump only for package @pluralsight/ps-design-system-checkbox





## [9.1.5](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-checkbox@9.1.4...@pluralsight/ps-design-system-checkbox@9.1.5) (2021-06-08)

**Note:** Version bump only for package @pluralsight/ps-design-system-checkbox





## [9.1.4](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-checkbox@9.1.3...@pluralsight/ps-design-system-checkbox@9.1.4) (2021-05-28)

**Note:** Version bump only for package @pluralsight/ps-design-system-checkbox





## [9.1.3](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-checkbox@9.1.2...@pluralsight/ps-design-system-checkbox@9.1.3) (2021-05-26)


### Bug Fixes

* **checkbox:** set correct peer dependency on ps normalize ([1041545](https://github.com/pluralsight/design-system/commit/1041545bb876ec8306b6203f9acb3cdbb5bc73af))





## [9.1.2](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-checkbox@9.1.1...@pluralsight/ps-design-system-checkbox@9.1.2) (2021-05-20)

**Note:** Version bump only for package @pluralsight/ps-design-system-checkbox





## [9.1.1](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-checkbox@9.1.0...@pluralsight/ps-design-system-checkbox@9.1.1) (2021-04-30)

**Note:** Version bump only for package @pluralsight/ps-design-system-checkbox





# [9.1.0](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-checkbox@9.0.1...@pluralsight/ps-design-system-checkbox@9.1.0) (2021-04-20)


### Features

* **checkbox:** add style condition to conditional exports ([f31dd5b](https://github.com/pluralsight/design-system/commit/f31dd5bf85e4ddbb0fd7392e9b0900652fcfec81))
* **checkbox:** expose package.json in conditional exports ([d9438a0](https://github.com/pluralsight/design-system/commit/d9438a03b1f5f85c5fbb7abaa04c2951c851a2fe))





## [9.0.1](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-checkbox@9.0.0...@pluralsight/ps-design-system-checkbox@9.0.1) (2021-04-15)


### Bug Fixes

* **checkbox:** properly order the conditional exports in package ([7649cb0](https://github.com/pluralsight/design-system/commit/7649cb085a0cbb752c709d8f97d44965e585d57d))





# [9.0.0](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-checkbox@8.0.0...@pluralsight/ps-design-system-checkbox@9.0.0) (2021-04-14)


### Code Refactoring

* **checkbox:** add exports to package.json as alternate entry point ([c2ae36a](https://github.com/pluralsight/design-system/commit/c2ae36a75c487eff7c06a229e5743c4615e2bcc4))
* **checkbox:** convert to esm ([7904cae](https://github.com/pluralsight/design-system/commit/7904caeedfe627f8d0d07a83b15e431f5669a1bd))


### BREAKING CHANGES

* **checkbox:** add exports to package.json
* **checkbox:** Drop cjs; esm only; all in on tree shaking
* **checkbox:** Remove file imports (eg, packageName/react)





# [8.0.0](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-checkbox@7.1.7...@pluralsight/ps-design-system-checkbox@8.0.0) (2021-04-05)


### flexibility

* remove base from color scale & add parseToRgb ([#1696](https://github.com/pluralsight/design-system/issues/1696)) ([b5abe62](https://github.com/pluralsight/design-system/commit/b5abe62c164f47cde093b6fce1381af2cb47e21e))


### BREAKING CHANGES

* update color.base usages to color[6]

* feat(core): remove colorsBackgroundUtility.base update parseToRgb()
* switch colorsBackgroundUtility.base usage to

* feat(core): adds colorsBackgroundUtilityCsv

* test(core): update snapshot





## [7.1.7](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-checkbox@7.1.6...@pluralsight/ps-design-system-checkbox@7.1.7) (2021-03-31)

**Note:** Version bump only for package @pluralsight/ps-design-system-checkbox





## [7.1.6](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-checkbox@7.1.5...@pluralsight/ps-design-system-checkbox@7.1.6) (2021-03-23)

**Note:** Version bump only for package @pluralsight/ps-design-system-checkbox





## [7.1.5](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-checkbox@7.1.4...@pluralsight/ps-design-system-checkbox@7.1.5) (2021-03-17)

**Note:** Version bump only for package @pluralsight/ps-design-system-checkbox





## [7.1.4](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-checkbox@7.1.3...@pluralsight/ps-design-system-checkbox@7.1.4) (2021-03-11)

**Note:** Version bump only for package @pluralsight/ps-design-system-checkbox





## [7.1.3](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-checkbox@7.1.2...@pluralsight/ps-design-system-checkbox@7.1.3) (2021-02-25)


### Bug Fixes

* **checkbox:** update peerDep version ([d15efe8](https://github.com/pluralsight/design-system/commit/d15efe80fea58da7111fa9214bd5b648d7496de9))





## [7.1.2](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-checkbox@7.1.1...@pluralsight/ps-design-system-checkbox@7.1.2) (2021-02-16)

**Note:** Version bump only for package @pluralsight/ps-design-system-checkbox





## [7.1.1](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-checkbox@7.1.0...@pluralsight/ps-design-system-checkbox@7.1.1) (2021-02-16)

**Note:** Version bump only for package @pluralsight/ps-design-system-checkbox





# [7.1.0](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-checkbox@7.0.2...@pluralsight/ps-design-system-checkbox@7.1.0) (2021-02-11)

**Note:** Version bump only for package @pluralsight/ps-design-system-checkbox





## [7.0.2](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-checkbox@7.0.1...@pluralsight/ps-design-system-checkbox@7.0.2) (2021-02-04)

**Note:** Version bump only for package @pluralsight/ps-design-system-checkbox





## [7.0.1](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-checkbox@7.0.0...@pluralsight/ps-design-system-checkbox@7.0.1) (2021-02-01)

**Note:** Version bump only for package @pluralsight/ps-design-system-checkbox





# [7.0.0](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-checkbox@6.2.25...@pluralsight/ps-design-system-checkbox@7.0.0) (2021-01-25)


### Build System

* **checkbox:** update to react@17 ([68bfeca](https://github.com/pluralsight/design-system/commit/68bfeca9ee5ea1c23c3827507fc4a3eff0390ef1))


### BREAKING CHANGES

* **checkbox:** react@17 peerDependency upgrade





## [6.2.25](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-checkbox@6.2.24...@pluralsight/ps-design-system-checkbox@6.2.25) (2021-01-15)

**Note:** Version bump only for package @pluralsight/ps-design-system-checkbox





## [6.2.24](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-checkbox@6.2.23...@pluralsight/ps-design-system-checkbox@6.2.24) (2021-01-05)

**Note:** Version bump only for package @pluralsight/ps-design-system-checkbox





## [6.2.23](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-checkbox@6.2.22...@pluralsight/ps-design-system-checkbox@6.2.23) (2021-01-04)

**Note:** Version bump only for package @pluralsight/ps-design-system-checkbox





## [6.2.22](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-checkbox@6.2.21...@pluralsight/ps-design-system-checkbox@6.2.22) (2020-12-17)

**Note:** Version bump only for package @pluralsight/ps-design-system-checkbox





## [6.2.21](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-checkbox@6.2.20...@pluralsight/ps-design-system-checkbox@6.2.21) (2020-12-17)

**Note:** Version bump only for package @pluralsight/ps-design-system-checkbox





## [6.2.20](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-checkbox@6.2.19...@pluralsight/ps-design-system-checkbox@6.2.20) (2020-12-16)

**Note:** Version bump only for package @pluralsight/ps-design-system-checkbox





## [6.2.19](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-checkbox@6.2.18...@pluralsight/ps-design-system-checkbox@6.2.19) (2020-12-14)

**Note:** Version bump only for package @pluralsight/ps-design-system-checkbox





## [6.2.18](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-checkbox@6.2.17...@pluralsight/ps-design-system-checkbox@6.2.18) (2020-12-11)


### Bug Fixes

* test config syntax and lint errors ([37429b2](https://github.com/pluralsight/design-system/commit/37429b289e428500233a3954c5bf1bb96df852a6))





## [6.2.17](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-checkbox@6.2.16...@pluralsight/ps-design-system-checkbox@6.2.17) (2020-12-07)

**Note:** Version bump only for package @pluralsight/ps-design-system-checkbox





## [6.2.16](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-checkbox@6.2.15...@pluralsight/ps-design-system-checkbox@6.2.16) (2020-12-07)

**Note:** Version bump only for package @pluralsight/ps-design-system-checkbox





## [6.2.15](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-checkbox@6.2.14...@pluralsight/ps-design-system-checkbox@6.2.15) (2020-12-03)

**Note:** Version bump only for package @pluralsight/ps-design-system-checkbox





## [6.2.14](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-checkbox@6.2.13...@pluralsight/ps-design-system-checkbox@6.2.14) (2020-11-30)

**Note:** Version bump only for package @pluralsight/ps-design-system-checkbox





## [6.2.13](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-checkbox@6.2.12...@pluralsight/ps-design-system-checkbox@6.2.13) (2020-11-18)

**Note:** Version bump only for package @pluralsight/ps-design-system-checkbox





## [6.2.12](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-checkbox@6.2.11...@pluralsight/ps-design-system-checkbox@6.2.12) (2020-11-17)

**Note:** Version bump only for package @pluralsight/ps-design-system-checkbox





## [6.2.11](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-checkbox@6.2.10...@pluralsight/ps-design-system-checkbox@6.2.11) (2020-11-16)

**Note:** Version bump only for package @pluralsight/ps-design-system-checkbox





## [6.2.10](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-checkbox@6.2.9...@pluralsight/ps-design-system-checkbox@6.2.10) (2020-11-12)

**Note:** Version bump only for package @pluralsight/ps-design-system-checkbox





## [6.2.9](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-checkbox@6.2.8...@pluralsight/ps-design-system-checkbox@6.2.9) (2020-11-05)

**Note:** Version bump only for package @pluralsight/ps-design-system-checkbox





## [6.2.8](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-checkbox@6.2.7...@pluralsight/ps-design-system-checkbox@6.2.8) (2020-11-05)


### Bug Fixes

* **checkbox:** don't double toggle on space keypress ([d9d50af](https://github.com/pluralsight/design-system/commit/d9d50af3c38aae4a29b3d87a426341bb562804fe))





## [6.2.7](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-checkbox@6.2.6...@pluralsight/ps-design-system-checkbox@6.2.7) (2020-11-02)

**Note:** Version bump only for package @pluralsight/ps-design-system-checkbox





## [6.2.6](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-checkbox@6.2.5...@pluralsight/ps-design-system-checkbox@6.2.6) (2020-10-29)

**Note:** Version bump only for package @pluralsight/ps-design-system-checkbox





## [6.2.5](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-checkbox@6.2.4...@pluralsight/ps-design-system-checkbox@6.2.5) (2020-10-29)

**Note:** Version bump only for package @pluralsight/ps-design-system-checkbox





## [6.2.4](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-checkbox@6.2.3...@pluralsight/ps-design-system-checkbox@6.2.4) (2020-10-28)


### Bug Fixes

* **checkbox:** fix a11y by role markup ([72eb767](https://github.com/pluralsight/design-system/commit/72eb76739978d61a99c8c94ab1589a5d536ba85e))





## [6.2.3](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-checkbox@6.2.2...@pluralsight/ps-design-system-checkbox@6.2.3) (2020-10-26)

**Note:** Version bump only for package @pluralsight/ps-design-system-checkbox





## [6.2.2](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-checkbox@6.2.1...@pluralsight/ps-design-system-checkbox@6.2.2) (2020-10-20)


### Bug Fixes

* **checkbox:** type the omit call ([44a2482](https://github.com/pluralsight/design-system/commit/44a24824a349a260af0f0d7acc3ed6f4b2b43f6d))





## [6.2.1](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-checkbox@6.2.0...@pluralsight/ps-design-system-checkbox@6.2.1) (2020-10-13)

**Note:** Version bump only for package @pluralsight/ps-design-system-checkbox





# [6.2.0](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-checkbox@6.1.7...@pluralsight/ps-design-system-checkbox@6.2.0) (2020-10-13)

**Note:** Version bump only for package @pluralsight/ps-design-system-checkbox





## [6.1.7](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-checkbox@6.1.6...@pluralsight/ps-design-system-checkbox@6.1.7) (2020-10-13)

**Note:** Version bump only for package @pluralsight/ps-design-system-checkbox





## [6.1.6](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-checkbox@6.1.5...@pluralsight/ps-design-system-checkbox@6.1.6) (2020-10-08)

**Note:** Version bump only for package @pluralsight/ps-design-system-checkbox





## [6.1.5](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-checkbox@6.1.4...@pluralsight/ps-design-system-checkbox@6.1.5) (2020-10-08)

**Note:** Version bump only for package @pluralsight/ps-design-system-checkbox





## [6.1.4](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-checkbox@6.1.3...@pluralsight/ps-design-system-checkbox@6.1.4) (2020-10-08)

**Note:** Version bump only for package @pluralsight/ps-design-system-checkbox





## [6.1.3](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-checkbox@6.1.2...@pluralsight/ps-design-system-checkbox@6.1.3) (2020-09-17)

**Note:** Version bump only for package @pluralsight/ps-design-system-checkbox





## [6.1.2](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-checkbox@6.1.1...@pluralsight/ps-design-system-checkbox@6.1.2) (2020-09-15)

**Note:** Version bump only for package @pluralsight/ps-design-system-checkbox





## [6.1.1](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-checkbox@6.1.0...@pluralsight/ps-design-system-checkbox@6.1.1) (2020-09-14)

**Note:** Version bump only for package @pluralsight/ps-design-system-checkbox





# [6.1.0](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-checkbox@6.0.10...@pluralsight/ps-design-system-checkbox@6.1.0) (2020-08-25)


### Features

* disabled cursor styles ([#1115](https://github.com/pluralsight/design-system/issues/1115)) ([94fd04c](https://github.com/pluralsight/design-system/commit/94fd04c1751231573c06ad590c037c2cf9397d02))





## [6.0.10](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-checkbox@6.0.9...@pluralsight/ps-design-system-checkbox@6.0.10) (2020-08-10)

**Note:** Version bump only for package @pluralsight/ps-design-system-checkbox





## [6.0.9](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-checkbox@6.0.8...@pluralsight/ps-design-system-checkbox@6.0.9) (2020-07-17)

**Note:** Version bump only for package @pluralsight/ps-design-system-checkbox





## [6.0.8](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-checkbox@6.0.7...@pluralsight/ps-design-system-checkbox@6.0.8) (2020-05-07)


### Bug Fixes

* update normalize peer dependency ([cd5b8a4](https://github.com/pluralsight/design-system/commit/cd5b8a41aa231dc2f5102643a3dca9a772d9b5ae))





## [6.0.7](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-checkbox@6.0.6...@pluralsight/ps-design-system-checkbox@6.0.7) (2020-04-08)

**Note:** Version bump only for package @pluralsight/ps-design-system-checkbox





## [6.0.6](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-checkbox@6.0.5...@pluralsight/ps-design-system-checkbox@6.0.6) (2020-04-07)

**Note:** Version bump only for package @pluralsight/ps-design-system-checkbox





## [6.0.5](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-checkbox@6.0.4...@pluralsight/ps-design-system-checkbox@6.0.5) (2020-04-03)

**Note:** Version bump only for package @pluralsight/ps-design-system-checkbox





## [6.0.5](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-checkbox@6.0.4...@pluralsight/ps-design-system-checkbox@6.0.5) (2020-04-02)

**Note:** Version bump only for package @pluralsight/ps-design-system-checkbox





## [6.0.4](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-checkbox@6.0.3...@pluralsight/ps-design-system-checkbox@6.0.4) (2020-03-27)

**Note:** Version bump only for package @pluralsight/ps-design-system-checkbox





## [6.0.3](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-checkbox@6.0.2...@pluralsight/ps-design-system-checkbox@6.0.3) (2020-03-16)

**Note:** Version bump only for package @pluralsight/ps-design-system-checkbox





## [6.0.2](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-checkbox@6.0.1...@pluralsight/ps-design-system-checkbox@6.0.2) (2020-03-11)

**Note:** Version bump only for package @pluralsight/ps-design-system-checkbox





# [6.0.0](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-checkbox@5.1.4...@pluralsight/ps-design-system-checkbox@6.0.0) (2020-03-11)

**Note:** Version bump only for package @pluralsight/ps-design-system-checkbox





## [5.1.4](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-checkbox@5.1.3...@pluralsight/ps-design-system-checkbox@5.1.4) (2020-02-18)

**Note:** Version bump only for package @pluralsight/ps-design-system-checkbox





## [5.1.3](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-checkbox@5.1.2...@pluralsight/ps-design-system-checkbox@5.1.3) (2020-02-04)


### Bug Fixes

* named imports from core ([4ba16f5](https://github.com/pluralsight/design-system/commit/4ba16f548e665bdf86bf2a8e1875a1f58bceb33c))





## [5.1.2](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-checkbox@5.1.1...@pluralsight/ps-design-system-checkbox@5.1.2) (2020-01-30)

**Note:** Version bump only for package @pluralsight/ps-design-system-checkbox





## [5.1.1](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-checkbox@5.1.0...@pluralsight/ps-design-system-checkbox@5.1.1) (2020-01-29)

**Note:** Version bump only for package @pluralsight/ps-design-system-checkbox





# [5.1.0](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-checkbox@5.0.15...@pluralsight/ps-design-system-checkbox@5.1.0) (2020-01-22)


### Features

* **checkbox:** use 2020 colors ([7245c73](https://github.com/pluralsight/design-system/commit/7245c7362efd14ece4533a21b749bf1788b09f59))





## [5.0.15](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-checkbox@5.0.13...@pluralsight/ps-design-system-checkbox@5.0.15) (2020-01-22)

**Note:** Version bump only for package @pluralsight/ps-design-system-checkbox





## [5.0.13](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-checkbox@5.0.11...@pluralsight/ps-design-system-checkbox@5.0.13) (2020-01-22)

**Note:** Version bump only for package @pluralsight/ps-design-system-checkbox





## [5.0.11](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-checkbox@5.0.9...@pluralsight/ps-design-system-checkbox@5.0.11) (2020-01-22)

**Note:** Version bump only for package @pluralsight/ps-design-system-checkbox





## [5.0.9](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-checkbox@5.0.8...@pluralsight/ps-design-system-checkbox@5.0.9) (2020-01-22)

**Note:** Version bump only for package @pluralsight/ps-design-system-checkbox





## [5.0.8](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-checkbox@5.0.7...@pluralsight/ps-design-system-checkbox@5.0.8) (2020-01-17)

**Note:** Version bump only for package @pluralsight/ps-design-system-checkbox





## [5.0.7](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-checkbox@5.0.6...@pluralsight/ps-design-system-checkbox@5.0.7) (2020-01-16)

**Note:** Version bump only for package @pluralsight/ps-design-system-checkbox





## [5.0.6](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-checkbox@5.0.5...@pluralsight/ps-design-system-checkbox@5.0.6) (2020-01-14)

**Note:** Version bump only for package @pluralsight/ps-design-system-checkbox





## [5.0.4](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-checkbox@5.0.3...@pluralsight/ps-design-system-checkbox@5.0.4) (2019-12-18)

**Note:** Version bump only for package @pluralsight/ps-design-system-checkbox





## [5.0.3](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-checkbox@5.0.2...@pluralsight/ps-design-system-checkbox@5.0.3) (2019-12-16)


### Bug Fixes

* linting errors cleanup ([3ca1954](https://github.com/pluralsight/design-system/commit/3ca1954965fb2e6376a7e58f7281b183dfe70577))





## [5.0.2](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-checkbox@5.0.1...@pluralsight/ps-design-system-checkbox@5.0.2) (2019-12-05)

**Note:** Version bump only for package @pluralsight/ps-design-system-checkbox





## [5.0.1](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-checkbox@5.0.0...@pluralsight/ps-design-system-checkbox@5.0.1) (2019-11-06)


### Bug Fixes

* revert react dep ([c8d1a5a](https://github.com/pluralsight/design-system/commit/c8d1a5a5456e99e9cee64c9ccd8b1a98d0642ac0))





# [5.0.0](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-checkbox@4.1.1...@pluralsight/ps-design-system-checkbox@5.0.0) (2019-11-04)


### Code Refactoring

* **checkbox:** esm export refactor ([6465d79](https://github.com/pluralsight/design-system/commit/6465d79))
* **core:** esm refactor ([02d5928](https://github.com/pluralsight/design-system/commit/02d5928))
* **halo:** esm export refactor ([723a966](https://github.com/pluralsight/design-system/commit/723a966))
* **theme:** esm export refactor ([dee9f11](https://github.com/pluralsight/design-system/commit/dee9f11))


### BREAKING CHANGES

* **checkbox:** import pattern
* **halo:** import pattern
* **core:** import patterns
* **theme:** new import pattern





## [4.1.1](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-checkbox@4.1.0...@pluralsight/ps-design-system-checkbox@4.1.1) (2019-10-21)

**Note:** Version bump only for package @pluralsight/ps-design-system-checkbox





# [4.1.0](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-checkbox@4.0.2...@pluralsight/ps-design-system-checkbox@4.1.0) (2019-10-11)


### Features

* **checkbox:** add support for indeterminate attr ([bd76bcc](https://github.com/pluralsight/design-system/commit/bd76bcc))





## [4.0.2](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-checkbox@4.0.1...@pluralsight/ps-design-system-checkbox@4.0.2) (2019-10-02)

**Note:** Version bump only for package @pluralsight/ps-design-system-checkbox





## [4.0.1](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-checkbox@4.0.0...@pluralsight/ps-design-system-checkbox@4.0.1) (2019-09-17)

**Note:** Version bump only for package @pluralsight/ps-design-system-checkbox





# [4.0.0](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-checkbox@3.0.0...@pluralsight/ps-design-system-checkbox@4.0.0) (2019-08-09)


### Build System

* **checkbox:** move theme package to peerDeps ([620c5a3](https://github.com/pluralsight/design-system/commit/620c5a3))


### BREAKING CHANGES

* **checkbox:** @pluralsight/ps-design-system-theme is now a peerDependency and
must be installed separately





# [3.0.0](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-checkbox@2.0.3...@pluralsight/ps-design-system-checkbox@3.0.0) (2019-08-02)


### Code Refactoring

* **checkbox:** update ref forwarding and dynamically filter props ([0137735](https://github.com/pluralsight/design-system/commit/0137735))


### BREAKING CHANGES

* **checkbox:** remove innerRef prop support; use ref prop instead





## [2.0.3](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-checkbox@2.0.2...@pluralsight/ps-design-system-checkbox@2.0.3) (2019-07-30)

**Note:** Version bump only for package @pluralsight/ps-design-system-checkbox





## [2.0.2](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-checkbox@2.0.1...@pluralsight/ps-design-system-checkbox@2.0.2) (2019-07-18)

**Note:** Version bump only for package @pluralsight/ps-design-system-checkbox





## [2.0.1](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-checkbox@2.0.0...@pluralsight/ps-design-system-checkbox@2.0.1) (2019-06-03)

**Note:** Version bump only for package @pluralsight/ps-design-system-checkbox





# [2.0.0](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-checkbox@1.0.4...@pluralsight/ps-design-system-checkbox@2.0.0) (2019-05-31)


### Code Refactoring

* **checkbox:** use new theme context; update storybook config ([87e2492](https://github.com/pluralsight/design-system/commit/87e2492))


### BREAKING CHANGES

* **checkbox:** upgrade react peerDep to 16.8.6





## [1.0.4](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-checkbox@1.0.3...@pluralsight/ps-design-system-checkbox@1.0.4) (2019-05-14)

**Note:** Version bump only for package @pluralsight/ps-design-system-checkbox





## [1.0.3](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-checkbox@1.0.2...@pluralsight/ps-design-system-checkbox@1.0.3) (2019-04-24)

**Note:** Version bump only for package @pluralsight/ps-design-system-checkbox





## [1.0.2](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-checkbox@1.0.1...@pluralsight/ps-design-system-checkbox@1.0.2) (2019-04-23)


### Bug Fixes

* dependency range ([e6e59f9](https://github.com/pluralsight/design-system/commit/e6e59f9))





## [1.0.1](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-checkbox@1.0.0...@pluralsight/ps-design-system-checkbox@1.0.1) (2019-03-20)

**Note:** Version bump only for package @pluralsight/ps-design-system-checkbox





# [1.0.0](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-checkbox@0.3.19...@pluralsight/ps-design-system-checkbox@1.0.0) (2019-03-04)


### Features

* **theme:** forward refs ([5946706](https://github.com/pluralsight/design-system/commit/5946706))


### BREAKING CHANGES

* **theme:** bump to react 16.3 to use forwardrefs api





## [0.3.19](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-checkbox@0.3.18...@pluralsight/ps-design-system-checkbox@0.3.19) (2019-01-17)

**Note:** Version bump only for package @pluralsight/ps-design-system-checkbox





## [0.3.18](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-checkbox@0.3.16...@pluralsight/ps-design-system-checkbox@0.3.18) (2018-12-20)

**Note:** Version bump only for package @pluralsight/ps-design-system-checkbox





## [0.3.17](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-checkbox@0.3.16...@pluralsight/ps-design-system-checkbox@0.3.17) (2018-12-20)

**Note:** Version bump only for package @pluralsight/ps-design-system-checkbox





## [0.3.16](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-checkbox@0.3.15...@pluralsight/ps-design-system-checkbox@0.3.16) (2018-12-14)

**Note:** Version bump only for package @pluralsight/ps-design-system-checkbox





## [0.3.15](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-checkbox@0.3.14...@pluralsight/ps-design-system-checkbox@0.3.15) (2018-12-10)

**Note:** Version bump only for package @pluralsight/ps-design-system-checkbox





## [0.3.14](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-checkbox@0.3.13...@pluralsight/ps-design-system-checkbox@0.3.14) (2018-11-30)


### Bug Fixes

* **checkbox:** mark halo as inline; update snapshot ([3d107de](https://github.com/pluralsight/design-system/commit/3d107de))





## [0.3.13](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-checkbox@0.3.12...@pluralsight/ps-design-system-checkbox@0.3.13) (2018-11-14)

**Note:** Version bump only for package @pluralsight/ps-design-system-checkbox





## [0.3.12](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-checkbox@0.3.11...@pluralsight/ps-design-system-checkbox@0.3.12) (2018-11-14)

**Note:** Version bump only for package @pluralsight/ps-design-system-checkbox





## [0.3.11](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-checkbox@0.3.10...@pluralsight/ps-design-system-checkbox@0.3.11) (2018-11-14)

**Note:** Version bump only for package @pluralsight/ps-design-system-checkbox





## [0.3.10](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-checkbox@0.3.9...@pluralsight/ps-design-system-checkbox@0.3.10) (2018-11-09)


### Bug Fixes

* upgrade storybook and fix issues with require.context ([ba6a6e8](https://github.com/pluralsight/design-system/commit/ba6a6e8))





## [0.3.9](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-checkbox@0.3.8...@pluralsight/ps-design-system-checkbox@0.3.9) (2018-10-31)

**Note:** Version bump only for package @pluralsight/ps-design-system-checkbox





<a name="0.3.8"></a>
## [0.3.8](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-checkbox@0.3.7...@pluralsight/ps-design-system-checkbox@0.3.8) (2018-10-31)




**Note:** Version bump only for package @pluralsight/ps-design-system-checkbox

<a name="0.3.7"></a>
## [0.3.7](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-checkbox@0.3.6...@pluralsight/ps-design-system-checkbox@0.3.7) (2018-10-10)




**Note:** Version bump only for package @pluralsight/ps-design-system-checkbox

<a name="0.3.6"></a>
## [0.3.6](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-checkbox@0.3.5...@pluralsight/ps-design-system-checkbox@0.3.6) (2018-09-25)




**Note:** Version bump only for package @pluralsight/ps-design-system-checkbox

<a name="0.3.5"></a>
## [0.3.5](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-checkbox@0.3.4...@pluralsight/ps-design-system-checkbox@0.3.5) (2018-09-25)


### Bug Fixes

* **checkbox:** don't pass onCheck to input html ([811775a](https://github.com/pluralsight/design-system/commit/811775a)), closes [#264](https://github.com/pluralsight/design-system/issues/264)




<a name="0.3.3"></a>
## [0.3.3](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-checkbox@0.3.2...@pluralsight/ps-design-system-checkbox@0.3.3) (2018-07-31)




**Note:** Version bump only for package @pluralsight/ps-design-system-checkbox

<a name="0.3.2"></a>
## [0.3.2](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-checkbox@0.3.1...@pluralsight/ps-design-system-checkbox@0.3.2) (2018-07-30)




**Note:** Version bump only for package @pluralsight/ps-design-system-checkbox

<a name="0.3.1"></a>
## [0.3.1](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-checkbox@0.3.0...@pluralsight/ps-design-system-checkbox@0.3.1) (2018-07-26)




**Note:** Version bump only for package @pluralsight/ps-design-system-checkbox

<a name="0.3.0"></a>
# [0.3.0](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-checkbox@0.2.8...@pluralsight/ps-design-system-checkbox@0.3.0) (2018-07-10)


### Features

* **checkbox:** generate stylesheet in build ([d75b67e](https://github.com/pluralsight/design-system/commit/d75b67e))




<a name="0.2.8"></a>
## [0.2.8](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-checkbox@0.2.7...@pluralsight/ps-design-system-checkbox@0.2.8) (2018-07-09)




**Note:** Version bump only for package @pluralsight/ps-design-system-checkbox

<a name="0.2.7"></a>
## [0.2.7](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-checkbox@0.2.6...@pluralsight/ps-design-system-checkbox@0.2.7) (2018-06-26)




**Note:** Version bump only for package @pluralsight/ps-design-system-checkbox

<a name="0.2.6"></a>
## [0.2.6](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-checkbox@0.2.5...@pluralsight/ps-design-system-checkbox@0.2.6) (2018-06-26)


### Bug Fixes

* **checkbox:** fix build error ([212b189](https://github.com/pluralsight/design-system/commit/212b189))




<a name="0.2.5"></a>
## [0.2.5](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-checkbox@0.2.4...@pluralsight/ps-design-system-checkbox@0.2.5) (2018-06-20)




**Note:** Version bump only for package @pluralsight/ps-design-system-checkbox

<a name="0.2.4"></a>
## [0.2.4](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-checkbox@0.2.3...@pluralsight/ps-design-system-checkbox@0.2.4) (2018-06-19)


### Bug Fixes

* **checkbox:** check for onCheck function before calling ([313281e](https://github.com/pluralsight/design-system/commit/313281e))




<a name="0.2.3"></a>
## [0.2.3](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-checkbox@0.2.2...@pluralsight/ps-design-system-checkbox@0.2.3) (2018-06-14)


### Bug Fixes

* root index.js to not require compilation ([2316b0d](https://github.com/pluralsight/design-system/commit/2316b0d))




<a name="0.2.2"></a>
## [0.2.2](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-checkbox@0.2.1...@pluralsight/ps-design-system-checkbox@0.2.2) (2018-06-12)




**Note:** Version bump only for package @pluralsight/ps-design-system-checkbox

<a name="0.2.1"></a>
## [0.2.1](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-checkbox@0.2.0...@pluralsight/ps-design-system-checkbox@0.2.1) (2018-06-12)


### Bug Fixes

* **checkbox:** adjust dark theme border color ([62596e9](https://github.com/pluralsight/design-system/commit/62596e9))




<a name="0.2.0"></a>
# 0.2.0 (2018-06-12)


### Bug Fixes

* **checkbox:** click label, get focus ring on checkbox ([76c3d5e](https://github.com/pluralsight/design-system/commit/76c3d5e))


### Features

* **checkbox:** new component ([bb7a6ac](https://github.com/pluralsight/design-system/commit/bb7a6ac))
* **site:** add checkbox docs ([394534e](https://github.com/pluralsight/design-system/commit/394534e))
