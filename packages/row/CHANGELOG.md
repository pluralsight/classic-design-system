# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [15.1.13](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@15.1.12...@pluralsight/ps-design-system-row@15.1.13) (2021-06-22)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





## [15.1.12](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@15.1.10...@pluralsight/ps-design-system-row@15.1.12) (2021-06-22)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





## [15.1.11](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@15.1.10...@pluralsight/ps-design-system-row@15.1.11) (2021-06-18)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





## [15.1.10](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@15.1.9...@pluralsight/ps-design-system-row@15.1.10) (2021-06-18)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





## [15.1.9](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@15.1.8...@pluralsight/ps-design-system-row@15.1.9) (2021-06-10)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





## [15.1.8](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@15.1.7...@pluralsight/ps-design-system-row@15.1.8) (2021-06-10)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





## [15.1.7](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@15.1.6...@pluralsight/ps-design-system-row@15.1.7) (2021-06-08)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





## [15.1.6](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@15.1.5...@pluralsight/ps-design-system-row@15.1.6) (2021-05-28)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





## [15.1.5](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@15.1.4...@pluralsight/ps-design-system-row@15.1.5) (2021-05-26)


### Bug Fixes

* **row:** set correct peer dependency on ps normalize ([3b70839](https://github.com/pluralsight/design-system/commit/3b70839be4caa94acce429d92a1565e12ce5f700))





## [15.1.4](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@15.1.3...@pluralsight/ps-design-system-row@15.1.4) (2021-05-20)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





## [15.1.3](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@15.1.2...@pluralsight/ps-design-system-row@15.1.3) (2021-04-30)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





## [15.1.2](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@15.1.1...@pluralsight/ps-design-system-row@15.1.2) (2021-04-28)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





## [15.1.1](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@15.1.0...@pluralsight/ps-design-system-row@15.1.1) (2021-04-28)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





# [15.1.0](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@15.0.1...@pluralsight/ps-design-system-row@15.1.0) (2021-04-20)


### Features

* **row:** add style condition to conditional exports ([8175c7b](https://github.com/pluralsight/design-system/commit/8175c7b366f29977ab4f32d27bffdf12f3458444))
* **row:** expose package.json in conditional exports ([963efbc](https://github.com/pluralsight/design-system/commit/963efbc451e8c6df4741232221ce75691688564f))





## [15.0.1](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@15.0.0...@pluralsight/ps-design-system-row@15.0.1) (2021-04-15)


### Bug Fixes

* **row:** properly order the conditional exports in package ([afc86f2](https://github.com/pluralsight/design-system/commit/afc86f2307a138f4ade5af44b53614b713becdd1))





# [15.0.0](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@14.0.0...@pluralsight/ps-design-system-row@15.0.0) (2021-04-14)


### Code Refactoring

* **row:** add exports to package.json as alternate entry point ([a20e741](https://github.com/pluralsight/design-system/commit/a20e741599466e72af4eb29912057bfc782ad255))
* **row:** convert to esm ([80c21b5](https://github.com/pluralsight/design-system/commit/80c21b5bd63b1b0be44c6c0d9b28414f24cc32a8))


### BREAKING CHANGES

* **row:** add exports to package.json
* **row:** Drop cjs; esm only; all in on tree shaking
* **row:** Remove file imports (eg, packageName/react)





# [14.0.0](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@13.0.7...@pluralsight/ps-design-system-row@14.0.0) (2021-04-05)


### flexibility

* remove base from color scale & add parseToRgb ([#1696](https://github.com/pluralsight/design-system/issues/1696)) ([b5abe62](https://github.com/pluralsight/design-system/commit/b5abe62c164f47cde093b6fce1381af2cb47e21e))


### BREAKING CHANGES

* update color.base usages to color[6]

* feat(core): remove colorsBackgroundUtility.base update parseToRgb()
* switch colorsBackgroundUtility.base usage to

* feat(core): adds colorsBackgroundUtilityCsv

* test(core): update snapshot





## [13.0.7](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@13.0.6...@pluralsight/ps-design-system-row@13.0.7) (2021-03-31)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





## [13.0.6](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@13.0.5...@pluralsight/ps-design-system-row@13.0.6) (2021-03-23)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





## [13.0.5](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@13.0.4...@pluralsight/ps-design-system-row@13.0.5) (2021-03-17)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





## [13.0.4](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@13.0.3...@pluralsight/ps-design-system-row@13.0.4) (2021-03-11)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





## [13.0.3](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@13.0.2...@pluralsight/ps-design-system-row@13.0.3) (2021-02-25)


### Bug Fixes

* **row:** update peerDep version ([0650b49](https://github.com/pluralsight/design-system/commit/0650b49fce2c89ee039a3031df2daf5486deb222))





## [13.0.2](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@13.0.1...@pluralsight/ps-design-system-row@13.0.2) (2021-02-16)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





## [13.0.1](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@13.0.0...@pluralsight/ps-design-system-row@13.0.1) (2021-02-16)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





# [13.0.0](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@12.1.0...@pluralsight/ps-design-system-row@13.0.0) (2021-02-16)


* new icon size and updated button (#1608) ([86a5acc](https://github.com/pluralsight/design-system/commit/86a5acc1be39c58dba78f3f563453b69ec851034)), closes [#1608](https://github.com/pluralsight/design-system/issues/1608)


### BREAKING CHANGES

* small is now xSmall please update your sizing

* refactor(docs): document additional icon size

* refactor(button): spacing tweaks to match designs

* test(button): update snapshots

Co-authored-by: Edward Irby <EdwardIrby@users.noreply.github.com>





# [12.1.0](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@12.0.2...@pluralsight/ps-design-system-row@12.1.0) (2021-02-11)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





## [12.0.2](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@12.0.1...@pluralsight/ps-design-system-row@12.0.2) (2021-02-04)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





## [12.0.1](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@12.0.0...@pluralsight/ps-design-system-row@12.0.1) (2021-02-01)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





# [12.0.0](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@11.0.13...@pluralsight/ps-design-system-row@12.0.0) (2021-01-25)


### Build System

* **row:** update to react@17 ([8578669](https://github.com/pluralsight/design-system/commit/857866953cd14b941681e128fc0026ed140c72b8))


### BREAKING CHANGES

* **row:** react@17 peerDependency upgrade





## [11.0.13](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@11.0.12...@pluralsight/ps-design-system-row@11.0.13) (2021-01-15)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





## [11.0.12](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@11.0.11...@pluralsight/ps-design-system-row@11.0.12) (2021-01-05)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





## [11.0.11](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@11.0.10...@pluralsight/ps-design-system-row@11.0.11) (2021-01-04)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





## [11.0.10](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@11.0.9...@pluralsight/ps-design-system-row@11.0.10) (2020-12-17)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





## [11.0.9](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@11.0.8...@pluralsight/ps-design-system-row@11.0.9) (2020-12-17)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





## [11.0.8](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@11.0.7...@pluralsight/ps-design-system-row@11.0.8) (2020-12-16)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





## [11.0.7](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@11.0.6...@pluralsight/ps-design-system-row@11.0.7) (2020-12-14)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





## [11.0.6](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@11.0.5...@pluralsight/ps-design-system-row@11.0.6) (2020-12-11)


### Bug Fixes

* test config syntax and lint errors ([37429b2](https://github.com/pluralsight/design-system/commit/37429b289e428500233a3954c5bf1bb96df852a6))





## [11.0.5](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@11.0.4...@pluralsight/ps-design-system-row@11.0.5) (2020-12-07)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





## [11.0.4](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@11.0.3...@pluralsight/ps-design-system-row@11.0.4) (2020-12-07)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





## [11.0.3](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@11.0.2...@pluralsight/ps-design-system-row@11.0.3) (2020-12-03)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





## [11.0.2](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@11.0.1...@pluralsight/ps-design-system-row@11.0.2) (2020-12-03)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





## [11.0.1](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@11.0.0...@pluralsight/ps-design-system-row@11.0.1) (2020-11-30)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





# [11.0.0](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@10.1.14...@pluralsight/ps-design-system-row@11.0.0) (2020-11-24)


* Feat/drawer rc conversion (#1472) ([01cc3ce](https://github.com/pluralsight/design-system/commit/01cc3ce200afa8117eca187c56a658425bd5f1be)), closes [#1472](https://github.com/pluralsight/design-system/issues/1472)


### BREAKING CHANGES

* see docs





## [10.1.14](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@10.1.13...@pluralsight/ps-design-system-row@10.1.14) (2020-11-18)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





## [10.1.13](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@10.1.12...@pluralsight/ps-design-system-row@10.1.13) (2020-11-17)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





## [10.1.12](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@10.1.11...@pluralsight/ps-design-system-row@10.1.12) (2020-11-16)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





## [10.1.11](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@10.1.10...@pluralsight/ps-design-system-row@10.1.11) (2020-11-13)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





## [10.1.10](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@10.1.9...@pluralsight/ps-design-system-row@10.1.10) (2020-11-12)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





## [10.1.9](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@10.1.8...@pluralsight/ps-design-system-row@10.1.9) (2020-11-05)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





## [10.1.8](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@10.1.7...@pluralsight/ps-design-system-row@10.1.8) (2020-11-05)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





## [10.1.7](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@10.1.6...@pluralsight/ps-design-system-row@10.1.7) (2020-11-02)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





## [10.1.6](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@10.1.5...@pluralsight/ps-design-system-row@10.1.6) (2020-10-29)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





## [10.1.5](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@10.1.4...@pluralsight/ps-design-system-row@10.1.5) (2020-10-29)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





## [10.1.4](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@10.1.3...@pluralsight/ps-design-system-row@10.1.4) (2020-10-28)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





## [10.1.3](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@10.1.2...@pluralsight/ps-design-system-row@10.1.3) (2020-10-26)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





## [10.1.2](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@10.1.1...@pluralsight/ps-design-system-row@10.1.2) (2020-10-20)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





## [10.1.1](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@10.1.0...@pluralsight/ps-design-system-row@10.1.1) (2020-10-13)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





# [10.1.0](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@10.0.33...@pluralsight/ps-design-system-row@10.1.0) (2020-10-13)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





## [10.0.33](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@10.0.32...@pluralsight/ps-design-system-row@10.0.33) (2020-10-13)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





## [10.0.33](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@10.0.31...@pluralsight/ps-design-system-row@10.0.33) (2020-10-09)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





## [10.0.32](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@10.0.31...@pluralsight/ps-design-system-row@10.0.32) (2020-10-09)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





## [10.0.31](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@10.0.30...@pluralsight/ps-design-system-row@10.0.31) (2020-10-08)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





## [10.0.30](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@10.0.29...@pluralsight/ps-design-system-row@10.0.30) (2020-10-08)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





## [10.0.29](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@10.0.28...@pluralsight/ps-design-system-row@10.0.29) (2020-10-08)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





## [10.0.28](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@10.0.27...@pluralsight/ps-design-system-row@10.0.28) (2020-09-28)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





## [10.0.27](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@10.0.26...@pluralsight/ps-design-system-row@10.0.27) (2020-09-17)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





## [10.0.26](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@10.0.25...@pluralsight/ps-design-system-row@10.0.26) (2020-09-15)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





## [10.0.25](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@10.0.24...@pluralsight/ps-design-system-row@10.0.25) (2020-09-14)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





## [10.0.24](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@10.0.23...@pluralsight/ps-design-system-row@10.0.24) (2020-09-09)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





## [10.0.23](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@10.0.22...@pluralsight/ps-design-system-row@10.0.23) (2020-08-31)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





## [10.0.22](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@10.0.21...@pluralsight/ps-design-system-row@10.0.22) (2020-08-25)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





## [10.0.21](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@10.0.20...@pluralsight/ps-design-system-row@10.0.21) (2020-08-13)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





## [10.0.20](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@10.0.19...@pluralsight/ps-design-system-row@10.0.20) (2020-08-11)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





## [10.0.19](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@10.0.18...@pluralsight/ps-design-system-row@10.0.19) (2020-08-10)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





## [10.0.18](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@10.0.17...@pluralsight/ps-design-system-row@10.0.18) (2020-08-06)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





## [10.0.17](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@10.0.16...@pluralsight/ps-design-system-row@10.0.17) (2020-07-22)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





## [10.0.16](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@10.0.15...@pluralsight/ps-design-system-row@10.0.16) (2020-07-17)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





## [10.0.15](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@10.0.14...@pluralsight/ps-design-system-row@10.0.15) (2020-06-17)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





## [10.0.14](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@10.0.13...@pluralsight/ps-design-system-row@10.0.14) (2020-05-19)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





## [10.0.13](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@10.0.12...@pluralsight/ps-design-system-row@10.0.13) (2020-05-14)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





## [10.0.12](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@10.0.11...@pluralsight/ps-design-system-row@10.0.12) (2020-05-07)


### Bug Fixes

* update normalize peer dependency ([cd5b8a4](https://github.com/pluralsight/design-system/commit/cd5b8a41aa231dc2f5102643a3dca9a772d9b5ae))





## [10.0.11](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@10.0.10...@pluralsight/ps-design-system-row@10.0.11) (2020-05-06)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





## [10.0.10](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@10.0.9...@pluralsight/ps-design-system-row@10.0.10) (2020-05-05)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





## [10.0.9](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@10.0.8...@pluralsight/ps-design-system-row@10.0.9) (2020-04-24)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





## [10.0.8](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@10.0.7...@pluralsight/ps-design-system-row@10.0.8) (2020-04-08)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





## [10.0.7](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@10.0.6...@pluralsight/ps-design-system-row@10.0.7) (2020-04-07)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





## [10.0.6](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@10.0.5...@pluralsight/ps-design-system-row@10.0.6) (2020-04-03)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





## [10.0.6](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@10.0.5...@pluralsight/ps-design-system-row@10.0.6) (2020-04-02)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





## [10.0.5](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@10.0.4...@pluralsight/ps-design-system-row@10.0.5) (2020-04-01)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





## [10.0.4](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@10.0.3...@pluralsight/ps-design-system-row@10.0.4) (2020-03-27)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





## [10.0.3](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@10.0.2...@pluralsight/ps-design-system-row@10.0.3) (2020-03-16)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





## [10.0.2](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@10.0.1...@pluralsight/ps-design-system-row@10.0.2) (2020-03-11)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





# [10.0.0](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@9.1.2...@pluralsight/ps-design-system-row@10.0.0) (2020-03-11)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





## [9.1.2](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@9.1.1...@pluralsight/ps-design-system-row@9.1.2) (2020-02-26)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





## [9.1.1](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@9.1.0...@pluralsight/ps-design-system-row@9.1.1) (2020-02-21)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





# [9.1.0](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@9.0.9...@pluralsight/ps-design-system-row@9.1.0) (2020-02-18)


### Features

* **button:** removes featureFlags consumer and old styles ([88046f4](https://github.com/pluralsight/design-system/commit/88046f4768f5d78dfa8c6b31b2fd756e700626ef))





## [9.0.9](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@9.0.8...@pluralsight/ps-design-system-row@9.0.9) (2020-02-18)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





## [9.0.8](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@9.0.7...@pluralsight/ps-design-system-row@9.0.8) (2020-02-07)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





## [9.0.7](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@9.0.6...@pluralsight/ps-design-system-row@9.0.7) (2020-02-04)


### Bug Fixes

* named imports from core ([4ba16f5](https://github.com/pluralsight/design-system/commit/4ba16f548e665bdf86bf2a8e1875a1f58bceb33c))





## [9.0.6](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@9.0.5...@pluralsight/ps-design-system-row@9.0.6) (2020-01-30)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





## [9.0.5](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@9.0.4...@pluralsight/ps-design-system-row@9.0.5) (2020-01-30)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





## [9.0.4](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@9.0.3...@pluralsight/ps-design-system-row@9.0.4) (2020-01-29)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





## [9.0.3](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@9.0.2...@pluralsight/ps-design-system-row@9.0.3) (2020-01-28)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





## [9.0.2](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@9.0.1...@pluralsight/ps-design-system-row@9.0.2) (2020-01-24)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





## [9.0.1](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@9.0.0...@pluralsight/ps-design-system-row@9.0.1) (2020-01-23)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





# [9.0.0](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@8.0.21...@pluralsight/ps-design-system-row@9.0.0) (2020-01-22)


### Code Refactoring

* **row:** remove Row.Action to make more flexible ([def3791](https://github.com/pluralsight/design-system/commit/def37917a1be07a62c4c4092e260e3aadf955da9))


### BREAKING CHANGES

* **row:** Remove Row.Action; use DS Button size="small"
appearance="flat instead





## [8.0.21](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@8.0.19...@pluralsight/ps-design-system-row@8.0.21) (2020-01-22)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





## [8.0.19](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@8.0.17...@pluralsight/ps-design-system-row@8.0.19) (2020-01-22)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





## [8.0.17](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@8.0.15...@pluralsight/ps-design-system-row@8.0.17) (2020-01-22)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





## [8.0.15](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@8.0.14...@pluralsight/ps-design-system-row@8.0.15) (2020-01-22)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





## [8.0.14](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@8.0.13...@pluralsight/ps-design-system-row@8.0.14) (2020-01-17)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





## [8.0.13](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@8.0.12...@pluralsight/ps-design-system-row@8.0.13) (2020-01-16)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





## [8.0.12](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@8.0.11...@pluralsight/ps-design-system-row@8.0.12) (2020-01-16)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





## [8.0.11](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@8.0.10...@pluralsight/ps-design-system-row@8.0.11) (2020-01-15)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





## [8.0.10](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@8.0.9...@pluralsight/ps-design-system-row@8.0.10) (2020-01-14)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





## [8.0.8](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@8.0.7...@pluralsight/ps-design-system-row@8.0.8) (2020-01-08)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





## [8.0.7](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@8.0.6...@pluralsight/ps-design-system-row@8.0.7) (2019-12-31)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





## [8.0.6](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@8.0.5...@pluralsight/ps-design-system-row@8.0.6) (2019-12-19)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





## [8.0.5](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@8.0.4...@pluralsight/ps-design-system-row@8.0.5) (2019-12-18)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





## [8.0.4](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@8.0.3...@pluralsight/ps-design-system-row@8.0.4) (2019-12-17)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





## [8.0.3](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@8.0.2...@pluralsight/ps-design-system-row@8.0.3) (2019-12-16)


### Bug Fixes

* missing js extensition eslint warnings ([bebf5d7](https://github.com/pluralsight/design-system/commit/bebf5d718290eb9e3a3cdf0e64ee5f1849226c89))





## [8.0.2](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@8.0.1...@pluralsight/ps-design-system-row@8.0.2) (2019-12-05)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





## [8.0.1](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@8.0.0...@pluralsight/ps-design-system-row@8.0.1) (2019-12-05)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





# [8.0.0](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@7.0.2...@pluralsight/ps-design-system-row@8.0.0) (2019-12-02)


### Features

* **icon:** named icon exports and cli util ([15e1e08](https://github.com/pluralsight/design-system/commit/15e1e08a8f04ac6a0aa2bf3cf78efeb412cd6dd6))


### BREAKING CHANGES

* **icon:** Icons must be refactored to used Named exports inatad of id prop. Please see docs for example





## [7.0.2](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@7.0.1...@pluralsight/ps-design-system-row@7.0.2) (2019-11-06)


### Bug Fixes

* revert react dep ([c8d1a5a](https://github.com/pluralsight/design-system/commit/c8d1a5a5456e99e9cee64c9ccd8b1a98d0642ac0))





## [7.0.1](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@7.0.0...@pluralsight/ps-design-system-row@7.0.1) (2019-11-06)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





# [7.0.0](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@6.0.9...@pluralsight/ps-design-system-row@7.0.0) (2019-11-04)


### Code Refactoring

* **core:** esm refactor ([02d5928](https://github.com/pluralsight/design-system/commit/02d5928))
* **drawer:** esm export refactor ([125ac4d](https://github.com/pluralsight/design-system/commit/125ac4d))
* **row:** esm export refactor ([f9a865e](https://github.com/pluralsight/design-system/commit/f9a865e))
* **theme:** esm export refactor ([dee9f11](https://github.com/pluralsight/design-system/commit/dee9f11))
* **util:** esm export ([55cbd9d](https://github.com/pluralsight/design-system/commit/55cbd9d))


### BREAKING CHANGES

* **row:** import pattern
* **drawer:** import pattern
* **util:** import patterns
* **core:** import patterns
* **theme:** new import pattern





## [6.0.9](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@6.0.8...@pluralsight/ps-design-system-row@6.0.9) (2019-10-21)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





## [6.0.8](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@6.0.7...@pluralsight/ps-design-system-row@6.0.8) (2019-10-09)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





## [6.0.7](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@6.0.6...@pluralsight/ps-design-system-row@6.0.7) (2019-10-04)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





## [6.0.6](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@6.0.5...@pluralsight/ps-design-system-row@6.0.6) (2019-10-02)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





## [6.0.5](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@6.0.4...@pluralsight/ps-design-system-row@6.0.5) (2019-09-24)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





## [6.0.4](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@6.0.3...@pluralsight/ps-design-system-row@6.0.4) (2019-09-17)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





## [6.0.3](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@6.0.2...@pluralsight/ps-design-system-row@6.0.3) (2019-09-05)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





## [6.0.2](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@6.0.1...@pluralsight/ps-design-system-row@6.0.2) (2019-09-05)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





## [6.0.1](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@6.0.0...@pluralsight/ps-design-system-row@6.0.1) (2019-08-28)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





# [6.0.0](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@5.0.14...@pluralsight/ps-design-system-row@6.0.0) (2019-08-09)


### Build System

* **row:** move theme package to peerDeps ([ab7d074](https://github.com/pluralsight/design-system/commit/ab7d074))


### BREAKING CHANGES

* **row:** @pluralsight/ps-design-system-theme is now a peerDependency and
must be installed separately





## [5.0.14](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@5.0.13...@pluralsight/ps-design-system-row@5.0.14) (2019-08-02)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





## [5.0.13](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@5.0.12...@pluralsight/ps-design-system-row@5.0.13) (2019-07-30)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





## [5.0.12](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@5.0.11...@pluralsight/ps-design-system-row@5.0.12) (2019-07-30)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





## [5.0.11](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@5.0.10...@pluralsight/ps-design-system-row@5.0.11) (2019-07-18)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





## [5.0.10](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@5.0.9...@pluralsight/ps-design-system-row@5.0.10) (2019-06-20)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





## [5.0.9](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@5.0.8...@pluralsight/ps-design-system-row@5.0.9) (2019-06-03)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





## [5.0.8](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@5.0.7...@pluralsight/ps-design-system-row@5.0.8) (2019-05-31)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





## [5.0.7](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@5.0.6...@pluralsight/ps-design-system-row@5.0.7) (2019-05-31)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





## [5.0.6](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@5.0.5...@pluralsight/ps-design-system-row@5.0.6) (2019-05-22)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





## [5.0.5](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@5.0.4...@pluralsight/ps-design-system-row@5.0.5) (2019-05-20)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





## [5.0.4](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@5.0.3...@pluralsight/ps-design-system-row@5.0.4) (2019-05-14)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





## [5.0.3](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@5.0.2...@pluralsight/ps-design-system-row@5.0.3) (2019-05-07)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





## [5.0.2](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@5.0.1...@pluralsight/ps-design-system-row@5.0.2) (2019-05-02)


### Bug Fixes

* **row:** issues with safari and matchmedia ([892b97e](https://github.com/pluralsight/design-system/commit/892b97e))





## [5.0.1](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@5.0.0...@pluralsight/ps-design-system-row@5.0.1) (2019-05-01)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





# [5.0.0](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@4.1.0...@pluralsight/ps-design-system-row@5.0.0) (2019-04-24)


### Features

* **row:** change size depending on viewport ([97c7776](https://github.com/pluralsight/design-system/commit/97c7776))


### BREAKING CHANGES

* **row:** React v16.8 required. size will change depending on the viewport width





# [4.1.0](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@4.0.3...@pluralsight/ps-design-system-row@4.1.0) (2019-04-23)


### Bug Fixes

* dependency range ([e6e59f9](https://github.com/pluralsight/design-system/commit/e6e59f9))


### Features

* **row:** allow title truncation ([4274c8b](https://github.com/pluralsight/design-system/commit/4274c8b))
* **row:** truncation/shave component ([dfcafae](https://github.com/pluralsight/design-system/commit/dfcafae))





## [4.0.3](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@4.0.2...@pluralsight/ps-design-system-row@4.0.3) (2019-04-08)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





## [4.0.2](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@4.0.1...@pluralsight/ps-design-system-row@4.0.2) (2019-03-20)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





## [4.0.1](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@4.0.0...@pluralsight/ps-design-system-row@4.0.1) (2019-03-12)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





# [4.0.0](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@3.1.1...@pluralsight/ps-design-system-row@4.0.0) (2019-03-04)


### Code Refactoring

* **row:** convert action to functional component ([dbd3861](https://github.com/pluralsight/design-system/commit/dbd3861))


### Features

* **theme:** forward refs ([5946706](https://github.com/pluralsight/design-system/commit/5946706))


### BREAKING CHANGES

* **row:** update to use forwardRef
* **theme:** bump to react 16.3 to use forwardrefs api





## [3.1.1](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@3.1.0...@pluralsight/ps-design-system-row@3.1.1) (2019-02-12)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





# [3.1.0](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@3.0.6...@pluralsight/ps-design-system-row@3.1.0) (2019-01-29)


### Features

* **row:** Row.Action should support a ref ([3944446](https://github.com/pluralsight/design-system/commit/3944446))





## [3.0.6](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@3.0.5...@pluralsight/ps-design-system-row@3.0.6) (2019-01-17)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





## [3.0.5](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@3.0.4...@pluralsight/ps-design-system-row@3.0.5) (2019-01-08)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





## [3.0.4](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@3.0.3...@pluralsight/ps-design-system-row@3.0.4) (2019-01-02)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





## [3.0.3](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@3.0.2...@pluralsight/ps-design-system-row@3.0.3) (2018-12-21)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





## [3.0.2](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@3.0.0...@pluralsight/ps-design-system-row@3.0.2) (2018-12-20)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





## [3.0.1](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@3.0.0...@pluralsight/ps-design-system-row@3.0.1) (2018-12-20)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





# [3.0.0](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@2.6.25...@pluralsight/ps-design-system-row@3.0.0) (2018-12-14)


### Bug Fixes

* **row:** fullOverlay can be any react element ([2b39556](https://github.com/pluralsight/design-system/commit/2b39556))
* **row:** remove debug style ([1b05440](https://github.com/pluralsight/design-system/commit/1b05440))
* **row:** remove overlay/icon color override ([05f5ce2](https://github.com/pluralsight/design-system/commit/05f5ce2))
* **row:** use the correct classes for theming ([52b10d9](https://github.com/pluralsight/design-system/commit/52b10d9))


### Code Refactoring

* **row:** remove glamorous ([5ed2416](https://github.com/pluralsight/design-system/commit/5ed2416))


### Features

* **row:** light theme support ([4c80747](https://github.com/pluralsight/design-system/commit/4c80747))


### BREAKING CHANGES

* **row:** the `css` prop that is provided by glamorous is no longer supported





## [2.6.25](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@2.6.24...@pluralsight/ps-design-system-row@2.6.25) (2018-12-10)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





## [2.6.24](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@2.6.23...@pluralsight/ps-design-system-row@2.6.24) (2018-11-30)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





## [2.6.23](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@2.6.22...@pluralsight/ps-design-system-row@2.6.23) (2018-11-27)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





## [2.6.22](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@2.6.21...@pluralsight/ps-design-system-row@2.6.22) (2018-11-15)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





## [2.6.21](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@2.6.20...@pluralsight/ps-design-system-row@2.6.21) (2018-11-14)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





## [2.6.20](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@2.6.19...@pluralsight/ps-design-system-row@2.6.20) (2018-11-14)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





## [2.6.19](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@2.6.18...@pluralsight/ps-design-system-row@2.6.19) (2018-11-14)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





## [2.6.18](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@2.6.17...@pluralsight/ps-design-system-row@2.6.18) (2018-11-09)


### Bug Fixes

* upgrade storybook and fix issues with require.context ([ba6a6e8](https://github.com/pluralsight/design-system/commit/ba6a6e8))





## [2.6.17](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@2.6.16...@pluralsight/ps-design-system-row@2.6.17) (2018-10-31)

**Note:** Version bump only for package @pluralsight/ps-design-system-row





<a name="2.6.16"></a>
## [2.6.16](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@2.6.15...@pluralsight/ps-design-system-row@2.6.16) (2018-10-31)




**Note:** Version bump only for package @pluralsight/ps-design-system-row

<a name="2.6.15"></a>
## [2.6.15](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@2.6.14...@pluralsight/ps-design-system-row@2.6.15) (2018-10-10)




**Note:** Version bump only for package @pluralsight/ps-design-system-row

<a name="2.6.14"></a>
## [2.6.14](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@2.6.13...@pluralsight/ps-design-system-row@2.6.14) (2018-10-04)




**Note:** Version bump only for package @pluralsight/ps-design-system-row

<a name="2.6.13"></a>
## [2.6.13](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@2.6.12...@pluralsight/ps-design-system-row@2.6.13) (2018-10-04)




**Note:** Version bump only for package @pluralsight/ps-design-system-row

<a name="2.6.12"></a>
## [2.6.12](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@2.6.11...@pluralsight/ps-design-system-row@2.6.12) (2018-09-25)




**Note:** Version bump only for package @pluralsight/ps-design-system-row

<a name="2.6.10"></a>
## [2.6.10](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@2.6.9...@pluralsight/ps-design-system-row@2.6.10) (2018-07-31)




**Note:** Version bump only for package @pluralsight/ps-design-system-row

<a name="2.6.9"></a>
## [2.6.9](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@2.6.8...@pluralsight/ps-design-system-row@2.6.9) (2018-07-30)




**Note:** Version bump only for package @pluralsight/ps-design-system-row

<a name="2.6.8"></a>
## [2.6.8](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@2.6.7...@pluralsight/ps-design-system-row@2.6.8) (2018-07-26)




**Note:** Version bump only for package @pluralsight/ps-design-system-row

<a name="2.6.7"></a>
## [2.6.7](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@2.6.6...@pluralsight/ps-design-system-row@2.6.7) (2018-07-20)




**Note:** Version bump only for package @pluralsight/ps-design-system-row

<a name="2.6.6"></a>
## [2.6.6](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@2.6.5...@pluralsight/ps-design-system-row@2.6.6) (2018-07-09)




**Note:** Version bump only for package @pluralsight/ps-design-system-row

<a name="2.6.5"></a>
## [2.6.5](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@2.6.4...@pluralsight/ps-design-system-row@2.6.5) (2018-06-26)




**Note:** Version bump only for package @pluralsight/ps-design-system-row

<a name="2.6.4"></a>
## [2.6.4](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@2.6.3...@pluralsight/ps-design-system-row@2.6.4) (2018-06-26)




**Note:** Version bump only for package @pluralsight/ps-design-system-row

<a name="2.6.3"></a>
## [2.6.3](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@2.6.2...@pluralsight/ps-design-system-row@2.6.3) (2018-06-19)




**Note:** Version bump only for package @pluralsight/ps-design-system-row

<a name="2.6.2"></a>
## [2.6.2](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@2.6.1...@pluralsight/ps-design-system-row@2.6.2) (2018-06-14)


### Bug Fixes

* root index.js to not require compilation ([2316b0d](https://github.com/pluralsight/design-system/commit/2316b0d))




<a name="2.6.1"></a>
## [2.6.1](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@2.6.0...@pluralsight/ps-design-system-row@2.6.1) (2018-06-05)




**Note:** Version bump only for package @pluralsight/ps-design-system-row

<a name="2.6.0"></a>
# [2.6.0](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@2.5.9...@pluralsight/ps-design-system-row@2.6.0) (2018-05-21)


### Features

* add module entry for each component ([f3110da](https://github.com/pluralsight/design-system/commit/f3110da))




<a name="2.5.9"></a>
## [2.5.9](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@2.5.8...@pluralsight/ps-design-system-row@2.5.9) (2018-05-09)




**Note:** Version bump only for package @pluralsight/ps-design-system-row

<a name="2.5.8"></a>
## [2.5.8](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@2.5.7...@pluralsight/ps-design-system-row@2.5.8) (2018-04-24)




**Note:** Version bump only for package @pluralsight/ps-design-system-row

<a name="2.5.7"></a>
## [2.5.7](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@2.5.6...@pluralsight/ps-design-system-row@2.5.7) (2018-04-19)




**Note:** Version bump only for package @pluralsight/ps-design-system-row

<a name="2.5.6"></a>
## [2.5.6](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@2.5.4...@pluralsight/ps-design-system-row@2.5.6) (2018-04-14)




**Note:** Version bump only for package @pluralsight/ps-design-system-row

<a name="2.5.5"></a>
## [2.5.5](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@2.5.4...@pluralsight/ps-design-system-row@2.5.5) (2018-04-09)




**Note:** Version bump only for package @pluralsight/ps-design-system-row

<a name="2.5.4"></a>
## [2.5.4](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@2.5.3...@pluralsight/ps-design-system-row@2.5.4) (2018-03-27)




**Note:** Version bump only for package @pluralsight/ps-design-system-row

<a name="2.5.3"></a>
## [2.5.3](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@2.5.2...@pluralsight/ps-design-system-row@2.5.3) (2018-03-09)




**Note:** Version bump only for package @pluralsight/ps-design-system-row

<a name="2.5.2"></a>
## [2.5.2](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@2.5.1...@pluralsight/ps-design-system-row@2.5.2) (2018-03-06)




**Note:** Version bump only for package @pluralsight/ps-design-system-row

<a name="2.5.1"></a>
## [2.5.1](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@2.5.0...@pluralsight/ps-design-system-row@2.5.1) (2018-02-23)




**Note:** Version bump only for package @pluralsight/ps-design-system-row

<a name="2.5.0"></a>
# [2.5.0](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@2.4.21...@pluralsight/ps-design-system-row@2.5.0) (2018-02-14)


### Features

* **row:** extract stylesheet ([b2b4b6b](https://github.com/pluralsight/design-system/commit/b2b4b6b))




<a name="2.4.21"></a>
## [2.4.21](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@2.4.20...@pluralsight/ps-design-system-row@2.4.21) (2018-02-14)


### Bug Fixes

* **row:** ignore babelrc ([7a7b211](https://github.com/pluralsight/design-system/commit/7a7b211)), closes [#190](https://github.com/pluralsight/design-system/issues/190)




<a name="2.4.20"></a>
## [2.4.20](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@2.4.19...@pluralsight/ps-design-system-row@2.4.20) (2018-02-12)




**Note:** Version bump only for package @pluralsight/ps-design-system-row

<a name="2.4.19"></a>
## [2.4.19](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@2.4.18...@pluralsight/ps-design-system-row@2.4.19) (2018-02-12)




**Note:** Version bump only for package @pluralsight/ps-design-system-row

<a name="2.4.18"></a>
## [2.4.18](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@2.4.17...@pluralsight/ps-design-system-row@2.4.18) (2018-02-09)




**Note:** Version bump only for package @pluralsight/ps-design-system-row

<a name="2.4.17"></a>
## [2.4.17](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@2.4.16...@pluralsight/ps-design-system-row@2.4.17) (2018-02-08)




**Note:** Version bump only for package @pluralsight/ps-design-system-row

<a name="2.4.16"></a>
## [2.4.16](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@2.4.15...@pluralsight/ps-design-system-row@2.4.16) (2018-02-08)




**Note:** Version bump only for package @pluralsight/ps-design-system-row

<a name="2.4.15"></a>
## [2.4.15](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@2.4.14...@pluralsight/ps-design-system-row@2.4.15) (2018-02-06)




**Note:** Version bump only for package @pluralsight/ps-design-system-row

<a name="2.4.14"></a>
## [2.4.14](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@2.4.13...@pluralsight/ps-design-system-row@2.4.14) (2018-02-01)




**Note:** Version bump only for package @pluralsight/ps-design-system-row

<a name="2.4.13"></a>
## [2.4.13](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@2.4.12...@pluralsight/ps-design-system-row@2.4.13) (2018-02-01)




**Note:** Version bump only for package @pluralsight/ps-design-system-row

<a name="2.4.12"></a>
## [2.4.12](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@2.4.11...@pluralsight/ps-design-system-row@2.4.12) (2018-01-30)




**Note:** Version bump only for package @pluralsight/ps-design-system-row

<a name="2.4.11"></a>
## [2.4.11](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@2.4.9...@pluralsight/ps-design-system-row@2.4.11) (2018-01-29)




**Note:** Version bump only for package @pluralsight/ps-design-system-row

<a name="2.4.10"></a>
## [2.4.10](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@2.4.9...@pluralsight/ps-design-system-row@2.4.10) (2018-01-29)




**Note:** Version bump only for package @pluralsight/ps-design-system-row

<a name="2.4.9"></a>
## [2.4.9](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@2.4.8...@pluralsight/ps-design-system-row@2.4.9) (2018-01-26)




**Note:** Version bump only for package @pluralsight/ps-design-system-row

<a name="2.4.8"></a>
## [2.4.8](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@2.4.5...@pluralsight/ps-design-system-row@2.4.8) (2018-01-24)




**Note:** Version bump only for package @pluralsight/ps-design-system-row

<a name="2.4.7"></a>
## [2.4.7](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@2.4.6...@pluralsight/ps-design-system-row@2.4.7) (2018-01-24)




**Note:** Version bump only for package @pluralsight/ps-design-system-row

<a name="2.4.6"></a>
## [2.4.6](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@2.4.5...@pluralsight/ps-design-system-row@2.4.6) (2018-01-23)




**Note:** Version bump only for package @pluralsight/ps-design-system-row

<a name="2.4.5"></a>
## [2.4.5](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@2.4.4...@pluralsight/ps-design-system-row@2.4.5) (2018-01-22)




**Note:** Version bump only for package @pluralsight/ps-design-system-row

<a name="2.4.4"></a>
## [2.4.4](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@2.4.3...@pluralsight/ps-design-system-row@2.4.4) (2018-01-11)




**Note:** Version bump only for package @pluralsight/ps-design-system-row

<a name="2.4.3"></a>
## [2.4.3](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@2.4.2...@pluralsight/ps-design-system-row@2.4.3) (2018-01-11)




**Note:** Version bump only for package @pluralsight/ps-design-system-row

<a name="2.4.2"></a>
## [2.4.2](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@2.4.1...@pluralsight/ps-design-system-row@2.4.2) (2018-01-11)




**Note:** Version bump only for package @pluralsight/ps-design-system-row

<a name="2.4.1"></a>
## [2.4.1](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@2.4.0...@pluralsight/ps-design-system-row@2.4.1) (2018-01-11)




**Note:** Version bump only for package @pluralsight/ps-design-system-row

<a name="2.4.0"></a>
# [2.4.0](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@2.3.9...@pluralsight/ps-design-system-row@2.4.0) (2018-01-04)


### Features

* **row:** remove border top for first row ([39ef5a5](https://github.com/pluralsight/design-system/commit/39ef5a5))




<a name="2.3.9"></a>
## [2.3.9](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@2.3.8...@pluralsight/ps-design-system-row@2.3.9) (2017-12-20)




**Note:** Version bump only for package @pluralsight/ps-design-system-row

<a name="2.3.8"></a>
## [2.3.8](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@2.3.7...@pluralsight/ps-design-system-row@2.3.8) (2017-12-19)




**Note:** Version bump only for package @pluralsight/ps-design-system-row

<a name="2.3.7"></a>
## [2.3.7](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@2.3.6...@pluralsight/ps-design-system-row@2.3.7) (2017-12-19)




**Note:** Version bump only for package @pluralsight/ps-design-system-row

<a name="2.3.6"></a>
## [2.3.6](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@2.3.5...@pluralsight/ps-design-system-row@2.3.6) (2017-12-18)




**Note:** Version bump only for package @pluralsight/ps-design-system-row

<a name="2.3.5"></a>
## [2.3.5](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@2.3.4...@pluralsight/ps-design-system-row@2.3.5) (2017-12-13)




**Note:** Version bump only for package @pluralsight/ps-design-system-row

<a name="2.3.4"></a>
## [2.3.4](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@2.3.3...@pluralsight/ps-design-system-row@2.3.4) (2017-12-07)




**Note:** Version bump only for package @pluralsight/ps-design-system-row

<a name="2.3.3"></a>
## [2.3.3](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@2.3.2...@pluralsight/ps-design-system-row@2.3.3) (2017-12-06)


### Bug Fixes

* **row:** make default action bar color gray02 ([b0dec25](https://github.com/pluralsight/design-system/commit/b0dec25))
* **row:** vertically center action bar icons ([3618b35](https://github.com/pluralsight/design-system/commit/3618b35)), closes [#148](https://github.com/pluralsight/design-system/issues/148)




<a name="2.3.2"></a>
## [2.3.2](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@2.3.1...@pluralsight/ps-design-system-row@2.3.2) (2017-11-15)


### Bug Fixes

* **row:** prevent row image from shrinking ([#140](https://github.com/pluralsight/design-system/issues/140)) ([506fc61](https://github.com/pluralsight/design-system/commit/506fc61))




<a name="2.3.1"></a>
## [2.3.1](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@2.3.0...@pluralsight/ps-design-system-row@2.3.1) (2017-11-08)


### Bug Fixes

* **row:** show full overlay link on focus ([2943b9c](https://github.com/pluralsight/design-system/commit/2943b9c)), closes [#138](https://github.com/pluralsight/design-system/issues/138)




<a name="2.3.0"></a>
# [2.3.0](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@2.2.0...@pluralsight/ps-design-system-row@2.3.0) (2017-10-24)


### Features

* **row:** add missing proptypes ([cc09d6d](https://github.com/pluralsight/design-system/commit/cc09d6d))




<a name="2.2.0"></a>
# [2.2.0](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@2.1.0...@pluralsight/ps-design-system-row@2.2.0) (2017-10-22)


### Features

* put react[@16](https://github.com/16) in peerDependencies range ([2811029](https://github.com/pluralsight/design-system/commit/2811029))




<a name="2.1.0"></a>
# [2.1.0](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@2.0.3...@pluralsight/ps-design-system-row@2.1.0) (2017-10-22)


### Features

* **badge:** export statics separately ([1abe6d5](https://github.com/pluralsight/design-system/commit/1abe6d5))




<a name="2.0.3"></a>
## [2.0.3](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@2.0.2...@pluralsight/ps-design-system-row@2.0.3) (2017-10-19)




<a name="2.0.2"></a>
## [2.0.2](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@2.0.1...@pluralsight/ps-design-system-row@2.0.2) (2017-10-19)




<a name="2.0.1"></a>
## [2.0.1](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@2.0.0...@pluralsight/ps-design-system-row@2.0.1) (2017-10-19)




<a name="2.0.0"></a>
# [2.0.0](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@1.2.9...@pluralsight/ps-design-system-row@2.0.0) (2017-10-19)


### Code Refactoring

* **core:** adjust spacing var names ([ed80319](https://github.com/pluralsight/design-system/commit/ed80319))
* **core:** redo icon sizes ([52cf758](https://github.com/pluralsight/design-system/commit/52cf758))


### BREAKING CHANGES

* **core:** redo icon sizes
* **core:** spacing var name changes




<a name="1.2.9"></a>
## [1.2.9](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@1.2.8...@pluralsight/ps-design-system-row@1.2.9) (2017-10-03)


### Bug Fixes

* **button:** add missing polished dependency ([944a945](https://github.com/pluralsight/design-system/commit/944a945))




<a name="1.2.8"></a>
## [1.2.8](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@1.2.6...@pluralsight/ps-design-system-row@1.2.8) (2017-09-05)




<a name="1.2.7"></a>
## [1.2.7](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@1.2.3...@pluralsight/ps-design-system-row@1.2.7) (2017-09-05)




<a name="1.2.6"></a>
## [1.2.6](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@1.2.3...@pluralsight/ps-design-system-row@1.2.6) (2017-09-01)




<a name="1.2.5"></a>
## [1.2.5](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@1.2.3...@pluralsight/ps-design-system-row@1.2.5) (2017-09-01)




<a name="1.2.4"></a>
## [1.2.4](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@1.2.3...@pluralsight/ps-design-system-row@1.2.4) (2017-09-01)




<a name="1.2.3"></a>
## [1.2.3](https://github.com/pluralsight/design-system/compare/@pluralsight/ps-design-system-row@1.2.2...@pluralsight/ps-design-system-row@1.2.3) (2017-08-18)


### Bug Fixes

* **row:** rm copy-pasta changelog ([2e46214](https://github.com/pluralsight/design-system/commit/2e46214))
